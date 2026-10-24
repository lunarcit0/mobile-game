// Story pigeons (GTA-style): characters with a "!" over their head who give you short missions.
// One mission at a time. Types: deliver, collect, catch, taxi, minigame. Progress is saved.
import * as THREE from 'three';
import { Pigeon } from './pigeon.js';
import { rand } from './config.js';

/* ------------------------------------------------------------------ cast & script */
const CAST = [
  {
    id: 'tony', name: 'Big Tony', where: 'spawn', dx: 5, dz: 3,
    look: { body: { type: 'tux' }, hat: { type: 'top', color: 0x1b1b1b }, neck: { type: 'chain' }, face: { type: 'shades' } },
    mission: { type: 'deliver', reward: 60, target: 'deli', title: 'Special delivery' },
    offer: ['Hey, kid. Big Tony. You know a guy who knows a guy? Now you do.',
      'I got a little package for Rosa at the deli. Do NOT peek inside. Do NOT ask about the "seeds."',
      'Get it there before the pretzel vendor does. He is a snitch.'],
    active: ['Rosa. The deli. The package. You are still standing here, why?'],
    done: ['Rosa said the "seeds" arrived. Good. You are all right, kid.'],
    after: ['Stay out of trouble. Or at least out of the papers.'],
    finishAt: 'target',   // completes at Rosa, no return trip
    rosa: ['Oh! Tony sent you? Come in, come in.', 'Nobody saw you, right? Good. These "seeds" are the best birdseed on this side of the Hudson.', 'Here, for the trouble. And never tell anyone.'],
  },
  {
    id: 'dolores', name: 'Detective Dolores', where: 'cop', dx: 0, dz: 0,
    look: { body: { type: 'suit', color: 0x1c2a44 }, hat: { type: 'cap', color: 0x14213d }, face: { type: 'shades' }, neck: { type: 'scarf', color: 0xd8433a } },
    mission: { type: 'catch', reward: 80, title: 'Cat burglar' },
    offer: ['Detective Dolores, NYPD. Twenty years on the beat, and not one donut left in this city.',
      'We have a burglar working the shops. Masked, wearing a beanie, carries a little backpack. A real amateur.',
      'My wings are tied with paperwork. Hit him with two poop bombs before he runs off. Bring me the proof. I mean, the burglar.'],
    active: ['Still out there. Look for the beanie, the backpack, the mask. You cannot miss him.'],
    ready: ['You got him! The whole precinct is chirping about it.'],
    done: ['Nice work. I will put in a good word. And a small bonus from the evidence jar.'],
    after: ['Keep your beak clean, rookie.'],
  },
  {
    id: 'pidge', name: 'Professor Pidge', where: 'campus', dx: -3, dz: 4,
    look: { body: { type: 'suit', color: 0x5a3a24 }, hat: { type: 'grad', color: 0x151515 }, face: { type: 'monocle' }, neck: { type: 'bowtie', color: 0xb3202a } },
    mission: { type: 'collect', count: 5, reward: 70, title: 'Lost textbooks', item: 'book' },
    offer: ['Ah, a visitor! I am Professor Pidge, chair of Applied Pecking at City College.',
      'Somebody has scattered my textbooks around the campus sidewalks. Five of them. The final is on Monday.',
      'Collect all five and I will give you an A. Also coins. Mostly coins.'],
    active: ['Five textbooks. Look along the sidewalks around the campus. Golden glow, you cannot miss them.'],
    ready: ['All five! Magnificent. You may keep your A.'],
    done: ['Here you go. Do not spend it all on seed.'],
    after: ['Knowledge is power. Also, crumbs are power.'],
  },
  {
    id: 'gina', name: 'Gina the Dispatcher', where: 'taxi', dx: 3, dz: 0,
    look: { body: { type: 'jersey', color: 0xf2c230 }, hat: { type: 'cap', color: 0xf2c230 }, face: { type: 'shades' }, neck: { type: 'scarf', color: 0x14213d } },
    mission: { type: 'taxi', count: 2, reward: 80, title: 'Rush hour' },
    offer: ['Gina. I run the cabs. Three drivers called out and the avenue is a parking lot.',
      'You can drive, right? Take any taxi, press T, and finish two fares. No crashing. Okay, a little crashing.',
      'Do it and I will make it worth your while.'],
    active: ['Two fares. Get in a taxi, press T, drive the customer there. Move it, move it!'],
    ready: ['Two fares done and the cab still has doors? You are hired.'],
    done: ['Tips split fifty-fifty. Mine was a joke, here is your share.'],
    after: ['If I need a driver, I know who to call.'],
  },
  {
    id: 'marco', name: 'Chef Marco', where: 'pizza', dx: 0, dz: 0,
    look: { body: { type: 'tee', color: 0xffffff }, hat: { type: 'chef', color: 0xffffff }, neck: { type: 'bandana', color: 0xd8312a } },
    mission: { type: 'minigame', game: 'pizza', min: 12, reward: 70, title: 'Pizza rush', needText: 'Make pizzas in the pizza shop (HELP WANTED, J) and earn at least 12 coins.' },
    offer: ['MAMMA MIA! Marco, best pizza in midtown. Do not look it up, trust me.',
      'My crew went to a wedding. In Jersey. On a Friday. Who does that?',
      'Go in the pizza shop and work a shift. Earn at least twelve coins and I will pay you extra.'],
    active: ['The pizza shop, the HELP WANTED sign, press J. Twelve coins or more. Go go go!'],
    ready: ['Twelve coins of pizza in one shift! You have the hands of a chef.'],
    done: ['A bonus from the till. Do not tell my accountant.'],
    after: ['You are always welcome at my oven.'],
  },
];

