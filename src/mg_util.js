import { INK, clamp, lerp, rr, paint, ell, circ, poly, txt } from './mg_core.js';

export const CUST_LOOKS = [
  { body: '#8a93a3', hat: 'none', glasses: false, scarf: null }, { body: '#c9a98a', hat: 'beanie', glasses: false, scarf: '#3a86d6' },
  { body: '#6b707c', hat: 'top', glasses: true, scarf: null }, { body: '#d9dde3', hat: 'cap', glasses: false, scarf: null },
  { body: '#b0745a', hat: 'cowboy', glasses: false, scarf: '#e0443a' }, { body: '#7f8fa8', hat: 'crown', glasses: true, scarf: null },
  { body: '#a7b0a0', hat: 'grad', glasses: true, scarf: null }, { body: '#e6c9d4', hat: 'none', glasses: false, scarf: '#8a4fd0' },
];
export const custLook = (i) => CUST_LOOKS[((i % CUST_LOOKS.length) + CUST_LOOKS.length) % CUST_LOOKS.length];
export function speech(c, x, y, w, h, tailX = null) {
  rr(c, x, y, w, h, 16); paint(c, '#fffdf4', 4);
  if (tailX != null) { c.beginPath(); c.moveTo(tailX - 10, y + h - 1); c.lineTo(tailX, y + h + 14); c.lineTo(tailX + 10, y + h - 1); c.fillStyle = '#fffdf4'; c.fill(); c.strokeStyle = INK; c.lineWidth = 4; c.lineJoin = 'round'; c.beginPath(); c.moveTo(tailX - 10, y + h); c.lineTo(tailX, y + h + 14); c.lineTo(tailX + 10, y + h); c.stroke(); c.fillStyle = '#fffdf4'; c.fillRect(tailX - 9, y + h - 3, 18, 5); }
}
export function bar(c, x, y, w, h, k, col, bg = '#fff') {
  rr(c, x, y, w, h, h / 2); paint(c, bg, 2.5);
  if (k > 0.01) { rr(c, x + 2, y + 2, (w - 4) * clamp(k, 0, 1), h - 4, (h - 4) / 2); c.fillStyle = col; c.fill(); }
}
