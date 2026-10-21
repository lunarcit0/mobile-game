// The boutique: a catalog of clothes (bought with coins) and the shopping panel.
// A "look" is {body, hat, face, neck, back}, each null or {type, color}; Pigeon.setLook() draws it.

export const SLOTS = [
  ['hat', 'Hats'], ['face', 'Faces'], ['neck', 'Neck'], ['body', 'Outfits'], ['back', 'Back'],
];

const I = (id, slot, name, price, type, color) => ({ id: `${slot}:${id}`, slot, name, price, value: type ? { type, color } : null });

export const ITEMS = [
  I('none', 'hat', 'No hat', 0, null),
  I('beanie-red', 'hat', 'Red beanie', 30, 'beanie', 0xd8433a), I('beanie-blue', 'hat', 'Blue beanie', 30, 'beanie', 0x3a86d6),
  I('cap-red', 'hat', 'Baseball cap', 30, 'cap', 0xd8433a), I('cap-green', 'hat', 'Green cap', 30, 'cap', 0x2fa36b),
  I('party', 'hat', 'Party hat', 25, 'party', 0xe86fa5), I('chef', 'hat', 'Chef hat', 40, 'chef', 0xffffff),
  I('headphones', 'hat', 'Headphones', 45, 'headphones', 0xd8433a), I('top', 'hat', 'Top hat', 60, 'top', 0xc0392b),
  I('cowboy', 'hat', 'Cowboy hat', 70, 'cowboy', 0x6b4a2f), I('grad', 'hat', 'Graduation cap', 80, 'grad', 0x151515),
  I('crown', 'hat', 'Golden crown', 150, 'crown', 0xf2c230),

  I('none', 'face', 'No glasses', 0, null),
  I('shades', 'face', 'Cool shades', 35, 'shades'), I('heart', 'face', 'Heart shades', 45, 'heart'), I('monocle', 'face', 'Monocle', 40, 'monocle'),

  I('none', 'neck', 'Nothing', 0, null),
  I('bandana-red', 'neck', 'Red bandana', 0, 'bandana', 0xd8312a), I('bandana-blue', 'neck', 'Blue bandana', 15, 'bandana', 0x2563a8),
  I('scarf-red', 'neck', 'Red scarf', 25, 'scarf', 0xd8433a), I('scarf-yellow', 'neck', 'Yellow scarf', 25, 'scarf', 0xe2a62b),
  I('scarf-purple', 'neck', 'Purple scarf', 25, 'scarf', 0x7e57c2), I('bowtie', 'neck', 'Bow tie', 35, 'bowtie', 0xc0392b),
  I('chain', 'neck', 'Gold chain', 90, 'chain'),

  I('none', 'body', 'Just feathers', 0, null),
  I('tee-red', 'body', 'Red tee', 25, 'tee', 0xd8433a), I('hoodie-red', 'body', 'Red hoodie', 50, 'hoodie', 0xd8433a),
  I('hoodie-blue', 'body', 'Blue hoodie', 50, 'hoodie', 0x3a86d6), I('hoodie-purple', 'body', 'Purple hoodie', 50, 'hoodie', 0x7e57c2),
  I('aloha', 'body', 'Aloha shirt', 45, 'aloha', 0x2fa3a0), I('jersey', 'body', 'NY jersey', 60, 'jersey', 0x1f4e9c),
  I('suit', 'body', 'Business suit', 120, 'suit', 0x1c2a44), I('tux', 'body', 'Tuxedo', 150, 'tux'),

  I('none', 'back', 'Nothing', 0, null),
  I('backpack', 'back', 'Backpack', 40, 'backpack', 0x3a86d6), I('cape', 'back', 'Hero cape', 100, 'cape', 0xd8312a),
];

export const ITEM_BY_ID = Object.fromEntries(ITEMS.map((i) => [i.id, i]));

/** Equipped item id per slot, derived from a look (so saved looks keep working if prices change). */
export function equippedIds(look) {
  const out = {};
  for (const [slot] of SLOTS) {
    const cur = look[slot];
    const match = ITEMS.find((i) => i.slot === slot && ((!cur && !i.value) || (cur && i.value && i.value.type === cur.type && (i.value.color ?? 0) === (cur.color ?? 0))));
    out[slot] = match ? match.id : `${slot}:none`;
  }
  return out;
}

