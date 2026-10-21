// All textures are drawn procedurally on canvases, so the game has zero external assets.
import * as THREE from 'three';
import { rng } from './config.js';

export function canvasTex(w, h, draw, { repeat = true, aniso = 8 } = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  draw(g, w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  if (repeat) t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.anisotropy = aniso;
  return t;
}

function speckle(g, w, h, alpha, density = 0.025) {
  const n = Math.floor(w * h * density);
  for (let i = 0; i < n; i++) {
    const v = rng() < 0.5 ? 0 : 255;
    g.fillStyle = `rgba(${v},${v},${v},${alpha * rng()})`;
    g.fillRect(rng() * w, rng() * h, 2, 2);
  }
}

/* ---------------------------------------------------------------- facades */

export const FACADE_DEFS = [
  { id: 'brick',      style: 'punched', wall: '#9c4f3b', trim: '#e4d6bf', glass: '#222c38', lit: '#f4d58c', fire: true },
  { id: 'darkbrick',  style: 'punched', wall: '#6a382d', trim: '#c9b79c', glass: '#1c2430', lit: '#f1cf84', fire: true },
  { id: 'brownstone', style: 'punched', wall: '#6d4b3b', trim: '#b79d84', glass: '#1f2733', lit: '#f4d58c', fire: false },
  { id: 'limestone',  style: 'punched', wall: '#cfc3a6', trim: '#f1e9d6', glass: '#27323f', lit: '#f6dd9a', fire: false },
  { id: 'gray',       style: 'punched', wall: '#a1a5aa', trim: '#d8dadc', glass: '#243040', lit: '#f4d58c', fire: false },
  { id: 'tan',        style: 'punched', wall: '#c7a77c', trim: '#ead9b8', glass: '#26303d', lit: '#f4d58c', fire: true },
  { id: 'glassblue',  style: 'glass',   wall: '#2f5f8c', trim: '#1b3a58', glass: '#6aa8d8', lit: '#bfe3ff' },
  { id: 'glassdark',  style: 'glass',   wall: '#27323e', trim: '#141b23', glass: '#4d6a85', lit: '#9fc4e6' },
  { id: 'white',      style: 'ribbon',  wall: '#e6e3dc', trim: '#bdb9b0', glass: '#37506b', lit: '#c8e0f5' },
];

// One tile = 4 bays wide x 4 floors tall (14.4 m x 14.4 m)
export const TILE_W = 14.4;
export const TILE_H = 14.4;

function drawFacade(g, def) {
  const S = 512, B = 128;
  g.fillStyle = def.wall;
  g.fillRect(0, 0, S, S);
  speckle(g, S, S, def.style === 'glass' ? 0.035 : 0.09);

  if (def.style === 'punched') {
    // faint brick courses
    g.strokeStyle = 'rgba(0,0,0,0.07)';
    g.lineWidth = 1;
    for (let y = 0; y < S; y += 8) { g.beginPath(); g.moveTo(0, y); g.lineTo(S, y); g.stroke(); }
    for (let f = 0; f < 4; f++) {
      for (let b = 0; b < 4; b++) {
        const x = b * B, y = S - (f + 1) * B;
        const wx = x + 36, wy = y + 30, ww = 56, wh = 76;
        g.fillStyle = def.trim;
        g.fillRect(wx - 7, wy - 11, ww + 14, 9);      // lintel
        g.fillRect(wx - 7, wy + wh, ww + 14, 7);      // sill
        g.fillRect(wx - 3, wy - 3, ww + 6, wh + 6);   // frame
        const lit = rng() < 0.13;
        const grad = g.createLinearGradient(wx, wy, wx + ww, wy + wh);
        if (lit) { grad.addColorStop(0, def.lit); grad.addColorStop(1, '#d9a85a'); }
        else { grad.addColorStop(0, def.glass); grad.addColorStop(0.55, '#10151c'); grad.addColorStop(1, def.glass); }
        g.fillStyle = grad;
        g.fillRect(wx, wy, ww, wh);
        g.fillStyle = def.trim;
        g.fillRect(wx + ww / 2 - 1.5, wy, 3, wh);
        g.fillRect(wx, wy + wh * 0.42, ww, 3);
        if (!lit && rng() < 0.25) {
          g.fillStyle = 'rgba(232,226,208,0.55)';
          g.fillRect(wx, wy, ww, wh * (0.2 + rng() * 0.4));
        }
      }
    }
    if (def.fire) {
      g.fillStyle = '#14171a';
      g.strokeStyle = '#14171a';
      for (let f = 0; f < 4; f++) {
        const x = 2 * B, y = S - (f + 1) * B;
        g.fillRect(x + 10, y + 100, 108, 5);               // platform
        g.fillRect(x + 10, y + 80, 3, 22);                 // rail posts
        g.fillRect(x + 115, y + 80, 3, 22);
        g.fillRect(x + 10, y + 80, 108, 3);                // top rail
        g.lineWidth = 2;
        for (let k = 0; k < 9; k++) { g.beginPath(); g.moveTo(x + 14 + k * 12, y + 83); g.lineTo(x + 14 + k * 12, y + 100); g.stroke(); }
        g.lineWidth = 3;                                    // stair run to the platform below
        g.beginPath(); g.moveTo(x + 96, y + 105); g.lineTo(x + 40, y + B + 98 > S ? S : y + B + 98); g.stroke();
      }
    }
  } else if (def.style === 'glass') {
    for (let f = 0; f < 4; f++) {
      for (let b = 0; b < 4; b++) {
        const x = b * B, y = S - (f + 1) * B;
        const lit = rng() < 0.1;
        const grad = g.createLinearGradient(x, y, x + B, y + B);
        grad.addColorStop(0, lit ? def.lit : def.glass);
        grad.addColorStop(1, lit ? '#8fb7d6' : def.wall);
        g.fillStyle = grad;
        g.fillRect(x + 2, y + 2, B - 4, B - 26);
        g.fillStyle = 'rgba(255,255,255,0.10)';           // sky reflection
        g.beginPath(); g.moveTo(x + 2, y + B - 26); g.lineTo(x + 60, y + 2); g.lineTo(x + 90, y + 2); g.lineTo(x + 32, y + B - 26); g.fill();
        g.fillStyle = def.wall;                            // spandrel
        g.fillRect(x + 2, y + B - 24, B - 4, 22);
        g.fillStyle = def.trim;                            // mullions
        g.fillRect(x, y, 3, B);
        g.fillRect(x, y + B - 3, B, 3);
      }
    }
  } else {
    // ribbon windows
    for (let f = 0; f < 4; f++) {
      const y = S - (f + 1) * B;
      const grad = g.createLinearGradient(0, y, 0, y + B);
      grad.addColorStop(0, def.glass);
      grad.addColorStop(1, '#15202c');
      g.fillStyle = grad;
      g.fillRect(0, y + 28, S, 72);
      g.fillStyle = def.trim;
      for (let x = 0; x < S; x += 64) g.fillRect(x, y + 28, 4, 72);
      g.fillRect(0, y + 24, S, 5);
      g.fillRect(0, y + 100, S, 5);
      for (let x = 0; x < S; x += 64) {
        if (rng() < 0.12) { g.fillStyle = def.lit; g.fillRect(x + 6, y + 31, 56, 66); }
      }
    }
  }
  // grime near the bottom of the tile
  const gr = g.createLinearGradient(0, S - 60, 0, S);
  gr.addColorStop(0, 'rgba(0,0,0,0)');
  gr.addColorStop(1, 'rgba(0,0,0,0.12)');
  g.fillStyle = gr;
  g.fillRect(0, S - 60, S, 60);
}

const facadeCache = new Map();
export function facadeTexture(def) {
  if (!facadeCache.has(def.id)) facadeCache.set(def.id, canvasTex(512, 512, (g) => drawFacade(g, def)));
  return facadeCache.get(def.id);
}

/* ------------------------------------------------------------------ roads */

// A road segment between two intersections: 50 m long x 16 m wide.
// Canvas x -> world along the road (west->east), canvas y -> north->south.
// Eastbound traffic (right-hand drive) uses the bottom half.
export function roadSegmentTexture() {
  return canvasTex(1024, 328, (g, w, h) => {
    g.fillStyle = '#4b4e53';
    g.fillRect(0, 0, w, h);
    speckle(g, w, h, 0.12, 0.05);
    const ppm = w / 50;                       // px per meter along the road
    const ppv = h / 16;                       // px per meter across
    const cy = h / 2;
    // tire wear in the lanes
    g.fillStyle = 'rgba(0,0,0,0.10)';
    for (const s of [-1, 1]) { g.fillRect(0, cy + s * 2.3 * ppv - 0.5 * ppv - 0.6 * ppv, w, 0.5 * ppv); g.fillRect(0, cy + s * 2.3 * ppv + 0.6 * ppv, w, 0.5 * ppv); }
    // double yellow center line
    g.fillStyle = '#d8a91c';
    g.fillRect(0, cy - 0.28 * ppv, w, 0.14 * ppv);
    g.fillRect(0, cy + 0.14 * ppv, w, 0.14 * ppv);
    // parking lane edge lines
    g.fillStyle = 'rgba(225,225,225,0.85)';
    for (const s of [-1, 1]) g.fillRect(0, cy + s * 4.4 * ppv - 0.07 * ppv, w, 0.14 * ppv);
    // zebra crosswalks at both ends
    g.fillStyle = 'rgba(240,240,240,0.9)';
    for (let v = -7.5; v < 7.5; v += 1.0) {
      const y = cy + v * ppv;
      g.fillRect(0.8 * ppm, y, 3.0 * ppm, 0.5 * ppv);
      g.fillRect(w - 3.8 * ppm, y, 3.0 * ppm, 0.5 * ppv);
    }
    // stop lines: westbound (top) at left end, eastbound (bottom) at right end
    g.fillStyle = 'rgba(240,240,240,0.92)';
    g.fillRect(4.8 * ppm, cy - 4.4 * ppv, 0.45 * ppm, 4.4 * ppv);
    g.fillRect(w - 5.25 * ppm, cy, 0.45 * ppm, 4.4 * ppv);
    // small turn-arrow style scuffs
    speckle(g, w, h, 0.07, 0.02);
  }, { repeat: false });
}

export function asphaltTexture() {
  return canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#4b4e53';
    g.fillRect(0, 0, w, h);
    speckle(g, w, h, 0.14, 0.06);
  });
}

