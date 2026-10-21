// BOUTIQUE interior: a chic, colourful pigeon-sized clothing shop ("Feather & Co." style).
// Exports a SHOP_BUILDERS-compatible builder (`boutiqueBuilder(R)`) plus its neon sign config.
// Everything is boxes / cylinders / spheres merged by the Room, so the whole shop costs a handful of draw calls.
import { G, part } from './gfx.js';
import { rng, pick } from './config.js';

export const BOUTIQUE_NEON = ['BOUTIQUE', '#ff7ad9'];

const GOLD = 0xd9a93a, GOLD_D = 0xa97c1e, MAG = 0xe0409a, PUR = 0x7a3cb0, PLUM = 0x4a1f5e, PINK = 0xff9bd0;
const BLUSH = 0xf6dfe9, CREAM = 0xfaf0f3, VEL1 = 0x6b1e5c, VEL2 = 0x8c2a74, CHROME = 0xd7dae0, INK = 0x23202c;
const CLOTH = [0xe0409a, 0x7a3cb0, 0xffb347, 0x35b5a8, 0xf4d03f, 0x4f7be0, 0xf6f0f2, 0x2a2a36, 0xff7a7a, 0x9be0c0];
const LIGHT_PINK = 0xffe2f4;

export function boutiqueBuilder(R) {
  const add = (geo, color, pos, scale, rot) => R.raw(part(geo, color, pos, scale, rot || [0, 0, 0]));
  const cyl = (x, y, z, r, h, c, rot) => add(G.cyl, c, [x, y, z], [r, h, r], rot);   // centred on y
  // a frame helper: place parts in a local frame rotated by `yaw` about Y, origin (cx, cz)
  const frame = (cx, cz, yaw) => {
    const c = Math.cos(yaw), s = Math.sin(yaw);
    return (geo, color, lx, y, lz, sc, rot = [0, 0, 0]) =>
      R.raw(part(geo, color, [cx + lx * c + lz * s, y, cz - lx * s + lz * c], sc, [rot[0], rot[1] + yaw, rot[2]]));
  };
  const solidBox = (cx, cz, w, d, h) => R.colliders.boxes.push({ minX: R.ox + cx - w / 2, maxX: R.ox + cx + w / 2, minZ: cz - d / 2, maxZ: cz + d / 2, h });
  const solidCirc = (x, z, r, h) => R.colliders.circles.push({ x: R.ox + x, z, r, h });

  /* ------------------------------------------------------------ garments */
  // hangs from a rail at height y (hook point)
  function garment(type, cx, y, cz, yaw, color, color2) {
    const p = frame(cx, cz, yaw), S = 1.25;
    const B = (c, lx, ly, lz, w, h, d, rot) => p(G.box, c, lx * S, y + ly * S, lz * S, [w * S, h * S, d * S], rot);
    cyl(cx, y + 0.04, cz, 0.008, 0.08, CHROME);              // hook
    B(CHROME, 0, -0.02, 0, 0.42, 0.014, 0.014);              // hanger
    if (type === 'hoodie') {
      B(color, 0, -0.34, 0, 0.44, 0.58, 0.15);
      B(color2, 0, -0.62, 0, 0.45, 0.05, 0.155);
      B(color, -0.27, -0.36, 0, 0.11, 0.5, 0.12, [0, 0, 0.1]); B(color, 0.27, -0.36, 0, 0.11, 0.5, 0.12, [0, 0, -0.1]);
      p(G.sphere, color, 0, y - 0.06 * S, -0.07 * S, [0.15 * S, 0.1 * S, 0.075 * S]);
      B(color2, 0, -0.45, 0.085, 0.26, 0.12, 0.02);
      B(0xf4f4f4, -0.04, -0.2, 0.08, 0.012, 0.14, 0.012); B(0xf4f4f4, 0.04, -0.2, 0.08, 0.012, 0.14, 0.012);
    } else if (type === 'jacket') {
      B(color, 0, -0.37, 0, 0.46, 0.66, 0.16);
      B(color2, -0.1, -0.3, 0.085, 0.07, 0.34, 0.02, [0, 0, -0.16]); B(color2, 0.1, -0.3, 0.085, 0.07, 0.34, 0.02, [0, 0, 0.16]);
      B(color2, 0, -0.07, 0, 0.26, 0.05, 0.17);
      B(color, -0.28, -0.4, 0, 0.11, 0.6, 0.12, [0, 0, 0.08]); B(color, 0.28, -0.4, 0, 0.11, 0.6, 0.12, [0, 0, -0.08]);
      for (let i = 0; i < 3; i++) p(G.sphere, GOLD, 0, y - (0.3 + i * 0.12) * S, 0.09 * S, [0.018 * S, 0.018 * S, 0.012 * S]);
    } else if (type === 'dress') {
      p(G.cone, color, 0, y - 0.45 * S, 0, [0.27 * S, 0.8 * S, 0.1 * S]);
      B(color2, 0, -0.27, 0, 0.14, 0.04, 0.11);
      p(G.sphere, color2, 0.07 * S, y - 0.27 * S, 0.06 * S, [0.035 * S, 0.035 * S, 0.02 * S]);
    } else if (type === 'scarf') {
      B(color, 0, -0.03, 0, 0.12, 0.035, 0.07);
      B(color, -0.03, -0.3, 0.02, 0.1, 0.55, 0.035); B(color, 0.05, -0.34, -0.02, 0.1, 0.63, 0.035);
      for (let i = 0; i < 4; i++) { B(color2, -0.03, -0.14 - i * 0.13, 0.02, 0.102, 0.035, 0.038); B(color2, 0.05, -0.18 - i * 0.14, -0.02, 0.102, 0.035, 0.038); }
    } else { // tee
      B(color, 0, -0.27, 0, 0.42, 0.46, 0.12);
      B(color, -0.27, -0.12, 0, 0.15, 0.13, 0.11, [0, 0, 0.5]); B(color, 0.27, -0.12, 0, 0.15, 0.13, 0.11, [0, 0, -0.5]);
      B(color2, 0, -0.07, 0.065, 0.16, 0.03, 0.01);
    }
  }
  const TYPES = ['hoodie', 'jacket', 'dress', 'tee', 'scarf', 'hoodie', 'jacket'];
  const rollColor = () => { const a = pick(CLOTH); let b = pick(CLOTH); if (b === a) b = 0xffffff; return [a, b]; };

  // a free-standing rounder (rail along Z, garments seen broadside from the door)
  function rounder(cx, cz, len, count) {
    const z0 = cz - len / 2, z1 = cz + len / 2, ry = 1.72;
    for (const z of [z0, z1]) {
      cyl(cx, 0.9, z, 0.022, 1.8, CHROME);
      R.box(cx, z, 0.8, 0.07, 0.04, CHROME, 0);
      R.sph(cx, 1.82, z, 0.045, GOLD);
    }
    cyl(cx, ry, cz, 0.018, len, CHROME, [Math.PI / 2, 0, 0]);
    R.box(cx, cz, 0.06, len - 0.1, 0.03, GOLD_D, 0.04);
    for (let i = 0; i < count; i++) {
      const z = z0 + 0.22 + (i * (len - 0.44)) / Math.max(1, count - 1);
      const [a, b] = rollColor();
      garment(TYPES[Math.floor(rng() * TYPES.length)], cx, ry - 0.02, z, (rng() < 0.5 ? 1 : -1) * 0.16, a, b);
    }
    solidBox(cx, cz, 0.7, len + 0.1, 1.9);
  }

  // a wall rail with face-out garments (wall at x = +-8)
  function wallRack(side, z0, z1, count) {
    const faceYaw = side > 0 ? -Math.PI / 2 : Math.PI / 2, zc = (z0 + z1) / 2, ry = 1.95;
    R.box(side * 7.9, zc, 0.08, z1 - z0 + 0.5, 2.3, 0xf2c6dc, 0.1);
    R.box(side * 7.84, zc, 0.05, z1 - z0 + 0.58, 0.06, GOLD, 2.4);
    R.box(side * 7.84, zc, 0.05, z1 - z0 + 0.58, 0.06, GOLD, 0.06);
    cyl(side * 7.7, ry, zc, 0.02, z1 - z0 + 0.2, GOLD, [Math.PI / 2, 0, 0]);
    for (const z of [z0 - 0.05, z1 + 0.05]) R.box(side * 7.78, z, 0.2, 0.04, 0.04, GOLD, ry - 0.02);
    for (let i = 0; i < count; i++) {
      const z = z0 + 0.3 + (i * (z1 - z0 - 0.6)) / (count - 1);
      const [a, b] = rollColor();
      garment(TYPES[(i * 3 + 1) % TYPES.length], side * 7.7, ry - 0.02, z, faceYaw, a, b);
      // folded knits on the low shelves
      for (const yb of [0.17, 0.5]) {
        const n = 2 + Math.floor(rng() * 3), c = pick(CLOTH);
        for (let k = 0; k < n; k++) R.box(side * 7.62, z, 0.34, 0.4, 0.06, k % 2 ? c : pick(CLOTH), yb + k * 0.06);
      }
    }
    R.box(side * 7.62, zc, 0.5, z1 - z0 + 0.4, 0.05, CREAM, 0.12);
    R.box(side * 7.62, zc, 0.5, z1 - z0 + 0.4, 0.05, CREAM, 0.45);
    R.box(side * 7.62, zc, 0.5, z1 - z0 + 0.4, 0.05, CREAM, 0.78);
    solidBox(side * 7.7, zc, 0.6, z1 - z0 + 0.5, 0.8);
  }

  /* --------------------------------------------------------------- hats */
  function hat(type, x, y, z, stand = true) {
    let t = y;
    if (stand) {
      R.cyl(x, z, 0.075, 0.012, GOLD, y);
      cyl(x, y + 0.055, z, 0.012, 0.11, GOLD);
      t = y + 0.11;
    }
    if (type === 'top') {
      cyl(x, t + 0.0075, z, 0.14, 0.015, INK);
      cyl(x, t + 0.1, z, 0.088, 0.19, INK);
      cyl(x, t + 0.05, z, 0.0905, 0.035, MAG);
    } else if (type === 'cowboy') {
      cyl(x, t + 0.006, z, 0.19, 0.012, 0xb5834a);
      add(G.cyl, 0xb5834a, [x - 0.17, t + 0.035, z], [0.05, 0.012, 0.13], [0, 0, -0.55]);
      add(G.cyl, 0xb5834a, [x + 0.17, t + 0.035, z], [0.05, 0.012, 0.13], [0, 0, 0.55]);
      cyl(x, t + 0.065, z, 0.085, 0.1, 0xa0703a);
      add(G.hemi, 0xa0703a, [x, t + 0.115, z], [0.085, 0.05, 0.085]);
      cyl(x, t + 0.03, z, 0.0865, 0.03, 0x5a2e1e);
      R.sph(x, t + 0.03, z + 0.087, 0.014, GOLD);
    } else if (type === 'beanie') {
      add(G.hemi, pick([MAG, 0x35b5a8, 0xf4d03f, PUR]), [x, t + 0.02, z], [0.1, 0.12, 0.1]);
      cyl(x, t + 0.02, z, 0.104, 0.045, 0xf6f0f2);
      R.sph(x, t + 0.15, z, 0.032, 0xf6f0f2);
    } else if (type === 'crown') {
      cyl(x, t + 0.04, z, 0.1, 0.08, GOLD);
      cyl(x, t + 0.012, z, 0.102, 0.016, GOLD_D);
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        add(G.cone, GOLD, [x + Math.cos(a) * 0.088, t + 0.11, z + Math.sin(a) * 0.088], [0.026, 0.07, 0.026]);
        R.sph(x + Math.cos(a) * 0.088, t + 0.15, z + Math.sin(a) * 0.088, 0.012, i % 2 ? 0x5ad0ff : 0xff4a6a);
      }
      R.sph(x, t + 0.04, z + 0.1, 0.017, 0x5ad0ff);
    } else if (type === 'grad') {
      cyl(x, t + 0.03, z, 0.085, 0.06, INK);
      add(G.box, INK, [x, t + 0.067, z], [0.27, 0.016, 0.27], [0, 0.35, 0]);
      R.sph(x, t + 0.082, z, 0.014, GOLD);
      const tx = x + 0.12, tz = z - 0.08;
      cyl(tx, t + 0.03, tz, 0.006, 0.08, GOLD);
      R.sph(tx, t - 0.015, tz, 0.014, GOLD);
    } else { // chef
      cyl(x, t + 0.035, z, 0.082, 0.07, 0xffffff);
      cyl(x, t + 0.1, z, 0.09, 0.07, 0xf3f3f6);
      add(G.sphere, 0xffffff, [x, t + 0.15, z], [0.12, 0.075, 0.12]);
      cyl(x, t + 0.02, z, 0.0845, 0.014, 0xd6d6de);
    }
  }
  const HAT_TYPES = ['top', 'cowboy', 'beanie', 'crown', 'grad', 'chef'];

  /* ---------------------------------------------------- misc small props */
  function giftBag(x, z, y, c, s = 1, yaw = 0) {
    const p = frame(x, z, yaw);
    p(G.box, c, 0, y + 0.16 * s, 0, [0.24 * s, 0.32 * s, 0.12 * s]);
    p(G.box, GOLD, 0, y + 0.3 * s, 0, [0.245 * s, 0.025 * s, 0.125 * s]);
    p(G.box, 0xffffff, 0, y + 0.14 * s, 0.062 * s, [0.1 * s, 0.1 * s, 0.006]);
    p(G.arc, GOLD_D, 0, y + 0.31 * s, 0, [0.06 * s, 0.06 * s, 0.06 * s]);
  }
  function pouf(x, z, c) {
    R.cyl(x, z, 0.34, 0.34, c, 0);
    R.cyl(x, z, 0.3, 0.07, 0xffe2f1, 0.34);
    R.cyl(x, z, 0.345, 0.025, GOLD, 0.2);
    R.sph(x, 0.41, z, 0.03, GOLD, 0.6);
    solidCirc(x, z, 0.36, 0.42);
  }
  function plantPot(x, z, s = 1) {
    R.cyl(x, z, 0.28 * s, 0.5 * s, CREAM, 0, true);
    R.cyl(x, z, 0.3 * s, 0.05 * s, GOLD, 0.45 * s);
    for (let i = 0; i < 6; i++) R.sph(x + (rng() - 0.5) * 0.3 * s, (0.8 + rng() * 0.5) * s, z + (rng() - 0.5) * 0.3 * s, 0.25 * s, pick([0x2f7a3a, 0x3f9a4a, 0x2a6a35]));
    for (let i = 0; i < 6; i++) R.sph(x + (rng() - 0.5) * 0.5 * s, (0.95 + rng() * 0.5) * s, z + (rng() - 0.5) * 0.5 * s, 0.075 * s, pick([MAG, PINK, 0xffd23f]));
  }

  /* ===================================================================
     RUG + FEATURE MIRROR (centre-back) + wardrobe spot
     =================================================================== */
  const WX = 0, WZ = -2.4;
  R.box(0, -2.0, 5.4, 4.3, 0.012, PLUM, 0);
  R.box(0, -2.0, 5.1, 4.0, 0.02, GOLD, 0);
  R.box(0, -2.0, 5.0, 3.9, 0.028, MAG, 0);
  R.box(0, -2.0, 4.5, 3.4, 0.036, 0xfbe3ee, 0);
  R.box(0, -2.0, 4.4, 3.3, 0.044, PINK, 0);
  R.box(0, -2.0, 4.3, 3.2, 0.052, 0xfff0f6, 0);
  R.cyl(WX, WZ, 1.2, 0.06, PUR, 0);
  R.cyl(WX, WZ, 1.1, 0.068, GOLD, 0);
  R.cyl(WX, WZ, 1.04, 0.076, 0xffe2f1, 0);
  R.cyl(WX, WZ, 0.55, 0.084, MAG, 0);
  R.cyl(WX, WZ, 0.42, 0.092, 0xffd3ea, 0);

  // gilded mirror on the back wall
  const MZ = -5.4, FZ = -5.37;
  R.lightBox(0, MZ, 2.3, 0.03, 1.85, 0xe4f4ff, 0.22);
  for (const s of [-1, 1]) R.box(s * 1.29, FZ, 0.16, 0.12, 2.1, GOLD, 0.06);
  R.box(0, FZ, 2.74, 0.12, 0.16, GOLD, 0.06);
  R.box(0, FZ, 2.74, 0.12, 0.16, GOLD, 2.0);
  R.box(0, FZ + 0.01, 2.4, 0.12, 0.05, GOLD_D, 1.945);
  R.box(0, FZ + 0.01, 2.4, 0.12, 0.05, GOLD_D, 0.22);
  for (const s of [-1, 1]) R.box(s * 1.17, FZ + 0.01, 0.05, 0.12, 1.75, GOLD_D, 0.2);
  for (const sx of [-1, 1]) for (const y of [0.14, 2.08]) R.sph(sx * 1.29, y, FZ + 0.06, 0.12, GOLD, 0.8);
  R.sph(0, 2.17, FZ + 0.04, 0.2, GOLD, 0.8);
  add(G.cone, GOLD, [-0.32, 2.14, FZ + 0.03], [0.09, 0.22, 0.05], [0, 0, 0.9]);
  add(G.cone, GOLD, [0.32, 2.14, FZ + 0.03], [0.09, 0.22, 0.05], [0, 0, -0.9]);
  R.sph(0, 2.2, FZ + 0.1, 0.06, MAG);
  // low podium step in front of the mirror
  R.box(0, -4.95, 2.6, 0.5, 0.1, PLUM, 0);
  R.box(0, -4.7, 2.6, 0.04, 0.12, GOLD, 0);

  // sconces
  for (const s of [-1, 1]) {
    R.box(s * 1.75, -5.42, 0.14, 0.08, 0.3, GOLD, 1.5);
    R.box(s * 1.75, -5.42, 0.28, 0.08, 0.03, GOLD, 1.47);
    R.lightSph(s * 1.75, 1.93, -5.36, 0.1, 0xffe2b0);
  }

  /* ---------------------------------------------- mannequins (pigeons) */
  function pigeonMannequin(x, z, outfit, hatType, scarf) {
    R.cyl(x, z, 0.4, 0.08, PLUM, 0);
    R.cyl(x, z, 0.42, 0.025, GOLD, 0.08);
    cyl(x, 0.45, z, 0.03, 0.72, GOLD);
    solidCirc(x, z, 0.4, 0.5);
    const by = 1.05;
    add(G.sphere, 0xe9dfd4, [x, by, z], [0.26, 0.24, 0.36], [0.35, 0, 0]);
    add(G.sphere, outfit[0], [x, by - 0.02, z + 0.01], [0.285, 0.255, 0.28], [0.35, 0, 0]);
    add(G.sphere, outfit[1], [x, by - 0.1, z + 0.2], [0.22, 0.08, 0.1], [0.35, 0, 0]);
    cyl(x, by + 0.15, z + 0.23, 0.1, 0.06, scarf);
    add(G.sphere, 0xe9dfd4, [x, by + 0.33, z + 0.29], [0.1, 0.1, 0.1]);
    add(G.cone, GOLD, [x, by + 0.31, z + 0.4], [0.025, 0.07, 0.025], [Math.PI / 2, 0, 0]);
    R.sph(x - 0.07, by + 0.35, z + 0.35, 0.015, INK); R.sph(x + 0.07, by + 0.35, z + 0.35, 0.015, INK);
    add(G.box, 0xcfc4ba, [x, by - 0.02, z - 0.37], [0.14, 0.035, 0.26], [-0.15, 0, 0]);
    add(G.box, outfit[0], [x, by - 0.01, z - 0.27], [0.2, 0.05, 0.1], [-0.15, 0, 0]);
    hat(hatType, x, by + 0.39, z + 0.29, false);
  }
  pigeonMannequin(-2.75, -4.55, [MAG, 0xffd0ea], 'top', GOLD);
  pigeonMannequin(2.75, -4.55, [PUR, 0xe2c8ff], 'crown', 0xffd23f);

  /* --------------------------------------------------------- hat gallery */
  {
    const cx = -5.6, len = 4.0, zc = -5.2;
    R.box(cx, -5.43, len, 0.06, 2.45, PLUM, 0);
    for (const s of [-1, 1]) R.box(cx + s * (len / 2), zc, 0.07, 0.5, 2.45, GOLD, 0);
    [0.34, 0.86, 1.38, 1.9].forEach((y, ti) => {
      R.box(cx, zc, len, 0.46, 0.045, ti % 2 ? 0xfff0f6 : 0xffe0ef, y);
      R.box(cx, zc + 0.235, len, 0.025, 0.05, GOLD, y);
      R.lightBox(cx, zc + 0.2, len - 0.2, 0.04, 0.025, LIGHT_PINK, y - 0.07);
      for (let i = 0; i < 6; i++) hat(HAT_TYPES[(i + ti * 2) % 6], cx - len / 2 + 0.4 + (i * (len - 0.8)) / 5, y + 0.045, zc - 0.02);
    });
    R.box(cx, zc, len + 0.14, 0.5, 0.06, GOLD, 2.4);
    for (let i = 0; i < 5; i++) {
      const x = cx - len / 2 + 0.45 + i * 0.78;
      R.cyl(x, zc + 0.02, 0.22, 0.18, [MAG, PUR, 0xfff0f6, PINK, 0x35b5a8][i], 0);
      R.cyl(x, zc + 0.02, 0.23, 0.04, GOLD, 0.18);
    }
    solidBox(cx, zc, len + 0.14, 0.52, 2.4);
  }

  /* ---------------------------------------------------- fitting room */
  {
    const cx = 6.2, cz = -4.3, w = 3.2, d = 2.2;
    R.box(cx - w / 2 + 0.05, cz, 0.1, d, 2.35, PLUM, 0);
    R.box(cx + w / 2 - 0.05, cz, 0.1, d, 2.35, PLUM, 0);
    R.box(cx, cz, w + 0.12, d + 0.1, 0.14, GOLD, 2.35);
    R.box(cx, cz + d / 2, w + 0.14, 0.06, 0.2, PLUM, 2.18);
    R.box(cx, cz, w - 0.2, d - 0.1, 0.012, 0xffc2e2, 0);
    R.lightBox(cx, -5.4, 1.0, 0.03, 1.7, 0xe4f4ff, 0.3);
    R.box(cx, -5.38, 1.1, 0.04, 0.05, GOLD, 2.0); R.box(cx, -5.38, 1.1, 0.04, 0.05, GOLD, 0.25);
    for (const s of [-1, 1]) R.box(cx + s * 0.55, -5.38, 0.05, 0.04, 1.8, GOLD, 0.25);
    R.cyl(cx, -4.7, 0.26, 0.34, MAG, 0.012); R.cyl(cx, -4.7, 0.22, 0.05, 0xffd3ea, 0.352);
    R.lightBox(cx, cz + 0.2, 1.4, 0.5, 0.04, 0xfff0d8, 2.31);
    // curtains: velvet pleats left and right of the opening
    const fz = cz + d / 2 - 0.1;
    const pleats = (x0, x1) => {
      const n = Math.round((x1 - x0) / 0.14);
      for (let i = 0; i < n; i++) {
        const x = x0 + (i + 0.5) * ((x1 - x0) / n), o = (i % 2) * 0.07;
        R.box(x, fz + o, (x1 - x0) / n + 0.01, 0.1, 2.15, i % 2 ? VEL1 : VEL2, 0.02);
      }
    };
    pleats(cx - w / 2 + 0.1, cx - 0.65);
    pleats(cx + 0.65, cx + w / 2 - 0.1);
    for (const s of [-1, 1]) { R.box(cx + s * 0.64, fz + 0.1, 0.06, 0.14, 0.05, GOLD, 1.0); R.sph(cx + s * 0.64, 0.85, fz + 0.1, 0.05, GOLD_D); }
    cyl(cx, 2.27, fz + 0.1, 0.02, w + 0.1, GOLD, [0, 0, Math.PI / 2]);
    for (const s of [-1, 1]) R.sph(cx + s * (w / 2 + 0.05), 2.27, fz + 0.1, 0.05, GOLD);
    R.box(cx, fz + 0.06, w, 0.06, 0.2, MAG, 2.1);
    solidBox(cx, cz, w + 0.12, d + 0.1, 2.35);
  }

  /* ----------------------------------------------------------- counter */
  {
    const x0 = 3.9, x1 = 7.4, z = -0.9, cx = (x0 + x1) / 2, w = x1 - x0;
    R.box(cx, z, w, 0.8, 1.05, 0x3a1b4e, 0, true);
    R.box(cx, z, w + 0.14, 0.94, 0.06, 0xf8f4fa, 1.05);
    R.box(cx, z + 0.415, w - 0.2, 0.03, 0.04, GOLD, 0.92);
    R.box(cx, z + 0.415, w - 0.2, 0.03, 0.04, GOLD, 0.12);
    for (let i = 0; i < 5; i++) R.box(x0 + 0.35 + i * 0.7, z + 0.405, 0.5, 0.015, 0.65, i % 2 ? 0x57256f : 0x4a1f5e, 0.2);
    R.box(cx, z + 0.43, 0.8, 0.02, 0.16, GOLD, 0.5);
    R.lightBox(cx, z + 0.445, 0.6, 0.015, 0.08, 0xffe9b0, 0.54);
    R.box(4.8, z, 0.44, 0.34, 0.2, 0x25282c, 1.11);
    R.lightBox(4.8, z + 0.0, 0.3, 0.04, 0.14, 0x9fe3ff, 1.33);
    giftBag(6.3, z - 0.05, 1.11, MAG, 1.1, -0.2);
    giftBag(6.65, z + 0.1, 1.11, 0xfff0f6, 0.9, 0.3);
    giftBag(6.95, z - 0.1, 1.11, PUR, 1.25, -0.1);
    for (let i = 0; i < 3; i++) R.cyl(5.5 + i * 0.16, z - 0.15, 0.06, 0.1, [PINK, GOLD, 0xfff0f6][i], 1.11);
    R.cyl(5.5, z + 0.1, 0.07, 0.03, GOLD, 1.11); R.sph(5.5, 1.19, z + 0.1, 0.06, GOLD, 0.8);
    // stack of hat boxes at the end of the counter
    R.cyl(3.4, -0.9, 0.3, 0.22, MAG, 0); R.cyl(3.4, -0.9, 0.26, 0.2, 0xfff0f6, 0.22); R.cyl(3.4, -0.9, 0.22, 0.2, PUR, 0.42);
    R.cyl(3.4, -0.9, 0.305, 0.03, GOLD, 0.19); R.cyl(3.4, -0.9, 0.225, 0.03, GOLD, 0.6);
    solidCirc(3.4, -0.9, 0.3, 0.64);
    R.cyl(4.25, z - 0.1, 0.07, 0.18, CREAM, 1.11);
    for (let i = 0; i < 6; i++) R.sph(4.25 + (rng() - 0.5) * 0.18, 1.4 + rng() * 0.12, z - 0.1 + (rng() - 0.5) * 0.18, 0.06, pick([MAG, PINK, 0xffd23f, 0xfff0f6]));
    for (const x of [4.4, 5.65, 6.9]) {
      cyl(x, 3.0, z, 0.008, 0.8, GOLD);
      R.lightSph(x, 2.55, z, 0.17, 0xffe6bd);
      R.cyl(x, z, 0.1, 0.04, GOLD, 2.7);
    }
  }

  /* --------------------------------------------- racks, tables, seating */
  rounder(-4.9, -1.15, 2.4, 10);
  rounder(-4.9, 2.1, 2.6, 11);
  rounder(5.5, 2.9, 2.2, 10);
  wallRack(-1, -3.5, 3.4, 8);
  wallRack(1, 0.5, 4.4, 6);

  // folded-sweater table
  {
    const tx = 3.5, tz = 0.9, w = 1.7, d = 0.9;
    R.box(tx, tz, w, d, 0.06, CREAM, 0.74);
    R.box(tx, tz, w + 0.04, d + 0.04, 0.03, GOLD, 0.71);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) cyl(tx + sx * (w / 2 - 0.08), 0.37, tz + sz * (d / 2 - 0.08), 0.03, 0.74, GOLD);
    R.box(tx, tz, w - 0.2, d - 0.2, 0.03, 0xffd3ea, 0.25);
    for (let i = 0; i < 3; i++) {
      const sx = tx - 0.55 + i * 0.55, n = 4 + (i % 2);
      const colA = pick(CLOTH), colB = pick(CLOTH);
      for (let k = 0; k < n; k++) R.box(sx + (rng() - 0.5) * 0.03, tz - 0.12, 0.42, 0.34, 0.075, k % 2 ? colA : colB, 0.8 + k * 0.075);
      for (let k = 0; k < 3; k++) R.box(sx + (rng() - 0.5) * 0.03, tz + 0.2, 0.34, 0.26, 0.07, pick(CLOTH), 0.8 + k * 0.07);
    }
    solidBox(tx, tz, w, d, 1.15);
  }

  // poufs
  pouf(-2.8, -0.1, MAG);
  pouf(-3.35, 0.55, PUR);
  pouf(2.85, -0.1, 0x35b5a8);

  plantPot(-7.1, 4.5, 1.2);
  plantPot(7.1, 4.7, 1.0);

  // framed prints on the side walls
  for (let i = 0; i < 4; i++) {
    const z = -3.0 + i * 1.9, c = [MAG, 0x35b5a8, 0xffb347, PUR][i];
    R.box(-7.96, z, 0.06, 1.0, 0.7, GOLD, 2.55);
    R.box(-7.92, z, 0.04, 0.86, 0.56, 0xfff0f6, 2.62);
    R.box(-7.88, z, 0.04, 0.5, 0.36, c, 2.72);
  }
  for (let i = 0; i < 3; i++) {
    const z = 1.2 + i * 1.5, c = [PUR, MAG, 0x35b5a8][i];
    R.box(7.96, z, 0.06, 1.0, 0.7, GOLD, 2.55);
    R.box(7.92, z, 0.04, 0.86, 0.56, 0xfff0f6, 2.62);
    R.box(7.88, z, 0.04, 0.5, 0.36, c, 2.72);
  }

  /* ------------------------------------------------------ chandelier etc. */
  {
    const cx = 0, cz = -1.7, ry = 2.75;
    cyl(cx, 3.15, cz, 0.012, 0.5, GOLD);
    R.cyl(cx, cz, 0.1, 0.05, GOLD, ry - 0.05);
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2, r = 0.62;
      const x = cx + Math.cos(a) * r, z = cz + Math.sin(a) * r;
      add(G.box, GOLD, [x, ry - 0.05, z], [0.05, 0.035, 0.05]);
      R.sph(x, ry - 0.03, z, 0.04, GOLD);
      cyl(x, ry + 0.04, z, 0.012, 0.1, 0xfff0f6);
      R.lightSph(x, ry + 0.13, z, 0.04, 0xffe9b8);
      if (i % 2 === 0) { cyl(x, ry - 0.2, z, 0.006, 0.28, 0xffd3ea); R.sph(x, ry - 0.36, z, 0.035, 0xffc2e2); }
    }
    // gold ring between the arms
    for (let i = 0; i < 24; i++) {
      const a = (i / 24) * Math.PI * 2;
      add(G.box, GOLD, [cx + Math.cos(a) * 0.62, ry - 0.05, cz + Math.sin(a) * 0.62], [0.17, 0.03, 0.04], [0, -a - Math.PI / 2, 0]);
    }
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2 + 0.2, r = 0.3;
      add(G.box, GOLD_D, [cx + Math.cos(a) * r * 0.5 + 0.0, ry + 0.02, cz + Math.sin(a) * r * 0.5], [r, 0.025, 0.035], [0, -a, 0]);
    }
    R.sph(cx, ry - 0.22, cz, 0.07, 0xffc2e2); cyl(cx, ry - 0.12, cz, 0.01, 0.2, GOLD);
    for (const [x, z] of [[-2.6, 3.2], [2.6, 3.2]]) {
      cyl(x, 3.0, z, 0.008, 0.8, GOLD);
      R.cyl(x, z, 0.27, 0.3, 0xffb3de, 2.45);
      R.cyl(x, z, 0.285, 0.025, GOLD, 2.45); R.cyl(x, z, 0.285, 0.025, GOLD, 2.73);
      R.lightSph(x, 2.6, z, 0.12, 0xffeed0);
    }
  }
  // bunting across the front aisle
  {
    const yAt = (x) => 3.2 - 0.26 * Math.cos((x / 6.2) * Math.PI / 2) ** 2;
    for (let i = 0; i < 12; i++) {
      const xa = -6 + i, xb = xa + 1, ya = yAt(xa), yb = yAt(xb);
      add(G.box, GOLD_D, [(xa + xb) / 2, (ya + yb) / 2, 1.9], [Math.hypot(1, yb - ya), 0.012, 0.012], [0, 0, Math.atan2(yb - ya, 1)]);
      const x = xa + 0.5, y = (ya + yb) / 2;
      add(G.cone, [MAG, GOLD, PUR, PINK, 0x35b5a8][i % 5], [x, y - 0.1, 1.9], [0.11, 0.2, 0.012], [Math.PI, 0, 0]);
    }
  }

  return {
    floor: 'wood',
    wall: BLUSH,
    accent: PLUM,
    neon: BOUTIQUE_NEON,
    keepers: [{ x0: 4.4, x1: 7.0, z: -2.0 }],
    zone: [-2.3, 2.3, 0.9, 3.8],
    crumbs: [5.5, -0.1],
    apron: 0xb04aa8,
    wardrobe: { x: WX, z: WZ },
  };
}
