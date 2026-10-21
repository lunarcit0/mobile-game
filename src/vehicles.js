// Enter, drive and leave cars. Works on both parked cars (world.parked) and cars from the AI traffic.
import { clamp, angleLerp, LIMIT } from './config.js';

const ENTER_RANGE = 2.6;      // metres from the car's body
const TOW_AFTER = 30;         // seconds before a car left in traffic is put back (if you're far away)

export class Vehicles {
  /** hooks: { crash(intensity), exited(), entered(car) } */
  constructor(world, traffic, player, hooks = {}) {
    this.world = world;
    this.traffic = traffic;
    this.player = player;
    this.hooks = hooks;
    this.d = null;                 // active driving state
    this.abandoned = [];           // traffic cars the player left standing somewhere
    this.obs = { x: 0, z: 0, r: 2, v: 0 };
    this.input = { throttle: 0, slip: 0, handbrake: false };
    this.breakables = null; this.npcs = null; this.fx = null;   // set by main.js
    this.smokeT = 0;
  }

  /** Handling per vehicle type (arcade): top speed, acceleration scale, steering scale. */
  spec(car) { return { bus: { max: 17, acc: 0.62, steer: 0.72 }, van: { max: 20, acc: 0.8, steer: 0.88 } }[car.type] || { max: 23, acc: 1, steer: 1 }; }

  damage(car, amount) {
    car.hp = Math.max(0, (car.hp ?? 100) - amount);
    this.paint(car);
    if (car.hp <= 0 && !car.wrecked) { car.wrecked = true; this.hooks.wrecked?.(car); }
  }
  paint(car) {
    const m = car.mesh.children[0]; if (!m) return;
    if (!car.dmgMat) { car.dmgMat = true; m.material = m.material.clone(); }
    const k = (car.hp ?? 100) / 100;
    m.material.color.setScalar(0.42 + 0.58 * k);
    car.mesh.scale.x = 1 - 0.1 * (1 - k);
    car.mesh.scale.y = 1 - 0.05 * (1 - k);
  }
  repair(car) { car.hp = 100; car.wrecked = false; if (car.dmgMat) this.paint(car); }

  get active() { return !!this.d; }
  get car() { return this.d ? this.d.car : null; }
  get speed() { return this.d ? this.d.speed : 0; }

  /* ------------------------------------------------------------ queries */

  candidates() {
    return [...this.world.parked, ...this.traffic.vehicles, ...this.abandoned];
  }

  /** Distance from point to the car's oriented rectangle. */
  distTo(car, px, pz) {
    const r = car.mesh.rotation.y;
    const fx = Math.cos(r), fz = -Math.sin(r);
    const dx = px - car.x, dz = pz - car.z;
    const along = dx * fx + dz * fz, lat = dx * fz - dz * fx;
    const ex = Math.max(Math.abs(along) - car.L / 2, 0), ey = Math.max(Math.abs(lat) - car.W / 2, 0);
    return Math.hypot(ex, ey);
  }

  nearest(px, pz) {
    let best = null, bd = ENTER_RANGE;
    for (const c of this.candidates()) {
      if (Math.abs(c.x - px) > 8 || Math.abs(c.z - pz) > 8) continue;
      const d = this.distTo(c, px, pz);
      if (d < bd) { bd = d; best = c; }
    }
    return best;
  }

  label(car) {
    return { taxi: 'taxi', sedan: 'car', suv: 'SUV', van: 'van', bus: 'bus' }[car.type] || 'car';
  }

  /* -------------------------------------------------------- enter / exit */

  releaseStatic(car) {
    // remove the solid circles that stood in for a standing car
    if (car.circles) {
      const arr = this.world.colliders.circles;
      for (const c of car.circles) { const i = arr.indexOf(c); if (i >= 0) arr.splice(i, 1); }
      car.circles = null;
    }
    if (car.obs) {
      const i = this.traffic.obstacles.indexOf(car.obs); if (i >= 0) this.traffic.obstacles.splice(i, 1);
      car.obs = null;
    }
    const k = this.abandoned.indexOf(car); if (k >= 0) this.abandoned.splice(k, 1);
  }

