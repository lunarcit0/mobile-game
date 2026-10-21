import { W, H, INK, clamp, lerp, rnd, rint, pick, easeOutBack, easeOutCubic, easeInOut, mix, rr, paint, ell, circ, poly, txt, vgrad, star, coinIcon, heart, drawPigeon, Game } from './mg_core.js';

// ============================================================ 1) PIZZA PARLOR RUSH
const PZ = {
  DURATION: 60, STATION_TIME: 12, BELT_SPEED: 420, MAX_TOPS: 6,
  PTS_OK: 10, PTS_BAD: 5, PTS_PERFECT: 15, MAX_TIME_BONUS: 12, COIN_DIV: 4, COIN_MAX: 60,
  CX: 400, CY: 305, R: 88, OVEN_X: 868,
};
const TOPS = ['pepperoni', 'mushroom', 'olive', 'pepper', 'pineapple'];
const TOP_NAME = { pepperoni: 'Pepperoni', mushroom: 'Mushroom', olive: 'Olive', pepper: 'Pepper', pineapple: 'Pineapple' };
const BINS = [
  { id: 'red', kind: 'sauce', label: 'Tomato' }, { id: 'white', kind: 'sauce', label: 'Garlic' },
  { id: 'cheese', kind: 'cheese', label: 'Cheese' },
  { id: 'pepperoni', kind: 'top', label: 'Pepperoni' }, { id: 'mushroom', kind: 'top', label: 'Mushroom' },
  { id: 'olive', kind: 'top', label: 'Olives' }, { id: 'pepper', kind: 'top', label: 'Peppers' }, { id: 'pineapple', kind: 'top', label: 'Pineapple' },
];
const BIN_X = (i) => 30 + i * 112;

function drawTop(c, type, x, y, s = 1, rot = 0) {
  c.save(); c.translate(x, y); c.rotate(rot); c.scale(s, s);
  if (type === 'pepperoni') {
    circ(c, 0, 0, 11, '#d63a2f', 2.5); circ(c, -3, -3, 1.8, '#a8241c', 0); circ(c, 4, 2, 2, '#a8241c', 0); circ(c, -2, 5, 1.5, '#a8241c', 0);
  } else if (type === 'mushroom') {
    rr(c, -3.5, 0, 7, 9, 2); paint(c, '#f1e4cc', 2);
    c.beginPath(); c.ellipse(0, 0, 11, 8.5, 0, Math.PI, 0); c.closePath(); paint(c, '#c99a62', 2.5);
    circ(c, -4, -3, 1.3, '#e5c493', 0);
  } else if (type === 'olive') {
    c.beginPath(); c.moveTo(8.5, 0); c.arc(0, 0, 8.5, 0, 6.283); c.moveTo(3.4, 0); c.arc(0, 0, 3.4, 0, 6.283, true);
    c.fillStyle = '#2e2b33'; c.fill('evenodd'); c.lineWidth = 2; c.strokeStyle = INK; c.stroke();
  } else if (type === 'pepper') {
    c.lineCap = 'round'; c.beginPath(); c.arc(0, 4, 10, Math.PI * 1.1, Math.PI * 1.9);
    c.strokeStyle = INK; c.lineWidth = 8.5; c.stroke(); c.strokeStyle = '#46b83f'; c.lineWidth = 5; c.stroke();
  } else if (type === 'pineapple') {
    c.rotate(0.5); rr(c, -8, -7, 16, 14, 3); paint(c, '#ffd93a', 2.5);
    c.strokeStyle = '#e8a912'; c.lineWidth = 1.5; c.beginPath(); c.moveTo(-3, -5); c.lineTo(-3, 5); c.moveTo(3, -5); c.lineTo(3, 5); c.stroke();
  }
  c.restore();
}
function sauceFill(c, kind, r) {
  const g = c.createRadialGradient(-r * 0.2, -r * 0.2, r * 0.1, 0, 0, r);
  if (kind === 'red') { g.addColorStop(0, '#f0553f'); g.addColorStop(1, '#c42b22'); } else { g.addColorStop(0, '#fffaf0'); g.addColorStop(1, '#f1e6c6'); }
  return g;
}

class Pizza extends Game {
  constructor(mg) {
    super(mg, 'pizza', 'Pizza Parlor Rush', '#e8452c');
    this.dur = PZ.DURATION; this.timeLeft = PZ.DURATION; this.introPose = 'stand';
    this.help = ['Match the order ticket!', 'Click a bin, then click the pizza', 'to add sauce, cheese and toppings.', 'Press SEND IT (Enter) when done.', 'Right: +10   Wrong: -5   Perfect: bonus!'];
    this.sel = null; this.nPizza = 0; this.perfect = 0; this.cur = null; this.outs = []; this.chefCheer = 0; this.orderNo = 0; this.shipped = 0;
  }
  reset() {
    this.timeLeft = PZ.DURATION; this.score = 0; this.sel = null; this.outs = []; this.nPizza = 0; this.perfect = 0; this.shipped = 0; this.orderNo = 0;
    this.cur = this.newPizza();
  }
  makeOrder() {
    const r = Math.random();
    const nt = this.orderNo < 2 ? 1 : this.orderNo < 5 ? rint(1, 2) : rint(1, 3);
    const tops = []; const pool = TOPS.slice();
    for (let i = 0; i < nt; i++) tops.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    return { sauce: r < 0.62 ? 'red' : r < 0.87 ? 'white' : null, cheese: Math.random() < 0.78, tops };
  }
  newPizza() {
    this.orderNo++;
    const dots = []; for (let i = 0; i < 46; i++) { const a = Math.random() * 6.283, d = Math.sqrt(Math.random()) * 0.78; dots.push([Math.cos(a) * d, Math.sin(a) * d, rnd(0, 1)]); }
    return { x: -130, y: PZ.CY, ph: 'in', t: 0, left: PZ.STATION_TIME, order: this.makeOrder(), sauce: null, sauceT: 0, cheese: false, cheeseT: 0, tops: [], dots, pulse: 0, scale: 1, spin: 0 };
  }
  scorePizza(p) {
    const o = p.order; let s = 0, bad = 0, miss = 0;
    const os = o.sauce || null, ps = p.sauce || null;
    if (os) { if (ps === os) s += PZ.PTS_OK; else { miss++; if (ps) bad++; } } else if (ps) bad++;
    if (o.cheese) { if (p.cheese) s += PZ.PTS_OK; else miss++; } else if (p.cheese) bad++;
    for (const t of o.tops) { if (p.tops.some((q) => q.type === t)) s += PZ.PTS_OK; else miss++; }
    bad += p.tops.filter((q) => !o.tops.includes(q.type)).length;
    s -= PZ.PTS_BAD * bad;
    const perfect = bad === 0 && miss === 0;
    if (perfect) s += PZ.PTS_PERFECT + Math.floor(clamp(p.left / PZ.STATION_TIME, 0, 1) * PZ.MAX_TIME_BONUS);
    return { pts: s, perfect, bad };
  }
  ship(auto) {
    const p = this.cur; if (!p || p.ph !== 'station') return;
    p.ph = 'out'; p.res = this.scorePizza(p); this.sfx('click');
    this.cur = this.timeLeft > 0.5 ? this.newPizza() : null;
    this.outs.push(p);
    if (auto) this.pop(p.x, p.y - 60, 'Time!', '#ffb347', 30);
  }
  updatePlay(dt) {
    const p = this.cur;
    if (p) {
      if (p.ph === 'in') { p.t += dt; p.x = lerp(-130, PZ.CX, easeOutCubic(p.t / 0.9)); if (p.t >= 0.9) { p.ph = 'station'; p.x = PZ.CX; } }
      else if (p.ph === 'station') { p.left -= dt; if (p.left <= 0) this.ship(true); }
      p.sauceT = Math.min(1, p.sauceT + dt * 4); p.cheeseT = Math.min(1, p.cheeseT + dt * 4); p.pulse = Math.max(0, p.pulse - dt * 4);
      for (const t of p.tops) t.age += dt;
    }
    for (const o of this.outs) {
      o.x += PZ.BELT_SPEED * dt; o.scale = lerp(1, 0.55, clamp((o.x - PZ.CX) / (PZ.OVEN_X - PZ.CX), 0, 1)); o.spin += dt * 6;
      if (!o.done && o.x >= PZ.OVEN_X) {
        o.done = true; const r = o.res; this.score = Math.max(0, this.score + r.pts); this.shipped++;
        if (r.perfect) { this.perfect++; this.pop(PZ.OVEN_X - 40, 200, 'PERFECT! +' + r.pts, '#7dff6a', 36); this.sfx('win'); }
        else if (r.pts > 0) { this.pop(PZ.OVEN_X - 40, 200, '+' + r.pts, '#ffe14a', 36); this.sfx('good'); }
        else { this.pop(PZ.OVEN_X - 40, 200, r.pts < 0 ? String(r.pts) : 'Blank!', '#ff7a6a', 34); this.sfx('bad'); }
        this.burst(PZ.OVEN_X, 300, 18, r.pts > 0 ? ['#ffd23c', '#ff8a2a', '#fff3b0'] : ['#888', '#aaa'], 220);
        this.chefCheer = 1;
      }
    }
    this.outs = this.outs.filter((o) => !o.done);
    this.chefCheer = Math.max(0, this.chefCheer - dt * 1.2);
  }
  place(x, y) {
    const p = this.cur; if (!p || p.ph !== 'station' || !this.sel) return false;
    const d = Math.hypot(x - p.x, y - p.y); if (d > PZ.R + 6) return false;
    const b = BINS.find((q) => q.id === this.sel);
    if (b.kind === 'sauce') { if (p.sauce === b.id) return true; p.sauce = b.id; p.sauceT = 0; this.sfx('click'); this.burst(p.x, p.y, 10, [b.id === 'red' ? '#d83a2c' : '#fff3d6'], 140); }
    else if (b.kind === 'cheese') { if (p.cheese) return true; p.cheese = true; p.cheeseT = 0; this.sfx('click'); this.burst(p.x, p.y, 10, ['#ffd860'], 140); }
    else {
      if (p.tops.length >= PZ.MAX_TOPS) { this.sfx('bad'); this.pop(p.x, p.y, 'Full!', '#ff7a6a', 26); return true; }
      let tx = x + rnd(-6, 6), ty = y + rnd(-6, 6); const dd = Math.hypot(tx - p.x, ty - p.y), lim = PZ.R * 0.82;
      if (dd > lim) { tx = p.x + (tx - p.x) * lim / dd; ty = p.y + (ty - p.y) * lim / dd; }
      p.tops.push({ type: b.id, dx: tx - p.x, dy: ty - p.y, rot: rnd(0, 6.283), age: 0 }); this.sfx('click');
    }
    p.pulse = 1; return true;
  }
  sendBtn() { return [PZ.OVEN_X - 10, 430, 190, 56]; }
  onDown(x, y) {
    for (let i = 0; i < BINS.length; i++) if (this.rect(BIN_X(i), 478, 102, 104, x, y)) { this.sel = BINS[i].id; this.sfx('click'); return; }
    const sb = this.sendBtn();
    if (this.hit(sb[0], sb[1], sb[2], sb[3], x, y)) { this.ship(false); return; }
    this.place(x, y);
  }
  onKey(code) { if (code === 'Enter' || code === 'Space') this.ship(false); }
  payout() { return clamp(Math.floor(this.score / PZ.COIN_DIV), 0, PZ.COIN_MAX); }
  extraLines(c) { txt(c, 'Pizzas: ' + this.shipped + '    Perfect: ' + this.perfect, 0, 6, 24, '#7a6a55', 'center', null); }

