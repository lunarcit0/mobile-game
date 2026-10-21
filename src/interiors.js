// Enterable interiors: twelve themed shops and a subway station.
// Each interior is built far away from the city (own x offset) and shown/hidden by the game.
import * as THREE from 'three';
import { G, part, merge, vcMaterial, unlitVC } from './gfx.js';
import { Pigeon } from './pigeon.js';
import * as T from './textures.js';
import { rng, rand, pick, clamp, angleLerp } from './config.js';
import { boutiqueBuilder } from './boutique.js';

const GOODS = [0xd8433a, 0xe2a62b, 0x3a86d6, 0x4caf50, 0xf2f2f2, 0xe86fa5, 0x7e57c2, 0xff7a3d];
const WOOD = 0x8a5a35, DWOOD = 0x4a2e1e, STEEL = 0xb9bec4, CREAM = 0xf3efe6;

/* =========================================================================
   A tiny scene builder: boxes/cylinders merged into one mesh, with colliders.
   ========================================================================= */

class Room {
  constructor(ox) {
    this.ox = ox;
    this.parts = []; this.glass = []; this.lights = [];
    this.colliders = { boxes: [], circles: [] };
    this.group = new THREE.Group();
    this.group.position.x = ox;
    this.extra = [];
  }
  box(cx, cz, w, d, h, color, y0 = 0, solid = false) {
    this.parts.push(part(G.box, color, [cx, y0 + h / 2, cz], [w, h, d]));
    if (solid) this.colliders.boxes.push({ minX: this.ox + cx - w / 2, maxX: this.ox + cx + w / 2, minZ: cz - d / 2, maxZ: cz + d / 2, h: y0 + h });
  }
  cyl(cx, cz, r, h, color, y0 = 0, solid = false) {
    this.parts.push(part(G.cyl, color, [cx, y0 + h / 2, cz], [r, h, r]));
    if (solid) this.colliders.circles.push({ x: this.ox + cx, z: cz, r, h: y0 + h });
  }
  sph(cx, y, cz, r, color, sy = 1) { this.parts.push(part(G.sphere, color, [cx, y, cz], [r, r * sy, r])); }
  raw(p) { this.parts.push(p); }
  glassBox(cx, cz, w, d, h, y0) { this.glass.push(part(G.box, 0xbfe6f5, [cx, y0 + h / 2, cz], [w, h, d])); }
  lightBox(cx, cz, w, d, h, color, y0) { this.lights.push(part(G.box, color, [cx, y0 + h / 2, cz], [w, h, d])); }
  lightSph(cx, y, cz, r, color) { this.lights.push(part(G.sphere, color, [cx, y, cz], [r, r, r])); }
  finish() {
    const solid = new THREE.Mesh(merge(this.parts), vcMaterial({ roughness: 0.85 }));
    solid.castShadow = false; solid.receiveShadow = false;
    this.group.add(solid);
    if (this.glass.length) {
      this.group.add(new THREE.Mesh(merge(this.glass), new THREE.MeshStandardMaterial({ vertexColors: true, transparent: true, opacity: 0.28, roughness: 0.1 })));
    }
    if (this.lights.length) this.group.add(new THREE.Mesh(merge(this.lights), unlitVC));
    for (const m of this.extra) this.group.add(m);
  }
}

/* ------------------------------------------------------------ prop helpers */

function counter(R, x0, x1, z, { depth = 0.9, color = 0xe9e6df, top = 0xb0b4b8, h = 1.05 } = {}) {
  const cx = (x0 + x1) / 2, w = x1 - x0;
  R.box(cx, z, w, depth, h, color, 0, true);
  R.box(cx, z, w + 0.12, depth + 0.16, 0.07, top, h, false);
}

function register(R, x, z, y = 1.12) {
  R.box(x, z, 0.42, 0.34, 0.22, 0x25282c, y);
  R.lightBox(x, z + 0.0, 0.3, 0.04, 0.14, 0x9fe3ff, y + 0.24);
}

function shelf(R, cx, cz, len, tiers, h, goods, alongX = true, solid = true) {
  const dep = 0.55;
  const w = alongX ? len : dep, d = alongX ? dep : len;
  R.box(cx, cz, alongX ? len : 0.06, alongX ? 0.06 : len, h, STEEL, 0);          // spine panel
  for (let t = 0; t <= tiers; t++) {
    const y = 0.12 + (t * (h - 0.2)) / tiers;
    R.box(cx, cz, w, d, 0.045, 0xd9dcdf, y);
    if (t === tiers || !goods || !goods.length) continue;
    const step = 0.34;
    for (let a = -len / 2 + 0.25; a < len / 2 - 0.15; a += step) {
      if (rng() < 0.12) continue;
      const gh = rand(0.18, 0.34);
      const gx = alongX ? cx + a : cx + rand(-0.12, 0.12);
      const gz = alongX ? cz + rand(-0.12, 0.12) : cz + a;
      R.box(gx, gz, 0.22, 0.2, gh, pick(goods), y + 0.045);
    }
  }
  if (solid) R.colliders.boxes.push({ minX: R.ox + cx - w / 2, maxX: R.ox + cx + w / 2, minZ: cz - d / 2, maxZ: cz + d / 2, h });
}

function table(R, cx, cz, r, top, stools = 2, legColor = 0x2a2a2a) {
  R.cyl(cx, cz, 0.07, 0.72, legColor, 0, false);
  R.cyl(cx, cz, r, 0.05, top, 0.72, false);
  R.colliders.circles.push({ x: R.ox + cx, z: cz, r: r * 0.9, h: 0.78 });
  for (let i = 0; i < stools; i++) {
    const a = (i / stools) * Math.PI * 2 + 0.6;
    R.cyl(cx + Math.cos(a) * (r + 0.32), cz + Math.sin(a) * (r + 0.32), 0.17, 0.45, 0x8c1d1d, 0, true);
  }
}

function plant(R, x, z, s = 1) {
  R.cyl(x, z, 0.3 * s, 0.5 * s, 0xa04a2c, 0, true);
  for (let i = 0; i < 5; i++) R.sph(x + rand(-0.15, 0.15), 0.8 * s + rand(0, 0.5) * s, z + rand(-0.15, 0.15), 0.27 * s, pick([0x2f7a3a, 0x3f9a4a, 0x2a6a35]));
}

function bookcase(R, cx, cz, len, alongX = true, h = 2.4) {
  const dep = 0.45;
  R.box(cx, cz, alongX ? len : 0.05, alongX ? 0.05 : len, h, DWOOD, 0);
  const w = alongX ? len : dep, d = alongX ? dep : len;
  for (let t = 0; t <= 5; t++) {
    const y = 0.1 + t * (h - 0.15) / 5;
    R.box(cx, cz, w, d, 0.04, DWOOD, y);
    if (t === 5) continue;
    for (let a = -len / 2 + 0.1; a < len / 2 - 0.1; a += 0.12) {
      if (rng() < 0.06) continue;
      const bh = rand(0.28, 0.4);
      R.box(alongX ? cx + a : cx + rand(-0.04, 0.04), alongX ? cz + rand(-0.04, 0.04) : cz + a, alongX ? 0.09 : 0.26, alongX ? 0.26 : 0.09, bh, pick([0x8c1d1d, 0x1f4e79, 0x2f6b3f, 0xc9a227, 0x5b3a1e, 0x6a3d8c, 0xe8e0d0, 0x222222]), y + 0.04);
    }
  }
  R.colliders.boxes.push({ minX: R.ox + cx - w / 2, maxX: R.ox + cx + w / 2, minZ: cz - d / 2, maxZ: cz + d / 2, h });
}

