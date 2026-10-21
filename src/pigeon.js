// Procedural pigeon: body, head-bob, wings and legs, plus optional outfits.
import * as THREE from 'three';
import { G, part, gradPart, merge, vcMaterial } from './gfx.js';
import { rng, pick, rand, clamp } from './config.js';

const PLUMAGE = [
  { body: 0x8f99a6, belly: 0x9aa4b0, wing: 0x7a8491, bar: 0x2b2f36, tail: 0x4a4f57 }, // classic blue-gray
  { body: 0x585d66, belly: 0x62676f, wing: 0x474c54, bar: 0x1b1e22, tail: 0x34383e }, // dark
  { body: 0xd2d6db, belly: 0xdfe2e6, wing: 0xb4bac2, bar: 0x6c717a, tail: 0x9aa0a8 }, // pale
  { body: 0xa4705a, belly: 0xb08067, wing: 0x8a5a48, bar: 0x4a2c22, tail: 0x5c382c }, // red-brown
  { body: 0x7b8592, belly: 0xb9bdc4, wing: 0x66707d, bar: 0x22262c, tail: 0x3d424a }, // checker-ish
];

const SUIT_COLORS = [0x24262b, 0x1c2a44, 0x3a3a3f, 0x2e2420, 0x3b4a5a, 0x4a1f2a];
const TIE_COLORS = [0xc0392b, 0x2563a8, 0xe0b32e, 0x2e8b57, 0x7d3c98];
const CASUAL_COLORS = [0xd8433a, 0x2fa3a0, 0xe2a62b, 0x7e57c2, 0xf2f2f2, 0xe86fa5, 0x3a86d6, 0x4caf50, 0xff7a3d];
const HAT_COLORS = [0x151515, 0x6b4a2f, 0x4c4f55, 0x2c3e50];

const legGeo = merge([
  part(G.cyl, 0xc45c72, [0, -0.15, 0], [0.022, 0.3, 0.022]),
  part(G.box, 0xc45c72, [0, -0.295, 0.04], [0.07, 0.02, 0.14]),
  part(G.box, 0xc45c72, [0, -0.295, 0.0], [0.02, 0.02, 0.2]),
]);
const mat = vcMaterial({ roughness: 0.85 });


/* ---------------------------------------------------------------- wardrobe */

