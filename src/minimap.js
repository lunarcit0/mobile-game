// Mini-map (top-left): rotates with the camera, shows roads/blocks, the red route to the bus depot, Rat Corp stashes
// (revealed as you walk near them), and mission targets. Press N for a big north-up map of the whole city.
import { N, PITCH, SLAB, roadCenter, blockCenter, HALF_CITY } from './config.js';

const RC = (k) => roadCenter(k);
const RANGE_SMALL = 105, RANGE_BIG = 205;

export class Minimap {
  /** o: { world, player, quest, missions, story, getMode(), save } */
  constructor(o) {
    this.o = o; this.big = false; this.t = 0;
    const wrap = this.wrap = document.createElement('div'); wrap.id = 'minimap';
    const cv = this.cv = document.createElement('canvas'); wrap.appendChild(cv);
    const legend = this.legend = document.createElement('div'); legend.className = 'mmleg';
    legend.innerHTML = '<span><i style="background:#ff4a4a"></i>Rat Corp</span><span><i style="background:#ff8a3a"></i>Bus</span><span><i style="background:#ffd24a"></i>Goal</span>';
    wrap.appendChild(legend);
    document.body.appendChild(wrap);
    wrap.addEventListener('click', () => this.toggle());
    this.ctx = cv.getContext('2d');
    this.resize();
    addEventListener('resize', () => this.resize());
    this.route = null; this.routeT = 0;
    const seen = (o.save.data.quest = o.save.data.quest || { nests: [], won: false });
    seen.seen = seen.seen || [];
    this.seen = new Set(seen.seen);
  }

  toggle() { this.big = !this.big; this.wrap.classList.toggle('big', this.big); this.resize(); }
  resize() {
    const px = this.big ? Math.min(340, Math.floor(Math.min(innerWidth, innerHeight) * 0.78)) : (matchMedia('(pointer: coarse)').matches ? 108 : 150);
    const r = Math.min(devicePixelRatio || 1, 2);
    this.size = px; this.cv.width = px * r; this.cv.height = px * r; this.cv.style.width = px + 'px'; this.cv.style.height = px + 'px'; this.r = r;
    document.documentElement.style.setProperty('--mm', (this.big ? 0 : px) + 'px');
  }

