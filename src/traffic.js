// Cars, buses, taxis and traffic lights.
import * as THREE from 'three';
import { G, part, merge, vcMaterial } from './gfx.js';
import {
  N, WRAP, LANE, STOP_DIST, SIDEWALK_H, roadCenter, rng, rand, pick, clamp,
} from './config.js';

const bodyMat = vcMaterial({ roughness: 0.5, metalness: 0 });

const CAR_COLORS = [0xc9c9cc, 0x3b4a5c, 0x8b1e1e, 0x2d4a7a, 0xe8e8e8, 0x3a5a40, 0x6b6f76, 0x7a5c3a, 0x9c9fa6];
const GLASS = 0x2a3b4f;
const TIRE = 0x15171a;

export function makeVehicle(type, color) {
  const b = [];
  const l = [];
  let L, W;
  if (type === 'bus') {
    L = 11.5; W = 2.55;
    b.push(part(G.box, 0xf1f1ee, [0, 1.55, 0], [L, 2.5, W]));
    b.push(part(G.box, 0x1d4f91, [0, 0.75, 0], [L + 0.02, 0.5, W + 0.02]));
    b.push(part(G.box, 0xf2c200, [0, 1.12, 0], [L + 0.03, 0.12, W + 0.03]));
    b.push(part(G.box, GLASS, [-0.2, 1.95, 0], [L * 0.92, 0.85, W + 0.03]));
    b.push(part(G.box, GLASS, [L / 2 - 0.02, 1.85, 0], [0.06, 1.1, W * 0.86]));
    b.push(part(G.box, 0x2a2d31, [L / 2, 0.45, 0], [0.18, 0.3, W]));
    b.push(part(G.box, 0x2a2d31, [-L / 2, 0.45, 0], [0.18, 0.3, W]));
    for (const x of [L * 0.3, -L * 0.3]) for (const s of [-1, 1]) b.push(part(G.cyl, TIRE, [x, 0.5, s * (W / 2 - 0.05)], [0.5, 0.36, 0.5], [Math.PI / 2, 0, 0]));
    l.push(part(G.box, 0xffd27a, [L / 2 + 0.01, 2.65, 0], [0.05, 0.3, 1.5]));
    l.push(part(G.box, 0xfff2c4, [L / 2 + 0.01, 0.75, W * 0.36], [0.05, 0.16, 0.3]));
    l.push(part(G.box, 0xfff2c4, [L / 2 + 0.01, 0.75, -W * 0.36], [0.05, 0.16, 0.3]));
    l.push(part(G.box, 0xff2a2a, [-L / 2 - 0.01, 0.8, W * 0.38], [0.05, 0.2, 0.3]));
    l.push(part(G.box, 0xff2a2a, [-L / 2 - 0.01, 0.8, -W * 0.38], [0.05, 0.2, 0.3]));
  } else if (type === 'van') {
    L = 5.4; W = 2.0;
    b.push(part(G.box, color, [0, 1.15, 0], [L, 1.7, W]));
    b.push(part(G.box, GLASS, [L / 2 - 0.02, 1.55, 0], [0.06, 0.62, W * 0.88]));
    b.push(part(G.box, GLASS, [L * 0.3, 1.5, 0], [L * 0.22, 0.5, W + 0.02]));
    b.push(part(G.box, 0x2a2d31, [L / 2, 0.45, 0], [0.16, 0.25, W]));
    b.push(part(G.box, 0x2a2d31, [-L / 2, 0.45, 0], [0.16, 0.25, W]));
    for (const x of [L * 0.3, -L * 0.3]) for (const s of [-1, 1]) b.push(part(G.cyl, TIRE, [x, 0.38, s * (W / 2 - 0.05)], [0.38, 0.26, 0.38], [Math.PI / 2, 0, 0]));
    l.push(part(G.box, 0xfff2c4, [L / 2 + 0.01, 0.8, W * 0.34], [0.05, 0.16, 0.3]));
    l.push(part(G.box, 0xfff2c4, [L / 2 + 0.01, 0.8, -W * 0.34], [0.05, 0.16, 0.3]));
    l.push(part(G.box, 0xff2a2a, [-L / 2 - 0.01, 0.85, W * 0.38], [0.05, 0.22, 0.3]));
    l.push(part(G.box, 0xff2a2a, [-L / 2 - 0.01, 0.85, -W * 0.38], [0.05, 0.22, 0.3]));
  } else {
    const suv = type === 'suv';
    const taxi = type === 'taxi';
    L = suv ? 4.8 : taxi ? 4.7 : 4.5;
    W = suv ? 1.95 : 1.88;
    const bodyH = suv ? 0.8 : 0.62;
    const cabH = suv ? 0.66 : 0.5;
    const cabL = suv ? 0.66 : 0.5;
    const by = 0.32 + bodyH / 2;
    b.push(part(G.box, color, [0, by, 0], [L, bodyH, W]));
    const cy = 0.32 + bodyH + cabH / 2;
    b.push(part(G.box, GLASS, [suv ? -0.1 : -0.25, cy, 0], [L * cabL, cabH, W * 0.92]));
    b.push(part(G.box, color, [suv ? -0.1 : -0.25, cy + cabH / 2 + 0.03, 0], [L * cabL - 0.06, 0.07, W * 0.9]));
    b.push(part(G.box, 0x2a2d31, [L / 2, 0.42, 0], [0.14, 0.22, W * 0.96]));
    b.push(part(G.box, 0x2a2d31, [-L / 2, 0.42, 0], [0.14, 0.22, W * 0.96]));
    for (const x of [L * 0.3, -L * 0.3]) for (const s of [-1, 1]) b.push(part(G.cyl, TIRE, [x, 0.34, s * (W / 2 - 0.03)], [0.34, 0.25, 0.34], [Math.PI / 2, 0, 0]));
    if (taxi) {
      b.push(part(G.box, 0x1b1b1b, [0, 0.62, 0], [L * 0.7, 0.07, W + 0.02]));      // checker band
      l.push(part(G.box, 0xfff0a8, [-0.25, cy + cabH / 2 + 0.2, 0], [0.55, 0.2, 0.22]));
    }
    l.push(part(G.box, 0xfff2c4, [L / 2 + 0.01, 0.65, W * 0.33], [0.05, 0.14, 0.3]));
    l.push(part(G.box, 0xfff2c4, [L / 2 + 0.01, 0.65, -W * 0.33], [0.05, 0.14, 0.3]));
    l.push(part(G.box, 0xff2a2a, [-L / 2 - 0.01, 0.68, W * 0.36], [0.05, 0.16, 0.3]));
    l.push(part(G.box, 0xff2a2a, [-L / 2 - 0.01, 0.68, -W * 0.36], [0.05, 0.16, 0.3]));
  }
  const g = new THREE.Group();
  const bm = new THREE.Mesh(merge([...b, ...l]), bodyMat);
  bm.castShadow = true; bm.receiveShadow = true;
  g.add(bm);
  g.userData = { L, W, type, color };
  return g;
}

