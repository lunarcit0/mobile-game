// Driving jobs: taxi fares and the bus route (score = 100 minus traffic infractions).
import * as THREE from 'three';
import { N, roadCenter, LANE } from './config.js';

const rc = roadCenter;
const BEACON_MAT = (c) => new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.32, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending });

export class Missions {
  /** o: { scene, traffic, vehicles, player, toast(msg,sec), coins(n), sfx(name), hud: {box, text, arrow}, onStats(kind) } */
  constructor(o) {
    this.o = o; this.m = null; this.hintCar = null;
    const g = new THREE.CylinderGeometry(3.2, 3.2, 50, 24, 1, true);
    this.beacon = new THREE.Mesh(g, BEACON_MAT(0x5dffa0)); this.beacon.visible = false; this.beacon.position.y = 25; this.beacon.frustumCulled = false;
    o.scene.add(this.beacon);
    this.bt = 0;
  }

  get active() { return !!this.m; }
  get kind() { return this.m ? this.m.kind : null; }

  /** A random road spot roughly `min`..`max` metres from (x,z). */
  spot(x, z, min, max) {
    for (let k = 0; k < 40; k++) {
      const ix = Math.floor(Math.random() * N), iz = Math.floor(Math.random() * (N + 1));
      const horiz = Math.random() < 0.5;
      const sx = horiz ? (rc(ix) + rc(ix + 1)) / 2 : rc(ix + (Math.random() < 0.5 ? 0 : 1));
      const sz = horiz ? rc(iz) : (rc(iz) + rc(Math.min(N, iz + 1))) / 2;
      if (Math.abs(sx) > 160 || Math.abs(sz) > 160) continue;
      const d = Math.hypot(sx - x, sz - z);
      if (d >= min && d <= max) return { x: sx, z: sz };
    }
    return { x: 0, z: 0 };
  }

  carEntered(car) {
    if (this.m) return;
    if (car.type === 'taxi') this.o.toast('Taxi! Press T to pick up a fare', 3.2);
    else if (car.type === 'bus') this.o.toast('City bus! Press T to start your route', 3.2);
  }

  /** T key */
  toggle() {
    const v = this.o.vehicles;
    if (this.m) { this.end(false, 'Shift cancelled'); return; }
    if (!v.active) return;
    const car = v.car, d = v.d;
    if (car.type === 'taxi') this.startTaxi(d);
    else if (car.type === 'bus') this.startBus(d);
    else this.o.toast('Only taxis and buses can take jobs', 2);
  }

  startTaxi(d) {
    const dest = this.spot(d.x, d.z, 90, 230);
    const dist = Math.hypot(dest.x - d.x, dest.z - d.z);
    this.m = { kind: 'taxi', dest, time: dist / 9 + 22, t0: dist / 9 + 22, dist, hp0: this.o.vehicles.car.hp ?? 100 };
    this.setBeacon(dest, 0xffd24a);
    this.o.sfx('ding'); this.o.toast('Fare picked up! Drive to the marker', 3);
  }

  startBus(d) {
    const stops = []; let cx = d.x, cz = d.z;
    for (let i = 0; i < 4; i++) { const s = this.spot(cx, cz, 70, 170); stops.push(s); cx = s.x; cz = s.z; }
    this.m = { kind: 'bus', stops, i: 0, score: 100, log: {}, speedT: 0, walkT: 0, lastSig: null, dwell: 0 };
    this.setBeacon(stops[0], 0x5dd2ff);
    this.o.sfx('ding'); this.o.toast('Bus route started: 4 stops. Obey signals, stay under the limit. Score 100!', 4);
  }

  setBeacon(p, c) { this.beacon.position.set(p.x, 25, p.z); this.beacon.material.color.setHex(c); this.beacon.visible = true; }

  /** Infractions reported by the game (bus route only). */
  penalty(what, pts) {
    const m = this.m; if (!m || m.kind !== 'bus') return;
    m.score = Math.max(0, m.score - pts); m.log[what] = (m.log[what] || 0) + 1;
    this.o.sfx('bad'); this.o.toast(`${what}  -${pts}   (score ${Math.round(m.score)})`, 1.6);
  }

  end(ok, msg, coins = 0) {
    this.beacon.visible = false; this.m = null;
    this.o.hud.box.style.display = 'none';
    if (coins > 0) { this.o.coins(coins); this.o.sfx('coin'); }
    this.o.toast(msg + (coins > 0 ? `   +${coins} coins` : ''), 4);
    if (ok) this.o.onStats?.('job');
  }

