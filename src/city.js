// Builds the static city: roads, sidewalks, buildings, shops, subway entrances, food trucks, props.
import * as THREE from 'three';
import {
  N, R_EXT, BUILD, SIDEWALK, ROAD, SLAB, PITCH, HALF_CITY, PARK, SIDEWALK_H, FLOOR_H,
  blockCenter, roadCenter, AVENUES, STREETS, rng, rand, pick, clamp,
} from './config.js';
import { G, part, merge, vcMaterial, unlitVC } from './gfx.js';
import * as T from './textures.js';
import { makeVehicle, randomVehicleType, randomCarColor, TAXI_COLOR } from './traffic.js';
import { Pigeon } from './pigeon.js';

const E0 = -R_EXT;
const E1 = N - 1 + R_EXT;

const SIDES = [
  { n: [0, -1], t: [1, 0] },  // north
  { n: [0, 1], t: [1, 0] },   // south
  { n: [1, 0], t: [0, 1] },   // east
  { n: [-1, 0], t: [0, 1] },  // west
];
const sidePos = (cx, cz, s, r, o) => [cx + s.n[0] * r + s.t[0] * o, cz + s.n[1] * r + s.t[1] * o];

const TRUCKS = [
  { name: 'TACO\nTIME', tag: 'Tacos  -  Burritos', color: '#f26b21', accent: '#1f8a70', text: '#ffffff' },
  { name: 'HOT\nDOGS', tag: 'Fresh off the cart', color: '#d62828', accent: '#fcbf49', text: '#ffffff' },
  { name: 'FALAFEL\nKING', tag: 'Wraps & Platters', color: '#2a9d8f', accent: '#f4a261', text: '#ffffff' },
  { name: 'DUMPLING\nWAGON', tag: 'Steamed or Fried', color: '#f4d35e', accent: '#c1272d', text: '#7a1417' },
  { name: 'COFFEE &\nDONUTS', tag: 'Open all night', color: '#6b4226', accent: '#f6a6c1', text: '#fff1dd' },
  { name: 'CHICKEN\n& RICE', tag: 'Extra white sauce', color: '#3a6ea5', accent: '#ffd166', text: '#ffffff' },
  { name: 'ICE\nCREAM', tag: 'Soft serve', color: '#f7a8c4', accent: '#4cc9f0', text: '#5b1a3c' },
  { name: 'PRETZELS\n& NUTS', tag: 'Warm & salty', color: '#9b5de5', accent: '#fee440', text: '#ffffff' },
];

const STATIONS = [
  ['42 St Port Authority', ['A', 'C', 'E']], ['34 St Herald Sq', ['B', 'D', 'F', 'M', 'N', 'Q', 'R', 'W']],
  ['Times Sq 42 St', ['1', '2', '3', '7', 'N', 'Q', 'R', 'W']], ['50 St', ['1']],
  ['Columbus Circle', ['A', 'B', 'C', 'D', '1']], ['Bryant Park', ['B', 'D', 'F', 'M', '7']],
  ['Grand Central', ['4', '5', '6', '7']], ['Union Sq', ['L', 'N', 'Q', 'R', '4', '5', '6']],
];

/* ------------------------------------------------------------ small helpers */

const dummy = new THREE.Object3D();
function instanced(geo, mat, list, { shadow = true, colors = false } = {}) {
  const m = new THREE.InstancedMesh(geo, mat, Math.max(1, list.length));
  list.forEach((it, i) => {
    dummy.position.set(it.x, it.y ?? 0, it.z);
    dummy.rotation.set(0, it.rot ?? 0, 0);
    dummy.scale.set(it.sx ?? 1, it.sy ?? 1, it.sz ?? 1);
    dummy.updateMatrix();
    m.setMatrixAt(i, dummy.matrix);
    if (colors) m.setColorAt(i, new THREE.Color(it.color));
  });
  m.count = list.length;
  m.castShadow = shadow; m.receiveShadow = true;
  m.frustumCulled = false;
  return m;
}

/** A box with its base at y=0 whose side faces carry a tiled facade UV, and a separate roof group. */
function buildingGeo(w, h, d, uOff, vOff) {
  const g = new THREE.BoxGeometry(w, h, d);
  const uv = g.attributes.uv;
  const faceW = [d, d, 0, 0, w, w];
  for (let f = 0; f < 6; f++) {
    if (f === 2 || f === 3) continue;
    for (let i = 0; i < 4; i++) {
      const idx = f * 4 + i;
      uv.setXY(idx, uv.getX(idx) * faceW[f] / T.TILE_W + uOff, uv.getY(idx) * h / T.TILE_H + vOff);
    }
  }
  const old = g.index.array;
  const nu = new old.constructor(old.length - 6);
  let p = 0;
  for (const f of [0, 1, 4, 5, 2]) for (let k = 0; k < 6; k++) nu[p++] = old[f * 6 + k];
  g.setIndex(new THREE.BufferAttribute(nu, 1));
  g.clearGroups();
  g.addGroup(0, 24, 0);
  g.addGroup(24, 6, 1);
  g.translate(0, h / 2, 0);
  return g;
}

