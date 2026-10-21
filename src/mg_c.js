import { W, H, INK, FONT, clamp, lerp, rnd, rint, pick, easeOutBack, easeOutCubic, mix, rr, paint, ell, circ, poly, txt, vgrad, star, coinIcon, heart, drawPigeon, Game } from './mg_core.js';
import { custLook, speech, bar } from './mg_util.js';

// ============================================================ 7) HOT DOG HUSTLE
const HD = {
  DURATION: 60, MAX_CUST: 3, PAT0: 30, PAT1: 20, SPAWN: [2.5, 5], TIP_BASE: 4, TIP_TOPPING: 1, TIP_SODA: 2, TIP_PRETZEL: 2, TIP_SPEED: 4, WRONG_PENALTY: 2, COIN_DIV: 4, COIN_MAX: 60,
  SLOT_X: [120, 330, 540], FEET_Y: 336,
};
const HD_TOPS = [{ id: 'ketchup', n: 'Ketchup', c: '#e0302a' }, { id: 'mustard', n: 'Mustard', c: '#ffd21f' }, { id: 'onions', n: 'Onions', c: '#f2efe6' }, { id: 'relish', n: 'Relish', c: '#5cb83a' }, { id: 'kraut', n: 'Sauerkraut', c: '#e8e2a0' }];
const HD_ITEMS = [{ id: 'bun', n: 'Bun' }, { id: 'sausage', n: 'Sausage' }].concat(HD_TOPS, [{ id: 'soda', n: 'Soda' }, { id: 'pretzel', n: 'Pretzel' }]);
const HD_TYPES = [
  { t: 'business', look: { body: '#6b707c', hat: 'top', glasses: true, scarf: null }, sc: 1.2, pose: 'stand' },
  { t: 'tourist', look: { body: '#c9a98a', hat: 'cap', glasses: true, scarf: '#3a86d6' }, sc: 1.2, pose: 'stand' },
  { t: 'kid', look: { body: '#a7b0a0', hat: 'beanie', glasses: false, scarf: null }, sc: 0.9, pose: 'stand' },
  { t: 'jogger', look: { body: '#d9dde3', hat: 'cap', glasses: false, scarf: '#ff7a2a' }, sc: 1.2, pose: 'run' },
  { t: 'plain', look: { body: '#8a93a3', hat: 'none', glasses: false, scarf: null }, sc: 1.2, pose: 'stand' },
];

function drawHDItem(c, id, x, y, s = 1) {
  c.save(); c.translate(x, y); c.scale(s, s);
  if (id === 'bun') { ell(c, 0, 4, 30, 14, '#e8b060', 3); ell(c, 0, -4, 30, 13, '#f2c47a', 3); c.strokeStyle = 'rgba(120,70,20,.5)'; c.lineWidth = 2; c.beginPath(); c.moveTo(-22, -4); c.lineTo(22, -4); c.stroke(); }
  else if (id === 'sausage') { rr(c, -32, -9, 64, 18, 9); paint(c, '#c8503a', 3); c.strokeStyle = 'rgba(80,20,10,.45)'; c.lineWidth = 2.5; for (let k = -2; k <= 2; k++) { c.beginPath(); c.moveTo(k * 11 - 3, -8); c.lineTo(k * 11 + 3, 8); c.stroke(); } c.fillStyle = 'rgba(255,255,255,.35)'; c.fillRect(-24, -6, 40, 3); }
  else if (id === 'ketchup' || id === 'mustard') { const col = id === 'ketchup' ? '#e0302a' : '#ffd21f'; rr(c, -13, -12, 26, 38, 9); paint(c, col, 3); poly(c, [[-7, -12], [7, -12], [3, -26], [-3, -26]], mix(col, '#ffffff', 0.4), 2.5); rr(c, -9, 2, 18, 12, 3); paint(c, '#fff', 1.5); }
  else if (id === 'onions' || id === 'relish' || id === 'kraut') { const col = HD_TOPS.find((q) => q.id === id).c; rr(c, -24, -6, 48, 30, 8); paint(c, '#d9dce4', 3); ell(c, 0, -6, 24, 8, mix(col, '#000000', 0.15), 3); for (let k = 0; k < 9; k++) { c.fillStyle = col; c.beginPath(); c.ellipse(-16 + (k * 13) % 32, -10 + (k * 5) % 7, 4, 2.5, k, 0, 6.283); c.fill(); } }
  else if (id === 'soda') { poly(c, [[-14, -14], [14, -14], [10, 26], [-10, 26]], '#fff', 3); poly(c, [[-12.5, -2], [12.5, -2], [10, 26], [-10, 26]], '#e8352f', 0); c.strokeStyle = INK; c.lineWidth = 3; c.beginPath(); c.moveTo(-14, -14); c.lineTo(14, -14); c.stroke(); rr(c, -16, -20, 32, 8, 3); paint(c, '#fff', 2.5); c.strokeStyle = INK; c.lineWidth = 5; c.beginPath(); c.moveTo(4, -20); c.lineTo(10, -34); c.stroke(); c.strokeStyle = '#ff7ab0'; c.lineWidth = 2.5; c.stroke(); }
  else if (id === 'pretzel') { c.lineCap = 'round'; const path = () => { c.beginPath(); c.moveTo(-12, 14); c.bezierCurveTo(-26, -6, -14, -22, 0, -10); c.bezierCurveTo(14, -22, 26, -6, 12, 14); c.moveTo(-12, 14); c.bezierCurveTo(-6, 2, 6, 2, 12, 14); }; c.lineWidth = 10; c.strokeStyle = INK; path(); c.stroke(); c.lineWidth = 6; c.strokeStyle = '#c9772e'; path(); c.stroke(); c.fillStyle = '#fff'; for (const [a, b] of [[-14, -2], [14, -2], [0, -12]]) c.fillRect(a - 1.5, b, 3, 2); }
  c.restore();
}
function drawHotdog(c, d, x, y, s = 1) {
  // d = {bun, sausage, tops:Set}
  c.save(); c.translate(x, y); c.scale(s, s);
  if (d.bun) {
    ell(c, 0, 8, 44, 15, '#e8b060', 3);
    if (d.sausage) { rr(c, -46, -8, 92, 20, 10); paint(c, '#c8503a', 3); c.strokeStyle = 'rgba(80,20,10,.4)'; c.lineWidth = 2; for (let k = -3; k <= 3; k++) { c.beginPath(); c.moveTo(k * 13 - 3, -7); c.lineTo(k * 13 + 3, 9); c.stroke(); } }
    ell(c, 0, 12, 44, 9, '#f2c47a', 3);
    let k = 0;
    for (const t of d.tops) {
      const col = HD_TOPS.find((q) => q.id === t).c; k++;
      if (t === 'ketchup' || t === 'mustard') { c.strokeStyle = INK; c.lineWidth = 6; c.lineCap = 'round'; c.lineJoin = 'round'; const yy = -4 + (t === 'mustard' ? 4 : 0); c.beginPath(); c.moveTo(-36, yy); for (let i = 0; i < 6; i++) c.lineTo(-36 + (i + 1) * 12, yy + (i % 2 ? 6 : -6)); c.stroke(); c.strokeStyle = col; c.lineWidth = 3.5; c.stroke(); }
      else { for (let i = 0; i < 9; i++) { c.fillStyle = col; c.strokeStyle = 'rgba(43,34,48,.6)'; c.lineWidth = 1; c.beginPath(); c.ellipse(-34 + i * 8.5, -6 + ((i * 7 + k * 3) % 9) - 2, 4.2, 2.6, i * 0.7, 0, 6.283); c.fill(); c.stroke(); } }
    }
  }
  c.restore();
}

