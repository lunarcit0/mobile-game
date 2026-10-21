import { W, H, INK, FONT, clamp, lerp, rnd, rint, pick, easeOutBack, easeOutCubic, easeInOut, mix, rr, paint, ell, circ, poly, txt, vgrad, star, coinIcon, heart, drawPigeon, Game } from './mg_core.js';

// shared: varied customer pigeon looks
const CUST_LOOKS = [
  { body: '#8a93a3', hat: 'none', glasses: false, scarf: null }, { body: '#c9a98a', hat: 'beanie', glasses: false, scarf: '#3a86d6' },
  { body: '#6b707c', hat: 'top', glasses: true, scarf: null }, { body: '#d9dde3', hat: 'cap', glasses: false, scarf: null },
  { body: '#b0745a', hat: 'cowboy', glasses: false, scarf: '#e0443a' }, { body: '#7f8fa8', hat: 'crown', glasses: true, scarf: null },
  { body: '#a7b0a0', hat: 'grad', glasses: true, scarf: null }, { body: '#e6c9d4', hat: 'none', glasses: false, scarf: '#8a4fd0' },
];
const custLook = (i) => CUST_LOOKS[((i % CUST_LOOKS.length) + CUST_LOOKS.length) % CUST_LOOKS.length];

function speech(c, x, y, w, h, tail = 'left') {
  rr(c, x, y, w, h, 18); paint(c, '#fffdf4', 4);
  if (tail === 'left') { poly(c, [[x + 2, y + h - 40], [x - 22, y + h - 22], [x + 2, y + h - 62]], '#fffdf4', 4); c.fillStyle = '#fffdf4'; c.fillRect(x + 1, y + h - 61, 6, 20); }
}
function bar(c, x, y, w, h, k, col, bg = '#fff') {
  rr(c, x, y, w, h, h / 2); paint(c, bg, 2.5);
  if (k > 0.01) { rr(c, x + 2, y + 2, (w - 4) * clamp(k, 0, 1), h - 4, (h - 4) / 2); c.fillStyle = col; c.fill(); }
}

// ============================================================ 4) BOUQUET BOUTIQUE
const FL = {
  DURATION: 70, PATIENCE0: 34, PATIENCE1: 24, MAX_STEMS: 9, PTS_EXACT: 12, PTS_STEM: 5, PTS_WRAP: 8, PTS_RIBBON: 8, MAX_SPEED_BONUS: 10, COIN_DIV: 6, COIN_MAX: 60,
  PIV: [630, 452], BUCKET_W: 88,
};
const FTYPES = ['rose', 'tulip', 'daisy', 'sunflower', 'lily', 'lavender'];
const FNAME = { rose: 'Rose', tulip: 'Tulip', daisy: 'Daisy', sunflower: 'Sunflower', lily: 'Lily', lavender: 'Lavender' };
const BUCKET_COL = { rose: '#ff9eb5', tulip: '#c9b1ff', daisy: '#9fe0ff', sunflower: '#ffe08a', lily: '#ffc49a', lavender: '#b5f0c8' };
const WRAPS = ['#ff9ec4', '#8fe3c0', '#8ec9ff', '#f3d9a4'], RIBBONS = ['#e8352f', '#8a4fd0', '#f5b020', '#ffffff'];

function drawFlower(c, type, x, y, s = 1, rot = 0) {
  c.save(); c.translate(x, y); c.rotate(rot); c.scale(s, s);
  if (type === 'rose') {
    circ(c, 0, 0, 17, '#e8405e', 3); circ(c, 1, 1, 11.5, '#cc2c4b', 2.5); circ(c, 0, 0, 6.5, '#a81c38', 2);
    c.strokeStyle = 'rgba(80,0,20,.55)'; c.lineWidth = 1.8; c.beginPath(); c.arc(1, 0, 3, 0.5, 4.2); c.stroke();
  } else if (type === 'tulip') {
    c.beginPath(); c.moveTo(-14, -14); c.lineTo(-7, -2); c.lineTo(0, -16); c.lineTo(7, -2); c.lineTo(14, -14); c.quadraticCurveTo(18, 8, 0, 16); c.quadraticCurveTo(-18, 8, -14, -14); c.closePath(); paint(c, '#ff6fae', 3);
    c.beginPath(); c.moveTo(-7, -2); c.lineTo(0, -16); c.lineTo(7, -2); c.quadraticCurveTo(0, 12, -7, -2); paint(c, '#ff9ccc', 2);
  } else if (type === 'daisy') {
    for (let i = 0; i < 10; i++) { c.save(); c.rotate(i / 10 * 6.283); ell(c, 0, -14, 5, 10, '#fff', 2); c.restore(); }
    circ(c, 0, 0, 8, '#ffd21f', 2.5);
  } else if (type === 'sunflower') {
    for (let i = 0; i < 14; i++) { c.save(); c.rotate(i / 14 * 6.283); poly(c, [[-5, -10], [0, -26], [5, -10]], '#ffd21f', 2); c.restore(); }
    circ(c, 0, 0, 13, '#7a4a1e', 3); for (let i = 0; i < 8; i++) { const a = i * 2.4; circ(c, Math.cos(a) * i * 1.3, Math.sin(a) * i * 1.3, 1.5, '#4a2a10', 0); }
  } else if (type === 'lily') {
    for (let i = 0; i < 6; i++) { c.save(); c.rotate(i / 6 * 6.283); c.beginPath(); c.moveTo(0, 0); c.quadraticCurveTo(-11, -12, 0, -27); c.quadraticCurveTo(11, -12, 0, 0); paint(c, '#ff9a3c', 2.5); c.restore(); }
    for (let i = 0; i < 6; i++) { const a = i / 6 * 6.283; circ(c, Math.sin(a) * 9, -Math.cos(a) * 9, 1.6, '#b0400f', 0); }
    for (let i = 0; i < 3; i++) { const a = i * 2.1; c.strokeStyle = INK; c.lineWidth = 1.5; c.beginPath(); c.moveTo(0, 0); c.lineTo(Math.sin(a) * 10, -Math.cos(a) * 10); c.stroke(); circ(c, Math.sin(a) * 10, -Math.cos(a) * 10, 2.2, '#d6451a', 1); }
  } else if (type === 'lavender') {
    c.strokeStyle = INK; c.lineWidth = 7; c.lineCap = 'round'; c.beginPath(); c.moveTo(0, 22); c.lineTo(0, -22); c.stroke(); c.strokeStyle = '#7fbf6a'; c.lineWidth = 3.5; c.stroke();
    for (let i = 0; i < 7; i++) { const yy = 16 - i * 6.4, w = 7 - i * 0.55; ell(c, -w * 0.55, yy, w * 0.55, 3.6, '#9a6bff', 1.8); ell(c, w * 0.55, yy, w * 0.55, 3.6, '#b48aff', 1.8); }
    ell(c, 0, -26, 3, 5, '#9a6bff', 1.8);
  }
  c.restore();
}

