// One pooled Points object for every little visual effect: smoke, sparks, feathers, stars, water, dust.
import * as THREE from 'three';

const MAX = 700;

const VERT = `
attribute float size; attribute vec4 col;
varying vec4 vCol;
void main() {
  vCol = col;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * (420.0 / max(-mv.z, 0.5));
  gl_Position = projectionMatrix * mv;
}`;
const FRAG = `
varying vec4 vCol;
void main() {
  vec2 p = gl_PointCoord - 0.5;
  float d = length(p) * 2.0;
  if (d > 1.0) discard;
  float a = smoothstep(1.0, 0.35, d) * vCol.a;
  gl_FragColor = vec4(vCol.rgb, a);
}`;

export class Fx {
  constructor(scene) {
    this.pos = new Float32Array(MAX * 3);
    this.size = new Float32Array(MAX);
    this.col = new Float32Array(MAX * 4);
    this.p = [];
    for (let i = 0; i < MAX; i++) { this.p.push({ on: false, x: 0, y: -999, z: 0, vx: 0, vy: 0, vz: 0, t: 0, life: 1, s0: 1, s1: 1, c: [1, 1, 1], a: 1, g: 0, drag: 0, flutter: 0 }); this.pos[i * 3 + 1] = -999; }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('col', new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage));
    this.mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false });
    this.points = new THREE.Points(geo, this.mat);
    this.points.frustumCulled = false;
    this.group = new THREE.Group(); this.group.add(this.points);
    scene.add(this.group);
    this.cursor = 0;
    this.geo = geo;
  }

  emit(o) {
    const q = this.p[this.cursor]; this.cursor = (this.cursor + 1) % MAX;
    q.on = true; q.t = 0;
    q.x = o.x; q.y = o.y; q.z = o.z; q.vx = o.vx ?? 0; q.vy = o.vy ?? 0; q.vz = o.vz ?? 0;
    q.life = o.life ?? 1; q.s0 = o.s0 ?? 0.3; q.s1 = o.s1 ?? q.s0; q.a = o.a ?? 1; q.g = o.g ?? 0; q.drag = o.drag ?? 0; q.flutter = o.flutter ?? 0;
    const c = new THREE.Color(o.color ?? 0xffffff); q.c = [c.r, c.g, c.b];
  }

  smoke(x, y, z, dark = 0, n = 1) {
    for (let i = 0; i < n; i++) this.emit({
      x: x + (Math.random() - 0.5) * 0.3, y, z: z + (Math.random() - 0.5) * 0.3,
      vx: (Math.random() - 0.5) * 0.6, vy: 1.2 + Math.random() * 0.8, vz: (Math.random() - 0.5) * 0.6,
      life: 1.6 + Math.random() * 0.8, s0: 0.5, s1: 1.9, a: 0.55, color: dark > 0.5 ? 0x1b1b1b : 0xb8bcc2, drag: 0.6,
    });
  }
  sparks(x, y, z, n = 10) {
    for (let i = 0; i < n; i++) this.emit({
      x, y, z, vx: (Math.random() - 0.5) * 7, vy: 1 + Math.random() * 4, vz: (Math.random() - 0.5) * 7,
      life: 0.35 + Math.random() * 0.35, s0: 0.14, s1: 0.05, a: 1, color: Math.random() < 0.5 ? 0xffd24a : 0xff8a2a, g: 14,
    });
  }
  feathers(x, y, z, n = 14) {
    for (let i = 0; i < n; i++) this.emit({
      x, y, z, vx: (Math.random() - 0.5) * 4, vy: 1.5 + Math.random() * 3, vz: (Math.random() - 0.5) * 4,
      life: 1.4 + Math.random() * 1.2, s0: 0.2, s1: 0.16, a: 0.95, color: Math.random() < 0.6 ? 0xf2f2f2 : 0xb7bec8, g: 2.2, drag: 1.5, flutter: 3,
    });
  }
  stars(x, y, z, n = 1) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * 6.28;
      this.emit({ x: x + Math.cos(a) * 0.35, y, z: z + Math.sin(a) * 0.35, vx: -Math.sin(a) * 0.8, vy: 0.3, vz: Math.cos(a) * 0.8, life: 0.7, s0: 0.22, s1: 0.1, a: 1, color: 0xffe14d });
    }
  }
  water(x, y, z, n = 3) {
    for (let i = 0; i < n; i++) this.emit({
      x, y, z, vx: (Math.random() - 0.5) * 1.8, vy: 6.5 + Math.random() * 3, vz: (Math.random() - 0.5) * 1.8,
      life: 1.5, s0: 0.2, s1: 0.12, a: 0.8, color: 0xbfe6ff, g: 13,
    });
  }
  dust(x, y, z, n = 6) {
    for (let i = 0; i < n; i++) this.emit({
      x, y, z, vx: (Math.random() - 0.5) * 3, vy: 0.3 + Math.random() * 0.8, vz: (Math.random() - 0.5) * 3,
      life: 0.8, s0: 0.4, s1: 1.2, a: 0.35, color: 0xcfc6b4, drag: 2,
    });
  }
  paper(x, y, z, n = 5) {
    for (let i = 0; i < n; i++) this.emit({
      x, y, z, vx: (Math.random() - 0.5) * 3, vy: 2 + Math.random() * 2, vz: (Math.random() - 0.5) * 3,
      life: 1.6, s0: 0.16, s1: 0.14, a: 1, color: 0xf4f1e6, g: 4, drag: 1, flutter: 2,
    });
  }

  update(dt) {
    let any = false;
    for (let i = 0; i < MAX; i++) {
      const q = this.p[i];
      if (!q.on) continue;
      any = true;
      q.t += dt;
      if (q.t >= q.life) { q.on = false; this.pos[i * 3 + 1] = -999; this.col[i * 4 + 3] = 0; continue; }
      const k = Math.max(0, 1 - q.drag * dt);
      q.vx *= k; q.vz *= k; if (q.drag) q.vy *= k;
      q.vy -= q.g * dt;
      if (q.flutter) { q.vx += Math.sin(q.t * 9 + i) * q.flutter * dt; q.vz += Math.cos(q.t * 8 + i) * q.flutter * dt; }
      q.x += q.vx * dt; q.y += q.vy * dt; q.z += q.vz * dt;
      if (q.g && q.y < 0.05) { q.y = 0.05; q.vy = 0; q.vx *= 0.8; q.vz *= 0.8; }
      const f = q.t / q.life;
      this.pos[i * 3] = q.x; this.pos[i * 3 + 1] = q.y; this.pos[i * 3 + 2] = q.z;
      this.size[i] = q.s0 + (q.s1 - q.s0) * f;
      this.col[i * 4] = q.c[0]; this.col[i * 4 + 1] = q.c[1]; this.col[i * 4 + 2] = q.c[2];
      this.col[i * 4 + 3] = q.a * (f < 0.12 ? f / 0.12 : 1 - Math.pow(f, 2.2));
    }
    if (any || this._dirty) {
      this.geo.attributes.position.needsUpdate = true; this.geo.attributes.size.needsUpdate = true; this.geo.attributes.col.needsUpdate = true;
      this._dirty = any;
    }
  }
}