class Hotdogs extends Game {
  constructor(mg) {
    super(mg, 'hotdogs', 'Hot Dog Hustle', '#e8602c');
    this.dur = HD.DURATION; this.timeLeft = HD.DURATION; this.introPose = 'serve';
    this.help = ['Read each order bubble and build it!', 'Click Bun, Sausage, then toppings', '(Soda and Pretzel if asked).', 'Click the customer to serve them.', 'Fast + correct = big tips!'];
    this.initRun();
  }
  initRun() { this.cust = [null, null, null]; this.tray = { bun: false, sausage: false, tops: new Set(), soda: false, pretzel: false }; this.tips = 0; this.served = 0; this.angry = 0; this.nextC = 0.2; this.nC = 0; this.vend = 0; this.flash = {}; }
  reset() { this.timeLeft = HD.DURATION; this.score = 0; this.initRun(); }
  makeOrder() {
    const n = this.nC; const nt = n < 2 ? rint(0, 1) : rint(0, 3); const pool = HD_TOPS.map((t) => t.id); const tops = [];
    for (let i = 0; i < nt; i++) tops.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    return { tops, soda: n >= 2 && Math.random() < 0.4, pretzel: n >= 3 && Math.random() < 0.3 };
  }
  spawn() {
    const slot = this.cust.findIndex((c) => !c); if (slot < 0) return;
    const ty = n => HD_TYPES[n % HD_TYPES.length]; const type = Math.random() < 0.3 ? pick(HD_TYPES) : ty(this.nC);
    const pat = lerp(HD.PAT0, HD.PAT1, clamp(this.nC / 10, 0, 1));
    this.cust[slot] = { type, look: type.look, x: -100, order: this.makeOrder(), pat, patMax: pat, st: 'in', t: 0, pose: type.pose };
    this.nC++;
  }
  press(id) {
    const t = this.tray;
    if (id === 'bun') { if (!t.bun) { t.bun = true; this.sfx('click'); } else this.sfx('bad'); }
    else if (id === 'sausage') { if (!t.bun) { this.pop(120, 420, 'Bun first!', '#ff8a7a', 22); this.sfx('bad'); } else if (!t.sausage) { t.sausage = true; this.sfx('click'); this.burst(126, 520, 6, ['#ffd', '#fff'], 100, 80); } else this.sfx('bad'); }
    else if (id === 'soda') { t.soda = !t.soda; this.sfx('click'); } else if (id === 'pretzel') { t.pretzel = !t.pretzel; this.sfx('click'); }
    else { if (!t.sausage) { this.pop(120, 420, 'Add sausage first!', '#ff8a7a', 20); this.sfx('bad'); return; } if (t.tops.has(id)) t.tops.delete(id); else t.tops.add(id); this.sfx('click'); }
    this.flash[id] = 1;
  }
  clearTray() { this.tray = { bun: false, sausage: false, tops: new Set(), soda: false, pretzel: false }; this.sfx('tick'); }
  serve(i) {
    const cu = this.cust[i]; const t = this.tray; if (!cu || cu.st !== 'wait') return;
    if (!t.bun) { this.pop(cu.x, 250, 'Tray empty!', '#ff8a7a', 24); this.sfx('bad'); return; }
    const o = cu.order; const same = t.sausage && o.tops.length === t.tops.size && o.tops.every((x) => t.tops.has(x)) && o.soda === t.soda && o.pretzel === t.pretzel;
    if (same) {
      const tip = HD.TIP_BASE + o.tops.length * HD.TIP_TOPPING + (o.soda ? HD.TIP_SODA : 0) + (o.pretzel ? HD.TIP_PRETZEL : 0) + Math.floor(clamp(cu.pat / cu.patMax, 0, 1) * HD.TIP_SPEED);
      this.tips += tip; this.served++; this.score = this.tips; cu.st = 'happy'; cu.t = 0; cu.pose = 'jump';
      this.pop(cu.x, 230, '+$' + tip, '#7dff6a', 38); this.sfx('coin'); this.burst(cu.x, 300, 14, ['#ffd23c', '#7dff6a', '#fff'], 220);
    } else {
      cu.st = 'angry'; cu.t = 0; cu.pose = 'dizzy'; this.angry++; this.tips = Math.max(0, this.tips - HD.WRONG_PENALTY); this.score = this.tips;
      this.pop(cu.x, 230, 'Wrong! -$' + HD.WRONG_PENALTY, '#ff6a5a', 30); this.sfx('bad'); this.shake(8);
    }
    this.clearTray(); this.vend = 1;
  }
  updatePlay(dt) {
    this.nextC -= dt; if (this.nextC <= 0) { this.spawn(); this.nextC = rnd(HD.SPAWN[0], HD.SPAWN[1]) * (this.timeLeft < 20 ? 0.8 : 1); }
    this.cust.forEach((cu, i) => {
      if (!cu) return; cu.t += dt;
      if (cu.st === 'in') { cu.x = lerp(-100, HD.SLOT_X[i], easeOutCubic(cu.t / 0.8)); if (cu.t >= 0.8) { cu.st = 'wait'; cu.t = 0; cu.x = HD.SLOT_X[i]; } }
      else if (cu.st === 'wait') { cu.pat -= dt; if (cu.pat <= 0) { cu.st = 'angry'; cu.t = 0; cu.pose = 'dizzy'; this.angry++; this.sfx('bad'); this.pop(cu.x, 230, 'Too slow!', '#ff6a5a', 28); } }
      else { if (cu.t > 0.9) cu.x -= 420 * dt * (cu.t - 0.9 + 0.3); if (cu.x < -140) this.cust[i] = null; }
    });
    for (const k in this.flash) this.flash[k] = Math.max(0, this.flash[k] - dt * 4); this.vend = Math.max(0, this.vend - dt * 3);
  }
  itemX(i) { return 254 + i * 77; }
  onDown(x, y) {
    for (let i = 0; i < HD_ITEMS.length; i++) if (this.rect(this.itemX(i), 452, 72, 138, x, y)) { this.press(HD_ITEMS[i].id); return; }
    if (this.hit(210, 432, 70, 28, x, y)) { this.clearTray(); return; }
    for (let i = 0; i < 3; i++) { const cu = this.cust[i]; if (cu && Math.abs(x - HD.SLOT_X[i]) < 90 && y > 190 && y < 420) { this.serve(i); return; } }
  }
  onKey(code) { if (code === 'Enter' || code === 'Space') { const i = this.cust.findIndex((c) => c && c.st === 'wait'); if (i >= 0) this.serve(i); } else if (code === 'KeyQ') this.clearTray(); }
  payout() { return clamp(Math.floor(this.tips / HD.COIN_DIV) + this.served, 0, HD.COIN_MAX); }
  extraLines(c) { txt(c, 'Tips: $' + this.tips + '   Served: ' + this.served + '   Angry: ' + this.angry, 0, 8, 22, '#7a6a55', 'center', null); }
  drawCust(c, cu, i) {
    const ty = HD.FEET_Y + (cu.type.sc < 1 ? 4 : 0); const hop = cu.pose === 'jump' ? Math.abs(Math.sin(cu.t * 9)) * 14 : 0;
    ell(c, cu.x, HD.FEET_Y + 3, 40 * cu.type.sc, 8, 'rgba(0,0,0,.2)', 0);
    drawPigeon(c, cu.x - 10, ty - hop, cu.type.sc, cu.look, cu.pose === 'run' && cu.st === 'wait' ? 'stand' : cu.pose, this.t + i);
    const s = cu.type.sc;
    if (cu.type.t === 'business') { rr(c, cu.x - 26, ty - 22 * s, 30, 22 * s, 4); paint(c, '#5a3a22', 2.5); rr(c, cu.x - 17, ty - 28 * s, 12, 6, 2); paint(c, '#3a2412', 2); }
    else if (cu.type.t === 'tourist') { rr(c, cu.x + 6, ty - 48 * s, 24, 17, 4); paint(c, '#33363f', 2.5); circ(c, cu.x + 18, ty - 40 * s, 5.5, '#9fd2ee', 2); }
    else if (cu.type.t === 'jogger') { c.strokeStyle = INK; c.lineWidth = 3; c.beginPath(); c.moveTo(cu.x + 8, ty - 74 * s); c.lineTo(cu.x + 36, ty - 76 * s); c.stroke(); }
    if (cu.st === 'angry') { for (let k = 0; k < 2; k++) { c.globalAlpha = 0.9; txt(c, '#!', cu.x + 10 + k * 22, ty - 108 * s - Math.sin(this.t * 10 + k) * 4, 20, '#ff4a3a', 'center', INK, 3); } c.globalAlpha = 1; }
    if (cu.st === 'wait' || cu.st === 'happy') {
      const o = cu.order, bx = cu.x - 100, by = 62, bw = 196, bh = 124;
      const k = easeOutBack(clamp(cu.t * 4, 0, 1)); c.save(); c.translate(cu.x, by + bh); c.scale(k, k); c.translate(-cu.x, -(by + bh));
      speech(c, bx, by, bw, bh, cu.x - 6);
      drawHotdog(c, { bun: true, sausage: true, tops: new Set(o.tops) }, bx + 56, by + 52, 0.9);
      const lines = o.tops.length ? o.tops.map((t) => HD_TOPS.find((q) => q.id === t).n) : ['Plain'];
      lines.forEach((l, j) => { circ(c, bx + 112, by + 22 + j * 17, 4, o.tops.length ? HD_TOPS.find((q) => q.n === l).c : '#ccc', 1.5); txt(c, l, bx + 120, by + 22 + j * 17, 12, '#3b2f2f', 'left', null); });
      if (o.soda) drawHDItem(c, 'soda', bx + 36, by + 98, 0.55); if (o.pretzel) drawHDItem(c, 'pretzel', bx + 80, by + 98, 0.55);
      if (o.soda) txt(c, '+ Soda', bx + 56, by + 98, 12, '#3b2f2f', 'left', null); 
      c.restore();
      if (cu.st === 'wait') bar(c, cu.x - 60, by + bh + 20, 110, 10, cu.pat / cu.patMax, cu.pat / cu.patMax > 0.35 ? '#3ab54a' : '#e8452c');
    }
  }
  drawScene(c) {
    c.fillStyle = vgrad(c, 0, 340, '#8fd4ff', '#e6f6ff'); c.fillRect(0, 0, W, 340);
    const cols = ['#9fb4d9', '#b4a6d9', '#a6d0c9', '#d9b0b0']; for (let i = 0, bx = -10; bx < W; i++) { const bw = 80 + (i * 37) % 50, bh = 120 + (i * 61) % 120; rr(c, bx, 340 - bh, bw, bh + 6, 4); paint(c, cols[i % 4], 3); for (let wy = 340 - bh + 12; wy < 322; wy += 24) for (let wx = bx + 10; wx < bx + bw - 12; wx += 20) { c.fillStyle = ((wx + wy) % 5 === 0) ? '#ffe98a' : 'rgba(255,255,255,.5)'; c.fillRect(wx, wy, 10, 12); } bx += bw + 6; }
    c.fillStyle = '#d6cfc2'; c.fillRect(0, 330, W, 40); c.strokeStyle = INK; c.lineWidth = 3; c.beginPath(); c.moveTo(0, 330); c.lineTo(W, 330); c.stroke();
    // umbrella + vendor
    c.strokeStyle = INK; c.lineWidth = 6; c.beginPath(); c.moveTo(840, 70); c.lineTo(840, 360); c.stroke();
    for (let i = 0; i < 6; i++) { const a0 = Math.PI + i * Math.PI / 6, a1 = a0 + Math.PI / 6; c.beginPath(); c.moveTo(840, 66); c.arc(840, 120, 120, a0, a1); c.closePath(); }
    for (let i = 0; i < 6; i++) { const a0 = Math.PI + i * Math.PI / 6, a1 = a0 + Math.PI / 6; c.beginPath(); c.moveTo(840, 135); c.lineTo(840 + Math.cos(a0) * 120, 135 + Math.sin(a0) * 80); c.quadraticCurveTo(840 + Math.cos((a0 + a1) / 2) * 128, 135 + Math.sin((a0 + a1) / 2) * 80 + 14, 840 + Math.cos(a1) * 120, 135 + Math.sin(a1) * 80); c.closePath(); paint(c, i % 2 ? '#fff' : '#e8452c', 3); }
    drawPigeon(c, 872, 346 - this.vend * 10, 1.25, this.look, 'serve', this.t);
    // customers
    this.cust.forEach((cu, i) => cu && this.drawCust(c, cu, i));
    // cart
    c.fillStyle = vgrad(c, 366, 600, '#e8452c', '#b02e1e'); c.fillRect(0, 366, W, 234);
    c.fillStyle = '#ffd21f'; c.fillRect(0, 366, W, 12); for (let i = 0; i < 24; i++) { c.fillStyle = INK; c.fillRect(i * 40 + 18, 366, 4, 12); }
    c.strokeStyle = INK; c.lineWidth = 3.5; c.beginPath(); c.moveTo(0, 366); c.lineTo(W, 366); c.moveTo(0, 378); c.lineTo(W, 378); c.stroke();
    c.fillStyle = 'rgba(255,255,255,.12)'; c.fillRect(0, 390, W, 52);
    txt(c, 'HOT DOGS', 730, 408, 24, '#fff', 'center', INK, 5);
    // grill steam
    for (let i = 0; i < 4; i++) { const ph = (this.t * 0.7 + i / 4) % 1; c.globalAlpha = (1 - ph) * 0.6; circ(c, this.itemX(1) + 36 + Math.sin(this.t * 3 + i) * 6, 440 - ph * 40, 6 + ph * 10, '#fff', 0); } c.globalAlpha = 1;
    // items
    HD_ITEMS.forEach((it, i) => {
      const x = this.itemX(i), fl = this.flash[it.id] || 0, on = (it.id === 'bun' && this.tray.bun) || (it.id === 'sausage' && this.tray.sausage) || this.tray.tops.has(it.id) || (it.id === 'soda' && this.tray.soda) || (it.id === 'pretzel' && this.tray.pretzel);
      c.save(); c.translate(x, 452 - fl * 4); rr(c, 0, 0, 72, 138, 12); paint(c, on ? '#fff6b0' : '#f4f1ed', 3.5);
      rr(c, 4, 4, 64, 20, 6); paint(c, it.id === 'bun' || it.id === 'sausage' ? '#c9372b' : it.id === 'soda' || it.id === 'pretzel' ? '#4a7fd0' : '#3a9a4a', 2); txt(c, it.id === 'bun' || it.id === 'sausage' ? 'BASE' : it.id === 'soda' || it.id === 'pretzel' ? 'SIDE' : 'TOP', 36, 14, 11, '#fff', 'center', null);
      drawHDItem(c, it.id, 36, 76, 0.9 + fl * 0.1); txt(c, it.n, 36, 124, it.n.length > 8 ? 11 : 13, INK, 'center', null);
      if (on) { circ(c, 58, 30, 9, '#2fb344', 2); txt(c, '✓', 58, 30, 12, '#fff', 'center', null); }
      c.restore();
    });
    // tray
    rr(c, 16, 440, 220, 150, 14); paint(c, vgrad(c, 440, 590, '#cfd5df', '#9aa3b2'), 3.5);
    rr(c, 26, 452, 200, 128, 10); paint(c, '#eef1f6', 2.5); txt(c, 'YOUR TRAY', 100, 463, 12, '#8a8fa8', 'center', null);
    this.button(c, 200, 463, 54, 24, 'Clear', '#8a8fa8', false);
    const t = this.tray;
    if (t.bun) drawHotdog(c, t, 106, 520, 1.15); else txt(c, 'empty', 126, 520, 16, '#b0b4c0', 'center', null);
    if (t.soda) drawHDItem(c, 'soda', 54, 548, 0.6); if (t.pretzel) drawHDItem(c, 'pretzel', 182, 552, 0.6);
    if (this.state === 'play' && this.cust.some((q) => q && q.st === 'wait')) txt(c, 'Click a customer to serve!', 480, 352, 15, '#fff', 'center', INK, 3);
  }
  drawHud(c) {
    bar(c, 20, 12, 920, 20, this.timeLeft / HD.DURATION, this.timeLeft / HD.DURATION > 0.25 ? '#3ab54a' : '#e8452c');
    txt(c, Math.ceil(this.timeLeft) + 's', 480, 22, 16, '#fff', 'center', INK, 3);
    txt(c, 'Tips $' + this.tips, 262, 408, 24, '#ffe14a', 'left', INK, 5); txt(c, 'Served ' + this.served, 462, 408, 20, '#fff', 'left', INK, 4);
  }
}