  enter(car) {
    const p = this.player;
    if (car.kind === 'parked') car.box.disabled = true;
    else if (this.traffic.vehicles.includes(car)) this.traffic.removeVehicle(car);
    this.releaseStatic(car);
    car.kind = car.kind || 'traffic';

    this.d = { car, x: car.x, z: car.z, rot: car.mesh.rotation.y, speed: car.v || 0, steer: 0, crashT: 0 };
    this.traffic.obstacles.push(this.obs);
    p.driving = true;
    p.flying = false;
    p.pigeon.root.visible = false;
    p.camDist = 8.8; p.camPitch = 0.3;
    this.syncPlayer(true);
    p.camYaw = this.behindYaw();
    p.snapCamera();
    this.hooks.entered?.(car);
  }

  behindYaw() { const r = this.d.rot; return Math.atan2(-Math.cos(r), Math.sin(r)); }

  isFree(x, z, margin = 0.45) {
    const c = this.world.colliders;
    if (Math.abs(x) > LIMIT || Math.abs(z) > LIMIT) return false;
    for (const b of c.boxes) {
      if (b.disabled || b.h < 0.3) continue;
      if (x > b.minX - margin && x < b.maxX + margin && z > b.minZ - margin && z < b.maxZ + margin) return false;
    }
    for (const o of c.circles) if (Math.hypot(x - o.x, z - o.z) < o.r + margin) return false;
    return true;
  }

  /** Returns false (and does nothing) if the car is going too fast to get out. */
  exit() {
    const d = this.d; if (!d) return false;
    if (Math.abs(d.speed) > 4) return false;
    const { car } = d, p = this.player;
    const fx = Math.cos(d.rot), fz = -Math.sin(d.rot);
    const lx = fz, lz = -fx;                       // left of the car
    const off = car.W / 2 + 1.0;
    const spots = [[lx * off, lz * off], [-lx * off, -lz * off], [-fx * (car.L / 2 + 1), -fz * (car.L / 2 + 1)], [fx * (car.L / 2 + 1), fz * (car.L / 2 + 1)],
      [lx * (off + 1.5), lz * (off + 1.5)], [-lx * (off + 1.5), -lz * (off + 1.5)]];
    let spot = null;
    for (const [sx, sz] of spots) if (this.isFree(d.x + sx, d.z + sz, 0.45)) { spot = [sx, sz]; break; }
    if (!spot) return false;                        // boxed in: can't get out here
    // the car now stands where it is, solid, as three circles along its length
    const R = car.W / 2 + 0.05;
    car.circles = [-0.32, 0, 0.32].map((k) => ({ x: d.x + fx * car.L * k, z: d.z + fz * car.L * k, r: R, h: 2.2 }));
    this.world.colliders.circles.push(...car.circles);
    car.x = d.x; car.z = d.z; car.v = 0;
    if (car.kind !== 'parked') {
      car.abandoned = true; car.abT = 0;
      car.obs = { x: car.x, z: car.z, r: (car.L + car.W) / 4 + 0.3, v: 0 };
      this.traffic.obstacles.push(car.obs);
      this.abandoned.push(car);
    }
    const i = this.traffic.obstacles.indexOf(this.obs); if (i >= 0) this.traffic.obstacles.splice(i, 1);

    this.d = null;
    p.driving = false;
    p.pigeon.root.visible = true;
    const yaw = Math.atan2(spot[0], spot[1]);
    p.teleport(d.x + spot[0], d.z + spot[1], yaw);
    this.input.throttle = 0; this.input.slip = 0;
    this.hooks.exited?.(car);
    return true;
  }

  /* ----------------------------------------------------------- per frame */

  syncPlayer(snap = false) {
    const d = this.d, p = this.player;
    const y = p.ctx.groundHeight(d.x, d.z);
    p.x = d.x; p.z = d.z; p.y = y; p.speed = Math.abs(d.speed);
    d.car.x = d.x; d.car.z = d.z;
    d.car.mesh.position.set(d.x, y + 0.01, d.z);
    d.car.mesh.rotation.y = d.rot;
    this.obs.x = d.x; this.obs.z = d.z; this.obs.v = d.speed;
    this.obs.r = (d.car.L + d.car.W) / 4 + 0.3;
    p.pigeon.root.position.set(d.x, y, d.z);
  }

