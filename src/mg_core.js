// Pigeon City mini-games: Pizza Parlor Rush, Subway Run, Crumb Catch.
// Self-contained: injects its own CSS + DOM, draws everything procedurally on a 960x600 canvas.

const W = 960, H = 600;
const INK = '#2b2230';
const FONT = "'Trebuchet MS','Arial Rounded MT Bold','Arial Black',Arial,sans-serif";
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const rnd = (a, b) => a + Math.random() * (b - a);
const rint = (a, b) => Math.floor(rnd(a, b + 1));
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const easeOutBack = (t) => { const c = 1.70158; t = clamp(t, 0, 1) - 1; return 1 + (c + 1) * t * t * t + c * t * t; };
const easeOutCubic = (t) => 1 - Math.pow(1 - clamp(t, 0, 1), 3);
const easeInOut = (t) => { t = clamp(t, 0, 1); return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; };

function hexRgb(h) {
  const m = /^#?([0-9a-f]{6})$/i.exec(h || '');
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return [n >> 16, (n >> 8) & 255, n & 255];
}
function mix(a, b, t) {
  const A = hexRgb(a), B = hexRgb(b);
  if (!A || !B) return a;
  return 'rgb(' + A.map((v, i) => Math.round(lerp(v, B[i], t))).join(',') + ')';
}

function rr(c, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}
function paint(c, fill, lw = 3) {
  if (fill) { c.fillStyle = fill; c.fill(); }
  if (lw) { c.lineWidth = lw; c.strokeStyle = INK; c.lineJoin = 'round'; c.lineCap = 'round'; c.stroke(); }
}
function ell(c, x, y, rx, ry, fill, lw = 3, rot = 0) {
  c.beginPath(); c.ellipse(x, y, Math.max(0.1, rx), Math.max(0.1, ry), rot, 0, Math.PI * 2); paint(c, fill, lw);
}
function circ(c, x, y, r, fill, lw = 3) { ell(c, x, y, r, r, fill, lw); }
function poly(c, pts, fill, lw = 3) {
  c.beginPath(); c.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) c.lineTo(pts[i][0], pts[i][1]);
  c.closePath(); paint(c, fill, lw);
}
function txt(c, s, x, y, size, color = '#fff', align = 'center', stroke = INK, lw = null) {
  c.font = '900 ' + size + 'px ' + FONT;
  c.textAlign = align; c.textBaseline = 'middle';
  if (stroke) { c.lineWidth = lw == null ? Math.max(3, size / 5) : lw; c.strokeStyle = stroke; c.lineJoin = 'round'; c.strokeText(s, x, y); }
  c.fillStyle = color; c.fillText(s, x, y);
}
function vgrad(c, y0, y1, a, b) {
  const g = c.createLinearGradient(0, y0, 0, y1); g.addColorStop(0, a); g.addColorStop(1, b); return g;
}
function star(c, x, y, r, fill) {
  const p = [];
  for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rad = i % 2 ? r * 0.45 : r; p.push([x + Math.cos(a) * rad, y + Math.sin(a) * rad]); }
  poly(c, p, fill, 2);
}
function coinIcon(c, x, y, r) {
  circ(c, x, y, r, '#ffd23c', 2.5);
  circ(c, x, y, r * 0.62, '#ffb81c', 1.5);
  c.fillStyle = '#fff3b0'; c.fillRect(x - r * 0.1, y - r * 0.38, r * 0.2, r * 0.76);
}
function heart(c, x, y, s, fill) {
  c.beginPath();
  c.moveTo(x, y + s * 0.9);
  c.bezierCurveTo(x - s * 1.4, y - s * 0.1, x - s * 0.7, y - s * 1.1, x, y - s * 0.35);
  c.bezierCurveTo(x + s * 0.7, y - s * 1.1, x + s * 1.4, y - s * 0.1, x, y + s * 0.9);
  paint(c, fill, 2.5);
}

