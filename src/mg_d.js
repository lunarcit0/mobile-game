// Pigeon City mini-games, set D: Barber Shop.
import { W, H, INK, FONT, clamp, lerp, rnd, rint, pick, easeOutBack, easeOutCubic, mix, rr, paint, ell, circ, poly, txt, vgrad, coinIcon, heart, drawPigeon, Game } from './mg_core.js';

// ============================================================ BARBER SHOP
const BA = {
  DURATION: 60, S: 3.1, PX: 330, PY: 520,
  TOOL_R: 27, DMG_PER_PX: 0.0125, DONE_H: 0.1, DONE_FRAC: 0.88,
  ENTER_T: 0.7, LEAVE_T: 1.0, KEY_SPEED: 340,
  SAT_DECAY: 0.012, SAT_NICK: 0.14, SAT_MIN: 0.1, NICK_PX: 30, NICK_CD: 0.9,
  PTS_REQ: 10, PTS_SPEED: 6, SPEED_FAST: 3, SPEED_SLOW: 9, PTS_HAPPY: 8, PTS_PERFECT: 6,
  COIN_DIV: 5, COIN_MAX: 60,
};
// zones in pigeon-local coordinates (feet = 0,0, scale 1)
const ZONES = {
  crest: { x: 30, y: -80, r: 11, tool: 0, n: 9 },
  nape: { x: 4, y: -60, r: 9, tool: 1, n: 22 },
  back: { x: -14, y: -40, r: 15, tool: 2, n: 16 },
  bow: { x: 26, y: -44, r: 9, tool: 3, n: 0 },
};
const BOWS = [{ n: 'pink', c: '#ff6fa5' }, { n: 'blue', c: '#4a8cff' }, { n: 'yellow', c: '#ffd23c' }];
const BODIES = ['#8a93a3', '#a8845c', '#d8d0c4', '#6f7f96', '#b86a5a', '#7d9a74'];
const TOOL_NAMES = ['Scissors', 'Clippers', 'Comb', 'Pink', 'Blue', 'Yellow'];
const TOOL_WP = [[0, -48], [0, -22], [0, 30]];

function slotRect(i) { return [622 + (i % 3) * 105, 352 + Math.floor(i / 3) * 110, 96, 96]; }
function bar(c, x, y, w, h, k, col, bg = '#fff') {
  rr(c, x, y, w, h, h / 2); paint(c, bg, 2.5);
  if (k > 0.01) { rr(c, x + 2, y + 2, (w - 4) * clamp(k, 0, 1), h - 4, (h - 4) / 2); c.fillStyle = col; c.fill(); }
}
function spike(c, bx, by, ang, len, w, fill) {
  if (len < 1.5) return;
  const dx = Math.cos(ang), dy = Math.sin(ang), nx = -dy, ny = dx;
  const mx = bx + dx * len * 0.55, my = by + dy * len * 0.55, tx = bx + dx * len + nx * len * 0.12, ty = by + dy * len + ny * len * 0.12;
  c.beginPath(); c.moveTo(bx + nx * w, by + ny * w);
  c.quadraticCurveTo(mx + nx * w * 0.7, my + ny * w * 0.7, tx, ty);
  c.quadraticCurveTo(mx - nx * w * 0.6, my - ny * w * 0.6, bx - nx * w, by - ny * w);
  c.closePath(); paint(c, fill, 2);
}
function bowTie(c, x, y, s, col) {
  c.save(); c.translate(x, y); c.scale(s, s);
  poly(c, [[0, 0], [-17, -10], [-17, 10]], col, 2.5); poly(c, [[0, 0], [17, -10], [17, 10]], col, 2.5);
  rr(c, -4.5, -6, 9, 12, 3); paint(c, mix(col, '#000000', 0.2), 2.5);
  c.restore();
}
// Tool art centred near (0,0). Working point = TOOL_WP[k] (tip). hot: draw so the working point sits at (x,y).
function toolIcon(c, k, x, y, s = 1, rot = 0, anim = 0, hot = false) {
  c.save(); c.translate(x, y); c.rotate(rot); c.scale(s, s);
  if (hot && k < 3) c.translate(-TOOL_WP[k][0], -TOOL_WP[k][1]);
  if (k === 0) {
    c.translate(0, 8);
    const open = 0.2 + (Math.sin(anim) * 0.5 + 0.5) * 0.18;
    for (const sg of [-1, 1]) {
      c.save(); c.rotate(sg * open);
      poly(c, [[-4, 4], [4, 4], [1.5, -56]], '#e1e6ee', 2.5);
      c.beginPath(); c.ellipse(sg * 2, 30, 9, 13, 0, 0, 6.283); paint(c, '#e0443a', 3);
      c.restore();
    }
    circ(c, 0, 0, 3.5, '#8a93a6', 2);
  } else if (k === 1) {
    c.translate(0, -2);
    rr(c, -14, -8, 28, 56, 9); paint(c, '#3a86d6', 3);
    rr(c, -16, -20, 32, 14, 3); paint(c, '#d9dee8', 3);
    c.fillStyle = INK; for (let i = 0; i < 7; i++) c.fillRect(-14 + i * 4.6, -26, 2.4, 7);
    circ(c, 0, 14, 4.5, '#ffd23c', 2); rr(c, -6, 26, 12, 6, 3); paint(c, '#1d5aa0', 2);
  } else if (k === 2) {
    c.translate(0, -8);
    rr(c, -32, -10, 64, 16, 6); paint(c, '#f6a335', 3);
    c.fillStyle = '#f6a335'; c.strokeStyle = INK; c.lineWidth = 1.8;
    for (let i = 0; i < 11; i++) { const tx = -29 + i * 5.8; c.beginPath(); c.rect(tx, 4, 3.6, 24); c.fill(); c.stroke(); }
  } else {
    bowTie(c, 0, 0, 1.5, BOWS[k - 3].c);
  }
  c.restore();
}