function makeLots() {
  const h = BUILD / 2;
  const r = rng();
  if (r < 0.16) return [{ x0: -h, x1: h, z0: -h, z1: h }];
  if (r < 0.42) {
    const s = rand(-7, 7);
    return rng() < 0.5
      ? [{ x0: -h, x1: s, z0: -h, z1: h }, { x0: s, x1: h, z0: -h, z1: h }]
      : [{ x0: -h, x1: h, z0: -h, z1: s }, { x0: -h, x1: h, z0: s, z1: h }];
  }
  if (r < 0.7) {
    const a = rand(-9, -3), b = rand(3, 9);
    return rng() < 0.5
      ? [{ x0: -h, x1: a, z0: -h, z1: h }, { x0: a, x1: b, z0: -h, z1: h }, { x0: b, x1: h, z0: -h, z1: h }]
      : [{ x0: -h, x1: h, z0: -h, z1: a }, { x0: -h, x1: h, z0: a, z1: b }, { x0: -h, x1: h, z0: b, z1: h }];
  }
  const sx = rand(-8, 8), sz = rand(-8, 8);
  return [
    { x0: -h, x1: sx, z0: -h, z1: sz }, { x0: sx, x1: h, z0: -h, z1: sz },
    { x0: -h, x1: sx, z0: sz, z1: h }, { x0: sx, x1: h, z0: sz, z1: h },
  ];
}

const LOW = ['brick', 'darkbrick', 'brownstone', 'tan'];
const MID = ['limestone', 'brick', 'gray', 'tan', 'white', 'darkbrick'];
const TOWER = ['glassblue', 'glassdark', 'gray', 'white', 'limestone', 'glassblue'];

/* ------------------------------------------------------------------- build */