function glassCase(R, x0, x1, z, y0 = 1.12) {
  R.glassBox((x0 + x1) / 2, z, x1 - x0, 0.75, 0.55, y0);
}

/* ====================================================================
   The 12 shops. Each fills the room and returns its configuration.
   Room: x in [-8, 8], z in [-5.5, 5.5]; door in the south wall (z = +5.5).
   ==================================================================== */

const SHOP_BUILDERS = [
  // 0 DELI
  (R) => {
    shelf(R, 0, -5.15, 13, 5, 2.4, GOODS);
    counter(R, -6.8, 1.6, -2.6);
    glassCase(R, -6.5, 0.9, -2.6);
    for (let i = 0; i < 6; i++) R.box(-6 + i * 1.1, -2.6, 0.5, 0.3, 0.16, pick([0xb3392a, 0xd08a5a, 0xe8cf9a]), 1.19);
    register(R, 2.4, -2.6);
    for (let i = 0; i < 6; i++) R.cyl(-5.4 + i * 1.3, -2.6, 0.09, 0.55, 0x7a2e22, 2.55);
    for (const z of [-4.2, -2.9, -1.6, -0.3, 1.0]) {
      R.box(7.55, z, 0.8, 1.2, 2.1, 0xf4f4f4, 0, true);
      R.box(7.13, z, 0.05, 1.0, 1.8, 0x2b4a6a, 0.15);
      for (let r = 0; r < 4; r++) for (let k = 0; k < 4; k++) R.box(7.1, z - 0.4 + k * 0.27, 0.05, 0.14, 0.26, pick(GOODS), 0.3 + r * 0.42);
    }
    shelf(R, -4, 0.1, 4.6, 4, 1.9, GOODS);
    return { floor: 'checkerGreen', wall: 0xe9e2d3, accent: 0x2f6b3f, neon: ['DELI', '#7CFFB0'], keepers: [{ x0: -6, x1: 1, z: -3.85 }], zone: [-5.5, 5.5, 1.6, 3.8], crumbs: [-2.5, -1.3], apron: 0x2f6b3f };
  },
  // 1 PIZZA
  (R) => {
    counter(R, -3.5, 3.5, -2.4, { color: 0xb3261e, top: 0xe9e1d0 });
    glassCase(R, -3, 3, -2.4);
    for (let i = 0; i < 3; i++) { R.cyl(-2 + i * 2, -2.4, 0.42, 0.04, 0xe9b24a, 1.2); R.cyl(-2 + i * 2, -2.4, 0.3, 0.05, 0xc0392b, 1.22); }
    register(R, 3.0, -2.4);
    R.box(-5.2, -4.5, 3.2, 1.8, 2.0, 0x8c3b2a, 0, true);
    R.sph(-5.2, 2.0, -4.5, 1.55, 0x8c3b2a, 0.55);
    R.box(-5.2, -3.57, 1.0, 0.1, 0.75, 0x140b06, 0.45);
    R.lightBox(-5.2, -3.6, 0.8, 0.05, 0.5, 0xff7a1a, 0.55);
    for (let i = 0; i < 4; i++) R.box(5.6, -4.6, 0.95, 0.95, 0.22, 0xe9dcc0, i * 0.22, false);
    R.colliders.boxes.push({ minX: R.ox + 5.1, maxX: R.ox + 6.1, minZ: -5.1, maxZ: -4.1, h: 0.9 });
    R.box(1.6, -5.4, 4.4, 0.08, 1.7, 0x1d1d1d, 1.3);
    for (let i = 0; i < 6; i++) R.lightBox(1.6, -5.34, 3.6 - (i % 2) * 1.0, 0.03, 0.05, i % 3 === 0 ? 0xffd24a : 0xffffff, 2.5 - i * 0.22);
    table(R, -6.2, 0.0, 0.55, 0xb3261e, 2); table(R, 6.2, 0.0, 0.55, 0xb3261e, 2);
    table(R, -6.3, -2.2, 0.55, 0xe9e1d0, 2); table(R, 6.3, -2.2, 0.55, 0xe9e1d0, 2);
    return { floor: 'checkerRed', wall: 0xf0e0c8, accent: 0xb3261e, neon: ['PIZZA', '#ff6a4a'], keepers: [{ x0: -3, x1: 3, z: -3.7 }], zone: [-4.2, 4.2, 1.5, 3.8], crumbs: [0, -1.1], apron: 0xb3261e };
  },
  // 2 BAGELS
  (R) => {
    shelf(R, 0, -5.15, 13, 4, 2.3, null);
    for (let t = 0; t < 4; t++) for (let i = 0; i < 9; i++) {
      const x = -5.6 + i * 1.4, y = 0.2 + t * 0.52;
      R.cyl(x, -5.1, 0.34, 0.2, 0xb5844e, y + 0.04);
      for (let k = 0; k < 3; k++) R.sph(x + (k - 1) * 0.16, y + 0.3, -5.1 + rand(-0.08, 0.08), 0.15, pick([0xd7a86e, 0xe6c58f, 0xc4935a]), 0.5);
    }
    counter(R, -6.2, 2.2, -2.6, { color: 0xd8c3a0, top: 0x6a4630 });
    glassCase(R, -5.8, -1, -2.6);
    register(R, 1.4, -2.6);
    R.box(5.4, -2.6, 3.0, 0.9, 1.1, 0xf4f4f4, 0, true);
    for (let i = 0; i < 6; i++) R.box(4.4 + i * 0.4, -2.6, 0.3, 0.3, 0.12, pick(GOODS), 1.1);
    table(R, -6.2, 0.3, 0.55, 0xd8c3a0, 2); table(R, 6.2, 0.3, 0.55, 0xd8c3a0, 2);
    plant(R, 7.2, 3.6);
    return { floor: 'wood', wall: 0xeadfc8, accent: 0x2a4d8f, neon: ['BAGELS', '#ffe29a'], keepers: [{ x0: -5.5, x1: 1.5, z: -3.9 }], zone: [-5, 5.5, 1.6, 3.8], crumbs: [-2, -1.3], apron: 0x2a4d8f };
  },
  // 3 CAFE
  (R) => {
    shelf(R, 0, -5.15, 13, 4, 2.2, [0xf2f2f2, 0xd7c2a0, 0x4a2f22]);
    counter(R, -3.5, 3.5, -2.8, { color: 0x4a2f22, top: 0xd9d4c8 });
    R.box(0, -2.9, 0.9, 0.5, 0.55, STEEL, 1.12);
    R.cyl(-0.5, -2.9, 0.12, 0.25, 0x2a2a2a, 1.12); R.cyl(0.5, -2.9, 0.12, 0.25, 0xc9c9c9, 1.12);
    glassCase(R, -3.2, -1.2, -2.8);
    for (let i = 0; i < 5; i++) R.cyl(-3 + i * 0.4, -2.8, 0.13, 0.08, pick([0xe9b87a, 0xf2a6c1, 0xd9b38c]), 1.14);
    register(R, 2.8, -2.8);
    table(R, -5.6, -1.4, 0.5, 0xe9e1d0, 2); table(R, 5.6, -1.4, 0.5, 0xe9e1d0, 2);
    table(R, -6.4, 0.5, 0.5, 0xe9e1d0, 2); table(R, 6.4, 0.5, 0.5, 0xe9e1d0, 2);
    R.box(7.4, -4.2, 1.3, 2.6, 0.5, 0x8a3b3b, 0, true); R.box(7.85, -4.2, 0.4, 2.6, 0.5, 0x8a3b3b, 0.5, true);
    plant(R, -7.2, 3.8); plant(R, 7.2, 3.8, 1.2);
    for (const x of [-4, -1.3, 1.3, 4]) { R.cyl(x, 0.0, 0.015, 0.7, 0x222222, 2.7); R.lightSph(x, 2.55, 0.0, 0.22, 0xffd88a); }
    return { floor: 'wood', wall: 0xe5d6bd, accent: 0x4a2f22, neon: ['CAFE', '#ffcf8a'], keepers: [{ x0: -3, x1: 3, z: -4.0 }], zone: [-4.4, 4.4, 1.6, 3.8], crumbs: [0, -1.4], apron: 0x4a2f22 };
  },
  // 4 PHARMACY
  (R) => {
    shelf(R, -1.5, -0.9, 9, 4, 1.9, [0xffffff, 0x2fa3a0, 0xd8433a, 0x3a86d6]);
    shelf(R, -1.5, -3.0, 9, 4, 1.9, [0xffffff, 0x2fa3a0, 0xe2a62b, 0x7e57c2]);
    counter(R, 3.6, 7.6, -4.3, { color: 0xf1f1f1, top: 0x2fa3a0 });
    register(R, 4.6, -4.3);
    R.box(0, -5.4, 13, 0.1, 1.6, 0xe6f4f1, 0.9);
    for (let i = 0; i < 10; i++) R.lightBox(-5.6 + i * 1.25, -5.34, 0.9, 0.03, 0.5, i % 2 ? 0xbfe9e2 : 0xffffff, 1.2 + (i % 3) * 0.4);
    R.box(-7.55, -3.0, 0.8, 3.8, 1.8, 0xf1f1f1, 0, true);      // fridge units
    R.box(-7.15, -3.0, 0.05, 3.6, 1.5, 0x2b4a6a, 0.15);
    R.cyl(7.2, 3.6, 0.35, 0.9, 0xd8dcdc, 0, true);               // display scale
    R.lightBox(0, -5.4, 0.7, 0.03, 0.7, 0x32c28a, 2.5);
    R.lightBox(0, -5.4, 0.2, 0.03, 0.7, 0x32c28a, 2.5);
    return { floor: 'tile', wall: 0xf0f5f4, accent: 0x2fa3a0, neon: ['PHARMACY', '#7CFFD6'], keepers: [{ x0: 4.2, x1: 7.0, z: -5.1 }], zone: [-5, 5.5, 1.6, 3.8], crumbs: [5.6, -3.2], apron: 0x2fa3a0 };
  },
  // 5 BAR & GRILL
  (R) => {
    counter(R, -6.5, 6.5, -3.4, { depth: 1.0, color: 0x3b2418, top: 0x6a4630 });
    for (let i = 0; i < 9; i++) R.cyl(-6 + i * 1.5, -2.35, 0.22, 0.72, 0x8c1d1d, 0, true);
    for (let t = 0; t < 3; t++) {
      R.box(0, -5.2, 13, 0.4, 0.07, 0x3b2418, 1.1 + t * 0.55);
      for (let i = 0; i < 24; i++) R.cyl(-6.3 + i * 0.55, -5.2, 0.08, 0.34, pick([0x2f6b3f, 0x8c5a1e, 0xd8d0b8, 0x1f4e79, 0x8c1d1d]), 1.17 + t * 0.55);
    }
    R.box(-7.4, 0.2, 1.1, 2.4, 0.5, 0x8c1d1d, 0, true); R.box(-7.85, 0.2, 0.3, 2.4, 0.5, 0x8c1d1d, 0.5, true);
    R.box(7.4, 0.2, 1.1, 2.4, 0.5, 0x8c1d1d, 0, true); R.box(7.85, 0.2, 0.3, 2.4, 0.5, 0x8c1d1d, 0.5, true);
    R.box(-6.2, 0.2, 0.9, 1.4, 0.05, 0x3b2418, 0.75); R.box(6.2, 0.2, 0.9, 1.4, 0.05, 0x3b2418, 0.75);
    R.lightBox(5.2, -5.38, 2.2, 0.05, 1.2, 0x8fb1ff, 1.7);          // TV
    R.lightBox(-5.2, -5.38, 1.6, 0.05, 0.5, 0xff4a4a, 2.5);         // beer sign
    return { floor: 'darkwood', wall: 0x6b4a34, accent: 0x8c1d1d, neon: ['BAR & GRILL', '#ffc247'], keepers: [{ x0: -6, x1: 6, z: -4.4 }], zone: [-5, 5, 1.6, 3.8], crumbs: [0, -1.9], apron: 0x1d1d1d };
  },
  // 6 LAUNDRY
  (R) => {
    for (let i = 0; i < 6; i++) for (const s of [-1, 1]) {
      const x = 7.3 * s, z = -4.2 + i * 1.4;
      R.box(x, z, 0.9, 1.15, 1.05, 0xf1f1f1, 0, true);
      R.raw(part(G.cyl, 0x1f2b38, [x - s * 0.46, 0.55, z], [0.34, 0.06, 0.34], [0, 0, Math.PI / 2]));
      R.raw(part(G.cyl, 0xc9d3dc, [x - s * 0.45, 0.55, z], [0.4, 0.04, 0.4], [0, 0, Math.PI / 2]));
      R.box(x, z, 0.9, 1.15, 0.12, pick([0x3a86d6, 0xd8433a, 0x4caf50]), 1.05);
    }
    R.box(0, -0.8, 5, 1.2, 0.9, 0xcfd3d6, 0, true);
    for (let i = 0; i < 4; i++) { R.box(-3 + i * 2, -4.9, 0.55, 0.55, 0.45, 0x3a86d6, 0, true); R.box(-3 + i * 2, -5.15, 0.55, 0.08, 0.4, 0x3a86d6, 0.45); }
    R.box(4.2, -2.9, 3.4, 0.7, 1.0, WOOD, 0, true);
    register(R, 5.0, -2.9, 1.0);
    R.box(-3.5, -5.1, 0.9, 0.7, 1.7, 0x1f4e79, 0, true);          // change machine
    R.lightBox(-3.5, -4.74, 0.5, 0.03, 0.3, 0x9fe3ff, 1.2);
    for (let i = 0; i < 4; i++) R.box(-1.5 + i * 0.9, -0.8, 0.5, 0.35, 0.2, pick(GOODS), 0.9);   // folded laundry
    return { floor: 'tile', wall: 0xe3eef4, accent: 0x2e6f9e, neon: ['24 HR LAUNDRY', '#8fd8ff'], keepers: [{ x0: 3, x1: 6, z: -3.8 }], zone: [-5.2, 5.2, 0.8, 3.8], crumbs: [4.2, -1.8], apron: 0x2e6f9e };
  },
  // 7 FLOWERS
  (R) => {
    const steps = [[-4.7, 1.6, 0.45], [-5.0, 1.1, 0.85], [-5.2, 0.6, 1.25]];
    for (const [z, d, h] of steps) R.box(0, z, 13, d, h, WOOD, 0, true);
    steps.forEach(([z, d, h], si) => {
      for (let i = 0; i < 12; i++) {
        const x = -5.6 + i * 1.02;
        R.cyl(x, z + (si === 0 ? 0.3 : 0), 0.22, 0.35, 0xb8bec4, h);
        const c = pick([0xe8456b, 0xffd23f, 0xf8f8f8, 0xb06ad8, 0xff8a3d, 0xff6fa5]);
        for (let k = 0; k < 6; k++) R.sph(x + rand(-0.15, 0.15), h + 0.5 + rand(0, 0.25), z + (si === 0 ? 0.3 : 0) + rand(-0.15, 0.15), 0.13, rng() < 0.7 ? c : pick([0xe8456b, 0xffd23f, 0xf8f8f8]));
        R.cyl(x, z + (si === 0 ? 0.3 : 0), 0.025, 0.4, 0x3f8a3f, h + 0.35);
      }
    });
    R.box(0, -0.8, 3, 1.4, 0.8, WOOD, 0, true);
    for (let i = 0; i < 4; i++) { R.cyl(-1 + i * 0.67, -0.8, 0.2, 0.3, 0xb8bec4, 0.8); for (let k = 0; k < 5; k++) R.sph(-1 + i * 0.67 + rand(-0.12, 0.12), 1.3 + rand(0, 0.2), -0.8 + rand(-0.12, 0.12), 0.12, pick([0xe8456b, 0xffd23f, 0xb06ad8, 0xff8a3d])); }
    counter(R, 4.0, 7.6, -1.8, { color: WOOD, top: 0xe9e1d0 });
    register(R, 4.8, -1.8);
    plant(R, -7.2, 3.6, 1.3); plant(R, 7.2, 3.8);
    return { floor: 'wood', wall: 0xeee3d6, accent: 0x7a2e63, neon: ['FLOWERS', '#ff9bd0'], keepers: [{ x0: 4.2, x1: 7.2, z: -2.9 }], zone: [-5, 3.5, 1.2, 3.8], crumbs: [5.6, -0.8], apron: 0x7a2e63 };
  },
  // 8 BOOKS
  (R) => {
    bookcase(R, 0, -5.2, 13, true);
    bookcase(R, -2.5, -1.2, 9, true); bookcase(R, -2.5, -3.2, 9, true);
    bookcase(R, -7.7, 0.5, 4.5, false); bookcase(R, 7.7, -3.4, 4, false);
    counter(R, 3.8, 7.4, -0.2, { depth: 0.8, color: DWOOD, top: 0x6a4630 });
    register(R, 4.5, -0.2);
    R.box(6.3, -2.4, 1.1, 1.0, 0.45, 0x8c1d1d, 0, true); R.box(6.3, -2.85, 1.1, 0.2, 0.55, 0x8c1d1d, 0.45, true);
    R.cyl(7.3, -1.6, 0.05, 1.7, 0x222222, 0); R.lightSph(7.3, 1.85, -1.6, 0.25, 0xffe2a0);
    for (let i = 0; i < 4; i++) R.box(4.0 + i * 0.7, -0.2, 0.4, 0.3, 0.1 + i * 0.03, pick([0x8c1d1d, 0x1f4e79, 0x2f6b3f]), 1.12);
    plant(R, -7.2, 3.8);
    return { floor: 'carpet', wall: 0xd8c7ad, accent: 0x5b3a1e, neon: ['BOOKS', '#ffd89a'], keepers: [{ x0: 4.2, x1: 7.0, z: -1.3 }], zone: [-5.2, 3, 1.5, 3.8], crumbs: [5.6, 0.8], apron: 0x5b3a1e };
  },
  // 9 NOODLES
  (R) => {
    counter(R, -7, 1.2, -2.6, { color: 0xa8321c, top: 0xe6dccb });
    for (let i = 0; i < 4; i++) { R.cyl(-6 + i * 1.8, -2.6, 0.38, 0.4, 0x8a8f94, 1.12); R.cyl(-6 + i * 1.8, -2.6, 0.3, 0.02, 0xe8b24a, 1.52); }
    R.box(-3.5, -5.0, 8, 0.8, 0.9, STEEL, 0, true);
    R.box(-3.5, -4.95, 6, 1.0, 0.45, 0x8a8f94, 2.3);
    for (let i = 0; i < 5; i++) R.cyl(-5.4 + i * 1.5, -5.0, 0.2, 0.3, 0xe8e8e8, 0.9);
    R.box(3, -5.4, 4, 0.08, 1.5, 0x1d1d1d, 1.4);
    for (let i = 0; i < 5; i++) R.lightBox(3, -5.34, 3.2 - (i % 2) * 0.8, 0.03, 0.05, i % 2 ? 0xffd24a : 0xffffff, 2.5 - i * 0.22);
    for (const z of [-3.6, -1.6, 0.4]) { R.box(5.8, z, 1.5, 0.85, 0.05, 0x6a4630, 0.75); R.box(5.8, z, 0.12, 0.12, 0.72, 0x222222, 0); R.colliders.boxes.push({ minX: R.ox + 5.05, maxX: R.ox + 6.55, minZ: z - 0.43, maxZ: z + 0.43, h: 0.8 });
      for (const dx of [-0.4, 0.4]) R.cyl(5.8 + dx, z, 0.16, 0.07, pick([0xf2f2f2, 0xb3261e]), 0.8); R.box(5.8, z + 0.7, 1.5, 0.3, 0.45, 0x4a2e1e, 0, true); }
    for (const [x, z] of [[-4, 0.8], [-1.5, 1.2], [1.5, 0.6], [3.4, 1.4]]) { R.cyl(x, z, 0.015, 0.7, 0x222222, 2.65); R.lightSph(x, 2.5, z, 0.27, 0xe0301f); }
    return { floor: 'darkwood', wall: 0xb8452d, accent: 0xa8321c, neon: ['NOODLES', '#ffb26a'], keepers: [{ x0: -6, x1: 0, z: -3.95 }], zone: [-5, 3.5, 2.0, 3.8], crumbs: [-2.5, -1.4], apron: 0xa8321c };
  },
  // 10 GROCERY
  (R) => {
    R.box(0, -5.2, 13, 0.7, 2.1, 0xf4f4f4, 0, true);
    R.box(0, -4.83, 12.6, 0.04, 1.8, 0x2b4a6a, 0.15);
    for (let r = 0; r < 4; r++) for (let k = 0; k < 28; k++) R.box(-6.3 + k * 0.45, -4.78, 0.28, 0.1, 0.3, pick(GOODS), 0.3 + r * 0.42);
    shelf(R, -2.2, -1.0, 9, 4, 1.9, GOODS); shelf(R, -2.2, -3.0, 9, 4, 1.9, GOODS);
    R.box(7.0, -2.0, 1.2, 3.4, 0.8, WOOD, 0, true);
    for (let i = 0; i < 18; i++) R.sph(6.7 + rand(0, 0.6), 0.95 + rand(0, 0.15), -3.5 + (i % 9) * 0.38, 0.14, pick([0xd8433a, 0xe2a62b, 0x4caf50, 0xff7a3d, 0x7e57c2]));
    counter(R, 3.6, 6.2, -0.2, { depth: 0.8, color: 0x2e6f3a, top: 0x25282c });
    register(R, 4.4, -0.2, 1.15);
    R.box(5.6, 1.1, 1.0, 0.7, 0.04, STEEL, 0.9); R.colliders.circles.push({ x: R.ox + 5.6, z: 1.1, r: 0.5, h: 0.95 });
    return { floor: 'tile', wall: 0xeef2e4, accent: 0x2f6b2a, neon: ['GROCERY', '#b6ff8a'], keepers: [{ x0: 4.0, x1: 6.0, z: -1.3 }], zone: [-5.5, 2.5, 1.5, 3.8], crumbs: [4.8, 1.0], apron: 0x2f6b2a };
  },
  // 11 BARBER
  (R) => {
    R.box(0, -5.42, 13, 0.05, 1.7, 0x9db6c6, 1.0);
    R.box(0, -5.44, 13.3, 0.05, 0.12, 0x2a2a2a, 0.9); R.box(0, -5.44, 13.3, 0.05, 0.12, 0x2a2a2a, 2.7);
    R.box(0, -5.2, 13, 0.5, 0.9, 0x2a2a2a, 0, true);
    for (let i = 0; i < 18; i++) R.cyl(-6.3 + i * 0.75, -5.2, 0.07, 0.22, pick([0xd8433a, 0x3a86d6, 0xe8e8e8, 0x4caf50]), 0.9);
    for (const x of [-4.5, 0, 4.5]) {
      R.cyl(x, -4.0, 0.35, 0.5, 0x1b1b1b, 0, true);
      R.box(x, -4.0, 0.85, 0.85, 0.22, 0xb3261e, 0.5);
      R.box(x, -3.55, 0.85, 0.15, 0.2, 0xb3261e, 0.35);
      R.box(x, -4.4, 0.85, 0.16, 0.75, 0xb3261e, 0.7);
      for (const s of [-1, 1]) R.box(x + s * 0.5, -4.0, 0.1, 0.55, 0.12, 0x1b1b1b, 0.78);
    }
    R.box(7.2, 0.4, 0.7, 3.4, 0.48, DWOOD, 0, true);
    for (let i = 0; i < 6; i++) R.cyl(-7.0, 4.4, 0.17, 0.27, i % 3 === 0 ? 0xd62828 : i % 3 === 1 ? 0xf2f2f2 : 0x2a4d8f, 0.1 + i * 0.27, false);
    R.colliders.circles.push({ x: R.ox - 7.0, z: 4.4, r: 0.2, h: 1.9 });
    return { floor: 'checker', wall: 0xdfe3e8, accent: 0x1d3557, neon: ['BARBER', '#9fc6ff'], keepers: [{ x0: -5.2, x1: -0.5, z: -2.7 }, { x0: 0.5, x1: 5.2, z: -2.7 }], zone: [-4.8, 5.5, 1.5, 3.8], crumbs: [0, -1.2], apron: 0x1d3557 };
  },
  // 12 BOUTIQUE (clothes shop; see boutique.js)
  boutiqueBuilder,
];

