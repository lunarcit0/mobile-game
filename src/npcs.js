// Ambient NPC pigeons that stroll around the sidewalk ring of a block, pausing to peck.
import * as THREE from 'three';
import { Pigeon } from './pigeon.js';
import { N, RING_R, SIDEWALK_H, blockCenter, rng, rand, pick, angleLerp } from './config.js';

const SPEEDS = [1.3, 1.7, 2.1, 2.6];
const SHOW_DIST = 115;          // beyond this, NPCs are hidden and not animated (fog hides them anyway)

function ringPoint(cx, cz, r, p) {
  // p in [0, 8r): perimeter parameter of a square of half-size r, clockwise from NW corner
  const L = 2 * r;
  p = ((p % (4 * L)) + 4 * L) % (4 * L);
  if (p < L) return [cx - r + p, cz - r];                     // north edge, heading +x
  if (p < 2 * L) return [cx + r, cz - r + (p - L)];           // east edge, heading +z
  if (p < 3 * L) return [cx + r - (p - 2 * L), cz + r];       // south edge, heading -x
  return [cx - r, cz + r - (p - 3 * L)];                      // west edge, heading -z
}

export class NPCs {
  constructor(scene, count = 220) {
    this.group = new THREE.Group();
    scene.add(this.group);
    this.list = [];
    this.fx = null;
    this.bonked = 0;
    const center = Math.floor((N - 1) / 2);
    for (let i = 0; i < count; i++) {
      let bi, bj, startP = null;
      if (i < 16) {            // a welcome crowd on the sidewalk around the spawn point
        bi = center; bj = center;
        startP = RING_R + rand(-22, 22);
      } else if (i < count * 0.55) { bi = center + Math.floor(rng() * 3) - 1; bj = center + Math.floor(rng() * 3) - 1; }
      else { bi = Math.floor(rng() * N); bj = Math.floor(rng() * N); }
      const outfit = i % 5 === 0 ? 'suit' : i % 5 === 1 ? 'suit' : i % 5 === 4 ? 'bare' : 'casual';
      const pigeon = new Pigeon({ outfit, scale: rand(1.12, 1.32), hat: (bi === 3 && bj === 2 && outfit === 'casual' && i % 2 === 0) ? 'grad' : undefined });
      const r = RING_R + rand(-0.3, 0.7);
      const npc = {
        pigeon, cx: blockCenter(bi), cz: blockCenter(bj), r,
        p: startP ?? rng() * 8 * r, dir: rng() < 0.5 ? 1 : -1,
        speed: pick(SPEEDS), state: rng() < 0.3 ? 'pause' : 'walk', timer: rand(1, 5),
        yaw: 0, v: 0, x: 0, z: 0, shown: true, cooT: rand(8, 40),
      };
      this.group.add(pigeon.root);
      this.list.push(npc);
      this.place(npc, 1);
    }
  }

  place(n, snap = 0.2) {
    const [x, z] = ringPoint(n.cx, n.cz, n.r, n.p);
    const [x2, z2] = ringPoint(n.cx, n.cz, n.r, n.p + n.dir * 0.5);
    n.x = x; n.z = z;
    n.pigeon.root.position.set(x, SIDEWALK_H, z);
    const target = Math.atan2(x2 - x, z2 - z);
    n.yaw = snap >= 1 ? target : angleLerp(n.yaw, target, snap);
    n.pigeon.root.rotation.y = n.yaw;
  }

  /** A car body at (cx,cz) heading (fx,fz) with length L / width W and the given speed: knock over any pigeon it touches. */
  hitByCar(cx, cz, fx, fz, L, W, speed) {
    const sp = Math.abs(speed);
    if (sp < 2.5) return 0;
    const sgn = speed >= 0 ? 1 : -1;
    let count = 0;
    for (const n of this.list) {
      if (!n.shown || n.hit) continue;
      const px = n.x - cx, pz = n.z - cz;
      if (px * px + pz * pz > 64) continue;
      const along = px * fx + pz * fz, lat = px * fz - pz * fx;
      if (Math.abs(along) < L / 2 + 0.35 && Math.abs(lat) < W / 2 + 0.45) { this.knock(n, fx * sgn, fz * sgn, sp, lat); count++; }
    }
    this.bonked += count;
    return count;
  }

  knock(n, dx, dz, speed, lat) {
    const s = Math.min(speed, 20), side = lat >= 0 ? 1 : -1;
    n.hit = {
      stage: 'fly', t: 0, x: n.x, y: SIDEWALK_H + 0.3, z: n.z, bounces: 0, ret: 0,
      vx: dx * s * 0.75 - dz * side * 2.2, vz: dz * s * 0.75 + dx * side * 2.2, vy: 4.5 + s * 0.35,
      spin: (rng() < 0.5 ? -1 : 1) * (7 + s * 0.45), star: 0, fromX: 0, fromZ: 0,
    };
    this.fx?.feathers(n.x, n.hit.y + 0.3, n.z, 16);
  }