class Flowers extends Game {
  constructor(mg) {
    super(mg, 'flowers', 'Bouquet Boutique', '#e0589a');
    this.dur = FL.DURATION; this.timeLeft = FL.DURATION; this.introPose = 'stand';
    this.help = ['Read the order bubble, then build it!', 'Click flower buckets to add stems', '(or drag them onto the bouquet).', 'Pick wrapping paper + ribbon colour,', 'then press DELIVER (Enter). Be quick!'];
    this.initRun();
  }
  initRun() { this.stems = []; this.wrap = null; this.ribbon = null; this.cust = null; this.nCust = 0; this.served = 0; this.perfect = 0; this.drag = null; this.shakeB = 0; this.nextC = 0.2; }
  reset() { this.timeLeft = FL.DURATION; this.score = 0; this.initRun(); this.cust = this.newCust(); }
  newCust() {
    const n = this.nCust++; const nt = n < 2 ? 2 : rint(2, 3); const pool = FTYPES.slice(); const want = [];
    let total = 0;
    for (let i = 0; i < nt; i++) { const t = pool.splice(Math.floor(Math.random() * pool.length), 1)[0]; const cnt = n < 2 ? rint(1, 2) : rint(1, 3); want.push({ t, n: cnt }); total += cnt; }
    const pat = lerp(FL.PATIENCE0, FL.PATIENCE1, clamp(n / 8, 0, 1));
    return { x: -110, look: custLook(n * 3 + rint(0, 2)), pat, patMax: pat, order: { want, wrap: pick(WRAPS), ribbon: pick(RIBBONS) }, st: 'in', t: 0, pose: 'stand' };
  }
  counts() { const o = {}; for (const s of this.stems) o[s.t] = (o[s.t] || 0) + 1; return o; }
  add(t) {
    if (!this.cust || this.cust.st !== 'wait') return;
    if (this.stems.length >= FL.MAX_STEMS) { this.sfx('bad'); this.pop(FL.PIV[0], 250, 'Full!', '#ff6a5a', 28); return; }
    this.stems.push({ t, age: 0, jit: rnd(-1, 1), jit2: rnd(0, 1) }); this.sfx('click');
    this.burst(FL.PIV[0], 300, 6, [BUCKET_COL[t], '#fff'], 120, 200);
  }
  bucketX(i) { return 20 + i * 88; }
  deliver() {
    const cu = this.cust; if (!cu || cu.st !== 'wait') return;
    if (!this.stems.length) { this.sfx('bad'); this.pop(FL.PIV[0], 250, 'Add flowers!', '#ff6a5a', 28); return; }
    const o = cu.order, have = this.counts(); let s = 0, exact = true;
    for (const w of o.want) { const d = Math.abs((have[w.t] || 0) - w.n); if (d === 0) s += FL.PTS_EXACT; else { s += Math.max(0, FL.PTS_EXACT - FL.PTS_STEM * d) - 0; exact = false; } }
    let extra = 0; for (const t in have) if (!o.want.some((w) => w.t === t)) extra += have[t];
    s -= extra * FL.PTS_STEM; if (extra) exact = false;
    const wOk = this.wrap === o.wrap, rOk = this.ribbon === o.ribbon;
    if (wOk) s += FL.PTS_WRAP; if (rOk) s += FL.PTS_RIBBON;
    const perfect = exact && wOk && rOk;
    if (exact) s += Math.floor(clamp(cu.pat / cu.patMax, 0, 1) * FL.MAX_SPEED_BONUS);
    if (perfect) s += 6;
    s = Math.max(0, s); this.score += s; this.served++;
    cu.st = 'happy'; cu.t = 0; cu.res = { s, perfect }; cu.pose = s >= 20 ? 'jump' : 'dizzy';
    if (perfect) { this.perfect++; this.sfx('win'); this.pop(cu.x + 110, 250, 'PERFECT! +' + s, '#7dff6a', 36); }
    else if (s >= 20) { this.sfx('good'); this.pop(cu.x + 110, 250, 'Lovely! +' + s, '#ffe14a', 32); }
    else { this.sfx('bad'); this.pop(cu.x + 110, 250, s ? 'Meh... +' + s : 'Wrong!', '#ff7a6a', 32); }
    this.burst(FL.PIV[0], 330, 20, ['#ff9ec4', '#ffe14a', '#fff', '#b48aff'], 260);
  }
  updatePlay(dt) {
    const cu = this.cust;
    if (cu) {
      cu.t += dt;
      if (cu.st === 'in') { cu.x = lerp(-110, 118, easeOutCubic(cu.t / 0.8)); if (cu.t >= 0.8) { cu.st = 'wait'; cu.t = 0; } }
      else if (cu.st === 'wait') { cu.pat -= dt; if (cu.pat <= 0) { cu.st = 'out'; cu.t = 0; cu.pose = 'dizzy'; this.sfx('bad'); this.pop(cu.x + 90, 280, 'Too slow!', '#ff7a6a', 30); this.addPenalty(); } }
      else if (cu.st === 'happy') { if (cu.t > 1.1) { cu.st = 'out'; cu.t = 0; } }
      else if (cu.st === 'out') { cu.x -= 380 * dt; if (cu.x < -130) { this.cust = null; this.stems = []; this.wrap = null; this.ribbon = null; this.nextC = 0.35; } }
    } else { this.nextC -= dt; if (this.nextC <= 0) this.cust = this.newCust(); }
    for (const s of this.stems) s.age += dt;
    if (cu && cu.st === 'out' && cu.t < 0.01) { /* keep bouquet until gone */ }
  }
  addPenalty() { this.score = Math.max(0, this.score - 3); }
  swatchPos(kind, i) { return [826 + (i % 2) * 62 - 31, (kind === 'wrap' ? 150 : 310) + Math.floor(i / 2) * 58]; }
  onDown(x, y) {
    for (let i = 0; i < FTYPES.length; i++) if (this.rect(this.bucketX(i), 430, FL.BUCKET_W - 2, 160, x, y)) { this.drag = { t: FTYPES[i], x, y, x0: x, y0: y, i }; return; }
    for (let i = 0; i < 4; i++) {
      const w = this.swatchPos('wrap', i), r = this.swatchPos('ribbon', i);
      if (Math.hypot(x - w[0], y - w[1]) < 26) { this.wrap = WRAPS[i]; this.sfx('click'); return; }
      if (Math.hypot(x - r[0], y - r[1]) < 26) { this.ribbon = RIBBONS[i]; this.sfx('click'); return; }
    }
    if (this.hit(840, 540, 180, 58, x, y)) { this.deliver(); return; }
    if (this.hit(842, 448, 128, 36, x, y)) { this.stems = []; this.sfx('click'); }
  }
  onMove(x, y) { if (this.drag) { this.drag.x = x; this.drag.y = y; } }
  onUp(x, y) {
    const d = this.drag; this.drag = null; if (!d) return;
    const onB = this.rect(this.bucketX(d.i), 430, FL.BUCKET_W - 2, 160, x, y), onBq = Math.hypot(x - FL.PIV[0], y - 340) < 150;
    if (onB || onBq) this.add(d.t);
  }
  onKey(code) { if (code === 'Enter' || code === 'Space') this.deliver(); }
  payout() { return clamp(Math.floor(this.score / FL.COIN_DIV), 0, FL.COIN_MAX); }
  extraLines(c) { txt(c, 'Bouquets: ' + this.served + '    Perfect: ' + this.perfect, 0, 8, 24, '#7a6a55', 'center', null); }

  drawBouquet(c) {
    const [px, py] = FL.PIV; const n = this.stems.length; const cu = this.cust;
    let ox = 0; if (cu && cu.st === 'out') ox = 0;
    const order = this.stems.slice().sort((a, b) => a.t < b.t ? -1 : a.t > b.t ? 1 : 0);
    const pts = order.map((s, i) => {
      const f = n > 1 ? (i / (n - 1)) * 2 - 1 : 0, ang = f * Math.min(0.85, 0.2 + n * 0.1), L = 150 + Math.cos(f * 1.4) * 34 + (i % 2) * 18 + s.jit * 6;
      const e = easeOutBack(clamp(s.age * 3.5, 0, 1)); return { s, x: px + Math.sin(ang) * L * e, y: py - Math.cos(ang) * L * e + 6 * (1 - e) * 0, ang };
    });
    c.save();
    // stems
    for (const p of pts) { c.strokeStyle = INK; c.lineWidth = 7; c.lineCap = 'round'; c.beginPath(); c.moveTo(px, py + 30); c.quadraticCurveTo(lerp(px, p.x, 0.4), lerp(py, p.y, 0.6), p.x, p.y + 8); c.stroke(); c.strokeStyle = '#4caf50'; c.lineWidth = 3.8; c.stroke(); }
    // cone
    const w = this.wrap || '#e6e0f0';
    c.beginPath(); c.moveTo(px - 74, py + 12); c.lineTo(px + 74, py + 12); c.lineTo(px + 10, py + 96); c.quadraticCurveTo(px, py + 104, px - 10, py + 96); c.closePath(); paint(c, vgrad(c, py, py + 100, mix(w, '#ffffff', 0.3), w), 4);
    c.beginPath(); c.moveTo(px - 74, py + 12); c.lineTo(px - 6, py + 48); c.lineTo(px - 14, py + 96); c.closePath(); c.fillStyle = 'rgba(255,255,255,.28)'; c.fill();
    c.strokeStyle = 'rgba(43,34,48,.35)'; c.lineWidth = 2; c.beginPath(); c.moveTo(px - 74, py + 12); c.lineTo(px + 4, py + 52); c.lineTo(px + 74, py + 12); c.stroke();
    for (let i = 0; i < 6; i++) circ(c, px - 40 + i * 16, py + 30 + (i % 2) * 18 + (i > 2 ? 6 : 0), 2.6, 'rgba(255,255,255,.55)', 0);
    ell(c, px, py + 12, 74, 9, mix(w, '#000000', 0.12), 3.5);
    // ribbon
    if (this.ribbon) { const rb = this.ribbon; c.save(); c.beginPath(); c.moveTo(px - 52, py + 34); c.quadraticCurveTo(px, py + 50, px + 52, py + 34); c.lineTo(px + 46, py + 46); c.quadraticCurveTo(px, py + 62, px - 46, py + 46); c.closePath(); paint(c, rb, 3);
      c.translate(px, py + 52); ell(c, -17, 2, 15, 9, rb, 3, -0.5); ell(c, 17, 2, 15, 9, rb, 3, 0.5); circ(c, 0, 3, 6, mix(rb, '#000000', 0.15), 2.5);
      poly(c, [[-4, 8], [-14, 34], [-4, 28]], rb, 2.5); poly(c, [[4, 8], [14, 34], [4, 28]], rb, 2.5); c.restore(); }
    // blooms
    for (const p of pts) { const e = easeOutBack(clamp(p.s.age * 3.5, 0, 1)); drawFlower(c, p.s.t, p.x, p.y, 1.55 * e, p.ang * 0.8); }
    c.restore();
  }
  drawScene(c) {
    c.fillStyle = vgrad(c, 0, 430, '#ffe3ef', '#ffc9de'); c.fillRect(0, 0, W, 430);
    for (let i = 0; i < 30; i++) for (let j = 0; j < 8; j++) circ(c, i * 34 + (j % 2) * 17, 12 + j * 54, 3, 'rgba(255,255,255,.55)', 0);
    // window with awning
    rr(c, 560, 70, 190, 190, 10); paint(c, vgrad(c, 70, 260, '#bfe9ff', '#e8f8ff'), 4);
    c.strokeStyle = INK; c.lineWidth = 4; c.beginPath(); c.moveTo(655, 70); c.lineTo(655, 260); c.moveTo(560, 165); c.lineTo(750, 165); c.stroke();
    for (let i = 0; i < 8; i++) { c.beginPath(); c.moveTo(540 + i * 28, 40); c.lineTo(540 + (i + 1) * 28, 40); c.lineTo(540 + (i + 1) * 28 - 4, 76); c.arc(540 + i * 28 + 12, 76, 12, 0, Math.PI); c.lineTo(540 + i * 28, 40); c.closePath(); paint(c, i % 2 ? '#fff' : '#e0589a', 3); }
    // shelf with pots
    rr(c, 215, 270, 150, 12, 3); paint(c, '#c98643'); for (let i = 0; i < 3; i++) { rr(c, 230 + i * 44, 246, 30, 24, 4); paint(c, ['#ff9a6a', '#8fd6a5', '#ffd25a'][i]); circ(c, 245 + i * 44, 238, 9, ['#e8405e', '#fff', '#b48aff'][i], 2.5); }
    // counter
    c.fillStyle = vgrad(c, 420, 600, '#c98a52', '#9a6538'); c.fillRect(0, 420, W, 180);
    c.fillStyle = '#e8b27a'; c.fillRect(0, 420, W, 14); c.strokeStyle = INK; c.lineWidth = 3; c.beginPath(); c.moveTo(0, 434); c.lineTo(W, 434); c.stroke();
    // buckets
    FTYPES.forEach((t, i) => {
      const bx = this.bucketX(i), by = 505; const col = BUCKET_COL[t];
      for (let k = 0; k < 4; k++) { const fx = bx + 16 + k * 17, fy = by - 30 - (k % 2) * 16 - (k === 1 ? 4 : 0); c.strokeStyle = INK; c.lineWidth = 6; c.beginPath(); c.moveTo(fx, by + 4); c.lineTo(fx, fy); c.stroke(); c.strokeStyle = '#4caf50'; c.lineWidth = 3; c.stroke(); drawFlower(c, t, fx, fy, 0.9, (k - 1.5) * 0.15); }
      c.beginPath(); c.moveTo(bx + 2, by); c.lineTo(bx + 80, by); c.lineTo(bx + 71, by + 80); c.lineTo(bx + 11, by + 80); c.closePath(); paint(c, vgrad(c, by, by + 80, mix(col, '#ffffff', 0.35), col), 3.5);
      c.fillStyle = 'rgba(255,255,255,.35)'; c.fillRect(bx + 10, by + 6, 10, 66);
      rr(c, bx + 14, by + 30, 54, 22, 6); paint(c, '#fff', 2.5); txt(c, FNAME[t], bx + 41, by + 41, FNAME[t].length > 7 ? 9 : 11, INK, 'center', null);
      if (this.drag && this.drag.i === i) { rr(c, bx - 2, by - 62, 86, 148, 12); c.strokeStyle = '#ffe14a'; c.lineWidth = 4; c.stroke(); }
    });
    // right panel
    rr(c, 768, 96, 176, 412, 18); paint(c, 'rgba(255,255,255,.75)', 3.5);
    txt(c, 'WRAP', 856, 112, 17, '#b03a78', 'center', null); txt(c, 'RIBBON', 856, 272, 17, '#b03a78', 'center', null);
    for (let i = 0; i < 4; i++) {
      for (const kind of ['wrap', 'ribbon']) {
        const p = this.swatchPos(kind, i), col = kind === 'wrap' ? WRAPS[i] : RIBBONS[i], sel = (kind === 'wrap' ? this.wrap : this.ribbon) === col;
        circ(c, p[0], p[1], 22 + (sel ? 3 : 0), col, sel ? 5 : 3);
        if (sel) { c.strokeStyle = '#ffe14a'; c.lineWidth = 3; c.beginPath(); c.arc(p[0], p[1], 29, 0, 6.283); c.stroke(); }
        if (kind === 'ribbon') { c.fillStyle = 'rgba(255,255,255,.55)'; c.fillRect(p[0] - 3, p[1] - 22, 6, 44); }
      }
    }
    this.button(c, 842, 448, 128, 36, 'Clear', '#8a8fa8', false);
    this.button(c, 840, 540, 180, 58, 'Deliver!', '#2fb344');
    // customer + bubble
    const cu = this.cust;
    ell(c, 120, 429, 64, 11, 'rgba(0,0,0,.22)', 0);
    if (cu) {
      drawPigeon(c, cu.x, 420, 1.55, cu.look, cu.st === 'happy' || cu.st === 'out' ? cu.pose : 'stand', this.t);
      if (cu.st === 'wait' || cu.st === 'happy') this.drawOrder(c, cu);
    }
    this.drawBouquet(c);
    if (this.drag && Math.hypot(this.drag.x - this.drag.x0, this.drag.y - this.drag.y0) > 14) drawFlower(c, this.drag.t, this.drag.x, this.drag.y, 1.3, 0);
  }
  drawOrder(c, cu) {
    const o = cu.order, x = 196, y = 52, w = 330, h = 168;
    speech(c, x, y, w, h);
    txt(c, 'One bouquet please!', x + w / 2, y + 20, 19, '#b03a78', 'center', null);
    bar(c, x + 24, y + h + 10, w - 48, 14, cu.pat / cu.patMax, cu.pat / cu.patMax > 0.3 ? '#3ab54a' : '#e8452c');
    const have = this.counts();
    o.want.forEach((wt, i) => {
      const ix = x + 54 + i * 100, iy = y + 66; drawFlower(c, wt.t, ix, iy, 1.05); const got = have[wt.t] || 0, ok = got === wt.n;
      txt(c, got + '/' + wt.n, ix, iy + 38, 22, ok ? '#26b04a' : got > wt.n ? '#e8452c' : '#3b2f2f', 'center', null);
    });
    const sy = y + 138; txt(c, 'Wrap', x + 40, sy, 15, '#3b2f2f', 'left', null); circ(c, x + 100, sy, 12, o.wrap, 2.5); if (this.wrap === o.wrap) txt(c, '✓', x + 124, sy, 20, '#26b04a', 'left', null);
    txt(c, 'Ribbon', x + 168, sy, 15, '#3b2f2f', 'left', null); circ(c, x + 238, sy, 12, o.ribbon, 2.5); if (this.ribbon === o.ribbon) txt(c, '✓', x + 262, sy, 20, '#26b04a', 'left', null);
  }
  drawHud(c) {
    bar(c, 20, 12, 920, 20, this.timeLeft / FL.DURATION, this.timeLeft / FL.DURATION > 0.25 ? '#3ab54a' : '#e8452c');
    txt(c, Math.ceil(this.timeLeft) + 's', 480, 22, 16, '#fff', 'center', INK, 3);
    txt(c, 'Score ' + Math.round(this.score), 24, 74, 28, '#c0407f', 'left', '#fff', 5);
    coinIcon(c, 34, 112, 13); txt(c, '× ' + this.payout(), 54, 112, 22, '#c0407f', 'left', '#fff', 4);
  }
}