// Which shops offer a job (mini-game) and what it is called.
export const SHOP_JOBS = { DELI: ['deli', 'Work the deli register'], PIZZA: ['pizza', 'Make pizzas'], FLOWERS: ['flowers', 'Arrange bouquets'], CAFE: ['donuts', 'Make donuts'], NOODLES: ['bike', 'Deliver food by bike'], BAGELS: ['donuts', 'Bake and glaze'] };

/* ==================================================================
   NPC pigeons inside rooms
   ================================================================== */

class RoomPigeon {
  constructor(parent, opts, zone, line) {
    this.p = new Pigeon(opts);
    parent.add(this.p.root);
    this.zone = zone;          // [x0, x1, z0, z1]
    this.line = line;          // {x0, x1, z} for shopkeepers pacing behind the counter
    this.x = line ? rand(line.x0, line.x1) : rand(zone[0], zone[1]);
    this.z = line ? line.z : rand(zone[2], zone[3]);
    this.tx = this.x; this.tz = this.z;
    this.speed = rand(0.9, 1.5); this.v = 0; this.yaw = rng() * 6;
    this.state = 'pause'; this.timer = rand(0.5, 4);
    this.p.root.position.set(this.x, 0, this.z);
    this.p.root.rotation.y = this.yaw;
  }
  pickTarget() {
    if (this.line) { this.tx = rand(this.line.x0, this.line.x1); this.tz = this.line.z; }
    else { this.tx = rand(this.zone[0], this.zone[1]); this.tz = rand(this.zone[2], this.zone[3]); }
  }
  update(dt) {
    if (this.state === 'walk') {
      const dx = this.tx - this.x, dz = this.tz - this.z, d = Math.hypot(dx, dz);
      if (d < 0.15) { this.state = 'pause'; this.timer = rand(1.5, 5); this.v = 0; }
      else {
        this.v = Math.min(this.speed, this.v + dt * 4);
        this.x += (dx / d) * this.v * dt; this.z += (dz / d) * this.v * dt;
        this.yaw = angleLerp(this.yaw, Math.atan2(dx, dz), Math.min(1, dt * 8));
      }
    } else {
      this.v = Math.max(0, this.v - dt * 6);
      this.timer -= dt;
      if (this.v < 0.05 && rng() < dt * 0.8) this.p.startPeck();
      if (this.line && this.v < 0.05) this.yaw = angleLerp(this.yaw, 0, Math.min(1, dt * 3));   // shopkeepers face the customers (+z)
      if (this.timer <= 0) { this.pickTarget(); this.state = 'walk'; }
    }
    this.p.root.position.set(this.x, 0, this.z);
    this.p.root.rotation.y = this.yaw;
    this.p.update(dt, this.v);
  }
}