export function sidewalkTexture() {
  return canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#bab7af';
    g.fillRect(0, 0, w, h);
    speckle(g, w, h, 0.14, 0.05);
    g.strokeStyle = 'rgba(70,68,64,0.55)';
    g.lineWidth = 3;
    g.strokeRect(1, 1, w - 2, h - 2);
    g.lineWidth = 2;
    g.beginPath(); g.moveTo(w / 2, 0); g.lineTo(w / 2, h); g.moveTo(0, h / 2); g.lineTo(w, h / 2); g.stroke();
    // a few gum spots
    for (let i = 0; i < 14; i++) { g.fillStyle = 'rgba(60,58,55,0.35)'; g.beginPath(); g.arc(rng() * w, rng() * h, 1.5 + rng() * 2, 0, 7); g.fill(); }
  });
}

/* ------------------------------------------------------------------ shops */

export const SHOPS = [
  { text: 'DELI',        bg: '#1f5f3a', fg: '#ffffff' },
  { text: 'PIZZA',       bg: '#b3261e', fg: '#fff3d6' },
  { text: 'BAGELS',      bg: '#2a4d8f', fg: '#ffe9a8' },
  { text: 'CAFE',        bg: '#4a2f22', fg: '#f6e7c9' },
  { text: 'PHARMACY',    bg: '#0f6b55', fg: '#ffffff' },
  { text: 'BAR & GRILL', bg: '#171717', fg: '#f2c14e' },
  { text: '24 HR LAUNDRY', bg: '#2e6f9e', fg: '#ffffff' },
  { text: 'FLOWERS',     bg: '#7a2e63', fg: '#ffe3f1' },
  { text: 'BOOKS',       bg: '#5b3a1e', fg: '#f4e2b8' },
  { text: 'NOODLES',     bg: '#a8321c', fg: '#ffe9b0' },
  { text: 'GROCERY',     bg: '#2f6b2a', fg: '#fff7c2' },
  { text: 'BARBER',      bg: '#1d3557', fg: '#ffffff' },
  { text: 'BOUTIQUE',    bg: '#7a2e8c', fg: '#ffffff' },
];