export function buildCity(scene) {
  const colliders = { boxes: [], circles: [] };
  const world = { colliders, subways: [], trucks: [], carts: [], vents: [], blocks: [], shopDoors: [], parked: [], vendors: [] };
  const city = new THREE.Group();
  scene.add(city);
  world.group = city;

  // ---------------------------------------------------------- ground + roads
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x45484b, roughness: 1 });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000).rotateX(-Math.PI / 2), groundMat);
  ground.position.y = -0.05;
  ground.receiveShadow = true;
  city.add(ground);

  const segTex = T.roadSegmentTexture();
  const segMat = new THREE.MeshStandardMaterial({ map: segTex, roughness: 0.95 });
  const segGeo = new THREE.PlaneGeometry(SLAB, ROAD).rotateX(-Math.PI / 2);
  const horiz = [], vert = [], inter = [], slabs = [];
  for (let k = E0; k <= N + R_EXT; k++) {
    for (let i = E0; i <= E1; i++) {
      horiz.push({ x: blockCenter(i), y: 0.01, z: roadCenter(k) });
      vert.push({ x: roadCenter(k), y: 0.01, z: blockCenter(i), rot: Math.PI / 2 });
    }
    for (let ix = E0; ix <= N + R_EXT; ix++) inter.push({ x: roadCenter(ix), y: 0.012, z: roadCenter(k) });
  }
  for (let i = E0; i <= E1; i++) for (let j = E0; j <= E1; j++) slabs.push({ x: blockCenter(i), y: SIDEWALK_H / 2, z: blockCenter(j) });
  city.add(instanced(segGeo, segMat, horiz, { shadow: false }));
  city.add(instanced(segGeo, segMat, vert, { shadow: false }));
  const asph = T.asphaltTexture(); asph.repeat.set(4, 4);
  city.add(instanced(new THREE.PlaneGeometry(ROAD, ROAD).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: asph, roughness: 0.95 }), inter, { shadow: false }));
  const swTex = T.sidewalkTexture(); swTex.repeat.set(SLAB / 2.5, SLAB / 2.5);
  city.add(instanced(new THREE.BoxGeometry(SLAB, SIDEWALK_H, SLAB), new THREE.MeshStandardMaterial({ map: swTex, roughness: 0.95 }), slabs, { shadow: false }));

  // -------------------------------------------------------------- buildings
  const facadeMats = {};
  const trimMats = {};
  for (const def of T.FACADE_DEFS) {
    facadeMats[def.id] = new THREE.MeshStandardMaterial({
      map: T.facadeTexture(def), roughness: def.style === 'glass' ? 0.35 : 0.9, metalness: def.style === 'glass' ? 0.25 : 0,
    });
    trimMats[def.id] = new THREE.MeshStandardMaterial({ color: def.trim, roughness: 0.9 });
  }
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x4d5054, roughness: 1 });
  const shopMats = T.SHOPS.map((_, i) => {
    const tex = T.shopTexture(i);
    return new THREE.MeshStandardMaterial({ map: tex, emissiveMap: tex, emissive: 0xffffff, emissiveIntensity: 0.32, roughness: 0.6 });
  });
  const awningColors = [0xb3261e, 0x1f5f3a, 0x1d3557, 0xe07a1f, 0x6b2d5c];
  const shopPlane = new THREE.PlaneGeometry(1, 1);
  const tankGeo = merge([
    part(G.cyl, 0x7a5230, [0, 2.9, 0], [1.5, 2.4, 1.5]),
    part(G.cone, 0x4a3320, [0, 4.6, 0], [1.7, 1.2, 1.7]),
    ...[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([a, b]) => part(G.box, 0x3a3a3a, [a * 1.0, 0.8, b * 1.0], [0.12, 1.7, 0.12])),
    part(G.box, 0x3a3a3a, [0, 1.65, 0], [2.4, 0.1, 2.4]),
  ]);
  const tankMat = vcMaterial({ roughness: 0.9 });
  const boxMat = new THREE.MeshStandardMaterial({ color: 0x80858a, roughness: 0.9 });

  const addBuilding = (cx, cz, lot, detail, exposures, centerFactor) => {
    const w = lot.x1 - lot.x0, d = lot.z1 - lot.z0;
    const lx = cx + (lot.x0 + lot.x1) / 2, lz = cz + (lot.z0 + lot.z1) / 2;
    const area = w * d;
    let type;
    const p = rng();
    const pt = area < 260 ? 0.02 : 0.1 + 0.4 * centerFactor;
    if (p < pt) type = 'tower'; else if (p < pt + 0.42) type = 'mid'; else type = 'low';
    if (type === 'low' && area > 800) type = 'mid';
    let floors;
    if (type === 'low') floors = 4 + Math.floor(rng() * 4);
    else if (type === 'mid') floors = 8 + Math.floor(rng() * 9);
    else floors = Math.round(rand(20, 32) + centerFactor * 16);
    const facadeId = pick(type === 'low' ? LOW : type === 'mid' ? MID : TOWER);
    const def = T.FACADE_DEFS.find((f) => f.id === facadeId);

    let tiers;
    if (type === 'tower' && floors > 30) {
      const f1 = Math.round(floors * 0.45), f2 = Math.round(floors * 0.3);
      tiers = [{ s: 1, f: f1 }, { s: 0.72, f: f2 }, { s: 0.48, f: floors - f1 - f2 }];
    } else if (type === 'tower' || (type === 'mid' && floors > 11)) {
      const f1 = Math.round(floors * (type === 'tower' ? 0.6 : 0.78));
      tiers = [{ s: 1, f: f1 }, { s: type === 'tower' ? 0.74 : 0.86, f: floors - f1 }];
    } else tiers = [{ s: 1, f: floors }];

    let y0 = SIDEWALK_H;
    let topY = y0, topX = lx, topZ = lz, topW = w, topD = d;
    tiers.forEach((t, ti) => {
      const tw = w * t.s - 0.1, td = d * t.s - 0.1, th = t.f * FLOOR_H;
      const tx = ti === 0 ? lx : lx + rand(-1, 1) * (w - tw) / 2;
      const tz = ti === 0 ? lz : lz + rand(-1, 1) * (d - td) / 2;
      const geo = buildingGeo(tw, th, td, rng(), Math.floor(rng() * 4) * 0.25);
      const mesh = new THREE.Mesh(geo, [facadeMats[facadeId], roofMat]);
      mesh.position.set(tx, y0, tz);
      mesh.castShadow = true; mesh.receiveShadow = detail;
      city.add(mesh);
      if (def.style !== 'glass') {
        const cor = new THREE.Mesh(new THREE.BoxGeometry(tw + 0.7, 0.55, td + 0.7), trimMats[facadeId]);
        cor.position.set(tx, y0 + th - 0.2, tz);
        cor.castShadow = true;
        city.add(cor);
      }
      y0 += th; topY = y0; topX = tx; topZ = tz; topW = tw; topD = td;
    });

    if (detail) {
      colliders.boxes.push({ minX: lx - w / 2, maxX: lx + w / 2, minZ: lz - d / 2, maxZ: lz + d / 2, h: topY });
      // rooftop clutter
      if ((type === 'low' || type === 'mid') && rng() < 0.55) {
        const tank = new THREE.Mesh(tankGeo, tankMat);
        tank.position.set(topX + rand(-1, 1) * (topW / 2 - 3), topY, topZ + rand(-1, 1) * (topD / 2 - 3));
        tank.scale.setScalar(rand(0.8, 1.15));
        tank.castShadow = true;
        city.add(tank);
      }
      const nb = 1 + Math.floor(rng() * 3);
      for (let i = 0; i < nb; i++) {
        const bw = rand(2.5, 5), bh = rand(1.5, 3), bd = rand(2.5, 5);
        const b = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, bd), boxMat);
        b.position.set(topX + rand(-1, 1) * Math.max(topW / 2 - 4, 0), topY + bh / 2, topZ + rand(-1, 1) * Math.max(topD / 2 - 4, 0));
        b.castShadow = true;
        city.add(b);
      }
      if (type === 'tower' && rng() < 0.6) {
        const sh = rand(10, 24);
        const sp = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.35, sh, 6), boxMat);
        sp.position.set(topX, topY + sh / 2, topZ);
        city.add(sp);
      }
      // ground-floor shopfronts on every street-facing wall
      for (const ex of exposures) {
        const len = ex.len;
        const nShops = Math.max(1, Math.round(len / 9.5));
        const sw = len / nShops;
        for (let s = 0; s < nShops; s++) {
          const off = -len / 2 + sw * (s + 0.5);
          const si = Math.floor(rng() * shopMats.length);
          const shopMat = shopMats[si];
          const plane = new THREE.Mesh(shopPlane, shopMat);
          plane.scale.set(sw - 0.4, 3.3, 1);
          const px = ex.cx + ex.tx * off + ex.nx * 0.05;
          const pz = ex.cz + ex.tz * off + ex.nz * 0.05;
          plane.position.set(px, SIDEWALK_H + 1.65, pz);
          plane.rotation.y = Math.atan2(ex.nx, ex.nz);
          city.add(plane);
          // the door is the middle of the shop texture: that's where you press E to go in
          world.shopDoors.push({ x: px + ex.nx * 0.95, z: pz + ex.nz * 0.95, nx: ex.nx, nz: ex.nz, kind: si, label: T.SHOPS[si].text, seed: world.shopDoors.length });
          if (rng() < 0.4) {
            const aw = new THREE.Mesh(new THREE.BoxGeometry(sw * 0.86, 0.07, 1.3), new THREE.MeshStandardMaterial({ color: pick(awningColors), roughness: 0.8 }));
            aw.position.set(px + ex.nx * 0.65, SIDEWALK_H + 3.0, pz + ex.nz * 0.65);
            aw.rotation.y = Math.atan2(ex.nx, ex.nz);
            aw.rotateX(0.28);
            aw.castShadow = true;
            city.add(aw);
          }
        }
      }
    }
  };

  const hb = BUILD / 2;
  for (let bi = E0; bi <= E1; bi++) {
    for (let bj = E0; bj <= E1; bj++) {
      const cx = blockCenter(bi), cz = blockCenter(bj);
      const detail = bi >= 0 && bi < N && bj >= 0 && bj < N;
      const centerFactor = clamp(1 - Math.hypot(cx, cz) / (HALF_CITY * 1.2), 0, 1);
      for (const lot of makeLots()) {
        const exposures = [];
        const w = lot.x1 - lot.x0, d = lot.z1 - lot.z0;
        const mx = (lot.x0 + lot.x1) / 2, mz = (lot.z0 + lot.z1) / 2;
        if (lot.z0 <= -hb + 0.01) exposures.push({ len: w, cx: cx + mx, cz: cz + lot.z0 - 0.05, tx: 1, tz: 0, nx: 0, nz: -1 });
        if (lot.z1 >= hb - 0.01) exposures.push({ len: w, cx: cx + mx, cz: cz + lot.z1 + 0.05, tx: 1, tz: 0, nx: 0, nz: 1 });
        if (lot.x0 <= -hb + 0.01) exposures.push({ len: d, cx: cx + lot.x0 - 0.05, cz: cz + mz, tx: 0, tz: 1, nx: -1, nz: 0 });
        if (lot.x1 >= hb - 0.01) exposures.push({ len: d, cx: cx + lot.x1 + 0.05, cz: cz + mz, tx: 0, tz: 1, nx: 1, nz: 0 });
        addBuilding(cx, cz, lot, detail, exposures, centerFactor);
      }
    }
  }

  // ------------------------------------------------------- sidewalk props
  const lamps = [], trees = [], hydrants = [], trash = [], mail = [];
  const occ = {};      // occupied intervals per block side
  const key = (i, j, s) => `${i},${j},${s}`;
  const free = (i, j, s, o, half) => (occ[key(i, j, s)] || []).every(([a, b]) => o + half < a || o - half > b);
  const reserve = (i, j, s, o, half) => { (occ[key(i, j, s)] = occ[key(i, j, s)] || []).push([o - half, o + half]); };
  const subwayList = [];

  const centerBlock = Math.floor((N - 1) / 2);
  // forced: spawn spot + subway + hot-dog cart on the north side of the center block
  reserve(centerBlock, centerBlock, 0, -17, 5.5);   // keep the spawn stretch clear so the opening view is open
  reserve(centerBlock, centerBlock, 0, 0, 3);
  const forcedSubway = { i: centerBlock, j: centerBlock, side: 0, off: 10 };
  const forcedCart = { i: centerBlock, j: centerBlock, side: 0, off: -10 };
  reserve(centerBlock, centerBlock, 0, 10, 4.2);
  reserve(centerBlock, centerBlock, 0, -10, 2.2);

  for (let bi = 0; bi < N; bi++) {
    for (let bj = 0; bj < N; bj++) {
      const cx = blockCenter(bi), cz = blockCenter(bj);
      const isCenter = bi === centerBlock && bj === centerBlock;
      // subway entrance
      const wantSub = isCenter || rng() < 0.38;
      if (wantSub) {
        const sideIdx = isCenter ? 0 : Math.floor(rng() * 4);
        const off = isCenter ? forcedSubway.off : rand(-12, 12);
        if (isCenter || free(bi, bj, sideIdx, off, 4.2)) {
          if (!isCenter) reserve(bi, bj, sideIdx, off, 4.2);
          subwayList.push({ cx, cz, side: SIDES[sideIdx], off });
        }
      }
      if (isCenter) world.carts.push({ cx, cz, side: SIDES[0], off: forcedCart.off });
      else {
        // hot dog stands are everywhere in midtown: up to three tries per block
        const want = rng() < 0.55 ? 2 : 1;
        for (let tries = 0, got = 0; tries < 6 && got < want; tries++) {
          const sideIdx = Math.floor(rng() * 4);
          const off = rand(-15, 15);
          if (free(bi, bj, sideIdx, off, 2.4)) { reserve(bi, bj, sideIdx, off, 2.4); world.carts.push({ cx, cz, side: SIDES[sideIdx], off }); got++; }
        }
      }
      for (let s = 0; s < 4; s++) {
        const side = SIDES[s];
        const yaw = Math.atan2(side.n[0], side.n[1]);
        for (const o of [-12.5, 12.5]) {
          if (free(bi, bj, s, o, 0.8)) {
            reserve(bi, bj, s, o, 0.8);
            const [x, z] = sidePos(cx, cz, side, 24.3, o);
            lamps.push({ x, y: SIDEWALK_H, z, rot: yaw });
            colliders.circles.push({ x, z, r: 0.22 });
          }
        }
        const slots = [-18, -6.5, 6.5, 18].sort(() => rng() - 0.5).slice(0, 3);
        for (const o0 of slots) {
          const o = o0 + rand(-1, 1);
          if (!free(bi, bj, s, o, 1.6)) continue;
          reserve(bi, bj, s, o, 1.6);
          const [x, z] = sidePos(cx, cz, side, 24.2, o);
          trees.push({ x, y: SIDEWALK_H, z, color: pick([0x3f7a3a, 0x4c8a41, 0x356b35, 0x5a9a48, 0x6aa84f]), sy: rand(0.9, 1.2) });
          colliders.circles.push({ x, z, r: 0.38 });
        }
        for (const [list, prob, rad, half] of [[hydrants, 0.4, 0.24, 0.6], [trash, 0.5, 0.34, 0.7], [mail, 0.28, 0.42, 0.8]]) {
          if (rng() > prob) continue;
          const o = rand(-20, 20);
          if (!free(bi, bj, s, o, half + 0.3)) continue;
          reserve(bi, bj, s, o, half + 0.3);
          const [x, z] = sidePos(cx, cz, side, 24.2, o);
          list.push({ x, y: SIDEWALK_H, z, rot: yaw });
          colliders.circles.push({ x, z, r: rad });
        }
      }
    }
  }

  const lampPole = new THREE.CylinderGeometry(0.09, 0.13, 1, 8).translate(0, 0.5, 0);
  const lampMat = new THREE.MeshStandardMaterial({ color: 0x2a3430, roughness: 0.7 });
  city.add(instanced(lampPole, lampMat, lamps.map((l) => ({ ...l, sy: 6.4 }))));
  const lampHead = new THREE.BoxGeometry(0.4, 0.16, 1.2).translate(0, 0, 0.45);
  city.add(instanced(lampHead, new THREE.MeshStandardMaterial({ color: 0xcfd6d2, roughness: 0.5 }), lamps.map((l) => ({ ...l, y: SIDEWALK_H + 6.4 }))));
  const trunk = new THREE.CylinderGeometry(0.2, 0.28, 1, 7).translate(0, 0.5, 0);
  city.add(instanced(trunk, new THREE.MeshStandardMaterial({ color: 0x4a3626, roughness: 1 }), trees.map((t) => ({ ...t, sy: 3.4 }))));
  const canopy = new THREE.IcosahedronGeometry(2.4, 1);
  city.add(instanced(canopy, new THREE.MeshStandardMaterial({ roughness: 0.9, flatShading: true }),
    trees.map((t) => ({ ...t, y: SIDEWALK_H + 4.9, sy: 0.85 * t.sy })), { colors: true }));
  city.add(instanced(new THREE.CylinderGeometry(0.16, 0.2, 0.62, 8).translate(0, 0.31, 0), new THREE.MeshStandardMaterial({ color: 0xc62828, roughness: 0.6 }), hydrants));
  city.add(instanced(new THREE.SphereGeometry(0.17, 8, 6).translate(0, 0.7, 0), new THREE.MeshStandardMaterial({ color: 0xc62828, roughness: 0.6 }), hydrants));
  city.add(instanced(new THREE.CylinderGeometry(0.3, 0.26, 0.9, 10).translate(0, 0.45, 0), new THREE.MeshStandardMaterial({ color: 0x2f4a3a, roughness: 0.8 }), trash));
  city.add(instanced(new THREE.BoxGeometry(0.55, 1.2, 0.62).translate(0, 0.6, 0), new THREE.MeshStandardMaterial({ color: 0x1f4e9c, roughness: 0.5 }), mail));

  // -------------------------------------------------------- subway entrances
  const GREEN = 0x1f4a38;
  const lineUp = (n) => { const a = STATIONS[n % STATIONS.length]; return a; };
  subwayList.forEach((sw, idx) => {
    const [station, lines] = lineUp(idx + Math.floor(rng() * 3));
    const Lx = 4.2, Lz = 2.4;
    const g = new THREE.Group();
    const pr = [];
    pr.push(part(G.box, 0x44484b, [0, 0.12, Lz / 2 - 0.1], [Lx, 0.24, 0.2]));
    pr.push(part(G.box, 0x44484b, [0, 0.12, -Lz / 2 + 0.1], [Lx, 0.24, 0.2]));
    pr.push(part(G.box, 0x44484b, [-Lx / 2 + 0.1, 0.12, 0], [0.2, 0.24, Lz]));
    // rails along back, front and closed end
    for (const z of [-Lz / 2 + 0.1, Lz / 2 - 0.1]) {
      pr.push(part(G.box, GREEN, [0, 1.05, z], [Lx, 0.07, 0.07]));
      pr.push(part(G.box, GREEN, [0, 0.62, z], [Lx, 0.05, 0.05]));
      for (let x = -Lx / 2 + 0.1; x <= Lx / 2; x += 0.7) pr.push(part(G.box, GREEN, [x, 0.6, z], [0.05, 1.0, 0.05]));
    }
    pr.push(part(G.box, GREEN, [-Lx / 2 + 0.1, 1.05, 0], [0.07, 0.07, Lz]));
    for (let z = -Lz / 2 + 0.1; z <= Lz / 2; z += 0.55) pr.push(part(G.box, GREEN, [-Lx / 2 + 0.1, 0.6, z], [0.05, 1.0, 0.05]));
    // lamp posts with green globes at the open end
    for (const z of [-Lz / 2 + 0.1, Lz / 2 - 0.1]) {
      pr.push(part(G.cyl, 0x1a1d1f, [Lx / 2 + 0.05, 1.6, z], [0.06, 3.2, 0.06]));
    }
    g.add(new THREE.Mesh(merge(pr), vcMaterial({ roughness: 0.6 })));
    for (const z of [-Lz / 2 + 0.1, Lz / 2 - 0.1]) {
      const globe = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 10), new THREE.MeshBasicMaterial({ color: 0x66ff96 }));
      globe.position.set(Lx / 2 + 0.05, 3.4, z);
      g.add(globe);
    }
    const hole = new THREE.Mesh(new THREE.PlaneGeometry(Lx - 0.55, Lz - 0.55).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: T.stairsTexture() }));
    hole.position.y = 0.04;
    g.add(hole);
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(0.95, 1.9), new THREE.MeshBasicMaterial({ map: T.totemTexture(station, lines), side: THREE.DoubleSide }));
    sign.rotation.y = Math.PI / 2;
    sign.position.set(Lx / 2 + 0.75, 2.0, 0);
    g.add(sign);
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 1.1, 6), new THREE.MeshStandardMaterial({ color: 0x1a1d1f }));
    pole.position.set(Lx / 2 + 0.75, 0.55, 0);
    g.add(pole);

    const [x, z] = sidePos(sw.cx, sw.cz, sw.side, 23.1, sw.off);
    g.position.set(x, SIDEWALK_H, z);
    g.rotation.y = Math.atan2(sw.side.n[0], sw.side.n[1]);
    g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    city.add(g);
    const alongZ = sw.side.n[0] !== 0;
    const hx = alongZ ? Lz / 2 : Lx / 2, hz = alongZ ? Lx / 2 : Lz / 2;
    colliders.boxes.push({ minX: x - hx, maxX: x + hx, minZ: z - hz, maxZ: z + hz, h: 1.3 });
    // the open (stairs) end faces local +x; that's where the pigeon steps out when coming back up
    const th = Math.atan2(sw.side.n[0], sw.side.n[1]);
    const ox = Math.cos(th), oz = -Math.sin(th);
    world.subways.push({ x, z, station, lines, openX: ox, openZ: oz, exitX: x + ox * (Lx / 2 + 1.6), exitZ: z + oz * (Lx / 2 + 1.6), exitYaw: Math.atan2(ox, oz), id: world.subways.length });
  });

  // --------------------------------------------------------- hot dog carts
  const cartSigns = ['HOT DOGS', 'HOT DOGS', 'PRETZELS', 'GYROS'].map((t) => T.cartSignTexture(t));
  const umbrellaTex = T.stripesTexture('#f3c623', '#d6291d');
  world.carts.forEach((c) => {
    const [x, z] = sidePos(c.cx, c.cz, c.side, 23.2, c.off);
    const g = new THREE.Group();
    g.add(new THREE.Mesh(merge([
      part(G.box, 0xb9bec3, [0, 0.95, 0], [1.6, 0.9, 0.8]),
      part(G.box, 0x8c9298, [0, 1.45, 0.0], [1.5, 0.1, 0.75]),
      part(G.box, 0x8c9298, [0, 0.45, 0], [1.4, 0.3, 0.7]),
      part(G.cyl, 0x222222, [-0.55, 0.3, 0.45], [0.3, 0.08, 0.3], [0, 0, Math.PI / 2]),
      part(G.cyl, 0x222222, [0.55, 0.3, 0.45], [0.3, 0.08, 0.3], [0, 0, Math.PI / 2]),
      part(G.cyl, 0xe8e8e8, [0, 2.0, -0.2], [0.04, 1.2, 0.04]),
    ]), vcMaterial({ roughness: 0.5, metalness: 0.2 })));
    const um = new THREE.Mesh(new THREE.ConeGeometry(1.4, 0.55, 16, 1, true), new THREE.MeshStandardMaterial({ map: umbrellaTex, side: THREE.DoubleSide, roughness: 0.8 }));
    um.position.set(0, 2.55, -0.2);
    g.add(um);
    const sg = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.45), new THREE.MeshBasicMaterial({ map: pick(cartSigns) }));
    sg.position.set(0, 0.95, 0.41);
    g.add(sg);
    g.position.set(x, SIDEWALK_H, z);
    g.rotation.y = Math.atan2(c.side.n[0], c.side.n[1]);
    g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    city.add(g);
    colliders.circles.push({ x, z, r: 0.95 });
    // the vendor: a pigeon in a chef hat standing behind the cart, facing the street
    c.x = x; c.z = z; c.nx = c.side.n[0]; c.nz = c.side.n[1]; c.cd = 0;
    const vx = x - c.nx * 1.35, vz = z - c.nz * 1.35;
    const vendor = new Pigeon({ outfit: 'vendor', scale: 1.2 });
    vendor.root.position.set(vx, SIDEWALK_H, vz);
    vendor.root.rotation.y = Math.atan2(c.nx, c.nz);
    city.add(vendor.root);
    colliders.circles.push({ x: vx, z: vz, r: 0.38 });
    world.vendors.push({ pigeon: vendor, x: vx, z: vz, t: rand(1, 6) });
  });

  // ------------------------------------------- food trucks, parked cars, vents
  const truckGeoCache = {};
  const makeTruck = (def) => {
    const g = new THREE.Group();
    const tex = T.truckTexture(def);
    const col = new THREE.Color(def.color);
    const plain = new THREE.MeshStandardMaterial({ color: col, roughness: 0.55 });
    const panel = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.55 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x25282c, roughness: 0.6 });
    const cargo = new THREE.Mesh(new THREE.BoxGeometry(4.6, 2.4, 2.3), [plain, plain, plain, dark, panel, panel]);
    cargo.position.set(-0.9, 1.85, 0);
    g.add(cargo);
    const cab = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.45, 2.3), plain);
    cab.position.set(2.3, 1.375, 0);
    g.add(cab);
    const glass = new THREE.MeshStandardMaterial({ color: 0x141c26, roughness: 0.2, metalness: 0.3 });
    const ws = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.65, 2.0), glass); ws.position.set(3.2, 1.55, 0);
    const sw = new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.6, 2.34), glass); sw.position.set(2.25, 1.6, 0);
    const bump = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.3, 2.3), dark); bump.position.set(3.2, 0.62, 0);
    g.add(ws, sw, bump);
    const awn = new THREE.Mesh(new THREE.BoxGeometry(3.0, 0.06, 1.0), new THREE.MeshStandardMaterial({ map: T.stripesTexture('#ffffff', def.accent), roughness: 0.8 }));
    awn.position.set(0.55, 2.55, 1.6); awn.rotation.x = 0.28;
    g.add(awn);
    const vent = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.3, 0.7), new THREE.MeshStandardMaterial({ color: 0xaaaeb2 }));
    vent.position.set(-1.5, 3.2, 0);
    g.add(vent);
    const wheelG = new THREE.CylinderGeometry(0.46, 0.46, 0.32, 14).rotateX(Math.PI / 2);
    for (const x of [2.2, -2.0]) for (const s of [-1, 1]) {
      const wh = new THREE.Mesh(wheelG, new THREE.MeshStandardMaterial({ color: 0x15171a })); wh.position.set(x, 0.46, s * 1.05); g.add(wh);
    }
    const hl = new THREE.MeshBasicMaterial({ color: 0xfff2c4 });
    for (const s of [-1, 1]) { const h = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.16, 0.3), hl); h.position.set(3.22, 0.85, s * 0.8); g.add(h); }
    g.traverse((o) => { if (o.isMesh) { o.castShadow = true; } });
    return g;
  };

  const steamTex = T.steamTexture();
  const ventMat = vcMaterial({ roughness: 0.6 });
  const ventGeo = merge([
    part(G.cyl, 0xe8742a, [0, 0.25, 0], [0.34, 0.5, 0.34]),
    part(G.cyl, 0xf2f2f2, [0, 0.6, 0], [0.3, 0.2, 0.3]),
    part(G.cyl, 0xe8742a, [0, 0.9, 0], [0.26, 0.4, 0.26]),
    part(G.cyl, 0xf2f2f2, [0, 1.2, 0], [0.22, 0.2, 0.22]),
    part(G.cyl, 0xe8742a, [0, 1.45, 0], [0.18, 0.3, 0.18]),
  ]);

  let truckCount = 0;
  for (const axis of ['x', 'z']) {
    for (let k = 0; k <= N; k++) {
      for (let i = 0; i < N; i++) {
        for (const side of [1, -1]) {
          const forced = axis === 'x' && k === 2 && i === centerBlock && side === 1;
          const dvec = axis === 'x' ? [side > 0 ? 1 : -1, 0] : [0, side > 0 ? -1 : 1];
          const yaw = Math.atan2(-dvec[1], dvec[0]);
          const rc = roadCenter(k);
          const along = blockCenter(i);
          const place = (u, v) => (axis === 'x' ? [along + u, rc + side * v] : [rc + side * v, along + u]);
          const r = rng();
          if (forced) {
            const def = TRUCKS[1];
            const [x, z] = place(-5, PARK);
            const tr = makeTruck(def);
            tr.position.set(x, 0.01, z); tr.rotation.y = yaw; city.add(tr);
            colliders.boxes.push({ minX: x - (axis === 'x' ? 3.2 : 1.2), maxX: x + (axis === 'x' ? 3.2 : 1.2), minZ: z - (axis === 'x' ? 1.2 : 3.2), maxZ: z + (axis === 'x' ? 1.2 : 3.2), h: 3.3 });
            world.trucks.push({ x, z, name: def.name.replace('\n', ' ') });
            truckCount++;
            continue;
          }
          if (r < 0.14) {
            const def = TRUCKS[truckCount % TRUCKS.length];
            const u = rand(-11, 11);
            const [x, z] = place(u, PARK);
            const tr = makeTruck(def);
            tr.position.set(x, 0.01, z); tr.rotation.y = yaw; city.add(tr);
            colliders.boxes.push({ minX: x - (axis === 'x' ? 3.2 : 1.2), maxX: x + (axis === 'x' ? 3.2 : 1.2), minZ: z - (axis === 'x' ? 1.2 : 3.2), maxZ: z + (axis === 'x' ? 1.2 : 3.2), h: 3.3 });
            world.trucks.push({ x, z, name: def.name.replace('\n', ' ') });
            truckCount++;
          } else if (r < 0.72) {
            const n = rng() < 0.4 ? 2 : 1;
            for (let c = 0; c < n; c++) {
              const type = pick(['taxi', 'taxi', 'taxi', 'sedan', 'sedan', 'suv', 'van']);
              const car = makeVehicle(type, type === 'taxi' ? TAXI_COLOR : randomCarColor());
              const u = n === 2 ? (c === 0 ? -9 : 9) + rand(-2, 2) : rand(-13, 13);
              const [x, z] = place(u, PARK + 0.2);
              car.position.set(x, 0.01, z); car.rotation.y = yaw; city.add(car);
              const hl = car.userData.L / 2, hw = car.userData.W / 2;
              const box = { minX: x - (axis === 'x' ? hl : hw), maxX: x + (axis === 'x' ? hl : hw), minZ: z - (axis === 'x' ? hw : hl), maxZ: z + (axis === 'x' ? hw : hl), h: 1.7 };
              colliders.boxes.push(box);
              world.parked.push({ mesh: car, type, L: car.userData.L, W: car.userData.W, x, z, rot: yaw, box, kind: 'parked' });
            }
          } else if (r < 0.8) {
            const [x, z] = place(rand(-10, 10), PARK - 0.6);
            const v = new THREE.Mesh(ventGeo, ventMat);
            v.position.set(x, 0.01, z); v.castShadow = true; city.add(v);
            colliders.circles.push({ x, z, r: 0.38 });
            const puffs = [];
            for (let p = 0; p < 7; p++) {
              const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: steamTex, transparent: true, depthWrite: false, opacity: 0 }));
              sp.position.set(x, 1.6, z);
              city.add(sp);
              puffs.push({ sp, t: p / 7, drift: [rand(-0.4, 0.4), rand(-0.4, 0.4)] });
            }
            world.vents.push({ x, z, puffs });
          }
        }
      }
    }
  }

  // ----------------------------------------------- street-name blade signs
  for (let iz = 0; iz <= N; iz++) {
    for (let ix = 0; ix <= N; ix++) {
      const px = roadCenter(ix) + 8.7, pz = roadCenter(iz) - 8.7;
      const a = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 0.4), new THREE.MeshBasicMaterial({ map: T.bladeTexture(STREETS[iz]), side: THREE.DoubleSide }));
      a.position.set(px, SIDEWALK_H + 5.55, pz - 0.9);
      a.rotation.y = Math.PI / 2;
      const b = new THREE.Mesh(new THREE.PlaneGeometry(1.7, 0.4), new THREE.MeshBasicMaterial({ map: T.bladeTexture(AVENUES[ix]), side: THREE.DoubleSide }));
      b.position.set(px + 0.9, SIDEWALK_H + 5.0, pz);
      city.add(a, b);
      colliders.circles.push({ x: px, z: pz, r: 0.16 });
      colliders.circles.push({ x: roadCenter(ix) - 8.7, z: roadCenter(iz) - 8.7, r: 0.16 });
      colliders.circles.push({ x: roadCenter(ix) - 8.7, z: roadCenter(iz) + 8.7, r: 0.16 });
      colliders.circles.push({ x: roadCenter(ix) + 8.7, z: roadCenter(iz) + 8.7, r: 0.16 });
    }
  }

  // static scenery never moves: freeze transforms to save per-frame CPU (steam sprites stay animated)
  city.updateMatrixWorld(true);
  city.traverse((o) => { if (o !== city && !o.isSprite) { o.matrixAutoUpdate = false; } });

  // ----------------------------------------------------------------- query
  world.groundHeight = (x, z) => {
    const i = Math.round(x / PITCH + (N - 1) / 2);
    const j = Math.round(z / PITCH + (N - 1) / 2);
    if (i < 0 || i >= N || j < 0 || j >= N) return 0;
    return Math.abs(x - blockCenter(i)) <= SLAB / 2 && Math.abs(z - blockCenter(j)) <= SLAB / 2 ? SIDEWALK_H : 0;
  };
  world.spawn = { x: -14, z: -22.6, yaw: Math.PI / 2 };

  world.update = (dt, px = 0, pz = 0) => {
    for (const v of world.vendors) {
      if ((v.x - px) ** 2 + (v.z - pz) ** 2 > 70 * 70) continue;
      v.t -= dt;
      if (v.t < 0) { v.pigeon.startPeck(); v.t = rand(3, 9); }
      v.pigeon.update(dt, 0);
    }
    for (const v of world.vents) {
      for (const p of v.puffs) {
        p.t += dt * 0.28;
        if (p.t > 1) p.t -= 1;
        const t = p.t;
        p.sp.position.set(v.x + p.drift[0] * t * 2.5, 1.6 + t * 4.2, v.z + p.drift[1] * t * 2.5);
        p.sp.scale.setScalar(0.9 + t * 3.6);
        p.sp.material.opacity = Math.sin(Math.min(t, 1) * Math.PI) * 0.55;
      }
    }
  };
  return world;
}