// ============================================================ 5) DONUT DASH
const DN = {
  DURATION: 60, FRY_TIME: 9, RAW_END: 0.4, GOLD_END: 0.7, PERF_A: 0.5, PERF_B: 0.62, SLOTS: 3, MAX_TICKETS: 3,
  PAT0: 34, PAT1: 24, PTS_BASE: 10, PTS_RAW: 4, PTS_PERFECT: 8, PTS_SPEED: 6, PTS_TRASH: 4, PTS_NOORDER: 3, PTS_BOXFULL: 5, COIN_DIV: 4, COIN_MAX: 60,
};
const GLAZES = [{ id: 'pink', c: '#ff8fb8', n: 'Strawberry' }, { id: 'choc', c: '#6b3a1f', n: 'Chocolate' }, { id: 'vanilla', c: '#fff1c9', n: 'Vanilla' }, { id: 'blue', c: '#6f7bff', n: 'Blueberry' }];
const TOPPINGS = [{ id: 'rainbow', n: 'Sprinkles' }, { id: 'nuts', n: 'Nuts' }, { id: 'coconut', n: 'Coconut' }, { id: 'none', n: 'Plain' }];
const glazeOf = (id) => GLAZES.find((g) => g.id === id);

function doughColor(p) {
  if (p < DN.RAW_END) return mix('#f6e2b4', '#efc878', p / DN.RAW_END);
  if (p < DN.GOLD_END) return mix('#efc878', '#d89030', (p - DN.RAW_END) / (DN.GOLD_END - DN.RAW_END));
  return mix('#d89030', '#3b2418', clamp((p - DN.GOLD_END) / 0.3, 0, 1));
}
function drawDonut(c, x, y, r, dough, glaze, top, rot = 0, seed = 1) {
  c.save(); c.translate(x, y); c.rotate(rot);
  const ring = (rad, hole) => { c.beginPath(); c.moveTo(rad, 0); c.arc(0, 0, rad, 0, 6.283); c.moveTo(hole, 0); c.arc(0, 0, hole, 0, 6.283, true); };
  ring(r, r * 0.3); c.fillStyle = dough; c.fill('evenodd'); c.lineWidth = Math.max(2, r / 12); c.strokeStyle = INK; c.stroke();
  if (glaze) {
    c.beginPath(); const n = 28;
    for (let i = 0; i <= n; i++) { const a = i / n * 6.283, rr_ = r * (0.88 + Math.sin(a * 6 + seed) * 0.04 + Math.sin(a * 3) * 0.02); i ? c.lineTo(Math.cos(a) * rr_, Math.sin(a) * rr_) : c.moveTo(Math.cos(a) * rr_, Math.sin(a) * rr_); }
    c.closePath(); c.moveTo(r * 0.36, 0); c.arc(0, 0, r * 0.36, 0, 6.283, true); c.fillStyle = glaze; c.fill('evenodd'); c.lineWidth = Math.max(1.5, r / 16); c.strokeStyle = 'rgba(43,34,48,.8)'; c.stroke();
    c.beginPath(); c.arc(0, 0, r * 0.62, 3.5, 4.4); c.strokeStyle = 'rgba(255,255,255,.4)'; c.lineWidth = r / 9; c.lineCap = 'round'; c.stroke();
    const cols = ['#ff4f6d', '#ffd23c', '#3be0c8', '#7a5cff', '#6bff6b', '#ff8a2a'];
    for (let i = 0; i < 22; i++) {
      const a = (i * 2.399 + seed), d = r * (0.46 + ((i * 37) % 10) / 10 * 0.36); const px = Math.cos(a) * d, py = Math.sin(a) * d;
      if (top === 'rainbow') { c.save(); c.translate(px, py); c.rotate(a * 3); c.fillStyle = cols[i % 6]; c.fillRect(-r * 0.12, -r * 0.03, r * 0.24, r * 0.065); c.restore(); }
      else if (top === 'nuts' && i < 12) { circ(c, px, py, r * 0.085, '#b97a3a', Math.max(1, r / 22)); }
      else if (top === 'coconut') { c.fillStyle = '#fff'; c.beginPath(); c.ellipse(px, py, r * 0.1, r * 0.04, a, 0, 6.283); c.fill(); }
    }
  }
  c.restore();
}