function addHat(head, type, c = 0x222222) {
  switch (type) {
    case 'top':
      head.push(part(G.cyl, 0x151515, [0, 0.25, 0.06], [0.07, 0.13, 0.07]));
      head.push(part(G.cyl, 0x151515, [0, 0.185, 0.06], [0.135, 0.012, 0.135]));
      head.push(part(G.cyl, c, [0, 0.2, 0.06], [0.0725, 0.02, 0.0725]));
      break;
    case 'cowboy':
      head.push(part(G.hemi, c, [0, 0.185, 0.06], [0.078, 0.085, 0.078]));
      head.push(part(G.cyl, c, [0, 0.18, 0.06], [0.175, 0.01, 0.175]));
      head.push(part(G.cyl, 0x3a2414, [0, 0.19, 0.06], [0.08, 0.016, 0.08]));
      break;
    case 'crown':
      head.push(part(G.cyl, 0xf2c230, [0, 0.2, 0.06], [0.085, 0.045, 0.085]));
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        head.push(part(G.cone, 0xf2c230, [Math.cos(a) * 0.078, 0.255, 0.06 + Math.sin(a) * 0.078], [0.02, 0.06, 0.02]));
      }
      head.push(part(G.sphere, 0xd8312a, [0, 0.205, 0.145], [0.014, 0.014, 0.014]));
      break;
    case 'grad':
      head.push(part(G.hemi, 0x151515, [0, 0.172, 0.06], [0.092, 0.07, 0.092]));
      head.push(part(G.box, 0x151515, [0, 0.222, 0.06], [0.215, 0.014, 0.215]));
      head.push(part(G.sphere, 0xe0b32e, [0, 0.232, 0.06], [0.014, 0.014, 0.014]));
      head.push(part(G.cyl, 0xe0b32e, [0.105, 0.2, 0.06], [0.005, 0.05, 0.005]));
      head.push(part(G.sphere, 0xe0b32e, [0.105, 0.17, 0.06], [0.014, 0.018, 0.014]));
      break;
    case 'beanie':
      head.push(part(G.hemi, c, [0, 0.17, 0.055], [0.1, 0.09, 0.1]));
      head.push(part(G.torus, c, [0, 0.172, 0.055], [0.099, 0.099, 0.099], [Math.PI / 2, 0, 0]));
      head.push(part(G.sphere, 0xffffff, [0, 0.265, 0.055], [0.026, 0.026, 0.026]));
      break;
    case 'cap':
      head.push(part(G.hemi, c, [0, 0.17, 0.055], [0.1, 0.085, 0.1]));
      head.push(part(G.box, c, [0, 0.165, 0.15], [0.12, 0.012, 0.09]));
      break;
    case 'chef':
      head.push(part(G.cyl, 0xffffff, [0, 0.215, 0.062], [0.07, 0.09, 0.07]));
      head.push(part(G.sphere, 0xffffff, [0, 0.285, 0.062], [0.098, 0.065, 0.098]));
      break;
    case 'party':
      head.push(part(G.cone, c, [0, 0.27, 0.06], [0.055, 0.16, 0.055]));
      head.push(part(G.sphere, 0xffffff, [0, 0.355, 0.06], [0.02, 0.02, 0.02]));
      head.push(part(G.torus, 0xffffff, [0, 0.2, 0.06], [0.05, 0.05, 0.05], [Math.PI / 2, 0, 0]));
      break;
    case 'headphones':
      head.push(part(G.arc, 0x202225, [0, 0.12, 0.06], [0.108, 0.108, 0.108]));
      for (const sd of [-1, 1]) head.push(part(G.cyl, c, [sd * 0.105, 0.12, 0.06], [0.04, 0.03, 0.04], [0, 0, Math.PI / 2]));
      break;
    default: break;
  }
}

