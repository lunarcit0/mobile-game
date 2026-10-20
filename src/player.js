// Third-person pigeon controller: WASD + mouse look, sprint, hop/flutter, collisions, orbit camera.
// The "context" (colliders, ground height, bounds) can be swapped, so the same controller works
// on the street, inside shops and in the subway.
import * as THREE from 'three';
import { Pigeon } from './pigeon.js';
import { LIMIT, clamp, moveToward, angleLerp } from './config.js';

const RADIUS = 0.32;
const WALK = 4.2;
const RUN = 9.5;
const GRAVITY = 20;
const JUMP_V = 6.2;

export class Player {
  constructor(scene, camera, world, dom) {
    this.world = world;
    this.camera = camera;
    this.pigeon = new Pigeon({ plumage: 0, outfit: 'bare', bandana: true, scale: 1.25 });
    scene.add(this.pigeon.root);

    this.outdoor = {
      colliders: world.colliders,
      groundHeight: world.groundHeight,
      bounds: { minX: -LIMIT, maxX: LIMIT, minZ: -LIMIT, maxZ: LIMIT },
      camMaxY: 1e9,
    };
    this.ctx = this.outdoor;

    this.x = world.spawn.x; this.z = world.spawn.z; this.y = this.ctx.groundHeight(this.x, this.z);
    this.vx = 0; this.vz = 0; this.vy = 0;
    this.yaw = world.spawn.yaw;       // facing direction (radians, 0 = +z)
    this.speed = 0;
    this.grounded = true;
    this.flapping = false;
    this.driving = false;             // true while the player is inside a car (pigeon hidden, car moves us)

    this.camYaw = world.spawn.yaw + Math.PI;   // camera sits behind the pigeon
    this.camPitch = 0.28;
    this.camDist = 5.2;
    this.camDistCur = 5.2;
    this.lastLook = 0;                // time of the last mouse movement (used by the car chase camera)

    this.keys = Object.create(null);
    this.locked = false;
    this.dom = dom;
    this.touchMove = null;
    this.frozen = false;              // set during fades

    addEventListener('keydown', (e) => {
      if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
      this.keys[e.code] = true;
    });
    addEventListener('keyup', (e) => { this.keys[e.code] = false; });
    addEventListener('blur', () => { this.keys = Object.create(null); });
    document.addEventListener('pointerlockchange', () => { this.locked = document.pointerLockElement === dom; });
    addEventListener('mousemove', (e) => {
      if (!this.locked && !this.dragging) return;
      this.camYaw -= e.movementX * 0.0026;
      this.camPitch = clamp(this.camPitch + e.movementY * 0.0026, -0.15, 1.15);
      this.lastLook = performance.now();
    });
    dom.addEventListener('mousedown', () => { if (!this.locked) this.dragging = true; });
    addEventListener('mouseup', () => { this.dragging = false; });
    this.snapCamera();
  }

  get active() { return this.locked || this.dragging; }

  setContext(ctx) { this.ctx = ctx; }

  /** Put the pigeon somewhere (e.g. after a door or leaving a car) facing `yaw`, camera behind. */
  teleport(x, z, yaw, y = null) {
    this.x = x; this.z = z;
    this.y = y ?? this.ctx.groundHeight(x, z);
    this.vx = this.vz = this.vy = 0;
    this.yaw = yaw;
    this.camYaw = yaw + Math.PI;
    this.grounded = true;
    this.speed = 0;
    this.camPitch = 0.28;
    this.camDist = 5.2;
    this.pigeon.root.position.set(x, this.y, z);
    this.pigeon.root.rotation.y = yaw;
    this.snapCamera();
  }

  inputAxes() {
    const k = this.keys;
    let f = (k.KeyW || k.ArrowUp ? 1 : 0) - (k.KeyS || k.ArrowDown ? 1 : 0);
    let r = (k.KeyD || k.ArrowRight ? 1 : 0) - (k.KeyA || k.ArrowLeft ? 1 : 0);
    if (this.touchMove) { f += -this.touchMove.y; r += this.touchMove.x; }
    const len = Math.hypot(f, r);
    if (len > 1) { f /= len; r /= len; }
    return [f, r];
  }

  collide() {
    const c = this.ctx.colliders;
    const feetY = this.y;
    for (const b of c.boxes) {
      if (b.disabled || feetY > b.h) continue;
      const nx = clamp(this.x, b.minX, b.maxX), nz = clamp(this.z, b.minZ, b.maxZ);
      const dx = this.x - nx, dz = this.z - nz;
      const d2 = dx * dx + dz * dz;
      if (d2 >= RADIUS * RADIUS) continue;
      if (d2 > 1e-8) {
        const d = Math.sqrt(d2);
        this.x = nx + (dx / d) * RADIUS; this.z = nz + (dz / d) * RADIUS;
      } else {
        const l = this.x - b.minX, r = b.maxX - this.x, t = this.z - b.minZ, bt = b.maxZ - this.z;
        const m = Math.min(l, r, t, bt);
        if (m === l) this.x = b.minX - RADIUS; else if (m === r) this.x = b.maxX + RADIUS;
        else if (m === t) this.z = b.minZ - RADIUS; else this.z = b.maxZ + RADIUS;
      }
    }
    for (const o of c.circles) {
      if (feetY > (o.h ?? 1.2)) continue;
      const dx = this.x - o.x, dz = this.z - o.z;
      const rr = o.r + RADIUS;
      const d2 = dx * dx + dz * dz;
      if (d2 >= rr * rr || d2 < 1e-10) continue;
      const d = Math.sqrt(d2);
      this.x = o.x + (dx / d) * rr; this.z = o.z + (dz / d) * rr;
    }
    const b = this.ctx.bounds;
    this.x = clamp(this.x, b.minX, b.maxX);
    this.z = clamp(this.z, b.minZ, b.maxZ);
  }