/* ==================================================================
   Shop interior assembly
   ================================================================== */

const W = 16, D = 11, H = 3.4;

export function buildShop(kind, ox) {
  const R = new Room(ox);
  const cfg = SHOP_BUILDERS[kind % SHOP_BUILDERS.length](R);
  const label = T.SHOPS[kind % T.SHOPS.length].text;

  // shell: walls, ceiling, door, windows, trims
  const wall = cfg.wall;
  R.box(0, -D / 2 - 0.15, W + 0.6, 0.3, H, wall, 0, true);
  R.box(0, D / 2 + 0.15, W + 0.6, 0.3, H, wall, 0, true);
  R.box(-W / 2 - 0.15, 0, 0.3, D + 0.6, H, wall, 0, true);
  R.box(W / 2 + 0.15, 0, 0.3, D + 0.6, H, wall, 0, true);
  R.box(0, 0, W + 0.6, D + 0.6, 0.2, CREAM, H, false);
  // accent wainscot and baseboard
  R.box(0, -D / 2 + 0.03, W, 0.06, 0.95, cfg.accent, 0); R.box(0, D / 2 - 0.03, W, 0.06, 0.95, cfg.accent, 0);
  R.box(-W / 2 + 0.03, 0, 0.06, D, 0.95, cfg.accent, 0); R.box(W / 2 - 0.03, 0, 0.06, D, 0.95, cfg.accent, 0);
  // street windows and door (south wall)
  for (const s of [-1, 1]) {
    R.lightBox(s * 4.9, D / 2 - 0.03, 4.4, 0.05, 1.9, 0xc9e4ff, 0.9);
    R.box(s * 4.9, D / 2 - 0.05, 4.6, 0.04, 0.1, 0x2a2a2a, 0.82); R.box(s * 4.9, D / 2 - 0.05, 4.6, 0.04, 0.1, 0x2a2a2a, 2.8);
  }
  R.box(0, D / 2 - 0.08, 1.7, 0.1, 2.5, 0x20262c, 0);
  R.lightBox(0, D / 2 - 0.15, 1.3, 0.05, 2.1, 0xb9d9ee, 0.1);
  R.box(0.55, D / 2 - 0.2, 0.06, 0.06, 0.6, 0xd6d6d6, 1.0);
  R.box(0, D / 2 - 0.12, 1.9, 0.06, 0.12, 0x20262c, 2.5);
  // ceiling lights
  for (const x of [-5, 0, 5]) for (const z of [-3, 1, 4]) R.lightBox(x, z, 1.8, 0.45, 0.05, 0xfff3d0, H - 0.06);
  R.finish();

  // textured bits: floor, neon sign, exit sign
  const floorTex = T.floorTexture(cfg.floor, W / 2.2, D / 2.2);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(W, D).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: floorTex, roughness: 0.75 }));
  floor.position.y = 0.002;
  R.group.add(floor);
  const neon = new THREE.Mesh(new THREE.PlaneGeometry(5.6, 1.4), new THREE.MeshBasicMaterial({ map: T.neonTexture(cfg.neon[0], cfg.neon[1]), transparent: true, depthWrite: false }));
  neon.position.set(kind === 5 ? 0 : 0, 2.95, -D / 2 + 0.07);
  if (kind === 5) neon.position.y = 3.0;
  R.group.add(neon);
  const exit = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.34), new THREE.MeshBasicMaterial({ map: T.exitSignTexture() }));
  exit.position.set(0, 2.75, D / 2 - 0.2); exit.rotation.y = Math.PI;
  R.group.add(exit);

  // pigeons: shopkeepers behind the counter plus a few customers
  const npcs = [];
  for (const line of cfg.keepers) npcs.push(new RoomPigeon(R.group, { outfit: 'vendor', apron: cfg.apron, scale: 1.3 }, cfg.zone, line));
  const nCust = 2 + Math.floor(rng() * 3);
  for (let i = 0; i < nCust; i++) npcs.push(new RoomPigeon(R.group, { outfit: rng() < 0.4 ? 'suit' : 'casual', scale: 1.25 }, cfg.zone, null));

  const world = (x, z) => [ox + x, z];
  return {
    id: `shop${kind}`, type: 'shop', kind, label,
    group: R.group,
    ctx: {
      colliders: R.colliders,
      groundHeight: () => 0,
      bounds: { minX: ox - W / 2 + 0.2, maxX: ox + W / 2 - 0.2, minZ: -D / 2 + 0.2, maxZ: D / 2 - 0.2 },
      camMaxY: H - 0.35,
    },
    spawn: { x: ox, z: D / 2 - 1.5, yaw: Math.PI },
    interacts: [
      { id: 'leave', x: ox, z: D / 2 - 0.9, r: 1.7, text: `Leave ${label.toLowerCase()}` },
      { id: 'crumbs', x: ox + cfg.crumbs[0], z: cfg.crumbs[1], r: 2.0, text: 'Ask for crumbs' },
      ...(cfg.wardrobe ? [{ id: 'wardrobe', x: ox + cfg.wardrobe.x, z: cfg.wardrobe.z, r: 2.2, text: 'Try on clothes' }] : []),
      ...(SHOP_JOBS[label] ? [{ id: 'job', game: SHOP_JOBS[label][0], x: ox + clamp(cfg.crumbs[0] + 2.4, -6.5, 6.5), z: cfg.crumbs[1], r: 1.5, text: SHOP_JOBS[label][1] + '  (work for coins)' }] : []),
    ],
    dynamicInteract: null,
    fog: null, background: 0x1a1612,
    hemi: { intensity: 2.3, color: 0xfff1dc, ground: 0xb9a58c },
    update(dt) { for (const n of npcs) n.update(dt); },
  };
}

