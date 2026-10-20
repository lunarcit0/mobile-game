import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { buildCity } from './city.js';
import { Traffic } from './traffic.js';
import { NPCs } from './npcs.js';
import { Player } from './player.js';
import { Vehicles } from './vehicles.js';
import { Interiors } from './interiors.js';
import { AudioEngine } from './audio.js';
import { Combat } from './rats.js';
import { AVENUES, STREETS, N, roadCenter, PITCH, clamp } from './config.js';

const params = new URLSearchParams(location.search);
const canvas = document.getElementById('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;

const scene = new THREE.Scene();
const SKY = new THREE.Color(0xa9c7e4);
const FOG = new THREE.Color(0xc6d3df);
const outdoorFog = new THREE.Fog(FOG, 120, 520);
scene.fog = outdoorFog;
scene.background = SKY;

const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 1500);

// sky dome
const sky = new Sky();
sky.scale.setScalar(1200);
const u = sky.material.uniforms;
u.turbidity.value = 4; u.rayleigh.value = 1.4; u.mieCoefficient.value = 0.004; u.mieDirectionalG.value = 0.8;
const sun = new THREE.Vector3().setFromSphericalCoords(1, THREE.MathUtils.degToRad(58), THREE.MathUtils.degToRad(150));
u.sunPosition.value.copy(sun);
scene.add(sky);

// lights
const HEMI_OUT = { intensity: 1.9, color: 0xcfe3f7, ground: 0x9a8f80 };
const hemi = new THREE.HemisphereLight(HEMI_OUT.color, HEMI_OUT.ground, HEMI_OUT.intensity);
scene.add(hemi);
const dir = new THREE.DirectionalLight(0xfff0d8, 2.8);
dir.castShadow = true;
dir.shadow.mapSize.set(2048, 2048);
const sc = dir.shadow.camera;
sc.left = -70; sc.right = 70; sc.top = 70; sc.bottom = -70; sc.near = 1; sc.far = 400;
dir.shadow.bias = -0.0006; dir.shadow.normalBias = 0.6;
scene.add(dir, dir.target);
const sunDir = sun.clone();

// ------------------------------------------------------------------ world
const audio = new AudioEngine();
const world = buildCity(scene);
const traffic = new Traffic(scene);
const player = new Player(scene, camera, world, canvas);
const npcs = new NPCs(scene, 220);
const interiors = new Interiors(scene, { train: (ev) => audio.train(ev) });
const vehicles = new Vehicles(world, traffic, player, {
  crash: (i) => audio.crash(i),
});
traffic.hooks.honk = (car) => { if (Math.abs(car.x - player.x) < 120 && Math.abs(car.z - player.z) < 120) audio.honk(car.x, car.z, car.type); };

const combat = new Combat(scene, world, player, {
  audio,
  damage: (n) => hurtPlayer(n),
  crumbs: (n) => { setCrumbs(crumbs + n); },
  alert: () => toast('Rats! Press F or click to throw a poop bomb', 3.5),
});
const outdoorObjs = [world.group, traffic.group, npcs.group, sky, combat.group];

// ------------------------------------------------------------------ UI
const $ = (id) => document.getElementById(id);
const overlay = $('overlay');
const locEl = $('loc');
const hintEl = $('hint');
const promptEl = $('prompt');
const fadeEl = $('fade');
const crumbEl = $('crumbs');
const toastEl = $('toast');

function startPlay() {
  overlay.classList.add('hidden');
  audio.start();
  if (!params.has('nolock')) canvas.requestPointerLock?.();
}
$('play').addEventListener('click', startPlay);
canvas.addEventListener('click', () => { if (!player.locked && overlay.classList.contains('hidden') && !params.has('nolock')) canvas.requestPointerLock?.(); });
document.addEventListener('pointerlockchange', () => {
  if (!player.locked && !params.has('nolock')) {
    overlay.classList.remove('hidden');
    $('play').textContent = 'Resume';
  }
});
$('mute').addEventListener('click', () => toggleMute());
canvas.addEventListener('mousedown', (e) => { if (e.button === 0 && player.locked) fireBomb(); });
function toggleMute() {
  const m = audio.toggleMute();
  $('mute').textContent = m ? 'Sound off' : 'Sound on';
  $('mute').classList.toggle('off', m);
}

let toastT = 0;
function toast(msg, sec = 2) { toastEl.textContent = msg; toastEl.style.opacity = 1; toastT = sec; }

