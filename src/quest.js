// The main goal: billionaire rats (Rat Corp) have stashed their loot in the subway.
// 1) Wreck every Rat Corp stash with poop bombs.  2) Defeat the Rat Tycoon.  Progress is saved.
import * as THREE from 'three';
import { N, roadCenter, rand } from './config.js';

const NEST_HP = 100, NEST_COUNT = 5, KING_HP = 320, NEST_REWARD = 40, KING_REWARD = 300;
const GOLD = new THREE.MeshStandardMaterial({ color: 0xf2c230, roughness: 0.3, metalness: 0.8, emissive: 0x6a4a00, emissiveIntensity: 0.4 });
const CASH = new THREE.MeshStandardMaterial({ color: 0x3f9b56, roughness: 0.8 });
const BAG = new THREE.MeshStandardMaterial({ color: 0xc9a56a, roughness: 0.9 });
const DARK = new THREE.MeshStandardMaterial({ color: 0x2a2530, roughness: 0.8 });
const RED = new THREE.MeshBasicMaterial({ color: 0xff3030, transparent: true, opacity: 0.35, depthWrite: false, side: THREE.DoubleSide });

function signTexture(text) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 96;
  const g = c.getContext('2d'); g.fillStyle = '#14121a'; g.fillRect(0, 0, 256, 96);
  g.strokeStyle = '#f2c230'; g.lineWidth = 6; g.strokeRect(5, 5, 246, 86);
  g.fillStyle = '#f2c230'; g.font = '900 38px system-ui, Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(text, 128, 40);
  g.font = '700 20px system-ui, Arial'; g.fillText('OFFSHORE STASH', 128, 74);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

function buildNest() {
  const g = new THREE.Group();
  for (let i = 0; i < 6; i++) { const c = new THREE.Mesh(new THREE.CylinderGeometry(0.55 - i * 0.03, 0.55 - i * 0.03, 0.12, 14), GOLD); c.position.set(0.3, 0.1 + i * 0.12, 0.2); c.rotation.y = i * 0.5; g.add(c); }
  for (let i = 0; i < 5; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.18, 0.28), CASH); b.position.set(-0.7 + (i % 3) * 0.1, 0.1 + Math.floor(i / 2) * 0.18, -0.2 + (i % 2) * 0.1); b.rotation.y = i * 0.7; g.add(b); }
  const bag = new THREE.Mesh(new THREE.SphereGeometry(0.5, 12, 10), BAG); bag.position.set(-0.1, 0.45, 0.7); bag.scale.set(1, 1.1, 1); g.add(bag);
  const neck = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.3, 8), BAG); neck.position.set(-0.1, 1.05, 0.7); g.add(neck);
  const post = new THREE.Mesh(new THREE.BoxGeometry(0.1, 2.2, 0.1), DARK); post.position.set(0.9, 1.1, -0.5); g.add(post);
  const sign = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 0.675), new THREE.MeshBasicMaterial({ map: signTexture('RAT CORP'), side: THREE.DoubleSide })); sign.position.set(0.9, 2.3, -0.5); g.add(sign);
  const ring = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.6, 30, 24, 1, true), RED); ring.position.y = 15; g.add(ring);
  g.userData.ring = ring; g.userData.sign = sign;
  g.traverse((o) => { if (o.isMesh && o !== ring) o.castShadow = true; });
  return g;
}