class Barber extends Game {
  constructor(mg) {
    super(mg, 'barber', 'Barber Shop', '#2f9ccf');
    this.dur = BA.DURATION; this.timeLeft = BA.DURATION; this.introPose = 'stand';
    this.help = ['Read what the customer wants in the bubble.', 'Pick a tool, then hold and sweep over the glow.', 'Scissors: crest. Clippers: fuzz. Comb: back.', 'Cutting the wrong spot = ouch! and less tip.', 'Keys: arrows move, Space cuts, Q/E swap tools.'];
    this.initRun();
  }
  initRun() {
    this.custN = 0; this.custDone = 0; this.perfect = 0; this.tool = 0; this.pressing = false; this.useKey = false; this.curVis = false;
    this.cx = 480; this.cy = 300; this.nickAcc = 0; this.nickCd = 0; this.sndAcc = 0; this.snip = 0;
    this.spawn();
  }
  reset() { this.timeLeft = BA.DURATION; this.score = 0; this.initRun(); }
  zoneXY(kind) { const z = ZONES[kind]; return { x: BA.PX + z.x * BA.S, y: BA.PY + z.y * BA.S, r: z.r * BA.S }; }
  makeReq(kind, colIdx) {
    const Z = ZONES[kind], z = this.zoneXY(kind), S = BA.S;
    const r = { kind, z, tool: Z.tool, done: false, tufts: [], text: '' };
    if (kind === 'bow') { r.tool = 3 + colIdx; r.col = colIdx; r.text = 'Add a ' + BOWS[colIdx].n + ' bow tie'; r.placed = false; return r; }
    const hx = BA.PX + 27 * S, hy = BA.PY - 62 * S;
    for (let i = 0; i < Z.n; i++) {
      const a = Math.random() * 6.283, d = Math.sqrt(Math.random()) * z.r;
      let t;
      if (kind === 'crest') {
        const bx = hx + (i / (Z.n - 1) - 0.5) * 2 * z.r * 0.95, by = hy - Math.sqrt(Math.max(0, Math.pow(14.5 * S, 2) - Math.pow(bx - hx, 2))) + 5;
        const ang = -Math.PI / 2 + (bx - hx) / (z.r * 2) + rnd(-0.28, 0.28), L = rnd(30, 48);
        t = { bx, by, ang, L, h: 1, hx: bx + Math.cos(ang) * L * 0.45, hy: by + Math.sin(ang) * L * 0.45 };
      } else if (kind === 'nape') {
        const bx = z.x + Math.cos(a) * d, by = z.y + Math.sin(a) * d;
        t = { bx, by, L: rnd(5, 8), h: 1, hx: bx, hy: by };
      } else {
        const bx = z.x + Math.cos(a) * d, by = z.y + Math.sin(a) * d;
        t = { bx, by, ang: rnd(-2.7, -0.4), L: rnd(24, 36), h: 1, hx: bx, hy: by };
      }
      r.tufts.push(t);
    }
    r.text = kind === 'crest' ? 'Trim the crest' : kind === 'nape' ? 'Shave the neck fuzz' : 'Comb the back flat';
    return r;
  }
  spawn() {
    const n = this.custN++;
    const nreq = n < 1 ? 1 : n < 2 ? rint(1, 2) : n < 5 ? 2 : rint(2, 3);
    const kinds = ['crest', 'nape', 'back', 'bow'].sort(() => Math.random() - 0.5).slice(0, nreq);
    const look = { body: BODIES[n % BODIES.length], hat: 'none', glasses: Math.random() < 0.3, moustache: Math.random() < 0.25 };
    this.cust = { n, look, reqs: kinds.map((k) => this.makeReq(k, rint(0, 2))), sat: 1, mistakes: 0, off: n ? -560 : 0, phase: n ? 'enter' : 'work', pt: 0, reqT: 0 };
    this.pressing = false; this.nickAcc = 0;
  }
  neededTool() { const c = this.cust; const r = c && c.reqs.find((q) => !q.done); return r ? r.tool : -1; }
  inSil(x, y) {
    const S = BA.S;
    if (Math.hypot(x - (BA.PX + 27 * S), y - (BA.PY - 62 * S)) < 15 * S) return true;
    const ex = (x - BA.PX) / (30 * S), ey = (y - (BA.PY - 38 * S)) / (24 * S);
    return ex * ex + ey * ey < 1;
  }
  nick(x, y, msg) {
    const c = this.cust; if (!c) return;
    c.sat = Math.max(BA.SAT_MIN, c.sat - BA.SAT_NICK); c.mistakes++; this.nickCd = BA.NICK_CD;
    this.pop(x, y - 30, msg, '#ff7a6a', 30); this.sfx('bad'); this.shake(6);
    this.burst(x, y, 10, [c.look.body, '#ff8a7a', '#fff'], 200);
  }
  completeReq(r) {
    const c = this.cust; r.done = true; for (const t of r.tufts) t.h = 0;
    const bonus = Math.round(BA.PTS_SPEED * clamp((BA.SPEED_SLOW - c.reqT) / (BA.SPEED_SLOW - BA.SPEED_FAST), 0, 1));
    const pts = Math.round(BA.PTS_REQ * c.sat) + bonus; this.score += pts;
    this.pop(r.z.x + c.off, r.z.y - r.z.r - 10, '+' + pts, bonus >= 4 ? '#7dff6a' : '#ffe14a', 32);
    this.sfx(bonus >= 4 ? 'win' : 'good');
    this.burst(r.z.x + c.off, r.z.y, 14, bonus >= 4 ? ['#ffd23c', '#fff3b0', '#fff'] : [c.look.body, '#fff'], 220);
    c.reqT = 0;
    if (c.reqs.every((q) => q.done)) { c.phase = 'happy'; c.pt = 0; this.pressing = false; }
  }
  checkDone() {
    for (const r of this.cust.reqs) {
      if (r.done || !r.tufts.length) continue;
      if (r.tufts.filter((t) => t.h <= BA.DONE_H).length / r.tufts.length >= BA.DONE_FRAC) this.completeReq(r);
    }
  }
  applyAt(x, y, sd) {
    const c = this.cust, tool = this.tool; if (tool > 2) return;
    let allowed = false;
    for (const r of c.reqs) {
      if (r.done || r.tool !== tool) continue;
      if (Math.hypot(x - r.z.x, y - r.z.y) < r.z.r + BA.TOOL_R * 0.6) allowed = true;
      for (const t of r.tufts) if (t.h > 0 && Math.hypot(x - t.hx, y - t.hy) < BA.TOOL_R) t.h = Math.max(0, t.h - sd * BA.DMG_PER_PX);
    }
    this.snip += sd * 0.35;
    this.sndAcc += sd; if (this.sndAcc > 70) { this.sndAcc = 0; this.sfx('tick'); }
    if (tool <= 1 && !allowed && this.inSil(x, y)) {
      this.nickAcc += sd;
      if (this.nickAcc > BA.NICK_PX && this.nickCd <= 0) { this.nick(x, y, 'Ouch!'); this.nickAcc = 0; }
    } else this.nickAcc = Math.max(0, this.nickAcc - sd * 0.5);
    this.checkDone();
  }
  sweepTo(nx, ny) {
    const px = this.cx, py = this.cy; this.cx = nx; this.cy = ny;
    const c = this.cust;
    if (!this.pressing || !c || c.phase !== 'work') return;
    const d = Math.hypot(nx - px, ny - py); if (d <= 0) return;
    const steps = Math.max(1, Math.ceil(d / 12)), sd = d / steps;
    for (let i = 1; i <= steps; i++) { if (c.phase !== 'work') break; this.applyAt(lerp(px, nx, i / steps), lerp(py, ny, i / steps), sd); }
  }
  updatePlay(dt) {
    const c = this.cust; this.nickCd = Math.max(0, this.nickCd - dt);
    const k = this.mg.keys;
    const dx = (k.has('ArrowRight') || k.has('KeyD') ? 1 : 0) - (k.has('ArrowLeft') || k.has('KeyA') ? 1 : 0);
    const dy = (k.has('ArrowDown') || k.has('KeyS') ? 1 : 0) - (k.has('ArrowUp') || k.has('KeyW') ? 1 : 0);
    if (dx || dy) { const n = Math.hypot(dx, dy); this.useKey = true; this.curVis = true; this.sweepTo(clamp(this.cx + dx / n * BA.KEY_SPEED * dt, 10, W - 10), clamp(this.cy + dy / n * BA.KEY_SPEED * dt, 40, H - 10)); }
    c.pt += dt;
    if (c.phase === 'enter') {
      c.off = -560 * (1 - easeOutCubic(c.pt / BA.ENTER_T));
      if (c.pt >= BA.ENTER_T) { c.off = 0; c.phase = 'work'; c.pt = 0; c.reqT = 0; }
    } else if (c.phase === 'work') {
      c.reqT += dt; c.sat = Math.max(BA.SAT_MIN, c.sat - BA.SAT_DECAY * dt);
    } else if (c.phase === 'happy') {
      if (c.pt >= 0.35) {
        const tip = Math.round(BA.PTS_HAPPY * c.sat) + (c.mistakes === 0 ? BA.PTS_PERFECT : 0);
        this.score += tip; this.custDone++; if (c.mistakes === 0) this.perfect++;
        this.pop(BA.PX + 60, BA.PY - 250, (c.mistakes === 0 ? 'Perfect! +' : 'Tip +') + tip, c.mistakes === 0 ? '#7dff6a' : '#ffe14a', 38);
        this.sfx('coin'); this.burst(BA.PX + 60, BA.PY - 200, 18, ['#ffd23c', '#fff3b0', '#ff8fb8'], 260);
        c.phase = 'leave'; c.pt = 0;
      }
    } else if (c.phase === 'leave') {
      c.off = -Math.pow(c.pt / BA.LEAVE_T, 2) * 700;
      if (c.pt >= BA.LEAVE_T) this.spawn();
    }
  }
  onDown(x, y) {
    this.useKey = false; this.curVis = true; this.cx = x; this.cy = y;
    for (let i = 0; i < 6; i++) { const [sx, sy, sw, sh] = slotRect(i); if (this.rect(sx, sy, sw, sh, x, y)) { if (this.tool !== i) this.sfx('click'); this.tool = i; this.pressing = false; return; } }
    const c = this.cust; if (!c || c.phase !== 'work') return;
    if (this.tool >= 3) {
      const r = c.reqs.find((q) => !q.done && q.kind === 'bow');
      if (r && Math.hypot(x - r.z.x, y - r.z.y) < r.z.r + 16) {
        if (r.tool === this.tool) { r.placed = true; this.completeReq(r); }
        else if (this.nickCd <= 0) this.nick(x, y, 'Wrong colour!');
      }
      return;
    }
    this.pressing = true; this.nickAcc = 0;
  }
  onMove(x, y) { this.useKey = false; this.curVis = true; this.sweepTo(x, y); }
  onUp() { this.pressing = false; }
  cycleTool(d) { this.tool = (this.tool + d + 6) % 6; this.sfx('click'); this.pressing = false; }
  onKey(code) {
    if (code === 'KeyQ') this.cycleTool(-1);
    else if (code === 'KeyE') this.cycleTool(1);
    else if (code === 'Space') { this.useKey = true; this.onDown(this.cx, this.cy); this.useKey = true; }
  }
  onKeyUp(code) { if (code === 'Space') this.pressing = false; }
  payout() { return clamp(Math.floor(this.score / BA.COIN_DIV), 0, BA.COIN_MAX); }
  extraLines(c) { txt(c, 'Customers: ' + this.custDone + '    Perfect: ' + this.perfect, 0, 8, 24, '#7a6a55', 'center', null); }