const CHATTER = [
  'I saw a rat in a top hat. I am not kidding. Top. Hat.', 'Walk here, walk there. Never any crumbs for the common pigeon.',
  'The subway is faster than flying. Do not ask me how I know.', 'My cousin lives in Brooklyn. We do not talk about it.',
  'Beware of the burglar pigeons. And the cops. And the taxis.', 'I heard the boutique has a gold chain. I would die for that chain.',
  'Pretzels are a food group. Look it up.', 'They say Big Tony runs the sidewalk. Sure, sure.',
  'The Rat Corp stashes are under the subway entrances, you know. Just saying.', 'City College is hiring... I mean, enrolling. I think.',
  'Is it me or are the buses getting bigger?', 'Nice feathers. Did you do something different?',
  'I lost a crumb here in 2019. Still looking.', 'Fly high, walk low, never trust a rat in a monocle.',
];

/* ------------------------------------------------------------------ helpers */
function signSprite(txt, color) {
  const c = document.createElement('canvas'); c.width = 96; c.height = 96;
  const g = c.getContext('2d'); g.fillStyle = color; g.beginPath(); g.arc(48, 48, 40, 0, 6.3); g.fill();
  g.lineWidth = 7; g.strokeStyle = '#3a2a00'; g.stroke();
  g.fillStyle = '#3a2a00'; g.font = '900 64px system-ui, Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(txt, 48, 52);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace;
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: t, transparent: true, fog: false, depthTest: false }));
  s.scale.set(0.9, 0.9, 1); s.renderOrder = 10; return s;
}

const BEACON = (c) => new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.3, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending });

export class Story {
  /** o: { scene, world, player, save, npcs, burglars, toast, coins, sfx, audio, getMode(), isBusy() } */
  constructor(o) {
    this.o = o;
    this.group = new THREE.Group(); o.scene.add(this.group);
    const st = o.save.data.story = o.save.data.story || { done: [], active: null };
    this.st = st;
    this.run = null;     // runtime state of the active mission
    this.dlg = null;
    this.beacon = new THREE.Mesh(new THREE.CylinderGeometry(2.4, 2.4, 40, 20, 1, true), BEACON(0xffd24a)); this.beacon.position.y = 20; this.beacon.visible = false; this.beacon.frustumCulled = false; this.group.add(this.beacon);
    this.items = [];
    this.bobT = 0;
    this.cast = CAST.map((c) => this.makeNpc(c)).filter(Boolean);
    this.rosa = null;
    this.ui();
    if (st.active) this.start(st.active, true);
  }