class Donuts extends Game {
  constructor(mg) {
    super(mg, 'donuts', 'Donut Dash', '#e86aa0');
    this.dur = DN.DURATION; this.timeLeft = DN.DURATION; this.introPose = 'stand';
    this.help = ['Drop dough in the fryer (click a slot).', 'Click a frying donut when the bar is GOLDEN!', 'Take it, pick glaze + topping to match', 'a ticket, then press BOX IT. Burnt = trash.', 'Keep all 3 fryer slots busy!'];
    this.initRun();
  }
  initRun() { this.slots = []; for (let i = 0; i < DN.SLOTS; i++) this.slots.push({ st: 'empty', p: 0, q: null, flip: 0 }); this.tickets = []; this.station = null; this.boxList = []; this.nT = 0; this.nextT = 0.3; this.served = 0; this.perfect = 0; this.sel = { glaze: null, top: 'none' }; this.stationPulse = 0; this.boxes = 0; this.chefHop = 0; }
  reset() { this.timeLeft = DN.DURATION; this.score = 0; this.initRun(); }
  slotXY(i) { return [215 + i * 165, 292]; }
  jarX(i) { return 30 + i * 114; }
  newTicket() {
    const n = this.nT++; const pat = lerp(DN.PAT0, DN.PAT1, clamp(n / 10, 0, 1));
    return { n: n + 1, glaze: pick(GLAZES).id, top: pick(TOPPINGS).id, pat, patMax: pat, age: 0, look: custLook(n * 5 + rint(0, 3)), leave: 0 };
  }
  dropDough(i) {
    const s = this.slots[i]; if (s.st !== 'empty') return false;
    s.st = 'fry'; s.p = 0; s.q = null; s.flip = 0; this.sfx('click'); this.burst(...this.slotXY(i), 8, ['#fff3c8', '#ffe7a0'], 120, 150); return true;
  }
  flip(i) {
    const s = this.slots[i]; if (s.st !== 'fry') return; const p = s.p, [x, y] = this.slotXY(i);
    s.flip = 1;
    if (p >= DN.PERF_A && p <= DN.PERF_B) { s.q = 'perfect'; s.st = 'done'; this.pop(x, y - 60, 'PERFECT!', '#7dff6a', 32); this.sfx('win'); this.burst(x, y, 16, ['#ffd23c', '#fff3b0'], 220); }
    else if (p >= DN.RAW_END && p <= DN.GOLD_END) { s.q = 'golden'; s.st = 'done'; this.pop(x, y - 60, 'Golden!', '#ffe14a', 28); this.sfx('good'); }
    else if (p < DN.RAW_END) { s.q = 'raw'; s.st = 'done'; this.pop(x, y - 60, 'Raw...', '#ffb0a0', 26); this.sfx('bad'); }
    else { s.q = 'burnt'; s.st = 'burnt'; this.pop(x, y - 60, 'Burnt!', '#ff6a5a', 28); this.sfx('bad'); }
  }
  take(i) {
    const s = this.slots[i]; if (s.st === 'burnt') { this.score = Math.max(0, this.score - DN.PTS_TRASH); this.pop(...this.slotXY(i), '-' + DN.PTS_TRASH + ' Trash', '#ff8a7a', 24); s.st = 'empty'; this.sfx('tick'); return; }
    if (s.st !== 'done') return;
    if (this.station) { this.sfx('bad'); this.pop(710, 250, 'Station busy!', '#ff8a7a', 22); return; }
    this.station = { q: s.q, age: 0 }; this.sel = { glaze: null, top: 'none' }; s.st = 'empty'; this.sfx('click');
  }
  boxIt() {
    const st = this.station; if (!st) return;
    if (!this.sel.glaze) { this.sfx('bad'); this.pop(710, 250, 'Pick a glaze!', '#ff8a7a', 22); return; }
    const gl = this.sel.glaze, tp = this.sel.top || 'none';
    const cands = this.tickets.filter((t) => t.glaze === gl && t.top === tp && !t.leave).sort((a, b) => a.pat - b.pat);
    this.boxList.push({ glaze: gl, top: tp, q: st.q }); if (this.boxList.length > 6) this.boxList.shift(); this.boxes++;
    this.station = null; this.chefHop = 1;
    if (!cands.length) { this.score = Math.max(0, this.score - DN.PTS_NOORDER); this.pop(850, 250, 'No order! -' + DN.PTS_NOORDER, '#ff8a7a', 24); this.sfx('bad'); }
    else {
      const t = cands[0]; let pts = st.q === 'raw' ? DN.PTS_RAW : DN.PTS_BASE; if (st.q === 'perfect') pts += DN.PTS_PERFECT; pts += Math.floor(clamp(t.pat / t.patMax, 0, 1) * DN.PTS_SPEED);
      this.score += pts; this.served++; if (st.q === 'perfect') this.perfect++; t.leave = 1; t.pts = pts;
      this.pop(850, 250, '+' + pts, '#ffe14a', 36); this.sfx(st.q === 'raw' ? 'good' : 'coin'); this.burst(850, 300, 14, ['#ff8fb8', '#ffe14a', '#fff'], 220);
    }
    if (this.boxes % 6 === 0) { this.score += DN.PTS_BOXFULL; this.pop(850, 330, 'Box full! +' + DN.PTS_BOXFULL, '#7dff6a', 26); this.sfx('win'); }
  }
  updatePlay(dt) {
    for (const s of this.slots) { if (s.flip > 0) s.flip = Math.max(0, s.flip - dt * 2.5); if (s.st === 'fry') { s.p += dt / DN.FRY_TIME; if (s.p >= 1) { s.p = 1; s.st = 'burnt'; s.q = 'burnt'; this.sfx('bad'); this.pop(...this.slotXY(this.slots.indexOf(s)), 'Burnt!', '#ff6a5a', 28); } } }
    this.nextT -= dt; if (this.nextT <= 0 && this.tickets.filter((t) => !t.leave).length < DN.MAX_TICKETS) { this.tickets.push(this.newTicket()); this.nextT = rnd(2.5, 4.5); }
    for (const t of this.tickets) {
      t.age += dt;
      if (t.leave) { t.leave += dt * 2.2; }
      else { t.pat -= dt; if (t.pat <= 0) { t.leave = 1; t.angry = true; this.score = Math.max(0, this.score - 3); this.sfx('bad'); this.pop(this.ticketX(this.tickets.indexOf(t)) + 80, 120, 'Left! -3', '#ff7a6a', 24); } }
    }
    this.tickets = this.tickets.filter((t) => t.leave < 2.4);
    if (this.station) this.station.age += dt; this.chefHop = Math.max(0, this.chefHop - dt * 3); this.stationPulse = Math.max(0, this.stationPulse - dt * 4);
  }
  ticketX(i) { return 18 + i * 182; }
  activeTickets() { return this.tickets.filter((t) => !t.leave); }
  onDown(x, y) {
    for (let i = 0; i < DN.SLOTS; i++) { const [sx, sy] = this.slotXY(i); if (Math.hypot(x - sx, y - sy) < 62 || this.rect(sx - 70, 350, 140, 36, x, y)) { const s = this.slots[i]; if (s.st === 'empty') this.dropDough(i); else if (s.st === 'fry') this.flip(i); else this.take(i); return; } }
    if (this.hit(70, 316, 100, 100, x, y)) { const i = this.slots.findIndex((s) => s.st === 'empty'); if (i >= 0) this.dropDough(i); else { this.sfx('bad'); this.pop(70, 250, 'Fryer full!', '#ff8a7a', 22); } return; }
    for (let i = 0; i < 8; i++) if (this.rect(this.jarX(i), 450, 104, 140, x, y)) {
      if (i < 4) this.sel.glaze = GLAZES[i].id; else this.sel.top = TOPPINGS[i - 4].id;
      this.sfx('click'); this.stationPulse = 1; return;
    }
    if (this.hit(710, 392, 150, 46, x, y)) this.boxIt();
  }
  onKey(code) { if (code === 'Enter' || code === 'Space') this.boxIt(); }
  payout() { return clamp(Math.floor(this.score / DN.COIN_DIV), 0, DN.COIN_MAX); }
  extraLines(c) { txt(c, 'Donuts served: ' + this.served + '    Perfect: ' + this.perfect, 0, 8, 24, '#7a6a55', 'center', null); }
  drawTicket(c, t, i) {
    const x = this.ticketX(i), k = easeOutBack(clamp(t.age * 3, 0, 1)); const lv = t.leave ? clamp(t.leave - 1, 0, 1) : 0;
    c.save(); c.translate(x + 85, 112); c.scale(k * (1 - lv * 0.3), k * (1 - lv * 0.3)); c.globalAlpha = 1 - lv; c.rotate((i - 1) * 0.02 + lv * 0.2);
    rr(c, -82, -66, 164, 132, 8); paint(c, t.leave && !t.angry ? '#e6ffe0' : '#fffdf0', 3.5);
    c.fillStyle = t.angry ? '#c0392b' : '#e86aa0'; c.fillRect(-80, -64, 160, 22); txt(c, 'ORDER #' + t.n, 0, -53, 15, '#fff', 'center', null);
    drawDonut(c, -46, -4, 26, '#e8b868', glazeOf(t.glaze).c, t.top, 0.3, t.n);
    txt(c, glazeOf(t.glaze).n, 6, -14, 13, '#3b2f2f', 'left', null); txt(c, TOPPINGS.find((q) => q.id === t.top).n, 6, 6, 13, '#3b2f2f', 'left', null);
    if (!t.leave) bar(c, -66, 40, 132, 12, t.pat / t.patMax, t.pat / t.patMax > 0.3 ? '#3ab54a' : '#e8452c');
    else txt(c, t.angry ? 'Gone!' : 'Thanks!', 0, 46, 18, t.angry ? '#c0392b' : '#26b04a', 'center', null);
    c.restore();
  }
  drawFryer(c) {
    // oil vat
    rr(c, 120, 232, 500, 200, 22); paint(c, vgrad(c, 232, 432, '#d7dce6', '#9aa2b3'), 4.5);
    rr(c, 132, 244, 476, 142, 16); paint(c, vgrad(c, 244, 386, '#f2b43a', '#d98a1c'), 3.5);
    for (let i = 0; i < 14; i++) { const bx = 150 + (i * 53) % 440, by = 262 + ((i * 29 + Math.floor(this.t * 20 + i * 7)) % 100); ell(c, bx, by, 5, 4, 'rgba(255,240,170,.45)', 0); }
    // face on front
    rr(c, 132, 392, 476, 32, 8); paint(c, '#b6bdcc', 3);
    circ(c, 340, 408, 7, '#fff', 2.5); circ(c, 400, 408, 7, '#fff', 2.5); circ(c, 341 + Math.sin(this.t) * 1.5, 409, 3, INK, 0); circ(c, 401 + Math.sin(this.t) * 1.5, 409, 3, INK, 0);
    c.strokeStyle = INK; c.lineWidth = 3; c.beginPath(); c.arc(370, 410, 10, 0.2, 2.9); c.stroke(); ell(c, 318, 414, 7, 4, 'rgba(255,100,130,.5)', 0); ell(c, 422, 414, 7, 4, 'rgba(255,100,130,.5)', 0);
    for (const hx of [136, 592]) { rr(c, hx - 6, 300, 18, 60, 6); paint(c, '#7a7f90', 3); }
    // steam
    for (let i = 0; i < 6; i++) { const ph = (this.t * 0.6 + i / 6) % 1, sx = 170 + i * 88 + Math.sin(this.t * 2 + i) * 8; c.globalAlpha = (1 - ph) * 0.55; circ(c, sx, 236 - ph * 70, 10 + ph * 18, '#fff', 0); } c.globalAlpha = 1;
    // slots
    this.slots.forEach((s, i) => {
      const [x, y] = this.slotXY(i);
      circ(c, x, y, 52, 'rgba(120,60,0,.25)', 2.5);
      if (s.st === 'empty') { txt(c, '+', x, y, 40, 'rgba(255,255,255,.7)', 'center', null); }
      else {
        const bob = Math.sin(this.t * 3 + i) * 2, sc = 1 + Math.sin(s.flip * 3.14) * 0.25;
        const rot = s.flip * 6.283 * 0.5; const col = s.st === 'fry' ? doughColor(s.p) : s.q === 'perfect' ? '#e0a040' : s.q === 'golden' ? doughColor(0.55) : s.q === 'raw' ? doughColor(0.1) : doughColor(1);
        c.save(); c.translate(x, y + bob); c.scale(sc, sc * (0.4 + 0.6 * Math.abs(Math.cos(rot)))); drawDonut(c, 0, 0, 46, col, null, null, 0, 1); c.restore();
        if (s.st === 'fry') { // timing bar
          const bx = x - 66, by = 352, bw = 132; rr(c, bx, by, bw, 18, 9); paint(c, '#fff', 2.5);
          c.save(); rr(c, bx + 2, by + 2, bw - 4, 14, 7); c.clip();
          c.fillStyle = '#f6e2b4'; c.fillRect(bx, by, bw * DN.RAW_END, 18); c.fillStyle = '#e8a840'; c.fillRect(bx + bw * DN.RAW_END, by, bw * (DN.GOLD_END - DN.RAW_END), 18);
          c.fillStyle = '#7bd35a'; c.fillRect(bx + bw * DN.PERF_A, by, bw * (DN.PERF_B - DN.PERF_A), 18); c.fillStyle = '#4a2c1a'; c.fillRect(bx + bw * DN.GOLD_END, by, bw * (1 - DN.GOLD_END), 18); c.restore();
          const mx = bx + bw * s.p; poly(c, [[mx - 7, by - 9], [mx + 7, by - 9], [mx, by + 3]], '#fff', 2.5);
          txt(c, 'FLIP!', x, y - 56, 17, '#fff', 'center', INK, 3);
        } else if (s.st === 'done') { txt(c, 'TAKE', x, y - 56 + Math.sin(this.t * 6) * 3, 18, '#fff', 'center', INK, 3); }
        else if (s.st === 'burnt') { txt(c, 'TRASH', x, y - 56, 18, '#ff8a7a', 'center', INK, 3); for (let k = 0; k < 3; k++) { const ph = (this.t * 0.8 + k / 3) % 1; c.globalAlpha = (1 - ph) * 0.6; circ(c, x - 12 + k * 12, y - 20 - ph * 50, 7 + ph * 10, '#555', 0); } c.globalAlpha = 1; }
      }
    });
    // dough tray
    rr(c, 22, 262, 96, 108, 12); paint(c, vgrad(c, 262, 370, '#e8d9b8', '#bfae88'), 3.5);
    for (let i = 0; i < 3; i++) drawDonut(c, 70, 288 + i * 22, 24, '#f6e2b4', null, null, 0, 1);
    txt(c, 'DOUGH', 70, 358, 14, INK, 'center', null);
  }
  drawStation(c) {
    rr(c, 628, 190, 316, 250, 18); paint(c, 'rgba(255,255,255,.7)', 3.5);
    txt(c, 'DECORATE', 710, 206, 16, '#b0407f', 'center', null);
    circ(c, 710, 300, 70, '#fff', 3.5); circ(c, 710, 300, 62, '#f3eaf0', 0);
    const st = this.station;
    if (st) { const gl = this.sel.glaze ? glazeOf(this.sel.glaze).c : null; const k = easeOutBack(clamp(st.age * 4, 0, 1)) * (1 + this.stationPulse * 0.06); drawDonut(c, 710, 300, 56 * k, st.q === 'perfect' ? '#e0a040' : st.q === 'golden' ? doughColor(0.55) : doughColor(0.1), gl, this.sel.top, 0.4, 3); }
    else txt(c, 'empty', 710, 300, 18, '#b9a9b4', 'center', null);
    this.button(c, 710, 392, 150, 46, 'Box it!', st && this.sel.glaze ? '#2fb344' : '#9aa0aa', !!(st && this.sel.glaze));
    // box
    rr(c, 800, 238, 130, 140, 8); paint(c, '#d9a35a', 3.5); rr(c, 806, 244, 118, 128, 6); paint(c, '#b97f3a', 2.5);
    for (let i = 0; i < 6; i++) { const bx = 830 + (i % 2) * 62 - 0, by = 270 + Math.floor(i / 2) * 40; circ(c, bx - 6 + 12, by, 17, 'rgba(0,0,0,.2)', 0); const b = this.boxList[i]; if (b) drawDonut(c, bx + 6, by, 17, '#e8b868', glazeOf(b.glaze).c, b.top, i, i); }
    txt(c, 'BOX ' + this.boxList.length + '/6', 865, 396, 14, '#7a4a1a', 'center', null);
  }
  drawScene(c) {
    c.fillStyle = vgrad(c, 0, 440, '#c8f0e0', '#9fe0cc'); c.fillRect(0, 0, W, 450);
    c.strokeStyle = 'rgba(255,255,255,.35)'; c.lineWidth = 3; for (let i = 0; i < 20; i++) { c.beginPath(); c.moveTo(i * 52, 0); c.lineTo(i * 52, 450); c.stroke(); }
    c.fillStyle = vgrad(c, 440, 600, '#e8a8c8', '#c47aa0'); c.fillRect(0, 438, W, 162); c.strokeStyle = INK; c.lineWidth = 3; c.beginPath(); c.moveTo(0, 438); c.lineTo(W, 438); c.stroke();
    for (let i = 0; i < 48; i++) { c.fillStyle = i % 2 ? '#fff' : '#ff8fb8'; c.fillRect(i * 20, 438, 20, 10); }
    this.drawFryer(c); this.drawStation(c);
    this.activeTickets(); this.tickets.forEach((t, i) => this.drawTicket(c, t, i));
    // baker pigeon behind station top right
    drawPigeon(c, 880, 196 - this.chefHop * 14 * Math.abs(Math.sin(this.chefHop * 6)), 1.0, this.look, 'stand', this.t);
    // jars
    for (let i = 0; i < 8; i++) {
      const x = this.jarX(i), y = 462, isG = i < 4, o = isG ? GLAZES[i] : TOPPINGS[i - 4], sel = isG ? this.sel.glaze === o.id : this.station && this.sel.top === o.id;
      c.save(); c.translate(x, y + (sel ? -6 : 0));
      if (sel) { rr(c, -4, -4, 112, 134, 16); c.fillStyle = 'rgba(255,240,120,.85)'; c.fill(); }
      rr(c, 8, 18, 88, 100, 14); paint(c, 'rgba(255,255,255,.85)', 3.5); rr(c, 20, 4, 64, 20, 6); paint(c, isG ? '#e86aa0' : '#4a7fd0', 3);
      c.save(); rr(c, 12, 22, 80, 92, 11); c.clip();
      if (isG) { c.fillStyle = o.c; c.fillRect(8, 56, 90, 70); ell(c, 52, 56, 40, 8, mix(o.c, '#ffffff', 0.3), 0); }
      else if (o.id === 'rainbow') { const cols = ['#ff4f6d', '#ffd23c', '#3be0c8', '#7a5cff', '#6bff6b']; for (let k = 0; k < 40; k++) { c.save(); c.translate(18 + (k * 37) % 70, 62 + (k * 17) % 46); c.rotate(k * 1.7); c.fillStyle = cols[k % 5]; c.fillRect(-6, -2, 12, 4); c.restore(); } }
      else if (o.id === 'nuts') { for (let k = 0; k < 18; k++) circ(c, 20 + (k * 31) % 66, 64 + (k * 19) % 44, 7, '#b97a3a', 2); }
      else if (o.id === 'coconut') { for (let k = 0; k < 30; k++) { c.fillStyle = '#fff'; c.beginPath(); c.ellipse(18 + (k * 41) % 70, 62 + (k * 23) % 46, 7, 3, k, 0, 6.283); c.fill(); } }
      else { txt(c, 'none', 52, 80, 20, '#aaa', 'center', null); }
      c.restore();
      txt(c, o.n, 52, 104, 13, '#fff', 'center', INK, 3);
      c.restore();
    }
    txt(c, 'GLAZE', 30 + 2 * 114 - 5, 452, 14, '#fff', 'center', INK, 3); txt(c, 'TOPPING', 30 + 6 * 114 - 5, 452, 14, '#fff', 'center', INK, 3);
  }
  drawHud(c) {
    bar(c, 20, 12, 920, 20, this.timeLeft / DN.DURATION, this.timeLeft / DN.DURATION > 0.25 ? '#3ab54a' : '#e8452c');
    txt(c, Math.ceil(this.timeLeft) + 's', 480, 22, 16, '#fff', 'center', INK, 3);
    txt(c, 'Score ' + Math.round(this.score), 640, 62, 28, '#fff', 'left');
    coinIcon(c, 650, 100, 13); txt(c, '× ' + this.payout(), 672, 100, 22, '#fff', 'left');
  }
}

