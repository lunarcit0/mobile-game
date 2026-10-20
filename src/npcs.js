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
    const center = Math.floor((N - 1) / 2);
    for (let i = 0; i < count; i++) {
      let bi, bj, startP = null;
      if (i < 16) {            // a welcome crowd on the sidewalk around the spawn point
        bi = center; bj = center;
        startP = RING_R + rand(-22, 22);
      } else if (i < count * 0.55) { bi = center + Math.floor(rng() * 3) - 1; bj = center + Math.floor(rng() * 3) - 1; }
      else { bi = Math.floor(rng() * N); bj = Math.floor(rng() * N); }
      const outfit = i % 5 === 0 ? 'suit' : i % 5 === 1 ? 'suit' : i % 5 === 4 ? 'bare' : 'casual';
      const pigeon = new Pigeon({ outfit, scale: rand(1.12, 1.32) });
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