function applyLook(look, pl, body, head, wingR, wingL) {
  const sleeves = (c) => { for (const [arr, sd] of [[wingR, 1], [wingL, -1]]) arr.push(part(G.sphere, c, [sd * 0.03, -0.09, -0.1], [0.046, 0.125, 0.275])); };
  const b = look.body;
  if (b) {
    const c = b.color ?? 0xd8433a;
    switch (b.type) {
      case 'hoodie':
        body.push(part(G.sphere, c, [0, 0.11, -0.04], [0.222, 0.21, 0.31]));
        body.push(part(G.sphere, c, [0, 0.2, -0.08], [0.1, 0.07, 0.1]));
        body.push(part(G.box, 0x000000, [0, 0.03, 0.2], [0.12, 0.002, 0.003]));
        sleeves(c); break;
      case 'tee':
        body.push(part(G.sphere, c, [0, 0.105, -0.03], [0.208, 0.2, 0.28]));
        body.push(part(G.sphere, 0xffffff, [0, 0.105, 0.0], [0.212, 0.05, 0.285])); break;
      case 'jersey':
        body.push(part(G.sphere, c, [0, 0.105, -0.03], [0.214, 0.205, 0.29]));
        body.push(part(G.box, 0xffffff, [0, 0.12, 0.2], [0.07, 0.1, 0.01], [-0.2, 0, 0]));
        sleeves(c); break;
      case 'aloha':
        body.push(part(G.sphere, c, [0, 0.105, -0.03], [0.21, 0.2, 0.29]));
        for (let i = 0; i < 9; i++) body.push(part(G.sphere, i % 2 ? 0xffe14d : 0xffffff, [Math.sin(i * 2.4) * 0.17, 0.1 + Math.cos(i * 1.7) * 0.07, 0.04 + (i % 3) * 0.08], [0.03, 0.03, 0.03])); break;
      case 'suit': case 'tux': {
        const jacket = b.type === 'tux' ? 0x15161a : c;
        body.push(part(G.sphere, jacket, [0, 0.105, -0.06], [0.224, 0.212, 0.31]));
        body.push(part(G.sphere, 0xf4f4f0, [0, 0.115, 0.15], [0.165, 0.175, 0.2]));
        if (b.type === 'suit') body.push(part(G.box, 0xc0392b, [0, 0.1, 0.343], [0.036, 0.17, 0.014], [-0.18, 0, 0]));
        for (const sx of [-1, 1]) body.push(part(G.box, jacket, [sx * 0.085, 0.14, 0.31], [0.07, 0.17, 0.02], [-0.25, sx * 0.3, sx * 0.25]));
        sleeves(jacket); break;
      }
      default: break;
    }
  }
  if (look.hat) addHat(head, look.hat.type, look.hat.color ?? 0xd8433a);
  const f = look.face;
  if (f) {
    if (f.type === 'shades') head.push(part(G.box, 0x111111, [0, 0.14, 0.12], [0.17, 0.03, 0.02]));
    else if (f.type === 'heart') { head.push(part(G.box, 0xff5fa8, [0, 0.14, 0.12], [0.17, 0.03, 0.02])); for (const sd of [-1, 1]) head.push(part(G.sphere, 0xff5fa8, [sd * 0.04, 0.14, 0.125], [0.03, 0.028, 0.012])); }
    else if (f.type === 'monocle') { head.push(part(G.torus, 0xe0b32e, [0.052, 0.14, 0.13], [0.034, 0.034, 0.034])); }
  }
  const n = look.neck;
  if (n) {
    const c = n.color ?? 0xd8312a;
    if (n.type === 'bandana') {
      head.push(part(G.torus, c, [0, 0.0, 0.0], [0.118, 0.118, 0.118], [Math.PI / 2, 0, 0]));
      head.push(part(G.box, c, [0, -0.03, 0.115], [0.07, 0.07, 0.01], [0.2, 0, Math.PI / 4]));
    } else if (n.type === 'scarf') {
      head.push(part(G.torus, c, [0, 0.0, 0.0], [0.122, 0.122, 0.122], [Math.PI / 2, 0, 0]));
      head.push(part(G.box, c, [0.05, -0.1, 0.1], [0.04, 0.16, 0.012], [0.1, 0, 0.15]));
    } else if (n.type === 'bowtie') {
      for (const sd of [-1, 1]) head.push(part(G.cone, c, [sd * 0.03, -0.045, 0.108], [0.03, 0.045, 0.012], [0, 0, sd * Math.PI / 2]));
      head.push(part(G.sphere, c, [0, -0.045, 0.108], [0.014, 0.014, 0.014]));
    } else if (n.type === 'chain') {
      head.push(part(G.torus, 0xf2c230, [0, -0.02, 0.0], [0.112, 0.112, 0.112], [Math.PI / 2, 0, 0]));
      head.push(part(G.cyl, 0xf2c230, [0, -0.1, 0.1], [0.026, 0.008, 0.026], [Math.PI / 2, 0, 0]));
    }
  }
  const k = look.back;
  if (k) {
    const c = k.color ?? 0xd8312a;
    if (k.type === 'backpack') { body.push(part(G.box, c, [0, 0.13, -0.16], [0.14, 0.17, 0.08])); body.push(part(G.box, 0x222222, [0, 0.13, -0.2], [0.12, 0.05, 0.02])); }
    else if (k.type === 'cape') { body.push(part(G.box, c, [0, 0.06, -0.26], [0.3, 0.03, 0.4], [0.5, 0, 0])); body.push(part(G.sphere, 0xf2c230, [0, 0.19, -0.02], [0.02, 0.02, 0.02])); }
  }
}

