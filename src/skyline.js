// Distant backdrop for the sunset: the Empire State Building and the Brooklyn Bridge as dark silhouettes on the horizon.
// The group follows the player, so it always sits "at infinity" (never gets closer).
import * as THREE from 'three';

const R = 820;   // distance from the player

function mat(c) { return new THREE.MeshBasicMaterial({ color: c, fog: false, toneMapped: false }); }

function empireState(m, glow) {
  const g = new THREE.Group();
  const tiers = [[80, 0, 85], [66, 85, 150], [52, 150, 215], [42, 215, 280], [30, 280, 330], [22, 330, 352]];
  for (const [w, y0, y1] of tiers) {
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, y1 - y0, w * 0.8), m);
    b.position.y = (y0 + y1) / 2; g.add(b);
  }
  const dome = new THREE.Mesh(new THREE.CylinderGeometry(2, 7, 28, 8), m); dome.position.y = 366; g.add(dome);
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 1.6, 78, 6), m); mast.position.y = 419; g.add(mast);
  const lamp = new THREE.Mesh(new THREE.BoxGeometry(9, 9, 9), glow); lamp.position.y = 348; g.add(lamp);   // lit observatory band
  return g;
}

function brooklynBridge(m, glow) {
  const g = new THREE.Group();
  const SPAN = 480, TOWER_H = 90, DECK_Y = 34;
  for (const sx of [-1, 1]) {
    const x = sx * SPAN / 2;
    for (const dz of [-9, 9]) {            // two piers per tower
      const pier = new THREE.Mesh(new THREE.BoxGeometry(14, TOWER_H, 9), m); pier.position.set(x, TOWER_H / 2, dz); g.add(pier);
      const cap = new THREE.Mesh(new THREE.ConeGeometry(8, 12, 4), m); cap.position.set(x, TOWER_H + 6, dz); cap.rotation.y = Math.PI / 4; g.add(cap);
    }
    for (const y of [TOWER_H - 6, TOWER_H * 0.62]) { const beam = new THREE.Mesh(new THREE.BoxGeometry(14, 6, 28), m); beam.position.set(x, y, 0); g.add(beam); }   // arches' lintels
    const w = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2), glow); w.position.set(x, TOWER_H + 14, 0); g.add(w);
  }
  const deck = new THREE.Mesh(new THREE.BoxGeometry(SPAN + 360, 3, 26), m); deck.position.y = DECK_Y; g.add(deck);
  const trussH = new THREE.Mesh(new THREE.BoxGeometry(SPAN + 360, 7, 2), m); trussH.position.set(0, DECK_Y + 5, 13); g.add(trussH);
  const trussH2 = trussH.clone(); trussH2.position.z = -13; g.add(trussH2);
  // main cables (catenary-ish) between the tower tops, plus backstays to the deck ends
  const top = TOWER_H - 4;
  for (const dz of [-9, 9]) {
    const mid = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-SPAN / 2, top, dz), new THREE.Vector3(-SPAN / 4, DECK_Y + 22, dz), new THREE.Vector3(0, DECK_Y + 10, dz),
      new THREE.Vector3(SPAN / 4, DECK_Y + 22, dz), new THREE.Vector3(SPAN / 2, top, dz)]);
    g.add(new THREE.Mesh(new THREE.TubeGeometry(mid, 48, 1.1, 5), m));
    for (const sx of [-1, 1]) {
      const stay = new THREE.CatmullRomCurve3([new THREE.Vector3(sx * SPAN / 2, top, dz), new THREE.Vector3(sx * (SPAN / 2 + 90), DECK_Y + 30, dz), new THREE.Vector3(sx * (SPAN / 2 + 180), DECK_Y + 2, dz)]);
      g.add(new THREE.Mesh(new THREE.TubeGeometry(stay, 24, 0.9, 5), m));
    }
  }
  // diagonal stay cables fanning from the towers
  for (const sx of [-1, 1]) for (let i = 1; i <= 10; i++) for (const dz of [-9, 9]) {
    const len = Math.hypot(i * 17, top - DECK_Y);
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, len, 3), m);
    for (const dir of [-1, 1]) {
      const cc = c.clone();
      cc.position.set(sx * SPAN / 2 + dir * i * 8.5, (top + DECK_Y) / 2, dz);
      cc.rotation.z = -dir * Math.atan2(i * 17, top - DECK_Y);
      g.add(cc);
    }
  }
  return g;
}

export class Skyline {
  /** sunAz: azimuth of the sun (radians, same angle used for the sky). */
  constructor(sunAz) {
    this.group = new THREE.Group();
    const body = mat(0x2f2240), glow = mat(0xffc46b);
    const place = (obj, az, scale) => {
      obj.position.set(Math.sin(az) * R, 0, Math.cos(az) * R);
      obj.rotation.y = az + Math.PI; obj.scale.setScalar(scale);
      this.group.add(obj);
    };
    place(empireState(body, glow), sunAz - 0.07, 0.72);
    place(brooklynBridge(body, glow), sunAz + 0.33, 0.9);
    this.group.traverse((o) => { o.frustumCulled = false; });
  }
  update(x, z) { this.group.position.set(x, -4, z); }
}
