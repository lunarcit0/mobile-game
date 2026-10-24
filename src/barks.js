// Ambient comedy: sidewalk pigeons mutter funny lines in speech bubbles, the hero quips after wins
// (wisecracking-superhero style), and the car radio rants while you drive (open-world radio style).
import * as THREE from 'three';
import { pick } from './config.js';

const WALK = [
  "I'm walkin' here! ...on a very small sidewalk.", 'Excuse me, I was pecking that bagel first.', 'Another day, another crumb. Thanks, capitalism.',
  'Is it me or are the rats getting richer?', 'My therapist says to stop doomscrolling the gutter.', "Don't look at me, I just work here. Under a bench.",
  'Mmm. Gum. Classic.', 'D\'oh! Wrong pizza crust.', 'I paid $9 for a seed. NINE.', 'Back in my day, we had twelve whole pigeons per statue.',
  'Sir, this is a crosswalk, not a runway.', 'Some days you\'re the windshield, some days you\'re the bug.', 'Rent is due and I live in a lamppost.',
  'Hey! Hey! Watch the feathers!', 'I heard the Baron owns a whole pretzel.', 'Why is the subway so loud and so damp?',
  'My cousin knows a guy who knows a taxi.', 'I tried salad once. Never again.', 'If you see the pizza guy, tell him I forgive him.',
  'Fugghedaboutit.', 'This city runs on coffee, crumbs, and spite.', 'Big Tony says the stashes are near the subway. Allegedly.',
  'Ay, I got my eye on you, pal.', 'Ooh, shiny. Oh, just a bottle cap.', "Everybody in this town thinks they're the main pigeon.",
];
const QUIP = [
  'Rat-tastic. You\'re welcome, New York.', 'Another one bites the crust.', 'Looks like you got... wing-ed.', 'With great wings comes great responsibility.',
  'That\'s gonna leave a mark. On the sidewalk. Mostly poop.', 'Billionaires hate this one weird trick.', 'Tax season came early.', 'Hasta la vista, vermin.',
  'Ay, I\'m beatin\' here!', 'Eat my feathers!', 'Your wealth has been... redistributed.', 'And THAT is why we don\'t gate-keep the bread.',
];
const RADIO = [
  ['WCOO 88.8', 'Caller says the pigeons are taking over. Caller is right. Next song!'],
  ['WCOO 88.8', 'Traffic update: honking. That is the update. Thank you.'],
  ['K-ROST 101', 'Remember folks, if you see a rat in a tiny suit, that is not a coincidence. That is a lawsuit.'],
  ['K-ROST 101', 'Brought to you by Rat Corp. Because you deserve less.'],
  ['Crumb FM', 'Coming up: a twelve-hour smooth jazz marathon of one guy dropping a spoon.'],
  ['Crumb FM', 'Weather: sunset, with a ninety percent chance of sunset.'],
  ['Hot Dog Hour', 'Is it a sandwich? Is it a taco? Why are you asking a radio?'],
  ['WCOO 88.8', 'Local pigeon saves city, demands crumbs. Experts say fair.'],
  ['Talk 1010', 'I say the real crime is the price of a bagel. Lines are open. Nobody call.'],
];

export class Barks {
  constructor({ camera, npcs, player, getMode, vehicles }) {
    this.camera = camera; this.npcs = npcs; this.player = player; this.getMode = getMode; this.vehicles = vehicles;
    this.root = document.createElement('div'); this.root.id = 'barks'; document.body.appendChild(this.root);
    this.bubbles = []; this.t = 3; this.v = new THREE.Vector3(); this.radioT = 6; this.last = '';
    this.cap = document.createElement('div'); this.cap.id = 'barkcap'; document.body.appendChild(this.cap); this.capT = 0;
  }
  caption(html, sec = 4) { this.cap.innerHTML = html; this.cap.style.opacity = 1; this.capT = sec; }
  quip() { this.caption('<b>You:</b> ' + pick(QUIP), 2.6); }
  bubble(n, text) {
    if (this.bubbles.length >= 2) return;
    const el = document.createElement('div'); el.className = 'bark'; el.textContent = text; this.root.appendChild(el);
    this.bubbles.push({ n, el, t: 3.4 });
  }
  update(dt) {
    const mode = this.getMode(), P = this.player, show = mode === 'street' || mode === 'driving';
    this.root.style.display = show ? 'block' : 'none'; if (!show) { this.cap.style.opacity = 0; return; }
    this.capT -= dt; if (this.capT <= 0) this.cap.style.opacity = 0;
    this.t -= dt;
    if (this.t <= 0 && mode === 'street') {
      this.t = 4 + Math.random() * 5;
      const n = this.npcs.nearest(P.x, P.z, 13);
      if (n && !this.bubbles.some((b) => b.n === n)) { let s; do s = pick(WALK); while (s === this.last); this.last = s; this.bubble(n, s); }
    }
    if (mode === 'driving') {
      this.radioT -= dt;
      if (this.radioT <= 0) { this.radioT = 16 + Math.random() * 8; const [st, line] = pick(RADIO); this.caption(`📻 <b>${st}</b> — ${line}`, 6); }
    } else this.radioT = Math.min(this.radioT, 8);
    for (let i = this.bubbles.length - 1; i >= 0; i--) {
      const b = this.bubbles[i]; b.t -= dt;
      const n = b.n; const v = this.v.set(n.x, (n.y || 0) + 2.6, n.z).project(this.camera);
      const visible = n.shown && v.z < 1 && Math.abs(v.x) < 1.1 && Math.abs(v.y) < 1.1;
      if (b.t <= 0 || !n.shown) { b.el.remove(); this.bubbles.splice(i, 1); continue; }
      b.el.style.opacity = visible ? Math.min(1, b.t) : 0;
      b.el.style.transform = `translate(-50%,-100%) translate(${(v.x * 0.5 + 0.5) * innerWidth}px,${(-v.y * 0.5 + 0.5) * innerHeight}px)`;
    }
  }
}