  update(dt) {
    dt = Math.min(dt, 0.05);
    if (this.driving) {          // a Vehicles controller moves x/z/y; we only look after the camera
      this.flapping = false;
      this.updateCamera(dt);
      return;
    }
    const [f0, r0] = this.frozen ? [0, 0] : this.inputAxes();
    const f = f0, r = r0;
    const sprint = !this.frozen && !!(this.keys.ShiftLeft || this.keys.ShiftRight);
    const maxSpeed = (sprint ? RUN : WALK);

    // camera-relative movement
    const sy = Math.sin(this.camYaw), cy = Math.cos(this.camYaw);
    const fx = -sy, fz = -cy;         // forward (away from camera)
    const rx = cy, rz = -sy;          // right
    let wx = fx * f + rx * r, wz = fz * f + rz * r;
    const wl = Math.hypot(wx, wz);
    const accel = this.grounded ? 40 : 14;
    if (wl > 0.01) {
      wx /= wl; wz /= wl;
      this.vx = moveToward(this.vx, wx * maxSpeed * Math.min(1, wl), accel * dt);
      this.vz = moveToward(this.vz, wz * maxSpeed * Math.min(1, wl), accel * dt);
      this.yaw = angleLerp(this.yaw, Math.atan2(wx, wz), Math.min(1, dt * 12));
    } else {
      const fr = this.grounded ? 50 : 4;
      this.vx = moveToward(this.vx, 0, fr * dt);
      this.vz = moveToward(this.vz, 0, fr * dt);
    }

    // jump / flutter: tap to hop, hold in air to flap and slow the fall
    const jump = !this.frozen && this.keys.Space;
    if (jump && this.grounded && !this.jumpHeld) { this.vy = JUMP_V; this.grounded = false; }
    this.jumpHeld = !!jump;
    this.flapping = false;
    if (!this.grounded) {
      this.vy -= GRAVITY * dt;
      if (jump && this.vy < 0) { this.vy = Math.max(this.vy, -2.2); this.flapping = true; this.vy += 14 * dt; }
    }

    this.x += this.vx * dt;
    this.z += this.vz * dt;
    this.y += this.vy * dt;
    this.collide();

    const gh = this.ctx.groundHeight(this.x, this.z);
    if (this.y <= gh) { this.y = gh; this.vy = 0; this.grounded = true; }
    else if (this.grounded && this.y - gh < 0.3) { this.y = gh; }
    else this.grounded = false;
    this.y = Math.min(this.y, 25);

    this.speed = Math.hypot(this.vx, this.vz);
    const p = this.pigeon;
    p.root.position.set(this.x, this.y, this.z);
    p.root.rotation.y = this.yaw;
    p.update(dt, this.speed * (sprint ? 0.8 : 1.0), { airborne: !this.grounded, vy: this.vy, flap: this.flapping });

    this.updateCamera(dt);
  }

  snapCamera() {
    this.camDistCur = this.camDist;
    this.updateCamera(0.016, true);
  }

  updateCamera(dt, snap = false) {
    const tx = this.x, ty = this.y + (this.driving ? 1.0 : 0.75), tz = this.z;
    const sy = Math.sin(this.camYaw), cy = Math.cos(this.camYaw);
    const cp = Math.cos(this.camPitch), sp = Math.sin(this.camPitch);
    let dist = this.camDist;
    // pull the camera in if it would end up inside a building
    const c = this.ctx.colliders.boxes;
    let best = dist;
    for (let s = dist; s > 0.8; s -= 0.4) {
      const px = tx + sy * cp * s, py = ty + sp * s, pz = tz + cy * cp * s;
      let hit = py < 0.25 || py > this.ctx.camMaxY;
      if (!hit) for (const b of c) if (!b.disabled && py < b.h && px > b.minX - 0.3 && px < b.maxX + 0.3 && pz > b.minZ - 0.3 && pz < b.maxZ + 0.3) { hit = true; break; }
      if (!hit) { best = s; break; }
      best = 0.8;
    }
    this.camDistCur = snap || best < this.camDistCur ? best : this.camDistCur + (best - this.camDistCur) * Math.min(1, dt * 3);
    dist = this.camDistCur;
    this.camera.position.set(tx + sy * cp * dist, clamp(ty + sp * dist, 0.3, this.ctx.camMaxY), tz + cy * cp * dist);
    this.camera.lookAt(tx, ty + 0.1, tz);
  }
}