  drawPizzaBody(c, p) {
    c.save(); c.translate(p.x, p.y);
    const k = (p.scale || 1) * (1 + Math.sin(p.pulse * 3.14) * 0.05); c.scale(k, k);
    if (p.ph === 'out') c.rotate(Math.sin(p.spin) * 0.1);
    ell(c, 4, 8, PZ.R, PZ.R * 0.98, 'rgba(0,0,0,.22)', 0);
    circ(c, 0, 0, PZ.R, '#e8b865', 3.5);
    circ(c, 0, 0, PZ.R - 9, '#f6d891', 0);
    if (p.sauce) {
      const s = PZ.R * 0.84 * easeOutBack(p.sauceT);
      c.save(); c.beginPath();
      for (let i = 0; i <= 40; i++) { const a = i / 40 * 6.283, rr_ = s * (1 + Math.sin(a * 5 + 1) * 0.025); i ? c.lineTo(Math.cos(a) * rr_, Math.sin(a) * rr_) : c.moveTo(Math.cos(a) * rr_, Math.sin(a) * rr_); }
      c.closePath(); c.fillStyle = sauceFill(c, p.sauce, s); c.fill(); c.lineWidth = 2; c.strokeStyle = 'rgba(43,34,48,.55)'; c.stroke(); c.restore();
    }
    if (p.cheese) {
      const s = PZ.R * 0.78 * easeOutCubic(p.cheeseT);
      c.globalAlpha = 0.9; circ(c, 0, 0, s, '#ffd860', 0); c.globalAlpha = 1;
      for (const d of p.dots) { c.fillStyle = d[2] > 0.5 ? '#fff0a0' : '#f0b83a'; c.beginPath(); c.arc(d[0] * s / 0.78, d[1] * s / 0.78, 3.6, 0, 6.283); c.fill(); }
    }
    for (const t of p.tops) {
      const a = easeOutBack(clamp(t.age * 5, 0, 1)); c.globalAlpha = clamp(t.age * 8, 0, 1);
      drawTop(c, t.type, t.dx, t.dy - (1 - a) * 18, 0.95 * (1 + (1 - a) * 0.5), t.rot);
    }
    c.globalAlpha = 1; c.restore();
  }
  drawTicket(c) {
    const p = this.cur, o = p && p.order; const x = 20, y = 46, w = 300, h = 158;
    c.save(); c.translate(x, y); c.rotate(-0.012);
    rr(c, 0, 0, w, h, 8); paint(c, '#fffdf0', 3.5);
    c.fillStyle = '#e8452c'; c.fillRect(2, 2, w - 4, 26); txt(c, 'ORDER #' + (this.orderNo || 1), w / 2, 15, 18, '#fff', 'center', null);
    for (let i = 0; i < 11; i++) { c.fillStyle = '#fffdf0'; c.beginPath(); c.arc(i * 28 + 16, h + 1, 5, 0, 6.283); c.fill(); }
    if (o) {
      c.save(); c.translate(64, 88); circ(c, 0, 0, 34, '#e8b865', 2.5); circ(c, 0, 0, 29, '#f6d891', 0);
      if (o.sauce) { circ(c, 0, 0, 27, sauceFill(c, o.sauce, 27), 0); } if (o.cheese) { circ(c, 0, 0, 24, 'rgba(255,216,96,.9)', 0); }
      o.tops.forEach((t, i) => { const a = i * 2.1 + 0.6; drawTop(c, t, Math.cos(a) * 13, Math.sin(a) * 13, 0.7, a); });
      c.restore();
      const done1 = p.sauce === o.sauce;
      const lines = [['Sauce: ' + (o.sauce === 'red' ? 'Tomato' : o.sauce === 'white' ? 'Garlic' : 'None'), done1 && !!o.sauce], ['Cheese: ' + (o.cheese ? 'Yes' : 'No'), o.cheese && p.cheese]];
      lines.forEach((l, i) => { txt(c, l[0], 116, 54 + i * 26, 19, '#3b2f2f', 'left', null); if (l[1]) txt(c, '✓', 262, 54 + i * 26, 22, '#26b04a', 'center', null); });
      o.tops.forEach((t, i) => {
        const got = p.tops.some((q) => q.type === t); const ty = 108 + Math.floor(i / 2) * 0, tx = 116 + 0;
        const yy = 100 + i * 17;
        drawTop(c, t, 124, yy, 0.55); txt(c, TOP_NAME[t], 140, yy, 15, '#3b2f2f', 'left', null);
        if (got) txt(c, '✓', 262, yy, 18, '#26b04a', 'center', null);
      });
    }
    c.restore();
  }
  drawChef(c) {
    const cheer = this.chefCheer;
    const look = Object.assign({}, this.look); if (!look.hat || look.hat === 'none') look.hat = 'chef';
    drawPigeon(c, 868, 248 - Math.abs(Math.sin(this.t * 6)) * cheer * 14, 1.05, look, 'stand', this.t);
    // waving wing
    c.save(); c.translate(886, 188); c.rotate(-0.9 + Math.sin(this.t * 7) * 0.5);
    ell(c, 0, -10, 6, 14, mix(look.body || '#8a93a3', '#2b2230', 0.25), 2.5); c.restore();
  }
  drawScene(c) {
    // wall
    c.fillStyle = vgrad(c, 0, 215, '#ffd79a', '#ffb871'); c.fillRect(0, 0, W, 215);
    c.strokeStyle = 'rgba(160,80,40,.18)'; c.lineWidth = 2;
    for (let r = 0; r < 6; r++) { c.beginPath(); c.moveTo(0, r * 36); c.lineTo(W, r * 36); c.stroke(); for (let k = 0; k < 14; k++) { const bx = ((k * 80 + (r % 2) * 40) % W); c.beginPath(); c.moveTo(bx, r * 36); c.lineTo(bx, r * 36 + 36); c.stroke(); } }
    // pendant lamps
    for (const lx of [620, 740]) { c.strokeStyle = INK; c.lineWidth = 3; c.beginPath(); c.moveTo(lx, 0); c.lineTo(lx, 40); c.stroke(); c.beginPath(); c.arc(lx, 56, 22, Math.PI, 0); c.closePath(); paint(c, '#e8452c'); circ(c, lx, 62, 6, '#fff3b0', 2); }
    // oven
    rr(c, 780, 212, 170, 190, 12); paint(c, vgrad(c, 212, 402, '#9a5a3a', '#6e3b25'));
    c.beginPath(); c.moveTo(800, 400); c.lineTo(800, 300); c.arc(865, 300, 65, Math.PI, 0); c.lineTo(930, 400); c.closePath();
    paint(c, vgrad(c, 240, 400, '#ffb02e', '#ff5a1a'));
    for (let i = 0; i < 4; i++) { const fx = 820 + i * 28, fl = Math.sin(this.t * 8 + i * 1.7) * 6; ell(c, fx, 380 + fl * 0.3, 11, 24 + fl, '#ffd84a', 0); }
    // belt
    c.fillStyle = '#4b4752'; c.fillRect(0, 215, 790, 180);
    c.fillStyle = '#3a3640'; c.fillRect(0, 215, 790, 8); c.fillRect(0, 387, 790, 8);
    c.strokeStyle = 'rgba(255,255,255,.1)'; c.lineWidth = 4;
    const off = (this.t * 160) % 48; for (let i = -1; i < 18; i++) { c.beginPath(); c.moveTo(i * 48 + off, 223); c.lineTo(i * 48 + off, 387); c.stroke(); }
    c.fillStyle = INK; c.fillRect(0, 395, W, 4);
    // counter
    c.fillStyle = vgrad(c, 399, 600, '#c98643', '#9c6330'); c.fillRect(0, 399, W, 201);
    for (let i = 0; i < 48; i++) { c.fillStyle = i % 2 ? '#fff' : '#e8452c'; c.fillRect(i * 20, 440, 20, 12); }
    c.strokeStyle = INK; c.lineWidth = 2.5; c.strokeRect(-2, 440, W + 4, 12);
    this.drawBins(c);
    this.drawChef(c);
    for (const o of this.outs) this.drawPizzaBody(c, o);
    if (this.cur) this.drawPizzaBody(c, this.cur);
    if (this.state !== 'intro') this.drawTicket(c);
    if (this.cur && this.cur.ph === 'station' && this.state === 'play') {
      const k = this.cur.left / PZ.STATION_TIME;
      rr(c, PZ.CX - 90, 408, 180, 14, 7); paint(c, '#fff', 2.5);
      if (k > 0.02) { rr(c, PZ.CX - 88, 410, 176 * k, 10, 5); c.fillStyle = k > 0.3 ? '#3ab54a' : '#e8452c'; c.fill(); }
      const sb = this.sendBtn(); this.button(c, sb[0], sb[1], sb[2], sb[3], 'Send it!', '#2fb344');
    }
  }
  drawBins(c) {
    BINS.forEach((b, i) => {
      const x = BIN_X(i), y = 478, sel = this.sel === b.id; const lift = sel ? -8 + Math.sin(this.t * 8) * 2 : 0;
      c.save(); c.translate(x, y + lift);
      if (sel) { rr(c, -5, -5, 112, 114, 16); c.fillStyle = 'rgba(255,240,120,.8)'; c.fill(); }
      rr(c, 0, 18, 102, 86, 10); paint(c, vgrad(c, 18, 104, '#d9d3cc', '#a79f98'));
      rr(c, 6, 24, 90, 56, 8); paint(c, '#f4f1ed', 2);
      c.save(); c.beginPath(); rr(c, 6, 24, 90, 56, 8); c.clip();
      if (b.kind === 'sauce') { ell(c, 51, 50, 38, 20, b.id === 'red' ? '#d83a2c' : '#fff3d6', 2.5); ell(c, 40, 46, 10, 5, 'rgba(255,255,255,.5)', 0); }
      else if (b.kind === 'cheese') { for (let k = 0; k < 16; k++) { c.fillStyle = k % 2 ? '#fff0a0' : '#f0b83a'; c.fillRect(14 + (k * 29 % 70), 34 + (k * 17 % 36), 14, 4); } }
      else { for (let k = 0; k < 5; k++) drawTop(c, b.id, 24 + (k * 23 % 60), 40 + (k * 13 % 28), 0.95, k * 1.3); }
      c.restore();
      txt(c, b.label, 51, 92, 15, INK, 'center', null);
      if (b.kind === 'top') { } rr(c, 6, 0, 90, 20, 6); paint(c, b.kind === 'sauce' ? '#c9372b' : b.kind === 'cheese' ? '#f0b83a' : '#4a7fd0', 2.5);
      txt(c, b.kind === 'sauce' ? 'SAUCE' : b.kind === 'cheese' ? 'CHEESE' : 'TOPPING', 51, 10, 12, '#fff', 'center', null);
      c.restore();
    });
  }
  drawHud(c) {
    const k = this.timeLeft / PZ.DURATION;
    rr(c, 20, 12, 920, 20, 10); paint(c, '#fff', 3);
    if (k > 0.01) { rr(c, 23, 15, 914 * k, 14, 7); c.fillStyle = k > 0.25 ? '#3ab54a' : '#e8452c'; c.fill(); }
    txt(c, Math.ceil(this.timeLeft) + 's', 480, 22, 16, '#fff', 'center', INK, 3);
    txt(c, 'Score ' + Math.round(this.score), 340, 66, 30, '#fff', 'left');
    coinIcon(c, 352, 108, 14); txt(c, '× ' + this.payout(), 374, 108, 24, '#fff', 'left');
  }
}