// ---------------------------------------------------------------- shared pigeon
function drawHat(c, hat, look) {
  // origin = top of head
  if (hat === 'top') {
    rr(c, -20, -6, 40, 7, 3); paint(c, '#222');
    rr(c, -12, -28, 24, 24, 3); paint(c, '#2c2c34');
    c.fillStyle = '#c0392b'; c.fillRect(-12, -10, 24, 5); c.strokeStyle = INK; c.lineWidth = 2; c.strokeRect(-12, -10, 24, 5);
  } else if (hat === 'beanie') {
    c.beginPath(); c.arc(0, 0, 14, Math.PI, 0); c.closePath(); paint(c, '#e0443a');
    rr(c, -15, -3, 30, 6, 3); paint(c, '#f4a09a');
    circ(c, 0, -15, 4.5, '#fff');
  } else if (hat === 'cap') {
    c.beginPath(); c.arc(0, 0, 14, Math.PI, 0); c.closePath(); paint(c, '#3a86d6');
    c.beginPath(); c.ellipse(15, 0, 14, 3.5, 0.05, 0, Math.PI * 2); paint(c, '#2766ad');
    circ(c, 0, -14, 2.5, '#fff', 1.5);
  } else if (hat === 'crown') {
    poly(c, [[-14, 2], [-16, -14], [-8, -6], [0, -18], [8, -6], [16, -14], [14, 2]], '#ffd23c');
    circ(c, 0, -3, 2.6, '#e0443a', 1.5); circ(c, -8, -2, 1.8, '#3a86d6', 1.2); circ(c, 8, -2, 1.8, '#3a86d6', 1.2);
  } else if (hat === 'grad') {
    c.beginPath(); c.arc(0, 0, 11, Math.PI, 0); c.closePath(); paint(c, '#23232b');
    poly(c, [[-22, -8], [0, -17], [22, -8], [0, 1]], '#2c2c36');
    c.beginPath(); c.moveTo(14, -9); c.lineTo(20, 4); paint(c, null, 2);
    circ(c, 20, 6, 2.5, '#ffd23c', 1.5);
  } else if (hat === 'cowboy') {
    c.beginPath(); c.moveTo(-26, 2); c.quadraticCurveTo(-18, -5, -12, -4); c.lineTo(12, -4); c.quadraticCurveTo(18, -5, 26, 2);
    c.quadraticCurveTo(0, 8, -26, 2); paint(c, '#a56a34');
    c.beginPath(); c.moveTo(-12, -3); c.quadraticCurveTo(-13, -22, -3, -20); c.quadraticCurveTo(0, -15, 3, -20); c.quadraticCurveTo(13, -22, 12, -3); c.closePath(); paint(c, '#b57a40');
    c.fillStyle = '#6b4220'; c.fillRect(-12, -8, 24, 3);
  } else if (hat === 'paper') {
    poly(c, [[-12, 2], [-9, -16], [9, -16], [12, 2]], '#fff', 3); c.strokeStyle = 'rgba(0,0,0,.18)'; c.lineWidth = 1.5; c.beginPath(); c.moveTo(-3, -15); c.lineTo(-4, 1); c.moveTo(4, -15); c.lineTo(4, 1); c.stroke();
    c.fillStyle = '#3a86d6'; c.fillRect(-11, -4, 22, 3);
  } else if (hat === 'chef') {
    circ(c, -9, -17, 8, '#fff'); circ(c, 9, -17, 8, '#fff'); circ(c, 0, -22, 9, '#fff');
    rr(c, -13, -14, 26, 14, 3); paint(c, '#fff');
    c.strokeStyle = 'rgba(0,0,0,.15)'; c.lineWidth = 1.5; c.beginPath(); c.moveTo(-4, -12); c.lineTo(-4, -1); c.moveTo(4, -12); c.lineTo(4, -1); c.stroke();
  }
}