const shopCache = new Map();
export function shopTexture(i) {
  const def = SHOPS[i % SHOPS.length];
  if (!shopCache.has(i)) {
    shopCache.set(i, canvasTex(1024, 340, (g, w, h) => {
      g.fillStyle = '#16181b';
      g.fillRect(0, 0, w, h);
      // sign band
      g.fillStyle = def.bg;
      g.fillRect(10, 8, w - 20, 98);
      g.strokeStyle = def.fg; g.lineWidth = 4;
      g.strokeRect(20, 16, w - 40, 82);
      g.fillStyle = def.fg;
      g.font = 'bold 66px "Arial Black", Impact, Arial, sans-serif';
      g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText(def.text, w / 2, 58);
      // display windows
      const grad = g.createLinearGradient(0, 120, 0, h);
      grad.addColorStop(0, '#f0d9a3'); grad.addColorStop(1, '#6f5b3b');
      for (const [x0, x1] of [[26, 400], [620, 998]]) {
        g.fillStyle = '#0b0c0e'; g.fillRect(x0 - 6, 118, x1 - x0 + 12, h - 128);
        g.fillStyle = grad; g.fillRect(x0, 124, x1 - x0, h - 140);
        g.fillStyle = 'rgba(255,255,255,0.14)';
        g.beginPath(); g.moveTo(x0, 124); g.lineTo(x0 + 120, 124); g.lineTo(x0 + 40, h - 16); g.lineTo(x0, h - 16); g.fill();
        // shelves / stuff
        g.fillStyle = 'rgba(0,0,0,0.25)';
        for (let k = 0; k < 6; k++) g.fillRect(x0 + 14 + k * 58, 190 + (k % 2) * 40, 34, 60);
      }
      // door
      g.fillStyle = '#0b0c0e'; g.fillRect(430, 118, 160, h - 118);
      g.fillStyle = '#c9d6de'; g.fillRect(440, 126, 140, h - 142);
      g.fillStyle = 'rgba(30,40,50,0.35)'; g.fillRect(440, 126, 140, h - 142);
      g.fillStyle = '#d8d8d8'; g.fillRect(556, 210, 8, 48);
      g.fillStyle = '#ffd24a'; g.fillRect(468, 150, 84, 22);
      g.fillStyle = '#111'; g.font = 'bold 18px Arial'; g.fillText('OPEN', 510, 162);
    }, { aniso: 8 }));
  }
  return shopCache.get(i);
}