// ============================================================ 2) SUBWAY RUN
const SW = {
  DURATION: 75, HEARTS: 3, SPEED0: 15, SPEED1: 27, RAMP: 70,
  K: 85, HZ: 170, CAMH: 4.1, LS: 2.7, ZFAR: 46,
  JUMP_V: 9.2, GRAV: 27, SLIDE_T: 0.62, LANE_RATE: 9,
  STUMBLE_T: 0.8, INVULN: 1.8, COIN_SCORE: 10, DIST_PER_COIN: 150, COIN_MAX: 80,
  MAGNET_T: 8, TRAIN_LEN: 7, TRAIN_H: 2.7, LOW_H: 0.75, OVER_BOT: 1.05, STAND_H: 1.7, SLIDE_H: 0.75,
};
const TRAIN_COLORS = ['#e24b4b', '#3a86d6', '#f0a020', '#35b58a', '#9a5fd0'];
const GRAF = ['#ff4fa3', '#3be0c8', '#ffe14a', '#7a5cff', '#ff8a2a', '#6bff6b'];

class Subway extends Game {
  constructor(mg) {
    super(mg, 'subway', 'Subway Run', '#2f6fd0');
    this.dur = SW.DURATION; this.timeLeft = SW.DURATION; this.introPose = 'run';
    this.help = ['Dodge trains and barriers, grab coins!', 'Arrows / A D: change lane', 'Up / W / Space: jump     Down / S: slide', 'Touch: swipe, or tap the left / right / middle', 'Jump low barriers, slide under bars.'];
    this.initRun();
  }
  initRun() {
    this.dist = 0; this.speedM = 1; this.lane = 0; this.lanePos = 0; this.jy = 0; this.jv = 0; this.slideT = 0; this.stumbleT = 0; this.invT = 0;
    this.hearts = SW.HEARTS; this.coinsGot = 0; this.obs = []; this.nextD = 18; this.magT = 0; this.nextMag = 300; this.ratT = 0; this.ratX = 0; this.pd = null; this.lastPat = '';
    this.overTitle = "Time's up!";
  }
  reset() { this.timeLeft = SW.DURATION; this.score = 0; this.initRun(); }
  get speed() { return (SW.SPEED0 + (SW.SPEED1 - SW.SPEED0) * clamp((SW.DURATION - this.timeLeft) / SW.RAMP, 0, 1)) * this.speedM; }
  spawn() {
    const l = rint(-1, 1); const others = [-1, 0, 1].filter((x) => x !== l);
    const diff = clamp((SW.DURATION - this.timeLeft) / SW.DURATION, 0, 1);
    let pats = ['coins', 'jump', 'slide', 'train', 'mixed', 'coins'];
    if (diff < 0.12) pats = ['coins', 'jump', 'coins', 'slide'];
    let p; do { p = pick(pats); } while (p === this.lastPat && Math.random() < 0.7);
    this.lastPat = p;
    const d = this.nextD, O = this.obs; let len = 8;
    const coinLine = (lane, n, d0, h = 0.9) => { for (let i = 0; i < n; i++) O.push({ k: 'coin', lane, d: d0 + i * 1.6, h, got: false }); };
    if (p === 'coins') { const n = rint(6, 10); coinLine(l, n, d); len = n * 1.6; if (Math.random() < 0.4) coinLine(others[0], 5, d + 2); }
    else if (p === 'jump') {
      O.push({ k: 'low', lane: l, d, len: 0.5 }); if (Math.random() < 0.45) O.push({ k: 'low', lane: others[0], d, len: 0.5 });
      for (let i = 0; i < 5; i++) { const u = (i - 2) / 2.2; O.push({ k: 'coin', lane: l, d: d - 3 + i * 1.5, h: 0.9 + (1 - u * u) * 1.2, got: false }); }
      len = 6;
    } else if (p === 'slide') {
      O.push({ k: 'over', lane: l, d, len: 0.5 }); if (Math.random() < 0.4) O.push({ k: 'over', lane: others[1], d, len: 0.5 });
      coinLine(l, 5, d - 4, 0.45); len = 6;
    } else if (p === 'train') {
      const two = diff > 0.2 && Math.random() < 0.5; O.push({ k: 'train', lane: l, d, len: SW.TRAIN_LEN, c: pick(TRAIN_COLORS) });
      if (two) O.push({ k: 'train', lane: others[0], d: d + rnd(0, 6), len: SW.TRAIN_LEN, c: pick(TRAIN_COLORS) });
      coinLine(two ? others[1] : pick(others), 8, d, 0.9); len = SW.TRAIN_LEN + 3;
    } else {
      O.push({ k: 'train', lane: l, d, len: SW.TRAIN_LEN, c: pick(TRAIN_COLORS) });
      O.push({ k: Math.random() < 0.5 ? 'low' : 'over', lane: others[0], d: d + 2, len: 0.5 });
      coinLine(others[1], 7, d, 0.9); len = SW.TRAIN_LEN + 3;
    }
    if (this.dist > this.nextMag) { O.push({ k: 'mag', lane: pick([-1, 0, 1]), d: d + len + 3, h: 1, got: false }); this.nextMag += 420; }
    this.nextD = d + len + 11 + this.speed * 0.85;
  }
  updatePlay(dt) {
    const sp = this.speed; this.dist += sp * dt;
    this.speedM = Math.min(1, this.speedM + dt * 0.5);
    while (this.nextD - this.dist < SW.ZFAR + 6) this.spawn();
    // lane + vertical
    const target = this.lane; const dl = target - this.lanePos; this.lanePos += Math.sign(dl) * Math.min(Math.abs(dl), SW.LANE_RATE * dt);
    if (this.jy > 0 || this.jv > 0) { this.jv -= SW.GRAV * dt; this.jy += this.jv * dt; if (this.jy <= 0) { this.jy = 0; this.jv = 0; this.sfx('tick'); } }
    if (this.slideT > 0) this.slideT -= dt;
    if (this.stumbleT > 0) this.stumbleT -= dt;
    if (this.invT > 0) this.invT -= dt;
    if (this.magT > 0) this.magT -= dt;
    if (this.ratT > 0) { this.ratT -= dt; this.ratX = lerp(this.ratX, this.lanePos * SW.LS * SW.K - 100, Math.min(1, dt * 5)); }
    const top = this.jy + (this.slideT > 0 && this.jy <= 0 ? SW.SLIDE_H : SW.STAND_H);
    for (const o of this.obs) {
      const z = o.d - this.dist + 1;
      if (o.k === 'coin' || o.k === 'mag') {
        if (o.got) continue;
        if (this.magT > 0 && o.k === 'coin' && z < 14 && z > 0.3) o.lane = lerp(o.lane, this.lanePos, Math.min(1, dt * 7));
        if (z > 0.6 && z < 1.5 && Math.abs(o.lane - this.lanePos) < 0.7 && o.h >= this.jy - 0.35 && o.h <= top + 0.35) {
          o.got = true;
          if (o.k === 'coin') { this.coinsGot++; this.sfx('coin'); this.pop(480 + this.lanePos * SW.LS * SW.K, 400, '+1', '#ffe14a', 26); this.burst(480 + this.lanePos * SW.LS * SW.K, 440, 5, ['#ffd23c', '#fff3b0'], 120, 300); }
          else { this.magT = SW.MAGNET_T; this.sfx('win'); this.pop(480, 330, 'MAGNET!', '#ff6bd6', 40); }
        }
        continue;
      }
      if (o.hit || this.invT > 0 || this.stumbleT > 0) continue;
      const near = Math.abs(o.lane - this.lanePos) < 0.78;
      const zf = z, zb = z + (o.len || 0.5);
      if (!near || zf > 1.35 || zb < 0.7) continue;
      let bad = false;
      if (o.k === 'train') bad = this.jy < SW.TRAIN_H + 0.2 || true;
      else if (o.k === 'low') bad = this.jy < SW.LOW_H;
      else if (o.k === 'over') bad = top > SW.OVER_BOT;
      if (bad) { o.hit = true; this.hurt(o.k === 'train'); }
    }
    this.obs = this.obs.filter((o) => o.d - this.dist + 1 > -9 || (o.len && o.d + o.len - this.dist + 1 > -2));
    this.obs = this.obs.filter((o) => (o.d + (o.len || 0)) - this.dist + 1 > -1);
    this.score = Math.floor(this.dist) + this.coinsGot * SW.COIN_SCORE;
  }
  hurt() {
    this.hearts--; this.stumbleT = SW.STUMBLE_T; this.invT = SW.INVULN; this.speedM = 0.5; this.ratT = 3.2; this.ratX = this.lanePos * SW.LS * SW.K - 150;
    this.shake(14); this.sfx('bad'); this.burst(480 + this.lanePos * SW.LS * SW.K, 430, 14, ['#fff', '#ffd23c', '#ff8a5a'], 220);
    this.pop(480 + this.lanePos * SW.LS * SW.K, 340, 'OUCH!', '#ff5a4a', 44);
    this.jy = 0; this.jv = 0; this.slideT = 0;
    if (this.hearts <= 0) { this.overTitle = 'Wiped out!'; this.finish(); }
  }
  act(a) {
    if (this.state !== 'play' || this.stumbleT > 0) return;
    if (a === 'L') { if (this.lane > -1) { this.lane--; this.sfx('click'); } }
    else if (a === 'R') { if (this.lane < 1) { this.lane++; this.sfx('click'); } }
    else if (a === 'U') { if (this.jy <= 0.001 && this.jv === 0) { this.jv = SW.JUMP_V; this.jy = 0.01; this.slideT = 0; this.sfx('jump'); } }
    else if (a === 'D') { if (this.jy > 0) this.jv = -14; else { this.slideT = SW.SLIDE_T; this.sfx('tick'); } }
  }
  onKey(code) {
    const m = { ArrowLeft: 'L', KeyA: 'L', ArrowRight: 'R', KeyD: 'R', ArrowUp: 'U', KeyW: 'U', Space: 'U', ArrowDown: 'D', KeyS: 'D' }[code];
    if (m) this.act(m);
  }
  onDown(x, y) { this.pd = { x, y, done: false }; }
  onMove(x, y) {
    const p = this.pd; if (!p || p.done) return; const dx = x - p.x, dy = y - p.y;
    if (Math.max(Math.abs(dx), Math.abs(dy)) > 38) { p.done = true; this.act(Math.abs(dx) > Math.abs(dy) ? (dx < 0 ? 'L' : 'R') : (dy < 0 ? 'U' : 'D')); }
  }
  onUp(x, y) {
    const p = this.pd; this.pd = null; if (!p || p.done) return;
    if (x < W / 3) this.act('L'); else if (x > W * 2 / 3) this.act('R'); else this.act('U');
  }
  payout() { return clamp(this.coinsGot + Math.floor(this.dist / SW.DIST_PER_COIN), 0, SW.COIN_MAX); }
  extraLines(c) { txt(c, Math.floor(this.dist) + ' m   ·   ' + this.coinsGot + ' coins picked up', 0, 8, 22, '#7a6a55', 'center', null); }