  updateHit(n, dt) {
    const h = n.hit, root = n.pigeon.root;
    h.t += dt;
    if (h.stage === 'fly') {
      h.vy -= 20 * dt; h.x += h.vx * dt; h.y += h.vy * dt; h.z += h.vz * dt;
      root.rotation.x += h.spin * dt; root.rotation.z += h.spin * 0.55 * dt;
      if (h.y <= 0.15 && h.vy < 0) {
        h.y = 0.15;
        if (h.bounces < 1) { h.bounces++; h.vy = -h.vy * 0.33; h.vx *= 0.55; h.vz *= 0.55; this.fx?.dust(h.x, 0.2, h.z, 4); }
        else { h.stage = 'lie'; h.t = 0; this.fx?.feathers(h.x, 0.4, h.z, 8); }
      }
      root.position.set(h.x, h.y, h.z);
    } else if (h.stage === 'lie') {
      // slide to a stop, lie on the side with stars circling
      h.vx *= Math.max(0, 1 - dt * 6); h.vz *= Math.max(0, 1 - dt * 6); h.x += h.vx * dt; h.z += h.vz * dt;
      root.rotation.x += (0 - root.rotation.x) * Math.min(1, dt * 8);
      root.rotation.z += ((Math.PI / 2) - (root.rotation.z % (Math.PI * 2))) * Math.min(1, dt * 8);
      root.position.set(h.x, 0.2, h.z);
      h.star -= dt;
      if (h.star <= 0) { h.star = 0.22; this.fx?.stars(h.x, 0.75, h.z); }
      if (h.t > 1.7) {
        h.stage = 'return'; h.t = 0; h.fromX = h.x; h.fromZ = h.z;
        const [rx, rz] = ringPoint(n.cx, n.cz, n.r, n.p);
        h.toX = rx; h.toZ = rz;
      }
    } else {   // get up, shake it off, waddle back to the sidewalk ring
      const u = Math.min(1, h.t / 2.2), e = u * u * (3 - 2 * u);
      root.rotation.x *= Math.max(0, 1 - dt * 8); root.rotation.z *= Math.max(0, 1 - dt * 6);
      h.x = h.fromX + (h.toX - h.fromX) * e; h.z = h.fromZ + (h.toZ - h.fromZ) * e;
      const y = 0.15 + (SIDEWALK_H - 0.15) * e;
      root.position.set(h.x, y, h.z);
      root.rotation.y = Math.atan2(h.toX - h.fromX, h.toZ - h.fromZ);
      n.pigeon.update(dt, u < 1 ? 2.2 : 0);
      if (h.t % 0.4 < dt && u < 0.7) this.fx?.stars(h.x, 0.75, h.z);
      if (u >= 1) { root.rotation.x = 0; root.rotation.z = 0; n.hit = null; n.v = n.speed * 0.5; n.state = 'walk'; n.timer = rand(3, 8); this.place(n, 1); }
    }
    n.x = h.x; n.z = h.z;
  }

  nearest(x, z, maxD) {
    let best = null, bd = maxD * maxD;
    for (const n of this.list) {
      if (!n.shown) continue;
      const d = (n.x - x) ** 2 + (n.z - z) ** 2;
      if (d < bd) { bd = d; best = n; }
    }
    return best;
  }

  update(dt, player) {
    const far2 = SHOW_DIST * SHOW_DIST;
    for (const n of this.list) {
      if (n.hit) { this.updateHit(n, dt); const dx0 = n.x - player.x, dz0 = n.z - player.z; if (dx0 * dx0 + dz0 * dz0 > far2) { n.hit = null; n.pigeon.root.rotation.x = n.pigeon.root.rotation.z = 0; this.place(n, 1); } continue; }
      n.timer -= dt;
      if (n.state === 'walk') {
        n.v = Math.min(n.speed, n.v + dt * 5);
        n.p += n.dir * n.v * dt;
        if (n.timer <= 0) { n.state = 'pause'; n.timer = rand(1.5, 5); }
      } else {
        n.v = Math.max(0, n.v - dt * 8);
        n.p += n.dir * n.v * dt;
        if (n.v < 0.05 && rng() < dt * 0.9) n.pigeon.startPeck();
        if (n.timer <= 0) {
          n.state = 'walk'; n.timer = rand(4, 14);
          if (rng() < 0.3) n.dir *= -1;
        }
      }
      const dx = n.x - player.x, dz = n.z - player.z;
      const d2 = dx * dx + dz * dz;
      // spook: scoot away briefly if the player sprints (or drives) right at them
      if (d2 < 2.6 * 2.6 && player.speed > 8) { n.state = 'walk'; n.timer = 3; n.v = n.speed * 2.2; }

      const show = d2 < far2;
      if (show !== n.shown) { n.shown = show; n.pigeon.root.visible = show; }
      if (show) {
        this.place(n, Math.min(1, dt * 8));
        n.pigeon.update(dt, n.v);
      } else {
        this.place(n, 1);
      }
    }
  }
}