// ============================================================ 8) DELI CASHIER
const DL = {
  DURATION: 65, PAT0: 38, PAT1: 28, PTS_BASE: 10, PTS_ITEM: 1, PTS_SPEED: 8, PTS_WRONG: 3, PTS_LEAVE: 3, COIN_DIV: 4, COIN_MAX: 60,
  BELT_Y: 300, SLOT0: 560, SLOT_DX: 78, MAX_PILE: 14,
};
const DENOMS = [
  { c: 2000, n: '$20', k: 'bill', col: '#7fc08a' }, { c: 1000, n: '$10', k: 'bill', col: '#e8c77a' }, { c: 500, n: '$5', k: 'bill', col: '#c8a0e0' }, { c: 100, n: '$1', k: 'bill', col: '#b6d8a0' },
  { c: 25, n: '25¢', k: 'coin', col: '#c9ced6' }, { c: 10, n: '10¢', k: 'coin', col: '#d4d8de' }, { c: 5, n: '5¢', k: 'coin', col: '#b8bcc4' },
];
const GROC = ['milk', 'bread', 'apple', 'cheese', 'sandwich', 'soda', 'chips', 'eggs'];
const money = (c) => '$' + Math.floor(c / 100) + '.' + String(c % 100).padStart(2, '0');

function drawGrocery(c, k, x, y, s = 1) {
  c.save(); c.translate(x, y); c.scale(s, s);
  if (k === 'milk') { poly(c, [[-14, -26], [14, -26], [14, 22], [-14, 22]], '#fff', 3); poly(c, [[-14, -26], [14, -26], [8, -36], [-8, -36]], '#d9e8ff', 3); c.fillStyle = '#3a86d6'; c.fillRect(-12, -8, 24, 16); circ(c, 0, 0, 5, '#fff', 0); }
  else if (k === 'bread') { rr(c, -28, -14, 56, 34, 14); paint(c, '#d99a4a', 3); ell(c, 0, -14, 28, 12, '#e8b060', 3); c.strokeStyle = 'rgba(120,70,20,.5)'; c.lineWidth = 2.5; for (const dx of [-12, 0, 12]) { c.beginPath(); c.moveTo(dx - 3, -20); c.lineTo(dx + 3, -8); c.stroke(); } }
  else if (k === 'apple') { circ(c, -5, 0, 18, '#e8352f', 3); circ(c, 7, 0, 17, '#e8352f', 3); circ(c, 0, 2, 15, '#e8352f', 0); c.strokeStyle = INK; c.lineWidth = 3; c.beginPath(); c.moveTo(0, -14); c.lineTo(2, -24); c.stroke(); ell(c, 9, -20, 8, 4, '#4caf50', 2, -0.4); circ(c, -8, -6, 3.5, 'rgba(255,255,255,.5)', 0); }
  else if (k === 'cheese') { poly(c, [[-28, 14], [28, 14], [28, -6], [-28, -22]], '#ffd23c', 3); poly(c, [[-28, -22], [28, -6], [28, 14], [-28, 14]], '#ffd23c', 0); circ(c, -10, 2, 4.5, '#e8a912', 1.5); circ(c, 8, -2, 3.5, '#e8a912', 1.5); circ(c, 16, 8, 3, '#e8a912', 1.5); c.beginPath(); c.moveTo(-28, -22); c.lineTo(28, -6); c.lineTo(28, 14); c.lineTo(-28, 14); c.closePath(); c.lineWidth = 3; c.strokeStyle = INK; c.stroke(); }
  else if (k === 'sandwich') { poly(c, [[-26, 14], [26, 14], [26, -4], [-26, -4]], '#f2c47a', 3); rr(c, -28, -4, 56, 6, 3); paint(c, '#5cc04a', 2); rr(c, -28, 2, 56, 6, 3); paint(c, '#e8352f', 2); rr(c, -28, 8, 56, 6, 3); paint(c, '#ffd23c', 2); ell(c, 0, -8, 26, 10, '#f2c47a', 3); poly(c, [[-26, 14], [26, 14], [26, 22], [-26, 22]], '#e8b060', 3); }
  else if (k === 'soda') { rr(c, -14, -26, 28, 50, 8); paint(c, vgrad(c, -26, 24, '#ff6a5a', '#c9372b'), 3); ell(c, 0, -26, 14, 4, '#d9dce4', 2.5); rr(c, -14, -8, 28, 14, 0); c.fillStyle = '#fff'; c.fillRect(-13, -8, 26, 14); txt(c, 'COLA', 0, -1, 9, '#c9372b', 'center', null); }
  else if (k === 'chips') { poly(c, [[-20, -28], [20, -28], [24, 24], [-24, 24]], '#ffd23c', 3); c.strokeStyle = INK; c.lineWidth = 2; for (let i = -16; i <= 16; i += 8) { c.beginPath(); c.moveTo(i, -28); c.lineTo(i, -24); c.stroke(); } star(c, 0, -2, 12, '#e8352f'); }
  else if (k === 'eggs') { rr(c, -28, -4, 56, 26, 6); paint(c, '#c8b496', 3); for (const dx of [-17, 0, 17]) ell(c, dx, -8, 10, 13, '#fff7ea', 2.5); }
  c.restore();
}
function drawBill(c, x, y, w, h, d) {
  c.save(); c.translate(x, y); rr(c, -w / 2, -h / 2, w, h, 4); paint(c, d.col, 2.5); rr(c, -w / 2 + 4, -h / 2 + 4, w - 8, h - 8, 3); c.strokeStyle = 'rgba(43,34,48,.45)'; c.lineWidth = 1.5; c.stroke();
  circ(c, 0, 0, h * 0.28, 'rgba(255,255,255,.55)', 1.5); txt(c, d.n, -w / 2 + 14, -h / 2 + 11, Math.max(9, h * 0.32), INK, 'center', null); txt(c, d.n, w / 2 - 14, h / 2 - 11, Math.max(9, h * 0.32), INK, 'center', null); c.restore();
}
function drawCoin(c, x, y, r, d) { circ(c, x, y, r, d.col, 2.5); circ(c, x, y, r * 0.78, 'rgba(255,255,255,.35)', 1); txt(c, d.n, x, y, r * 0.62, INK, 'center', null); }