  update(dt, keys) {
    this.updateAbandoned(dt);
    const d = this.d; if (!d) return;
    dt = Math.min(dt, 0.05);
    const p = this.player, car = d.car;
    const up = keys.KeyW || keys.ArrowUp, down = keys.KeyS || keys.ArrowDown;
    const left = keys.KeyA || keys.ArrowLeft, right = keys.KeyD || keys.ArrowRight;
    const hb = !!keys.Space;
    const throttle = (up ? 1 : 0) - (down ? 1 : 0) + (p.touchMove ? -p.touchMove.y : 0);
    let steerIn = (left ? 1 : 0) - (right ? 1 : 0) + (p.touchMove ? -p.touchMove.x : 0);
    steerIn = clamp(steerIn, -1, 1);
    const tr = clamp(throttle, -1, 1);

    // longitudinal
    let a = 0;
    const sp0 = this.spec(car);
    if (tr > 0.05) a = (d.speed < -0.5 ? 20 : d.speed > 14 ? 5.5 : 9.5) * tr * sp0.acc;
    else if (tr < -0.05) a = (d.speed > 0.5 ? -18 : -7) * -tr;
    const before = d.speed;
    d.speed += a * dt;
    if (Math.abs(tr) < 0.05) d.speed -= Math.sign(d.speed) * Math.min(Math.abs(d.speed), 2.8 * dt);
    if (hb) d.speed -= Math.sign(d.speed) * Math.min(Math.abs(d.speed), 26 * dt);
    if (before > 0 && tr < -0.05 && d.speed < 0 && before > 0.5) d.speed = Math.max(d.speed, 0);   // braking stops at 0 first
    d.speed = clamp(d.speed, -7, car.wrecked ? 5 : sp0.max);

    // steering
    d.steer += clamp(steerIn - d.steer, -7 * dt, 7 * dt);
    const sp = Math.abs(d.speed);
    const yawRate = d.steer * 2.2 * sp0.steer * (sp / (sp + 3.2)) / (1 + sp * 0.045) * (d.speed >= 0 ? 1 : -1) * (hb ? 1.6 : 1);
    d.rot += yawRate * dt;

    const fx = Math.cos(d.rot), fz = -Math.sin(d.rot);
    d.x += fx * d.speed * dt;
    d.z += fz * d.speed * dt;
    this.breakables?.collideCar(d, car);
    if (this.npcs) {
      const n = this.npcs.hitByCar(d.x, d.z, fx, fz, car.L, car.W, d.speed);
      if (n) { this.hooks.bonk?.(n); d.speed *= 0.97; }
    }
    this.collide(d, dt);
    if ((car.hp ?? 100) < 65 && this.fx) {
      this.smokeT -= dt;
      if (this.smokeT <= 0) {
        const bad = (car.hp ?? 100) < 30;
        this.smokeT = bad ? 0.07 : 0.16;
        this.fx.smoke(d.x + fx * car.L * 0.36, (car.type === 'bus' ? 1.5 : 1.0), d.z + fz * car.L * 0.36, bad ? 1 : 0, 1);
      }
    }
    d.x = clamp(d.x, -LIMIT, LIMIT); d.z = clamp(d.z, -LIMIT, LIMIT);

    this.input.throttle = tr;
    this.input.handbrake = hb;
    this.input.slip = Math.abs(d.steer) * sp / 11 + (hb ? 0.8 * clamp(sp / 8, 0, 1) : 0) + (a > 8 && sp < 4 ? 0.3 : 0);

    this.syncPlayer();

    // chase camera: swing round behind the car unless the player is looking around
    const idle = performance.now() - p.lastLook > 1500;
    if (idle && sp > 1.2) p.camYaw = angleLerp(p.camYaw, this.behindYaw(), Math.min(1, dt * (d.speed >= 0 ? 2.4 : 0.8)));
    if (idle) p.camPitch += (0.3 - p.camPitch) * Math.min(1, dt * 1.5);
    p.camDist = 8.2 + sp * 0.12;
  }