  P(wx, h, z) { const k = SW.K / z; return [480 + wx * k, SW.HZ + (SW.CAMH - h) * k]; }
  quad(c, a, b, cc, d, fill, lw = 2) { poly(c, [a, b, cc, d], fill, lw); }
  drawTunnel(c, D) {
    const { HZ } = SW;
    c.fillStyle = '#17132b'; c.fillRect(0, 0, W, H);
    // far glow
    const g = c.createRadialGradient(480, HZ, 2, 480, HZ, 140); g.addColorStop(0, 'rgba(255,240,200,.95)'); g.addColorStop(0.25, 'rgba(255,200,120,.45)'); g.addColorStop(1, 'rgba(255,200,120,0)');
    c.fillStyle = g; c.fillRect(300, HZ - 140, 360, 280);
    // ceiling + floor
    c.fillStyle = vgrad(c, 0, HZ, '#1f1a3a', '#2c2650'); c.fillRect(0, 0, W, HZ);
    c.fillStyle = vgrad(c, HZ, H, '#2b2840', '#3c364f'); c.fillRect(0, HZ, W, H - HZ);
    const T = 4, WX = 5.2, WH = 6;
    const first = Math.floor(D / T);
    for (let i = first + Math.ceil(SW.ZFAR / T); i >= first - 1; i--) {
      const z0 = Math.max(0.3, i * T - D + 1), z1 = Math.max(0.3, (i + 1) * T - D + 1); if (z1 <= 0.3) continue;
      const station = ((Math.floor(i / 10) % 3) === 2), far = i * T - D + 1 > 1.6;
      const base = station ? ['#8c7fc2', '#7a6db3'] : ['#3b3466', '#322c58'];
      for (const side of [-1, 1]) {
        const wx = side * WX;
        this.quad(c, this.P(wx, 0, z0), this.P(wx, 0, z1), this.P(wx, WH, z1), this.P(wx, WH, z0), base[(i + (side > 0 ? 1 : 0)) & 1], 0);
        // graffiti
        const seed = ((i * 2654435761) >>> 0) + (side > 0 ? 977 : 0);
        if (seed % 3 !== 0 && i * T - D + 1 > 2.2) {
          const col = GRAF[seed % GRAF.length], col2 = GRAF[(seed >> 3) % GRAF.length];
          const pts = [], pts2 = []; const cu = 0.5, cv = 2.4 + (seed % 5) * 0.2;
          for (let a = 0; a < 18; a++) { const an = a / 18 * 6.283; const u = cu + Math.cos(an) * 0.4 * (1 + 0.25 * Math.sin(an * 3 + seed)), v = cv + Math.sin(an) * 0.95 * (1 + 0.2 * Math.cos(an * 2)); pts.push(this.P(wx, v, lerp(z0, z1, u))); }
          for (let a = 0; a < 12; a++) { const an = a / 12 * 6.283; pts2.push(this.P(wx, cv + 0.1 + Math.sin(an) * 0.4, lerp(z0, z1, 0.5 + Math.cos(an) * 0.2))); }
          poly(c, pts, col, 2); poly(c, pts2, col2, 1.5);
          c.strokeStyle = '#fff'; c.lineWidth = 1.5; c.beginPath(); const a1 = this.P(wx, cv + 0.7, lerp(z0, z1, 0.2)), a2 = this.P(wx, cv + 0.7, lerp(z0, z1, 0.8)); c.moveTo(a1[0], a1[1]); c.lineTo(a2[0], a2[1]); c.stroke();
        }
        // wall lamp
        if (far) {
        const flash = (Math.sin(this.t * 9 + i * 1.7) > -0.2) || station;
        this.quad(c, this.P(wx, 4.9, lerp(z0, z1, 0.4)), this.P(wx, 4.9, lerp(z0, z1, 0.6)), this.P(wx, 5.3, lerp(z0, z1, 0.6)), this.P(wx, 5.3, lerp(z0, z1, 0.4)), flash ? '#fff7c2' : '#6a6490', 1);
        }
        // bottom stripe
        this.quad(c, this.P(wx, 0, z0), this.P(wx, 0, z1), this.P(wx, 0.5, z1), this.P(wx, 0.5, z0), '#4d4580', 0);
      }
      // ceiling light bar
      if (far) {
      this.quad(c, this.P(-1.6, WH, lerp(z0, z1, 0.4)), this.P(1.6, WH, lerp(z0, z1, 0.4)), this.P(1.6, WH, lerp(z0, z1, 0.55)), this.P(-1.6, WH, lerp(z0, z1, 0.55)), (i % 2) ? '#fff6c8' : '#cfe8ff', 0);
      }
      // ceiling arch ribs
      this.quad(c, this.P(-WX, WH, z0), this.P(WX, WH, z0), this.P(WX, WH, z0 + 0.12), this.P(-WX, WH, z0 + 0.12), '#120f24', 0);
    }
    // ground: ballast + rails + sleepers
    const gl = this.P(-WX, 0, 0.3), gr = this.P(WX, 0, 0.3), gf = this.P(WX, 0, SW.ZFAR), gfl = this.P(-WX, 0, SW.ZFAR);
    this.quad(c, gl, gr, gf, gfl, '#4a4560', 0);
    for (let l = -1; l <= 1; l++) {
      const cx = l * SW.LS;
      this.quad(c, this.P(cx - 1.25, 0, 0.3), this.P(cx + 1.25, 0, 0.3), this.P(cx + 1.25, 0, SW.ZFAR), this.P(cx - 1.25, 0, SW.ZFAR), (l & 1) ? '#413c58' : '#4a4562', 0);
    }
    const SPC = 1.4; const s0 = Math.floor(D / SPC);
    for (let i = s0 + Math.ceil(SW.ZFAR / SPC); i >= s0; i--) {
      const z = i * SPC - D + 1; if (z < 0.3) continue; const z2 = z + 0.45;
      for (let l = -1; l <= 1; l++) { const cx = l * SW.LS; this.quad(c, this.P(cx - 1.05, 0, z), this.P(cx + 1.05, 0, z), this.P(cx + 1.05, 0, z2), this.P(cx - 1.05, 0, z2), '#8a5a36', 0); }
    }
    c.lineCap = 'butt';
    for (let l = -1; l <= 1; l++) for (const rx of [-0.55, 0.55]) {
      const a = this.P(l * SW.LS + rx, 0, 0.3), b = this.P(l * SW.LS + rx, 0, SW.ZFAR); c.strokeStyle = '#c9c4d8'; c.lineWidth = 5; c.beginPath(); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); c.stroke();
      c.strokeStyle = '#fff'; c.lineWidth = 1.5; c.beginPath(); c.moveTo(a[0] - 1, a[1]); c.lineTo(b[0], b[1]); c.stroke();
    }
    // fog near horizon
    const fg = c.createLinearGradient(0, HZ - 30, 0, HZ + 90); fg.addColorStop(0, 'rgba(40,30,70,.0)'); fg.addColorStop(0.35, 'rgba(70,55,100,.55)'); fg.addColorStop(1, 'rgba(70,55,100,0)');
    c.fillStyle = fg; c.fillRect(0, HZ - 30, W, 120);
  }
  drawObs(c, o, z) {
    const x = o.lane * SW.LS, P = (a, b, d) => this.P(a, b, d);
    const lw = clamp(3 / Math.sqrt(z), 1, 3);
    if (z < 0.25 && o.k !== 'train') return;
    const sh = (hw, zz) => { const p = P(x, 0, zz), k = SW.K / zz; ell(c, p[0], p[1], hw * k, hw * k * 0.22, 'rgba(0,0,0,.3)', 0); };
    if (o.k === 'coin') {
      const p = P(x, o.h, z), k = SW.K / z, r = 0.42 * k, sx = Math.abs(Math.cos(this.t * 5 + o.d));
      sh(0.35, z); ell(c, p[0], p[1], Math.max(1, r * (0.25 + 0.75 * sx)), r, '#ffd23c', lw);
      if (sx > 0.4) ell(c, p[0], p[1], Math.max(0.5, r * 0.5 * sx), r * 0.55, '#ffb81c', 0);
    } else if (o.k === 'mag') {
      const p = P(x, 1, z), k = SW.K / z; sh(0.5, z); c.save(); c.translate(p[0], p[1]); c.scale(k / 85 * 1.3, k / 85 * 1.3);
      circ(c, 0, 0, 26, 'rgba(255,107,214,.35)', 0); c.lineWidth = 17; c.strokeStyle = INK; c.beginPath(); c.arc(0, 2, 13, Math.PI, 0); c.lineTo(13, 18); c.moveTo(-13, 2); c.lineTo(-13, 18); c.stroke();
      c.lineWidth = 11; c.strokeStyle = '#e8352f'; c.stroke(); c.fillStyle = '#e8e8f0'; c.fillRect(-18, 16, 11, 9); c.fillRect(7, 16, 11, 9); c.restore();
    } else if (o.k === 'low') {
      const hw = 1.05, h = SW.LOW_H; sh(1.1, z);
      this.quad(c, P(x - hw, h, z), P(x + hw, h, z), P(x + hw, h, z + 0.5), P(x - hw, h, z + 0.5), '#fff', lw);
      this.quad(c, P(x - hw, h, z), P(x + hw, h, z), P(x + hw, h - 0.4, z), P(x - hw, h - 0.4, z), '#ff8a1c', lw);
      const a = P(x - hw, h, z), b = P(x + hw, h, z), e = P(x + hw, h - 0.4, z);
      c.save(); c.beginPath(); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); c.lineTo(b[0], e[1]); c.lineTo(a[0], e[1]); c.clip();
      c.fillStyle = '#fff'; const sw = (b[0] - a[0]) / 8; for (let i = 0; i < 8; i += 2) { c.beginPath(); c.moveTo(a[0] + i * sw, a[1]); c.lineTo(a[0] + (i + 1) * sw, a[1]); c.lineTo(a[0] + (i + 1) * sw - sw * 0.5, e[1]); c.lineTo(a[0] + i * sw - sw * 0.5, e[1]); c.fill(); } c.restore();
      for (const sx of [-0.8, 0.8]) this.quad(c, P(x + sx - 0.07, h - 0.4, z), P(x + sx + 0.07, h - 0.4, z), P(x + sx + 0.07, 0, z), P(x + sx - 0.07, 0, z), '#777', lw);
    } else if (o.k === 'over') {
      const hw = 1.2; sh(1.2, z);
      for (const sx of [-1, 1]) this.quad(c, P(x + sx * hw - 0.09, SW.TRAIN_H + 0.2, z), P(x + sx * hw + 0.09, SW.TRAIN_H + 0.2, z), P(x + sx * hw + 0.09, 0, z), P(x + sx * hw - 0.09, 0, z), '#8d8aa0', lw);
      const top = SW.TRAIN_H + 0.2, bot = SW.OVER_BOT;
      this.quad(c, P(x - hw, top, z), P(x + hw, top, z), P(x + hw, bot, z), P(x - hw, bot, z), '#ffd23c', lw);
      const a = P(x - hw, top, z), b = P(x + hw, top, z), e = P(x + hw, bot, z);
      c.save(); c.beginPath(); c.rect(a[0], a[1], b[0] - a[0], e[1] - a[1]); c.clip(); c.fillStyle = '#2b2230';
      const sw = (b[0] - a[0]) / 10; for (let i = 0; i < 10; i += 2) { c.beginPath(); c.moveTo(a[0] + i * sw, a[1]); c.lineTo(a[0] + (i + 1) * sw, a[1]); c.lineTo(a[0] + (i + 1) * sw - sw, e[1]); c.lineTo(a[0] + i * sw - sw, e[1]); c.fill(); } c.restore();
      if (z < 14) { const mid = P(x, (top + bot) / 2, z), k = SW.K / z; txt(c, 'DUCK', mid[0], mid[1], Math.max(8, 0.5 * k), '#fff', 'center', INK, Math.max(2, 0.1 * k)); }
    } else if (o.k === 'train') {
      const f = Math.max(0.3, z), b = Math.max(0.3, z + o.len); if (z + o.len <= 0.3) return;
      const hw = 1.1, H = SW.TRAIN_H, col = o.c; sh(1.2, f);
      const dark = mix(col, '#2b2230', 0.35), light = mix(col, '#ffffff', 0.3);
      this.quad(c, P(x - hw, H, f), P(x + hw, H, f), P(x + hw, H, b), P(x - hw, H, b), light, lw);
      if (o.lane !== 0) { const sx = o.lane < 0 ? x + hw : x - hw; this.quad(c, P(sx, 0, f), P(sx, 0, b), P(sx, H, b), P(sx, H, f), dark, lw);
        this.quad(c, P(sx, 1.5, lerp(f, b, 0.06)), P(sx, 1.5, lerp(f, b, 0.94)), P(sx, 2.3, lerp(f, b, 0.94)), P(sx, 2.3, lerp(f, b, 0.06)), '#1c2a4a', 1); }
      if (z > 0.3) {
        this.quad(c, P(x - hw, H, f), P(x + hw, H, f), P(x + hw, 0.15, f), P(x - hw, 0.15, f), col, lw + 0.5);
        const k = SW.K / f; const p0 = P(x - hw, H, f);
        this.quad(c, P(x - 0.85, 2.35, f), P(x + 0.85, 2.35, f), P(x + 0.85, 1.45, f), P(x - 0.85, 1.45, f), '#1c2a4a', lw);
        this.quad(c, P(x - 0.85, 2.35, f), P(x - 0.1, 2.35, f), P(x - 0.1, 1.45, f), P(x - 0.85, 1.45, f), 'rgba(140,200,255,.35)', 0);
        this.quad(c, P(x - hw, 1.0, f), P(x + hw, 1.0, f), P(x + hw, 0.75, f), P(x - hw, 0.75, f), '#fff', lw * 0.7);
        for (const sx of [-0.7, 0.7]) { const p = P(x + sx, 0.45, f); circ(c, p[0], p[1], 0.17 * k, '#fff3a0', lw); }
        if (f < 18) { const p = P(x, 2.65, f); txt(c, String(10 + (Math.floor(o.d) % 80)), p[0], p[1] + 1, Math.max(7, 0.28 * k), '#fff', 'center', null); }
      }
    }
  }
  drawPlayer(c) {
    const px = 480 + this.lanePos * SW.LS * SW.K, py = 520 - this.jy * SW.K;
    ell(c, px, 522, 42 - this.jy * 12, 9, 'rgba(0,0,0,.35)', 0);
    if (this.invT > 0 && this.stumbleT <= 0 && Math.floor(this.t * 14) % 2) return;
    const pose = this.stumbleT > 0 ? 'dizzy' : this.jy > 0.02 ? 'jump' : this.slideT > 0 ? 'slide' : 'run';
    drawPigeon(c, px, py, 2.0, this.look, pose, this.t);
  }
  drawRat(c) {
    if (this.ratT <= 0) return; const x = 480 + this.ratX, y = 576 + Math.sin(this.t * 22) * 3, a = Math.min(1, this.ratT);
    c.save(); c.globalAlpha = a; c.translate(x, y); c.scale(1.3, 1.3);
    c.beginPath(); c.moveTo(-26, 0); c.quadraticCurveTo(-48, -14 + Math.sin(this.t * 12) * 6, -62, 6); c.lineWidth = 4; c.strokeStyle = INK; c.stroke();
    ell(c, 0, -14, 28, 17, '#8b8394'); ell(c, 14, -10, 14, 10, '#a79fb0', 0);
    poly(c, [[24, -20], [46, -8], [24, -2]], '#9b93a6'); circ(c, 47, -8, 3.5, '#ff7ab0', 1.5);
    circ(c, 14, -30, 8, '#ffb0c8'); circ(c, 22, -24, 5, '#fff', 2); circ(c, 23, -23, 2.2, '#e8352f', 0);
    c.lineWidth = 3; c.strokeStyle = INK; c.beginPath(); c.moveTo(14, -30); c.lineTo(30, -33); c.stroke();
    c.beginPath(); c.moveTo(16, 2); c.lineTo(16 + Math.sin(this.t * 22) * 8, 12); c.moveTo(-10, 2); c.lineTo(-10 - Math.sin(this.t * 22) * 8, 12); c.stroke();
    c.restore();
  }
  drawScene(c) {
    const D = (this.state === 'play' || this.state === 'over') ? this.dist : this.t * 9;
    this.drawTunnel(c, D);
    const items = this.state === 'intro' || this.state === 'countdown' ? [] : this.obs.map((o) => ({ o, z: o.d - D + 1 })).filter((q) => q.z < SW.ZFAR && (q.z + (q.o.len || 0.5)) > 0.25);
    items.sort((a, b) => (b.z + (b.o.len || 0)) - (a.z + (a.o.len || 0)));
    // draw far->near; those fully behind player after
    const behind = [];
    for (const q of items) { if (q.o.k === 'train' && q.z < 1.0) behind.push(q); else this.drawObs(c, q.o, q.z); }
    this.drawPlayer(c);
    for (const q of behind) this.drawObs(c, q.o, q.z);
    this.drawRat(c);
    if (this.magT > 0) { c.strokeStyle = 'rgba(255,107,214,' + (0.4 + Math.sin(this.t * 10) * 0.2) + ')'; c.lineWidth = 5; c.beginPath(); c.arc(480 + this.lanePos * SW.LS * SW.K, 460, 70 + Math.sin(this.t * 8) * 6, 0, 6.283); c.stroke(); }
    // speed vignette
    if (this.state === 'play') { const f = (this.speed - SW.SPEED0) / (SW.SPEED1 - SW.SPEED0); c.strokeStyle = 'rgba(255,255,255,' + (0.05 + f * 0.1) + ')'; c.lineWidth = 2; for (let i = 0; i < 10; i++) { const a = (i * 97 + this.t * 600) % 960; c.beginPath(); c.moveTo(a, 0); c.lineTo(a + (a - 480) * 0.15, 90 * (0.4 + f)); c.stroke(); } }
  }
  drawHud(c) {
    for (let i = 0; i < SW.HEARTS; i++) heart(c, 38 + i * 44, 44, 15, i < this.hearts ? '#ff4a5e' : 'rgba(40,30,60,.7)');
    coinIcon(c, 36, 92, 15); txt(c, String(this.coinsGot), 60, 92, 28, '#fff', 'left');
    txt(c, Math.floor(this.dist) + ' m', 930, 42, 32, '#fff', 'right');
    txt(c, 'Score ' + Math.round(this.score), 930, 80, 22, '#ffe14a', 'right');
    const k = this.timeLeft / SW.DURATION; rr(c, 330, 14, 300, 16, 8); paint(c, 'rgba(255,255,255,.9)', 2.5);
    if (k > 0.01) { rr(c, 332, 16, 296 * k, 12, 6); c.fillStyle = k > 0.25 ? '#3ab54a' : '#e8452c'; c.fill(); }
    if (this.magT > 0) txt(c, 'MAGNET ' + Math.ceil(this.magT), 480, 60, 22, '#ff6bd6');
  }
}