  // ---------------------------------------------------------- drawing
  drawRoom(c) {
    c.fillStyle = vgrad(c, 0, 548, '#ffeccf', '#ffd9a8'); c.fillRect(0, 0, W, 548);
    c.fillStyle = 'rgba(240,150,130,.28)'; for (let i = 0; i < 25; i++) c.fillRect(i * 40, 0, 20, 548);
    // mirror
    rr(c, 150, 70, 360, 330, 40); paint(c, '#e6b84a', 5);
    rr(c, 160, 80, 340, 310, 32); paint(c, vgrad(c, 80, 390, '#d8f3fb', '#a9d9ee'), 3);
    c.save(); rr(c, 160, 80, 340, 310, 32); c.clip(); c.fillStyle = 'rgba(255,255,255,.35)';
    c.beginPath(); c.moveTo(230, 80); c.lineTo(290, 80); c.lineTo(190, 390); c.lineTo(130, 390); c.fill();
    c.beginPath(); c.moveTo(320, 80); c.lineTo(345, 80); c.lineTo(245, 390); c.lineTo(220, 390); c.fill(); c.restore();
    // barber pole
    c.save(); rr(c, 44, 220, 36, 310, 12); c.clip(); c.fillStyle = '#fff'; c.fillRect(40, 210, 44, 330);
    const off = (this.t * 40) % 60;
    for (let i = -6; i < 10; i++) {
      const y0 = 210 + i * 60 + off; c.fillStyle = '#e0443a'; c.beginPath(); c.moveTo(40, y0); c.lineTo(84, y0 - 30); c.lineTo(84, y0); c.lineTo(40, y0 + 30); c.fill();
      c.fillStyle = '#3a6fd6'; c.beginPath(); c.moveTo(40, y0 + 30); c.lineTo(84, y0); c.lineTo(84, y0 + 12); c.lineTo(40, y0 + 42); c.fill();
    }
    c.restore(); rr(c, 44, 220, 36, 310, 12); paint(c, null, 3.5);
    rr(c, 38, 206, 48, 18, 7); paint(c, '#8c93a6', 3); rr(c, 38, 526, 48, 18, 7); paint(c, '#8c93a6', 3);
    circ(c, 62, 198, 11, '#ffd23c', 3);
    // floor
    c.fillStyle = '#f4f1ea'; c.fillRect(0, 548, W, 52);
    c.fillStyle = '#3a3f55'; for (let r = 0; r < 2; r++) for (let i = 0; i < 25; i++) if ((i + r) % 2) c.fillRect(i * 40, 548 + r * 26, 40, 26);
    c.strokeStyle = INK; c.lineWidth = 3; c.beginPath(); c.moveTo(0, 548); c.lineTo(W, 548); c.stroke();
    // chair
    const px = BA.PX;
    rr(c, px - 180, 372, 80, 170, 26); paint(c, vgrad(c, 372, 540, '#d8444a', '#a82a30'), 4);
    rr(c, px - 22, 552, 44, 32, 8); paint(c, '#8c93a6', 3.5);
    ell(c, px, 590, 96, 11, '#6a7185', 3.5);
    rr(c, px - 125, 518, 262, 38, 14); paint(c, vgrad(c, 518, 556, '#e0545a', '#b02e36'), 4);
  }
  ringFor(c, r) {
    const pulse = 0.5 + 0.5 * Math.sin(this.t * 6);
    c.save();
    c.beginPath(); c.arc(r.z.x, r.z.y, r.z.r + 6 + pulse * 4, 0, 6.283); c.fillStyle = 'rgba(255,230,90,' + (0.12 + pulse * 0.1) + ')'; c.fill();
    c.setLineDash([9, 7]); c.lineDashOffset = -this.t * 30; c.lineWidth = 4; c.strokeStyle = '#ffe14a'; c.stroke(); c.setLineDash([]);
    c.restore();
    const iy = r.z.y - r.z.r - 28 - Math.sin(this.t * 5) * 3;
    toolIcon(c, r.tool, r.z.x, iy, 0.5, 0, 0);
  }
  drawTufts(c, r, body) {
    const dark = mix(body, '#2b2230', 0.35), fuzz = mix(body, '#ffffff', 0.55);
    for (const t of r.tufts) {
      if (r.kind === 'crest') { if (t.h > 0.02) spike(c, t.bx, t.by, t.ang, t.L * t.h + 4, 6.5, mix(body, '#2b2230', 0.2)); }
      else if (r.kind === 'nape') {
        if (t.h > 0.02) { const k = 0.4 + 0.6 * t.h; c.globalAlpha = t.h; circ(c, t.bx, t.by, t.L * k, fuzz, 1.5); circ(c, t.bx + 4, t.by - 3, t.L * k * 0.7, fuzz, 1.5); circ(c, t.bx - 4, t.by + 2, t.L * k * 0.6, fuzz, 1.5); c.globalAlpha = 1; }
      } else {
        const f = 1 - t.h, ang = lerp(t.ang, Math.PI + 0.15, f), len = lerp(t.L, 15, f);
        spike(c, t.bx, t.by, ang, len, lerp(6, 4, f), f > 0.9 ? dark : mix(body, '#2b2230', 0.18));
      }
    }
  }
  drawCustomer(c) {
    const cu = this.cust; if (!cu) return;
    c.save(); c.translate(cu.off, 0);
    const pose = cu.phase === 'happy' || cu.phase === 'leave' ? 'jump' : 'stand';
    drawPigeon(c, BA.PX, BA.PY, BA.S, cu.look, pose, pose === 'jump' ? this.t : 0);
    for (const r of cu.reqs) {
      if (r.kind === 'bow') { if (r.placed) bowTie(c, r.z.x, r.z.y, 1.7, BOWS[r.col].c); }
      else this.drawTufts(c, r, cu.look.body);
    }
    if (cu.phase === 'work') for (const r of cu.reqs) if (!r.done) this.ringFor(c, r);
    c.restore();
  }
  drawBubble(c) {
    const cu = this.cust; if (!cu) return;
    const n = cu.reqs.length, x = 560, y = 58, w = 380, h = 20 + n * 50;
    c.save();
    if (cu.phase === 'enter') c.globalAlpha = clamp(cu.pt / BA.ENTER_T, 0, 1);
    else if (cu.phase === 'leave') c.globalAlpha = clamp(1 - cu.pt / 0.4, 0, 1);
    poly(c, [[x + 30, y + h - 4], [x + 80, y + h - 4], [x - 62, y + h + 52]], '#fff', 3.5);
    rr(c, x, y, w, h, 22); paint(c, '#fff', 3.5);
    c.fillStyle = '#fff'; c.fillRect(x + 33, y + h - 7, 44, 6);
    cu.reqs.forEach((r, i) => {
      const ry = y + 35 + i * 50;
      rr(c, x + 14, ry - 15, 30, 30, 8); paint(c, r.done ? '#7be06a' : '#f4f0e6', 3);
      if (r.done) { c.strokeStyle = '#1d6a26'; c.lineWidth = 5; c.lineCap = 'round'; c.beginPath(); c.moveTo(x + 21, ry); c.lineTo(x + 28, ry + 7); c.lineTo(x + 39, ry - 8); c.stroke(); }
      toolIcon(c, r.tool, x + 74, ry, 0.36, 0, 0);
      txt(c, r.text, x + 104, ry + 1, 22, r.done ? '#8a8f99' : INK, 'left', null);
      if (r.done) { c.strokeStyle = '#8a8f99'; c.lineWidth = 2.5; c.beginPath(); c.moveTo(x + 104, ry + 2); c.lineTo(x + 104 + Math.min(260, r.text.length * 11.5), ry + 2); c.stroke(); }
    });
    c.restore();
  }
  drawTray(c) {
    rr(c, 606, 326, 334, 252, 18); paint(c, 'rgba(255,255,255,.78)', 3.5);
    txt(c, 'TOOLS', 773, 340, 15, '#2a6f93', 'center', null);
    const need = this.cust && this.cust.phase === 'work' ? this.neededTool() : -1;
    for (let i = 0; i < 6; i++) {
      const [x, y, w, h] = slotRect(i), sel = this.tool === i;
      if (i === need && !sel) { rr(c, x - 5, y - 5, w + 10, h + 10, 18); c.fillStyle = 'rgba(255,225,70,' + (0.35 + 0.3 * Math.sin(this.t * 6)) + ')'; c.fill(); }
      rr(c, x, y, w, h, 14); paint(c, sel ? '#fff6c2' : '#f2f6fa', sel ? 5 : 3);
      if (sel) { rr(c, x + 3, y + 3, w - 6, h - 6, 11); c.strokeStyle = '#f5a020'; c.lineWidth = 3; c.stroke(); }
      toolIcon(c, i, x + w / 2, y + (i === 0 ? 40 : 42), i < 3 ? 0.68 : 1, 0, 0);
      txt(c, TOOL_NAMES[i], x + w / 2, y + h - 11, 14, INK, 'center', null);
    }
  }
  drawCursor(c) {
    if (this.state !== 'play' || !this.curVis) return;
    const x = this.cx, y = this.cy, k = this.tool;
    if (k >= 3) { toolIcon(c, k, x + 4, y - 6, 1.1, 0.25, 0); return; }
    const jit = k === 1 && this.pressing ? Math.sin(this.t * 90) * 1.6 : 0;
    toolIcon(c, k, x + jit, y, 0.9, k === 2 ? 0.25 : Math.PI + 0.5, k === 0 && this.pressing ? this.snip : 0, true);
    if (this.pressing) { c.strokeStyle = 'rgba(255,255,255,.8)'; c.lineWidth = 3; c.beginPath(); c.arc(x, y, BA.TOOL_R, 0, 6.283); c.stroke(); }
  }
  drawScene(c) {
    this.drawRoom(c); this.drawCustomer(c); this.drawBubble(c); this.drawTray(c); this.drawCursor(c);
  }
  drawHud(c) {
    const k = this.timeLeft / BA.DURATION;
    bar(c, 20, 12, 920, 20, k, k > 0.25 ? '#3ab54a' : '#e8452c');
    txt(c, Math.ceil(this.timeLeft) + 's', 480, 22, 16, '#fff', 'center', INK, 3);
    txt(c, 'Tips ' + Math.round(this.score), 20, 64, 28, '#fff', 'left');
    coinIcon(c, 32, 100, 13); txt(c, '× ' + this.payout(), 54, 100, 22, '#fff', 'left');
    const sat = this.cust ? this.cust.sat : 1;
    heart(c, 32, 134, 11, sat > 0.6 ? '#ff5a7a' : sat > 0.3 ? '#ffb020' : '#8a8f99');
    bar(c, 54, 124, 200, 20, sat, sat > 0.6 ? '#3ab54a' : sat > 0.3 ? '#f5b020' : '#e8452c');
  }
}

export const GAMES_D = { barber: Barber };