// Draws a side-view pigeon facing right. (x,y) = point between feet on the ground. ~72px tall at scale 1.
function drawPigeon(c, x, y, s = 1, look = null, pose = 'stand', t = 0) {
  look = look || {};
  const bodyC = /^#/.test(look.body || '') ? look.body : '#8a93a3';
  const belly = mix(bodyC, '#ffffff', 0.38), dark = mix(bodyC, '#2b2230', 0.35), light = mix(bodyC, '#ffffff', 0.15);
  let hat = look.hat && look.hat !== 'none' ? look.hat : null;
  if (!['top', 'beanie', 'cap', 'crown', 'grad', 'cowboy', 'chef', 'paper'].includes(hat)) hat = null;
  c.save();
  c.translate(x, y); c.scale(s, s);
  let bob = 0, la = 0, tuck = 0, wingUp = 0, headTilt = 0;
  if (pose === 'run') { const p = t * 15; bob = -Math.abs(Math.sin(p)) * 6; la = Math.sin(p) * 14; wingUp = Math.sin(p) * 0.25; }
  else if (pose === 'jump') { tuck = 1; wingUp = -0.9 + Math.sin(t * 20) * 0.2; bob = -4; }
  else if (pose === 'slide') { c.translate(0, -8); c.rotate(1.15); c.translate(-6, 4); tuck = 0.5; }
  else if (pose === 'ride') { bob = Math.sin(t * 10) * 0.8; wingUp = -0.5; }
  else if (pose === 'serve') { wingUp = -1.3 + Math.sin(t * 8) * 0.15; bob = Math.sin(t * 4) * 1.5; }
  else if (pose === 'dizzy') { c.rotate(Math.sin(t * 9) * 0.12); headTilt = Math.sin(t * 9) * 0.2; }
  else { bob = Math.sin(t * 3) * 1.2; }
  // legs
  c.lineCap = 'round';
  for (let i = 0; i < 2; i++) {
    const lx = i ? 7 : -5, sw = i ? -la : la;
    let fx = lx + sw, fy = tuck ? -9 - i * 2 : 0;
    if (pose === 'ride') { const pp = t * 10 + (i ? Math.PI : 0); fx = 6 + Math.cos(pp) * 9; fy = -8 + Math.sin(pp) * 6; }
    c.strokeStyle = INK; c.lineWidth = 6; c.beginPath(); c.moveTo(lx, -20); c.lineTo(fx, fy); c.stroke();
    c.strokeStyle = '#f08aa0'; c.lineWidth = 3; c.beginPath(); c.moveTo(lx, -20); c.lineTo(fx, fy); c.stroke();
    ell(c, fx + 3, fy, 6, 2.6, '#f08aa0', 2);
  }
  c.translate(0, bob);
  // tail
  poly(c, [[-22, -42], [-46, -34], [-44, -48], [-24, -50]], dark);
  c.strokeStyle = INK; c.lineWidth = 1.5; c.beginPath(); c.moveTo(-30, -43); c.lineTo(-42, -40); c.stroke();
  // body
  ell(c, 0, -38, 29, 23, bodyC);
  ell(c, 8, -33, 20, 14, belly, 0);
  // wing
  c.save(); c.translate(-8, -44); c.rotate(wingUp - 0.2);
  c.beginPath(); c.ellipse(-6, 4, 22, 11, -0.15, 0, Math.PI * 2); paint(c, dark);
  c.strokeStyle = 'rgba(0,0,0,.35)'; c.lineWidth = 2; c.beginPath(); c.moveTo(-14, 0); c.lineTo(-10, 9); c.moveTo(-5, -2); c.lineTo(-1, 9); c.stroke();
  c.restore();
  // neck patch
  const ng = c.createLinearGradient(14, -62, 26, -42); ng.addColorStop(0, '#2fbf8a'); ng.addColorStop(0.55, '#7b4fd0'); ng.addColorStop(1, '#2fbf8a');
  ell(c, 20, -52, 11, 12, ng, 2.5);
  // scarf
  if (look.scarf) {
    c.save(); c.translate(19, -48); c.rotate(-0.25);
    rr(c, -13, -4, 26, 9, 4); paint(c, look.scarf);
    rr(c, -14, 2, 8, 17, 3); paint(c, look.scarf);
    c.restore();
  }
  // head
  c.save(); c.translate(27, -62); c.rotate(headTilt);
  circ(c, 0, 0, 14, light);
  // beak
  poly(c, [[10, -5], [25, 1], [10, 6]], '#f6a335', 2.5);
  ell(c, 11, -4.5, 3.4, 2.6, '#fff', 1.5);
  // eye
  if (pose === 'dizzy') {
    c.strokeStyle = INK; c.lineWidth = 2.5; c.beginPath(); c.moveTo(1, -8); c.lineTo(9, 0); c.moveTo(9, -8); c.lineTo(1, 0); c.stroke();
  } else {
    circ(c, 5, -3, 4.6, '#e9532b', 2); circ(c, 5.4, -3, 2, '#2b1020', 0); circ(c, 4.2, -4.4, 1, '#fff', 0);
  }
  if (look.moustache) { c.save(); c.translate(11, 5); ell(c, 0, 0, 7, 3.4, '#2b2230', 1.5, 0.35); ell(c, 9, 1, 7, 3.2, '#2b2230', 1.5, -0.3); c.restore(); }
  if (look.glasses) {
    circ(c, 5, -3, 7.4, 'rgba(180,230,255,.35)', 2.5);
    c.strokeStyle = INK; c.lineWidth = 2.5; c.beginPath(); c.moveTo(-1.5, -4); c.lineTo(-12, -6); c.stroke();
  }
  c.save(); c.translate(-1, -11); if (hat) drawHat(c, hat, look); c.restore();
  c.restore();
  if (pose === 'dizzy') {
    for (let i = 0; i < 3; i++) { const a = t * 6 + i * 2.1; star(c, 27 + Math.cos(a) * 20, -84 + Math.sin(a) * 5, 5, '#ffd23c'); }
  }
  c.restore();
}

