// Burglars: masked pigeons that sneak up to shop doors, rob them, then run along the sidewalk.
// Hit them with poop bombs (2 hits) before they get away to earn a bounty.
import * as THREE from 'three';
import { Pigeon } from './pigeon.js';

const HP = 60, BOUNTY = 25;

export class Burglars {
  /** o: { scene, world, player, toast, coins(n), sfx(n), audio } */
  constructor(o) {
    this.o = o; this.list = []; this.t = 8; this.caught = 0;
    this.group = new THREE.Group(); o.scene.add(this.group);
    this.targets = [];   // for Combat bombs: {x,y,z,r,hit(dmg,fx,fz)}
  }

  spawn() {
    const { world, player } = this.o;
    const doors = world.shopDoors.filter((d) => { const dd = Math.hypot(d.x - player.x, d.z - player.z); return dd > 45 && dd < 140; });
    if (!doors.length) return;
    const door = doors[Math.floor(Math.random() * doors.length)];
    // start a few metres along the sidewalk, away from the door
    const tx = -door.nz, tz = door.nx, side = Math.random() < 0.5 ? 1 : -1;
    const sx = door.x + tx * side * 14 + door.nx * 1.5, sz = door.z + tz * side * 14 + door.nz * 1.5;
    const p = new Pigeon({
      plumage: 5, scale: 1.1,
      look: { face: { type: 'shades' }, hat: { type: 'beanie', color: 0x151515 }, body: { type: 'jersey', color: 0x222222 }, back: { type: 'backpack', color: 0x8a6a2a } },
    });
    this.group.add(p.root);
    const b = { p, x: sx, z: sz, y: 0, yaw: 0, hp: HP, state: 'sneak', door, tx, tz, side, t: 0, life: 0, dead: 0, alerted: false };
    b.target = { get x() { return b.x; }, get z() { return b.z; }, get y() { return b.y; }, r: 0.8, b, hit: (dmg, fx, fz) => this.hit(b, dmg, fx, fz) };
    this.targets.push(b.target);
    this.list.push(b);
  }

  hit(b, dmg, fx, fz) {
    if (b.state === 'dead' || b.state === 'gone') return;
    b.hp -= dmg; this.o.audio.hurt?.();
    if (b.hp > 0) { b.state = 'flee'; b.t = 0; return; }
    b.state = 'dead'; b.dead = 0; this.caught++;
    this.o.coins(BOUNTY); this.o.sfx('win');
    this.o.toast(`Burglar caught!  +${BOUNTY} coins`, 3);
  }

  remove(b) {
    this.group.remove(b.p.root);
    this.targets.splice(this.targets.indexOf(b.target), 1);
    this.list.splice(this.list.indexOf(b), 1);
  }

  update(dt, active) {
    const { player, world } = this.o;
    if (active) {
      this.t -= dt;
      if (this.t <= 0 && this.list.length < 2) { this.t = 40 + Math.random() * 40; this.spawn(); }
    }
    for (let i = this.list.length - 1; i >= 0; i--) {
      const b = this.list[i];
      b.life += dt;
      const dp = Math.hypot(player.x - b.x, player.z - b.z);
      let speed = 0;
      if (b.state === 'sneak') {
        const gx = b.door.x + b.door.nx * 1.4, gz = b.door.z + b.door.nz * 1.4;
        const dx = gx - b.x, dz = gz - b.z, d = Math.hypot(dx, dz);
        if (dp < 7) { b.state = 'flee'; b.t = 0; }
        else if (d < 0.7) { b.state = 'rob'; b.t = 0; b.yaw = Math.atan2(-b.door.nx, -b.door.nz); }
        else { b.yaw = Math.atan2(dx, dz); speed = 3.2; }
        if (!b.alerted && dp < 38) { b.alerted = true; this.o.toast('A burglar is sneaking up on a shop! Throw poop bombs at him', 4); }
      } else if (b.state === 'rob') {
        b.t += dt; b.p.startPeck?.();
        if (b.t > 3) { b.state = 'flee'; b.t = 0; if (dp < 60) this.o.toast('He grabbed the loot and ran!', 2.2); this.o.sfx('bad'); }
      } else if (b.state === 'flee') {
        b.t += dt;
        const away = Math.sign((b.x - player.x) * b.tx + (b.z - player.z) * b.tz) || b.side;
        const gy = Math.atan2(b.tx * away, b.tz * away);
        b.yaw = gy; speed = 8.2;
        if (b.t > 22 || dp > 130) { if (dp < 90) this.o.toast('The burglar got away...', 2); b.state = 'gone'; }
      } else if (b.state === 'dead') {
        b.dead += dt; b.p.root.rotation.z = Math.min(Math.PI / 2, b.dead * 7);
        if (b.dead > 4) { this.remove(b); continue; }
      } else if (b.state === 'gone') { this.remove(b); continue; }

      if (speed) {
        const nx = b.x + Math.sin(b.yaw) * speed * dt, nz = b.z + Math.cos(b.yaw) * speed * dt;
        if (!this.blocked(nx, nz)) { b.x = nx; b.z = nz; }
        else if (b.state === 'flee') { b.tx = -b.tx; b.tz = -b.tz; b.side = -b.side; }
      }
      b.y = world.groundHeight(b.x, b.z);
      b.p.root.position.set(b.x, b.y, b.z);
      if (b.state !== 'dead') b.p.root.rotation.y = b.yaw;
      if (b.state !== 'dead') b.p.update(dt, speed);
    }
  }

  blocked(x, z) {
    const c = this.o.world.colliders;
    for (const bx of c.boxes) if (x > bx.minX - 0.3 && x < bx.maxX + 0.3 && z > bx.minZ - 0.3 && z < bx.maxZ + 0.3 && (bx.h ?? 9) > 0.6) return true;
    return false;
  }
}
