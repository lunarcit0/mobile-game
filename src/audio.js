// Fully synthesized audio (Web Audio): no sound files needed.
// Start it from a user gesture (the Play button), then call update() every frame.
import { clamp, lerp, rng, rand } from './config.js';
import { CITY_B64 } from './cityloop.js';

const MASTER = 0.55;

const NUM_CAR_VOICES = 8;

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.ready = false;
    this.muted = false;
    this.L = { x: 0, z: 0, yaw: 0 };       // listener
    this.mode = 'street';
    this.shopKind = 0;
    this.sirenT = rand(12, 25);
    this.chatT = 0; this.hornT = 1; this.jackT = rand(25, 60); this.brakeT = rand(10, 30); this.babT = 0;
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
    this.master.gain.value = this.muted ? 0 : MASTER;
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
    // urban-canyon echo: a generated impulse response, fed by every positional one-shot
    const irLen = Math.floor(sr * 2.4), ir = ctx.createBuffer(2, irLen, sr);
    for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < irLen; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / irLen, 2.6); }
    this.rev = ctx.createConvolver(); this.rev.buffer = ir;
    const revOut = ctx.createGain(); revOut.gain.value = 0.55; this.rev.connect(revOut); revOut.connect(this.master);
    this.revSend = ctx.createGain(); this.revSend.gain.value = 0.35; this.revSend.connect(this.rev);
    this.buildBeds();
    this.buildVoices();
    this.ready = true;
    ctx.resume?.();
    this.startLoop();
  }

  /** The pre-rendered city bed: decoded once, then played as overlapping, cross-faded copies so it never has a seam. */
  startLoop() {
    const ctx = this.ctx;
    this.bedLP = ctx.createBiquadFilter(); this.bedLP.type = 'lowpass'; this.bedLP.frequency.value = 20000;
    this.bedGain = ctx.createGain(); this.bedGain.gain.value = 0;
    this.bedLP.connect(this.bedGain); this.bedGain.connect(this.master);
    const bin = atob(CITY_B64), bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    const done = (buf) => { this.cityBuf = buf; this.loopNext = ctx.currentTime + 0.05; this.loopFirst = true; this.scheduleLoop(); this.loopTimer = setInterval(() => this.scheduleLoop(), 400); };
    const p = ctx.decodeAudioData(bytes.buffer, done, () => {});
    p?.catch?.(() => {});
  }

  scheduleLoop() {
    const ctx = this.ctx, b = this.cityBuf; if (!b) return;
    const XF = 3, TRIM = 0.06, dur = b.duration - TRIM * 2;
    while (this.loopNext < ctx.currentTime + 2.5) {
      const t = this.loopNext;
      const src = ctx.createBufferSource(); src.buffer = b;
      const g = ctx.createGain();
      src.connect(g); g.connect(this.bedLP);
      const up = new Float32Array(48), dn = new Float32Array(48);
      for (let i = 0; i < 48; i++) { up[i] = Math.sin((i / 47) * Math.PI / 2); dn[i] = Math.cos((i / 47) * Math.PI / 2); }
      if (this.loopFirst) { g.gain.setValueAtTime(1, t); this.loopFirst = false; }
      else g.gain.setValueCurveAtTime(up, t, XF);
      g.gain.setValueAtTime(1, t + XF + 0.001);
      g.gain.setValueCurveAtTime(dn, t + dur - XF, XF);
      src.start(t, TRIM, dur);
      this.loopNext = t + dur - XF;
    }
  }

  setMuted(m) {
    this.muted = m;
    if (this.ready) this.master.gain.setTargetAtTime(m ? 0 : MASTER, this.ctx.currentTime, 0.05);
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
    // the oscillators run all the time, so they go through a gate (0..1 from an LFO) and then the level control
    const gate = ctx.createGain(); gate.gain.value = 0.5; gate.connect(this.buzzGain);
    const bz = this.osc('sawtooth', 96); const bzf = ctx.createBiquadFilter(); bzf.type = 'lowpass'; bzf.frequency.value = 900;
    bz.connect(bzf); bzf.connect(gate);
    const lfoG = ctx.createGain(); lfoG.gain.value = 0.5; const lfo = this.osc('square', 0.35);
    lfo.connect(lfoG); lfoG.connect(gate.gain);
    // engine for the car the player drives
    this.engine = this.makeVoice();
    this.engine.o1.type = 'triangle';
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
    // nearby cars: soft filtered-noise rumble (tyres + engine), no oscillators, so there is no buzzing drone
    this.carVoices = [];
    for (let i = 0; i < NUM_CAR_VOICES; i++) {
      const ctx = this.ctx, l = this.layer(this.brown, 'lowpass', 300, 0.7);
      const p = ctx.createStereoPanner(); l.gain.disconnect(); l.gain.connect(p); p.connect(this.master);
      this.carVoices.push({ f: l.filter, g: l.gain, p });
    }
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
    const driving = S.mode === 'driving';
    sm(B.rumble.gain.gain, street ? 0.035 : 0, 0.4);
    sm(B.wash.gain.gain, 0, 0.4);
    sm(B.hiss.gain.gain, 0, 0.4);
    if (this.bedGain) {
      const driving_ = S.mode === 'driving';
      sm(this.bedGain.gain, street ? (driving_ ? 2.4 : 3.8) : shop ? 1.4 : sub ? 1.0 : 0, 0.5);
      sm(this.bedLP.frequency, street ? (driving_ ? 2200 : 20000) : shop ? 520 : sub ? 800 : 400, 0.4);
    }
    sm(this.revSend.gain, street ? 0.4 : (sub ? 0.7 : 0.12), 0.5);

    const foodyRoom = shop && [0, 1, 2, 3, 5, 9, 10].includes(this.shopKind);

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
      this.engine.g.gain.setTargetAtTime(0.06 + 0.04 * Math.abs(D.throttle) + 0.015 * rpm, now, 0.08);
      sm(B.skid.gain.gain, D.slip > 0.5 ? 0.09 * clamp(D.slip - 0.5, 0, 1) * clamp(sp / 8, 0, 1) : 0, 0.05);
      // wind
      sm(B.wash.gain.gain, 0.05 + 0.1 * clamp(sp / 20, 0, 1), 0.2);
    } else {
      this.engine.g.gain.setTargetAtTime(0, now, 0.08);
      sm(B.skid.gain.gain, 0, 0.05);
    }

    // --- occasional far-away siren and ambient pigeon coos on the street
    if (street) {
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
      v.f.frequency.setTargetAtTime(Math.min(sp.cutoff, (heavy ? 220 : 300) + c.v * 28), now, 0.1);
      v.g.gain.setTargetAtTime(0.16 * sp.gain * (heavy ? 1.4 : 1) * Math.min(1, c.v / 8), now, 0.1);
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
    g.connect(p); p.connect(this.master); p.connect(this.revSend);
    return { g, gain, p, end: () => { setTimeout(() => { try { g.disconnect(); p.disconnect(); } catch (e) { /* ignore */ } }, 4000); } };
  }

  honk(x, z, type = 'sedan', lenOverride = null) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    if (x != null) {   // cap overlapping positional horns so a jam is busy, not a wall of noise
      this.honkLog = (this.honkLog || []).filter((h) => t - h < 1.5);
      if (this.honkLog.length >= 2) return;
      this.honkLog.push(t);
    }
    const s = this.shot(x, z, 16, 0.9);
    if (!s) return;
    const pairs = { taxi: [466, 587], sedan: [415, 523], suv: [370, 466], van: [330, 415], bus: [250, 311] };
    const [f1, f2] = pairs[type] || pairs.sedan;
    const len = lenOverride ?? (type === 'bus' ? 0.75 : (x == null ? 0.35 : 0.3 + rng() * 0.4));
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = x == null ? 2400 : Math.min(2400, this.spatial(x, z, 16).cutoff * 1.4);
    lp.connect(s.g);
    for (const f of [f1, f2]) {
      const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = f; o.connect(lp);
      o.start(t); o.stop(t + len + 0.1);
    }
    s.g.gain.setValueAtTime(0, t);
    s.g.gain.linearRampToValueAtTime(0.1 * s.gain, t + 0.015);
    s.g.gain.setValueAtTime(0.1 * s.gain, t + len);
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
    s.g.gain.linearRampToValueAtTime(0.045, t + 4);
    s.g.gain.linearRampToValueAtTime(0.06, t + 6);
    s.g.gain.linearRampToValueAtTime(0, t + dur);
    p.pan.setValueAtTime(-0.8, t); p.pan.linearRampToValueAtTime(0.8, t + dur);
    o.start(t); lfo.start(t); o.stop(t + dur + 0.1); lfo.stop(t + dur + 0.1);
    s.end();
  }

  chirp(x, z, { f0, f1, dur = 0.09, vol = 0.18, type = 'triangle', vib = 0, ref = 10, lp = 6000 } = {}) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime, sh = this.shot(x, z, ref, 1);
    if (!sh) return;
    const o = ctx.createOscillator(); o.type = type;
    o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    if (vib) { const v = ctx.createOscillator(), vg = ctx.createGain(); v.frequency.value = 38; vg.gain.value = vib; v.connect(vg); vg.connect(o.frequency); v.start(t); v.stop(t + dur + 0.05); }
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = lp;
    o.connect(f); f.connect(sh.g);
    sh.g.gain.setValueAtTime(0, t); sh.g.gain.linearRampToValueAtTime(vol * sh.gain, t + 0.01); sh.g.gain.linearRampToValueAtTime(0, t + dur);
    o.start(t); o.stop(t + dur + 0.05); sh.end();
  }

  ratSqueak(x, z, hurt = false) {
    if (hurt) this.chirp(x, z, { f0: 2600, f1: 1300, dur: 0.16, vol: 0.3, vib: 140 });
    else { this.chirp(x, z, { f0: 2400, f1: 3800, dur: 0.07, vol: 0.28 }); setTimeout(() => this.chirp(x, z, { f0: 2700, f1: 4200, dur: 0.07, vol: 0.24 }), 110); }
  }
  ratDie(x, z) { this.chirp(x, z, { f0: 3200, f1: 600, dur: 0.3, vol: 0.32, vib: 220 }); }
  hurt() {   // the pigeon gets bitten: a squawk and a thump
    this.chirp(null, null, { f0: 760, f1: 360, dur: 0.22, vol: 0.2, type: 'sawtooth', vib: 60, lp: 1800 });
    this.burst(null, null, { dur: 0.1, type: 'lowpass', freq: 300, q: 0.7, vol: 0.4 });
  }
  splat(x, z) {
    this.burst(x, z, { dur: 0.14, type: 'lowpass', freq: 800, q: 0.7, vol: 0.55, ref: 10 });
    this.burst(x, z, { dur: 0.05, type: 'bandpass', freq: 1800, q: 1.2, vol: 0.3, ref: 10 });
  }
  plop() { this.chirp(null, null, { f0: 460, f1: 150, dur: 0.12, vol: 0.28, type: 'sine' }); }

  clang(x, z, v = 1) {   // metal pole getting hit
    this.chirp(x, z, { f0: 640, f1: 560, dur: 0.5, vol: 0.28 * v, type: 'square', lp: 2200, ref: 14 });
    this.chirp(x, z, { f0: 990, f1: 900, dur: 0.35, vol: 0.18 * v, type: 'triangle', ref: 14 });
    this.burst(x, z, { dur: 0.08, type: 'highpass', freq: 2500, q: 0.7, vol: 0.5 * v, ref: 14 });
  }
  splash(x, z) { this.burst(x, z, { dur: 0.5, type: 'bandpass', freq: 2800, q: 0.6, vol: 0.45, ref: 16 }); }
  bonk() {   // cartoon "bonk" + squawk when a pigeon gets bumped
    this.chirp(null, null, { f0: 420, f1: 110, dur: 0.2, vol: 0.34, type: 'sine' });
    setTimeout(() => this.chirp(null, null, { f0: 1100, f1: 560, dur: 0.22, vol: 0.18, type: 'sawtooth', vib: 90, lp: 2400 }), 60);
  }
  coin() {
    this.chirp(null, null, { f0: 988, f1: 988, dur: 0.07, vol: 0.2, type: 'square', lp: 4000 });
    setTimeout(() => this.chirp(null, null, { f0: 1319, f1: 1319, dur: 0.22, vol: 0.2, type: 'square', lp: 4000 }), 70);
  }
  ding() { this.chirp(null, null, { f0: 1760, f1: 1760, dur: 0.5, vol: 0.2, type: 'sine' }); }
  /** Sound effects used by the mini-games overlay. */
  sfx(name) {
    switch (name) {
      case 'click': this.chirp(null, null, { f0: 700, f1: 520, dur: 0.05, vol: 0.14, type: 'square', lp: 3000 }); break;
      case 'good': this.chirp(null, null, { f0: 660, f1: 990, dur: 0.12, vol: 0.2, type: 'triangle' }); break;
      case 'bad': this.chirp(null, null, { f0: 220, f1: 130, dur: 0.22, vol: 0.22, type: 'sawtooth', lp: 1200 }); break;
      case 'coin': this.coin(); break;
      case 'tick': this.chirp(null, null, { f0: 880, f1: 880, dur: 0.08, vol: 0.16, type: 'square', lp: 3000 }); break;
      case 'jump': this.chirp(null, null, { f0: 300, f1: 700, dur: 0.12, vol: 0.16, type: 'sine' }); break;
      case 'win': [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => this.chirp(null, null, { f0: f, f1: f, dur: 0.18, vol: 0.2, type: 'triangle' }), i * 110)); break;
      case 'lose': [392, 330, 262].forEach((f, i) => setTimeout(() => this.chirp(null, null, { f0: f, f1: f * 0.98, dur: 0.25, vol: 0.2, type: 'triangle' }), i * 160)); break;
      default: break;
    }
  }

  /** A passer-by talking: a few vowel-like syllables from a sawtooth through two formant filters. */
  chatter() {
    if (!this.ready) return;
    const ctx = this.ctx, t0 = ctx.currentTime;
    const ang = Math.random() * Math.PI * 2, d = 3 + Math.random() * 20;
    const s = this.shot(this.L.x + Math.cos(ang) * d, this.L.z + Math.sin(ang) * d, 7, 1);
    if (!s) return;
    const female = Math.random() < 0.45, k = female ? 1.14 : 1;
    const f0 = female ? 185 + Math.random() * 70 : 92 + Math.random() * 40;
    const V = [[800, 1200], [550, 1800], [320, 2300], [500, 900], [360, 750], [650, 1500]];
    const o = ctx.createOscillator(); o.type = 'sawtooth';
    const fa = ctx.createBiquadFilter(), fb = ctx.createBiquadFilter();
    fa.type = fb.type = 'bandpass'; fa.Q.value = 6; fb.Q.value = 7;
    const ga = ctx.createGain(), gb = ctx.createGain(); ga.gain.value = 1; gb.gain.value = 0.55;
    o.connect(fa); o.connect(fb); fa.connect(ga); fb.connect(gb); ga.connect(s.g); gb.connect(s.g);
    const n = 3 + Math.floor(Math.random() * 6);
    let t = 0, pitch = f0;
    for (let i = 0; i < n; i++) {
      const dur = 0.1 + Math.random() * 0.16, v = V[Math.floor(Math.random() * V.length)];
      pitch = f0 * (0.9 + Math.random() * 0.25 - (i > n - 3 ? 0.08 : 0));
      fa.frequency.setValueAtTime(v[0] * k, t0 + t); fb.frequency.setValueAtTime(v[1] * k, t0 + t);
      o.frequency.setValueAtTime(pitch, t0 + t); o.frequency.linearRampToValueAtTime(pitch * (0.94 + Math.random() * 0.12), t0 + t + dur);
      s.g.gain.setValueAtTime(0, t0 + t);
      s.g.gain.linearRampToValueAtTime(0.3 * s.gain * (0.6 + Math.random() * 0.4), t0 + t + 0.03);
      s.g.gain.linearRampToValueAtTime(0, t0 + t + dur);
      t += dur + 0.02 + Math.random() * 0.05 + (Math.random() < 0.15 ? 0.18 : 0);
    }
    o.start(t0); o.stop(t0 + t + 0.05); s.end();
  }

  /** A horn somewhere down the avenue; sometimes a double tap or an angry burst. */
  cityHonk() {
    const ang = Math.random() * Math.PI * 2, d = 16 + Math.random() * 75;
    const x = this.L.x + Math.cos(ang) * d, z = this.L.z + Math.sin(ang) * d;
    const type = ['taxi', 'taxi', 'taxi', 'sedan', 'suv', 'van', 'bus'][Math.floor(Math.random() * 7)];
    const r = Math.random();
    const n = r < 0.12 ? 3 : r < 0.4 ? 2 : 1;
    for (let i = 0; i < n; i++) setTimeout(() => this.honk(x, z, type, n === 3 ? 0.18 : n === 2 ? 0.2 : 0.35 + Math.random() * 0.6), i * (n === 3 ? 260 : 340));
  }

  jackhammer() {
    const ang = Math.random() * Math.PI * 2, d = 35 + Math.random() * 55;
    const x = this.L.x + Math.cos(ang) * d, z = this.L.z + Math.sin(ang) * d;
    const n = 30 + Math.floor(Math.random() * 40);
    for (let i = 0; i < n; i++) setTimeout(() => {
      this.burst(x, z, { dur: 0.05, type: 'bandpass', freq: 900 + Math.random() * 400, q: 1, vol: 0.5, ref: 18 });
      this.burst(x, z, { dur: 0.04, type: 'lowpass', freq: 180, q: 0.8, vol: 0.5, ref: 18 });
    }, i * (66 + Math.random() * 16));
  }

  busBrake() {
    const ang = Math.random() * Math.PI * 2, d = 8 + Math.random() * 22;
    this.burst(this.L.x + Math.cos(ang) * d, this.L.z + Math.sin(ang) * d, { dur: 0.8, type: 'highpass', freq: 3200, q: 0.5, vol: 0.5, ref: 12 });
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