const CSS = `
#wd { position:fixed; right:0; top:0; bottom:0; width:min(400px,100vw); z-index:7; display:none; flex-direction:column; color:#f4efe4;
  background:linear-gradient(180deg, rgba(48,20,62,.94), rgba(26,14,36,.96)); backdrop-filter: blur(8px); box-shadow:-8px 0 30px rgba(0,0,0,.4); font-family: inherit; }
#wd.on { display:flex; }
#wd header { display:flex; align-items:center; justify-content:space-between; padding:14px 16px 8px; }
#wd h2 { margin:0; font-size:22px; letter-spacing:.02em; }
#wd h2 small { display:block; font-size:12px; font-weight:500; opacity:.7; letter-spacing:.04em; }
#wd .wcoins { font-weight:800; background:rgba(255,200,61,.15); border:1px solid rgba(255,200,61,.5); padding:5px 12px; border-radius:999px; color:#ffd24a; }
#wd .x { background:none; border:0; color:#fff; font-size:26px; cursor:pointer; padding:0 6px; }
#wd nav { display:flex; gap:6px; padding:4px 12px 8px; flex-wrap:wrap; }
#wd nav button { font:inherit; font-weight:700; font-size:13px; padding:6px 12px; border-radius:999px; border:1px solid rgba(255,255,255,.25); background:rgba(255,255,255,.07); color:#f4efe4; cursor:pointer; }
#wd nav button.on { background:#ff7ad9; color:#2a0a24; border-color:#ff7ad9; }
#wd .grid { flex:1; overflow:auto; padding:6px 12px 14px; display:grid; grid-template-columns:repeat(2,1fr); gap:10px; align-content:start; }
#wd .card { border:1px solid rgba(255,255,255,.18); border-radius:12px; padding:10px; background:rgba(255,255,255,.06); display:flex; flex-direction:column; gap:6px; }
#wd .card.eq { border-color:#7dffb0; box-shadow:0 0 0 1px #7dffb0 inset; }
#wd .sw { height:34px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:20px; background:rgba(255,255,255,.08); }
#wd .nm { font-weight:700; font-size:14px; }
#wd .btn { font:inherit; font-weight:800; font-size:13px; padding:6px 8px; border-radius:8px; border:0; cursor:pointer; background:#ffc83d; color:#241a00; }
#wd .btn.own { background:#7dffb0; color:#0b2a17; } #wd .btn.on { background:rgba(255,255,255,.2); color:#fff; cursor:default; } #wd .btn.no { background:rgba(255,255,255,.12); color:#aaa; cursor:not-allowed; }
#wd footer { padding:10px 14px 14px; font-size:12px; opacity:.75; }
`;

export class Wardrobe {
  /** opts: { save, getCoins(), spend(n), onLook(look), sfx(name), toast(msg) } */
  constructor(opts) {
    this.o = opts; this.tab = 'hat'; this.open_ = false;
    if (!document.getElementById('wd-style')) { const st = document.createElement('style'); st.id = 'wd-style'; st.textContent = CSS; document.head.appendChild(st); }
    this.el = document.createElement('div'); this.el.id = 'wd';
    this.el.innerHTML = `<header><h2>Boutique<small>Try things on, they look great on you</small></h2><div class="wcoins"></div><button class="x" aria-label="Close">&times;</button></header><nav></nav><div class="grid"></div><footer>Earn coins with jobs around the city: pizza shifts, taxi fares, the subway arcade and more.</footer>`;
    document.body.appendChild(this.el);
    this.el.querySelector('.x').addEventListener('click', () => this.close());
    this.nav = this.el.querySelector('nav'); this.grid = this.el.querySelector('.grid'); this.coinsEl = this.el.querySelector('.wcoins');
    this.nav.addEventListener('click', (e) => { const b = e.target.closest('button'); if (b) { this.tab = b.dataset.slot; this.render(); } });
    this.grid.addEventListener('click', (e) => {
      const b = e.target.closest('.btn'); if (!b || b.classList.contains('no') || b.classList.contains('on')) return;
      this.pick(b.dataset.id);
    });
  }

  get active() { return this.open_; }

  open() { this.open_ = true; this.el.classList.add('on'); this.render(); }
  close() { if (!this.open_) return; this.open_ = false; this.el.classList.remove('on'); this.o.onClose?.(); }

  pick(id) {
    const it = ITEM_BY_ID[id], d = this.o.save.data;
    if (!d.owned.includes(id) && it.price > 0) {
      if (this.o.getCoins() < it.price) { this.o.sfx?.('bad'); return; }
      this.o.spend(it.price); d.owned.push(id); this.o.sfx?.('coin'); this.o.toast?.(`Bought ${it.name}!`);
    }
    d.look[it.slot] = it.value ? { ...it.value } : null;
    if (!d.look[it.slot]) delete d.look[it.slot];
    this.o.save.write();
    this.o.onLook(d.look);
    this.o.sfx?.('good');
    this.render();
  }

  render() {
    const d = this.o.save.data, eq = equippedIds(d.look), coins = this.o.getCoins();
    this.coinsEl.textContent = `${coins} coins`;
    this.nav.innerHTML = SLOTS.map(([s, n]) => `<button data-slot="${s}" class="${s === this.tab ? 'on' : ''}">${n}</button>`).join('');
    const icon = { hat: '\u{1F3A9}', face: '\u{1F576}', neck: '\u{1F9E3}', body: '\u{1F454}', back: '\u{1F392}' }[this.tab];
    this.grid.innerHTML = ITEMS.filter((i) => i.slot === this.tab).map((i) => {
      const owned = i.price === 0 || d.owned.includes(i.id), on = eq[i.slot] === i.id;
      const col = i.value && i.value.color != null ? '#' + i.value.color.toString(16).padStart(6, '0') : 'transparent';
      const label = on ? 'Wearing' : owned ? 'Wear' : `Buy  ${i.price}`;
      const cls = on ? 'on' : owned ? 'own' : coins >= i.price ? '' : 'no';
      return `<div class="card ${on ? 'eq' : ''}"><div class="sw" style="${col !== 'transparent' ? `box-shadow:0 0 0 3px ${col} inset` : ''}">${i.value ? icon : '∅'}</div><div class="nm">${i.name}</div><button class="btn ${cls}" data-id="${i.id}">${label}</button></div>`;
    }).join('');
  }
}