/* ------------------------------------------------------------------ signs */

const bladeCache = new Map();
export function bladeTexture(text) {
  if (!bladeCache.has(text)) {
    bladeCache.set(text, canvasTex(512, 112, (g, w, h) => {
      g.fillStyle = '#0d6b3b'; g.fillRect(0, 0, w, h);
      g.strokeStyle = '#f2f2f2'; g.lineWidth = 6; g.strokeRect(8, 8, w - 16, h - 16);
      g.fillStyle = '#f2f2f2';
      g.font = 'bold 58px Arial, Helvetica, sans-serif';
      g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText(text, w / 2, h / 2 + 3);
    }, { repeat: false }));
  }
  return bladeCache.get(text);
}

export const LINE_COLORS = {
  '1': '#ee352e', '2': '#ee352e', '3': '#ee352e',
  '4': '#00933c', '5': '#00933c', '6': '#00933c',
  A: '#0039a6', C: '#0039a6', E: '#0039a6',
  B: '#ff6319', D: '#ff6319', F: '#ff6319', M: '#ff6319',
  N: '#fccc0a', Q: '#fccc0a', R: '#fccc0a', W: '#fccc0a',
  '7': '#b933ad', L: '#a7a9ac', G: '#6cbe45', J: '#996633', Z: '#996633',
};