// ============================================================ 3) CRUMB CATCH
const CR = {
  DURATION: 45, MOVE_SPEED: 620, FOLLOW: 16, GROUND_Y: 548, BASKET_Y: 392, BASKET_HW: 50,
  FALL0: 190, FALL1: 400, SPAWN0: 0.85, SPAWN1: 0.32, BAD0: 0.14, BAD1: 0.28, GOLD_P: 0.045,
  PTS: { crumb: 1, cookie: 2, pretzel: 3, hotdog: 3, gold: 10 }, BAD_PTS: 5, RAT_PTS: 8,
  STUN: 0.95, SLOW_T: 3, SLOW_F: 0.55, COMBO_STEP: 5, COMBO_MAX_BONUS: 3, COIN_DIV: 3, COIN_MAX: 60,
  RAT_FIRST: 7, RAT_EVERY: [8, 12], RAT_SPEED: 230, HOP_V: 640, HOP_G: 2000,
};

function ratSide(c, x, y, dir, t, s = 1) {
  c.save(); c.translate(x, y); c.scale(dir * s, s);
  const w = Math.sin(t * 24);
  c.beginPath(); c.moveTo(-24, -6); c.quadraticCurveTo(-46, -18 + Math.sin(t * 10) * 6, -62, 2); c.lineWidth = 4; c.strokeStyle = INK; c.stroke();
  c.lineWidth = 3; c.beginPath(); c.moveTo(10, -3); c.lineTo(10 + w * 8, 5); c.moveTo(-12, -3); c.lineTo(-12 - w * 8, 5); c.stroke();
  ell(c, 0, -17, 28, 17, '#8b8394'); ell(c, 8, -12, 18, 10, '#a79fb0', 0);
  poly(c, [[20, -24], [44, -10], [20, -4]], '#9b93a6'); circ(c, 45, -10, 3.6, '#ff7ab0', 1.5);
  circ(c, 9, -33, 8, '#ffb0c8'); circ(c, 23, -23, 5, '#fff', 2); circ(c, 24, -22, 2.2, '#e8352f', 0);
  c.lineWidth = 2.5; c.strokeStyle = INK; c.beginPath(); c.moveTo(17, -29); c.lineTo(31, -31); c.stroke();
  c.restore();
}