export class Quest {
  /** o: { scene, world, player, combat, fx, toast, coins, sfx, save, audio, targets(array shared with combat.extraTargets) } */
  constructor(o) {
    this.o = o;
    this.group = new THREE.Group(); o.scene.add(this.group);
    const q = o.save.data.quest = o.save.data.quest || { nests: [], won: false };
    this.q = q;
    // pick spread-out subway entrances for the stashes
    const subs = o.world.subways.map((s, i) => ({ s, i }));
    const sp = o.world.spawn;
    subs.sort((a, b) => Math.hypot(a.s.x - sp.x, a.s.z - sp.z) - Math.hypot(b.s.x - sp.x, b.s.z - sp.z));
    const chosen = [subs.find((e) => Math.hypot(e.s.x - sp.x, e.s.z - sp.z) > 40) || subs[0]];
    while (chosen.length < Math.min(NEST_COUNT, subs.length)) {
      let best = null, bd = -1;
      for (const e of subs) { if (chosen.includes(e)) continue; const d = Math.min(...chosen.map((c) => Math.hypot(c.s.x - e.s.x, c.s.z - e.s.z))); if (d > bd) { bd = d; best = e; } }
      chosen.push(best);
    }
    this.total = chosen.length;
    this.nests = chosen.map((e, k) => {
      const s = e.s, x = s.x + s.openX * 5.5, z = s.z + s.openZ * 5.5;
      const mesh = buildNest(); mesh.position.set(x, o.world.groundHeight(x, z), z); mesh.rotation.y = Math.atan2(s.openX, s.openZ);
      const n = { id: s.id, k, x, z, y: mesh.position.y, hp: NEST_HP, mesh, spawnT: rand(2, 6), alive: !q.nests.includes(s.id), t: 0 };
      n.target = { x, z, y: mesh.position.y + 0.4, r: 1.2, hit: (dmg) => this.hitNest(n, dmg) };
      mesh.visible = n.alive;
      this.group.add(mesh);
      if (n.alive) o.targets.push(n.target);
      return n;
    });
    this.king = null; this.kingT = 0; this.summonT = 6; this.t = 0;
    if (q.won) this.state = 'won';
    else if (this.aliveNests() === 0) { this.state = 'king'; }
    else this.state = 'nests';
    this.hud = document.getElementById('quest'); this.hudText = document.getElementById('qtext'); this.hudArrow = document.getElementById('qarrow');
  }

  aliveNests() { return this.nests.filter((n) => n.alive).length; }

  intro() {
    if (this.state === 'nests' && this.aliveNests() === this.total) this.o.toast(`Billionaire rats have hidden their loot in the subway! Wreck ${this.total} Rat Corp stashes with poop bombs (F).`, 6);
  }

  hitNest(n, dmg) {
    if (!n.alive) return;
    n.hp -= dmg; n.t = 0.25;
    this.o.fx.sparks(n.x, n.y + 0.6, n.z, 10); this.o.audio.clang?.(n.x, n.z, 0.8);
    if (n.hp > 0) return;
    n.alive = false; n.mesh.visible = false;
    const i = this.o.targets.indexOf(n.target); if (i >= 0) this.o.targets.splice(i, 1);
    this.q.nests.push(n.id); this.o.save.write();
    this.o.fx.sparks(n.x, n.y + 0.8, n.z, 30); this.o.fx.smoke(n.x, n.y + 0.5, n.z, 1, 8); this.o.audio.crash?.(0.6);
    this.o.coins(NEST_REWARD); this.o.sfx('win');
    const left = this.aliveNests();
    if (left > 0) this.o.toast(`Rat Corp stash wrecked!  +${NEST_REWARD} coins   (${this.total - left}/${this.total})`, 3.5);
    else { this.state = 'king'; this.o.toast('All stashes wrecked! The Rat Tycoon is furious and is coming for you!', 5); this.spawnKing(); }
  }