// ---------------------------------------------------------------- base game
class Game {
  constructor(mg, id, title, color) {
    this.mg = mg; this.id = id; this.title = title; this.color = color;
    this.state = 'intro'; this.t = 0; this.score = 0; this.coins = 0; this.timeLeft = 0; this.dur = 60;
    this.parts = []; this.pops = []; this.shakeAmt = 0; this.cd = 3; this.overT = 0; this.introT = 0;
    this.help = []; this.hover = null; this.finished = false;
  }
  sfx(n) { this.mg.sfx(n); }
  get look() { return this.mg.look; }
  burst(x, y, n, colors, spd = 200, grav = 400) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * 6.283, v = rnd(0.3, 1) * spd;
      this.parts.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - spd * 0.3, life: rnd(0.4, 0.9), max: 0.9, c: pick(colors), r: rnd(2.5, 5.5), g: grav });
    }
  }
  pop(x, y, text, color = '#ffe14a', size = 34) { this.pops.push({ x, y, text, color, size, life: 0, max: 1 }); }
  shake(a) { this.shakeAmt = Math.max(this.shakeAmt, a); }
  begin() { this.state = 'countdown'; this.cd = 3.4; this._cdn = 4; this.reset(); this.sfx('click'); }
  reset() {}
  update(dt) {
    this.t += dt;
    if (this.state === 'intro') this.introT += dt;
    if (this.state === 'countdown') {
      this.cd -= dt;
      const n = Math.ceil(this.cd);
      if (n !== this._cdn && n >= 0) { this._cdn = n; this.sfx('tick'); }
      if (this.cd <= 0) { this.state = 'play'; this.sfx('good'); }
      this.updateCountdown && this.updateCountdown(dt);
    } else if (this.state === 'play') {
      this.timeLeft = Math.max(0, this.timeLeft - dt);
      this.updatePlay(dt);
      if (this.state === 'play' && this.timeLeft <= 0) this.finish();
    } else if (this.state === 'over') {
      this.overT += dt; this.updateOver && this.updateOver(dt);
    }
    for (const p of this.parts) { p.life -= dt; p.vy += p.g * dt; p.x += p.vx * dt; p.y += p.vy * dt; }
    this.parts = this.parts.filter((p) => p.life > 0);
    for (const p of this.pops) p.life += dt;
    this.pops = this.pops.filter((p) => p.life < p.max);
    this.shakeAmt = Math.max(0, this.shakeAmt - dt * 30);
  }
  finish() {
    if (this.state === 'over') return;
    this.state = 'over'; this.overT = 0; this.coins = this.payout();
    this.sfx(this.coins > 0 ? 'win' : 'lose');
  }
  payout() { return 0; }
  partialCoins() { return this.state === 'over' ? this.coins : this.state === 'play' ? this.payout() : 0; }
  draw(c) {
    c.save();
    if (this.shakeAmt > 0.1) c.translate(rnd(-1, 1) * this.shakeAmt, rnd(-1, 1) * this.shakeAmt);
    this.drawScene(c);
    for (const p of this.parts) {
      c.globalAlpha = clamp(p.life / 0.4, 0, 1);
      c.fillStyle = p.c; c.beginPath(); c.arc(p.x, p.y, p.r, 0, 6.283); c.fill();
    }
    c.globalAlpha = 1;
    for (const p of this.pops) {
      const k = p.life / p.max, sc = easeOutBack(Math.min(1, k * 4));
      c.save(); c.globalAlpha = clamp(2 - k * 2, 0, 1); c.translate(p.x, p.y - k * 50); c.scale(sc, sc);
      txt(c, p.text, 0, 0, p.size, p.color); c.restore();
    }
    c.restore();
    if (this.state === 'intro') this.drawIntro(c);
    else if (this.state === 'countdown') this.drawCountdown(c);
    else if (this.state === 'over') this.drawOver(c);
    if (this.state === 'play' || this.state === 'countdown') this.drawHud && this.drawHud(c);
  }
  drawScene() {}
  button(c, cx, cy, w, h, label, color, pulse = true) {
    const k = pulse ? 1 + Math.sin(this.t * 5) * 0.025 : 1;
    c.save(); c.translate(cx, cy); c.scale(k, k);
    rr(c, -w / 2, -h / 2 + 5, w, h, h / 2.4); paint(c, mix(color, '#000000', 0.4));
    rr(c, -w / 2, -h / 2, w, h, h / 2.4); paint(c, vgrad(c, -h / 2, h / 2, mix(color, '#ffffff', 0.3), color));
    txt(c, label, 0, -1, h * 0.46, '#fff');
    c.restore();
  }
  drawIntro(c) {
    c.fillStyle = 'rgba(20,12,40,.55)'; c.fillRect(0, 0, W, H);
    const k = easeOutBack(this.introT * 2.2);
    c.save(); c.translate(W / 2, H / 2); c.scale(k, k);
    rr(c, -330, -230, 660, 460, 30); paint(c, vgrad(c, -230, 230, '#fffdf2', '#ffeab8'), 5);
    rr(c, -330, -230, 660, 86, 30); paint(c, this.color, 5);
    c.fillStyle = this.color; c.fillRect(-326, -190, 652, 20);
    txt(c, this.title, 0, -190, 44, '#fff');
    drawPigeon(c, -228, 30, 1.5, this.look, this.introPose || 'stand', this.t);
    let y = -110;
    for (const l of this.help) { txt(c, l, 70, y, 21, INK, 'center', null); y += 36; }
    c.restore();
    if (k > 0.95) this.button(c, W / 2, 470, 260, 74, 'PLAY!', '#3ab54a');
  }
  drawCountdown(c) {
    const n = Math.ceil(this.cd - 0.4);
    const f = (this.cd - 0.4) - Math.floor(this.cd - 0.4);
    const label = n > 0 ? String(n) : 'GO!';
    const sc = 0.6 + easeOutBack(1 - f) * 0.7;
    c.save(); c.translate(W / 2, H / 2); c.scale(sc, sc);
    c.globalAlpha = clamp(f * 3 + (n <= 0 ? 0 : 0.4), 0, 1);
    txt(c, label, 0, 0, 170, n > 0 ? '#ffe14a' : '#7dff6a', 'center', INK, 16);
    c.restore();
  }
  drawOver(c) {
    c.fillStyle = 'rgba(20,12,40,.6)'; c.fillRect(0, 0, W, H);
    const k = easeOutBack(this.overT * 2.2);
    c.save(); c.translate(W / 2, H / 2); c.scale(k, k);
    rr(c, -300, -220, 600, 440, 30); paint(c, vgrad(c, -220, 220, '#fffdf2', '#ffeab8'), 5);
    rr(c, -300, -220, 600, 80, 30); paint(c, this.color, 5);
    c.fillStyle = this.color; c.fillRect(-296, -185, 592, 18);
    txt(c, this.overTitle || "Time's up!", 0, -182, 42, '#fff');
    txt(c, 'Score', 0, -102, 24, '#7a6a55', 'center', null);
    txt(c, String(Math.round(this.score)), 0, -58, 64, '#ff7a1a');
    if (this.extraLines) this.extraLines(c);
    const cn = Math.round(this.coins * easeOutCubic((this.overT - 0.5) / 0.8));
    const lab = 'Coins earned: ' + this.coins; c.font = '900 34px ' + FONT; const tw = c.measureText(lab).width, x0 = -(tw + 58) / 2 + 20;
    coinIcon(c, x0 + 26, 62, 26);
    txt(c, 'Coins earned: ' + cn, x0 + 58, 62, 34, INK, 'left', null);
    drawPigeon(c, -230, 120, 0.9, this.look, this.coins > 0 ? 'jump' : 'dizzy', this.t);
    c.restore();
    if (k > 0.95) this.button(c, W / 2, 478, 260, 74, 'COLLECT', '#f5a020');
  }
  hit(cx, cy, w, h, x, y) { return Math.abs(x - cx) <= w / 2 && Math.abs(y - cy) <= h / 2; }
  rect(x0, y0, w, h, x, y) { return x >= x0 && x <= x0 + w && y >= y0 && y <= y0 + h; }
  // pointer events in play state
  onDown() {} onMove() {} onUp() {} onKey() {} onKeyUp() {}
}

export { W, H, INK, FONT, clamp, lerp, rnd, rint, pick, easeOutBack, easeOutCubic, easeInOut, mix, rr, paint, ell, circ, poly, txt, vgrad, star, coinIcon, heart, drawPigeon, Game };