function drawFood(c, k, x, y, r, rot, t) {
  c.save(); c.translate(x, y); c.rotate(rot); const s = r / 20; c.scale(s, s);
  if (k === 'crumb') { circ(c, 0, 0, 13, '#e6b673', 2.5); circ(c, -4, -4, 4, '#f6d9a3', 0); circ(c, 5, 3, 2, '#c58d4e', 0); circ(c, -3, 5, 1.6, '#c58d4e', 0); }
  else if (k === 'cookie') { circ(c, 0, 0, 18, '#c98a4b', 3); for (const [a, b] of [[-6, -6], [6, -3], [-2, 6], [8, 8], [-9, 4]]) circ(c, a, b, 3.2, '#4a2a1a', 0); }
  else if (k === 'pretzel') {
    c.lineCap = 'round'; c.lineWidth = 11; c.strokeStyle = INK; const path = () => { c.beginPath(); c.moveTo(-12, 16); c.bezierCurveTo(-26, -6, -14, -24, 0, -12); c.bezierCurveTo(14, -24, 26, -6, 12, 16); c.moveTo(-12, 16); c.bezierCurveTo(-6, 4, 6, 4, 12, 16); };
    path(); c.stroke(); c.lineWidth = 6.5; c.strokeStyle = '#c9772e'; path(); c.stroke(); c.fillStyle = '#fff'; for (const [a, b] of [[-14, -4], [14, -4], [0, -14], [-6, 8]]) c.fillRect(a - 1.5, b - 1, 3, 2);
  } else if (k === 'hotdog') {
    rr(c, -20, -9, 40, 18, 9); paint(c, '#f0c079', 2.5); rr(c, -22, -4, 44, 8, 4); paint(c, '#e0523a', 2.5);
    c.strokeStyle = '#ffd23c'; c.lineWidth = 2; c.beginPath(); c.moveTo(-14, 0); c.lineTo(-7, -3); c.lineTo(0, 0); c.lineTo(7, -3); c.lineTo(14, 0); c.stroke();
  } else if (k === 'gold') {
    const g = 1 + Math.sin(t * 10) * 0.08; c.scale(g, g); circ(c, 0, 0, 24, 'rgba(255,230,120,.35)', 0);
    circ(c, 0, 0, 15, '#ffd23c', 3); circ(c, -4, -4, 5, '#fff3b0', 0); circ(c, 4, 3, 2.2, '#e0a010', 0);
    for (let i = 0; i < 4; i++) { const a = t * 3 + i * 1.57; star(c, Math.cos(a) * 24, Math.sin(a) * 24, 5, '#fff7c0'); }
  } else if (k === 'cap') {
    circ(c, 0, 0, 13, '#9ba3ad', 3); circ(c, 0, 0, 8, '#c7ced6', 1.5);
    for (let i = 0; i < 12; i++) { const a = i / 12 * 6.283; circ(c, Math.cos(a) * 13, Math.sin(a) * 13, 2.6, '#9ba3ad', 1.5); }
  } else if (k === 'peel') {
    poly(c, [[-4, -20], [6, -18], [8, 8], [0, 18], [-8, 8]], '#ffe14a', 3); poly(c, [[-4, 6], [-20, 14], [-10, 22], [0, 18]], '#f3d12c', 3); poly(c, [[8, 6], [24, 12], [14, 22], [0, 18]], '#f3d12c', 3); circ(c, 1, -20, 3, '#5a3a1a', 1.5);
  } else if (k === 'sock') {
    c.beginPath(); c.moveTo(-9, -20); c.lineTo(9, -20); c.lineTo(9, 4); c.quadraticCurveTo(22, 10, 18, 20); c.lineTo(-6, 20); c.quadraticCurveTo(-12, 12, -9, 4); c.closePath(); paint(c, '#fff', 3);
    c.fillStyle = '#e8452c'; c.fillRect(-8, -18, 16, 6); c.fillStyle = '#3a86d6'; c.fillRect(-8, -8, 16, 4);
  }
  c.restore();
}
const GOODS = ['crumb', 'cookie', 'pretzel', 'hotdog'], BADS = ['cap', 'peel', 'sock'];

