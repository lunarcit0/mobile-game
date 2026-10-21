// "HELP WANTED" billboard sprite shown above every place you can work (J to start).
import * as THREE from 'three';

let tex = null;
function texture() {
  if (tex) return tex;
  const c = document.createElement('canvas'); c.width = 512; c.height = 160;
  const g = c.getContext('2d');
  g.fillStyle = '#ffd23a'; g.beginPath(); g.roundRect(6, 6, 500, 148, 22); g.fill();
  g.lineWidth = 8; g.strokeStyle = '#c0261e'; g.stroke();
  g.fillStyle = '#c0261e'; g.font = '900 64px system-ui, Arial'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText('HELP WANTED', 256, 66);
  g.fillStyle = '#3a2a00'; g.font = '800 30px system-ui, Arial'; g.fillText('press J to work', 256, 123);
  tex = new THREE.CanvasTexture(c); tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function makeHelpSign(scale = 2.6) {
  const m = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture(), transparent: true, fog: false }));
  m.scale.set(scale, scale * 0.3125, 1);
  m.userData.bob = Math.random() * 6;
  return m;
}

export function bobSigns(list, t) { for (const s of list) s.position.y = s.userData.y0 + Math.sin(t * 2 + s.userData.bob) * 0.08; }