// on-screen controls for touch devices
const isTouch = matchMedia('(pointer: coarse)').matches;
if (isTouch) {
  document.body.classList.add('touch');
  const pad = $('pad'), nub = $('nub');
  let id = null, ox = 0, oy = 0;
  pad.addEventListener('touchstart', (e) => { const t = e.changedTouches[0]; id = t.identifier; const r = pad.getBoundingClientRect(); ox = r.left + r.width / 2; oy = r.top + r.height / 2; e.preventDefault(); }, { passive: false });
  pad.addEventListener('touchmove', (e) => {
    for (const t of e.changedTouches) if (t.identifier === id) {
      let dx = (t.clientX - ox) / 50, dy = (t.clientY - oy) / 50;
      const l = Math.hypot(dx, dy); if (l > 1) { dx /= l; dy /= l; }
      player.touchMove = { x: dx, y: dy };
      nub.style.transform = `translate(${dx * 40}px, ${dy * 40}px)`;
    }
    e.preventDefault();
  }, { passive: false });
  const end = () => { id = null; player.touchMove = null; nub.style.transform = ''; };
  pad.addEventListener('touchend', end); pad.addEventListener('touchcancel', end);
  let lookId = null, lx = 0, ly = 0;
  canvas.addEventListener('touchstart', (e) => { const t = e.changedTouches[0]; lookId = t.identifier; lx = t.clientX; ly = t.clientY; });
  canvas.addEventListener('touchmove', (e) => {
    for (const t of e.changedTouches) if (t.identifier === lookId) {
      player.camYaw -= (t.clientX - lx) * 0.006; player.camPitch = clamp(player.camPitch + (t.clientY - ly) * 0.006, -0.15, 1.15);
      player.lastLook = performance.now();
      lx = t.clientX; ly = t.clientY;
    }
  });
  $('jump').addEventListener('touchstart', (e) => { player.keys.Space = true; e.preventDefault(); }, { passive: false });
  $('jump').addEventListener('touchend', () => { player.keys.Space = false; });
  $('act').addEventListener('touchstart', (e) => { interact(); e.preventDefault(); }, { passive: false });
  $('fire').addEventListener('touchstart', (e) => { fireBomb(); e.preventDefault(); }, { passive: false });
  $('horn').addEventListener('touchstart', (e) => { honk(); e.preventDefault(); }, { passive: false });
}

// ---------------------------------------------------------------- game state
let mode = 'street';            // 'street' | 'driving' | 'shop' | 'subway'
let current = null;             // active interior (shop/subway)
let ret = null;                 // where to put the pigeon when leaving an interior
let time = 0;                   // traffic clock (only runs outdoors)
let crumbs = 0;
let fading = false;
let nextPrompt = null;
let subwayId = 0;
const FADE_MS = params.has('nofade') ? 0 : 260;

function setCrumbs(n) { crumbs = n; crumbEl.textContent = `Crumbs ${n}`; }
const hpFill = document.querySelector('#hp i'), hurtEl = $('hurt'), killsEl = $('kills');
let hurtT = 0, dead = false;
function hurtPlayer(n) {
  if (dead || mode !== 'street') return;
  combat.hp = Math.max(0, combat.hp - n); combat.sinceHit = 0;
  audio.hurt(); hurtEl.style.opacity = 1; hurtT = 0.25;
  if (combat.hp <= 0) dieAndRespawn();
}
function dieAndRespawn() {
  dead = true;
  toast('The rats got you! You wake up back where you started.', 3);
  fade(() => {
    player.teleport(world.spawn.x, world.spawn.z, world.spawn.yaw);
    setCrumbs(Math.floor(crumbs / 2));
    combat.heal(); combat.calm(); dead = false;
  });
  if (FADE_MS === 0) dead = false;
}
function fireBomb() {
  if (mode !== 'street' || fading || dead) return;
  const dx = -Math.sin(player.camYaw), dz = -Math.cos(player.camYaw);
  if (combat.fire(dx, dz)) {
    audio.plop(); player.yaw = Math.atan2(dx, dz); player.pigeon.startPeck();
  }
}
setCrumbs(0);