class Crumbs extends Game {
  constructor(mg) {
    super(mg, 'crumbs', 'Crumb Catch', '#f07f2a');
    this.dur = CR.DURATION; this.timeLeft = CR.DURATION; this.introPose = 'stand';
    this.help = ['Catch the tasty crumbs in your basket!', 'Move: mouse, touch-drag or Arrows / A D', 'Hop over rats: Space / Up (or tap the pigeon)', 'Gold crumbs: +10 and slow time.', 'Avoid junk: caps, peels and socks!'];
    this.initRun();
  }
  initRun() {
    this.px = 480; this.target = 480; this.items = []; this.spawnT = 0.6; this.stun = 0; this.combo = 0; this.bestCombo = 0; this.slow = 0; this.caught = 0;
    this.rats = []; this.ratT = CR.RAT_FIRST; this.hy = 0; this.hv = 0; this.flip = 1; this.clouds = [[100, 70, 1], [420, 40, 0.8], [760, 90, 1.2]];
  }
  reset() { this.timeLeft = CR.DURATION; this.score = 0; this.initRun(); }
  prog() { return clamp((CR.DURATION - this.timeLeft) / CR.DURATION, 0, 1); }
  addScore(n) { this.score = Math.max(0, this.score + n); }
  spawn() {
    const p = this.prog(); const bad = Math.random() < lerp(CR.BAD0, CR.BAD1, p);
    let k;
    if (bad) k = pick(BADS); else if (Math.random() < CR.GOLD_P) k = 'gold'; else { const r = Math.random(); k = r < 0.4 ? 'crumb' : r < 0.65 ? 'cookie' : r < 0.83 ? 'pretzel' : 'hotdog'; }
    const sp = lerp(CR.FALL0, CR.FALL1, p) * rnd(0.9, 1.15);
    this.items.push({ k, bad, x: rnd(50, W - 50), y: -30, vy: sp, r: k === 'crumb' ? 15 : k === 'gold' ? 20 : 20, rot: rnd(0, 6), vr: rnd(-3, 3), sway: rnd(0, 6) });
  }
  catchItem(it) {
    const x = it.x, y = it.y;
    if (it.bad) {
      this.addScore(-CR.BAD_PTS); this.stun = CR.STUN; this.combo = 0; this.shake(10); this.sfx('bad'); this.pop(x, y - 20, '-' + CR.BAD_PTS + ' Ugh!', '#ff6a5a', 34);
      this.burst(x, y, 10, ['#9aa', '#cdd', '#fff'], 180);
    } else if (it.k === 'gold') {
      this.addScore(CR.PTS.gold); this.slow = CR.SLOW_T; this.combo++; this.sfx('win'); this.pop(x, y - 20, 'GOLDEN! +10', '#ffe14a', 40); this.burst(x, y, 24, ['#ffd23c', '#fff3b0', '#ffb81c'], 280); this.caught++;
    } else {
      this.combo++; const bonus = Math.min(CR.COMBO_MAX_BONUS, Math.floor(this.combo / CR.COMBO_STEP)); const pts = CR.PTS[it.k] + bonus;
      this.addScore(pts); this.caught++; this.sfx(bonus ? 'coin' : 'good');
      this.pop(x, y - 20, '+' + pts + (this.combo % 5 === 0 ? ' Yum!' : '!'), bonus ? '#7dff6a' : '#ffe14a', 30);
      this.burst(x, y, 7, ['#ffd9a0', '#f6b25a', '#fff'], 140);
    }
    this.bestCombo = Math.max(this.bestCombo, this.combo);
  }
  onKey(code) { if ((code === 'Space' || code === 'ArrowUp' || code === 'KeyW') && this.hy <= 0) this.hv = CR.HOP_V; }
  onDown(x, y) { this.target = clamp(x, 40, W - 40); if (Math.abs(x - this.px) < 55 && y > 420 && this.hy <= 0) this.hv = CR.HOP_V; }
  onMove(x) { this.target = clamp(x, 40, W - 40); }
  updatePlay(dt) {
    const keys = this.mg.keys; const dir = (keys.has('ArrowRight') || keys.has('KeyD') ? 1 : 0) - (keys.has('ArrowLeft') || keys.has('KeyA') ? 1 : 0);
    if (this.stun > 0) this.stun -= dt;
    else if (dir) { this.px = clamp(this.px + dir * CR.MOVE_SPEED * dt, 40, W - 40); this.target = this.px; this.flip = dir; }
    else { const d = this.target - this.px; if (Math.abs(d) > 3) this.flip = Math.sign(d); this.px += clamp(d * Math.min(1, dt * CR.FOLLOW), -CR.MOVE_SPEED * 1.2 * dt, CR.MOVE_SPEED * 1.2 * dt); }
    if (this.hy > 0 || this.hv > 0) { this.hv -= CR.HOP_G * dt; this.hy += this.hv * dt; if (this.hy <= 0) { this.hy = 0; this.hv = 0; } }
    this.spawnT -= dt * (this.slow > 0 ? CR.SLOW_F : 1);
    if (this.spawnT <= 0) { this.spawn(); this.spawnT = lerp(CR.SPAWN0, CR.SPAWN1, this.prog()) * rnd(0.7, 1.3); }
    if (this.slow > 0) this.slow -= dt;
    const f = this.slow > 0 ? CR.SLOW_F : 1;
    for (const it of this.items) {
      it.y += it.vy * f * dt; it.rot += it.vr * dt; it.x += Math.sin(this.t * 2 + it.sway) * 12 * dt;
      const by = CR.BASKET_Y - this.hy;
      if (!it.gone && it.y + it.r * 0.6 >= by && it.y - it.r <= by + 30 && Math.abs(it.x - this.px - 16) < CR.BASKET_HW + it.r * 0.3) { it.gone = true; this.catchItem(it); }
      else if (!it.gone && it.y > CR.GROUND_Y - 8) {
        it.gone = true;
        if (!it.bad) { if (this.combo > 2) this.pop(it.x, CR.GROUND_Y - 30, 'miss', '#fff', 18); this.combo = 0; }
        this.burst(it.x, CR.GROUND_Y - 4, 4, ['#cbb99c', '#e2d6bd'], 80, 300);
      }
    }
    this.items = this.items.filter((i) => !i.gone);
    // rats
    this.ratT -= dt;
    if (this.ratT <= 0) { const dir = Math.random() < 0.5 ? 1 : -1; this.rats.push({ x: dir > 0 ? -60 : W + 60, dir, warn: 1.1, hit: false }); this.ratT = rnd(CR.RAT_EVERY[0], CR.RAT_EVERY[1]); }
    for (const r of this.rats) {
      if (r.warn > 0) { r.warn -= dt; continue; }
      r.x += r.dir * CR.RAT_SPEED * dt;
      if (!r.hit && this.hy < 24 && Math.abs(r.x - this.px) < 42) { r.hit = true; this.addScore(-CR.RAT_PTS); this.stun = CR.STUN; this.combo = 0; this.shake(12); this.sfx('bad'); this.pop(this.px, 430, '-' + CR.RAT_PTS + ' RAT!', '#ff6a5a', 36); }
    }
    this.rats = this.rats.filter((r) => r.x > -100 && r.x < W + 100);
    for (const cl of this.clouds) { cl[0] += cl[2] * 8 * dt; if (cl[0] > W + 120) cl[0] = -120; }
  }
  payout() { return clamp(Math.floor(this.score / CR.COIN_DIV), 0, CR.COIN_MAX); }
  extraLines(c) { txt(c, 'Caught: ' + this.caught + '    Best combo: ' + this.bestCombo, 0, 8, 22, '#7a6a55', 'center', null); }
  drawScene(c) {
    c.fillStyle = vgrad(c, 0, 520, this.slow > 0 ? '#ffe9a8' : '#6cc8ff', this.slow > 0 ? '#fff6d8' : '#d6f2ff'); c.fillRect(0, 0, W, 560);
    circ(c, 820, 110, 46, '#fff3a8', 3.5);
    for (const [cx, cy, s] of this.clouds) { c.save(); c.translate(cx, cy); c.scale(s, s); circ(c, 0, 0, 26, '#fff', 3); circ(c, 28, 8, 22, '#fff', 3); circ(c, -28, 10, 20, '#fff', 3); c.fillStyle = '#fff'; c.fillRect(-28, 4, 54, 24); c.restore(); }
    // skyline
    const cols = ['#9fb4d9', '#b4a6d9', '#a6d0c9', '#d9b0b0', '#c8c8e6']; let bx = -10, i = 0;
    while (bx < W) { const bw = 70 + (i * 37) % 60, bh = 150 + (i * 71) % 190; const col = cols[i % cols.length]; rr(c, bx, 520 - bh, bw, bh + 10, 4); paint(c, col, 3);
      for (let wy = 520 - bh + 14; wy < 500; wy += 26) for (let wx = bx + 10; wx < bx + bw - 14; wx += 20) { c.fillStyle = ((wx * 7 + wy * 3) % 5 === 0) ? '#ffe98a' : 'rgba(255,255,255,.55)'; c.fillRect(wx, wy, 11, 14); }
      bx += bw + 6; i++; }
    // water tank + chimney
    rr(c, 60, 390, 36, 130, 3); paint(c, '#a35a3a'); rr(c, 52, 384, 52, 12, 3); paint(c, '#7d4128');
    // rooftop ledge
    c.fillStyle = vgrad(c, 505, 600, '#c9a27a', '#a8825c'); c.fillRect(0, 520, W, 80);
    rr(c, -10, 512, W + 20, 18, 4); paint(c, '#e2d0b4', 3);
    c.strokeStyle = 'rgba(80,50,30,.35)'; c.lineWidth = 2; for (let r = 0; r < 3; r++) { const y = 540 + r * 20; c.beginPath(); c.moveTo(0, y); c.lineTo(W, y); c.stroke(); for (let k = 0; k < 16; k++) { const x = (k * 64 + (r % 2) * 32); c.beginPath(); c.moveTo(x, y); c.lineTo(x, y + 20); c.stroke(); } }
    // items
    for (const it of this.items) { if (it.k !== 'gold') ell(c, it.x, CR.GROUND_Y + 2, it.r * 0.8, 4, 'rgba(0,0,0,.12)', 0); drawFood(c, it.k, it.x, it.y, it.r, it.rot, this.t); }
    for (const r of this.rats) {
      if (r.warn > 0) { const ex = r.dir > 0 ? 36 : W - 36; if (Math.floor(r.warn * 8) % 2) { poly(c, [[ex, CR.GROUND_Y - 44], [ex + 22, CR.GROUND_Y - 6], [ex - 22, CR.GROUND_Y - 6]], '#ffd23c', 3); txt(c, '!', ex, CR.GROUND_Y - 18, 24, INK, 'center', null); } }
      else ratSide(c, r.x, CR.GROUND_Y + 6, r.dir, this.t, 1);
    }
    const hy = this.hy, stun = this.stun > 0, py = CR.GROUND_Y - hy;
    // basket
    const bx2 = this.px + 16, by = CR.BASKET_Y + 8 - hy + (stun ? 10 : 0);
    c.save(); c.translate(bx2, by); if (stun) c.rotate(Math.sin(this.t * 14) * 0.2);
    ell(c, 0, 0, 56, 11, '#8a5a2a', 3);
    c.beginPath(); c.moveTo(-54, 2); c.lineTo(54, 2); c.lineTo(42, 38); c.quadraticCurveTo(0, 46, -42, 38); c.closePath(); paint(c, vgrad(c, 0, 44, '#e2a85a', '#b97a35'));
    c.strokeStyle = 'rgba(100,60,20,.55)'; c.lineWidth = 2; for (let k = -40; k <= 40; k += 14) { c.beginPath(); c.moveTo(k * 1.1, 4); c.lineTo(k * 0.8, 40); c.stroke(); } for (let yy = 12; yy < 40; yy += 11) { c.beginPath(); c.moveTo(-50 + yy * 0.3, yy); c.lineTo(50 - yy * 0.3, yy); c.stroke(); }
    c.beginPath(); c.ellipse(0, 0, 56, 11, 0, 0, Math.PI); paint(c, '#c78c45', 3);
    c.restore();
    // player
        ell(c, this.px, CR.GROUND_Y + 3, 40 - hy * 0.2, 7, 'rgba(0,0,0,.25)', 0);
    c.save(); c.translate(this.px, 0); c.scale(this.flip >= 0 ? 1 : -1, 1); c.translate(-this.px, 0);
    drawPigeon(c, this.px, py, 1.4, this.look, stun ? 'dizzy' : hy > 0 ? 'jump' : Math.abs(this.target - this.px) > 6 ? 'run' : 'stand', this.t);
    c.restore();
    if (this.state === 'play' && this.slow > 0) txt(c, 'SLOW-MO', 480, 140, 28, '#ff9a1a', 'center');
  }
  drawHud(c) {
    const k = this.timeLeft / CR.DURATION; rr(c, 20, 12, 920, 20, 10); paint(c, '#fff', 3);
    if (k > 0.01) { rr(c, 23, 15, 914 * k, 14, 7); c.fillStyle = k > 0.25 ? '#3ab54a' : '#e8452c'; c.fill(); }
    txt(c, Math.ceil(this.timeLeft) + 's', 480, 22, 16, '#fff', 'center', INK, 3);
    txt(c, 'Score ' + Math.round(this.score), 24, 62, 30, '#fff', 'left');
    coinIcon(c, 36, 104, 14); txt(c, '× ' + this.payout(), 58, 104, 24, '#fff', 'left');
    // combo
    const cb = this.combo; if (cb >= 2) {
      const f = (cb % CR.COMBO_STEP) / CR.COMBO_STEP; txt(c, 'COMBO x' + cb, 936, 62, 28, '#ff9a1a', 'right');
      rr(c, 780, 80, 156, 14, 7); paint(c, '#fff', 2.5); rr(c, 782, 82, 152 * (cb >= CR.COMBO_STEP * CR.COMBO_MAX_BONUS ? 1 : f || 0.02), 10, 5); c.fillStyle = '#ff9a1a'; c.fill();
    }
  }
}

export const GAMES_A = { pizza: Pizza, subway: Subway, crumbs: Crumbs };