  collide(d, dt) {
    const car = d.car, col = this.world.colliders;
    const R = car.W / 2 + 0.05;
    let maxPen = 0, nx = 0, nz = 0;
    for (let iter = 0; iter < 2; iter++) {
      const fx = Math.cos(d.rot), fz = -Math.sin(d.rot);
      for (const k of [-0.32, 0, 0.32]) {
        const cx = d.x + fx * car.L * k, cz = d.z + fz * car.L * k;
        let px = 0, pz = 0;
        for (const b of col.boxes) {
          if (b.disabled || b.h < 0.3) continue;
          if (cx < b.minX - R || cx > b.maxX + R || cz < b.minZ - R || cz > b.maxZ + R) continue;
          const qx = clamp(cx, b.minX, b.maxX), qz = clamp(cz, b.minZ, b.maxZ);
          let dx = cx - qx, dz = cz - qz;
          let dist = Math.hypot(dx, dz);
          if (dist >= R) continue;
          if (dist < 1e-6) {   // centre inside the box: shove out through the nearest face
            const l = cx - b.minX, r = b.maxX - cx, t = cz - b.minZ, bt = b.maxZ - cz, m = Math.min(l, r, t, bt);
            if (m === l) { dx = -1; dz = 0; dist = -l; } else if (m === r) { dx = 1; dz = 0; dist = -r; }
            else if (m === t) { dx = 0; dz = -1; dist = -t; } else { dx = 0; dz = 1; dist = -bt; }
            const pen = R - dist; px += dx * pen; pz += dz * pen; maxPen = Math.max(maxPen, pen); nx = dx; nz = dz;
          } else {
            const pen = R - dist; px += (dx / dist) * pen; pz += (dz / dist) * pen; maxPen = Math.max(maxPen, pen); nx = dx / dist; nz = dz / dist;
          }
        }
        for (const o of col.circles) {
          if (o.h !== undefined && o.h < 0.3) continue;
          const dx = cx - o.x, dz = cz - o.z, rr = R + o.r;
          if (Math.abs(dx) > rr || Math.abs(dz) > rr) continue;
          const dist = Math.hypot(dx, dz);
          if (dist >= rr || dist < 1e-6) continue;
          const pen = rr - dist; px += (dx / dist) * pen; pz += (dz / dist) * pen; maxPen = Math.max(maxPen, pen); nx = dx / dist; nz = dz / dist;
        }
        // other cars on the road
        for (const v of this.traffic.vehicles) {
          if (Math.abs(v.x - cx) > 9 || Math.abs(v.z - cz) > 9) continue;
          const vfx = v.axis === 'x' ? v.dir : 0, vfz = v.axis === 'z' ? v.dir : 0;
          for (const kk of [-0.32, 0, 0.32]) {
            const ox = v.x + vfx * v.L * kk, oz = v.z + vfz * v.L * kk;
            const dx = cx - ox, dz = cz - oz, rr = R + v.W / 2 + 0.05;
            const dist = Math.hypot(dx, dz);
            if (dist >= rr || dist < 1e-6) continue;
            const pen = rr - dist; px += (dx / dist) * pen * 0.7; pz += (dz / dist) * pen * 0.7; maxPen = Math.max(maxPen, pen * 0.7); nx = dx / dist; nz = dz / dist;
            v.v *= 0.9;
          }
        }
        d.x += px * 0.6; d.z += pz * 0.6;
      }
    }
    d.crashT -= dt;
    if (maxPen > 0.015) {
      // lose the speed that was heading into the thing we hit
      const fx = Math.cos(d.rot), fz = -Math.sin(d.rot);
      const into = -(fx * nx + fz * nz) * d.speed;     // >0 when driving into the surface
      if (into > 0.5) {
        const impact = into;
        d.speed -= Math.sign(d.speed) * Math.min(Math.abs(d.speed), impact * 0.8 + 1);
        if (impact > 2.5 && d.crashT <= 0) {
          this.hooks.crash?.(impact / 14); d.crashT = 0.35;
          if (impact > 3.5) { this.damage(car, (impact - 2.5) * 3.2); this.fx?.sparks(d.x + fx * car.L * 0.45 * Math.sign(d.speed || 1), 0.7, d.z + fz * car.L * 0.45 * Math.sign(d.speed || 1), 8); }
        }
      }
    }
  }

  /** Cars left standing in the road get towed back into the traffic flow after a while. */
  updateAbandoned(dt) {
    if (!this.abandoned.length) return;
    const p = this.player;
    for (const car of [...this.abandoned]) {
      car.abT += dt;
      if (car.abT < TOW_AFTER) continue;
      if (Math.hypot(car.x - p.x, car.z - p.z) < 60) continue;
      if (!this.traffic.canReinsert(car)) continue;
      this.releaseStatic(car);
      this.repair(car);
      this.traffic.reinsert(car);
    }
  }
}