export function totemTexture(station, lines) {
  return canvasTex(256, 512, (g, w, h) => {
    g.fillStyle = '#101214'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#0d7a45'; g.fillRect(0, 0, w, 96);
    g.fillStyle = '#ffffff';
    g.font = 'bold 54px Arial, Helvetica, sans-serif';
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('SUBWAY', w / 2, 50);
    // bullets
    const cols = Math.min(lines.length, 3);
    lines.forEach((ln, i) => {
      const cx = w / 2 + (i % 3 - (cols - 1) / 2) * 72;
      const cy = 170 + Math.floor(i / 3) * 76;
      g.fillStyle = LINE_COLORS[ln] || '#888';
      g.beginPath(); g.arc(cx, cy, 31, 0, Math.PI * 2); g.fill();
      g.fillStyle = (ln === 'N' || ln === 'Q' || ln === 'R' || ln === 'W') ? '#111' : '#fff';
      g.font = 'bold 40px Arial, Helvetica, sans-serif';
      g.fillText(ln, cx, cy + 2);
    });
    g.fillStyle = '#f0f0f0';
    g.font = 'bold 34px Arial, Helvetica, sans-serif';
    const words = station.split(' ');
    const mid = Math.ceil(words.length / 2);
    g.fillText(words.slice(0, mid).join(' '), w / 2, 372);
    if (words.length > 1) g.fillText(words.slice(mid).join(' '), w / 2, 414);
    g.fillStyle = '#0d7a45'; g.fillRect(0, h - 22, w, 22);
  }, { repeat: false });
}

export function stairsTexture() {
  return canvasTex(128, 128, (g, w, h) => {
    const grad = g.createLinearGradient(0, 0, w, 0);
    grad.addColorStop(0, '#2a2c2f'); grad.addColorStop(1, '#030304');
    g.fillStyle = grad; g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(0,0,0,0.55)';
    for (let x = 0; x < w; x += 16) g.fillRect(x, 0, 6, h);
  }, { repeat: false });
}

const truckCache = new Map();
export function truckTexture(def) {
  const key = def.name + def.color;
  if (!truckCache.has(key)) {
    truckCache.set(key, canvasTex(1200, 500, (g, w, h) => {
      g.fillStyle = def.color; g.fillRect(0, 0, w, h);
      g.fillStyle = 'rgba(0,0,0,0.22)'; g.fillRect(0, h - 90, w, 90);       // lower skirt
      g.fillStyle = def.accent; g.fillRect(0, h - 105, w, 16);               // accent stripe
      // serving window
      g.fillStyle = '#101113'; g.fillRect(610, 140, 460, 240);
      const grad = g.createLinearGradient(0, 150, 0, 370);
      grad.addColorStop(0, '#3a3128'); grad.addColorStop(1, '#a98456');
      g.fillStyle = grad; g.fillRect(622, 152, 436, 216);
      g.fillStyle = '#d9d9d6'; g.fillRect(600, 360, 480, 26);                // counter
      // little silhouette inside
      g.fillStyle = 'rgba(0,0,0,0.5)'; g.beginPath(); g.arc(840, 250, 36, 0, 7); g.fill(); g.fillRect(804, 280, 72, 80);
      // awning
      for (let i = 0; i < 12; i++) { g.fillStyle = i % 2 ? '#ffffff' : def.accent; g.fillRect(590 + i * 41, 100, 41, 44); }
      // name
      g.fillStyle = def.text;
      g.font = 'bold 92px "Arial Black", Impact, Arial, sans-serif';
      g.textAlign = 'left'; g.textBaseline = 'alphabetic';
      def.name.split('\n').forEach((line, i) => g.fillText(line, 50, 190 + i * 100));
      g.font = 'bold 40px Arial, sans-serif';
      g.fillText(def.tag, 54, 400);
      // menu board
      g.fillStyle = '#1b1b1b'; g.fillRect(1090, 150, 90, 200);
      g.fillStyle = '#f5f5f5'; for (let i = 0; i < 6; i++) g.fillRect(1100, 168 + i * 28, 70, 5);
    }));
  }
  return truckCache.get(key);
}

export function stripesTexture(c1, c2) {
  return canvasTex(128, 16, (g, w, h) => {
    const n = 8;
    for (let i = 0; i < n; i++) { g.fillStyle = i % 2 ? c1 : c2; g.fillRect((i * w) / n, 0, w / n, h); }
  });
}