class Deli extends Game {
  constructor(mg) {
    super(mg, 'deli', 'Deli Cashier', '#2f9a6a');
    this.dur = DL.DURATION; this.timeLeft = DL.DURATION; this.introPose = 'serve';
    this.help = ['Click each item on the belt to scan it.', 'The customer then pays with a bill.', 'Click bills and coins to build the exact', 'CHANGE, then press GIVE CHANGE.', 'Fast and correct = bonus. Wrong = penalty!'];
    this.initRun();
  }
  initRun() { this.cu = null; this.nC = 0; this.nextC = 0.2; this.pile = []; this.bag = []; this.fly = []; this.served = 0; this.wrongs = 0; this.total = 0; this.scanned = 0; this.flash = 0; this.vend = 0; this.display = 0; }
  reset() { this.timeLeft = DL.DURATION; this.score = 0; this.initRun(); }
  newCust() {
    const n = this.nC++; const cnt = clamp(rint(2, 3) + Math.floor(n / 3), 2, 6); const items = []; let total = 0;
    for (let i = 0; i < cnt; i++) { const price = rint(3, 26) * 25; items.push({ k: GROC[(Math.floor(Math.random() * GROC.length))], price, x: -60 - i * 40, slot: i, scanned: false, t: 0 }); total += price; }
    while (total < 375) { items[0].price += 25; total += 25; } while (total > 1950) { const it = items.reduce((a, b) => (a.price > b.price ? a : b)); it.price -= 25; total -= 25; }
    let tender = total <= 500 ? 500 : total <= 1000 ? 1000 : 2000; if (Math.random() < clamp(n * 0.06, 0, 0.45) && tender < 2000) tender = tender === 500 ? 1000 : 2000;
    if (n < 2) tender = total <= 500 ? 500 : total <= 1000 ? 1000 : 2000;
    const pat = lerp(DL.PAT0, DL.PAT1, clamp(n / 8, 0, 1)) + cnt * 2;
    return { x: -120, look: custLook(n * 3 + rint(0, 2)), items, total, tender, st: 'in', t: 0, pat, patMax: pat, pose: 'stand' };
  }
  slotX(i) { return DL.SLOT0 - i * DL.SLOT_DX; }
  pileSum() { return this.pile.reduce((a, d) => a + d.c, 0); }
  scan(it) {
    if (it.scanned) return; it.scanned = true; this.scanned++; this.total += it.price; this.sfx('coin');
    this.pop(it.x, DL.BELT_Y - 50, '+' + money(it.price), '#7dff6a', 28); this.fly.push({ k: it.k, x: it.x, y: DL.BELT_Y, t: 0 }); this.flash = 1;
    if (this.cu.items.every((q) => q.scanned)) { this.cu.st = 'pay'; this.cu.t = 0; this.sfx('good'); }
  }
  give() {
    const cu = this.cu; if (!cu || cu.st !== 'pay') return; const need = cu.tender - cu.total, got = this.pileSum();
    if (got === need) {
      const pts = DL.PTS_BASE + cu.items.length * DL.PTS_ITEM + Math.floor(clamp(cu.pat / cu.patMax, 0, 1) * DL.PTS_SPEED); this.score += pts; this.served++; cu.st = 'happy'; cu.t = 0; cu.pose = 'jump';
      this.pop(300, 150, 'Exact change! +' + pts, '#7dff6a', 34); this.sfx('win'); this.burst(300, 200, 18, ['#ffd23c', '#7dff6a', '#fff'], 240);
    } else {
      this.score = Math.max(0, this.score - DL.PTS_WRONG); this.wrongs++; cu.pat = Math.max(2, cu.pat - 4); this.shake(8); this.sfx('bad');
      this.pop(300, 150, got < need ? 'Not enough! -' + DL.PTS_WRONG : 'Too much! -' + DL.PTS_WRONG, '#ff6a5a', 30); this.pile = [];
    }
    this.vend = 1;
  }
  updatePlay(dt) {
    if (!this.cu) { this.nextC -= dt; if (this.nextC <= 0) { this.cu = this.newCust(); this.total = 0; this.scanned = 0; this.pile = []; this.bag = []; } }
    const cu = this.cu;
    if (cu) {
      cu.t += dt;
      if (cu.st === 'in') { cu.x = lerp(-120, 100, easeOutCubic(cu.t / 0.9)); if (cu.t >= 0.9) { cu.st = 'scan'; cu.t = 0; } }
      else if (cu.st === 'scan' || cu.st === 'pay') { cu.pat -= dt; if (cu.pat <= 0) { cu.st = 'angry'; cu.t = 0; cu.pose = 'dizzy'; this.score = Math.max(0, this.score - DL.PTS_LEAVE); this.sfx('bad'); this.pop(300, 150, 'They left! -' + DL.PTS_LEAVE, '#ff6a5a', 30); } }
      else { if (cu.t > 1.1) { cu.x -= 460 * dt; if (cu.x < -140) { this.cu = null; this.nextC = 0.5; } } }
      for (const it of cu.items) { it.t += dt; const tx = this.slotX(it.slot), delay = it.slot * 0.18; if (cu.st !== 'in' && cu.t > delay || cu.st === 'pay') it.x += (tx - it.x) * Math.min(1, dt * 5); else if (cu.st === 'in') it.x = -60 - it.slot * 40 + 0; }
    }
    for (const f of this.fly) f.t += dt; for (const f of this.fly.filter((q) => q.t >= 0.4)) this.bag.push(f.k); this.fly = this.fly.filter((f) => f.t < 0.4);
    this.flash = Math.max(0, this.flash - dt * 4); this.vend = Math.max(0, this.vend - dt * 3);
    this.display += (this.total - this.display) * Math.min(1, dt * 12);
  }
  denomPos(i) { return i < 4 ? [776 + (i % 2) * 104, 186 + Math.floor(i / 2) * 56] : [770 + (i - 4) * 62 + 0, 320]; }
  addDenom(i) { if (!this.cu || this.cu.st !== 'pay') { this.sfx('bad'); return; } if (this.pile.length >= DL.MAX_PILE) { this.sfx('bad'); return; } this.pile.push(DENOMS[i]); this.sfx('tick'); }
  pileRect(j) { const per = 7, x = 30 + (j % per) * 78, y = 456 + Math.floor(j / per) * 62; return [x, y]; }
  onDown(x, y) {
    const cu = this.cu;
    if (cu && cu.st === 'scan') { for (const it of cu.items.slice().reverse()) if (!it.scanned && Math.abs(x - it.x) < 42 && Math.abs(y - DL.BELT_Y) < 56) { this.scan(it); return; } }
    for (let i = 0; i < 7; i++) { const p = this.denomPos(i); if (i < 4 ? this.hit(p[0], p[1], 98, 48, x, y) : Math.hypot(x - p[0], y - p[1]) < 30) { this.addDenom(i); return; } }
    if (this.hit(831, 392, 150, 34, x, y)) { this.pile = []; this.sfx('tick'); return; }
    if (this.hit(831, 456, 200, 58, x, y)) { this.give(); return; }
    for (let j = this.pile.length - 1; j >= 0; j--) { const [px, py] = this.pileRect(j); if (Math.abs(x - px - 30) < 36 && Math.abs(y - py - 20) < 28) { this.pile.splice(j, 1); this.sfx('tick'); return; } }
  }
  onKey(code) { if (code === 'Enter' || code === 'Space') this.give(); else if (code === 'KeyQ') this.pile = []; }
  payout() { return clamp(Math.floor(this.score / DL.COIN_DIV), 0, DL.COIN_MAX); }
  extraLines(c) { txt(c, 'Customers: ' + this.served + '    Mistakes: ' + this.wrongs, 0, 8, 24, '#7a6a55', 'center', null); }
  drawScene(c) {
    c.fillStyle = vgrad(c, 0, 400, '#fff1cf', '#ffdca0'); c.fillRect(0, 0, W, 400);
    for (let i = 0; i < 12; i++) for (let j = 0; j < 4; j++) { c.fillStyle = (i + j) % 2 ? 'rgba(255,255,255,.35)' : 'rgba(255,200,120,.25)'; c.fillRect(i * 80, j * 60, 80, 60); }
    // salami + sign
    for (let i = 0; i < 4; i++) { c.strokeStyle = INK; c.lineWidth = 2.5; c.beginPath(); c.moveTo(380 + i * 36, 0); c.lineTo(380 + i * 36, 30); c.stroke(); ell(c, 380 + i * 36, 62, 10, 30, '#b8453a', 3); circ(c, 380 + i * 36 - 3, 52, 2, '#f0a8a0', 0); }
    rr(c, 560, 44, 130, 44, 10); paint(c, '#2b2230', 3.5); txt(c, 'DELI', 625, 67, 30, '#ff6ac9', 'center', '#ff2aa8', 6); txt(c, 'DELI', 625, 67, 30, '#ffd0f0', 'center', null);
    for (const sy of [150, 220]) { rr(c, 360, sy, 340, 10, 3); paint(c, '#a8693a', 3); for (let i = 0; i < 6; i++) { const k = GROC[(i + sy) % GROC.length]; drawGrocery(c, k, 392 + i * 54, sy - 20, 0.6); } }
    // counter
    c.fillStyle = vgrad(c, 330, 600, '#b88a5a', '#8a6038'); c.fillRect(0, 330, W, 270); c.fillStyle = '#e8c9a0'; c.fillRect(0, 330, W, 14); c.strokeStyle = INK; c.lineWidth = 3; c.beginPath(); c.moveTo(0, 344); c.lineTo(W, 344); c.stroke();
    // belt
    rr(c, 130, 276, 520, 54, 10); paint(c, '#3a3640', 3.5); c.save(); rr(c, 134, 280, 512, 46, 8); c.clip(); c.fillStyle = '#4b4752'; c.fillRect(130, 276, 520, 54); c.strokeStyle = 'rgba(255,255,255,.12)'; c.lineWidth = 4; const off = (this.t * 70) % 36; for (let i = -1; i < 16; i++) { c.beginPath(); c.moveTo(134 + i * 36 + off, 280); c.lineTo(134 + i * 36 + off, 326); c.stroke(); } c.restore();
    // scanner
    rr(c, 642, 262, 46, 80, 8); paint(c, '#7a7f90', 3.5); rr(c, 650, 270, 30, 26, 4); paint(c, '#2b2230', 2); c.fillStyle = 'rgba(255,60,60,' + (0.5 + Math.sin(this.t * 20) * 0.3 + this.flash * 0.3) + ')'; c.fillRect(652, 281, 26, 3);
    // customer
    const cu = this.cu;
    ell(c, 90, 256, 52, 9, 'rgba(0,0,0,.2)', 0);
    if (cu) {
      const hop = cu.pose === 'jump' ? Math.abs(Math.sin(cu.t * 9)) * 14 : 0; drawPigeon(c, cu.x - 8, 252 - hop, 1.3, cu.look, cu.pose, this.t);
      for (const it of cu.items) if (!it.scanned) { const hov = this.mx != null && Math.abs(this.mx - it.x) < 42 && Math.abs(this.my - DL.BELT_Y) < 56 && cu.st === 'scan'; drawGrocery(c, it.k, it.x, DL.BELT_Y - 8 - (hov ? 5 : 0), 1.15 + (hov ? 0.1 : 0)); }
      // bubble
      if (cu.st !== 'in') {
        const bx = 150, by = 42, bw = 190, bh = 92; speech(c, bx, by, bw, bh, 126);
        if (cu.st === 'scan') { txt(c, 'Scan my stuff!', bx + bw / 2, by + 26, 17, '#3b2f2f', 'center', null); txt(c, cu.items.filter((q) => !q.scanned).length + ' items left', bx + bw / 2, by + 56, 15, '#8a6a4a', 'center', null); }
        else if (cu.st === 'pay') { txt(c, 'Here you go!', bx + bw / 2, by + 18, 15, '#3b2f2f', 'center', null); drawBill(c, bx + 62, by + 58, 76, 38, DENOMS.find((d) => d.c === cu.tender)); txt(c, 'Total ' + money(cu.total), bx + 142, by + 58, 14, '#3b2f2f', 'center', null); }
        else if (cu.st === 'happy') txt(c, 'Thanks!', bx + bw / 2, by + 50, 22, '#26b04a', 'center', null); else txt(c, 'Hmph!', bx + bw / 2, by + 50, 22, '#c0392b', 'center', null);
        if (cu.st === 'scan' || cu.st === 'pay') bar(c, 36, 346, 100, 10, cu.pat / cu.patMax, cu.pat / cu.patMax > 0.3 ? '#3ab54a' : '#e8452c');
      }
    }
    // fly items
    for (const f of this.fly) { const k = f.t / 0.4, bx = 640, by = 400; drawGrocery(c, f.k, lerp(f.x, bx, k), lerp(f.y, by, k) - Math.sin(k * 3.14) * 40, lerp(1.15, 0.6, k)); }
    // bag
    c.save(); c.translate(620, 450); poly(c, [[-40, -50], [40, -50], [46, 40], [-46, 40]], '#c9955a', 3.5); poly(c, [[-40, -50], [-12, -50], [-20, -62], [-40, -56]], '#b8844a', 2.5);
    this.bag.slice(-4).forEach((k, i) => drawGrocery(c, k, -22 + (i % 2) * 40, -58 + (i > 1 ? 4 : 0) - (i % 2) * 6, 0.55)); poly(c, [[-46, -10], [46, -10], [46, 40], [-46, 40]], '#d9a96a', 3); txt(c, 'DELI', 0, 14, 18, '#7a4a1a', 'center', null); c.restore();
    // change tray
    rr(c, 20, 404, 540, 188, 14); paint(c, vgrad(c, 404, 592, '#d9dce4', '#a9afbe'), 3.5); rr(c, 28, 430, 524, 154, 10); paint(c, '#eef1f6', 2.5); txt(c, 'CHANGE TRAY (click to remove)', 290, 417, 13, '#6a7088', 'center', null);
    this.pile.forEach((d, j) => { const [px, py] = this.pileRect(j); if (d.k === 'bill') drawBill(c, px + 30, py + 20, 66, 34, d); else drawCoin(c, px + 30, py + 20, 17, d); });
    if (!this.pile.length) txt(c, cu && cu.st === 'pay' ? 'Add the change!' : 'empty', 290, 500, 18, '#b0b4c0', 'center', null);
    // register
    rr(c, 708, 30, 238, 150 - 8, 14); paint(c, vgrad(c, 30, 172, '#9aa3b2', '#6f7889'), 3.5);
    rr(c, 720, 42, 214, 90, 8); paint(c, '#0f2a1a', 3);
    const tot = Math.round(this.display / 5) * 5; c.font = '900 22px monospace'; txt(c, 'TOTAL ' + money(Math.round(this.display)), 730, 62, 22, '#4dff88', 'left', null);
    txt(c, 'PAID  ' + (cu && cu.st === 'pay' ? money(cu.tender) : '--'), 730, 88, 22, '#ffd24a', 'left', null); txt(c, 'GIVE  ' + money(this.pileSum()), 730, 114, 22, '#ff9a7a', 'left', null);
    txt(c, 'REGISTER', 827, 156, 13, '#fff', 'center', INK, 3);
    // drawer buttons
    rr(c, 716, 168, 222, 340, 14); paint(c, 'rgba(255,255,255,.75)', 3.5);
    DENOMS.forEach((d, i) => { const p = this.denomPos(i); if (i < 4) { drawBill(c, p[0], p[1], 98, 48, d); } else drawCoin(c, p[0], p[1], 27, d); });
    this.button(c, 831, 392, 150, 34, 'Clear', '#8a8fa8', false); this.button(c, 831, 456, 200, 58, 'Give change', '#2fb344', !!(cu && cu.st === 'pay'));
  }
  drawHud(c) {
    bar(c, 20, 12, 920, 20, this.timeLeft / DL.DURATION, this.timeLeft / DL.DURATION > 0.25 ? '#3ab54a' : '#e8452c');
    txt(c, Math.ceil(this.timeLeft) + 's', 480, 22, 16, '#fff', 'center', INK, 3);
    txt(c, 'Score ' + Math.round(this.score), 24, 66, 26, '#fff', 'left'); coinIcon(c, 34, 102, 12); txt(c, '× ' + this.payout(), 54, 102, 20, '#fff', 'left');
  }
}

