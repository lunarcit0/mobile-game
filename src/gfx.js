// Small helpers for building low-poly models out of primitives with vertex colors.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const G = {
  sphere: new THREE.SphereGeometry(1, 14, 10),
  box: new THREE.BoxGeometry(1, 1, 1),
  cyl: new THREE.CylinderGeometry(1, 1, 1, 12),
  cone: new THREE.ConeGeometry(1, 1, 12),
  torus: new THREE.TorusGeometry(1, 0.25, 6, 16),
  arc: new THREE.TorusGeometry(1, 0.12, 6, 14, Math.PI),
  hemi: new THREE.SphereGeometry(1, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2),
};

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _v = new THREE.Vector3();
const _s = new THREE.Vector3();

/** Clone a primitive, transform it, and bake a vertex color into it. */
export function part(geo, color, pos = [0, 0, 0], scale = [1, 1, 1], rot = [0, 0, 0]) {
  const g = geo.clone();
  _e.set(rot[0], rot[1], rot[2]);
  _q.setFromEuler(_e);
  _m.compose(_v.set(pos[0], pos[1], pos[2]), _q, _s.set(scale[0], scale[1], scale[2]));
  g.applyMatrix4(_m);
  const c = new THREE.Color(color);
  const n = g.attributes.position.count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return g;
}

/** Like part(), but colors each vertex with colorFn(x, y, z) evaluated on the untransformed primitive. */
export function gradPart(geo, colorFn, pos = [0, 0, 0], scale = [1, 1, 1], rot = [0, 0, 0]) {
  const g = geo.clone();
  const p = g.attributes.position;
  const n = p.count;
  const arr = new Float32Array(n * 3);
  const tmp = new THREE.Color();
  for (let i = 0; i < n; i++) {
    colorFn(tmp, p.getX(i), p.getY(i), p.getZ(i));
    arr[i * 3] = tmp.r; arr[i * 3 + 1] = tmp.g; arr[i * 3 + 2] = tmp.b;
  }
  _e.set(rot[0], rot[1], rot[2]);
  _q.setFromEuler(_e);
  _m.compose(_v.set(pos[0], pos[1], pos[2]), _q, _s.set(scale[0], scale[1], scale[2]));
  g.applyMatrix4(_m);
  g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return g;
}

export function merge(parts) {
  const m = mergeGeometries(parts, false);
  parts.forEach((p) => p.dispose());
  return m;
}

export function vcMaterial(opts = {}) {
  return new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8, metalness: 0, ...opts });
}

export const unlitVC = new THREE.MeshBasicMaterial({ vertexColors: true });
