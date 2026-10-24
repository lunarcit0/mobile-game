// Pigeon City mini-games entry. See mg_core.js (shared) and mg_a/b/c.js (the games).
import { W, H, clamp, Game } from './mg_core.js';
import { GAMES_A } from './mg_a.js';
import { GAMES_B } from './mg_b.js';
import { GAMES_C } from './mg_c.js';
import { GAMES_D } from './mg_d.js';

const REG = Object.assign({}, GAMES_A, GAMES_B, GAMES_C, GAMES_D);
const GAME_KEYS = new Set(['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'KeyW', 'KeyA', 'KeyS', 'KeyD', 'Space', 'Enter', 'Escape', 'KeyF', 'KeyE', 'KeyQ']);

const CSS = `
#mg{position:fixed;inset:0;z-index:8;display:none;align-items:center;justify-content:center;background:rgba(12,8,28,.82);font-family:inherit;touch-action:none;user-select:none;-webkit-user-select:none}
#mg.on{display:flex}
#mg canvas{width:min(calc(100vw - 12px),calc((100vh - 12px)*1.6));aspect-ratio:16/10;height:auto;border-radius:14px;box-shadow:0 8px 40px rgba(0,0,0,.6);touch-action:none;cursor:pointer;background:#222;display:block}
#mg .mg-x{position:absolute;top:max(10px,env(safe-area-inset-top));right:max(10px,env(safe-area-inset-right));width:46px;height:46px;border-radius:50%;border:3px solid #2b2230;background:#ff5a4a;color:#fff;font:900 24px/1 inherit;cursor:pointer;z-index:2;box-shadow:0 3px 0 #2b2230}
#mg .mg-x:active{transform:translateY(2px)}
`;

export class MiniGames {
  constructor({ sfx = () => {}, look = null } = {}) {
    this.sfx = (n) => { try { sfx(n); } catch (e) { /* ignore */ } };
    this.look = look || { body: '#8a93a3', hat: 'none', glasses: false, scarf: null };
    this.g = null; this.onFinish = null; this._on = false; this._raf = 0; this._last = 0; this._manual = false;
    this.keys = new Set(); this.dom = null;
    this._kd = (e) => this._keyEvt(e, true);
    this._ku = (e) => this._keyEvt(e, false);
  }
  get active() { return this._on; }
  setLook(look) { if (look) this.look = Object.assign({}, this.look, look); }
  _build() {
    if (this.dom) return;
    if (!document.getElementById('mg-style')) {
      const s = document.createElement('style'); s.id = 'mg-style'; s.textContent = CSS; document.head.appendChild(s);
    }
    let root = document.getElementById('mg');
    if (!root) { root = document.createElement('div'); root.id = 'mg'; document.body.appendChild(root); }
    root.innerHTML = '';
    const cv = document.createElement('canvas');
    this.S = Math.min(2, Math.max(1, (typeof devicePixelRatio === 'number' ? devicePixelRatio : 1)));
    cv.width = Math.round(W * this.S); cv.height = Math.round(H * this.S);
    const x = document.createElement('button'); x.className = 'mg-x'; x.type = 'button'; x.textContent = '✕'; x.setAttribute('aria-label', 'Close');
    root.appendChild(cv); root.appendChild(x);
    this.dom = { root, cv, x, ctx: cv.getContext('2d') };
    const pt = (e) => { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left) * W / r.width, (e.clientY - r.top) * H / r.height]; };
    cv.addEventListener('pointerdown', (e) => { e.preventDefault(); try { cv.setPointerCapture(e.pointerId); } catch (_) { /* */ } const [px, py] = pt(e); this._down(px, py, e.pointerType); });
    cv.addEventListener('pointermove', (e) => { const [px, py] = pt(e); this._move(px, py); });
    const up = (e) => { const [px, py] = pt(e); this._up(px, py); };
    cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
    cv.addEventListener('contextmenu', (e) => e.preventDefault());
    x.addEventListener('click', () => this._quit());
  }
  start(id, onFinish) {
    if (this._on) return;
    const Cls = REG[id];
    if (!Cls) return;
    this._build();
    this._on = true; this.onFinish = typeof onFinish === 'function' ? onFinish : null;
    this.keys.clear();
    this.g = new Cls(this);
    this.dom.root.classList.add('on');
    window.addEventListener('keydown', this._kd, true);
    window.addEventListener('keyup', this._ku, true);
    this._last = 0;
    this._draw();
    this._raf = requestAnimationFrame((t) => this._loop(t));
  }
  _loop(t) {
    if (!this._on) return;
    this._raf = requestAnimationFrame((tt) => this._loop(tt));
    const dt = this._last ? clamp((t - this._last) / 1000, 0, 0.05) : 0;
    this._last = t;
    if (!this._manual) this._tick(dt);
  }
  _tick(dt) {
    if (!this._on || !this.g) return;
    this.g.update(dt);
    this._draw();
  }
  _draw() {
    const c = this.dom.ctx;
    c.setTransform(this.S, 0, 0, this.S, 0, 0);
    c.clearRect(0, 0, W, H);
    this.g.draw(c);
  }
  _down(x, y, type) {
    const g = this.g; if (!g) return;
    g.lastPointer = type;
    if (g.state === 'intro') { if (g.hit(W / 2, 470, 260, 74, x, y)) g.begin(); }
    else if (g.state === 'over') { if (g.hit(W / 2, 478, 260, 74, x, y) && g.overT > 0.4) this._finish(false); }
    else if (g.state === 'play') g.onDown(x, y);
  }
  _move(x, y) { const g = this.g; if (g && g.state !== 'over') { g.mx = x; g.my = y; if (g.state === 'play') g.onMove(x, y); } }
  _up(x, y) { const g = this.g; if (g && g.state === 'play') g.onUp(x, y); }
  _click(x, y) { if (!this._on) return; this._move(x, y); this._down(x, y, 'mouse'); this._up(x, y); if (this._on) this._draw(); }
  _key(code, hold = false) { if (!this._on) return; this._handleKey(code, true); if (!hold) this._handleKey(code, false); if (this._on) this._draw(); }
  _keyEvt(e, down) {
    if (!this._on) return;
    if (!GAME_KEYS.has(e.code)) return;
    e.stopPropagation(); e.preventDefault();
    if (down && e.repeat && e.code !== 'Space' && e.code !== 'Enter') { /* held repeats ignored for one-shots */ }
    this._handleKey(e.code, down, e.repeat);
  }
  _handleKey(code, down, repeat = false) {
    const g = this.g; if (!g) return;
    if (down) {
      this.keys.add(code);
      if (code === 'Escape') { if (!repeat) this._quit(); return; }
      if (repeat) { g.onKeyRepeat && g.onKeyRepeat(code); return; }
      if (g.state === 'intro' && (code === 'Enter' || code === 'Space')) g.begin();
      else if (g.state === 'over' && (code === 'Enter' || code === 'Space') && g.overT > 0.4) this._finish(false);
      else if (g.state === 'play') g.onKey(code);
    } else {
      this.keys.delete(code);
      if (g.state === 'play') g.onKeyUp(code);
    }
  }
  _quit() {
    if (!this._on) return;
    this._finish(true);
  }
  _finish(quit) {
    const g = this.g, cb = this.onFinish;
    const res = { id: g.id, score: Math.round(g.score), coins: quit ? g.partialCoins() : g.coins };
    this._close();
    if (cb) { try { cb(res); } catch (e) { console.error(e); } }
  }
  _close() {
    this._on = false;
    if (this._raf) cancelAnimationFrame(this._raf);
    this._raf = 0;
    window.removeEventListener('keydown', this._kd, true);
    window.removeEventListener('keyup', this._ku, true);
    this.keys.clear();
    if (this.dom) this.dom.root.classList.remove('on');
    this.g = null; this.onFinish = null;
  }
  stop() { if (!this._on) return; this._close(); }
  debug() {
    const g = this.g;
    if (!g) return { id: null, state: 'closed', score: 0, coins: 0, timeLeft: 0 };
    return { id: g.id, state: g.state, score: Math.round(g.score), coins: g.state === 'over' ? g.coins : g.partialCoins(), timeLeft: Math.round(g.timeLeft * 10) / 10 };
  }
}