// ============================================================ 6) DELIVERY RUSH (bike)
const BK = {
  DURATION: 70, HEARTS: 3, SPEED0: 270, SPEED1: 470, RAMP: 62, GROUND: 520, BIKE_X: 200,
  JUMP_V: 720, G_HOLD: 1500, G_FREE: 2600, G_FAST: 4200, BRAKE: 0.55, CRASH_T: 0.9, INVULN: 1.8,
  BLD_W: 240, SIDEWALK: 398, TOSS_T: 0.6, TOSS_G: 1400, TOSS_LEAD: 250, TOSS_CD: 0.45, STOOP_HALF: 70, PERFECT_DX: 24,
  PTS_DELIVER: 10, PTS_PERFECT: 20, PTS_WRONG: 8, PTS_MISS_THROW: 2, PTS_MISS_STOOP: 4, COIN_PER_DELIVERY: 3, COIN_PERFECT: 2, DIST_PER_COIN: 120, PX_PER_M: 40, COIN_MAX: 70,
};
const hash = (i) => { let h = Math.imul(i + 1, 2654435761) >>> 0; h ^= h >>> 15; h = Math.imul(h, 2246822519) >>> 0; return (h >>> 0) / 4294967296; };
const BRICKS = ['#c4684a', '#a8573f', '#d08a5a', '#8f5a4a', '#b9795f'], FACADES = ['#e8c9a0', '#cfd9e8', '#e8d2d8', '#d6e8cf'];