  update(dt, driving) {
    const m = this.m, v = this.o.vehicles;
    if (this.beacon.visible) { this.bt += dt; this.beacon.scale.set(1 + Math.sin(this.bt * 4) * 0.06, 1, 1 + Math.sin(this.bt * 4) * 0.06); }
    if (!m) return;
    if (!driving) { this.end(false, 'Job cancelled: you left the vehicle'); return; }
    const d = v.d, car = v.car;
    const kmh = Math.abs(d.speed) * 3.6;
    const hud = this.o.hud;
    hud.box.style.display = 'block';
    let target;
    if (m.kind === 'taxi') {
      target = m.dest; m.time -= dt;
      const dist = Math.hypot(target.x - d.x, target.z - d.z);
      hud.text.textContent = `TAXI  ${Math.round(dist)} m   ${Math.max(0, Math.ceil(m.time))} s`;
      if (dist < 9 && Math.abs(d.speed) < 6) {
        const dmg = Math.max(0, m.hp0 - (car.hp ?? 100));
        const pay = Math.max(5, Math.round(8 + m.dist / 14 + Math.max(0, m.time) * 0.8 - dmg * 0.3));
        this.end(true, m.time > 0 ? 'Fare complete! Nice driving' : 'Fare complete (late)', pay);
        this.o.stats && (this.o.stats.fares++);
        return;
      }
      if (m.time < -25) this.end(false, 'The passenger got out and walked away');
    } else {
      target = m.stops[m.i];
      const dist = Math.hypot(target.x - d.x, target.z - d.z);
      hud.text.textContent = `BUS  stop ${m.i + 1}/${m.stops.length}   ${Math.round(dist)} m   score ${Math.round(m.score)}`;
      // speeding (limit ~ 14 m/s)
      if (Math.abs(d.speed) > 14.5) { m.speedT += dt; if (m.speedT > 1.6) { m.speedT = 0; this.penalty('Speeding', 3); } } else m.speedT = Math.max(0, m.speedT - dt);
      // sidewalk driving
      const onRoad = this.onRoad(d.x, d.z);
      if (!onRoad) { m.walkT += dt; if (m.walkT > 1) { m.walkT = 0; this.penalty('Off the road', 4); } } else m.walkT = 0;
      // red lights: crossing into an intersection box while its signal for our axis is red
      const ix = Math.round(d.x / 66 + N / 2), iz = Math.round(d.z / 66 + N / 2);
      const inBox = ix >= 0 && ix <= N && iz >= 0 && iz <= N && Math.abs(d.x - rc(ix)) < 8 && Math.abs(d.z - rc(iz)) < 8;
      if (inBox && Math.abs(d.speed) > 2) {
        const key = ix + ',' + iz;
        if (m.lastSig !== key) {
          m.lastSig = key;
          const axis = Math.abs(Math.cos(d.rot)) > 0.7 ? 'x' : 'z';
          if (this.o.traffic.signal(ix, iz, axis, this.o.getTime()) === 'red') this.penalty('Ran a red light', 10);
        }
      } else if (!inBox) m.lastSig = null;
      // stops
      if (dist < 9 && Math.abs(d.speed) < 1.5) {
        m.dwell += dt;
        if (m.dwell > 0.8) {
          m.dwell = 0; this.o.sfx('ding'); m.i++;
          if (m.i >= m.stops.length) {
            const pay = Math.round(8 + m.score * 0.45);
            const grade = m.score >= 90 ? 'Perfect driver!' : m.score >= 70 ? 'Good route' : m.score >= 40 ? 'Rough ride' : 'Bad driving';
            this.end(true, `Route done: score ${Math.round(m.score)}. ${grade}`, pay);
            this.o.stats && (this.o.stats.jobs++);
            return;
          }
          this.setBeacon(m.stops[m.i], 0x5dd2ff); this.o.toast('Next stop!', 1.5);
        }
      } else m.dwell = 0;
      if (m.score <= 0) { this.end(false, 'You were fired for terrible driving'); return; }
    }
    // direction arrow (up = camera forward)
    const y = this.o.player.camYaw, fx = -Math.sin(y), fz = -Math.cos(y), rx = Math.cos(y), rz = -Math.sin(y);
    const dx = target.x - d.x, dz = target.z - d.z;
    const a = Math.atan2(dx * rx + dz * rz, dx * fx + dz * fz);
    hud.arrow.style.transform = `rotate(${a}rad)`;
  }

  onRoad(x, z) {
    const nx = Math.round(x / 66 + N / 2), nz = Math.round(z / 66 + N / 2);
    const dx = Math.abs(x - rc(Math.max(0, Math.min(N, nx)))), dz = Math.abs(z - rc(Math.max(0, Math.min(N, nz))));
    return dx < 8.4 || dz < 8.4;
  }
}