function makeParts(opts) {
  const pl = PLUMAGE[opts.plumage % PLUMAGE.length];
  const body = [];
  const head = [];
  const wingR = [];
  const wingL = [];

  // --- torso (relative to hip pivot at y=0.36)
  body.push(part(G.sphere, pl.body, [0, 0.1, -0.02], [0.2, 0.2, 0.34]));
  const bt = opts.look && opts.look.body ? opts.look.body.type : null;
  if (opts.outfit !== 'suit' && bt !== 'suit' && bt !== 'tux') body.push(part(G.sphere, pl.belly, [0, 0.11, 0.15], [0.185, 0.18, 0.2]));
  body.push(part(G.sphere, pl.body, [0, 0.07, -0.25], [0.13, 0.12, 0.14]));
  body.push(part(G.box, pl.tail, [0, 0.065, -0.42], [0.17, 0.025, 0.24], [-0.2, 0, 0]));
  body.push(part(G.box, pl.bar, [0, 0.055, -0.53], [0.17, 0.027, 0.05], [-0.2, 0, 0]));

  // --- head group (pivot at neck base)
  // Neck: two overlapping ellipsoids whose colors blend smoothly gray -> purple -> green -> gray,
  // with the throat (front) fading back to gray, like a real pigeon's iridescent collar.
  const base = new THREE.Color(pl.body);
  const gray = new THREE.Color(pl.belly);
  const PURPLE = new THREE.Color(0x7d56a8), GREEN = new THREE.Color(0x35a184);
  const ss = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const neckColor = (out, x, y, z) => {
    out.copy(base);
    out.lerp(PURPLE, ss(-0.85, -0.35, y) * (1 - ss(-0.1, 0.35, y)));
    out.lerp(GREEN, ss(-0.3, 0.2, y) * (1 - ss(0.45, 0.95, y)));
    out.lerp(gray, ss(0.15, 0.85, z) * 0.9);            // light throat
  };
  head.push(gradPart(G.sphere, neckColor, [0, 0.0, -0.012], [0.105, 0.118, 0.1]));
  head.push(gradPart(G.sphere, neckColor, [0, 0.066, 0.03], [0.086, 0.1, 0.086]));
  head.push(part(G.sphere, pl.body, [0, 0.125, 0.062], [0.093, 0.093, 0.098]));    // head
  head.push(part(G.cone, 0x3a3a3e, [0, 0.115, 0.16], [0.022, 0.09, 0.022], [Math.PI / 2, 0, 0])); // beak
  head.push(part(G.sphere, 0xf2f2f2, [0, 0.125, 0.125], [0.024, 0.02, 0.024]));   // cere
  for (const s of [-1, 1]) {
    head.push(part(G.sphere, 0xe3822b, [s * 0.072, 0.14, 0.09], [0.022, 0.022, 0.022]));
    head.push(part(G.sphere, 0x101010, [s * 0.083, 0.14, 0.096], [0.012, 0.012, 0.012]));
  }

  // --- wings (pivot at shoulder). Built for the right wing, mirrored for the left.
  for (const [arr, s] of [[wingR, 1], [wingL, -1]]) {
    arr.push(part(G.sphere, pl.wing, [s * 0.03, -0.09, -0.1], [0.04, 0.12, 0.27]));
    arr.push(part(G.box, pl.bar, [s * 0.062, -0.17, -0.14], [0.012, 0.022, 0.22], [0.12, 0, 0]));
  }

  // --- outfits
  const outfit = opts.outfit;
  if (opts.look) {
    applyLook(opts.look, pl, body, head, wingR, wingL);
  } else if (outfit === 'suit') {
    const jacket = pick(SUIT_COLORS);
    body.push(part(G.sphere, jacket, [0, 0.105, -0.06], [0.224, 0.212, 0.31]));
    body.push(part(G.sphere, 0xf4f4f0, [0, 0.115, 0.15], [0.165, 0.175, 0.2]));              // white shirt front
    body.push(part(G.box, pick(TIE_COLORS), [0, 0.1, 0.343], [0.036, 0.17, 0.014], [-0.18, 0, 0])); // tie
    for (const sx of [-1, 1]) body.push(part(G.box, jacket, [sx * 0.085, 0.14, 0.31], [0.07, 0.17, 0.02], [-0.25, sx * 0.3, sx * 0.25])); // lapels
    for (const arr of [wingR, wingL]) arr.push(part(G.sphere, jacket, [arr === wingR ? 0.03 : -0.03, -0.09, -0.1], [0.046, 0.125, 0.275]));
    const r = rng();
    const hc = pick(HAT_COLORS);
    if (r < 0.3) { // bowler
      head.push(part(G.hemi, hc, [0, 0.185, 0.06], [0.082, 0.085, 0.082]));
      head.push(part(G.cyl, hc, [0, 0.18, 0.06], [0.125, 0.012, 0.125]));
    } else if (r < 0.55) { // fedora
      head.push(part(G.cyl, hc, [0, 0.225, 0.06], [0.07, 0.08, 0.07]));
      head.push(part(G.cyl, hc, [0, 0.185, 0.06], [0.145, 0.012, 0.145]));
      head.push(part(G.cyl, 0xb02a2a, [0, 0.198, 0.06], [0.073, 0.016, 0.073]));
    }
    if (rng() < 0.2) head.push(part(G.box, 0x111111, [0, 0.14, 0.12], [0.17, 0.028, 0.02])); // shades
  } else if (outfit === 'casual') {
    const c1 = pick(CASUAL_COLORS);
    const c2 = pick(CASUAL_COLORS);
    const kind = pick(['hoodie', 'tee', 'vest']);
    if (kind === 'hoodie') {
      body.push(part(G.sphere, c1, [0, 0.11, -0.04], [0.222, 0.21, 0.31]));
      body.push(part(G.sphere, c1, [0, 0.2, -0.08], [0.1, 0.07, 0.1]));
      body.push(part(G.box, 0x000000, [0, 0.03, 0.2], [0.12, 0.002, 0.003]));
    } else if (kind === 'tee') {
      body.push(part(G.sphere, c1, [0, 0.105, -0.03], [0.208, 0.2, 0.28]));
      body.push(part(G.sphere, c2, [0, 0.105, 0.0], [0.212, 0.06, 0.285]));
    } else {
      body.push(part(G.sphere, c1, [0, 0.11, -0.05], [0.218, 0.205, 0.26]));
      body.push(part(G.box, 0xffffff, [0, 0.16, 0.2], [0.02, 0.1, 0.01]));
    }
    for (const arr of [wingR, wingL]) if (kind === 'hoodie') arr.push(part(G.sphere, c1, [arr === wingR ? 0.03 : -0.03, -0.09, -0.1], [0.046, 0.125, 0.275]));
    if (rng() < 0.45) { // scarf
      head.push(part(G.torus, c2, [0, 0.0, 0.0], [0.115, 0.115, 0.115], [Math.PI / 2, 0, 0]));
    }
    const h = rng();
    if (opts.hat === 'grad') addHat(head, 'grad', 0x151515);
    else if (h < 0.22) { // beanie
      const bc = pick(CASUAL_COLORS);
      head.push(part(G.hemi, bc, [0, 0.17, 0.055], [0.1, 0.09, 0.1]));
      head.push(part(G.torus, bc, [0, 0.172, 0.055], [0.099, 0.099, 0.099], [Math.PI / 2, 0, 0]));
      head.push(part(G.sphere, 0xffffff, [0, 0.265, 0.055], [0.026, 0.026, 0.026]));
    } else if (h < 0.42) { // cap
      const bc = pick(CASUAL_COLORS);
      head.push(part(G.hemi, bc, [0, 0.17, 0.055], [0.1, 0.085, 0.1]));
      head.push(part(G.box, bc, [0, 0.165, 0.15], [0.12, 0.012, 0.09]));
    } else if (h < 0.57) { // headphones
      head.push(part(G.arc, 0x202225, [0, 0.12, 0.06], [0.108, 0.108, 0.108]));
      for (const s of [-1, 1]) head.push(part(G.cyl, 0xd8433a, [s * 0.105, 0.12, 0.06], [0.04, 0.03, 0.04], [0, 0, Math.PI / 2]));
    }
    if (rng() < 0.2) head.push(part(G.box, 0x111111, [0, 0.14, 0.12], [0.17, 0.028, 0.02]));
    if (rng() < 0.3) { // backpack
      body.push(part(G.box, pick(CASUAL_COLORS), [0, 0.13, -0.16], [0.14, 0.17, 0.08]));
      body.push(part(G.box, 0x222222, [0, 0.13, -0.2], [0.12, 0.05, 0.02]));
    }
  } else if (outfit === 'vendor') {
    const coat = 0xf6f4ee, trim = opts.apron ?? 0xd62828;
    body.push(part(G.sphere, coat, [0, 0.105, -0.04], [0.226, 0.214, 0.31]));
    body.push(part(G.sphere, coat, [0, 0.115, 0.15], [0.17, 0.176, 0.2]));
    body.push(part(G.box, trim, [0, 0.11, 0.335], [0.15, 0.2, 0.014], [-0.12, 0, 0]));   // apron bib
    for (const arr of [wingR, wingL]) arr.push(part(G.sphere, coat, [arr === wingR ? 0.03 : -0.03, -0.09, -0.1], [0.047, 0.126, 0.276]));
    head.push(part(G.torus, trim, [0, 0.0, 0.0], [0.108, 0.108, 0.108], [Math.PI / 2, 0, 0])); // neckerchief
    head.push(part(G.cyl, 0xffffff, [0, 0.215, 0.062], [0.07, 0.09, 0.07]));                    // chef hat
    head.push(part(G.sphere, 0xffffff, [0, 0.285, 0.062], [0.098, 0.065, 0.098]));
  }
  if (opts.bandana && !opts.look) {
    head.push(part(G.torus, 0xd8312a, [0, 0.0, 0.0], [0.118, 0.118, 0.118], [Math.PI / 2, 0, 0]));
    head.push(part(G.box, 0xd8312a, [0, -0.03, 0.115], [0.07, 0.07, 0.01], [0.2, 0, Math.PI / 4]));
  }

  return { body, head, wingR, wingL };
}