function foodIcon(c, k, x, y, s = 1) {
  c.save(); c.translate(x, y); c.scale(s, s);
  if (k === 'noodle') {
    c.strokeStyle = INK; c.lineWidth = 3; c.beginPath(); c.moveTo(-4, -6); c.lineTo(14, -30); c.moveTo(4, -6); c.lineTo(20, -26); c.stroke();
    poly(c, [[-18, -8], [18, -8], [13, 18], [-13, 18]], '#fff', 3); poly(c, [[-18, -8], [18, -8], [16, -2], [-16, -2]], '#e8352f', 2);
    c.strokeStyle = '#f0c060'; c.lineWidth = 3; c.beginPath(); c.moveTo(-10, -9); c.quadraticCurveTo(-4, -16, 2, -9); c.quadraticCurveTo(8, -16, 12, -9); c.stroke();
  } else if (k === 'pizza') {
    poly(c, [[-18, -14], [18, -14], [0, 20]], '#ffd24a', 3); rr(c, -19, -18, 38, 8, 4); paint(c, '#e8b865', 3); circ(c, -4, -4, 5, '#d63a2f', 2); circ(c, 6, -7, 4.5, '#d63a2f', 2); circ(c, 0, 8, 4, '#d63a2f', 2);
  } else if (k === 'burger') {
    ell(c, 0, -8, 20, 12, '#e0a050', 3); rr(c, -21, -2, 42, 7, 3); paint(c, '#6a3a1a', 2.5); rr(c, -22, 4, 44, 5, 2); paint(c, '#5cc04a', 2); rr(c, -20, 10, 40, 10, 5); paint(c, '#e0a050', 3);
  } else if (k === 'sushi') {
    rr(c, -16, -12, 32, 26, 6); paint(c, '#fff', 3); circ(c, 0, 0, 9, '#2b6a4a', 2.5); circ(c, 0, 0, 5.5, '#ffb09a', 2); poly(c, [[-16, 14], [16, 14], [0, 22]], '#ff7a6a', 0);
  }
  c.restore();
}
const DECOYS = ['pizza', 'burger', 'sushi'];

class Bike extends Game {
  constructor(mg) {
    super(mg, 'bike', 'Delivery Rush', '#d8402e');
    this.dur = BK.DURATION; this.timeLeft = BK.DURATION; this.introPose = 'ride';
    this.help = ['Deliver noodles to the doors with a bowl!', 'Up / Space: hop (hold = higher)   Down: duck / brake', 'F or click a stoop: toss the bag.', 'Touch: tap left to hop, bottom-left to duck,', 'tap a stoop to toss. 3 crashes = game over!'];
    this.initRun();
  }
  initRun() {
    this.cam = 0; this.speedM = 1; this.jy = 0; this.jv = 0; this.hearts = BK.HEARTS; this.crashT = 0; this.invT = 0; this.duck = false; this.hold = false; this.bags = []; this.obs = []; this.blds = [];
    this.nextB = 480; this.nextO = 650; this.delivered = 0; this.perfect = 0; this.cd = 0; this.dist = 0; this.wheel = 0; this.penalty = 0; this.nB = 0; this.pdHold = null; this.overTitle = "Time's up!";
  }
  reset() { this.timeLeft = BK.DURATION; this.score = 0; this.initRun(); }
  get speed() { return (BK.SPEED0 + (BK.SPEED1 - BK.SPEED0) * clamp((BK.DURATION - this.timeLeft) / BK.RAMP, 0, 1)) * this.speedM; }
  spawnB() {
    const n = this.nB++; const stoop = n < 1 ? false : (n % 3 === 1 ? true : Math.random() < 0.08);
    const b = { wx: this.nextB, type: stoop ? 'stoop' : 'shop', i: n, done: false, icon: null, open: 0, miss: false };
    if (stoop) b.icon = Math.random() < 0.7 ? 'noodle' : pick(DECOYS);
    this.blds.push(b); this.nextB += BK.BLD_W;
  }
  spawnO() {
    const diff = clamp((BK.DURATION - this.timeLeft) / BK.DURATION, 0, 1);
    const kinds = ['pothole', 'cone', 'trash', 'banner', 'ped'].concat(diff > 0.15 ? ['taxi'] : [], diff > 0.4 ? ['taxi', 'cone'] : []);
    const k = pick(kinds); const o = { k, wx: this.nextO, hit: false, vx: 0 };
    if (k === 'pothole') { o.w = 80; o.h = 10; } else if (k === 'cone') { o.w = 30; o.h = 52; } else if (k === 'trash') { o.w = 52; o.h = 74; }
    else if (k === 'taxi') { o.w = 170; o.h = 72; o.vx = 170; } else if (k === 'ped') { o.w = 34; o.h = 60; o.vx = 90; } else if (k === 'banner') { o.w = 90; o.h = 0; }
    this.obs.push(o); this.nextO += rnd(420, 760) + this.speed * 0.45 + (k === 'taxi' ? 200 : 0);
  }
  sx(wx) { return wx - this.cam; }
  stoopSx(b) { return this.sx(b.wx) + BK.BLD_W / 2; }
  hop() { if (this.crashT > 0 || this.state !== 'play') return; if (this.jy <= 0.5 && this.jv >= 0) { this.jv = -BK.JUMP_V; this.jy = 0.6; this.sfx('jump'); } }
  toss(aimX) {
    if (this.cd > 0 || this.crashT > 0) return;
    this.cd = BK.TOSS_CD; const x0 = BK.BIKE_X + 34, y0 = BK.GROUND - 100 - this.jy;
    const T = BK.TOSS_T, vx = (aimX - x0) / T, vy = (BK.SIDEWALK - y0 - 0.5 * BK.TOSS_G * T * T) / T;
    this.bags.push({ x: x0, y: y0, vx, vy, t: 0, T, rot: 0 }); this.sfx('click');
  }
  nearestTarget() {
    let best = null; for (const b of this.blds) { if (b.type !== 'stoop' || b.done || b.icon !== 'noodle') continue; const sx = this.stoopSx(b); if (sx > BK.BIKE_X + 120 && sx < W + 20 && (!best || sx < best.sx)) best = { b, sx }; } return best;
  }
  onKey(code) {
    if (code === 'KeyF' || code === 'Enter' || code === 'KeyE') this.toss(BK.BIKE_X + 34 + BK.TOSS_LEAD);
    else if (code === 'ArrowUp' || code === 'KeyW' || code === 'Space') this.hop();
  }
  onDown(x, y) {
    if (x < 440) { if (y >= 470) this.pdHold = 'duck'; else { this.pdHold = 'jump'; this.hop(); } return; }
    // aim at clicked x with distance-based inaccuracy
    const d = Math.max(0, x - BK.BIKE_X); const err = rnd(-1, 1) * d * 0.05;
    this.toss(clamp(x - this.speed * BK.TOSS_T + err, BK.BIKE_X + 60, W + 100));
  }
  onUp() { this.pdHold = null; }
  updatePlay(dt) {
    const keys = this.mg.keys; const down = keys.has('ArrowDown') || keys.has('KeyS') || this.pdHold === 'duck';
    this.hold = keys.has('ArrowUp') || keys.has('KeyW') || keys.has('Space') || this.pdHold === 'jump';
    this.duck = down && this.jy <= 0.5 && this.crashT <= 0;
    const target = this.duck ? BK.BRAKE : 1; this.speedM += (Math.min(target, this.crashT > 0 ? 0.35 : 1) - this.speedM) * Math.min(1, dt * (this.speedM > target ? 7 : 1.6));
    const v = this.speed; this.cam += v * dt; this.dist += v * dt; this.wheel += v * dt / 26;
    while (this.nextB < this.cam + W + 300) this.spawnB();
    while (this.nextO < this.cam + W + 200) this.spawnO();
    if (this.jy > 0 || this.jv < 0) { const g = down ? BK.G_FAST : (this.jv < 0 && this.hold ? BK.G_HOLD : BK.G_FREE); this.jv += g * dt; this.jy -= this.jv * dt; if (this.jy <= 0) { this.jy = 0; this.jv = 0; } }
    if (this.crashT > 0) this.crashT -= dt; if (this.invT > 0) this.invT -= dt; if (this.cd > 0) this.cd -= dt;
    const ph = this.duck ? 62 : 104, py0 = BK.GROUND - this.jy, px0 = BK.BIKE_X;
    for (const o of this.obs) {
      o.wx -= o.vx * dt; const ox = this.sx(o.wx);
      if (o.hit || this.invT > 0 || this.crashT > 0) continue;
      if (ox > px0 + 46 || ox + o.w < px0 - 40) continue;
      let hitIt = false;
      if (o.k === 'banner') hitIt = (py0 - ph) < 452 && py0 > 340;
      else hitIt = py0 > BK.GROUND - o.h + 8 && (o.k !== 'pothole' || this.jy < 10);
      if (hitIt) { o.hit = true; this.crash(o); }
    }
    for (const b of this.bags) {
      b.t += dt; b.vy += BK.TOSS_G * dt; b.x += b.vx * dt; b.y += b.vy * dt; b.rot += dt * 9;
      if (!b.done && b.t >= b.T) { b.done = true; this.land(b); }
    }
    this.bags = this.bags.filter((b) => !b.done && b.t < 2);
    for (const b of this.blds) {
      if (b.open > 0) b.open -= dt;
      if (b.type === 'stoop' && !b.done && !b.miss && b.icon === 'noodle' && this.stoopSx(b) < -20) { b.miss = true; this.score = Math.max(0, this.score - BK.PTS_MISS_STOOP); this.penalty += BK.PTS_MISS_STOOP; this.pop(80, 330, 'Missed order! -' + BK.PTS_MISS_STOOP, '#ff7a6a', 24); this.sfx('bad'); }
    }
    this.blds = this.blds.filter((b) => this.sx(b.wx) > -BK.BLD_W - 40); this.obs = this.obs.filter((o) => this.sx(o.wx) > -300);
    this.score = Math.max(0, Math.floor(this.dist / BK.PX_PER_M) + this.delivered * 60 + this.perfect * 20 - this.penalty);
  }
  crash() {
    this.hearts--; this.crashT = BK.CRASH_T; this.invT = BK.INVULN; this.jy = 0; this.jv = 0; this.shake(14); this.sfx('bad');
    this.pop(BK.BIKE_X, 380, 'CRASH!', '#ff5a4a', 44); this.burst(BK.BIKE_X + 20, 480, 16, ['#fff', '#ffd23c', '#ff8a5a'], 240);
    if (this.hearts <= 0) { this.overTitle = 'Wiped out!'; this.finish(); }
  }
  land(b) {
    const lx = b.x; let hitB = null;
    for (const s of this.blds) { if (s.type !== 'stoop') continue; const cx = this.stoopSx(s); if (Math.abs(lx - cx) <= BK.STOOP_HALF) { hitB = s; break; } }
    if (!hitB) { this.score = Math.max(0, this.score - BK.PTS_MISS_THROW); this.penalty += BK.PTS_MISS_THROW; this.pop(lx, BK.SIDEWALK - 40, 'Missed!', '#ffb0a0', 26); this.sfx('bad'); this.burst(lx, BK.SIDEWALK, 8, ['#fff', '#e8352f', '#f0c060'], 160); return; }
    const dx = Math.abs(lx - this.stoopSx(hitB));
    if (hitB.icon !== 'noodle' || hitB.done) { this.penalty += BK.PTS_WRONG; this.pop(lx, BK.SIDEWALK - 50, hitB.done ? 'Already served! -' + BK.PTS_WRONG : 'Wrong door! -' + BK.PTS_WRONG, '#ff6a5a', 26); this.sfx('bad'); this.shake(6); return; }
    hitB.done = true; hitB.open = 1.6; this.delivered++; const pf = dx <= BK.PERFECT_DX;
    if (pf) { this.perfect++; this.pop(lx, BK.SIDEWALK - 70, 'PERFECT!', '#7dff6a', 40); this.sfx('win'); } else { this.pop(lx, BK.SIDEWALK - 70, 'Delivered!', '#ffe14a', 34); this.sfx('coin'); }
    this.burst(lx, BK.SIDEWALK - 10, pf ? 26 : 14, ['#ffd23c', '#fff', '#7dff6a', '#ff8fb8'], 260);
  }
  payout() { return clamp(this.delivered * BK.COIN_PER_DELIVERY + this.perfect * BK.COIN_PERFECT + Math.floor(this.dist / BK.PX_PER_M / BK.DIST_PER_COIN), 0, BK.COIN_MAX); }
  extraLines(c) { txt(c, 'Deliveries: ' + this.delivered + ' (' + this.perfect + ' perfect)   ·   ' + Math.floor(this.dist / BK.PX_PER_M) + ' m', 0, 8, 21, '#7a6a55', 'center', null); }