export function randomVehicleType() {
  const r = rng();
  if (r < 0.56) return 'taxi';
  if (r < 0.77) return 'sedan';
  if (r < 0.90) return 'suv';
  if (r < 0.96) return 'van';
  return 'bus';
}
export const randomCarColor = () => pick(CAR_COLORS);
export const TAXI_COLOR = 0xf5c400;

/* ---------------------------------------------------------------- signals */

const CYCLE = 27;
const PER_LANE = 8;
function phaseAt(t) {
  // returns [stateX, stateZ]
  if (t < 10) return ['green', 'red'];
  if (t < 12) return ['yellow', 'red'];
  if (t < 13.5) return ['red', 'red'];
  if (t < 23.5) return ['red', 'green'];
  if (t < 25.5) return ['red', 'yellow'];
  return ['red', 'red'];
}

const ON = {
  red: new THREE.Color(0xff3326), yellow: new THREE.Color(0xffc21a), green: new THREE.Color(0x2dff7a),
};
const OFF = { red: new THREE.Color(0x2c0a08), yellow: new THREE.Color(0x2c2205), green: new THREE.Color(0x07251a) };

export class Traffic {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.vehicles = [];
    this.lanes = new Map();
    this.obstacles = [];          // {x, z, r, v}: things cars must stop for (driven / abandoned cars)
    this.hooks = { honk: null };
    this.buildSignals();
    this.buildVehicles();
  }

  buildSignals() {
    const n = (N + 1) * (N + 1);
    this.sigOffset = new Float32Array(n);
    this.sigState = new Array(n).fill(null);
    const count = n * 4;
    const poleGeo = new THREE.CylinderGeometry(0.1, 0.12, 5.2, 8);
    poleGeo.translate(0, 2.6, 0);
    const headGeo = new THREE.BoxGeometry(0.55, 1.35, 0.42);
    const lampGeo = new THREE.CircleGeometry(0.15, 10);
    const poles = new THREE.InstancedMesh(poleGeo, new THREE.MeshStandardMaterial({ color: 0x2b3b33, roughness: 0.7 }), count);
    const heads = new THREE.InstancedMesh(headGeo, new THREE.MeshStandardMaterial({ color: 0x15181a, roughness: 0.6 }), count);
    const mk = () => new THREE.InstancedMesh(lampGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }), count);
    this.lampR = mk(); this.lampY = mk(); this.lampG = mk();
    for (const m of [poles, heads]) { m.castShadow = true; }
    this.poleMesh = poles; this.headMesh = heads;

    const dummy = new THREE.Object3D();
    const lampM = new THREE.Matrix4();
    // corner -> [sx, sz, controlling axis, facing yaw]
    const corners = [
      [1, -1, 'x', Math.PI / 2],     // NE pole faces +x
      [-1, -1, 'z', Math.PI],        // NW pole faces -z
      [-1, 1, 'x', -Math.PI / 2],    // SW pole faces -x
      [1, 1, 'z', 0],                // SE pole faces +z
    ];
    this.headAxis = [];
    for (let iz = 0; iz <= N; iz++) {
      for (let ix = 0; ix <= N; ix++) {
        const i = iz * (N + 1) + ix;
        this.sigOffset[i] = rng() * CYCLE;
        for (let c = 0; c < 4; c++) {
          const idx = i * 4 + c;
          const [sx, sz, axis, yaw] = corners[c];
          const px = roadCenter(ix) + sx * 8.7;
          const pz = roadCenter(iz) + sz * 8.7;
          dummy.position.set(px, SIDEWALK_H, pz);
          dummy.rotation.set(0, 0, 0);
          dummy.updateMatrix();
          poles.setMatrixAt(idx, dummy.matrix);
          dummy.position.set(px, SIDEWALK_H + 5.1, pz);
          dummy.rotation.set(0, yaw, 0);
          dummy.updateMatrix();
          heads.setMatrixAt(idx, dummy.matrix);
          const hm = dummy.matrix.clone();
          for (const [mesh, y] of [[this.lampR, 0.42], [this.lampY, 0], [this.lampG, -0.42]]) {
            lampM.makeTranslation(0, y, 0.215).premultiply(hm);
            mesh.setMatrixAt(idx, lampM);
          }
          this.headAxis[idx] = axis;
        }
      }
    }
    for (const m of [this.lampR, this.lampY, this.lampG]) { m.instanceColor = null; m.frustumCulled = false; }
    poles.frustumCulled = false; heads.frustumCulled = false;
    this.group.add(poles, heads, this.lampR, this.lampY, this.lampG);
    // initialise colors
    for (let i = 0; i < count; i++) {
      this.lampR.setColorAt(i, OFF.red); this.lampY.setColorAt(i, OFF.yellow); this.lampG.setColorAt(i, OFF.green);
    }
  }

  signal(ix, iz, axis, t) {
    const i = iz * (N + 1) + ix;
    const [sx, sz] = phaseAt((t + this.sigOffset[i]) % CYCLE);
    return axis === 'x' ? sx : sz;
  }

  updateSignals(t) {
    for (let iz = 0; iz <= N; iz++) {
      for (let ix = 0; ix <= N; ix++) {
        const i = iz * (N + 1) + ix;
        const [sx, sz] = phaseAt((t + this.sigOffset[i]) % CYCLE);
        const key = sx + sz;
        if (this.sigState[i] === key) continue;
        this.sigState[i] = key;
        for (let c = 0; c < 4; c++) {
          const idx = i * 4 + c;
          const st = this.headAxis[idx] === 'x' ? sx : sz;
          this.lampR.setColorAt(idx, st === 'red' ? ON.red : OFF.red);
          this.lampY.setColorAt(idx, st === 'yellow' ? ON.yellow : OFF.yellow);
          this.lampG.setColorAt(idx, st === 'green' ? ON.green : OFF.green);
        }
        this.lampR.instanceColor.needsUpdate = true;
        this.lampY.instanceColor.needsUpdate = true;
        this.lampG.instanceColor.needsUpdate = true;
      }
    }
  }

  buildVehicles() {
    for (const axis of ['x', 'z']) {
      for (let k = 0; k <= N; k++) {
        for (const dir of [1, -1]) {
          const count = PER_LANE;
          const slot = (2 * WRAP) / count;
          const key = `${axis}${k}${dir}`;
          const lane = [];
          for (let i = 0; i < count; i++) {
            const type = randomVehicleType();
            const color = type === 'taxi' ? TAXI_COLOR : randomCarColor();
            const mesh = makeVehicle(type, color);
            const { L, W } = mesh.userData;
            const off = axis === 'x' ? (dir > 0 ? LANE : -LANE) : (dir > 0 ? -LANE : LANE);
            const v = {
              mesh, axis, k, dir, L, W,
              lane: roadCenter(k) + off,
              s: -WRAP + (i + rand(0.2, 0.8)) * slot,
              v: 0,
              vmax: (type === 'bus' ? rand(8, 10) : rand(10.5, 13.5)),
              x: 0, z: 0, key, type, color,
              honkT: rand(10, type === 'taxi' ? 45 : 90), stuckT: 0, abandoned: false,
            };
            v.v = v.vmax * 0.8;
            mesh.rotation.y = axis === 'x' ? (dir > 0 ? 0 : Math.PI) : (dir > 0 ? -Math.PI / 2 : Math.PI / 2);
            this.group.add(mesh);
            this.vehicles.push(v);
            lane.push(v);
            this.place(v);
          }
          this.lanes.set(key, lane);
        }
      }
    }
  }

  place(v) {
    if (v.axis === 'x') { v.x = v.s; v.z = v.lane; } else { v.x = v.lane; v.z = v.s; }
    v.mesh.position.set(v.x, 0.01, v.z);
  }

  /** Take a car out of the AI traffic (the player is about to drive it). */
  removeVehicle(v) {
    const lane = this.lanes.get(v.key);
    const i = lane.indexOf(v); if (i >= 0) lane.splice(i, 1);
    const j = this.vehicles.indexOf(v); if (j >= 0) this.vehicles.splice(j, 1);
    v.v = 0; v.stuckT = 0;
  }

  /** Is there room at the start of this car's lane to put it back into traffic? */
  canReinsert(v) {
    const lane = this.lanes.get(v.key);
    const s0 = -WRAP * v.dir;
    return lane.every((c) => Math.abs(c.s - s0) > 35);
  }

  reinsert(v) {
    const lane = this.lanes.get(v.key);
    v.s = -WRAP * v.dir;
    v.v = v.vmax * 0.8; v.stuckT = 0; v.abandoned = false;
    v.mesh.rotation.y = v.axis === 'x' ? (v.dir > 0 ? 0 : Math.PI) : (v.dir > 0 ? -Math.PI / 2 : Math.PI / 2);
    lane.push(v);
    this.vehicles.push(v);
    this.place(v);
  }

  update(dt, t, player) {
    this.updateSignals(t);
    const B = 3.2;       // comfortable braking (m/s^2)
    const obs = this.obstacles;
    for (const [key, lane] of this.lanes) {
      if (!lane.length) continue;
      const dir = this.laneDir(key);
      lane.sort((a, b) => a.s * dir - b.s * dir);
      for (let i = 0; i < lane.length; i++) {
        const car = lane[i];
        let target = car.vmax;
        let blocked = false;
        const sf = car.s + dir * car.L / 2;
        const fx = car.axis === 'x' ? dir : 0, fz = car.axis === 'z' ? dir : 0;

        // traffic light ahead
        let bestDd = Infinity, bestM = -1;
        for (let m = 0; m <= N; m++) {
          const c = roadCenter(m);
          const dd = (c - sf) * dir - STOP_DIST;
          if (dd >= -0.35 && dd < bestDd) { bestDd = dd; bestM = m; }
        }
        if (bestM >= 0 && bestDd < 120) {
          const st = car.axis === 'x' ? this.signal(bestM, car.k, 'x', t) : this.signal(car.k, bestM, 'z', t);
          let mustStop = st === 'red';
          if (st === 'yellow') mustStop = bestDd > (car.v * car.v) / (2 * 5.5);
          if (mustStop) target = Math.min(target, Math.sqrt(2 * B * Math.max(bestDd, 0)));
        }

        // car ahead
        const lead = lane[i + 1];
        if (lead) {
          const gap = (lead.s - car.s) * dir - (lead.L + car.L) / 2;
          const lt = Math.sqrt(2 * B * Math.max(gap - 2.4, 0)) + 0.4 * lead.v;
          if (lt < target) { target = lt; if (lt < 1.5) blocked = true; }
        }

        // the pigeon crossing, plus anything else the player left or drives in the road
        if (player && player.y < 2.2) {
          const dx = player.x - car.x, dz = player.z - car.z;
          const along = dx * fx + dz * fz - car.L / 2;
          const lat = Math.abs(-dx * fz + dz * fx);
          if (along > -0.4 && along < 20 && lat < 2.1) target = Math.min(target, Math.sqrt(2 * B * Math.max(along - 1.2, 0)));
        }
        for (let o = 0; o < obs.length; o++) {
          const ob = obs[o];
          const dx = ob.x - car.x, dz = ob.z - car.z;
          if (Math.abs(dx) + Math.abs(dz) > 48) continue;
          const along = dx * fx + dz * fz - car.L / 2 - ob.r;
          const lat = Math.abs(-dx * fz + dz * fx);
          if (along > -0.5 && along < 24 && lat < car.W / 2 + ob.r * 0.9 + 0.3) {
            const ot = Math.sqrt(2 * B * Math.max(along - 1.4, 0)) + 0.3 * Math.max(ob.v, 0);
            if (ot < target) { target = ot; if (ot < 1.5) blocked = true; }
          }
        }

        car.v += clamp(target - car.v, -9 * dt, 2.8 * dt);
        if (car.v < 0.02 && target < 0.05) car.v = 0;
        car.s += dir * car.v * dt;
        if (car.s * dir > WRAP) car.s -= 2 * WRAP * dir;
        this.place(car);

        // honking: drivers stuck behind something lose patience; taxis also honk for fun
        car.stuckT = blocked && car.v < 0.3 ? car.stuckT + dt : 0;
        car.honkT -= dt;
        if (this.hooks.honk) {
          if (car.stuckT > 3 && car.honkT > 3) { car.honkT = 0; }
          if (car.honkT <= 0) {
            this.hooks.honk(car);
            car.honkT = car.stuckT > 3 ? rand(2.5, 5) : rand(25, car.type === 'taxi' ? 60 : 120);
          }
        }
      }
    }
  }

  laneDir(key) { return key.endsWith('-1') ? -1 : 1; }
}