function setScene(m) {
  const outdoor = m === 'street' || m === 'driving';
  for (const o of outdoorObjs) o.visible = outdoor;
  dir.visible = outdoor;
  interiors.hideAll();
  if (outdoor) {
    scene.fog = outdoorFog; scene.background = SKY;
    hemi.intensity = HEMI_OUT.intensity; hemi.color.setHex(HEMI_OUT.color); hemi.groundColor.setHex(HEMI_OUT.ground);
    player.setContext(player.outdoor);
  } else {
    current.group.visible = true;
    scene.fog = current.fog ? new THREE.Fog(current.fog.color, current.fog.near, current.fog.far) : null;
    scene.background = new THREE.Color(current.background);
    hemi.intensity = current.hemi.intensity; hemi.color.setHex(current.hemi.color); hemi.groundColor.setHex(current.hemi.ground);
    player.setContext(current.ctx);
  }
}

function fade(cb) {
  if (fading) return;
  if (FADE_MS === 0) { cb(); return; }
  fading = true; player.frozen = true;
  fadeEl.classList.add('on');
  setTimeout(() => {
    cb();
    setTimeout(() => { fadeEl.classList.remove('on'); fading = false; player.frozen = false; }, 140);
  }, FADE_MS);
}

function enterInterior(it, from) {
  combat.calm();
  current = it; ret = from;
  mode = it.type;
  setScene(mode);
  player.teleport(it.spawn.x, it.spawn.z, it.spawn.yaw);
  player.camDist = it.type === 'shop' ? 3.7 : 5.2;
  player.snapCamera();
  audio.setContext(it.type, it.kind);
  if (it.type === 'shop') audio.bell(); else audio.door();
}

function leaveInterior(to) {
  current = null;
  mode = 'street';
  setScene('street');
  player.teleport(to.x, to.z, to.yaw);
  audio.setContext('street');
  audio.door();
}

function enterShop(door) {
  fade(() => enterInterior(interiors.shop(door.kind), { x: door.x, z: door.z, yaw: Math.atan2(door.nx, door.nz) }));
}
function enterSubway(sw) {
  fade(() => {
    const it = interiors.getSubway();
    it.setStation(sw.station, sw.lines);
    subwayId = sw.id;
    enterInterior(it, { x: sw.exitX, z: sw.exitZ, yaw: sw.exitYaw });
  });
}

function rideTrain() {
  const others = world.subways.filter((s) => s.id !== subwayId);
  if (!others.length) return;
  const dest = others[Math.floor(Math.random() * others.length)];
  fade(() => {
    leaveInterior({ x: dest.exitX, z: dest.exitZ, yaw: dest.exitYaw });
    toast(`Arrived at ${dest.station}`, 3);
  });
  audio.train('chime');
}

function honk() {
  if (mode === 'driving') audio.honk(null, null, vehicles.car.type);
}

function coo() {
  audio.coo();
  player.pigeon.startPeck();
}

// ------------------------------------------------------------- interaction
function currentPrompt() {
  if (fading) return null;
  const px = player.x, pz = player.z;
  if (mode === 'driving') {
    const slow = Math.abs(vehicles.speed) <= 4;
    return { id: 'exit', text: slow ? 'Get out' : 'Slow down to get out', enabled: slow };
  }
  if (mode === 'street') {
    let best = null;
    const consider = (d, o) => { if (!best || d < best.d) best = { d, ...o, enabled: o.enabled !== false }; };
    const car = vehicles.nearest(px, pz);
    if (car) consider(vehicles.distTo(car, px, pz), { id: 'car', car, text: `Drive this ${vehicles.label(car)}` });
    for (const dr of world.shopDoors) {
      if (Math.abs(dr.x - px) > 2.2 || Math.abs(dr.z - pz) > 2.2) continue;
      const d = Math.hypot(dr.x - px, dr.z - pz);
      if (d < 2.0) consider(d, { id: 'shop', door: dr, text: `Enter ${dr.label.toLowerCase()}` });
    }
    for (const s of world.subways) {
      const d = Math.hypot(s.x - px, s.z - pz);
      if (d < 3.6) consider(d - 1.5, { id: 'subway', sw: s, text: 'Take the stairs down to the subway' });
    }
    for (const c of world.carts) {
      const d = Math.hypot(c.x - px, c.z - pz);
      if (d < 2.8) {
        const ok = time >= (c.nextT ?? 0);
        consider(d, { id: 'crumbs', cart: c, enabled: ok, text: ok ? 'Beg the vendor for crumbs' : 'The vendor is out of crumbs for now' });
      }
    }
    return best;
  }
  // inside
  if (current.dynamicInteract) { const d = current.dynamicInteract(px, pz); if (d) return { ...d, enabled: true }; }
  let best = null;
  for (const it of current.interacts) {
    const d = Math.hypot(it.x - px, it.z - pz);
    if (d < it.r && (!best || d < best.d)) best = { d, ...it, enabled: it.id !== 'crumbs' || (current.cd?.crumbs ?? 0) <= performance.now() };
  }
  if (best && best.id === 'crumbs' && !best.enabled) best.text = 'Out of crumbs for now';
  return best;
}