  spawnKing() {
    const { player, combat } = this.o;
    let best = null;
    for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) {
      const x = roadCenter(i), z = roadCenter(j), d = Math.hypot(x - player.x, z - player.z);
      if (d > 45 && d < 110 && (!best || d < best.d)) best = { x, z, d };
    }
    best = best || { x: player.x + 60, z: player.z, d: 60 };
    const r = combat.spawnAt(best.x, best.z); if (!r) return;
    r.king = true; r.hp = KING_HP; r.bite = 12; r.spd = 5.2; r.state = 'chase';
    r.mesh = r.mesh.clone(); combat.group.add(r.mesh);           // own mesh so the hat can be gold
    r.mesh.scale.setScalar(5);
    const hat = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.16, 12), GOLD); hat.position.set(0, 0.42, 0.27); r.mesh.add(hat);
    const chain = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.012, 6, 14), GOLD); chain.position.set(0, 0.2, 0.2); chain.rotation.x = Math.PI / 2; r.mesh.add(chain);
    this.king = r;
  }

  onKilled(r) {
    if (!r.king) return;
    this.state = 'won'; this.q.won = true; this.o.save.write();
    this.o.coins(KING_REWARD); this.o.sfx('win');
    this.o.fx.sparks(r.x, 1.5, r.z, 60); this.o.fx.smoke(r.x, 1, r.z, 1, 14);
    this.o.toast(`THE RAT TYCOON IS BANKRUPT! You saved the city!  +${KING_REWARD} coins`, 8);
    this.o.onWin?.();
  }

  update(dt, active) {
    const { player, combat } = this.o;
    this.t += dt;
    // stash animation + rat spawning
    for (const n of this.nests) {
      if (!n.alive) continue;
      n.mesh.userData.ring.material.opacity = 0.22 + 0.12 * Math.sin(this.t * 3 + n.k);
      n.mesh.scale.setScalar(1 + (n.t > 0 ? n.t * 0.5 : 0)); if (n.t > 0) n.t -= dt;
      n.mesh.userData.sign.lookAt(player.x, n.mesh.userData.sign.getWorldPosition(new THREE.Vector3()).y, player.z);
      if (!active) continue;
      const d = Math.hypot(player.x - n.x, player.z - n.z);
      n.spawnT -= dt;
      if (n.spawnT <= 0 && d < 80) {
        n.spawnT = rand(8, 13);
        if (combat.rats.filter((r) => r.state !== 'dead').length < 6) { const r = combat.spawnAt(n.x + rand(-2, 2), n.z + rand(-2, 2)); if (r) r.state = d < 30 ? 'chase' : 'roam'; }
      }
    }
    // the Tycoon calls for backup
    if (this.state === 'king' && this.king && this.king.state !== 'dead' && active) {
      this.summonT -= dt;
      if (this.summonT <= 0) {
        this.summonT = 9;
        if (combat.rats.filter((r) => r.state !== 'dead').length < 7) for (let i = 0; i < 2; i++) { const r = combat.spawnAt(this.king.x + rand(-3, 3), this.king.z + rand(-3, 3)); if (r) r.state = 'chase'; }
      }
    }
    if (this.state === 'king' && !this.king && active) this.spawnKing();   // loaded a save with all stashes cleared
    this.updateHud();
  }

  target() {
    if (this.state === 'nests') { let b = null, bd = 1e9; for (const n of this.nests) if (n.alive) { const d = Math.hypot(n.x - this.o.player.x, n.z - this.o.player.z); if (d < bd) { bd = d; b = n; } } return b && { x: b.x, z: b.z, d: bd }; }
    if (this.state === 'king' && this.king && this.king.state !== 'dead') return { x: this.king.x, z: this.king.z, d: Math.hypot(this.king.x - this.o.player.x, this.king.z - this.o.player.z) };
    return null;
  }

  updateHud() {
    const el = this.hud; if (!el) return;
    let text;
    if (this.state === 'nests') text = `Wreck the Rat Corp stashes  ${this.total - this.aliveNests()}/${this.total}`;
    else if (this.state === 'king') text = this.king ? `Defeat the Rat Tycoon!  HP ${Math.max(0, Math.round(100 * this.king.hp / KING_HP))}%` : 'The Rat Tycoon is coming...';
    else text = 'City saved! Free play';
    const t = this.target();
    if (this.hudText.textContent !== text) this.hudText.textContent = text;
    if (t) {
      const p = this.o.player, y = p.camYaw, fx = -Math.sin(y), fz = -Math.cos(y), rx = Math.cos(y), rz = -Math.sin(y);
      const dx = t.x - p.x, dz = t.z - p.z;
      this.hudArrow.style.display = 'inline-block';
      this.hudArrow.style.transform = `rotate(${Math.atan2(dx * rx + dz * rz, dx * fx + dz * fz)}rad)`;
      this.hudArrow.title = `${Math.round(t.d)} m`;
      const dtxt = ` (${Math.round(t.d)} m)`; if (!this.hudText.textContent.endsWith('m)')) this.hudText.textContent += dtxt; else this.hudText.textContent = this.hudText.textContent.replace(/ \(\d+ m\)$/, dtxt);
    } else this.hudArrow.style.display = 'none';
  }
}