/* ==================================================================
   Subway station
   ================================================================== */

function makeRat() {
  const g = new THREE.Group();
  const parts = [
    part(G.sphere, 0x6b5f56, [0, 0.13, 0], [0.12, 0.1, 0.21]),
    part(G.sphere, 0x7a6d62, [0, 0.12, 0.19], [0.075, 0.07, 0.11]),
    part(G.sphere, 0xd9a6a0, [0, 0.11, 0.29], [0.025, 0.025, 0.03]),
    part(G.sphere, 0xd9a6a0, [0.05, 0.19, 0.15], [0.035, 0.04, 0.012]),
    part(G.sphere, 0xd9a6a0, [-0.05, 0.19, 0.15], [0.035, 0.04, 0.012]),
    part(G.sphere, 0x111111, [0.04, 0.15, 0.25], [0.014, 0.014, 0.014]),
    part(G.sphere, 0x111111, [-0.04, 0.15, 0.25], [0.014, 0.014, 0.014]),
    part(G.cyl, 0xcfa49e, [0, 0.08, -0.38], [0.012, 0.42, 0.012], [Math.PI / 2 - 0.15, 0, 0]),
    ...[[-0.07, 0.1], [0.07, 0.1], [-0.07, -0.1], [0.07, -0.1]].map(([x, z]) => part(G.box, 0x4d443e, [x, 0.03, z], [0.04, 0.06, 0.07])),
  ];
  g.add(new THREE.Mesh(merge(parts), vcMaterial({ roughness: 0.9 })));
  g.scale.setScalar(1.7);
  return g;
}