export function steamTexture() {
  return canvasTex(64, 64, (g, w, h) => {
    const grad = g.createRadialGradient(32, 32, 2, 32, 32, 30);
    grad.addColorStop(0, 'rgba(255,255,255,0.85)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grad; g.fillRect(0, 0, w, h);
  }, { repeat: false });
}

export function cartSignTexture(text) {
  return canvasTex(256, 96, (g, w, h) => {
    g.fillStyle = '#d6291d'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#ffd23f'; g.fillRect(0, 0, w, 8); g.fillRect(0, h - 8, w, 8);
    g.fillStyle = '#fff';
    g.font = 'bold 48px "Arial Black", Impact, Arial, sans-serif';
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText(text, w / 2, h / 2 + 2);
  }, { repeat: false });
}

/* ---------------------------------------------------------------- interiors */

const floorCache = new Map();
export function floorTexture(style, repX = 8, repY = 6) {
  if (!floorCache.has(style)) {
    floorCache.set(style, canvasTex(256, 256, (g, w, h) => {
      const checker = (a, b, n) => { const s = w / n; for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) { g.fillStyle = (x + y) % 2 ? a : b; g.fillRect(x * s, y * s, s, s); } };
      if (style === 'checker') { checker('#ece8dd', '#26282b', 4); }
      else if (style === 'checkerRed') { checker('#f4efe4', '#b3261e', 4); }
      else if (style === 'checkerGreen') { checker('#f1ede0', '#2f6b3f', 4); }
      else if (style === 'tile') {
        g.fillStyle = '#d9dcdc'; g.fillRect(0, 0, w, h);
        g.strokeStyle = '#a9aeb0'; g.lineWidth = 3;
        for (let i = 0; i <= 4; i++) { g.beginPath(); g.moveTo(i * w / 4, 0); g.lineTo(i * w / 4, h); g.moveTo(0, i * h / 4); g.lineTo(w, i * h / 4); g.stroke(); }
        speckle(g, w, h, 0.08, 0.03);
      } else if (style === 'carpet') {
        g.fillStyle = '#6b2430'; g.fillRect(0, 0, w, h); speckle(g, w, h, 0.25, 0.25);
      } else { // wood planks
        const base = style === 'darkwood' ? [74, 46, 30] : [176, 128, 82];
        for (let i = 0; i < 8; i++) {
          const v = (rng() - 0.5) * 24;
          g.fillStyle = `rgb(${base[0] + v},${base[1] + v * 0.8},${base[2] + v * 0.6})`;
          g.fillRect(0, i * h / 8, w, h / 8);
          g.fillStyle = 'rgba(0,0,0,0.35)'; g.fillRect(0, i * h / 8, w, 2);
          const off = rng() * w; g.fillRect(off, i * h / 8, 2, h / 8);
        }
        speckle(g, w, h, 0.06, 0.03);
      }
    }));
  }
  const t = floorCache.get(style).clone();
  t.needsUpdate = true;
  t.repeat.set(repX, repY);
  return t;
}

export function neonTexture(text, color = '#ffd24a') {
  return canvasTex(1024, 256, (g, w, h) => {
    g.clearRect(0, 0, w, h);
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.font = 'bold 120px "Arial Black", Impact, Arial, sans-serif';
    let size = 120;
    while (g.measureText(text).width > w - 80 && size > 40) { size -= 6; g.font = `bold ${size}px "Arial Black", Impact, Arial, sans-serif`; }
    g.shadowColor = color; g.shadowBlur = 36; g.fillStyle = color;
    g.fillText(text, w / 2, h / 2 + 6);
    g.shadowBlur = 12; g.fillStyle = '#ffffff';
    g.globalAlpha = 0.85; g.fillText(text, w / 2, h / 2 + 6);
  }, { repeat: false });
}

export function subwayTileTexture() {
  return canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = '#e9e6dc'; g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(80,78,70,0.35)'; g.lineWidth = 2;
    for (let y = 0; y < h; y += 32) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); }
    for (let y = 0, r = 0; y < h; y += 32, r++) for (let x = (r % 2) * 32; x < w; x += 64) { g.beginPath(); g.moveTo(x, y); g.lineTo(x, y + 32); g.stroke(); }
    speckle(g, w, h, 0.07, 0.02);
  });
}