function interact() {
  const pr = currentPrompt();
  if (!pr || !pr.enabled) return;
  switch (pr.id) {
    case 'car':
      vehicles.enter(pr.car); mode = 'driving'; audio.door(); break;
    case 'exit':
      if (vehicles.exit()) { mode = 'street'; audio.door(); } else toast("Can't get out here: no room", 1.8);
      break;
    case 'shop': enterShop(pr.door); break;
    case 'subway': enterSubway(pr.sw); break;
    case 'leave': {
      const to = ret;
      fade(() => leaveInterior(to));
      break;
    }
    case 'board': rideTrain(); break;
    case 'crumbs': {
      const n = 1 + Math.floor(Math.random() * 3);
      setCrumbs(crumbs + n); audio.pop(); toast(`+${n} crumb${n > 1 ? 's' : ''}!`, 1.5);
      player.pigeon.startPeck();
      if (pr.cart) { pr.cart.nextT = time + 20; } else { current.cd = current.cd || {}; current.cd.crumbs = performance.now() + 15000; }
      break;
    }
    default: break;
  }
}

addEventListener('keydown', (e) => {
  if (e.repeat) return;
  if (e.code === 'KeyE') interact();
  else if (e.code === 'KeyF') fireBomb();
  else if (e.code === 'KeyH') honk();
  else if (e.code === 'KeyC') coo();
  else if (e.code === 'KeyM') toggleMute();
});

function locationName(x, z) {
  const ix = clamp(Math.round(x / PITCH + N / 2), 0, N);
  const iz = clamp(Math.round(z / PITCH + N / 2), 0, N);
  const dx = Math.abs(x - roadCenter(ix)), dz = Math.abs(z - roadCenter(iz));
  if (dx < 9 && dz < 9) return `${AVENUES[ix]} & ${STREETS[iz]}`;
  if (dx < 9) return AVENUES[ix];
  if (dz < 9) return STREETS[iz];
  return `${AVENUES[ix]} & ${STREETS[iz]}`;
}

function nearestOf(list, x, z) {
  let bd = 1e9;
  for (const s of list) { const d = Math.hypot(s.x - x, s.z - z); if (d < bd) bd = d; }
  return bd;
}

let lastLoc = '', lastPromptKey = '';
function updateHud(dt) {
  let loc;
  if (mode === 'shop') loc = current.label[0] + current.label.slice(1).toLowerCase();
  else if (mode === 'subway') loc = 'Subway station';
  else loc = locationName(player.x, player.z);
  if (mode === 'driving') loc += '  -  driving';
  if (loc !== lastLoc) { locEl.textContent = loc; lastLoc = loc; }

  if (mode === 'street') {
    const sub = world.subways.find((s) => (s.x - player.x) ** 2 + (s.z - player.z) ** 2 < 14 * 14);
    const tr = sub ? null : world.trucks.find((s) => (s.x - player.x) ** 2 + (s.z - player.z) ** 2 < 12 * 12);
    const hint = sub ? `Subway: ${sub.station}  (${sub.lines.join(' ')})` : tr ? `Food truck: ${tr.name}` : '';
    if (hint !== hintEl.textContent) { hintEl.textContent = hint; hintEl.style.opacity = hint ? 1 : 0; }
  } else if (hintEl.textContent) { hintEl.textContent = ''; hintEl.style.opacity = 0; }

  nextPrompt = currentPrompt();
  const key = nextPrompt ? nextPrompt.text + nextPrompt.enabled : '';
  if (key !== lastPromptKey) {
    lastPromptKey = key;
    if (nextPrompt) {
      promptEl.innerHTML = `<b>${nextPrompt.enabled ? 'E' : '...'}</b> ${nextPrompt.text}`;
      promptEl.classList.toggle('dim', !nextPrompt.enabled);
      promptEl.style.opacity = 1;
    } else promptEl.style.opacity = 0;
    document.body.classList.toggle('canact', !!(nextPrompt && nextPrompt.enabled));
  }
  document.body.classList.toggle('driving', mode === 'driving');
  if (toastT > 0) { toastT -= dt; if (toastT <= 0) toastEl.style.opacity = 0; }
}

// ------------------------------------------------------------- main loop
function resize() {
  const w = canvas.clientWidth, h = canvas.clientHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize);