export function buildSubway(ox, hooks = {}) {
  const HALF = 46, TUN = 150, H = 4.6;
  const R = new Room(ox);
  const solid = (cx, cz, w, d, h) => R.colliders.boxes.push({ minX: ox + cx - w / 2, maxX: ox + cx + w / 2, minZ: cz - d / 2, maxZ: cz + d / 2, h });
  const PZ0 = -3.3, PZ1 = 9;

  // platform structure
  R.box(0, PZ0 + 0.05, HALF * 2, 0.1, 1.1, 0x7e8186, -1.1);             // platform edge wall
  R.box(0, -2.95, HALF * 2, 0.6, 0.02, 0xe3b900, 0);                      // yellow tactile strip
  for (let i = 0; i < 46; i++) R.box(-45 + i * 2, -2.95, 0.5, 0.45, 0.025, 0xb89400, 0.02);
  solid(0, -2.7, HALF * 2, 0.9, 4);                                      // invisible barrier at the platform edge
  R.box(-HALF - 0.15, (PZ0 + PZ1) / 2, 0.3, PZ1 - PZ0, H + 1.1, 0xc9c5b8, -1.1);
  R.box(HALF + 0.15, (PZ0 + PZ1) / 2, 0.3, PZ1 - PZ0, H + 1.1, 0xc9c5b8, -1.1);
  R.box(0, (PZ0 + PZ1) / 2, HALF * 2 + 0.6, PZ1 - PZ0 + 0.3, 0.2, 0xe7e2d4, H);   // ceiling over the platform
  R.box(0, -6.3, TUN * 2, 5.8, 0.2, 0x2d2f33, H);                          // ceiling over the tracks
  R.box(0, -9.15, TUN * 2, 0.3, H + 1.3, 0x4a4d52, -1.1);                  // far tunnel wall
  R.box(0, PZ1 + 0.15, HALF * 2 + 0.6, 0.3, H + 1.1, 0xd9d4c4, -1.1);   // back wall behind platform (behind tile plane)
  R.box(-TUN, -6.15, 0.3, 6, H + 1.3, 0x050506, -1.1); R.box(TUN, -6.15, 0.3, 6, H + 1.3, 0x050506, -1.1);
  R.box(0, -6.15, TUN * 2, 5.7, 0.05, 0x2b2a28, -1.12);                    // track bed
  // rails
  for (const z of [-6.07, -4.63]) R.box(0, z, TUN * 2, 0.12, 0.14, 0x9ea3a8, -1.05);
  R.box(0, -3.95, TUN * 2, 0.14, 0.1, 0x5a3f2a, -1.0);                      // third rail
  // columns, ceiling lights
  for (let i = 0; i < 12; i++) {
    const x = -41.25 + i * 7.5;
    R.cyl(x, 1.5, 0.38, H, 0x3f6b4d, 0, true);
    R.cyl(x, 1.5, 0.42, 0.35, 0xe7e2d4, 0, false);
    R.cyl(x, 1.5, 0.42, 0.3, 0xe7e2d4, H - 0.4, false);
  }
  for (let x = -44; x <= 44; x += 5) for (const z of [-0.5, 5.5]) R.lightBox(x, z, 1.8, 0.4, 0.06, 0xfff7e2, H - 0.07);
  for (let x = -TUN + 5; x < TUN; x += 12) R.lightBox(x, -6.2, 0.5, 0.5, 0.06, x > -50 && x < 50 ? 0xffe9b8 : 0x6a5a3a, H - 0.07);
  // benches, trash cans, vending machines, posters
  for (const x of [-34, -16, 2, 19, 36.2 - 8]) {
    R.box(x, 8.2, 2.6, 0.6, 0.08, 0x8a5a35, 0.46, false); R.box(x, 8.5, 2.6, 0.08, 0.5, 0x8a5a35, 0.5, false);
    R.box(x - 1.1, 8.2, 0.08, 0.5, 0.46, 0x222222, 0); R.box(x + 1.1, 8.2, 0.08, 0.5, 0.46, 0x222222, 0);
    solid(x, 8.25, 2.7, 0.7, 0.55);
  }
  for (const x of [-24, -6, 12, 28]) { R.cyl(x, 8.4, 0.3, 0.9, 0x2f4a3a, 0, true); R.cyl(x, 8.4, 0.32, 0.06, 0x1d2a22, 0.9); }
  for (const x of [-38, -10, 22]) {
    R.box(x, 8.5, 1.3, 0.8, 2.0, 0xc62828, 0, true);
    R.lightBox(x, 8.08, 0.95, 0.04, 1.4, pick([0xffe08a, 0x9fe3ff, 0xffb3c1]), 0.4);
  }
  for (let i = 0; i < 9; i++) {
    const x = -40 + i * 10 + rand(-1.5, 1.5);
    R.box(x, 8.88, 2.1, 0.04, 1.5, pick([0xe8456b, 0xffd23f, 0x3a86d6, 0x4caf50, 0xff8a3d, 0xb06ad8]), 1.2);
  }
  // wall stripe in line green
  R.box(0, 8.9, HALF * 2, 0.05, 0.22, 0x0d7a45, 2.3);
  // exit stairs at the east end (rise toward +x)
  for (let i = 0; i < 10; i++) {
    const h = (i + 1) * 0.36;
    R.box(36.4 + i * 0.85, 6.4, 0.85, 5.2, h, i % 2 ? 0x8d8a82 : 0x9a968d, 0);
    solid(36.4 + i * 0.85, 6.4, 0.85, 5.2, h);
  }
  R.box(HALF - 0.3, 6.4, 1.2, 5.2, H, 0x1a1a1a, 0);
  R.lightBox(35.2, 6.4, 0.05, 2.0, 0.5, 0xfff0c0, 2.9);
  R.finish();

  // sleepers (instanced)
  const sl = new THREE.InstancedMesh(new THREE.BoxGeometry(0.28, 0.1, 3.0), new THREE.MeshStandardMaterial({ color: 0x4a3626, roughness: 1 }), 400);
  const dm = new THREE.Object3D();
  for (let i = 0; i < 400; i++) { dm.position.set(-TUN + i * 0.75, -1.05, -5.35); dm.updateMatrix(); sl.setMatrixAt(i, dm.matrix); }
  R.group.add(sl);

  // textured surfaces
  const tile = T.subwayTileTexture(); tile.repeat.set(HALF, 3.4);
  const back = new THREE.Mesh(new THREE.PlaneGeometry(HALF * 2, H + 0.3), new THREE.MeshStandardMaterial({ map: tile, roughness: 0.5 }));
  back.position.set(0, (H - 0.3) / 2 + 0.0, PZ1 - 0.02); back.rotation.y = Math.PI;
  R.group.add(back);
  const tile2 = T.subwayTileTexture(); tile2.repeat.set(TUN, 3.4);
  const far = new THREE.Mesh(new THREE.PlaneGeometry(TUN * 2, H + 1.1), new THREE.MeshStandardMaterial({ map: tile2, color: 0x7a7e84, roughness: 0.6 }));
  far.position.set(0, (H - 1.1) / 2, -9.0);
  R.group.add(far);
  const deck = new THREE.Mesh(new THREE.PlaneGeometry(HALF * 2, PZ1 - PZ0).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: T.floorTexture('tile', HALF / 2, (PZ1 - PZ0) / 2), roughness: 0.7, color: 0xcfcfcf }));
  deck.position.set(0, 0.002, (PZ0 + PZ1) / 2);
  R.group.add(deck);

  // station name signs (textures are swapped when you come in through a different entrance)
  const signMats = [];
  const defaultSign = T.stationSignTexture('Times Sq 42 St', ['1', '2', '3']);
  const addSign = (x, z, y, w, rotY) => {
    const m = new THREE.MeshBasicMaterial({ map: defaultSign, side: THREE.FrontSide });
    signMats.push(m);
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, w * 160 / 768), m);
    mesh.position.set(x, y, z); mesh.rotation.y = rotY;
    R.group.add(mesh);
  };
  for (const x of [-36, -18, 0, 18, 36]) { addSign(x, 8.9, 3.0, 5.2, Math.PI); addSign(x, -8.9, 2.6, 5.2, 0); }
  for (let i = 0; i < 12; i++) { const x = -41.25 + i * 7.5; addSign(x, 1.5 + 0.43, 2.9, 1.7, 0); addSign(x, 1.5 - 0.43, 2.9, 1.7, Math.PI); }
  const exitSign = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 0.56), new THREE.MeshBasicMaterial({ map: T.exitSignTexture() }));
  exitSign.position.set(35.0, 3.5, 6.4); exitSign.rotation.y = -Math.PI / 2;
  R.group.add(exitSign);

  // ----------------------------------------------------------- the train
  const CARS = 8, CL = 10.6, CG = 0.35, CW = 3.4, TZ = -5.35;
  const train = new THREE.Group();
  const lineColor = '#ee352e';
  const sideTex = T.trainSideTexture(lineColor);
  const dark = new THREE.MeshStandardMaterial({ color: 0x2c2f33, roughness: 0.6 });
  const roof = new THREE.MeshStandardMaterial({ color: 0x8b9096, roughness: 0.6 });
  const side = new THREE.MeshStandardMaterial({ map: sideTex, roughness: 0.4, metalness: 0.2 });
  const farSide = new THREE.MeshStandardMaterial({ color: 0x9aa0a6, roughness: 0.5 });
  const carGeo = new THREE.BoxGeometry(CL, 3.9, CW);
  for (let i = 0; i < CARS; i++) {
    const m = new THREE.Mesh(carGeo, [dark, dark, roof, dark, side, farSide]);
    m.position.set((i - (CARS - 1) / 2) * (CL + CG), 1.15, TZ);
    train.add(m);
  }
  const gapGeo = new THREE.PlaneGeometry(1, 2.25);
  const gaps = new THREE.InstancedMesh(gapGeo, new THREE.MeshBasicMaterial({ map: T.trainInsideTexture() }), CARS * 4);
  gaps.frustumCulled = false;
  train.add(gaps);
  const doorX = [];
  for (let i = 0; i < CARS; i++) for (let d = 0; d < 4; d++) doorX.push((i - (CARS - 1) / 2) * (CL + CG) + ((d * 0.25 + 0.125) - 0.5) * CL);
  const setDoors = (open) => {
    for (let i = 0; i < doorX.length; i++) {
      dm.position.set(doorX[i], 1.12, TZ + CW / 2 + 0.01);
      dm.scale.set(Math.max(0.001, open * 1.25), 1, 1);
      dm.rotation.set(0, 0, 0);
      dm.updateMatrix();
      gaps.setMatrixAt(i, dm.matrix);
    }
    gaps.instanceMatrix.needsUpdate = true;
  };
  setDoors(0);
  dm.scale.set(1, 1, 1);
  // headlight glow on both ends
  for (const s of [-1, 1]) {
    const hl = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.4), new THREE.MeshBasicMaterial({ color: 0xfff6d0 }));
    hl.position.set(s * ((CARS * (CL + CG)) / 2 - 0.1) , 1.6, TZ); hl.rotation.y = s > 0 ? Math.PI / 2 : -Math.PI / 2;
    train.add(hl);
  }
  R.group.add(train);

  // rats (decoration... for now)
  const rats = [];
  for (let i = 0; i < 4; i++) {
    const m = makeRat();
    R.group.add(m);
    rats.push({ m, x: rand(-25, 25), z: rand(-8.4, -4.2), tx: 0, tz: 0, v: 0, state: 'pause', timer: rand(0, 3), yaw: 0 });
  }

  // platform pigeons
  const npcs = [];
  for (let i = 0; i < 7; i++) npcs.push(new RoomPigeon(R.group, { outfit: i % 2 ? 'suit' : 'casual', scale: 1.25 }, [-38, 38, 2.5, 4.6], null));

  // train timetable
  const CYC = 48;
  const st = { clock: 43, open: 0, x: 999, events: { arrive: false, chime1: false, chime2: false, depart: false }, stopped: false };
  const ease = (u) => 1 - Math.pow(1 - clamp(u, 0, 1), 2.2);
  const updateTrain = (dt) => {
    const prev = st.clock;
    st.clock = (st.clock + dt) % CYC;
    const t = st.clock;
    if (t < prev) { st.events = { arrive: false, chime1: false, chime2: false, depart: false }; }
    const fire = (k, ev) => { if (!st.events[k]) { st.events[k] = true; hooks.train?.(ev); } };
    if (t < 9) { fire('arrive', 'arrive'); st.x = -150 + 150 * ease(t / 9); st.open = 0; }
    else if (t < 24) {
      st.x = 0;
      if (t >= 10) fire('chime1', 'chime');
      st.open = t < 10 ? 0 : t < 11.2 ? (t - 10) / 1.2 : t < 22.5 ? 1 : t < 23.7 ? 1 - (t - 22.5) / 1.2 : 0;
      if (t >= 22.5) fire('chime2', 'chime');
    } else if (t < 32) { fire('depart', 'depart'); st.open = 0; st.x = 150 * Math.pow(clamp((t - 24) / 8, 0, 1), 2.2); }
    else { st.x = 999; st.open = 0; }
    train.position.x = st.x;
    train.visible = st.x < 400;
    setDoors(st.open);
  };

  // update loop
  const update = (dt, player) => {
    updateTrain(dt);
    for (const n of npcs) n.update(dt);
    const trainNear = Math.abs(st.x) < 75;
    for (const r of rats) {
      r.m.visible = !trainNear;
      if (trainNear) continue;
      r.timer -= dt;
      if (r.state === 'walk') {
        const dx = r.tx - r.x, dz = r.tz - r.z, d = Math.hypot(dx, dz);
        if (d < 0.2) { r.state = 'pause'; r.timer = rand(0.6, 3); r.v = 0; }
        else { r.v = Math.min(3.2, r.v + dt * 14); r.x += (dx / d) * r.v * dt; r.z += (dz / d) * r.v * dt; r.yaw = angleLerp(r.yaw, Math.atan2(dx, dz), Math.min(1, dt * 12)); }
      } else if (r.timer <= 0) {
        r.tx = clamp(r.x + rand(-9, 9), -45, 45); r.tz = rand(-8.4, -4.2); r.state = 'walk';
      }
      r.m.position.set(r.x, -1.05 + Math.abs(Math.sin(r.x * 9)) * 0.03 * (r.v > 0.1 ? 1 : 0), r.z);
      r.m.rotation.y = r.yaw;
    }
  };

  const doors = () => {
    if (st.open < 0.85) return null;
    return doorX;
  };

  return {
    id: 'subway', type: 'subway', kind: -1, label: 'subway',
    group: R.group,
    ctx: {
      colliders: R.colliders,
      groundHeight: () => 0,
      bounds: { minX: ox - 45.3, maxX: ox + 45.3, minZ: -2.4, maxZ: 8.6 },
      camMaxY: H - 0.35,
    },
    spawn: { x: ox + 32.5, z: 5.2, yaw: -Math.PI / 2 },
    interacts: [{ id: 'leave', x: ox + 34.6, z: 6.4, r: 3.0, text: 'Go up to the street' }, { id: 'job', game: 'subway', x: ox + 30.2, z: 5.6, r: 1.8, text: 'Play Subway Surfing (win coins)' }],
    dynamicInteract(px, pz) {
      const open = doors();
      if (!open || pz > 2.2) return null;
      for (const dx of open) if (Math.abs(px - (ox + st.x + dx)) < 1.9) return { id: 'board', text: 'Board the train (ride to another station)' };
      return null;
    },
    setStation(name, lines) { const tex = T.stationSignTexture(name, lines); for (const m of signMats) m.map = tex; },
    fog: { color: 0x0d0e10, near: 50, far: 190 }, background: 0x0d0e10,
    hemi: { intensity: 1.9, color: 0xe6e8ea, ground: 0x7a7d80 },
    update,
    state: st,
  };
}

/* ==================================================================
   Manager: builds interiors on demand, far away from the city.
   ================================================================== */

export class Interiors {
  constructor(scene, hooks = {}) {
    this.scene = scene; this.hooks = hooks;
    this.shops = new Map();
    this.subway = null;
  }
  shop(kind) {
    const N = SHOP_BUILDERS.length; kind = ((kind % N) + N) % N;
    if (!this.shops.has(kind)) {
      const it = buildShop(kind, 6000 + kind * 100);
      it.group.visible = false;
      this.scene.add(it.group);
      this.shops.set(kind, it);
    }
    return this.shops.get(kind);
  }
  getSubway() {
    if (!this.subway) {
      this.subway = buildSubway(5000, this.hooks);
      this.subway.group.visible = false;
      this.scene.add(this.subway.group);
    }
    return this.subway;
  }
  hideAll() {
    for (const s of this.shops.values()) s.group.visible = false;
    if (this.subway) this.subway.group.visible = false;
  }
}
