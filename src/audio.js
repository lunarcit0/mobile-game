// Fully synthesized audio (Web Audio): no sound files needed.
// Start it from a user gesture (the Play button), then call update() every frame.
import { clamp, lerp, rng, rand } from './config.js';

const NUM_CAR_VOICES = 8;

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.ready = false;
    this.muted = false;
    this.L = { x: 0, z: 0, yaw: 0 };       // listener
    this.mode = 'street';
    this.shopKind = 0;
    this.sirenT = rand(25, 50);
    this.coT = 0;
    this.t = 0;
    this.trainSrc = null;
  }

  /* ------------------------------------------------------------- setup */

  start() {
    if (this.ready) { this.ctx.resume?.(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    const ctx = this.ctx = new AC();
    this.master = ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.85;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 4;
    this.analyser = ctx.createAnalyser();
    this.analyser.fftSize = 1024;
    this.master.connect(comp); comp.connect(this.analyser); this.analyser.connect(ctx.destination);

    // noise buffers
    const sr = ctx.sampleRate, len = sr * 3;
    this.white = ctx.createBuffer(1, len, sr);
    this.brown = ctx.createBuffer(1, len, sr);
    const w = this.white.getChannelData(0), b = this.brown.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const x = Math.random() * 2 - 1;
      w[i] = x;
      last = (last + 0.02 * x) / 1.02;
      b[i] = last * 3.5;
    }
    this.buildBeds();
    this.buildVoices();
    this.ready = true;
    ctx.resume?.();
  }

  setMuted(m) {
    this.muted = m;
    if (this.ready) this.master.gain.setTargetAtTime(m ? 0 : 0.85, this.ctx.currentTime, 0.05);
  }
  toggleMute() { this.setMuted(!this.muted); return this.muted; }

  noise(buf = this.white) {
    const s = this.ctx.createBufferSource();
    s.buffer = buf; s.loop = true;
    s.start(0, Math.random() * 2);
    return s;
  }

  /** noise -> filter -> gain -> dest; returns {gain, filter} */
  layer(buf, type, freq, q, dest = this.master) {
    const ctx = this.ctx;
    const src = this.noise(buf);
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = ctx.createGain(); g.gain.value = 0;
    src.connect(f); f.connect(g); g.connect(dest);
    return { gain: g, filter: f, src };
  }

  osc(type, freq, dest) {
    const o = this.ctx.createOscillator();
    o.type = type; o.frequency.value = freq;
    o.start();
    if (dest) o.connect(dest);
    return o;
  }

  /* -------------------------------------------------------- continuous */

  buildBeds() {
    const ctx = this.ctx;
    // street
    this.bed = {
      rumble: this.layer(this.brown, 'lowpass', 190, 0.7),
      wash: this.layer(this.white, 'bandpass', 750, 0.35),
      hiss: this.layer(this.white, 'highpass', 5200, 0.5),
      sizzle: this.layer(this.white, 'bandpass', 5200, 1.2),          // hot dog cart
      steam: this.layer(this.white, 'highpass', 2600, 0.7),           // steam stack
      subRumble: this.layer(this.brown, 'lowpass', 110, 0.7),         // subway entrance
      subWhoosh: this.layer(this.white, 'bandpass', 380, 0.6),
      // rooms
      room: this.layer(this.brown, 'lowpass', 260, 0.6),
      roomHiss: this.layer(this.white, 'bandpass', 4300, 1.0),
      roomThump: this.layer(this.brown, 'lowpass', 160, 1.5),
      muffled: this.layer(this.white, 'lowpass', 420, 0.5),
      // subway station
      tunnel: this.layer(this.brown, 'lowpass', 130, 0.8),
      tunnelHiss: this.layer(this.white, 'bandpass', 1600, 0.5),
    };
    this.hum = this.ctx.createGain(); this.hum.gain.value = 0; this.hum.connect(this.master);
    this.humOsc = this.osc('sine', 60, this.hum);
    this.humOsc2 = this.osc('sine', 120, this.hum);
    // clipper/buzz for the barber shop, amplitude-modulated saw
    this.buzzGain = ctx.createGain(); this.buzzGain.gain.value = 0; this.buzzGain.connect(this.master);
    const bz = this.osc('sawtooth', 96); const bzf = ctx.createBiquadFilter(); bzf.type = 'lowpass'; bzf.frequency.value = 900;
    bz.connect(bzf); bzf.connect(this.buzzGain);
    const lfoG = ctx.createGain(); lfoG.gain.value = 0.5; const lfo = this.osc('square', 0.35);
    lfo.connect(lfoG); lfoG.connect(this.buzzGain.gain);   // gates the buzz on/off a couple of times a second
    // engine for the car the player drives
    this.engine = this.makeVoice();
    this.skid = this.layer(this.white, 'bandpass', 1900, 6);
    this.bed.skid = this.skid;
  }

  makeVoice() {
    const ctx = this.ctx;
    const o1 = this.osc('sawtooth', 40), o2 = this.osc('square', 20);
    const g2 = ctx.createGain(); g2.gain.value = 0.6;
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 500; f.Q.value = 1.2;
    const g = ctx.createGain(); g.gain.value = 0;
    const p = ctx.createStereoPanner();
    o1.connect(f); o2.connect(g2); g2.connect(f); f.connect(g); g.connect(p); p.connect(this.master);
    return { o1, o2, f, g, p };
  }

  buildVoices() {
    this.carVoices = [];
    for (let i = 0; i < NUM_CAR_VOICES; i++) this.carVoices.push(this.makeVoice());
  }

  /* ----------------------------------------------------------- spatial */

  spatial(x, z, ref = 9) {
    const dx = x - this.L.x, dz = z - this.L.z;
    const d = Math.hypot(dx, dz);
    const rx = Math.cos(this.L.yaw), rz = -Math.sin(this.L.yaw);
    const pan = clamp((dx * rx + dz * rz) / Math.max(d, 2), -1, 1) * 0.9;
    const gain = 1 / Math.pow(1 + d / ref, 1.35);
    const cutoff = 400 + 6000 / (1 + d / 30);
    return { d, pan, gain, cutoff };
  }

  /* -------------------------------------------------------- per frame */

  update(dt, S) {
    if (!this.ready) return;
    const ctx = this.ctx, now = ctx.currentTime;
    this.t += dt;
    this.L.x = S.lx; this.L.z = S.lz; this.L.yaw = S.lyaw;
    this.mode = S.mode;
    const street = S.mode === 'street' || S.mode === 'driving';
    const shop = S.mode === 'shop', sub = S.mode === 'subway';
    const sm = (p, v, tc = 0.25) => p.setTargetAtTime(v, now, tc);
    const B = this.bed;

    // --- street bed (strength follows how busy the nearby traffic is)
    const busy = S.busy ?? 0.5;
    sm(B.rumble.gain.gain, street ? 0.34 + 0.12 * busy : 0, 0.4);
    sm(B.wash.gain.gain, street ? 0.04 + 0.05 * busy : 0, 0.4);
    sm(B.hiss.gain.gain, street ? 0.006 : 0, 0.4);
    B.wash.filter.frequency.setTargetAtTime(600 + 400 * Math.sin(this.t * 0.17) + 200 * busy, now, 0.5);

    // --- spot sounds that only exist on the street
    sm(B.sizzle.gain.gain, street ? 0.075 * clamp(1 - (S.cartD ?? 99) / 14, 0, 1) : 0);
    sm(B.steam.gain.gain, street ? 0.07 * clamp(1 - (S.ventD ?? 99) / 12, 0, 1) : 0);
    const sd = clamp(1 - (S.subwayD ?? 99) / 24, 0, 1);
    const whoosh = Math.max(0, Math.sin((this.t % 28) / 28 * Math.PI * 2 - 1.2)) ** 3;   // a train passes below every ~28 s
    sm(B.subRumble.gain.gain, street ? 0.12 * sd * (0.3 + whoosh) : 0);
    sm(B.subWhoosh.gain.gain, street ? 0.1 * sd * whoosh : 0);
    B.subWhoosh.filter.frequency.setTargetAtTime(250 + 500 * whoosh, now, 0.2);

    // --- inside a shop
    sm(B.muffled.gain.gain, shop ? 0.05 : 0, 0.4);
    sm(B.room.gain.gain, shop ? 0.16 : 0, 0.4);
    const k = this.shopKind;
    const foody = [0, 1, 2, 5, 9].includes(k);
    sm(B.roomHiss.gain.gain, shop ? (foody ? 0.03 : 0.006) : 0);
    sm(B.roomThump.gain.gain, shop && k === 6 ? 0.22 * (0.55 + 0.45 * Math.sin(this.t * 7.5)) : 0, 0.05); // washing machines
    sm(this.hum.gain, shop ? ([0, 4, 10].includes(k) ? 0.035 : 0.014) : (sub ? 0.02 : 0));
    this.humOsc.frequency.setTargetAtTime(k === 4 ? 100 : 60, now, 0.1);
    this.buzzGain.gain.value = shop && k === 11 ? 0.02 : 0;   // barber clippers (an LFO gates it on and off)

    // --- subway station
    sm(B.tunnel.gain.gain, sub ? 0.3 : 0, 0.4);
    sm(B.tunnelHiss.gain.gain, sub ? 0.012 : 0, 0.4);

    // --- car engines (nearest few cars, positional)
    this.updateCars(S, now, street);

    // --- engine of the car the player is driving
    const D = S.drive;
    if (D && S.mode === 'driving') {
      const sp = Math.abs(D.speed);
      const gearTop = [7, 12, 17, 24];
      let gear = 0; while (gear < 3 && sp > gearTop[gear]) gear++;
      const lo = gear === 0 ? 0 : gearTop[gear - 1];
      const rpm = clamp((sp - lo) / (gearTop[gear] - lo), 0, 1);
      const freq = 38 + rpm * 52 + gear * 6 + (D.throttle > 0 ? 6 : 0);
      this.engine.o1.frequency.setTargetAtTime(freq, now, 0.04);
      this.engine.o2.frequency.setTargetAtTime(freq * 0.5, now, 0.04);
      this.engine.f.frequency.setTargetAtTime(380 + rpm * 650 + (D.throttle > 0 ? 450 : 0), now, 0.06);
      this.engine.g.gain.setTargetAtTime(0.12 + 0.06 * Math.abs(D.throttle) + 0.02 * rpm, now, 0.08);
      sm(B.skid.gain.gain, D.slip > 0.5 ? 0.09 * clamp(D.slip - 0.5, 0, 1) * clamp(sp / 8, 0, 1) : 0, 0.05);
      // wind
      sm(B.wash.gain.gain, 0.05 + 0.1 * clamp(sp / 20, 0, 1), 0.2);
    } else {
      this.engine.g.gain.setTargetAtTime(0, now, 0.08);
      sm(B.skid.gain.gain, 0, 0.05);
    }

    // --- occasional far-away siren and ambient pigeon coos on the street
    if (street) {
      this.sirenT -= dt;
      if (this.sirenT <= 0) { this.siren(); this.sirenT = rand(70, 130); }
      this.coT -= dt;
      if (this.coT <= 0 && S.nearNpc) { this.coo(S.nearNpc.x, S.nearNpc.z); this.coT = rand(6, 20); }
    }
  }

  updateCars(S, now, street) {
    const cars = S.cars || [];
    // pick the nearest NUM_CAR_VOICES cars within 80 m
    const best = [];
    if (street) {
      for (let i = 0; i < cars.length; i++) {
        const c = cars[i];
        const dx = c.x - this.L.x, dz = c.z - this.L.z;
        const d2 = dx * dx + dz * dz;
        if (d2 > 6400) continue;
        if (best.length < NUM_CAR_VOICES) { best.push([d2, c]); best.sort((a, b) => a[0] - b[0]); }
        else if (d2 < best[best.length - 1][0]) { best[best.length - 1] = [d2, c]; best.sort((a, b) => a[0] - b[0]); }
      }
    }
    for (let i = 0; i < this.carVoices.length; i++) {
      const v = this.carVoices[i];
      const e = best[i];
      if (!e) { v.g.gain.setTargetAtTime(0, now, 0.1); continue; }
      const c = e[1];
      const sp = this.spatial(c.x, c.z, 7);
      const heavy = c.type === 'bus' || c.type === 'van';
      const base = heavy ? 26 : 34;
      const f = base + c.v * (heavy ? 2.4 : 3.0) + Math.sin(this.t * 9 + i) * 0.6;
      v.o1.frequency.setTargetAtTime(f, now, 0.1);
      v.o2.frequency.setTargetAtTime(f * 0.5, now, 0.1);
      v.f.frequency.setTargetAtTime(Math.min(sp.cutoff, 650 + c.v * 40), now, 0.1);
      v.g.gain.setTargetAtTime(0.05 * sp.gain * (heavy ? 1.5 : 1) * (0.5 + Math.min(1, c.v / 6) * 0.5), now, 0.1);
      v.p.pan.setTargetAtTime(sp.pan, now, 0.1);
    }
  }

  /* ------------------------------------------------------------- one-shots */

  /** Create a short enveloped gain node routed through pan/gain. */
  shot(x, z, ref = 9, vol = 1) {
    const ctx = this.ctx;
    const g = ctx.createGain(); g.gain.value = 0;
    const p = ctx.createStereoPanner();
    let gain = vol;
    if (x !== null && x !== undefined) {
      const sp = this.spatial(x, z, ref);
      gain = vol * sp.gain; p.pan.value = sp.pan;
    }
    if (gain < 0.004) return null;
    g.connect(p); p.connect(this.master);
    return { g, gain, p, end: () => { setTimeout(() => { try { g.disconnect(); p.disconnect(); } catch (e) { /* ignore */ } }, 4000); } };
  }

  honk(x, z, type = 'sedan') {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const s = this.shot(x, z, 16, 0.9);
    if (!s) return;
    const pairs = { taxi: [466, 587], sedan: [415, 523], suv: [370, 466], van: [330, 415], bus: [250, 311] };
    const [f1, f2] = pairs[type] || pairs.sedan;
    const len = type === 'bus' ? 0.75 : (x == null ? 0.35 : 0.3 + rng() * 0.4);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2400;
    lp.connect(s.g);
    for (const f of [f1, f2]) {
      const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = f; o.connect(lp);
      o.start(t); o.stop(t + len + 0.1);
    }
    s.g.gain.setValueAtTime(0, t);
    s.g.gain.linearRampToValueAtTime(0.16 * s.gain, t + 0.015);
    s.g.gain.setValueAtTime(0.16 * s.gain, t + len);
    s.g.gain.linearRampToValueAtTime(0, t + len + 0.05);
    s.end();
  }

  coo(x = null, z = null) {
    if (!this.ready) return;
    const ctx = this.ctx, t0 = ctx.currentTime;
    const s = this.shot(x, z, 6, x == null ? 0.7 : 0.5);
    if (!s) return;
    // "coo - OO - roo": three syllables of a gliding, vibrato'd triangle wave
    const o = ctx.createOscillator(); o.type = 'triangle';
    const vib = ctx.createOscillator(); vib.frequency.value = 22;
    const vg = ctx.createGain(); vg.gain.value = 9;
    vib.connect(vg); vg.connect(o.frequency);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900;
    o.connect(lp); lp.connect(s.g);
    const base = 270 + rng() * 40;
    const syl = [[0, 0.16, base, base * 1.35], [0.22, 0.34, base * 1.3, base * 1.55], [0.4, 0.28, base * 1.5, base * 1.05]];
    o.frequency.setValueAtTime(base, t0);
    let end = 0;
    for (const [dt, len, f0, f1] of syl) {
      o.frequency.setValueAtTime(f0, t0 + dt);
      o.frequency.linearRampToValueAtTime(f1, t0 + dt + len);
      s.g.gain.setValueAtTime(0, t0 + dt);
      s.g.gain.linearRampToValueAtTime(0.2 * s.gain, t0 + dt + 0.04);
      s.g.gain.linearRampToValueAtTime(0, t0 + dt + len);
      end = dt + len;
    }
    o.start(t0); vib.start(t0); o.stop(t0 + end + 0.05); vib.stop(t0 + end + 0.05);
    s.end();
  }

  burst(x, z, { dur = 0.03, type = 'highpass', freq = 2500, q = 0.7, vol = 0.05, ref = 6 } = {}) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const s = this.shot(x, z, ref, vol);
    if (!s) return;
    const src = ctx.createBufferSource(); src.buffer = this.white;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    src.connect(f); f.connect(s.g);
    s.g.gain.setValueAtTime(s.gain, t);
    s.g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.start(t, Math.random() * 2, dur + 0.02);
    s.end();
  }

  step(vol = 0.05) { this.burst(null, null, { dur: 0.03, freq: 2600 + rng() * 1200, vol }); }
  flap() { this.burst(null, null, { dur: 0.09, type: 'bandpass', freq: 550, q: 0.8, vol: 0.12 }); }
  pop() {   // crumb collected
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime, s = this.shot(null, null, 1, 0.25);
    const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.setValueAtTime(520, t); o.frequency.exponentialRampToValueAtTime(1040, t + 0.09);
    o.connect(s.g); s.g.gain.setValueAtTime(s.gain, t); s.g.gain.exponentialRampToValueAtTime(0.0001, t + 0.14);
    o.start(t); o.stop(t + 0.16); s.end();
  }
  bell() {  // shop door bell
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime, s = this.shot(null, null, 1, 0.22);
    for (const [f, d] of [[1568, 0], [2093, 0.16]]) {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f; o.connect(s.g);
      o.start(t + d); o.stop(t + d + 0.9);
    }
    s.g.gain.setValueAtTime(s.gain, t);
    s.g.gain.setValueAtTime(s.gain, t + 0.16);
    s.g.gain.exponentialRampToValueAtTime(0.0001, t + 1.0);
    s.end();
  }
  crash(intensity = 1) {
    this.burst(null, null, { dur: 0.35, type: 'lowpass', freq: 700, q: 0.7, vol: 0.5 * clamp(intensity, 0.2, 1.2) });
    this.burst(null, null, { dur: 0.12, type: 'bandpass', freq: 2200, q: 1.5, vol: 0.18 * clamp(intensity, 0.2, 1) });
  }
  door() { this.burst(null, null, { dur: 0.18, type: 'lowpass', freq: 400, q: 0.6, vol: 0.35 }); }

  siren() {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const s = this.shot(null, null, 1, 1);
    const p = s.p;
    const o = ctx.createOscillator(); o.type = 'sawtooth'; o.frequency.value = 900;
    const lfo = ctx.createOscillator(); lfo.type = 'sine'; lfo.frequency.value = 0.9;
    const lg = ctx.createGain(); lg.gain.value = 330;
    lfo.connect(lg); lg.connect(o.frequency);
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1100;
    o.connect(lp); lp.connect(s.g);
    const dur = 11;
    s.g.gain.setValueAtTime(0, t);
    s.g.gain.linearRampToValueAtTime(0.022, t + 4);
    s.g.gain.linearRampToValueAtTime(0.03, t + 6);
    s.g.gain.linearRampToValueAtTime(0, t + dur);
    p.pan.setValueAtTime(-0.8, t); p.pan.linearRampToValueAtTime(0.8, t + dur);
    o.start(t); lfo.start(t); o.stop(t + dur + 0.1); lfo.stop(t + dur + 0.1);
    s.end();
  }

  /** Subway train sounds, driven by the station interior. */
  train(event) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    if (event === 'arrive' || event === 'depart') {
      const dur = event === 'arrive' ? 8 : 7;
      const s = this.shot(null, null, 1, 1);
      const src = ctx.createBufferSource(); src.buffer = this.brown; src.loop = true;
      const f = ctx.createBiquadFilter(); f.type = 'lowpass';
      src.connect(f); f.connect(s.g);
      const up = event === 'depart';
      f.frequency.setValueAtTime(up ? 120 : 160, t);
      f.frequency.linearRampToValueAtTime(up ? 700 : 900, t + dur * (up ? 0.9 : 0.35));
      if (!up) f.frequency.linearRampToValueAtTime(220, t + dur);
      s.g.gain.setValueAtTime(0, t);
      s.g.gain.linearRampToValueAtTime(up ? 0.7 : 0.8, t + (up ? 1.5 : dur * 0.4));
      s.g.gain.linearRampToValueAtTime(0, t + dur);
      src.start(t, 0, dur + 0.1);
      if (!up) {   // brake screech
        const o = ctx.createOscillator(); o.type = 'sawtooth';
        o.frequency.setValueAtTime(2300, t + dur * 0.45); o.frequency.exponentialRampToValueAtTime(700, t + dur);
        const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1700; bp.Q.value = 3;
        o.connect(bp); bp.connect(s.g);
        o.start(t + dur * 0.45); o.stop(t + dur);
      }
      s.end();
    } else if (event === 'chime') {
      const s = this.shot(null, null, 1, 0.3);
      for (const [f, d] of [[880, 0], [659, 0.28]]) {
        const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = f; o.connect(s.g);
        o.start(t + d); o.stop(t + d + 0.5);
      }
      s.g.gain.setValueAtTime(s.gain, t);
      s.g.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
      s.end();
    }
  }

  /** Reset the room context when moving between street / shops / subway. */
  setContext(mode, kind = 0) { this.mode = mode; this.shopKind = kind; }

  /** Used by tests: rough output level 0..1. */
  level() {
    if (!this.ready) return 0;
    const a = new Float32Array(this.analyser.fftSize);
    this.analyser.getFloatTimeDomainData(a);
    let s = 0; for (const v of a) s += v * v;
    return Math.sqrt(s / a.length);
  }
}