resize();

let lastSteps = 0, flapT = 0, nearT = 0;
const audioState = { lx: 0, lz: 0, lyaw: 0, mode: 'street', cars: [], busy: 0.5, cartD: 99, ventD: 99, subwayD: 99, nearNpc: null, drive: null };

function update(dt) {
  const outdoor = mode === 'street' || mode === 'driving';
  if (outdoor) {
    time += dt;
    vehicles.update(dt, player.keys);
    player.update(dt);
    traffic.update(dt, time, mode === 'driving' ? null : { x: player.x, y: player.y, z: player.z });
    npcs.update(dt, player);
    world.update(dt, player.x, player.z);
    combat.update(dt, { active: true, hunted: mode === 'street' && !dead && !fading, car: mode === 'driving' ? { x: player.x, z: player.z, speed: Math.abs(vehicles.speed) } : null });
    // keep the shadow frustum on the player
    dir.position.set(player.x + sunDir.x * 160, sunDir.y * 160, player.z + sunDir.z * 160);
    dir.target.position.set(player.x, 0, player.z);
    dir.target.updateMatrixWorld();
    sky.position.set(player.x, 0, player.z);
  } else {
    player.update(dt);
    current.update(dt, player);
  }

  // sounds tied to the pigeon
  if (mode !== 'driving') {
    const steps = player.pigeon.steps;
    if (steps !== lastSteps && player.grounded && player.speed > 0.8) audio.step(0.025 + 0.03 * Math.min(1, player.speed / 9));
    lastSteps = steps;
    if (player.flapping) { flapT -= dt; if (flapT <= 0) { audio.flap(); flapT = 0.13; } } else flapT = 0;
  }

  // audio state (listener at the player, orientation from the camera)
  nearT -= dt;
  const S = audioState;
  S.lx = player.x; S.lz = player.z; S.lyaw = player.camYaw; S.mode = mode === 'driving' ? 'driving' : mode === 'street' ? 'street' : mode;
  S.cars = outdoor ? traffic.vehicles : null;
  S.drive = mode === 'driving' ? { speed: vehicles.speed, throttle: vehicles.input.throttle, slip: vehicles.input.slip } : null;
  if (outdoor && nearT <= 0) {
    nearT = 0.2;
    S.cartD = nearestOf(world.carts, player.x, player.z);
    S.ventD = nearestOf(world.vents, player.x, player.z);
    S.subwayD = nearestOf(world.subways, player.x, player.z);
    S.nearNpc = npcs.nearest(player.x, player.z, 22);
    let c = 0; for (const v of traffic.vehicles) if (Math.abs(v.x - player.x) < 70 && Math.abs(v.z - player.z) < 70) c++;
    S.busy = clamp(c / 16, 0, 1);
  }
  audio.update(dt, S);
  hpFill.style.width = (100 * combat.hp / combat.maxHp).toFixed(1) + '%';
  if (killsEl.dataset.k !== String(combat.kills)) { killsEl.dataset.k = combat.kills; killsEl.textContent = `Rats beaten ${combat.kills}`; }
  if (hurtT > 0) { hurtT -= dt; if (hurtT <= 0) hurtEl.style.opacity = combat.hp < 35 ? 0.45 : 0; }
  else if (combat.hp < 35 && hurtEl.style.opacity === '0') hurtEl.style.opacity = 0.45;
  updateHud(dt);
}

const clock = new THREE.Clock();
let acc = 0, frames = 0, fps = 0;
function frame() {
  const dt = Math.min(clock.getDelta(), 0.1);
  update(dt);
  renderer.render(scene, camera);
  acc += dt; frames++;
  if (acc >= 1) { fps = frames / acc; acc = 0; frames = 0; if (params.has('fps')) $('fps').textContent = fps.toFixed(0) + ' fps'; }
  requestAnimationFrame(frame);
}

window.__game = {
  scene, camera, renderer, player, world, traffic, npcs, vehicles, interiors, audio, dir, combat, fireBomb,
  get fps() { return fps; }, get mode() { return mode; }, get crumbs() { return crumbs; }, get current() { return current; },
  startPlay, update, interact, currentPrompt, enterShop, enterSubway, toggleMute, honk, coo, get time() { return time; },
};

if (params.has('autostart')) { overlay.classList.add('hidden'); if (params.has('audio')) audio.start(); }
$('loading').classList.add('hidden');
if (!params.has('manual')) requestAnimationFrame(frame);