// ============================================================ 9) GYRO STAND
const GY = {
  DURATION: 60, PAT0: 32, PAT1: 20, SPAWN: [2.6, 5], RUSH_AT: 30, RUSH_SPAWN: 0.65, RUSH_PAT: 0.85,
  WARM_T: 1.5, CARVE_RATE: 0.75, GOOD: [0.5, 0.78], OK: [0.35, 0.92], MULT: { good: 1, ok: 0.6, bad: 0.25 },
  TIP_BASE: 5, TIP_TOP: 1, TIP_FRIES: 2, TIP_DRINK: 2, TIP_SPEED: 4, WRONG_PENALTY: 2, COIN_DIV: 4, COIN_MAX: 60,
  SLOT_X: [110, 300, 490], FEET_Y: 336, SPIT_X: 712,
};
const GY_TOPS = [{ id: 'tzatziki', n: 'Tzatziki', c: '#f4f1e6' }, { id: 'tomato', n: 'Tomato', c: '#e0302a' }, { id: 'onion', n: 'Onion', c: '#b070d0' }, { id: 'lettuce', n: 'Lettuce', c: '#5cb83a' }, { id: 'spicy', n: 'Spicy', c: '#e8581a' }, { id: 'feta', n: 'Feta', c: '#fffbe8' }];
const GY_TYPES = [
  { look: { body: '#6b707c', hat: 'top', glasses: true, scarf: null }, sc: 1.2 }, { look: { body: '#c9a98a', hat: 'cap', glasses: true, scarf: '#3a86d6' }, sc: 1.2 },
  { look: { body: '#a7b0a0', hat: 'beanie', glasses: false, scarf: null }, sc: 0.9 }, { look: { body: '#d9dde3', hat: 'none', glasses: false, scarf: '#ff7a2a' }, sc: 1.2 },
  { look: { body: '#b0745a', hat: 'cowboy', glasses: false, scarf: '#e0443a' }, sc: 1.2 }, { look: { body: '#e6c9d4', hat: 'crown', glasses: false, scarf: null }, sc: 1.2 },
];
const topCol = (id) => GY_TOPS.find((q) => q.id === id).c;