  drawFar(c) {
    c.fillStyle = vgrad(c, 0, 400, '#ffb08a', '#ffe3b8'); c.fillRect(0, 0, W, 420);
    circ(c, 740, 170, 56, '#fff2c0', 0); c.globalAlpha = 0.5; circ(c, 740, 170, 76, '#fff2c0', 0); c.globalAlpha = 1;
    for (const [par, base, col, minH, maxH, wmin] of [[0.12, 400, '#c9a6c9', 90, 230, 50], [0.28, 400, '#a889b5', 70, 190, 70]]) {
      const w0 = 90, off = this.cam * par; const i0 = Math.floor(off / w0);
      for (let i = i0 - 1; i < i0 + Math.ceil(W / w0) + 3; i++) {
        const h = minH + hash(i * 7 + (par * 100 | 0)) * (maxH - minH), bw = wmin + hash(i * 3 + 1) * 40, bx = i * w0 - off;
        c.fillStyle = col; c.fillRect(bx, base - h, bw, h + 10); c.strokeStyle = 'rgba(43,34,48,.5)'; c.lineWidth = 2; c.strokeRect(bx, base - h, bw, h + 10);
        if (hash(i * 5) > 0.55) { rr(c, bx + bw / 2 - 9, base - h - 24, 18, 24, 3); paint(c, '#8a5a4a', 2); poly(c, [[bx + bw / 2 - 12, base - h - 24], [bx + bw / 2 + 12, base - h - 24], [bx + bw / 2, base - h - 36]], '#6a4a3a', 2); }
        c.fillStyle = 'rgba(255,240,180,.6)'; for (let wy = base - h + 12; wy < base - 12; wy += 22) for (let wx = bx + 8; wx < bx + bw - 10; wx += 16) if (hash(wx * 0.37 + wy) > 0.5) c.fillRect(wx, wy, 7, 10);
      }
    }
  }
  drawBld(c, b) {
    const x = this.sx(b.wx), w = BK.BLD_W; if (x > W + 10 || x < -w - 10) return; const top = 130 + hash(b.i * 11) * 40, base = BK.SIDEWALK;
    const col = BRICKS[b.i % BRICKS.length], stoop = b.type === 'stoop';
    rr(c, x + 2, top, w - 4, base - top, 3); paint(c, stoop ? col : FACADES[b.i % FACADES.length], 3.5);
    if (stoop) { c.strokeStyle = 'rgba(40,10,10,.18)'; c.lineWidth = 2; for (let yy = top + 14; yy < base; yy += 16) { c.beginPath(); c.moveTo(x + 4, yy); c.lineTo(x + w - 4, yy); c.stroke(); } }
    // cornice
    rr(c, x - 2, top - 10, w + 4, 16, 3); paint(c, mix(col, '#ffffff', 0.35), 3);
    // windows
    for (const wy of [top + 26, top + 100]) for (const wx of [x + 34, x + w - 34 - 40]) { if (stoop && wy > 200 && false) continue; rr(c, wx, wy, 40, 54, 4); paint(c, hash(b.i * 13 + wx) > 0.5 ? '#ffe9a0' : '#9fd2ee', 3); c.strokeStyle = INK; c.lineWidth = 2; c.beginPath(); c.moveTo(wx + 20, wy); c.lineTo(wx + 20, wy + 54); c.moveTo(wx, wy + 27); c.lineTo(wx + 40, wy + 27); c.stroke(); }
    if (stoop) {
      const cx = x + w / 2;
      for (let k = 0; k < 3; k++) { rr(c, cx - 52 - k * 6, base - 10 - k * 11, 104 + k * 12, 11, 2); paint(c, '#c9c4d0', 2.5); }
      rr(c, cx - 28, base - 100, 56, 80, 6); paint(c, b.open > 0 ? '#ffe9a0' : '#6a3d22', 3.5);
      if (b.open > 0) { drawPigeon(c, cx, base - 20, 0.8, custLook(b.i), 'jump', this.t); } else { rr(c, cx - 22, base - 94, 44, 30, 4); paint(c, '#8a5a3a', 2); circ(c, cx + 16, base - 58, 3, '#ffd23c', 1.5); }
      // order bubble
      if (!b.done || b.open > 0) {
        const by = base - 150, pulse = 1 + Math.sin(this.t * 6) * 0.04; c.save(); c.translate(cx, by); c.scale(pulse, pulse);
        circ(c, 0, 0, 36, b.icon === 'noodle' && !b.done ? '#eaffea' : '#fff', 3.5); poly(c, [[-8, 32], [8, 32], [0, 46]], b.icon === 'noodle' ? '#eaffea' : '#fff', 3);
        if (b.icon === 'noodle' && !b.done) { c.strokeStyle = 'rgba(60,220,80,.75)'; c.lineWidth = 5; c.beginPath(); c.arc(0, 0, 42, 0, 6.283); c.stroke(); }
        foodIcon(c, b.done ? 'noodle' : b.icon, 0, 0, 1.0); if (b.done) { circ(c, 22, -22, 11, '#2fb344', 2.5); txt(c, '✓', 22, -22, 15, '#fff', 'center', null); } c.restore();
      }
    } else {
      // shop front
      rr(c, x + 20, base - 110, w - 40, 100, 4); paint(c, '#bfe3f2', 3); rr(c, x + 26, base - 104, 90, 88, 3); paint(c, 'rgba(255,255,255,.4)', 2);
      rr(c, x + 140, base - 100, 60, 90, 4); paint(c, '#7a4a2a', 3);
      for (let k = 0; k < 6; k++) { c.beginPath(); c.moveTo(x + 8 + k * 37, base - 126); c.lineTo(x + 45 + k * 37, base - 126); c.lineTo(x + 45 + k * 37 - 3, base - 108); c.lineTo(x + 8 + k * 37 + 3, base - 108); c.closePath(); paint(c, k % 2 ? '#fff' : ['#e8452c', '#2f8fd8', '#2fb344'][b.i % 3], 2.5); }
      txt(c, ['DELI', 'CAFE', 'PIZZA', 'NAILS', 'BAGELS'][b.i % 5], x + w / 2, base - 144, 22, '#fff', 'center', INK, 4);
    }
  }
  drawObs(c, o) {
    const x = this.sx(o.wx), G = BK.GROUND; if (x > W + 50 || x + o.w < -50) return;
    if (o.k === 'pothole') { ell(c, x + o.w / 2, G + 4, o.w / 2, 8, '#1f1a25', 3); ell(c, x + o.w / 2, G + 2, o.w / 2 - 8, 4, '#3a3342', 0); }
    else if (o.k === 'cone') { ell(c, x + 15, G + 2, 20, 5, 'rgba(0,0,0,.3)', 0); rr(c, x - 4, G - 8, 38, 10, 3); paint(c, '#d9631f', 3); poly(c, [[x + 4, G - 8], [x + 26, G - 8], [x + 19, G - 52], [x + 11, G - 52]], '#ff7a2a', 3); c.fillStyle = '#fff'; c.fillRect(x + 8, G - 34, 14, 7); }
    else if (o.k === 'trash') { ell(c, x + 26, G + 2, 32, 6, 'rgba(0,0,0,.3)', 0); poly(c, [[x + 2, G - 62], [x + 50, G - 62], [x + 44, G], [x + 8, G]], '#7a8794', 3.5); rr(c, x - 2, G - 74, 56, 14, 5); paint(c, '#98a5b2', 3); for (let k = 0; k < 3; k++) { c.beginPath(); c.moveTo(x + 14 + k * 12, G - 56); c.lineTo(x + 14 + k * 12, G - 6); c.strokeStyle = 'rgba(0,0,0,.3)'; c.lineWidth = 2; c.stroke(); } }
    else if (o.k === 'taxi') {
      ell(c, x + 85, G + 2, 90, 7, 'rgba(0,0,0,.3)', 0); rr(c, x, G - 40, 170, 36, 10); paint(c, '#ffd21f', 3.5); poly(c, [[x + 36, G - 40], [x + 54, G - 70], [x + 118, G - 70], [x + 138, G - 40]], '#ffd21f', 3.5);
      c.fillStyle = '#aee0f5'; poly(c, [[x + 44, G - 42], [x + 58, G - 64], [x + 84, G - 64], [x + 84, G - 42]], '#aee0f5', 2.5); poly(c, [[x + 90, G - 42], [x + 90, G - 64], [x + 114, G - 64], [x + 130, G - 42]], '#aee0f5', 2.5);
      rr(c, x + 70, G - 80, 30, 12, 3); paint(c, '#fff', 2.5); txt(c, 'TAXI', x + 85, G - 74, 9, INK, 'center', null);
      c.fillStyle = '#2b2230'; for (let k = 0; k < 6; k++) c.fillRect(x + 6 + k * 14, G - 22, 7, 6); circ(c, x + 36, G - 4, 15, '#2b2230', 3); circ(c, x + 36, G - 4, 6, '#aaa', 0); circ(c, x + 136, G - 4, 15, '#2b2230', 3); circ(c, x + 136, G - 4, 6, '#aaa', 0); circ(c, x + 164, G - 28, 5, '#fff3a0', 2);
    } else if (o.k === 'ped') { drawPigeon(c, x + 16, G + 4, 0.8, custLook(Math.floor(o.wx / 100)), 'run', this.t + o.wx); poly(c, [[x + 4, G - 80], [x + 28, G - 80], [x + 16, G - 66]], '#ffd23c', 2); txt(c, '!', x + 16, G - 77, 11, INK, 'center', null); }
    else if (o.k === 'banner') {
      c.strokeStyle = INK; c.lineWidth = 4; c.beginPath(); c.moveTo(x, 150); c.lineTo(x, 372); c.moveTo(x + o.w, 150); c.lineTo(x + o.w, 372); c.stroke();
      c.beginPath(); c.moveTo(x - 4, 372); c.lineTo(x + o.w + 4, 372); c.lineTo(x + o.w + 4, 452); c.quadraticCurveTo(x + o.w / 2, 440 + Math.sin(this.t * 3) * 4, x - 4, 452); c.closePath(); paint(c, '#e8352f', 3.5);
      txt(c, 'DUCK!', x + o.w / 2, 410, 20, '#fff', 'center', INK, 4);
    }
  }
  drawBike(c) {
    const x = BK.BIKE_X, y = BK.GROUND - this.jy, crash = this.crashT > 0; c.save(); c.translate(x, y);
    if (this.invT > 0 && !crash && Math.floor(this.t * 14) % 2) { c.restore(); return; }
    if (crash) { c.rotate(Math.sin(this.t * 20) * 0.15 - 0.2); }
    const wob = this.duck ? 0 : Math.sin(this.t * 14) * 1;
    ell(c, 0, this.jy + 3, 62 - this.jy * 0.2, 7, 'rgba(0,0,0,.3)', 0);
    // rear rack + box
    c.strokeStyle = INK; c.lineWidth = 3; c.beginPath(); c.moveTo(-60, -40); c.lineTo(-30, -40); c.stroke();
    rr(c, -86, -86, 56, 46, 6); paint(c, vgrad(c, -86, -40, '#ff6a4a', '#d8402e'), 3.5); rr(c, -86, -86, 56, 12, 6); paint(c, '#ff8a6a', 3);
    foodIcon(c, 'noodle', -58, -58, 0.6);
    // wheels
    for (const wx of [-40, 40]) { circ(c, wx, -26, 26, 'rgba(255,255,255,.15)', 4.5); c.strokeStyle = '#9aa'; c.lineWidth = 1.5; for (let k = 0; k < 6; k++) { const a = this.wheel + k * 1.047; c.beginPath(); c.moveTo(wx, -26); c.lineTo(wx + Math.cos(a) * 24, -26 + Math.sin(a) * 24); c.stroke(); } circ(c, wx, -26, 4, '#555', 2); }
    // frame
    c.strokeStyle = INK; c.lineWidth = 7; c.lineCap = 'round'; c.beginPath(); c.moveTo(-40, -26); c.lineTo(-8, -58); c.lineTo(22, -58); c.lineTo(40, -26); c.moveTo(-8, -58); c.lineTo(0, -28); c.lineTo(-40, -26); c.moveTo(22, -58); c.lineTo(30, -76); c.lineTo(42, -76); c.stroke();
    c.strokeStyle = '#2f8fd8'; c.lineWidth = 3.5; c.stroke();
    rr(c, -18, -66, 26, 8, 4); paint(c, '#2b2230', 2);
    drawPigeon(c, -4, -22 + wob, this.duck ? 0.88 : 1.0, this.look, crash ? 'dizzy' : this.jy > 2 ? 'ride' : 'ride', this.t * (0.5 + this.speedM * 0.6));
    c.restore();
  }
  drawScene(c) {
    this.drawFar(c);
    // sidewalk + street
    c.fillStyle = '#d9d2c6'; c.fillRect(0, BK.SIDEWALK, W, 56); c.strokeStyle = 'rgba(43,34,48,.25)'; c.lineWidth = 2; const sw = 80, so = this.cam % sw; for (let i = -1; i < 13; i++) { c.beginPath(); c.moveTo(i * sw - so, BK.SIDEWALK); c.lineTo(i * sw - so - 10, BK.SIDEWALK + 56); c.stroke(); }
    c.fillStyle = '#b8b0a4'; c.fillRect(0, BK.SIDEWALK + 50, W, 8); c.strokeStyle = INK; c.lineWidth = 3; c.beginPath(); c.moveTo(0, BK.SIDEWALK + 58); c.lineTo(W, BK.SIDEWALK + 58); c.stroke();
    const dtgt = this.state === 'intro' ? this.t * 200 : this.cam; if (this.state === 'intro') this.cam = dtgt;
    c.fillStyle = vgrad(c, 456, 600, '#4a4658', '#3a3646'); c.fillRect(0, 456, W, 144);
    c.fillStyle = '#ffe14a'; const dw = 70, dof = this.cam % (dw * 2); for (let i = -1; i < 9; i++) c.fillRect(i * dw * 2 - dof, 560, dw, 7);
    for (const b of this.blds) this.drawBld(c, b);
    for (const o of this.obs) this.drawObs(c, o);
    // target marker
    if (this.state === 'play') { const tg = this.nearestTarget(); if (tg && tg.sx < BK.BIKE_X + 34 + BK.TOSS_LEAD + this.speed * BK.TOSS_T + 160) { const lx = BK.BIKE_X + 34 + BK.TOSS_LEAD; c.globalAlpha = 0.7; txt(c, '✕', lx, BK.SIDEWALK + 24, 26, '#ff4a4a', 'center', '#fff', 4); c.globalAlpha = 1; } }
    this.drawBike(c);
    for (const b of this.bags) { c.save(); c.translate(b.x, b.y); c.rotate(b.rot); rr(c, -12, -14, 24, 28, 4); paint(c, '#f7e2b8', 3); c.fillStyle = '#e8352f'; c.fillRect(-12, -4, 24, 6); c.restore(); }
  }
  drawHud(c) {
    for (let i = 0; i < BK.HEARTS; i++) heart(c, 38 + i * 44, 44, 15, i < this.hearts ? '#ff4a5e' : 'rgba(40,30,60,.7)');
    foodIcon(c, 'noodle', 38, 96, 0.8); txt(c, '× ' + this.delivered, 66, 96, 26, '#fff', 'left');
    txt(c, Math.floor(this.dist / BK.PX_PER_M) + ' m', 930, 42, 30, '#fff', 'right'); txt(c, 'Score ' + Math.round(this.score), 930, 78, 22, '#ffe14a', 'right');
    bar(c, 330, 14, 300, 16, this.timeLeft / BK.DURATION, this.timeLeft / BK.DURATION > 0.25 ? '#3ab54a' : '#e8452c');
    if (this.cd > 0.05) { c.globalAlpha = 0.6; txt(c, '...', BK.BIKE_X + 34, 330, 20, '#fff'); c.globalAlpha = 1; }
  }
}

export const GAMES_B = { flowers: Flowers, donuts: Donuts, bike: Bike };