function build(opts) {
  const { body, head, wingR, wingL } = makeParts(opts);
  const root = new THREE.Group();
  const upper = new THREE.Group();
  upper.position.set(0, 0.36, 0);
  root.add(upper);

  const bodyMesh = new THREE.Mesh(merge(body), mat);
  upper.add(bodyMesh);

  const headG = new THREE.Group();
  headG.position.set(0, 0.24, 0.2);
  const headMesh = new THREE.Mesh(merge(head), mat);
  headG.add(headMesh);
  upper.add(headG);

  const wR = new THREE.Group(); wR.position.set(0.17, 0.2, -0.02);
  const wL = new THREE.Group(); wL.position.set(-0.17, 0.2, -0.02);
  const wRMesh = new THREE.Mesh(merge(wingR), mat), wLMesh = new THREE.Mesh(merge(wingL), mat);
  wR.add(wRMesh);
  wL.add(wLMesh);
  upper.add(wR, wL);

  const legL = new THREE.Group(); legL.position.set(-0.08, 0.34, 0.02);
  const legR = new THREE.Group(); legR.position.set(0.08, 0.34, 0.02);
  legL.add(new THREE.Mesh(legGeo, mat));
  legR.add(new THREE.Mesh(legGeo, mat));
  root.add(legL, legR);

  root.traverse((o) => { if (o.isMesh) { o.castShadow = true; } });
  return { root, upper, head: headG, wR, wL, legL, legR, bodyMesh, headMesh, wRMesh, wLMesh };
}