  /* ---------------------------------------------------------------- placing */
  blocked(x, z) {
    for (const b of this.o.world.colliders.boxes) if (x > b.minX - 0.9 && x < b.maxX + 0.9 && z > b.minZ - 0.9 && z < b.maxZ + 0.9 && (b.h ?? 9) > 0.6) return true;
    for (const c of this.o.world.colliders.circles) if ((x - c.x) ** 2 + (z - c.z) ** 2 < (c.r + 0.9) ** 2) return true;
    return false;
  }
  spot(x, z) {
    for (let r = 0; r < 14; r += 1.2) for (let a = 0; a < 6.3; a += 0.7) {
      const px = x + Math.cos(a) * r, pz = z + Math.sin(a) * r;
      if (!this.blocked(px, pz) && this.o.world.groundHeight(px, pz) > 0.1) return { x: px, z: pz };
    }
    return { x, z };
  }
  anchor(c) {
    const w = this.o.world;
    if (c.where === 'spawn') return { x: w.spawn.x + c.dx, z: w.spawn.z + c.dz };
    if (c.where === 'campus') { const L = w.landmarks[0]; return L ? { x: L.gate.x + c.dx - 4, z: L.gate.z + c.dz + 6 } : null; }
    if (c.where === 'taxi') { const t = w.parked.filter((q) => q.type === 'taxi').sort((a, b) => Math.hypot(a.x - w.spawn.x, a.z - w.spawn.z) - Math.hypot(b.x - w.spawn.x, b.z - w.spawn.z))[0]; return t ? { x: t.x + c.dx, z: t.z + 3.5 } : null; }
    if (c.where === 'pizza') { const d = this.nearDoor(1); return d && { x: d.x + d.nx * 2.2 + (-d.nz) * 2.5, z: d.z + d.nz * 2.2 + d.nx * 2.5 }; }
    if (c.where === 'cop') return { x: w.spawn.x - 6, z: w.spawn.z + 8 };
    return null;
  }
  nearDoor(kind, from = this.o.world.spawn, min = 0, max = 1e9, pickNth = 0) {
    const l = this.o.world.shopDoors.filter((d) => d.kind === kind).map((d) => ({ d, dist: Math.hypot(d.x - from.x, d.z - from.z) })).filter((e) => e.dist >= min && e.dist <= max).sort((a, b) => a.dist - b.dist);
    return l.length ? l[Math.min(pickNth, l.length - 1)].d : null;
  }
  makeNpc(c) {
    const a = this.anchor(c); if (!a) return null;
    const p = this.spot(a.x, a.z);
    const pigeon = new Pigeon({ plumage: (c.id.length * 3) % 7, scale: 1.3, look: c.look });
    this.group.add(pigeon.root);
    const mark = signSprite('!', '#ffd24a'); this.group.add(mark);
    const npc = { c, x: p.x, z: p.z, yaw: 0, pigeon, mark };
    pigeon.root.position.set(p.x, this.o.world.groundHeight(p.x, p.z), p.z);
    return npc;
  }

