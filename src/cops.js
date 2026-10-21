// NYPD pigeons: patrol the sidewalks. Cause trouble near one (run over pedestrians, wreck street furniture)
// and he gives chase; catch you and you pay a fine. Outrun him or lose him in a shop and he gives up.
import * as THREE from 'three';
import { Pigeon } from './pigeon.js';

const COUNT = 7, WALK = 1.8, CHASE = 7.2, NOTICE = 45, FINE = 15;

export class Cops {
  /** o: { scene, world, player, getMode(), speedOf(), toast, coins(n), getCoins(), sfx, audio } */
  constructor(o) {
    this.o = o; this.list = []; this.fines = 0;
    this.group = new THREE.Group(); o.scene.add(this.group);
    const doors = o.world.shopDoors;
    for (let i = 0; i < COUNT && doors.length; i++) {
      const d = doors[Math.floor((i + 0.5) * doors.length / COUNT) % doors.length];
      const tx = -d.nz, tz = d.nx;
      const p = new Pigeon({
        plumage: 3, scale: 1.2,
        look: { hat: { type: 'cap', color: 0x14213d }, body: { type: 'suit', color: 0x16264a }, face: { type: 'shades' }, neck: { type: 'bowtie', color: 0x111111 } },
      });
      this.group.add(p.root);
      this.list.push({ p, x: d.x + d.nx * 1.8, z: d.z + d.nz * 1.8, y: 0.15, yaw: 0, tx, tz, dir: i % 2 ? 1 : -1, home: { x: d.x + d.nx * 1.8, z: d.z + d.nz * 1.8 }, state: 'patrol', t: 0, pause: 0 });
    }
  }

  blocked(x, z) {
    for (const bx of this.o.world.colliders.boxes) if (x > bx.minX - 0.3 && x < bx.maxX + 0.3 && z > bx.minZ - 0.3 && z < bx.maxZ + 0.3 && (bx.h ?? 9) > 0.6) return true;
    return false;
  }

  /** Something illegal happened at the player's position. */
  crime(kind) {
    const { player } = this.o;
    for (const c of this.list) {
      if (c.state === 'chase') continue;
      if (Math.hypot(c.x - player.x, c.z - player.z) < NOTICE) {
        c.state = 'chase'; c.t = 0;
        this.o.toast(`NYPD pigeon: "Stop right there!" (${kind})`, 3); this.o.sfx('bad');
        this.o.audio.honk?.(c.x, c.z, 'taxi');
        break;
      }
    }
  }

  get chasing() { return this.list.some((c) => c.state === 'chase'); }

  update(dt, mode) {
    const { player, world } = this.o;
    const outdoor = mode === 'street' || mode === 'driving';
    for (const c of this.list) {
      let speed = 0;
      const dx = player.x - c.x, dz = player.z - c.z, dp = Math.hypot(dx, dz);
      if (c.state === 'chase') {
        c.t += dt;
        if (!outdoor || (mode === 'street' && c.t > 25) || dp > 85 || c.t > 40) {
          c.state = 'patrol'; c.t = 0;
          if (outdoor) this.o.toast('You lost the cop.', 2);
        } else {
          c.yaw = Math.atan2(dx, dz); speed = CHASE;
          const catchR = mode === 'driving' ? 4 : 1.6, slow = mode === 'driving' ? this.o.speedOf() < 3.5 : true;
          if (dp < catchR && slow) {
            const fine = Math.min(FINE, this.o.getCoins());
            this.fines++;
            if (fine > 0) this.o.coins(-fine);
            this.o.toast(fine > 0 ? `Busted! The NYPD pigeon fined you ${fine} coins.` : 'Busted! A stern warning from the NYPD pigeon.', 3.5);
            this.o.sfx('lose');
            for (const q of this.list) if (q.state === 'chase') { q.state = 'patrol'; q.pause = 4; }
          }
        }
      } else {
        c.pause -= dt;
        if (c.pause <= 0) {
          const off = (c.x - c.home.x) * c.tx + (c.z - c.home.z) * c.tz;
          if (off * c.dir > 11) { c.dir = -c.dir; c.pause = 2 + Math.random() * 3; }
          else { c.yaw = Math.atan2(c.tx * c.dir, c.tz * c.dir); speed = WALK; }
        }
      }
      if (speed) {
        const nx = c.x + Math.sin(c.yaw) * speed * dt, nz = c.z + Math.cos(c.yaw) * speed * dt;
        if (!this.blocked(nx, nz)) { c.x = nx; c.z = nz; }
        else if (c.state === 'patrol') { c.dir = -c.dir; c.pause = 1; }
        else {   // chasing: slide along whichever axis is free
          if (!this.blocked(nx, c.z)) c.x = nx; else if (!this.blocked(c.x, nz)) c.z = nz;
        }
      }
      c.y = world.groundHeight(c.x, c.z);
      c.p.root.position.set(c.x, c.y, c.z);
      c.p.root.rotation.y = c.yaw;
      c.p.update(dt, speed);
    }
  }
}
