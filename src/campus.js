// City College of New York landmark: a Shepard Hall-style Gothic Revival main hall on the west
// side of the block, a green quad with fountain behind it, and two modern buildings to the east.
// Everything is built in block-local coordinates (origin = block centre, y = top of the sidewalk
// slab) and parented to one group, so buildCampus(cx, cz, ...) can drop it on any block.
// Uses its own seeded RNG so it never disturbs the shared world sequence.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { SIDEWALK_H, mulberry32 } from './config.js';
import { G, part, gradPart, vcMaterial } from './gfx.js';
import { canvasTex } from './textures.js';

/* ---------------------------------------------------------------- palette */
const STONE = '#6f675b';
const STONE_DK = '#4c463d';
const STONE_LT = '#857d6e';
const TRIM = '#e7e2d3';
const TRIM_DIM = '#b9b3a2';
const SLATE = '#3b4250';
const SLATE_LT = '#4f586a';
const LAV = '#8a6bbf';
const LAV_DK = '#5b3f8c';
const PAVER = '#cdc6b3';
const PAVER_DK = '#b3ab96';
const IRON = '#1d2326';

const PPM = 80;                 // texture pixels per metre on the gothic facade
const STORY = 5.2;              // hall storey height (m)
const TILE_H = STORY * 2;       // one facade tile = two storeys
const BAY = 5.4;                // hall bay width (m)
const HALL_H = STORY * 4;       // 20.8
const TOWER_W = 6.5;
const TOWER_H = STORY * 5;      // 26

/* ----------------------------------------------------------------- helpers */

function mergeAll(parts) {
  if (!parts.length) return null;
  const list = parts.map((p) => {
    if (p.index) { const n = p.toNonIndexed(); p.dispose(); return n; }
    return p;
  });
  const m = mergeGeometries(list, false);
  list.forEach((p) => p.dispose());
  return m;
}

const PYR = new THREE.ConeGeometry(Math.SQRT1_2, 1, 4, 1).rotateY(Math.PI / 4).translate(0, 0.5, 0); // base side 1, base at y=0
const GABLE = (() => {
  const s = new THREE.Shape();
  s.moveTo(-0.5, 0); s.lineTo(0.5, 0); s.lineTo(0, 1); s.closePath();
  return new THREE.ExtrudeGeometry(s, { depth: 1, bevelEnabled: false }).translate(0, 0, -0.5);
})();
const DISC = new THREE.CircleGeometry(1, 28);
const PLANE = new THREE.PlaneGeometry(1, 1);