  /* ---------------------------------------------------------------- dialogue UI */
  ui() {
    const el = document.createElement('div'); el.id = 'dlg';
    el.innerHTML = '<div class="dbox"><div class="dname"></div><div class="dtext"></div><div class="dchoices"></div><div class="dhint">E / Space / tap to continue</div></div>';
    document.body.appendChild(el); this.el = el;
    this.nameEl = el.querySelector('.dname'); this.textEl = el.querySelector('.dtext'); this.chEl = el.querySelector('.dchoices'); this.hintEl = el.querySelector('.dhint');
    this.hud = document.getElementById('story'); this.hudText = document.getElementById('stext'); this.hudArrow = document.getElementById('sarrow');
    el.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) this.choose(+b.dataset.i); else this.advance(); });
    window.addEventListener('keydown', (e) => {
      if (!this.dlg) return;
      if (['KeyE', 'Space', 'Enter'].includes(e.code)) { e.stopPropagation(); e.preventDefault(); if (!e.repeat) this.advance(); }
      else if (e.code === 'Escape') { e.stopPropagation(); this.close(); }
      else if (e.code === 'Digit1' || e.code === 'Digit2') { e.stopPropagation(); this.choose(+e.code.slice(-1) - 1); }
      else if (['KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyJ', 'KeyT', 'KeyP'].includes(e.code)) { e.stopPropagation(); }
    }, true);
  }
  get talking() { return !!this.dlg; }

  say(name, lines, choices = null, done = null) {
    this.dlg = { name, lines: lines.slice(), i: 0, choices, done };
    this.o.player.frozen = true; document.exitPointerLock?.();
    this.el.classList.add('on'); this.showLine();
  }
  showLine() {
    const d = this.dlg; this.nameEl.textContent = d.name; this.textEl.textContent = d.lines[d.i];
    const last = d.i >= d.lines.length - 1;
    if (last && d.choices) { this.chEl.innerHTML = d.choices.map((c, i) => `<button data-i="${i}">${i + 1}. ${c.text}</button>`).join(''); this.hintEl.style.display = 'none'; }
    else { this.chEl.innerHTML = ''; this.hintEl.style.display = ''; this.hintEl.textContent = last ? 'E / Space / tap to close' : 'E / Space / tap to continue'; }
    this.o.sfx('click');
  }
  advance() {
    const d = this.dlg; if (!d) return;
    if (d.i < d.lines.length - 1) { d.i++; this.showLine(); return; }
    if (d.choices) return;
    this.close();
  }
  choose(i) {
    const d = this.dlg; if (!d || !d.choices || d.i < d.lines.length - 1 || !d.choices[i]) return;
    const f = d.choices[i].fn; this.close(true); f && f();
  }
  close(skipDone = false) {
    const d = this.dlg; this.dlg = null; this.el.classList.remove('on'); this.o.player.frozen = false;
    if (d && d.done && !skipDone) d.done();
  }

  /* ---------------------------------------------------------------- talking */
  npcNear(x, z) {
    let best = null, bd = 3.2 * 3.2;
    for (const n of this.cast) { const d = (n.x - x) ** 2 + (n.z - z) ** 2; if (d < bd) { bd = d; best = n; } }
    return best;
  }
  rosaNear(x, z) { return this.rosa && (this.rosa.x - x) ** 2 + (this.rosa.z - z) ** 2 < 3.2 * 3.2 ? this.rosa : null; }
  chatter() {
    const line = CHATTER[Math.floor(Math.random() * CHATTER.length)];
    const gift = Math.random() < 0.3 ? 1 + Math.floor(Math.random() * 2) : 0;
    this.say('Pigeon', gift ? [line, `Here, take ${gift} crumb${gift > 1 ? 's' : ''}. I pecked too many today.`] : [line], null, () => { if (gift) this.o.crumbs(gift); });
  }
  talk(n) {
    const c = n.c, st = this.st;
    if (st.done.includes(c.id)) return this.say(c.name, c.after);
    if (st.active === c.id) {
      if (this.run && this.run.ready) return this.say(c.name, c.ready, null, () => this.finish(c));
      return this.say(c.name, c.active);
    }
    if (st.active) return this.say(c.name, ['Finish what you are doing first, then come see me.']);
    this.say(c.name, c.offer, [{ text: 'I am in.', fn: () => this.start(c.id) }, { text: 'Not right now.', fn: () => {} }]);
  }
  talkRosa() {
    const c = CAST[0];
    this.say('Rosa', c.rosa, null, () => this.finish(c));
  }

  /* ---------------------------------------------------------------- missions */
  start(id, silent = false) {
    const c = CAST.find((q) => q.id === id), m = c.mission, w = this.o.world, P = this.o.player;
    this.st.active = id; this.o.save.write();
    const run = this.run = { id, c, m, ready: false, count: 0, base: 0, target: null, giver: this.cast.find((n) => n.c.id === id) };
    if (m.type === 'deliver') {
      const d = this.nearDoor(0, run.giver || w.spawn, 80, 200) || this.nearDoor(0, w.spawn, 30, 400);
      if (d) { run.target = { x: d.x, z: d.z }; this.rosa = this.makeRosa(d); }
    } else if (m.type === 'collect') {
      const L = w.landmarks[0], cx = L ? L.x : 66, cz = L ? L.z : 0, r = 23.5;
      const pts = [[-r, -12], [-r, 12], [r, -12], [r, 12], [-8, -r], [9, r], [10, -r]];
      for (const [px, pz] of pts.slice(0, m.count)) this.addItem(cx + px, cz + pz);
      run.count = 0;
    } else if (m.type === 'catch') {
      run.base = this.o.burglars.caught;
      this.o.burglars.spawn(); const b = this.o.burglars.list[this.o.burglars.list.length - 1]; if (b) b.alerted = true;
    } else if (m.type === 'taxi') { run.base = this.o.save.data.stats.fares; }
    else if (m.type === 'minigame') { /* handled by onMinigame */ }
    if (!silent) this.o.toast(`Mission: ${m.title}`, 3);
  }
  makeRosa(d) {
    if (this.rosa) { this.group.remove(this.rosa.pigeon.root); this.group.remove(this.rosa.mark); }
    const a = this.spot(d.x + d.nx * 1.8 - d.nz * 3.4, d.z + d.nz * 1.8 + d.nx * 3.4);
    const pigeon = new Pigeon({ plumage: 2, scale: 1.3, look: { body: { type: 'tee', color: 0xd8433a }, neck: { type: 'scarf', color: 0xf2c230 } } });
    pigeon.root.position.set(a.x, this.o.world.groundHeight(a.x, a.z), a.z); this.group.add(pigeon.root);
    const mark = signSprite('?', '#7dffb0'); this.group.add(mark);
    return { x: a.x, z: a.z, yaw: 0, pigeon, mark, c: { name: 'Rosa' } };
  }
  addItem(x, z) {
    const p = this.spot(x, z);
    const m = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.12, 0.38), new THREE.MeshStandardMaterial({ color: 0xf2c230, emissive: 0x9a6a00, emissiveIntensity: 0.9, roughness: 0.4 }));
    m.position.set(p.x, 0.9, p.z); this.group.add(m);
    const glow = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 12, 14, 1, true), BEACON(0xffd24a)); glow.position.set(p.x, 6, p.z); this.group.add(glow);
    this.items.push({ m, glow, x: p.x, z: p.z });
  }
  clearItems() { for (const i of this.items) { this.group.remove(i.m); this.group.remove(i.glow); } this.items = []; }

  finish(c) {
    const m = c.mission;
    this.st.done.push(c.id); this.st.active = null; this.run = null; this.clearItems(); this.beacon.visible = false;
    if (this.rosa) { this.group.remove(this.rosa.pigeon.root); this.group.remove(this.rosa.mark); this.rosa = null; }
    this.o.coins(m.reward); this.o.sfx('win'); this.o.save.data.stats.story = (this.o.save.data.stats.story || 0) + 1; this.o.save.write();
    this.o.toast(`Mission complete: ${m.title}  +${m.reward} coins`, 4);
    if (this.st.done.length === CAST.length) setTimeout(() => this.o.toast('You have helped every pigeon in town. Now go finish off the Rat Tycoon!', 6), 4200);
  }
  fail(msg) { this.st.active = null; this.run = null; this.clearItems(); this.beacon.visible = false; this.o.save.write(); this.o.toast(msg, 4); }

  /** called when a mini-game job finishes */
  onMinigame(res) {
    const r = this.run; if (!r || r.m.type !== 'minigame' || r.ready) return;
    if (res.id === r.m.game && res.coins >= r.m.min) { r.ready = true; this.o.sfx('good'); this.o.toast(`Done! Go back to ${r.c.name}.`, 4); }
    else if (res.id === r.m.game) this.o.toast(`Only ${res.coins} coins. ${r.c.name} wants at least ${r.m.min}. Try again!`, 4);
  }

  /* ---------------------------------------------------------------- per frame */
  target() {
    const r = this.run; if (!r) return null;
    if (r.ready || (r.m.type === 'deliver' && false)) return r.giver && { x: r.giver.x, z: r.giver.z, label: `Return to ${r.c.name}` };
    if (r.m.type === 'deliver') return r.target && { x: r.target.x, z: r.target.z, label: 'Deliver the package to Rosa' };
    if (r.m.type === 'collect') { const it = this.items[0]; return it ? { x: it.x, z: it.z, label: `Textbooks ${r.count}/${r.m.count}` } : null; }
    if (r.m.type === 'catch') { const b = this.o.burglars.list.find((q) => q.state !== 'dead' && q.state !== 'gone'); return b ? { x: b.x, z: b.z, label: 'Catch the burglar' } : null; }
    if (r.m.type === 'taxi') return { label: `Taxi fares ${Math.min(r.m.count, this.o.save.data.stats.fares - r.base)}/${r.m.count} (T in a taxi)` };
    if (r.m.type === 'minigame') return { label: r.m.needText };
    return null;
  }

  update(dt, active) {
    const P = this.o.player, w = this.o.world;
    this.bobT += dt;
    const outdoor = this.o.getMode() === 'street' || this.o.getMode() === 'driving';
    for (const n of this.cast) {
      const d = Math.hypot(P.x - n.x, P.z - n.z);
      if (d < 9) { const want = Math.atan2(P.x - n.x, P.z - n.z); let da = want - n.yaw; da = Math.atan2(Math.sin(da), Math.cos(da)); n.yaw += da * Math.min(1, dt * 5); }
      n.pigeon.root.rotation.y = n.yaw; n.pigeon.update(dt, 0);
      const st = this.st.done.includes(n.c.id) ? 0 : this.st.active === n.c.id ? (this.run && this.run.ready ? 2 : 0) : this.st.active ? 0 : 1;
      n.mark.visible = !!st && outdoor;
      if (n.mark.userData.s !== st) { n.mark.userData.s = st; n.mark.material.map.dispose(); const t = signSprite(st === 2 ? '?' : '!', st === 2 ? '#7dffb0' : '#ffd24a'); n.mark.material.map = t.material.map; n.mark.material.needsUpdate = true; }
      n.mark.position.set(n.x, w.groundHeight(n.x, n.z) + 2.5 + Math.sin(this.bobT * 3) * 0.1, n.z);
    }
    if (this.rosa) {
      const n = this.rosa; const want = Math.atan2(P.x - n.x, P.z - n.z); n.yaw = want; n.pigeon.root.rotation.y = n.yaw; n.pigeon.update(dt, 0);
      n.mark.visible = outdoor; n.mark.position.set(n.x, w.groundHeight(n.x, n.z) + 2.5 + Math.sin(this.bobT * 3) * 0.1, n.z);
    }
    const r = this.run;
    this.beacon.visible = false;
    if (r && active !== null) {
      const t = this.target();
      if (t && t.x !== undefined && outdoor) { this.beacon.position.set(t.x, 20, t.z); this.beacon.visible = r.m.type !== 'catch'; }
      if (r.m.type === 'collect' && outdoor) {
        for (let i = this.items.length - 1; i >= 0; i--) {
          const it = this.items[i]; it.m.position.y = 0.9 + Math.sin(this.bobT * 3 + i) * 0.12; it.m.rotation.y += dt * 2;
          if (Math.hypot(P.x - it.x, P.z - it.z) < 2.2) {
            this.group.remove(it.m); this.group.remove(it.glow); this.items.splice(i, 1); r.count++;
            this.o.sfx('coin');
            if (r.count >= r.m.count) { r.ready = true; this.o.toast(`All ${r.m.count} textbooks! Return to ${r.c.name}.`, 4); } else this.o.toast(`Textbook ${r.count}/${r.m.count}`, 1.5);
          }
        }
      } else if (r.m.type === 'deliver' && r.target && outdoor && !this.dlg) {
        // nothing: you talk to Rosa
      } else if (r.m.type === 'catch' && !r.ready) {
        if (this.o.burglars.caught > r.base) { r.ready = true; this.o.toast(`Burglar caught! Go see ${r.c.name}.`, 4); }
        else if (this.o.burglars.list.every((q) => q.state === 'dead' || q.state === 'gone') && this.o.getMode() === 'street') this.fail(`He got away! Talk to ${r.c.name} to try again.`);
      } else if (r.m.type === 'taxi' && !r.ready) {
        if (this.o.save.data.stats.fares - r.base >= r.m.count) { r.ready = true; this.o.toast(`Two fares done! Go back to ${r.c.name}.`, 4); }
      }
    }
    this.updateHud();
  }

  updateHud() {
    const el = this.hud; if (!el) return;
    const r = this.run, t = r && this.target();
    if (!r || !t) { el.style.display = 'none'; return; }
    el.style.display = 'block';
    const P = this.o.player;
    let label = t.label;
    if (t.x !== undefined) {
      const d = Math.hypot(t.x - P.x, t.z - P.z); label += `  (${Math.round(d)} m)`;
      const y = P.camYaw, fx = -Math.sin(y), fz = -Math.cos(y), rx = Math.cos(y), rz = -Math.sin(y), dx = t.x - P.x, dz = t.z - P.z;
      this.hudArrow.style.display = 'inline-block'; this.hudArrow.style.transform = `rotate(${Math.atan2(dx * rx + dz * rz, dx * fx + dz * fz)}rad)`;
    } else this.hudArrow.style.display = 'none';
    const txt = `${r.c.mission.title}: ${label}`;
    if (this.hudText.textContent !== txt) this.hudText.textContent = txt;
  }
}