export class Pigeon {
  constructor(opts = {}) {
    const o = {
      plumage: opts.plumage ?? Math.floor(rng() * PLUMAGE.length),
      outfit: opts.outfit ?? 'bare',
      bandana: !!opts.bandana,
      apron: opts.apron,
      hat: opts.hat,
      look: opts.look,
    };
    this.opts = o;
    Object.assign(this, build(o));
    this.outfit = o.outfit;
    this.phase = rng() * 6;
    this.time = rng() * 10;
    this.peck = 0;       // 0..1 current peck amount
    this.peckT = -1;     // timer for peck animation
    this.root.scale.setScalar(opts.scale ?? 1);
    this.lookSeed = rng() * 100;
  }

  /** Re-dress the pigeon (player wardrobe): rebuilds the merged meshes from a look description. */
  setLook(look) {
    this.opts.look = look;
    const p = makeParts(this.opts);
    this.bodyMesh.geometry.dispose(); this.bodyMesh.geometry = merge(p.body);
    this.headMesh.geometry.dispose(); this.headMesh.geometry = merge(p.head);
    this.wRMesh.geometry.dispose(); this.wRMesh.geometry = merge(p.wingR);
    this.wLMesh.geometry.dispose(); this.wLMesh.geometry = merge(p.wingL);
  }