function drawGyro(c, d, x, y, s = 1) {
  // d = {pita, meat, tops:Set, wrapped}
  c.save(); c.translate(x, y); c.scale(s, s);
  if (d.pita) {
    if (d.wrapped) {
      poly(c, [[-26, 34], [26, 34], [34, -26], [-34, -26]], '#fffdf4', 3.5); c.fillStyle = '#2f7fe0'; c.fillRect(-30, 6, 60, 8); c.strokeStyle = INK; c.lineWidth = 2; c.strokeRect(-30, 6, 60, 8);
      poly(c, [[-34, -26], [34, -26], [30, -36], [-30, -36]], '#e8d2a0', 3);
      for (const t of d.tops) { const i = [...d.tops].indexOf(t); circ(c, -20 + i * 8, -40 - (i % 2) * 4, 7, topCol(t), 2); }
      if (d.meat) circ(c, 0, -42, 8, '#8a4a2a', 2);
    } else {
      ell(c, 0, 8, 56, 24, '#e8c88a', 3.5); ell(c, 0, 6, 48, 19, '#f4dba6', 0);
      if (d.meat) { for (let i = 0; i < 7; i++) { c.save(); c.translate(-30 + i * 10, 4 + Math.sin(i * 2) * 6); c.rotate(i * 0.7); rr(c, -9, -3, 18, 6, 3); paint(c, i % 2 ? '#9a5a34' : '#7a4224', 2); c.restore(); } }
      let k = 0; for (const t of d.tops) {
        k++; const col = topCol(t);
        if (t === 'tomato') for (let i = 0; i < 3; i++) circ(c, -22 + i * 22, 2 + (i % 2) * 8, 8, col, 2);
        else if (t === 'onion') for (let i = 0; i < 3; i++) { c.beginPath(); c.arc(-18 + i * 20, 6 - (i % 2) * 6, 8, 0, 6.283); c.lineWidth = 3; c.strokeStyle = INK; c.stroke(); c.lineWidth = 1.8; c.strokeStyle = col; c.stroke(); }
        else if (t === 'lettuce') { c.strokeStyle = INK; c.lineWidth = 8; c.lineCap = 'round'; c.beginPath(); c.moveTo(-40, 0); for (let i = 0; i < 6; i++) c.lineTo(-40 + (i + 1) * 13, (i % 2 ? 6 : -4)); c.stroke(); c.strokeStyle = col; c.lineWidth = 5; c.stroke(); }
        else if (t === 'tzatziki') { c.strokeStyle = INK; c.lineWidth = 7; c.lineCap = 'round'; c.beginPath(); c.moveTo(-34, 10); c.quadraticCurveTo(-14, -6, 0, 10); c.quadraticCurveTo(14, -6, 34, 10); c.stroke(); c.strokeStyle = col; c.lineWidth = 4; c.stroke(); }
        else if (t === 'spicy') { c.strokeStyle = INK; c.lineWidth = 6; c.lineCap = 'round'; c.beginPath(); c.moveTo(-34, 2); for (let i = 0; i < 6; i++) c.lineTo(-34 + (i + 1) * 11.5, 2 + (i % 2 ? 7 : -5)); c.stroke(); c.strokeStyle = col; c.lineWidth = 3.5; c.stroke(); }
        else if (t === 'feta') for (let i = 0; i < 6; i++) { c.save(); c.translate(-30 + i * 12, 8 - ((i * 5) % 12)); c.rotate(i); rr(c, -4, -4, 8, 8, 1.5); paint(c, col, 1.5); c.restore(); }
      }
    }
  }
  c.restore();
}
function drawGyItem(c, id, x, y, s = 1) {
  c.save(); c.translate(x, y); c.scale(s, s);
  if (id === 'fries') { poly(c, [[-14, -4], [14, -4], [10, 24], [-10, 24]], '#e8352f', 3); c.fillStyle = '#fff'; c.fillRect(-6, 6, 12, 9); for (let i = 0; i < 6; i++) { c.save(); c.translate(-10 + i * 4, -8 - (i % 3) * 5); c.rotate((i - 2.5) * 0.08); rr(c, -2, -14, 4.5, 20, 1.5); paint(c, '#ffd23c', 1.8); c.restore(); } }
  else if (id === 'drink') { poly(c, [[-13, -12], [13, -12], [9, 24], [-9, 24]], '#fff', 3); poly(c, [[-11.5, 0], [11.5, 0], [9, 24], [-9, 24]], '#2f8fd8', 0); c.strokeStyle = INK; c.lineWidth = 3; c.beginPath(); c.moveTo(-13, -12); c.lineTo(13, -12); c.stroke(); rr(c, -15, -18, 30, 7, 3); paint(c, '#fff', 2.5); c.strokeStyle = INK; c.lineWidth = 5; c.beginPath(); c.moveTo(3, -18); c.lineTo(9, -32); c.stroke(); c.strokeStyle = '#ffd23c'; c.lineWidth = 2.5; c.stroke(); }
  else if (id === 'pita') { ell(c, 0, 0, 30, 14, '#e8c88a', 3); ell(c, 0, -2, 25, 10, '#f4dba6', 0); }
  c.restore();
}
function evilEye(c, x, y, r) { circ(c, x, y, r, '#1f56b8', 3); circ(c, x, y, r * 0.72, '#fff', 2); circ(c, x, y, r * 0.5, '#5cb8ff', 2); circ(c, x, y, r * 0.24, '#14142a', 0); }