export function stationSignTexture(station, lines) {
  return canvasTex(768, 160, (g, w, h) => {
    g.fillStyle = '#f4f2ea'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#111'; g.fillRect(0, 0, w, 10); g.fillRect(0, h - 10, w, 10);
    g.fillStyle = '#111';
    g.font = 'bold 62px Arial, Helvetica, sans-serif';
    g.textAlign = 'left'; g.textBaseline = 'middle';
    g.fillText(station.toUpperCase(), 28, h / 2 + 2);
    const shown = lines.slice(0, 5);
    shown.forEach((ln, i) => {
      const cx = w - 54 - i * 60, cy = h / 2;
      g.fillStyle = LINE_COLORS[ln] || '#777';
      g.beginPath(); g.arc(cx, cy, 24, 0, Math.PI * 2); g.fill();
      g.fillStyle = ['N', 'Q', 'R', 'W'].includes(ln) ? '#111' : '#fff';
      g.font = 'bold 30px Arial'; g.textAlign = 'center';
      g.fillText(ln, cx, cy + 2);
    });
  }, { repeat: false });
}

export function exitSignTexture() {
  return canvasTex(256, 96, (g, w, h) => {
    g.fillStyle = '#0d6b3b'; g.fillRect(0, 0, w, h);
    g.fillStyle = '#fff'; g.font = 'bold 56px Arial'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillText('EXIT', w / 2, h / 2 + 3);
  }, { repeat: false });
}

const trainCache = new Map();
export function trainSideTexture(color) {
  if (!trainCache.has(color)) {
    trainCache.set(color, canvasTex(1024, 256, (g, w, h) => {
      const steel = g.createLinearGradient(0, 0, 0, h);
      steel.addColorStop(0, '#cfd3d8'); steel.addColorStop(0.5, '#aeb3ba'); steel.addColorStop(1, '#8d939a');
      g.fillStyle = steel; g.fillRect(0, 0, w, h);
      for (let x = 0; x < w; x += 6) { g.fillStyle = `rgba(0,0,0,${0.03 + rng() * 0.04})`; g.fillRect(x, 0, 2, h); }  // corrugation
      g.fillStyle = color; g.fillRect(0, h * 0.64, w, 14);                  // line stripe
      // windows between the four doors; doors are at u = .125 .375 .625 .875
      for (let i = 0; i < 4; i++) {
        const cx = (i * 0.25 + 0.125) * w;
        g.fillStyle = '#9ea4ab'; g.fillRect(cx - 62, 20, 124, h - 60);        // door leaf
        g.fillStyle = '#2b3b4b'; g.fillRect(cx - 52, 36, 46, 100); g.fillRect(cx + 6, 36, 46, 100);
        g.fillStyle = 'rgba(0,0,0,0.5)'; g.fillRect(cx - 2, 20, 4, h - 60);
        if (i < 3) {
          const wx = (i * 0.25 + 0.25) * w;
          for (const o of [-52, 8]) {
            g.fillStyle = '#22303e'; g.fillRect(wx + o - 18, 44, 82, 96);
            g.fillStyle = 'rgba(255,255,255,0.10)'; g.beginPath(); g.moveTo(wx + o - 18, 44); g.lineTo(wx + o + 20, 44); g.lineTo(wx + o - 6, 140); g.lineTo(wx + o - 18, 140); g.fill();
          }
        }
      }
      g.fillStyle = '#222'; g.fillRect(0, h - 28, w, 28);                   // skirt
    }));
  }
  return trainCache.get(color);
}

export function trainInsideTexture() {
  return canvasTex(128, 256, (g, w, h) => {
    const grad = g.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#fff3cf'); grad.addColorStop(1, '#bfa56d');
    g.fillStyle = grad; g.fillRect(0, 0, w, h);
    g.fillStyle = '#c8cdd2'; g.fillRect(w / 2 - 4, 0, 8, h);                // pole
    g.fillStyle = '#e07a1f'; g.fillRect(0, h * 0.55, w, h * 0.2);           // seats
  }, { repeat: false });
}