  startPeck() { if (this.peckT < 0) this.peckT = 0; }

  /** Number of completed footsteps so far (for footstep sounds). */
  get steps() { return Math.floor(this.phase / Math.PI); }

  /** speed: horizontal m/s. air: {airborne, vy, flap}. */
  update(dt, speed, air = null) {
    this.time += dt;
    const moving = speed > 0.15;
    if (moving) this.phase += dt * (6 + speed * 1.0);

    // peck animation (0 -> 1 -> 0 over ~0.55 s)
    if (this.peckT >= 0) {
      this.peckT += dt;
      const t = this.peckT / 0.55;
      this.peck = t >= 1 ? 0 : Math.sin(t * Math.PI);
      if (t >= 1) this.peckT = -1;
    }

    const airborne = air && air.airborne;
    if (airborne) {
      const flapAmt = air.flap ? 1 : 0.55;
      const th = 0.75 + Math.sin(this.time * (air.flap ? 34 : 26)) * 0.65 * flapAmt;
      this.wR.rotation.z = th;
      this.wL.rotation.z = -th;
      this.legL.rotation.x = -0.6;
      this.legR.rotation.x = -0.3;
      this.upper.rotation.x = clamp(-air.vy * 0.03, -0.35, 0.3);
      this.upper.position.y = 0.36;
      this.head.position.z = 0.2;
      this.head.rotation.x = 0;
      this.head.rotation.y = 0;
      return;
    }
    this.wR.rotation.z *= 0.7;
    this.wL.rotation.z *= 0.7;

    if (moving) {
      const swing = Math.sin(this.phase) * 0.75;
      this.legL.rotation.x = swing;
      this.legR.rotation.x = -swing;
      // classic pigeon head-bob: head holds still, then thrusts forward each step
      const p = (this.phase / Math.PI) % 1;
      const off = p < 0.7 ? 0.05 - 0.1 * (p / 0.7) : -0.05 + 0.1 * ((p - 0.7) / 0.3);
      this.head.position.z = 0.2 + off;
      this.upper.position.y = 0.36 + Math.abs(Math.sin(this.phase)) * 0.018;
      this.upper.rotation.x = 0.05 + this.peck * 0.0;
      this.head.rotation.y *= 0.85;
      this.head.rotation.x = this.peck * 0.5;
    } else {
      this.legL.rotation.x *= 0.8;
      this.legR.rotation.x *= 0.8;
      this.upper.position.y = 0.36;
      this.upper.rotation.x = this.peck * 0.85;
      this.head.rotation.x = this.peck * 0.55;
      this.head.position.z = 0.2 + this.peck * 0.02;
      // idle: look around
      this.head.rotation.y = Math.sin(this.time * 0.8 + this.lookSeed) * 0.5 * (1 - this.peck);
    }
  }
}

export const OUTFITS = ['suit', 'casual', 'casual', 'bare'];
