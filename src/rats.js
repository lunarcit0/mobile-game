// Street rats that hunt the player, plus the pigeon's weapon: the poop bomb.
import * as THREE from 'three';
import { G, part, merge, vcMaterial } from './gfx.js';
import { LIMIT, BUILD, SIDEWALK, rng, rand, clamp, angleLerp } from './config.js';

const MAX_RATS = 12;
const SIGHT = 26;            // a rat that sees you from this far starts the attack
const LOSE = 48;             // ...and gives up when you get this far away
const ROAM_SPEED = 1.8;
const BITE_RANGE = 1.0;
const BITE_DMG = 8;
const BITE_COOLDOWN = 0.85;
const RAT_HP = 55;
const BOMB_DMG = 30;
const BOMB_COOLDOWN = 0.45;
const BOMB_SPEED = 22;
const GRAV = 16;
const RADIUS = 0.34;

function ratGeometry() {
  const fur = 0x62564d, dark = 0x41372f, pink = 0xe2a5a5;
  const p = [
    part(G.sphere, fur, [0, 0.17, 0], [0.15, 0.14, 0.3]),
    part(G.sphere, fur, [0, 0.2, 0.3], [0.1, 0.1, 0.14]),
    part(G.cone, dark, [0, 0.19, 0.47], [0.05, 0.15, 0.05], [Math.PI / 2, 0, 0]),
    part(G.sphere, pink, [0, 0.19, 0.55], [0.025, 0.025, 0.025]),
    part(G.sphere, pink, [0.075, 0.3, 0.25], [0.055, 0.065, 0.016], [0, 0.4, 0]),
    part(G.sphere, pink, [-0.075, 0.3, 0.25], [0.055, 0.065, 0.016], [0, -0.4, 0]),
    part(G.sphere, 0xff2a2a, [0.05, 0.235, 0.38], [0.022, 0.022, 0.022]),
    part(G.sphere, 0xff2a2a, [-0.05, 0.235, 0.38], [0.022, 0.022, 0.022]),
    part(G.box, 0xf4efe4, [0.012, 0.145, 0.505], [0.016, 0.03, 0.01]),
    part(G.box, 0xf4efe4, [-0.012, 0.145, 0.505], [0.016, 0.03, 0.01]),
    part(G.cyl, pink, [0, 0.12, -0.6], [0.017, 0.6, 0.017], [Math.PI / 2 - 0.12, 0, 0]),
  ];
  for (const sx of [-1, 1]) for (const z of [-0.14, 0.14]) p.push(part(G.box, dark, [sx * 0.1, 0.04, z], [0.045, 0.09, 0.07]));
  return merge(p);
}