  /* ----------------------------------------------------------- red route along the road grid */
  snap(x, z) {
    // nearest point on a road centre line, as {x,z,a,b}: the two intersections (ids) that bound that road segment
    let best = null;
    const clampI = (v) => Math.max(0, Math.min(N, v));
    for (let i = 0; i <= N; i++) {            // roads running north-south at x = RC(i)
      const d = Math.abs(x - RC(i)); if (best && d >= best.d) continue;
      const zc = Math.max(RC(0), Math.min(RC(N), z)); const j = clampI(Math.min(N - 1, Math.max(0, Math.floor((zc - RC(0)) / PITCH))));
      best = { d, x: RC(i), z: zc, a: j * (N + 1) + i, b: (j + 1) * (N + 1) + i };
    }
    for (let j = 0; j <= N; j++) {            // roads running east-west at z = RC(j)
      const d = Math.abs(z - RC(j)); if (best && d >= best.d) continue;
      const xc = Math.max(RC(0), Math.min(RC(N), x)); const i = clampI(Math.min(N - 1, Math.max(0, Math.floor((xc - RC(0)) / PITCH))));
      best = { d, x: xc, z: RC(j), a: j * (N + 1) + i, b: j * (N + 1) + i + 1 };
    }
    return best;
  }
  nodePos(id) { return { x: RC(id % (N + 1)), z: RC(Math.floor(id / (N + 1))) }; }
  findRoute(from, to) {
    const S = this.snap(from.x, from.z), E = this.snap(to.x, to.z);
    const V = (N + 1) * (N + 1), SID = V, EID = V + 1;
    const pos = (id) => id === SID ? S : id === EID ? E : this.nodePos(id);
    const adj = Array.from({ length: V + 2 }, () => []);
    const link = (a, b) => { const A = pos(a), B = pos(b), d = Math.hypot(A.x - B.x, A.z - B.z); adj[a].push([b, d]); adj[b].push([a, d]); };
    for (let j = 0; j <= N; j++) for (let i = 0; i <= N; i++) { const id = j * (N + 1) + i; if (i < N) link(id, id + 1); if (j < N) link(id, id + N + 1); }
    link(SID, S.a); link(SID, S.b); link(EID, E.a); link(EID, E.b);
    if ((S.a === E.a && S.b === E.b)) link(SID, EID);
    const dist = new Array(V + 2).fill(1e9), prev = new Array(V + 2).fill(-1), done = new Array(V + 2).fill(false);
    dist[SID] = 0;
    for (let k = 0; k < V + 2; k++) {
      let u = -1; for (let i = 0; i < V + 2; i++) if (!done[i] && (u < 0 || dist[i] < dist[u])) u = i;
      if (u < 0 || dist[u] >= 1e9) break; done[u] = true; if (u === EID) break;
      for (const [v, w] of adj[u]) if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; prev[v] = u; }
    }
    const pts = []; for (let u = EID; u !== -1; u = prev[u]) pts.push(pos(u));
    pts.reverse();
    return [{ x: from.x, z: from.z }, ...pts.map((p) => ({ x: p.x, z: p.z })), { x: to.x, z: to.z }];
  }

  /* ----------------------------------------------------------- drawing */
  update(dt) {
    const o = this.o, mode = o.getMode();
    const show = mode === 'street' || mode === 'driving';
    this.wrap.style.display = show ? 'block' : 'none';
    if (!show) return;
    this.t += dt;
    const P = o.player, depot = o.world.busDepot;
    this.routeT -= dt;
    if (depot && this.routeT <= 0) { this.routeT = 0.5; const d = Math.hypot(depot.x - P.x, depot.z - P.z); this.route = d > 14 ? this.findRoute(P, depot) : null; }
    // reveal stashes as you walk near them
    const Q = o.quest;
    if (Q) for (const n of Q.nests) if (n.alive && !this.seen.has(n.id) && Math.hypot(n.x - P.x, n.z - P.z) < RANGE_SMALL * 0.9) {
      this.seen.add(n.id); o.save.data.quest.seen = [...this.seen]; o.save.write();
    }
    this.draw();
  }

  draw() {
    const o = this.o, P = o.player, c = this.ctx, S = this.size * this.r, s0 = S / 2;
    const range = this.big ? RANGE_BIG : RANGE_SMALL, sc = (S / 2) / range;
    const yaw = this.big ? 0 : P.camYaw;
    const fx = -Math.sin(yaw), fz = -Math.cos(yaw), rx = Math.cos(yaw), rz = -Math.sin(yaw);
    // world -> screen mapping, player-centred (big map is centred on the middle of the city)
    const cx = this.big ? 0 : P.x, cz = this.big ? 0 : P.z;
    const a = rx * sc, b = -fx * sc, cc = rz * sc, d = -fz * sc, e = s0 - (a * cx + cc * cz), f = s0 - (b * cx + d * cz);
    const sx = (x, z) => [a * x + cc * z + e, b * x + d * z + f];
    c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, S, S);
    c.save(); c.beginPath(); c.arc(s0, s0, s0 - 2, 0, 6.3); c.clip();
    c.fillStyle = '#2b3139'; c.fillRect(0, 0, S, S);          // roads / ground
    c.setTransform(a, b, cc, d, e, f);
    for (let i = -1; i <= N; i++) for (let j = -1; j <= N; j++) {   // city blocks
      const bx = blockCenter(i), bz = blockCenter(j);
      if (Math.abs(bx - cx) > range * 1.6 || Math.abs(bz - cz) > range * 1.6) continue;
      const inside = i >= 0 && i < N && j >= 0 && j < N;
      c.fillStyle = inside ? '#5a626c' : '#464d56';
      if (inside && i === 3 && j === 2) c.fillStyle = '#4f7d55';   // City College
      c.fillRect(bx - SLAB / 2, bz - SLAB / 2, SLAB, SLAB);
      if (inside) { c.fillStyle = 'rgba(0,0,0,.18)'; c.fillRect(bx - 20, bz - 20, 40, 40); }
    }
    c.strokeStyle = 'rgba(255,214,90,.55)'; c.lineWidth = 0.9 / sc * 1.2;     // road centre lines
    c.beginPath();
    for (let k = 0; k <= N; k++) { c.moveTo(RC(k), RC(0) - 40); c.lineTo(RC(k), RC(N) + 40); c.moveTo(RC(0) - 40, RC(k)); c.lineTo(RC(N) + 40, RC(k)); }
    c.stroke();
    // red route to the bus depot
    if (this.route) {
      c.lineJoin = 'round'; c.lineCap = 'round';
      c.strokeStyle = 'rgba(0,0,0,.55)'; c.lineWidth = 6.5 / sc * 1.0; c.beginPath(); this.route.forEach((p, i) => (i ? c.lineTo(p.x, p.z) : c.moveTo(p.x, p.z))); c.stroke();
      c.strokeStyle = '#ff3b30'; c.lineWidth = 4 / sc * 1.0; c.setLineDash([10 / sc, 6 / sc]); c.lineDashOffset = -this.t * 18 / sc; c.beginPath(); this.route.forEach((p, i) => (i ? c.lineTo(p.x, p.z) : c.moveTo(p.x, p.z))); c.stroke(); c.setLineDash([]);
    }
    c.setTransform(1, 0, 0, 1, 0, 0);
    const icon = (x, z, fn, edge = null) => {
      let [px, pz] = sx(x, z), dx = px - s0, dy = pz - s0, dist = Math.hypot(dx, dy), lim = s0 - 12 * this.r;
      if (dist > lim) { if (!edge) return; px = s0 + (dx / dist) * lim; pz = s0 + (dy / dist) * lim; fn(px, pz, true, Math.atan2(dy, dx)); } else fn(px, pz, false, 0);
    };
    const R = this.r, tt = this.t;
    const arrowHead = (px, pz, ang, col) => { c.save(); c.translate(px, pz); c.rotate(ang); c.fillStyle = col; c.beginPath(); c.moveTo(6 * R, 0); c.lineTo(-4 * R, -5 * R); c.lineTo(-4 * R, 5 * R); c.closePath(); c.fill(); c.strokeStyle = '#000'; c.lineWidth = 1 * R; c.stroke(); c.restore(); };
    // Rat Corp stashes (discovered ones, or any in range)
    const Q = o.quest;
    if (Q && Q.state === 'nests') {
      let nearest = null, nd = 1e9;
      for (const n of Q.nests) {
        if (!n.alive) continue;
        const seen = this.seen.has(n.id), dd = Math.hypot(n.x - P.x, n.z - P.z);
        if (seen && dd < nd) { nd = dd; nearest = n; }
        if (!seen) continue;
        icon(n.x, n.z, (px, pz, edge, ang) => {
          if (edge) { if (n === nearest) arrowHead(px, pz, ang, '#ff4a4a'); return; }
          c.fillStyle = `rgba(255,60,60,${0.25 + 0.2 * Math.sin(tt * 4)})`; c.beginPath(); c.arc(px, pz, (9 + 2 * Math.sin(tt * 4)) * R, 0, 6.3); c.fill();
          c.fillStyle = '#ff3b3b'; c.strokeStyle = '#fff'; c.lineWidth = 1.5 * R; c.beginPath(); c.arc(px, pz, 5.5 * R, 0, 6.3); c.fill(); c.stroke();
          c.fillStyle = '#fff'; c.font = `900 ${8 * R}px system-ui`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('$', px, pz + 0.5 * R);
        }, true);
      }
    } else if (Q && Q.king && Q.king.state !== 'dead') {
      icon(Q.king.x, Q.king.z, (px, pz, edge, ang) => { if (edge) { arrowHead(px, pz, ang, '#ff4a4a'); return; } c.fillStyle = '#ff3b3b'; c.strokeStyle = '#ffd24a'; c.lineWidth = 2 * R; c.beginPath(); c.arc(px, pz, 7 * R, 0, 6.3); c.fill(); c.stroke(); c.fillStyle = '#ffd24a'; c.font = `900 ${9 * R}px system-ui`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('K', px, pz + R); }, true);
    }
    // bus depot
    const dep = o.world.busDepot;
    if (dep) icon(dep.x, dep.z, (px, pz, edge, ang) => {
      if (edge) { arrowHead(px, pz, ang, '#ff8a3a'); return; }
      c.fillStyle = '#ff8a3a'; c.strokeStyle = '#fff'; c.lineWidth = 1.5 * R; c.beginPath(); c.roundRect(px - 7 * R, pz - 5 * R, 14 * R, 10 * R, 2 * R); c.fill(); c.stroke();
      c.fillStyle = '#fff'; c.font = `900 ${7 * R}px system-ui`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('BUS', px, pz + 0.5 * R);
    }, true);
    // goals (job/story/quest targets)
    const goals = [];
    const M = o.missions && o.missions.m; if (M) goals.push(M.kind === 'taxi' ? M.dest : M.stops && M.stops[M.i]);
    const T = o.story && o.story.target(); if (T && T.x !== undefined) goals.push(T);
    for (const g of goals) if (g) icon(g.x, g.z, (px, pz, edge, ang) => {
      if (edge) { arrowHead(px, pz, ang, '#ffd24a'); return; }
      c.fillStyle = '#ffd24a'; c.strokeStyle = '#000'; c.lineWidth = 1.5 * R; c.beginPath(); c.moveTo(px, pz - 8 * R); c.lineTo(px + 6 * R, pz); c.lineTo(px, pz + 8 * R); c.lineTo(px - 6 * R, pz); c.closePath(); c.fill(); c.stroke();
    }, true);
    // the player: arrow pointing where the camera looks (up on the small map)
    const [ppx, ppz] = sx(P.x, P.z);
    c.save(); c.translate(ppx, ppz); c.rotate(this.big ? -P.camYaw + 0 : 0); c.fillStyle = '#4fd1ff'; c.strokeStyle = '#fff'; c.lineWidth = 2 * R;
    c.beginPath(); c.moveTo(0, -9 * R); c.lineTo(6.5 * R, 7 * R); c.lineTo(0, 3.5 * R); c.lineTo(-6.5 * R, 7 * R); c.closePath(); c.fill(); c.stroke(); c.restore();
    c.restore();
    c.strokeStyle = 'rgba(255,255,255,.55)'; c.lineWidth = 2 * R; c.beginPath(); c.arc(s0, s0, s0 - 1.5, 0, 6.3); c.stroke();
    if (!this.big) { // compass N: north is world -z; screen offset of that direction
      const nx = Math.sin(yaw) * -1 * -1, nz = -Math.cos(yaw) * -1 * -1;
      const dx = a * 0 + cc * -1, dy = b * 0 + d * -1, L = Math.hypot(dx, dy);
      c.fillStyle = '#fff'; c.font = `800 ${10 * R}px system-ui`; c.textAlign = 'center'; c.textBaseline = 'middle';
      c.fillText('N', s0 + (dx / L) * (s0 - 9 * R), s0 + (dy / L) * (s0 - 9 * R));
    }
  }
}
