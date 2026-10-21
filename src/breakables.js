// Street furniture that a car can knock over: stop signs, traffic lights, lamp posts, hydrants (they spray!),
// mailboxes and bins. Everything is an instance of an InstancedMesh (or a plain mesh for the street-name blades),
// so "falling over" is just a re-written matrix: rotate the base matrix around the foot of the object.
import * as THREE from 'three';
import { clamp } from './config.js';

const _q = new THREE.Quaternion(), _ax = new THREE.Vector3(), _R = new THREE.Matrix4(), _P = new THREE.Matrix4(), _N = new THREE.Matrix4(), _T = new THREE.Matrix4();

const FALL = { lamp: 84, hydrant: 80, trash: 88, mail: 86, stop: 86, signal: 82 };
const RESTORE_AFTER = 80;

export class Breakables {
  /** hooks: { audio, onBreak(entry) } */
  constructor(world, traffic, fx, hooks = {}) {
    this.fx = fx; this.hooks = hooks;
    this.list = [];
    this.active = [];
    for (const set of world.propSets) {
      set.items.forEach((it, i) => this.add(set.kind, it.x, it.y ?? 0.15, it.z, it.c, set.meshes.map((mesh) => ({ mesh, idx: i }))));
    }
    const sig = [traffic.poleMesh, traffic.headMesh, traffic.lampR, traffic.lampY, traffic.lampG];
    for (const sp of world.signalPoles) {
      const parts = sig.map((mesh) => ({ mesh, idx: sp.idx }));
      for (const b of sp.blades) parts.push({ mesh: b, idx: -1 });
      this.add('signal', sp.x, 0.15, sp.z, sp.c, parts);
    }
  }

  add(kind, x, y, z, c, parts) {
    const e = { kind, x, y, z, c, r: c.r, state: 0, t: 0, dx: 1, dz: 0, spray: 0, down: 0, parts: [], final: (FALL[kind] ?? 85) * Math.PI / 180 };
    for (const p of parts) {
      const base = new THREE.Matrix4();
      if (p.mesh.isInstancedMesh) p.mesh.getMatrixAt(p.idx, base); else base.copy(p.mesh.matrix);
      e.parts.push({ mesh: p.mesh, idx: p.idx, base });
    }
    this.list.push(e);
    return e;
  }

  /** Called by the car physics each frame. Knocks over anything the car body touches at speed. */
  collideCar(d, car) {
    const speed = Math.abs(d.speed);
    if (speed < 2) return 0;
    const fx = Math.cos(d.rot), fz = -Math.sin(d.rot), sgn = d.speed >= 0 ? 1 : -1;
    const R = car.W / 2 + 0.1;
    let n = 0;
    for (const e of this.list) {
      if (e.state !== 0) continue;
      if (Math.abs(e.x - d.x) > 9 || Math.abs(e.z - d.z) > 9) continue;
      for (const k of [-0.45, -0.2, 0.05, 0.3, 0.5]) {
        const cx = d.x + fx * car.L * k, cz = d.z + fz * car.L * k;
        const dx = cx - e.x, dz = cz - e.z, rr = R + e.r;
        if (dx * dx + dz * dz < rr * rr) { this.knock(e, fx * sgn, fz * sgn, speed); n++; break; }
      }
    }
    return n;
  }

  knock(e, dx, dz, speed) {
    if (e.state !== 0) return;
    const l = Math.hypot(dx, dz) || 1;
    e.state = 1; e.t = 0; e.dx = dx / l; e.dz = dz / l; e.c.h0 = e.c.h; e.c.h = 0.05;
    this.active.push(e);
    const fx = this.fx, a = this.hooks.audio;
    fx.sparks(e.x, e.y + 0.5, e.z, e.kind === 'signal' || e.kind === 'lamp' ? 16 : 8);
    if (e.kind === 'hydrant') { e.spray = 9; a?.splash?.(e.x, e.z); }
    else if (e.kind === 'trash' || e.kind === 'mail') { fx.paper(e.x, e.y + 0.8, e.z, 8); a?.clang?.(e.x, e.z, 0.7); }
    else a?.clang?.(e.x, e.z, 1);
    fx.dust(e.x, e.y + 0.1, e.z, 4);
    this.hooks.onBreak?.(e, speed);
  }

  setPose(e, ang) {
    _ax.set(e.dz, 0, -e.dx);
    _q.setFromAxisAngle(_ax, ang);
    _R.makeRotationFromQuaternion(_q);
    _P.makeTranslation(e.x, e.y, e.z); _N.makeTranslation(-e.x, -e.y, -e.z);
    _T.copy(_P).multiply(_R).multiply(_N);
    for (const p of e.parts) {
      _R.copy(_T).multiply(p.base);
      this.write(p, _R);
    }
  }

  write(p, m) {
    if (p.mesh.isInstancedMesh) { p.mesh.setMatrixAt(p.idx, m); p.mesh.instanceMatrix.needsUpdate = true; }
    else { p.mesh.matrix.copy(m); p.mesh.matrixWorldNeedsUpdate = true; }
  }

  restore(e) {
    for (const p of e.parts) this.write(p, p.base);
    e.c.h = e.c.h0; if (e.c.h === undefined) delete e.c.h;
    e.state = 0; e.spray = 0; e.down = 0;
  }

  update(dt, px, pz) {
    for (let i = this.active.length - 1; i >= 0; i--) {
      const e = this.active[i];
      if (e.state === 1) {
        e.t += dt;
        const u = clamp(e.t / 0.75, 0, 1);
        // fall: accelerate, then a small bounce at the end
        let a = e.final * (u * u);
        if (u >= 1) { a = e.final; e.state = 2; this.fx.dust(e.x + e.dx * 1.2, 0.2, e.z + e.dz * 1.2, 3); }
        else if (u > 0.9) a = e.final * (1 - Math.sin((u - 0.9) * 10 * Math.PI) * 0.03);
        this.setPose(e, a);
      } else if (e.state === 2) {
        e.down += dt;
        if (e.spray > 0) { e.spray -= dt; this.fx.water(e.x, e.y + 0.55, e.z, 2); }
        if (e.down > RESTORE_AFTER && (e.x - px) ** 2 + (e.z - pz) ** 2 > 35 * 35) { this.restore(e); this.active.splice(i, 1); }
      }
    }
  }
}