const bx = (arr, c, x0, x1, y0, y1, z0, z1) =>
  arr.push(part(G.box, c, [(x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2], [x1 - x0, y1 - y0, z1 - z0]));
const cyl = (arr, c, x, y0, z, r, h) => arr.push(part(G.cyl, c, [x, y0 + h / 2, z], [r, h, r]));
const pyr = (arr, c, x, y, z, side, h) => arr.push(part(PYR, c, [x, y, z], [side, h, side]));
/** End gable: triangle in the z-y plane (width w along z), extruded from x0 to x1. */
const gableZ = (arr, c, x0, x1, zc, w, y, h) =>
  arr.push(part(GABLE, c, [(x0 + x1) / 2, y, zc], [w, h, x1 - x0], [0, Math.PI / 2, 0]));
/** Roof prism with its ridge running along z. */
const roofZ = (arr, c, xc, w, z0, z1, y, h) => arr.push(part(GABLE, c, [xc, y, (z0 + z1) / 2], [w, h, z1 - z0]));

/** Crenellated parapet around a rectangle. sides = [west, east, north(-z), south(+z)]. */
function parapet(arr, c, x0, x1, z0, z1, y, { t = 0.5, wh = 0.9, mh = 0.7, step = 1.6 } = {}) {
  const ml = step / 2;
  const edge = (a0, a1, alongX, lo, hi) => {
    if (alongX) bx(arr, c, a0, a1, y, y + wh, lo, hi); else bx(arr, c, lo, hi, y, y + wh, a0, a1);
    if (mh <= 0) return;
    const n = Math.floor((a1 - a0) / step);
    const off = (a1 - a0 - n * step + ml) / 2;
    for (let i = 0; i < n; i++) {
      const s = a0 + off + i * step;
      if (alongX) bx(arr, c, s, s + ml, y + wh, y + wh + mh, lo, hi);
      else bx(arr, c, lo, hi, y + wh, y + wh + mh, s, s + ml);
    }
  };
  edge(z0 - 0.15, z1 + 0.15, false, x0 - 0.15, x0 - 0.15 + t);
  edge(z0 - 0.15, z1 + 0.15, false, x1 + 0.15 - t, x1 + 0.15);
  edge(x0 - 0.15, x1 + 0.15, true, z0 - 0.15, z0 - 0.15 + t);
  edge(x0 - 0.15, x1 + 0.15, true, z1 + 0.15 - t, z1 + 0.15);
}

/** A box (no top/bottom) whose side faces get world-aligned UVs: u from z (x-facing) or x (z-facing), v from y. */
function wallGeo(x0, x1, y0, y1, z0, z1, { uZ0 = 0, uX0 = 0, tileW, tileH }) {
  const src = new THREE.BoxGeometry(x1 - x0, y1 - y0, z1 - z0).toNonIndexed();
  src.translate((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
  const P = src.attributes.position, N = src.attributes.normal;
  const pos = [], nor = [], uv = [];
  for (let t = 0; t < P.count; t += 3) {
    if (Math.abs(N.getY(t)) > 0.5) continue;
    const xFacing = Math.abs(N.getX(t)) > 0.5;
    for (let k = 0; k < 3; k++) {
      const i = t + k;
      const x = P.getX(i), y = P.getY(i), z = P.getZ(i);
      pos.push(x, y, z); nor.push(N.getX(i), N.getY(i), N.getZ(i));
      uv.push(xFacing ? (z - uZ0) / tileW : (x - uX0) / tileW, y / tileH);
    }
  }
  src.dispose();
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  return g;
}

/* ---------------------------------------------------------------- textures */

function ashlar(g, w, h, rnd, base, variance, ch = 32) {
  g.fillStyle = `rgb(${base[0] * 0.55},${base[1] * 0.55},${base[2] * 0.55})`;
  g.fillRect(0, 0, w, h);
  for (let y = 0; y < h; y += ch) {
    const widths = [];
    let sum = 0;
    while (sum < w - 60) { const bw = 64 + rnd() * 70; widths.push(bw); sum += bw; }
    widths.push(w - sum);
    let x = 0;
    for (const bw of widths) {
      const v = (rnd() - 0.5) * 2 * variance;
      g.fillStyle = `rgb(${base[0] + v | 0},${base[1] + v * 0.9 | 0},${base[2] + v * 0.8 | 0})`;
      g.fillRect(x + 1.5, y + 1.5, bw - 3, ch - 3);
      x += bw;
    }
  }
  for (let i = 0; i < w * h * 0.012; i++) {
    const v = rnd() < 0.5 ? 0 : 255;
    g.fillStyle = `rgba(${v},${v},${v},${0.10 * rnd()})`;
    g.fillRect(rnd() * w, rnd() * h, 2, 2);
  }
}

/** Pointed (equilateral) arch path: springs at ys, base at yb, spanning x0..x1. */
function archPath(g, x0, x1, ys, yb) {
  const w = x1 - x0;
  g.beginPath();
  g.moveTo(x0, yb);
  g.lineTo(x0, ys);
  g.arc(x1, ys, w, Math.PI, Math.PI * 4 / 3);
  g.arc(x0, ys, w, Math.PI * 5 / 3, Math.PI * 2);
  g.lineTo(x1, yb);
  g.closePath();
}
const archFill = (g, x0, x1, ys, yb, fill) => { archPath(g, x0, x1, ys, yb); g.fillStyle = fill; g.fill(); };

function glassArch(g, x0, x1, ys, yb, lit, rnd) {
  const grad = g.createLinearGradient(x0, ys - (x1 - x0), x1, yb);
  if (lit) { grad.addColorStop(0, '#f7dc9b'); grad.addColorStop(1, '#d6a35a'); }
  else { grad.addColorStop(0, '#2a3a50'); grad.addColorStop(0.5, '#101820'); grad.addColorStop(1, '#27364a'); }
  archFill(g, x0, x1, ys, yb, grad);
  g.fillStyle = TRIM;                            // astragals
  g.fillRect((x0 + x1) / 2 - 1.5, ys - (x1 - x0) * 0.6, 3, yb - ys + (x1 - x0) * 0.6);
  g.fillRect(x0, yb - (yb - ys) * 0.45, x1 - x0, 3);
  g.fillRect(x0, ys - 8, x1 - x0, 3);
  if (!lit && rnd() < 0.3) { g.fillStyle = 'rgba(230,226,210,0.38)'; g.fillRect(x0, ys - 20, x1 - x0, 30 + rnd() * 60); }
}

function drawGothic(g, w, h, rnd) {
  ashlar(g, w, h, rnd, [111, 103, 91], 15);
  const bays = Math.round(w / (BAY * PPM));
  const bw = w / bays;
  const SH = STORY * PPM;
  for (let s = 0; s < 2; s++) {
    const yb = h - s * SH, yt = yb - SH;
    g.fillStyle = TRIM; g.fillRect(0, yt + 1, w, 14);                // string course at the top of the storey
    g.fillStyle = 'rgba(0,0,0,0.30)'; g.fillRect(0, yt + 15, w, 4);
    for (let b = 0; b < bays; b++) {
      const cx = (b + 0.5) * bw;
      const fw = 210, fx0 = cx - fw / 2, fx1 = cx + fw / 2;
      const ys = yb - 205;
      g.fillStyle = TRIM; g.fillRect(cx - 120, yb - 70, 240, 12);   // sill
      g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(cx - 120, yb - 58, 240, 3);
      archFill(g, fx0, fx1, ys, yb - 66, TRIM);
      archFill(g, fx0 + 8, fx1 - 8, ys, yb - 66, '#544d43');
      for (const [a, c] of [[fx0 + 12, fx0 + 96], [fx1 - 96, fx1 - 12]]) {
        archFill(g, a - 4, c + 4, yb - 168, yb - 76, TRIM);
        glassArch(g, a, c, yb - 168, yb - 80, rnd() < 0.14, rnd);
      }
      g.fillStyle = TRIM; g.beginPath(); g.arc(cx, yb - 300, 25, 0, Math.PI * 2); g.fill();     // roundel
      g.fillStyle = '#18212c'; g.beginPath(); g.arc(cx, yb - 300, 17, 0, Math.PI * 2); g.fill();
      g.fillStyle = TRIM; g.fillRect(cx - 1.5, yb - 317, 3, 34); g.fillRect(cx - 17, yb - 301.5, 34, 3);
      g.fillStyle = 'rgba(0,0,0,0.08)';                                                           // weathering
      for (let k = 0; k < 4; k++) g.fillRect(cx - 100 + k * 55 + rnd() * 10, yb - 58, 10 + rnd() * 8, 40 + rnd() * 30);
    }
  }
}

function drawPortal(g, W, H, rnd) {
  ashlar(g, W, H, rnd, [111, 103, 91], 12);
  const S = 742;
  archFill(g, 24, 384, S, H, TRIM);
  archFill(g, 36, 372, S, H, '#5d564b');
  archFill(g, 48, 360, S, H, TRIM);
  archFill(g, 64, 344, S, H, '#17110d');
  g.strokeStyle = 'rgba(0,0,0,0.35)'; g.lineWidth = 2;
  for (const d of [0, 12, 24]) { archPath(g, 24 + d, 384 - d, S, H); g.stroke(); }
  for (const [a, c] of [[78, 196], [212, 330]]) {                    // transom lancets
    archFill(g, a - 5, c + 5, 700, 792, TRIM);
    const grad = g.createLinearGradient(a, 600, c, 792);
    grad.addColorStop(0, '#f3d48c'); grad.addColorStop(1, '#b57e3c');
    archFill(g, a, c, 700, 792, grad);
    g.fillStyle = '#2b1d12'; g.fillRect((a + c) / 2 - 2, 640, 4, 152);
  }
  g.fillStyle = TRIM; g.beginPath(); g.arc(204, 545, 34, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#e9c27a'; g.beginPath(); g.arc(204, 545, 26, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#2b1d12';
  for (let k = 0; k < 6; k++) { g.save(); g.translate(204, 545); g.rotate(k * Math.PI / 3); g.fillRect(-1.5, -26, 3, 52); g.restore(); }
  g.fillStyle = TRIM; g.fillRect(64, 788, 280, 8);                  // doors
  for (const x0 of [70, 207]) {
    g.fillStyle = '#4d321f'; g.fillRect(x0, 798, 130, H - 798);
    g.fillStyle = '#6a4630';
    for (let r = 0; r < 2; r++) g.fillRect(x0 + 12, 812 + r * 90, 106, 76);
    g.fillStyle = '#c9a14a'; g.fillRect(x0 + (x0 < 150 ? 112 : 10), 900, 8, 22);
  }
  g.fillStyle = '#17110d'; g.fillRect(201, 798, 6, H - 798);
  const cx = 204, cy = 150;                                         // rose window
  g.fillStyle = TRIM; g.beginPath(); g.arc(cx, cy, 104, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#5d564b'; g.beginPath(); g.arc(cx, cy, 94, 0, Math.PI * 2); g.fill();
  g.fillStyle = TRIM; g.beginPath(); g.arc(cx, cy, 86, 0, Math.PI * 2); g.fill();
  const rg = g.createRadialGradient(cx, cy, 6, cx, cy, 80);
  rg.addColorStop(0, '#3c2f6e'); rg.addColorStop(0.55, '#1b2d52'); rg.addColorStop(1, '#14233d');
  g.fillStyle = rg; g.beginPath(); g.arc(cx, cy, 78, 0, Math.PI * 2); g.fill();
  for (let k = 0; k < 8; k++) {
    g.save(); g.translate(cx, cy); g.rotate(k * Math.PI / 4);
    g.fillStyle = TRIM; g.fillRect(-2, 0, 4, 78);
    g.beginPath(); g.arc(0, 46, 20, 0, Math.PI * 2); g.fill();
    g.fillStyle = k % 2 ? '#8a6bbf' : '#c78d3a'; g.beginPath(); g.arc(0, 46, 15, 0, Math.PI * 2); g.fill();
    g.restore();
  }
  g.fillStyle = TRIM; g.beginPath(); g.arc(cx, cy, 20, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#d9a13e'; g.beginPath(); g.arc(cx, cy, 14, 0, Math.PI * 2); g.fill();
}

const SERIF = 'Georgia, "Times New Roman", "DejaVu Serif", serif';
function fitText(g, text, size, maxW) {
  g.font = `bold ${size}px ${SERIF}`;
  const w = g.measureText(text).width;
  if (w > maxW) g.font = `bold ${Math.floor(size * maxW / w)}px ${SERIF}`;
}

function drawSign(g, W, H) {
  const grad = g.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, '#6a4a9c'); grad.addColorStop(1, '#46307a');
  g.fillStyle = grad; g.fillRect(0, 0, W, H);
  g.strokeStyle = '#efe9da'; g.lineWidth = 6; g.strokeRect(10, 10, W - 20, H - 20);
  g.strokeStyle = 'rgba(239,233,218,0.55)'; g.lineWidth = 2; g.strokeRect(22, 22, W - 44, H - 44);
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillStyle = '#ffffff';
  fitText(g, 'THE CITY COLLEGE', 112, W - 100);
  g.fillText('THE CITY COLLEGE', W / 2, H * 0.44);
  g.fillStyle = '#e1d6f5';
  fitText(g, 'OF  NEW  YORK', 58, W - 400);
  g.fillText('OF  NEW  YORK', W / 2, H * 0.80);
}

function drawMonument(g, W, H) {
  g.fillStyle = '#4a3480'; g.fillRect(0, 0, W, H);
  g.strokeStyle = '#efe9da'; g.lineWidth = 5; g.strokeRect(8, 8, W - 16, H - 16);
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillStyle = '#ffffff';
  fitText(g, 'CITY COLLEGE', 120, W - 70);
  g.fillText('CITY COLLEGE', W / 2, H * 0.43);
  g.fillStyle = '#d9cdef';
  fitText(g, 'OF NEW YORK  -  EST. 1847', 40, W - 90);
  g.fillText('OF NEW YORK  -  EST. 1847', W / 2, H * 0.80);
}

function drawBanner(g, W, H, bg, fg, border) {
  g.clearRect(0, 0, W, H);
  g.fillStyle = bg;
  g.beginPath(); g.moveTo(0, 0); g.lineTo(W, 0); g.lineTo(W, H); g.lineTo(W / 2, H - 56); g.lineTo(0, H); g.closePath(); g.fill();
  g.strokeStyle = border; g.lineWidth = 8;
  g.beginPath(); g.moveTo(10, 10); g.lineTo(W - 10, 10); g.lineTo(W - 10, H - 26); g.lineTo(W / 2, H - 80); g.lineTo(10, H - 26); g.closePath(); g.stroke();
  g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = fg;
  g.font = `bold 70px ${SERIF}`; g.fillText('CCNY', W / 2, H * 0.30);
  g.beginPath(); g.arc(W / 2, H * 0.52, 44, 0, Math.PI * 2); g.lineWidth = 6; g.strokeStyle = fg; g.stroke();
  g.font = `bold 34px ${SERIF}`; g.fillText('1847', W / 2, H * 0.52);
  g.font = `bold 30px ${SERIF}`; g.fillText('CITY', W / 2, H * 0.70); g.fillText('COLLEGE', W / 2, H * 0.76);
}

function drawModernLib(g, S, rnd) {
  // 8 m x 8 m tile: two 4 m bays, two 4 m floors
  g.fillStyle = '#cfc7b0'; g.fillRect(0, 0, S, S);
  const m = S / 8;
  for (let f = 0; f < 2; f++) {
    const y = S - (f + 1) * 4 * m;
    for (let b = 0; b < 2; b++) {
      const x = b * 4 * m;
      const gx = x + 0.45 * m, gw = 3.1 * m, gy = y + 0.35 * m, gh = 2.55 * m;
      const lit = rnd() < 0.12;
      const grad = g.createLinearGradient(gx, gy, gx + gw, gy + gh);
      grad.addColorStop(0, lit ? '#f6dca0' : '#7fb3c8'); grad.addColorStop(0.5, lit ? '#e8c37c' : '#3e6d86'); grad.addColorStop(1, lit ? '#c99a56' : '#2c4f66');
      g.fillStyle = grad; g.fillRect(gx, gy, gw, gh);
      g.fillStyle = 'rgba(255,255,255,0.14)';
      g.beginPath(); g.moveTo(gx, gy + gh); g.lineTo(gx + gw * 0.45, gy); g.lineTo(gx + gw * 0.7, gy); g.lineTo(gx + gw * 0.25, gy + gh); g.fill();
      g.fillStyle = '#e9e4d4';
      for (let k = 1; k < 4; k++) g.fillRect(gx + gw * k / 4 - 1.5, gy, 3, gh);
      g.fillRect(gx, gy + gh * 0.55, gw, 3);
      g.fillStyle = LAV; g.fillRect(gx, gy + gh + 0.1 * m, gw, 0.5 * m);                         // lavender spandrel
      g.fillStyle = 'rgba(0,0,0,0.2)'; g.fillRect(gx, gy + gh + 0.58 * m, gw, 3);
      g.fillStyle = 'rgba(0,0,0,0.10)'; g.fillRect(x + 3.6 * m, y, 0.4 * m, 4 * m);              // pier shading
    }
    g.fillStyle = '#b3ab94'; g.fillRect(0, y, S, 0.2 * m);                                       // floor slab edge
  }
  for (let i = 0; i < S * S * 0.01; i++) { g.fillStyle = `rgba(0,0,0,${0.06 * rnd()})`; g.fillRect(rnd() * S, rnd() * S, 2, 2); }
}

function drawModernSci(g, S, rnd) {
  g.fillStyle = '#b8b2a4'; g.fillRect(0, 0, S, S);
  const m = S / 8;
  for (let f = 0; f < 2; f++) {
    const y = S - (f + 1) * 4 * m;
    const grad = g.createLinearGradient(0, y, 0, y + 4 * m);
    grad.addColorStop(0, '#5a7e92'); grad.addColorStop(1, '#223748');
    g.fillStyle = grad; g.fillRect(0, y + 0.9 * m, S, 1.9 * m);
    for (let b = 0; b < 8; b++) if (rnd() < 0.14) { g.fillStyle = '#f2d894'; g.fillRect(b * m + 3, y + 0.9 * m, m - 6, 1.9 * m); }
    g.fillStyle = '#dcd7c9'; g.fillRect(0, y + 0.8 * m, S, 0.12 * m); g.fillRect(0, y + 2.8 * m, S, 0.14 * m);
    g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(0, y + 2.94 * m, S, 4);
    g.fillStyle = '#e4dfd0';
    for (let b = 0; b <= 8; b++) g.fillRect(b * m - 3, y + 0.8 * m, 6, 2.2 * m);               // fins
    g.fillStyle = '#8f89ba'; g.fillRect(0, y + 3.2 * m, S, 0.5 * m);                            // pale violet band
  }
  for (let i = 0; i < S * S * 0.012; i++) { g.fillStyle = `rgba(0,0,0,${0.07 * rnd()})`; g.fillRect(rnd() * S, rnd() * S, 2, 2); }
}

function drawGrass(g, S, rnd) {
  g.fillStyle = '#5c9a45'; g.fillRect(0, 0, S, S);
  for (let i = 0; i < 2600; i++) {
    g.fillStyle = rnd() < 0.5 ? `rgba(40,100,40,${0.25 * rnd()})` : `rgba(150,200,90,${0.22 * rnd()})`;
    const x = rnd() * S, y = rnd() * S, w = 3 + rnd() * 4, h = 3 + rnd() * 4;
    g.fillRect(x, y, w, h);
    if (x + w > S) g.fillRect(x - S, y, w, h);
    if (y + h > S) g.fillRect(x, y - S, w, h);
  }
}

/* ------------------------------------------------------------------- build */

export function buildCampus(cx, cz, { group, colliders }) {
  const rnd = mulberry32(1847);
  const root = new THREE.Group();
  root.name = 'CityCollege';
  root.position.set(cx, SIDEWALK_H, cz);
  group.add(root);

  const addBox = (x0, x1, z0, z1, h) => colliders.boxes.push({ minX: cx + x0, maxX: cx + x1, minZ: cz + z0, maxZ: cz + z1, h });
  const addCircle = (x, z, r) => colliders.circles.push({ x: cx + x, z: cz + z, r });
  const mesh = (geo, mat, { cast = false, receive = true } = {}) => {
    const m = new THREE.Mesh(geo, mat);
    m.castShadow = cast; m.receiveShadow = receive;
    root.add(m);
    return m;
  };

  /* ------------------------------------------------------------ materials */
  const tex = (w, h, draw) => canvasTex(w, h, draw);
  const hallTex = tex(Math.round(BAY * 2 * PPM), Math.round(TILE_H * PPM), (g, w, h) => drawGothic(g, w, h, mulberry32(11)));
  const towerTex = tex(Math.round(TOWER_W * PPM), Math.round(TILE_H * PPM), (g, w, h) => drawGothic(g, w, h, mulberry32(12)));
  const portalTex = tex(408, 990, (g, w, h) => drawPortal(g, w, h, mulberry32(13)));
  const signTex = tex(1024, 288, drawSign);
  const monTex = tex(768, 256, drawMonument);
  const lavBanner = tex(256, 640, (g, w, h) => drawBanner(g, w, h, LAV, '#ffffff', '#ffffff'));
  const whiteBanner = tex(256, 640, (g, w, h) => drawBanner(g, w, h, '#f4f1ea', LAV_DK, LAV));
  const libTex = tex(512, 512, (g, w) => drawModernLib(g, w, mulberry32(14)));
  const sciTex = tex(512, 512, (g, w) => drawModernSci(g, w, mulberry32(15)));
  const grassTex = tex(256, 256, (g, w) => drawGrass(g, w, mulberry32(16)));
  for (const t of [signTex, monTex, lavBanner, whiteBanner, portalTex]) t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;

  const std = (o) => new THREE.MeshStandardMaterial({ roughness: 0.9, ...o });
  const hallMat = std({ map: hallTex });
  const towerMat = std({ map: towerTex });
  const libMat = std({ map: libTex, roughness: 0.7 });
  const sciMat = std({ map: sciTex, roughness: 0.8 });
  const stoneMat = vcMaterial({ roughness: 0.92, flatShading: true });
  const detailMat = vcMaterial({ roughness: 0.9, flatShading: true });
  const pathMat = vcMaterial({ roughness: 0.95, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 });
  const grassMat = std({ map: grassTex, roughness: 1, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1 });

  const stone = [];      // big stone/slate pieces (cast shadows)
  const det = [];        // benches, hedges, fountain
  const pave = [];       // flat paving
  const fence = [];

  /* ========================================================== MAIN HALL == */
  const HX0 = -18.6, HX1 = -7.1, HZ = 13.5;            // hall body footprint
  const TX0 = -20, TX1 = -13.5, TZ0 = 13.5, TZ1 = 20;  // tower footprint (south tower; north mirrored)
  mesh(wallGeo(HX0, HX1, 0, HALL_H, -HZ, HZ, { uZ0: -BAY / 2, uX0: -BAY / 2, tileW: BAY * 2, tileH: TILE_H }), hallMat, { cast: true });
  mesh(mergeAll([
    wallGeo(TX0, TX1, 0, TOWER_H, TZ0, TZ1, { uZ0: TZ0, uX0: TX0, tileW: TOWER_W, tileH: TILE_H }),
    wallGeo(TX0, TX1, 0, TOWER_H, -TZ1, -TZ0, { uZ0: -TZ1, uX0: TX0, tileW: TOWER_W, tileH: TILE_H }),
  ]), towerMat, { cast: true });
  addBox(HX0, HX1, -HZ, HZ, HALL_H);
  addBox(TX0, TX1, TZ0, TZ1, TOWER_H);
  addBox(TX0, TX1, -TZ1, -TZ0, TOWER_H);

  // plinths
  bx(stone, STONE_DK, HX0 - 0.15, HX0, 0, 0.9, -HZ, HZ);
  bx(stone, STONE_DK, HX1, HX1 + 0.15, 0, 0.9, -HZ, HZ);
  for (const s of [-1, 1]) {
    const za = Math.min(s * TZ0, s * TZ1), zb = Math.max(s * TZ0, s * TZ1);
    bx(stone, STONE_DK, TX0 - 0.15, TX1 + 0.15, 0, 0.9, za - 0.15, zb + 0.15);
  }
  // hall roof deck, corbel course, parapet, slate roof
  bx(stone, SLATE, HX0, HX1, HALL_H - 0.2, HALL_H + 0.1, -HZ, HZ);
  bx(stone, TRIM, HX0 - 0.2, HX0, HALL_H - 0.4, HALL_H, -HZ, HZ);
  bx(stone, TRIM, HX1, HX1 + 0.2, HALL_H - 0.4, HALL_H, -HZ, HZ);
  parapet(stone, STONE_LT, HX0, HX1, -HZ, HZ, HALL_H);
  roofZ(stone, SLATE, (HX0 + HX1) / 2, HX1 - HX0 - 1.0, -HZ + 0.5, HZ - 0.5, HALL_H, 4.4);
  cyl(stone, STONE_LT, (HX0 + HX1) / 2, HALL_H + 3.5, 0, 0.9, 1.6);              // fleche on the ridge
  pyr(stone, SLATE_LT, (HX0 + HX1) / 2, HALL_H + 5.1, 0, 2.0, 5.0);
  // gabled bay crowns above the four flanking bays
  for (const z of [-2 * BAY, -BAY, BAY, 2 * BAY]) {
    gableZ(stone, TRIM_DIM, HX0 - 0.15, HX0 + 0.45, z, BAY - 0.9, HALL_H + 0.4, 2.4);
    gableZ(stone, STONE, HX0 - 0.1, HX0 + 0.35, z, BAY - 1.7, HALL_H + 0.45, 1.8);
    cyl(stone, TRIM, HX0 + 0.15, HALL_H + 2.8, z, 0.08, 0.6);
  }
  // front pilasters at bay joints
  for (const z of [-1.5 * BAY, 1.5 * BAY]) {
    bx(stone, STONE_LT, HX0 - 0.55, HX0, 0, HALL_H + 0.9, z - 0.38, z + 0.38);
    for (let k = 1; k <= 4; k++) bx(stone, TRIM, HX0 - 0.6, HX0 - 0.5, k * STORY - 0.2, k * STORY - 0.05, z - 0.42, z + 0.42);
    pyr(stone, TRIM, HX0 - 0.27, HALL_H + 0.9, z, 0.95, 1.7);
    addBox(HX0 - 0.55, HX0, z - 0.38, z + 0.38, HALL_H);
  }
  // rear pilasters
  for (const z of [-1.5 * BAY, -0.5 * BAY, 0.5 * BAY, 1.5 * BAY]) {
    bx(stone, STONE_LT, HX1, HX1 + 0.5, 0, HALL_H + 0.9, z - 0.35, z + 0.35);
    pyr(stone, TRIM, HX1 + 0.25, HALL_H + 0.9, z, 0.85, 1.5);
  }

  // central porch + gable
  const PZ = 3.4, PX0 = -19.4;
  bx(stone, STONE, PX0, HX0, 0, 16.5, -PZ, PZ);
  addBox(PX0, HX0, -PZ, PZ, 16.5);
  bx(stone, TRIM, PX0 - 0.2, HX0, 16.5, 16.9, -PZ - 0.3, PZ + 0.3);
  gableZ(stone, STONE_LT, PX0 - 0.05, HX0 + 0.3, 0, 2 * PZ + 0.4, 16.9, 5.1);
  gableZ(stone, STONE, PX0 - 0.12, HX0 + 0.2, 0, 2 * PZ - 1.0, 17.0, 3.8);
  for (const s of [-1, 1]) {                          // corner buttresses with pinnacles
    bx(stone, STONE_LT, PX0 - 0.35, PX0 + 0.35, 0, 17.3, s * PZ - 0.35, s * PZ + 0.35);
    pyr(stone, TRIM, PX0, 17.3, s * PZ, 0.85, 2.2);
  }
  // steps (walkable: no colliders)
  for (let i = 0; i < 4; i++) {
    bx(stone, i % 2 ? TRIM_DIM : TRIM, PX0 - 0.25 * (i + 1), PX0 + 0.05, 0, 0.4 - 0.1 * i, -(4.0 - 0.2 * i), 4.0 - 0.2 * i);
  }
  // portal / rose window face and the big sign
  const face = (w, h, x, y, z) => part(PLANE, '#ffffff', [x, y, z], [w, h, 1], [0, -Math.PI / 2, 0]);
  mesh(mergeAll([face(2 * PZ, 16.5, PX0 - 0.02, 8.25, 0)]), std({ map: portalTex }));
  mesh(mergeAll([face(6.4, 1.8, PX0 - 0.05, 10.6, 0)]),
    std({ map: signTex, roughness: 0.6, emissive: 0xffffff, emissiveMap: signTex, emissiveIntensity: 0.3 }));

  // rear door onto the quad
  bx(stone, TRIM, HX1, HX1 + 0.35, 0, 4.6, -1.7, 1.7);
  bx(det, '#2b1d12', HX1 + 0.35, HX1 + 0.4, 0, 3.8, -1.3, 1.3);
  bx(stone, TRIM_DIM, HX1, HX1 + 1.4, 0, 0.2, -2.4, 2.4);
  bx(stone, TRIM_DIM, HX1, HX1 + 0.9, 0.2, 0.4, -2.0, 2.0);

  // towers
  for (const s of [1, -1]) {
    const za = Math.min(s * TZ0, s * TZ1), zb = Math.max(s * TZ0, s * TZ1);
    const zc = (za + zb) / 2, xc = (TX0 + TX1) / 2;
    bx(stone, SLATE, TX0, TX1, TOWER_H - 0.2, TOWER_H + 0.1, za, zb);
    bx(stone, TRIM, TX0 - 0.15, TX1 + 0.15, TOWER_H - 0.45, TOWER_H - 0.05, za - 0.15, zb + 0.15);
    bx(stone, TRIM_DIM, TX0 - 0.12, TX1 + 0.12, 15.5, 15.7, za - 0.12, zb + 0.12);
    parapet(stone, STONE_LT, TX0, TX1, za, zb, TOWER_H);
    bx(stone, STONE_LT, xc - 2.6, xc + 2.6, TOWER_H + 0.1, TOWER_H + 0.9, zc - 2.6, zc + 2.6);
    stone.push(gradPart(PYR, (c, x, y) => c.set(SLATE).lerp(new THREE.Color(SLATE_LT), y), [xc, TOWER_H + 0.9, zc], [5.2, 10, 5.2]));
    cyl(stone, TRIM, xc, TOWER_H + 10.8, zc, 0.12, 2.2);
    stone.push(part(G.sphere, '#d9b24a', [xc, TOWER_H + 13.0, zc], [0.28, 0.28, 0.28]));
    for (const dx of [-1, 1]) for (const dz of [-1, 1]) {   // corner turrets
      const tx = xc + dx * (TOWER_W / 2 - 0.5), tz = zc + dz * (TOWER_W / 2 - 0.5);
      cyl(stone, STONE_LT, tx, TOWER_H - 2.4, tz, 0.62, 5.6);
      stone.push(part(G.cyl, TRIM, [tx, TOWER_H + 3.3, tz], [0.72, 0.18, 0.72]));
      stone.push(part(G.cone, SLATE_LT, [tx, TOWER_H + 5.3, tz], [0.75, 3.6, 0.75]));
    }
    for (const dz of [-1.2, 1.2]) bx(det, '#16110e', TX0 - 0.04, TX0, TOWER_H - 3.6, TOWER_H - 1.0, zc + dz - 0.4, zc + dz + 0.4);
    // banners on the tower front, with hanging bars
    for (const dz of [-1.7, 1.7]) bx(det, '#2a2a2a', TX0 - 0.08, TX0, 16.62, 16.72, zc + dz - 0.9, zc + dz + 0.9);
    // stair turret where the tower meets the hall
    cyl(stone, STONE_LT, HX0 + 1.4, HALL_H - 1.5, s * (HZ - 0.9), 0.7, 3.6);
    stone.push(part(G.cone, SLATE_LT, [HX0 + 1.4, HALL_H + 3.0, s * (HZ - 0.9)], [0.85, 2.6, 0.85]));
  }

  // flagpole on the porch gable
  cyl(det, '#d8d8d8', PX0 + 0.1, 21.8, 0, 0.07, 7.0);
  det.push(part(G.sphere, '#d9b24a', [PX0 + 0.1, 28.95, 0], [0.14, 0.14, 0.14]));
  mesh(mergeAll([part(PLANE, '#ffffff', [PX0 + 0.1, 27.9, 1.15], [2.3, 1.4, 1], [0, -Math.PI / 2, 0])]),
    new THREE.MeshStandardMaterial({ color: LAV, roughness: 0.8, side: THREE.DoubleSide }));

  // banner pairs on the tower fronts (lavender + white)
  const lavG = [], whiteG = [];
  for (const s of [-1, 1]) {
    const zc = s * (TZ0 + TZ1) / 2;
    lavG.push(part(PLANE, '#ffffff', [TX0 - 0.04, 14.6, zc - 1.7 * s], [1.6, 4.0, 1], [0, -Math.PI / 2, 0]));
    whiteG.push(part(PLANE, '#ffffff', [TX0 - 0.04, 14.6, zc + 1.7 * s], [1.6, 4.0, 1], [0, -Math.PI / 2, 0]));
  }
  mesh(mergeAll(lavG), std({ map: lavBanner, alphaTest: 0.5, side: THREE.DoubleSide }));
  mesh(mergeAll(whiteG), std({ map: whiteBanner, alphaTest: 0.5, side: THREE.DoubleSide }));

  /* =================================================== MODERN BUILDINGS == */
  const LIB = { x0: 9, x1: 20, z0: -18, z1: -3, h: 16 };
  const SCI = { x0: 9, x1: 20, z0: 5, z1: 19, h: 12 };
  const modern = (B, mat) => {
    mesh(wallGeo(B.x0, B.x1, 0, B.h, B.z0, B.z1, { uZ0: 0, uX0: 0, tileW: 8, tileH: 8 }), mat, { cast: true });
    bx(stone, '#a49d8c', B.x0, B.x1, B.h - 0.1, B.h + 0.25, B.z0, B.z1);
    parapet(stone, '#d4cdb9', B.x0, B.x1, B.z0, B.z1, B.h + 0.25, { t: 0.35, wh: 0.55, mh: 0 });
    bx(stone, '#4a4f58', B.x0 - 0.05, B.x1 + 0.05, 0, 0.35, B.z0 - 0.05, B.z1 + 0.05);
    addBox(B.x0, B.x1, B.z0, B.z1, B.h);
  };
  modern(LIB, libMat);
  modern(SCI, sciMat);
  bx(stone, '#9aa0a8', 12, 16, LIB.h + 0.25, LIB.h + 2.6, -14, -8);
  bx(stone, '#9aa0a8', 13, 18, SCI.h + 0.25, SCI.h + 2.2, 9, 15);
  bx(stone, '#6b6f78', 10, 11.5, SCI.h + 0.25, SCI.h + 1.4, 16, 18);
  // library entrance: dark glass bay under a canopy on slim columns
  bx(det, '#2b4a5a', LIB.x0 - 0.06, LIB.x0, 0, 3.6, -12.3, -8.7);
  bx(stone, TRIM, 6.9, LIB.x0, 4.0, 4.35, -13.2, -7.8);
  bx(det, TRIM_DIM, 6.9, LIB.x0, 0, 0.1, -13.2, -7.8);
  for (const z of [-13.0, -8.0]) { cyl(stone, TRIM, 7.15, 0, z, 0.17, 4.0); addCircle(7.15, z, 0.2); }

  /* ===================================================================== */
  /* Ground: lawn, paths, plaza, fountain, hedges, benches                  */
  /* ===================================================================== */
  const PX = 1.0, PZ_ = 1.0;
  const lg = mergeAll([part(PLANE, '#ffffff', [(HX1 + 20.2) / 2, 0.03, 0], [20.2 - HX1, 40.4, 1], [-Math.PI / 2, 0, 0])]);
  { const p = lg.attributes.position, uv = lg.attributes.uv; for (let i = 0; i < p.count; i++) uv.setXY(i, p.getX(i) / 6, p.getZ(i) / 6); }
  mesh(lg, grassMat);

  const flat = (c, x, z, w, d, y = 0.05) => pave.push(part(PLANE, c, [x, y, z], [w, d, 1], [-Math.PI / 2, 0, 0]));
  const disc = (c, x, z, r, y = 0.05) => pave.push(part(DISC, c, [x, y, z], [r, r, 1], [-Math.PI / 2, 0, 0]));
  flat(PAVER, PX, 0, 3.2, 40.2);                                    // N-S path
  flat(PAVER, (HX1 + 20.2) / 2, PZ_, 20.2 - HX1, 3.2);              // E-W path
  disc(PAVER, PX, PZ_, 5.2);
  disc(PAVER_DK, PX, PZ_, 4.2, 0.058);
  disc(PAVER, PX, PZ_, 3.8, 0.066);
  flat(PAVER, (HX0 + TX0) / 2, 0, HX0 - TX0, 2 * HZ);               // forecourt between the towers
  flat(PAVER, (TX1 + HX1) / 2, (TZ0 + TZ1) / 2, HX1 - TX1, TZ1 - TZ0); // tower courtyards
  flat(PAVER, (TX1 + HX1) / 2, -(TZ0 + TZ1) / 2, HX1 - TX1, TZ1 - TZ0);
  for (const s of [-1, 1]) flat(PAVER_DK, PX + s * 1.5, 0, 0.14, 40.2, 0.056);
  for (let k = 0; k < 16; k++) {
    const a = (k / 16) * Math.PI * 2;
    pave.push(part(G.box, PAVER_DK, [PX + Math.cos(a) * 4.5, 0.06, PZ_ + Math.sin(a) * 4.5], [0.14, 0.02, 0.9], [0, -a, 0]));
  }

  // fountain
  const FX = PX, FZ = PZ_;
  cyl(det, '#8e867a', FX, 0.03, FZ, 3.35, 0.2);
  cyl(det, STONE_LT, FX, 0.03, FZ, 3.2, 0.8);
  for (let k = 0; k < 20; k++) {                                    // basin rim
    const a = (k / 20) * Math.PI * 2;
    det.push(part(G.box, TRIM, [FX + Math.cos(a) * 3.1, 0.9, FZ + Math.sin(a) * 3.1], [0.4, 0.3, 1.1], [0, -a, 0]));
  }
  cyl(det, TRIM_DIM, FX, 0.03, FZ, 0.6, 1.9);
  det.push(part(G.hemi, TRIM, [FX, 1.5, FZ], [1.7, 0.8, 1.7], [Math.PI, 0, 0]));
  cyl(det, TRIM_DIM, FX, 1.4, FZ, 0.2, 2.4);
  det.push(part(G.sphere, '#d9b24a', [FX, 3.95, FZ], [0.36, 0.36, 0.36]));
  addCircle(FX, FZ, 3.4);
  mesh(mergeAll([
    part(DISC, '#ffffff', [FX, 0.86, FZ], [2.95, 2.95, 1], [-Math.PI / 2, 0, 0]),
    part(DISC, '#ffffff', [FX, 1.46, FZ], [1.6, 1.6, 1], [-Math.PI / 2, 0, 0]),
  ]), new THREE.MeshStandardMaterial({ color: 0x5ab4e0, roughness: 0.15, metalness: 0.1, transparent: true, opacity: 0.88 }), { receive: false });

  // hedges along the N-S path
  const hedge = (x0, x1, z0, z1) => {
    det.push(gradPart(G.box, (c, x, y) => c.set('#3b6e34').lerp(new THREE.Color('#4d8340'), y + 0.5),
      [(x0 + x1) / 2, 0.38, (z0 + z1) / 2], [x1 - x0, 0.7, z1 - z0]));
    addBox(x0, x1, z0, z1, 0.75);
  };
  for (const xs of [PX - 2.35, PX + 2.35]) { hedge(xs - 0.4, xs + 0.4, -16.5, -6.0); hedge(xs - 0.4, xs + 0.4, 8.0, 17.5); }

  // benches (rotY=0 faces +z)
  const bench = (x, z, rotY) => {
    const sn = Math.sin(rotY), cs = Math.cos(rotY);
    const at = (lx, ly, lz) => [x + lx * cs + lz * sn, ly, z - lx * sn + lz * cs];
    det.push(part(G.box, '#7a5436', at(0, 0.46, 0), [1.8, 0.07, 0.5], [0, rotY, 0]));
    det.push(part(G.box, '#7a5436', at(0, 0.8, -0.24), [1.8, 0.4, 0.06], [0, rotY, 0]));
    for (const lx of [-0.8, 0.8]) det.push(part(G.box, '#2b2f33', at(lx, 0.22, 0), [0.08, 0.44, 0.46], [0, rotY, 0]));
    const ex = Math.abs(cs) * 0.9 + Math.abs(sn) * 0.3, ez = Math.abs(sn) * 0.9 + Math.abs(cs) * 0.3;
    addBox(x - ex, x + ex, z - ez, z + ez, 0.5);
  };
  for (let k = 0; k < 4; k++) {
    const a = Math.PI / 4 + k * Math.PI / 2;
    bench(PX + Math.cos(a) * 6.3, PZ_ + Math.sin(a) * 6.3, Math.atan2(-Math.cos(a), -Math.sin(a)));
  }
  bench(-3.2, PZ_ - 2.3, 0);
  bench(5.4, PZ_ + 4.0, Math.PI);

  // trees
  const treeSpots = [
    [-4.8, -9.0], [-4.8, -16.0], [-4.8, 10.5], [-4.8, 16.5], [6.3, -9.5], [6.3, -16.0],
    [6.3, 10.5], [6.3, 16.2], [-3.8, -3.8], [-3.8, 6.0], [6.4, -3.8], [6.6, 6.2],
  ].map((p, i) => ({ x: p[0], z: p[1], s: 0.95 + rnd() * 0.35, col: [0x3f7a3a, 0x4c8a41, 0x356b35, 0x5a9a48, 0x6aa84f][Math.floor(rnd() * 5)], i }));
  treeSpots.forEach((t) => addCircle(t.x, t.z, 0.42));

  // lamps
  const lampSpots = [
    [-2.6, -17.5], [4.6, -17.5], [-2.6, -9.5], [4.6, -9.5], [-2.6, 11.5], [4.6, 11.5],
    [-2.6, 18.5], [4.6, 18.5], [-6.3, PZ_ + 3.4], [7.9, PZ_ - 3.4],
  ];
  lampSpots.forEach(([x, z]) => addCircle(x, z, 0.22));
  const wallLamps = [-1, 1].map((s) => ({ x: PX0 - 0.1, y: 4.2, z: s * (PZ + 1.0) }));

  // monuments flanking the gate
  for (const s of [-1, 1]) {
    const zc = s * 7.6;
    bx(det, STONE_LT, -20.45, -19.8, 0, 1.25, zc - 2.0, zc + 2.0);
    bx(det, TRIM, -20.55, -19.7, 1.25, 1.45, zc - 2.1, zc + 2.1);
    bx(det, STONE_DK, -20.5, -19.75, 0, 0.2, zc - 2.1, zc + 2.1);
    addBox(-20.5, -19.75, zc - 2.1, zc + 2.1, 1.45);
  }
  mesh(mergeAll([-1, 1].map((s) => part(PLANE, '#ffffff', [-20.47, 0.72, s * 7.6], [3.5, 1.0, 1], [0, -Math.PI / 2, 0]))),
    std({ map: monTex, roughness: 0.6 }));

  /* ------------------------------------------------------------- fence */
  const F = 22, gateHalf = 10.4;
  const run = (alongX, fixed, a0, a1) => {
    const len = a1 - a0;
    if (len < 0.5) return;
    const n = Math.max(2, Math.round(len / 0.32));
    for (let i = 0; i <= n; i++) {
      const t = a0 + (len * i) / n;
      const p = alongX ? [t, fixed] : [fixed, t];
      fence.push(part(G.box, IRON, [p[0], 0.85, p[1]], [0.05, 1.5, 0.05]));
      fence.push(part(PYR, IRON, [p[0], 1.6, p[1]], [0.09, 0.18, 0.09]));
    }
    const mid = (a0 + a1) / 2;
    for (const y of [0.3, 1.25]) {
      fence.push(part(G.box, IRON, alongX ? [mid, y, fixed] : [fixed, y, mid], alongX ? [len, 0.06, 0.06] : [0.06, 0.06, len]));
    }
  };
  const pillar = (x, z, h) => {
    fence.push(part(G.box, STONE_LT, [x, h / 2, z], [0.55, h, 0.55]));
    fence.push(part(G.box, TRIM, [x, h + 0.08, z], [0.7, 0.16, 0.7]));
    fence.push(part(PYR, TRIM, [x, h + 0.16, z], [0.5, 0.45, 0.5]));
  };
  run(false, -F, -F, -gateHalf); run(false, -F, gateHalf, F);                // west, gap at the entrance
  run(false, F, -F, PZ_ - 2.4); run(false, F, PZ_ + 2.4, F);                 // east, gap for the E-W path
  for (const zz of [-F, F]) { run(true, zz, -F, PX - 2.4); run(true, zz, PX + 2.4, F); }
  for (let t = -F; t <= F + 0.01; t += 4.4) {
    for (const z of [-F, F]) if (Math.abs(t - PX) > 2.6) pillar(t, z, 1.9);
    if (Math.abs(t) > gateHalf + 0.5 && Math.abs(t) < F - 0.3) pillar(-F, t, 1.9);
    if (Math.abs(t - PZ_) > 2.9 && Math.abs(t) < F - 0.3) pillar(F, t, 1.9);
  }
  for (const s of [-1, 1]) {
    pillar(-F, s * gateHalf, 2.7);
    pillar(PX + s * 2.4, -F, 2.7); pillar(PX + s * 2.4, F, 2.7);
    pillar(F, PZ_ + s * 2.4, 2.7);
  }

  /* ------------------------------------------------------- final meshes */
  mesh(mergeAll(stone), stoneMat, { cast: true });
  mesh(mergeAll(det), detailMat, { cast: true });
  mesh(mergeAll(pave), pathMat);
  mesh(mergeAll(fence), detailMat);

  const dummy = new THREE.Object3D();
  const inst = (geo, mat, list, { cast = true, colors = false } = {}) => {
    const m = new THREE.InstancedMesh(geo, mat, Math.max(1, list.length));
    list.forEach((it, i) => {
      dummy.position.set(it.x, it.y ?? 0, it.z);
      dummy.rotation.set(0, it.rot ?? 0, 0);
      dummy.scale.set(it.sx ?? 1, it.sy ?? 1, it.sz ?? 1);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
      if (colors) m.setColorAt(i, new THREE.Color(it.col));
    });
    m.count = list.length;
    m.castShadow = cast; m.receiveShadow = true; m.frustumCulled = false;
    root.add(m);
    return m;
  };
  const trunkGeo = new THREE.CylinderGeometry(0.22, 0.32, 1, 7).translate(0, 0.5, 0);
  inst(trunkGeo, new THREE.MeshStandardMaterial({ color: 0x4a3626, roughness: 1 }), treeSpots.map((t) => ({ x: t.x, z: t.z, sy: 3.6 * t.s })));
  const leafMat = new THREE.MeshStandardMaterial({ roughness: 0.9, flatShading: true });
  inst(new THREE.IcosahedronGeometry(2.6, 1), leafMat,
    treeSpots.map((t) => ({ x: t.x, z: t.z, y: 4.9 * t.s, sy: 0.85 * t.s, sx: t.s, sz: t.s, col: t.col, rot: t.i })), { colors: true });
  inst(new THREE.IcosahedronGeometry(1.7, 1), leafMat,
    treeSpots.map((t) => ({ x: t.x + 0.6, z: t.z - 0.4, y: 6.6 * t.s, sx: t.s, sy: 0.9 * t.s, sz: t.s, col: new THREE.Color(t.col).offsetHSL(0, 0, 0.05).getHex(), rot: t.i })), { colors: true });

  const darkMetal = new THREE.MeshStandardMaterial({ color: 0x23292b, roughness: 0.6 });
  inst(new THREE.CylinderGeometry(0.07, 0.12, 1, 8).translate(0, 0.5, 0), darkMetal, lampSpots.map(([x, z]) => ({ x, z, sy: 4.6 })));
  const lanterns = lampSpots.map(([x, z]) => ({ x, z, y: 4.85 }));
  wallLamps.forEach((w) => lanterns.push({ x: w.x, z: w.z, y: w.y, sx: 0.7, sy: 0.7, sz: 0.7 }));
  inst(new THREE.SphereGeometry(0.3, 10, 8), new THREE.MeshStandardMaterial({ color: 0xfff1c9, emissive: 0xffd98a, emissiveIntensity: 0.55, roughness: 0.4 }), lanterns, { cast: false });

  return { name: 'City College', gate: { x: cx - 23, z: cz }, size: 40, group: root };
}