class Gyros extends Game {
  constructor(mg) {
    super(mg, 'gyros', 'Gyro Stand', '#1f6fc9');
    this.dur = GY.DURATION; this.timeLeft = GY.DURATION; this.introPose = 'serve';
    this.help = ['Warm a pita, then HOLD the spit to carve meat', '(release in the green zone!).', 'Add toppings, fries / drink if ordered,', 'press WRAP, then click the customer.', 'Rush hour is coming - be fast for tips!'];
    this.initRun();
  }
  initRun() {
    this.cust = [null, null, null]; this.griddle = [{ st: 'empty', t: 0 }, { st: 'empty', t: 0 }]; this.tray = { pita: false, meat: null, tops: new Set(), fries: false, drink: false, wrapped: false };
    this.carve = 0; this.holding = false; this.tips = 0; this.served = 0; this.angry = 0; this.nextC = 0.2; this.nC = 0; this.rush = false; this.vend = 0; this.flash = {}; this.drips = []; this.wrapT = 0;
  }
  reset() { this.timeLeft = GY.DURATION; this.score = 0; this.initRun(); }
  makeOrder() {
    const n = this.nC; const nt = n < 2 ? rint(1, 2) : rint(1, 3); const pool = GY_TOPS.map((t) => t.id); const tops = [];
    for (let i = 0; i < nt; i++) tops.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    return { tops, fries: n >= 2 && Math.random() < 0.4, drink: n >= 3 && Math.random() < 0.35 };
  }
  spawn() {
    const slot = this.cust.findIndex((q) => !q); if (slot < 0) return;
    const type = this.nC < GY_TYPES.length ? GY_TYPES[this.nC % GY_TYPES.length] : pick(GY_TYPES);
    const pat = lerp(GY.PAT0, GY.PAT1, clamp(this.nC / 10, 0, 1)) * (this.rush ? GY.RUSH_PAT : 1);
    this.cust[slot] = { type, look: type.look, x: -100, order: this.makeOrder(), pat, patMax: pat, st: 'in', t: 0, pose: 'stand' }; this.nC++;
  }
  msg(t, col = '#ff8a7a') { this.pop(this.tx || 600, 330, t, col, 22); }
  clickPita() {
    const i = this.griddle.findIndex((g) => g.st === 'empty'); if (i < 0) { this.sfx('bad'); this.pop(150, 410, 'Griddle full!', '#ff8a7a', 20); return; }
    this.griddle[i] = { st: 'warm', t: 0 }; this.sfx('click');
  }
  clickGriddle(i) {
    const g = this.griddle[i]; if (g.st === 'warm') { this.sfx('bad'); return; } if (g.st !== 'ready') return;
    if (this.tray.pita) { this.sfx('bad'); this.pop(790, 420, 'Plate busy!', '#ff8a7a', 20); return; }
    this.tray.pita = true; g.st = 'empty'; this.sfx('click');
  }
  startCarve() {
    if (!this.tray.pita || this.tray.meat || this.tray.wrapped) { this.sfx('bad'); this.pop(GY.SPIT_X, 130, !this.tray.pita ? 'Pita first!' : 'Already has meat!', '#ff8a7a', 20); return; }
    this.holding = true; this.carve = 0;
  }
  endCarve() {
    if (!this.holding) return; this.holding = false; const v = this.carve; const q = v >= GY.GOOD[0] && v <= GY.GOOD[1] ? 'good' : v >= GY.OK[0] && v <= GY.OK[1] ? 'ok' : 'bad';
    if (v < 0.08) return; this.tray.meat = q; this.carve = 0;
    this.pop(GY.SPIT_X + 10, 160, q === 'good' ? 'Perfect cut!' : q === 'ok' ? (v < GY.GOOD[0] ? 'A bit little' : 'A bit much') : (v < GY.OK[0] ? 'Too little!' : 'Way too much!'), q === 'good' ? '#7dff6a' : q === 'ok' ? '#ffe14a' : '#ff6a5a', 26);
    this.sfx(q === 'bad' ? 'bad' : 'good'); this.burst(GY.SPIT_X, 300, 10, ['#9a5a34', '#c88a54'], 150);
  }
  topPress(id) {
    const t = this.tray; if (!t.pita) { this.pop(780, 420, 'Pita first!', '#ff8a7a', 20); this.sfx('bad'); return; } if (t.wrapped) { this.sfx('bad'); return; }
    if (t.tops.has(id)) t.tops.delete(id); else t.tops.add(id); this.sfx('click'); this.flash[id] = 1;
  }
  wrap() {
    const t = this.tray; if (!t.pita || !t.meat) { this.sfx('bad'); this.pop(898, 420, !t.pita ? 'Pita first!' : 'Needs meat!', '#ff8a7a', 20); return; } if (t.wrapped) return; t.wrapped = true; this.wrapT = 1; this.sfx('good');
  }
  clear() { this.tray = { pita: false, meat: null, tops: new Set(), fries: false, drink: false, wrapped: false }; this.sfx('tick'); }
  serve(i) {
    const cu = this.cust[i], t = this.tray; if (!cu || cu.st !== 'wait') return; if (!t.pita) { this.pop(cu.x, 240, 'Plate empty!', '#ff8a7a', 22); this.sfx('bad'); return; }
    if (!t.wrapped) { this.pop(cu.x, 240, 'Wrap it first!', '#ff8a7a', 22); this.sfx('bad'); return; }
    const o = cu.order, same = t.meat && o.tops.length === t.tops.size && o.tops.every((x) => t.tops.has(x)) && o.fries === t.fries && o.drink === t.drink;
    if (same) {
      let tip = GY.TIP_BASE + o.tops.length * GY.TIP_TOP + (o.fries ? GY.TIP_FRIES : 0) + (o.drink ? GY.TIP_DRINK : 0) + Math.floor(clamp(cu.pat / cu.patMax, 0, 1) * GY.TIP_SPEED);
      tip = Math.max(1, Math.round(tip * GY.MULT[t.meat])); this.tips += tip; this.served++; this.score = this.tips; cu.st = 'happy'; cu.t = 0; cu.pose = 'jump';
      this.pop(cu.x, 230, '+$' + tip + (t.meat !== 'good' ? ' (meh meat)' : ''), t.meat === 'good' ? '#7dff6a' : '#ffe14a', 34); this.sfx('coin'); this.burst(cu.x, 300, 14, ['#ffd23c', '#7dff6a', '#fff', '#5cb8ff'], 220);
    } else {
      cu.st = 'angry'; cu.t = 0; cu.pose = 'dizzy'; this.angry++; this.tips = Math.max(0, this.tips - GY.WRONG_PENALTY); this.score = this.tips; this.pop(cu.x, 230, 'Wrong! -$' + GY.WRONG_PENALTY, '#ff6a5a', 30); this.sfx('bad'); this.shake(8);
    }
    this.clear(); this.vend = 1;
  }
  updatePlay(dt) {
    if (!this.rush && this.timeLeft <= GY.RUSH_AT) { this.rush = true; this.pop(480, 160, 'RUSH HOUR!', '#ff5a4a', 56); this.sfx('win'); this.shake(8); }
    this.nextC -= dt; if (this.nextC <= 0) { this.spawn(); this.nextC = rnd(GY.SPAWN[0], GY.SPAWN[1]) * (this.rush ? GY.RUSH_SPAWN : 1); }
    this.cust.forEach((cu, i) => {
      if (!cu) return; cu.t += dt;
      if (cu.st === 'in') { cu.x = lerp(-100, GY.SLOT_X[i], easeOutCubic(cu.t / 0.8)); if (cu.t >= 0.8) { cu.st = 'wait'; cu.t = 0; cu.x = GY.SLOT_X[i]; } }
      else if (cu.st === 'wait') { cu.pat -= dt; if (cu.pat <= 0) { cu.st = 'angry'; cu.t = 0; cu.pose = 'dizzy'; this.angry++; this.sfx('bad'); this.pop(cu.x, 230, 'Too slow!', '#ff6a5a', 28); } }
      else if (cu.t > 0.9) { cu.x -= 420 * dt * (cu.t - 0.6); if (cu.x < -140) this.cust[i] = null; }
    });
    for (const g of this.griddle) if (g.st === 'warm') { g.t += dt; if (g.t >= GY.WARM_T) { g.st = 'ready'; this.sfx('tick'); } else g.t = g.t; }
    const keysHold = this.mg.keys.has('Space') || this.mg.keys.has('Enter');
    if (this.holding) { this.carve = Math.min(1, this.carve + dt * GY.CARVE_RATE); if (this.carve >= 1) this.endCarve(); if (Math.random() < dt * 25) this.drips.push({ x: GY.SPIT_X + rnd(-26, 26), y: 150 + this.carve * 150, vy: 0, life: 0.6, strip: true }); }
    if (Math.random() < dt * 2.2) this.drips.push({ x: GY.SPIT_X + rnd(-30, 30), y: rnd(150, 290), vy: 0, life: 1 });
    for (const d of this.drips) { d.vy += 500 * dt; d.y += d.vy * dt; d.life -= dt; if (d.y > 322) d.life = 0; } this.drips = this.drips.filter((d) => d.life > 0);
    for (const k in this.flash) this.flash[k] = Math.max(0, this.flash[k] - dt * 4); this.vend = Math.max(0, this.vend - dt * 3); this.wrapT = Math.max(0, this.wrapT - dt * 3);
  }
  bowlX(i) { return 296 + i * 62; }
  onDown(x, y) {
    if (Math.abs(x - GY.SPIT_X) < 84 && y > 96 && y < 340) { this.startCarve(); return; }
    if (this.rect(16, 424, 76, 100, x, y)) { this.clickPita(); return; }
    for (let i = 0; i < 2; i++) if (Math.hypot(x - 176, y - (466 + i * 72)) < 38) { this.clickGriddle(i); return; }
    for (let i = 0; i < 6; i++) if (Math.hypot(x - this.bowlX(i), y - 506) < 32) { this.topPress(GY_TOPS[i].id); return; }
    if (this.hit(690, 452, 62, 80, x, y)) { if (!this.tray.pita || this.tray.wrapped) this.sfx('bad'); else { this.tray.fries = !this.tray.fries; this.sfx('click'); } return; }
    if (this.hit(690, 540, 62, 80, x, y)) { if (!this.tray.pita || this.tray.wrapped) this.sfx('bad'); else { this.tray.drink = !this.tray.drink; this.sfx('click'); } return; }
    if (this.hit(898, 455, 90, 46, x, y)) { this.wrap(); return; }
    if (this.hit(898, 535, 80, 34, x, y)) { this.clear(); return; }
    for (let i = 0; i < 3; i++) { const cu = this.cust[i]; if (cu && Math.abs(x - GY.SLOT_X[i]) < 90 && y > 190 && y < 420) { this.serve(i); return; } }
  }
  onUp() { this.endCarve(); }
  onKey(code) { if (code === 'Space' || code === 'Enter') this.startCarve(); else if (code === 'KeyQ') this.clear(); }
  onKeyUp(code) { if (code === 'Space' || code === 'Enter') this.endCarve(); }
  payout() { return clamp(Math.floor(this.tips / GY.COIN_DIV) + this.served, 0, GY.COIN_MAX); }
  extraLines(c) { txt(c, 'Tips: $' + this.tips + '   Served: ' + this.served + '   Angry: ' + this.angry, 0, 8, 22, '#7a6a55', 'center', null); }
  drawCust(c, cu, i) {
    const s = cu.type.sc, ty = GY.FEET_Y + (s < 1 ? 4 : 0), hop = cu.pose === 'jump' ? Math.abs(Math.sin(cu.t * 9)) * 14 : 0;
    ell(c, cu.x, GY.FEET_Y + 3, 40 * s, 8, 'rgba(0,0,0,.2)', 0); drawPigeon(c, cu.x - 10, ty - hop, s, cu.look, cu.pose, this.t + i);
    if (cu.st === 'angry') for (let k = 0; k < 2; k++) txt(c, '#!', cu.x + 10 + k * 22, ty - 108 * s - Math.sin(this.t * 10 + k) * 4, 20, '#ff4a3a', 'center', INK, 3);
    if (cu.st === 'wait' || cu.st === 'happy') {
      const o = cu.order, bx = cu.x - 100, by = 62, bw = 196, bh = 124, k = easeOutBack(clamp(cu.t * 4, 0, 1));
      c.save(); c.translate(cu.x, by + bh); c.scale(k, k); c.translate(-cu.x, -(by + bh)); speech(c, bx, by, bw, bh, cu.x - 6);
      drawGyro(c, { pita: true, meat: true, tops: new Set(o.tops), wrapped: false }, bx + 54, by + 54, 0.78);
      o.tops.forEach((t, j) => { circ(c, bx + 114, by + 22 + j * 17, 4, topCol(t), 1.5); txt(c, GY_TOPS.find((q) => q.id === t).n, bx + 122, by + 22 + j * 17, 12, '#3b2f2f', 'left', null); });
      if (o.fries) { drawGyItem(c, 'fries', bx + 40, by + 100, 0.5); txt(c, 'Fries', bx + 56, by + 102, 12, '#3b2f2f', 'left', null); } if (o.drink) { drawGyItem(c, 'drink', bx + 118, by + 100, 0.5); txt(c, 'Drink', bx + 134, by + 102, 12, '#3b2f2f', 'left', null); }
      c.restore();
      if (cu.st === 'wait') bar(c, cu.x - 60, by + bh + 20, 110, 10, cu.pat / cu.patMax, cu.pat / cu.patMax > 0.35 ? '#3ab54a' : '#e8452c');
    }
  }
  drawSpit(c) {
    const x = GY.SPIT_X, top = 126, bot = 322;
    // heat plate glow
    const g = c.createLinearGradient(x - 90, 0, x - 40, 0); g.addColorStop(0, 'rgba(255,120,30,0)'); g.addColorStop(1, 'rgba(255,150,40,' + (0.5 + Math.sin(this.t * 7) * 0.1) + ')'); c.fillStyle = g; c.fillRect(x - 90, top - 10, 60, bot - top + 10);
    rr(c, x - 52, top - 8, 8, bot - top + 8, 3); paint(c, '#ff9a2a', 2.5); for (let i = 0; i < 6; i++) { c.fillStyle = '#ffd24a'; c.fillRect(x - 51, top + i * 32, 6, 14); }
    // rod
    c.strokeStyle = INK; c.lineWidth = 7; c.beginPath(); c.moveTo(x, top - 24); c.lineTo(x, bot + 8); c.stroke(); c.strokeStyle = '#c9ced6'; c.lineWidth = 3; c.stroke();
    // meat cone
    const carveCut = this.holding ? this.carve * 40 : 0;
    c.beginPath(); c.moveTo(x - 24, bot); for (let i = 0; i <= 12; i++) { const k = i / 12, y = bot - k * (bot - top), hw = 24 + k * 46; c.lineTo(x - hw, y); } c.lineTo(x + 70, top); for (let i = 12; i >= 0; i--) { const k = i / 12, y = bot - k * (bot - top), hw = 24 + k * 46; c.lineTo(x + hw, y); } c.closePath();
    c.fillStyle = vgrad(c, top, bot, '#b5683a', '#7a3f22'); c.fill(); c.lineWidth = 3.5; c.strokeStyle = INK; c.stroke();
    c.save(); c.clip(); for (let i = 0; i < 26; i++) { const yy = top + i * 8, ph = Math.sin(this.t * 3 + i * 0.9); c.fillStyle = 'rgba(' + (ph > 0 ? '255,200,140' : '60,25,10') + ',.18)'; const k = (bot - yy) / (bot - top), hw = 24 + (1 - k) * 46; c.fillRect(x - hw + (ph + 1) * hw * 0.5, yy, 6 + hw * 0.4, 6); } c.restore();
    // lighting from the heat plate
    c.fillStyle = 'rgba(255,170,60,.18)'; c.fillRect(x - 70, top, 40, bot - top);
    ell(c, x, top, 70, 9, '#c57a44', 3); circ(c, x, top - 8, 7, '#e8352f', 2.5);
    // drips
    for (const d of this.drips) { c.globalAlpha = clamp(d.life * 2, 0, 1); ell(c, d.x, d.y, 2.5, 4, d.strip ? '#8a4a2a' : '#ffcf7a', 0); } c.globalAlpha = 1;
    // tray
    rr(c, x - 60, bot + 4, 120, 12, 4); paint(c, '#9aa3b2', 3);
    // knife + bar
    const ky = top + 20 + (this.holding ? this.carve * (bot - top - 40) : 0);
    c.save(); c.translate(x + 74, ky); c.rotate(-0.25); rr(c, -4, -30, 8, 44, 3); paint(c, '#c9ced6', 2.5); rr(c, -5, 14, 10, 24, 4); paint(c, '#7a4a2a', 2.5); c.restore();
    const bx = x + 96, by0 = 126, bh = 190; rr(c, bx, by0, 20, bh, 8); paint(c, '#fff', 3);
    const zy = (v) => by0 + bh - v * bh; c.save(); rr(c, bx + 2, by0 + 2, 16, bh - 4, 6); c.clip(); c.fillStyle = '#ff9a7a'; c.fillRect(bx, by0, 20, bh); c.fillStyle = '#ffe14a'; c.fillRect(bx, zy(GY.OK[1]), 20, zy(GY.OK[0]) - zy(GY.OK[1])); c.fillStyle = '#7bd35a'; c.fillRect(bx, zy(GY.GOOD[1]), 20, zy(GY.GOOD[0]) - zy(GY.GOOD[1]));
    c.fillStyle = 'rgba(0,0,0,.25)'; c.fillRect(bx, zy(this.carve), 20, by0 + bh - zy(this.carve)); c.restore();
    poly(c, [[bx - 2, zy(this.carve)], [bx - 14, zy(this.carve) - 7], [bx - 14, zy(this.carve) + 7]], '#fff', 2.5);
    if (!this.holding && this.state === 'play') txt(c, 'HOLD to carve', x + 20, 106, 15, '#fff', 'center', INK, 3);
  }
  drawScene(c) {
    c.fillStyle = vgrad(c, 0, 340, '#7fd0ff', '#d8f3ff'); c.fillRect(0, 0, W, 340);
    // sea hint + whitewashed buildings
    c.fillStyle = '#4aa8e8'; c.fillRect(0, 250, W, 90);
    for (let i = 0, bx = -10; bx < W; i++) { const bw = 100 + (i * 41) % 60, bh = 130 + (i * 53) % 90; rr(c, bx, 340 - bh, bw, bh + 8, 6); paint(c, '#fbf8f0', 3.5); for (let wy = 340 - bh + 18; wy < 300; wy += 40) for (let wx = bx + 14; wx < bx + bw - 24; wx += 34) { rr(c, wx, wy, 20, 28, 10); paint(c, '#2f7fe0', 2.5); } if (i % 3 === 1) { circ(c, bx + 24, 340 - bh + 6, 12, '#e03a8a', 2); circ(c, bx + 44, 340 - bh + 10, 10, '#f06aa8', 2); } bx += bw + 6; }
    c.fillStyle = '#e9e2d2'; c.fillRect(0, 330, W, 40); c.strokeStyle = INK; c.lineWidth = 3; c.beginPath(); c.moveTo(0, 330); c.lineTo(W, 330); c.stroke();
    this.cust.forEach((cu, i) => cu && this.drawCust(c, cu, i));
    this.drawSpit(c);
    // chef
    const chef = Object.assign({}, this.look, { hat: 'paper', moustache: true });
    drawPigeon(c, 880, 346 - this.vend * 10, 1.25, chef, 'serve', this.t);
    // cart front
    c.fillStyle = vgrad(c, 366, 600, '#2f7fe0', '#1a56b0'); c.fillRect(0, 366, W, 234); c.fillStyle = '#fff'; c.fillRect(0, 366, W, 14);
    c.strokeStyle = INK; c.lineWidth = 3.5; c.beginPath(); c.moveTo(0, 366); c.lineTo(W, 366); c.moveTo(0, 380); c.lineTo(W, 380); c.stroke();
    for (let i = 0; i < 30; i++) { c.fillStyle = 'rgba(255,255,255,.14)'; c.beginPath(); c.moveTo(i * 36, 392); c.lineTo(i * 36 + 18, 392); c.lineTo(i * 36 + 9, 404); c.closePath(); c.fill(); }
    // awning
    for (let i = 0; i < 16; i++) { c.beginPath(); c.moveTo(i * 60, 0); c.lineTo(i * 60 + 60, 0); c.lineTo(i * 60 + 60, 30); c.arc(i * 60 + 30, 30, 30, 0, Math.PI); c.lineTo(i * 60, 30); c.closePath(); paint(c, i % 2 ? '#fff' : '#2f7fe0', 3.5); }
    c.fillStyle = 'rgba(0,0,0,.12)'; c.fillRect(0, 90, W, 0); c.strokeStyle = INK; c.lineWidth = 2.5; c.beginPath(); c.moveTo(480, 58); c.lineTo(480, 76 + Math.sin(this.t * 2) * 3); c.stroke(); evilEye(c, 480, 92 + Math.sin(this.t * 2) * 3, 16);
    // griddle + pita pile
    rr(c, 14, 396, 238, 196, 14); paint(c, vgrad(c, 396, 592, '#e8ecf4', '#b6bdcc'), 3.5);
    rr(c, 20, 424, 76, 100, 10); paint(c, '#f4f1ed', 3); for (let i = 0; i < 4; i++) drawGyItem(c, 'pita', 58, 492 - i * 10, 1.0); txt(c, 'PITA', 58, 440, 13, '#2f7fe0', 'center', null); txt(c, 'click', 58, 512, 11, '#8a8fa8', 'center', null);
    rr(c, 108, 424, 134, 160, 10); paint(c, '#3a3640', 3); txt(c, 'GRIDDLE', 175, 436, 12, '#ffb066', 'center', null);
    this.griddle.forEach((g, i) => {
      const y = 466 + i * 72; circ(c, 176, y, 34, '#4b4752', 2.5); if (g.st === 'empty') { txt(c, '+', 176, y, 28, 'rgba(255,255,255,.3)', 'center', null); return; }
      const pf = g.st === 'ready' ? 1 + Math.sin(this.t * 8) * 0.04 + 0.12 : 1 + clamp(g.t / GY.WARM_T, 0, 1) * 0.1; c.save(); c.translate(176, y); c.scale(pf, pf);
      ell(c, 0, 0, 29, 24, g.st === 'ready' ? '#f6dfa6' : '#e4cc94', 3); if (g.st === 'ready') { ell(c, 0, -4, 20, 13, '#fff0c8', 0); } c.restore();
      if (g.st === 'warm') { bar(c, 142, y + 26, 68, 8, g.t / GY.WARM_T, '#ff9a2a'); for (let k = 0; k < 2; k++) { const ph = (this.t * 1.2 + k / 2) % 1; c.globalAlpha = (1 - ph) * 0.5; circ(c, 170 + k * 12, y - 24 - ph * 24, 5 + ph * 6, '#fff', 0); } c.globalAlpha = 1; }
      else txt(c, 'READY', 176, y - 32, 12, '#7dff6a', 'center', INK, 3);
    });
    // bowls
    GY_TOPS.forEach((t, i) => {
      const x = this.bowlX(i), y = 506, fl = this.flash[t.id] || 0, on = this.tray.tops.has(t.id);
      if (on) { circ(c, x, y, 38, 'rgba(255,240,120,.9)', 0); }
      ell(c, x, y + 4, 31, 26, '#e8ecf4', 3); ell(c, x, y - 2, 26, 18, mix(t.c, '#000000', 0.2), 2.5);
      if (t.id === 'tzatziki' || t.id === 'spicy') { ell(c, x, y - 4, 22, 13, t.c, 0); ell(c, x - 6, y - 7, 8, 3, 'rgba(255,255,255,.5)', 0); }
      else for (let k = 0; k < 8; k++) { c.fillStyle = t.c; c.strokeStyle = 'rgba(43,34,48,.6)'; c.lineWidth = 1; c.beginPath(); c.ellipse(x - 14 + (k * 7) % 28, y - 8 + (k * 5) % 12, 5, 3, k, 0, 6.283); c.fill(); c.stroke(); }
      txt(c, t.n, x, 548, 11.5, '#fff', 'center', INK, 3);
      if (on) { circ(c, x + 24, y - 24, 9, '#2fb344', 2); txt(c, '✓', x + 24, y - 24, 12, '#fff', 'center', null); }
    });
    // assembly plate
    rr(c, 650, 396, 296, 196, 14); paint(c, vgrad(c, 396, 592, '#e8ecf4', '#b6bdcc'), 3.5); txt(c, 'YOUR PLATE', 790, 410, 12, '#6a7088', 'center', null);
    circ(c, 790, 500, 62, '#fff', 3.5); circ(c, 790, 500, 54, '#eef2fa', 0);
    const t = this.tray; if (t.pita) drawGyro(c, t, 790, 508 - (t.wrapped ? 10 : 0), 1.0 + this.wrapT * 0.08); else txt(c, 'empty', 790, 500, 15, '#b0b4c0', 'center', null);
    for (const [id, y] of [['fries', 452], ['drink', 540]]) { const on = t[id]; rr(c, 660, y - 40, 62, 80, 10); paint(c, on ? '#fff6b0' : '#f4f1ed', 3); drawGyItem(c, id, 691, y - 4, 1.0); txt(c, id === 'fries' ? 'Fries' : 'Drink', 691, y + 32, 11, INK, 'center', null); if (on) { circ(c, 712, y - 30, 8, '#2fb344', 2); } }
    this.button(c, 898, 455, 90, 46, 'WRAP', t.pita && t.meat && !t.wrapped ? '#2fb344' : '#9aa0aa', !!(t.pita && t.meat && !t.wrapped)); this.button(c, 898, 535, 80, 34, 'Clear', '#8a8fa8', false);
    if (this.state === 'play' && this.cust.some((q) => q && q.st === 'wait') && t.wrapped) txt(c, 'Click a customer to serve!', 400, 352, 15, '#fff', 'center', INK, 3);
  }
  drawHud(c) {
    bar(c, 20, 12, 920, 20, this.timeLeft / GY.DURATION, this.timeLeft / GY.DURATION > 0.25 ? '#3ab54a' : '#e8452c');
    txt(c, Math.ceil(this.timeLeft) + 's', 480, 22, 16, '#fff', 'center', INK, 3);
    txt(c, 'Tips $' + this.tips, 262, 395, 22, '#ffe14a', 'left', INK, 5); txt(c, 'Served ' + this.served, 262, 422, 16, '#fff', 'left', INK, 4);
    if (this.rush) txt(c, 'RUSH HOUR', 800, 72, 20, '#ff5a4a', 'center', '#fff', 5);
  }
}

export const GAMES_C = { hotdogs: Hotdogs, deli: Deli, gyros: Gyros };