export class Combat {
  /**
   * hooks: { audio, damage(n) -> void, killed(rat), alert(), crumbs(n) }
   */
  constructor(scene, world, player, hooks) {
    this.world = world; this.player = player; this.hooks = hooks;
    this.group = new THREE.Group(); scene.add(this.group);
    this.geo = ratGeometry();
    this.mat = vcMaterial({ roughness: 0.9 });
    this.rats = [];
    this.walls = world.colliders.boxes.filter((b) => b.h > 4);
    this.spawnT = 0;
    this.bombCD = 0;
    this.hp = 100; this.maxHp = 100; this.sinceHit = 99;
    this.kills = 0;
    this.alerted = false;

    // bomb pool
    const bg = new THREE.SphereGeometry(0.1, 10, 8);
    const bm = new THREE.MeshStandardMaterial({ color: 0xf6f3e8, roughness: 0.5, emissive: 0x6a7a55, emissiveIntensity: 0.35 });
    this.bombs = [];
    for (let i = 0; i < 10; i++) {
      const m = new THREE.Mesh(bg, bm); m.visible = false; m.castShadow = true;
      this.group.add(m); this.bombs.push({ m, live: false, vx: 0, vy: 0, vz: 0, t: 0 });
    }
    // splat pool
    const sg = new THREE.CircleGeometry(0.5, 14); sg.rotateX(-Math.PI / 2);
    this.splats = [];
    for (let i = 0; i < 24; i++) {
      const mat = new THREE.MeshBasicMaterial({ color: 0xf2efe2, transparent: true, opacity: 0, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
      const m = new THREE.Mesh(sg, mat); m.visible = false; this.group.add(m);
      this.splats.push({ m, t: 99 });
    }
    this.splatI = 0;

    for (let i = 0; i < 8; i++) this.spawnRat(true);
  }

  /* ----------------------------------------------------------- helpers */

  blocked(x, z, r = 0.25) {
    for (const b of this.world.colliders.boxes) {
      if (b.disabled || b.h < 0.5) continue;
      if (x > b.minX - r && x < b.maxX + r && z > b.minZ - r && z < b.maxZ + r) return true;
    }
    for (const o of this.world.colliders.circles) {
      const dx = x - o.x, dz = z - o.z, rr = o.r + r;
      if (dx * dx + dz * dz < rr * rr) return true;
    }
    return false;
  }

  /** Is there a building between a and b? (sampled; buildings are big) */
  sees(ax, az, bx, bz) {
    const d = Math.hypot(bx - ax, bz - az), n = Math.max(2, Math.ceil(d / 2));
    for (let i = 1; i < n; i++) {
      const x = ax + (bx - ax) * (i / n), z = az + (bz - az) * (i / n);
      for (const b of this.walls) if (x > b.minX && x < b.maxX && z > b.minZ && z < b.maxZ) return false;
    }
    return true;
  }

  push(r) {
    const c = this.world.colliders;
    for (const b of c.boxes) {
      if (b.disabled || b.h < 0.5) continue;
      const nx = clamp(r.x, b.minX, b.maxX), nz = clamp(r.z, b.minZ, b.maxZ);
      const dx = r.x - nx, dz = r.z - nz, d2 = dx * dx + dz * dz;
      if (d2 >= RADIUS * RADIUS) continue;
      if (d2 > 1e-8) { const d = Math.sqrt(d2); r.x = nx + (dx / d) * RADIUS; r.z = nz + (dz / d) * RADIUS; }
      else r.x = b.minX - RADIUS;
    }
    for (const o of c.circles) {
      const dx = r.x - o.x, dz = r.z - o.z, rr = o.r + RADIUS, d2 = dx * dx + dz * dz;
      if (d2 >= rr * rr || d2 < 1e-10) continue;
      const d = Math.sqrt(d2); r.x = o.x + (dx / d) * rr; r.z = o.z + (dz / d) * rr;
    }
    r.x = clamp(r.x, -LIMIT, LIMIT); r.z = clamp(r.z, -LIMIT, LIMIT);
  }

  /* ------------------------------------------------------------- rats */

  spawnRat(initial = false) {
    const p = this.player;
    for (let tries = 0; tries < 24; tries++) {
      let x, z;
      const subs = this.world.subways;
      if (subs.length && rng() < 0.4) {            // crawl up out of a subway entrance
        const s = subs[Math.floor(rng() * subs.length)];
        x = s.x + rand(-5, 5); z = s.z + rand(-5, 5);
      } else {
        const a = rng() * Math.PI * 2, d = initial ? rand(35, 95) : rand(32, 70);
        x = p.x + Math.cos(a) * d; z = p.z + Math.sin(a) * d;
      }
      if (Math.abs(x) > LIMIT - 2 || Math.abs(z) > LIMIT - 2) continue;
      const dp = Math.hypot(x - p.x, z - p.z);
      if (dp < (initial ? 35 : 30) || dp > 100) continue;
      if (this.blocked(x, z, 0.5)) continue;
      const mesh = new THREE.Mesh(this.geo, this.mat);
      mesh.scale.setScalar(1.9); mesh.castShadow = true;
      this.group.add(mesh);
      const rat = { mesh, x, z, y: this.world.groundHeight(x, z), yaw: rng() * 6.28, hp: RAT_HP, state: 'roam',
        t: rand(0.5, 2), turn: rand(-1, 1), biteCD: 0.3, wob: rng() * 10, spd: rand(5.8, 6.9), sightT: rng() * 0.3,
        kx: 0, kz: 0, vy: 0, lunge: 0, dead: 0, shown: true };
      this.rats.push(rat);
      return rat;
    }
    return null;
  }

  /** Test helper / gameplay: drop a rat at a given spot. */
  spawnAt(x, z) {
    const r = this.spawnRat(true);
    if (r) { r.x = x; r.z = z; r.y = this.world.groundHeight(x, z); }
    return r;
  }

  damageRat(r, dmg, fromX, fromZ) {
    if (r.state === 'dead') return;
    r.hp -= dmg;
    const dx = r.x - fromX, dz = r.z - fromZ, d = Math.hypot(dx, dz) || 1;
    r.kx = (dx / d) * 5; r.kz = (dz / d) * 5; r.vy = 2.5;
    this.hooks.audio.ratSqueak(r.x, r.z, true);
    if (r.state === 'roam') r.state = 'chase';
    if (r.hp <= 0) this.killRat(r);
  }

  killRat(r) {
    r.state = 'dead'; r.dead = 0;
    this.kills++;
    const n = 1 + (rng() < 0.4 ? 1 : 0);
    this.hooks.crumbs?.(n);
    this.hooks.killed?.(r);
    this.hooks.audio.ratDie(r.x, r.z);
  }

  /* ------------------------------------------------------------ weapon */

  fire(dx, dz) {
    if (this.bombCD > 0) return false;
    const b = this.bombs.find((q) => !q.live); if (!b) return false;
    const p = this.player;
    let ax = dx, az = dz, vy = 3.4, speed = BOMB_SPEED;
    // gentle aim assist: the best rat in front of you within ~40 degrees
    const face = Math.atan2(dx, dz);
    let best = null, bs = 1e9;
    for (const r of this.rats) {
      if (r.state === 'dead') continue;
      const rx = r.x - p.x, rz = r.z - p.z, d = Math.hypot(rx, rz);
      if (d > 30 || d < 0.6) continue;
      const da = Math.abs(((Math.atan2(rx, rz) - face + Math.PI * 3) % (Math.PI * 2)) - Math.PI);
      if (da > 0.72) continue;
      const score = d + da * 20;
      if (score < bs) { bs = score; best = r; }
    }
    const sy = p.y + 0.7;
    if (best) {
      const rx = best.x - p.x, rz = best.z - p.z, d = Math.hypot(rx, rz);
      const T = Math.max(0.12, d / speed);
      // lead a moving rat a little
      const lx = best.state === 'chase' ? -Math.sin(best.yaw) * 0 : 0;
      ax = (rx + lx) / d; az = rz / d;
      vy = (best.y + 0.25 - sy + 0.5 * GRAV * T * T) / T;
    }
    b.live = true; b.t = 0; b.m.visible = true;
    b.m.position.set(p.x + ax * 0.3, sy, p.z + az * 0.3);
    b.vx = ax * speed; b.vz = az * speed; b.vy = vy;
    this.bombCD = BOMB_COOLDOWN;
    return true;
  }

  splat(x, y, z, big = 1) {
    const s = this.splats[this.splatI++ % this.splats.length];
    s.t = 0; s.m.visible = true; s.m.position.set(x, y + 0.03, z);
    s.m.scale.set((0.8 + rng() * 0.6) * big, 1, (0.8 + rng() * 0.6) * big);
    s.m.rotation.y = rng() * 6.28;
    s.m.material.opacity = 0.95;
    this.hooks.audio.splat(x, z);
  }

  /* ------------------------------------------------------------ update */

  /**
   * ctx: { active (outdoors), hunted (rats may attack: on foot, outdoors), car: {x,z,speed}|null }
   */
  update(dt, ctx) {
    this.bombCD = Math.max(0, this.bombCD - dt);
    this.sinceHit += dt;
    const p = this.player;
    if (this.sinceHit > 7 && this.hp < this.maxHp) this.hp = Math.min(this.maxHp, this.hp + 4 * dt);

    // keep the population topped up
    if (ctx.active) {
      this.spawnT -= dt;
      const alive = this.rats.filter((r) => r.state !== 'dead').length;
      if (this.spawnT <= 0 && alive < MAX_RATS) { this.spawnT = 1.2; this.spawnRat(); }
    }

    // bombs
    for (const b of this.bombs) {
      if (!b.live) continue;
      b.t += dt;
      b.vy -= GRAV * dt;
      const m = b.m.position;
      m.x += b.vx * dt; m.y += b.vy * dt; m.z += b.vz * dt;
      let hit = false;
      for (const r of this.rats) {
        if (r.state === 'dead') continue;
        const dx = r.x - m.x, dz = r.z - m.z;
        if (dx * dx + dz * dz < 0.8 * 0.8 && Math.abs(m.y - (r.y + 0.3)) < 0.7) {
          this.damageRat(r, BOMB_DMG, m.x - b.vx, m.z - b.vz);
          this.splat(r.x, r.y, r.z, 1.2); hit = true; break;
        }
      }
      if (!hit && this.extraTargets) for (const t of this.extraTargets) {
        const dx = t.x - m.x, dz = t.z - m.z;
        if (dx * dx + dz * dz < 0.9 * 0.9 && Math.abs(m.y - (t.y + 0.4)) < 0.9) { t.hit(BOMB_DMG, b.vx, b.vz); this.splat(t.x, t.y, t.z, 1.2); hit = true; break; }
      }
      const gy = this.world.groundHeight(m.x, m.z);
      if (!hit && m.y <= gy + 0.06) { this.splat(m.x, gy, m.z); hit = true; }
      if (!hit && (b.t > 3 || this.walls.some((w) => m.x > w.minX && m.x < w.maxX && m.z > w.minZ && m.z < w.maxZ && m.y < w.h))) {
        hit = true; this.hooks.audio.splat(m.x, m.z);
      }
      if (hit) { b.live = false; b.m.visible = false; }
    }
    for (const s of this.splats) {
      if (!s.m.visible) continue;
      s.t += dt;
      if (s.t > 7) s.m.material.opacity = Math.max(0, 0.95 * (1 - (s.t - 7) / 3));
      if (s.t > 10) s.m.visible = false;
    }

    // rats
    const px = p.x, pz = p.z;
    for (let i = this.rats.length - 1; i >= 0; i--) {
      const r = this.rats[i];
      const dx = px - r.x, dz = pz - r.z, d = Math.hypot(dx, dz);

      if (r.state === 'dead') {
        r.dead += dt;
        r.mesh.rotation.z = Math.min(Math.PI, r.dead * 12);
        r.mesh.position.set(r.x, r.y + 0.12 * Math.min(1, r.dead * 6), r.z);
        if (r.dead > 1.4) r.mesh.scale.multiplyScalar(Math.max(0.01, 1 - dt * 3));
        if (r.dead > 2.2) { this.group.remove(r.mesh); this.rats.splice(i, 1); }
        continue;
      }
      if (d > 120) { this.group.remove(r.mesh); this.rats.splice(i, 1); continue; }   // wandered off: respawn elsewhere
      const show = d < 150;
      if (show !== r.shown) { r.shown = show; r.mesh.visible = show; }

      // run over by the player's car
      if (ctx.car && ctx.car.speed > 4 && (r.x - ctx.car.x) ** 2 + (r.z - ctx.car.z) ** 2 < 2.1 * 2.1) { this.splat(r.x, r.y, r.z, 1.6); this.killRat(r); continue; }

      // sight check
      r.sightT -= dt;
      if (r.sightT <= 0) {
        r.sightT = 0.25;
        if (r.state === 'roam' && ctx.hunted && d < SIGHT && this.sees(r.x, r.z, px, pz)) {
          r.state = 'chase'; r.vy = 3;
          this.hooks.audio.ratSqueak(r.x, r.z, false);
          if (!this.alerted) { this.alerted = true; this.hooks.alert?.(); }
        } else if (r.state === 'chase' && (!ctx.hunted || d > LOSE)) r.state = 'roam';
      }

      let moving = 0;
      if (r.state === 'chase') {
        const want = Math.atan2(dx, dz);
        r.yaw = angleLerp(r.yaw, want, Math.min(1, dt * 10));
        if (d > BITE_RANGE * 0.8 && r.lunge <= 0) {
          const s = r.spd * (d > 12 ? 1.08 : 1);
          r.x += Math.sin(r.yaw) * s * dt; r.z += Math.cos(r.yaw) * s * dt; moving = s;
        }
        r.biteCD -= dt;
        if (d < BITE_RANGE && r.biteCD <= 0 && ctx.hunted) {
          r.biteCD = BITE_COOLDOWN; r.lunge = 0.22;
          const airborne = !p.grounded && p.y - this.world.groundHeight(p.x, p.z) > 0.45;   // hop over the bite
          if (!airborne) { this.hooks.damage(BITE_DMG, r); } else this.hooks.audio.ratSqueak(r.x, r.z, false);
        }
      } else {
        r.t -= dt;
        if (r.t <= 0) { r.t = rand(1, 3); r.turn = rand(-1.6, 1.6); if (rng() < 0.25) r.yaw += Math.PI; }
        r.yaw += r.turn * dt * 0.6;
        r.x += Math.sin(r.yaw) * ROAM_SPEED * dt; r.z += Math.cos(r.yaw) * ROAM_SPEED * dt; moving = ROAM_SPEED;
      }
      if (r.lunge > 0) { r.lunge -= dt; const f = Math.sin((r.lunge / 0.22) * Math.PI) * 0.35; r.x += Math.sin(r.yaw) * f * dt * 14; r.z += Math.cos(r.yaw) * f * dt * 14; }
      // knockback
      if (r.kx || r.kz) { r.x += r.kx * dt; r.z += r.kz * dt; r.kx *= Math.max(0, 1 - dt * 7); r.kz *= Math.max(0, 1 - dt * 7); if (Math.abs(r.kx) + Math.abs(r.kz) < 0.1) r.kx = r.kz = 0; }
      // don't stack
      for (const o of this.rats) {
        if (o === r || o.state === 'dead') continue;
        const ox = r.x - o.x, oz = r.z - o.z, od = ox * ox + oz * oz;
        if (od < 0.45 * 0.45 && od > 1e-6) { const q = Math.sqrt(od); r.x += (ox / q) * dt * 1.5; r.z += (oz / q) * dt * 1.5; }
      }
      this.push(r);

      // vertical (little hops when alerted or hit)
      const gy = this.world.groundHeight(r.x, r.z);
      r.vy -= 18 * dt; r.y += r.vy * dt;
      if (r.y <= gy) { r.y = gy; r.vy = 0; }
      r.wob += dt * (moving ? 9 + moving * 0.9 : 1);
      const bob = r.y <= gy + 0.001 && moving ? Math.abs(Math.sin(r.wob)) * 0.03 : 0;
      r.mesh.position.set(r.x, r.y + bob, r.z);
      r.mesh.rotation.set(0, r.yaw, 0);
      r.mesh.rotation.z = moving ? Math.sin(r.wob * 0.5) * 0.06 : 0;
    }
  }

  /** The player has died or teleported away: calm everything down. */
  calm() { for (const r of this.rats) if (r.state === 'chase') r.state = 'roam'; }
  heal() { this.hp = this.maxHp; this.sinceHit = 99; }
}
