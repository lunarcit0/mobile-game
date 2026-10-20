// Shared constants + a seeded random generator so the city is identical every load.

export const N = 5;            // playable blocks per side
export const R_EXT = 3;        // extra decorative rings of blocks around the playable area
export const BUILD = 40;       // building footprint (m)
export const SIDEWALK = 5;     // sidewalk width (m)
export const ROAD = 16;        // road width (m)
export const SLAB = BUILD + SIDEWALK * 2;   // 50, block + sidewalks
export const PITCH = SLAB + ROAD;           // 66, block-to-block spacing
export const HALF_CITY = (N * PITCH) / 2;   // 165, center of outer roads
export const LIMIT = HALF_CITY + ROAD / 2 - 1.5;       // invisible wall for the player
export const WRAP = HALF_CITY + R_EXT * PITCH + ROAD / 2; // cars wrap here (hidden in fog)
export const LANE = 2.3;       // lane center offset from road center
export const PARK = 6.2;       // parking strip center offset
export const SIDEWALK_H = 0.15;
export const FLOOR_H = 3.6;
export const STOP_DIST = 13.6; // car front stops this far from intersection center
export const RING_R = 21.2;    // radius of NPC sidewalk ring (building side)

export const blockCenter = (i) => (i - (N - 1) / 2) * PITCH;
export const roadCenter = (k) => (k - N / 2) * PITCH;

export const AVENUES = ['10th Ave', '9th Ave', '8th Ave', '7th Ave', '6th Ave', '5th Ave'];
export const STREETS = ['W 46th St', 'W 45th St', 'W 44th St', 'W 43rd St', 'W 42nd St', 'W 41st St'];

export function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export const rng = mulberry32(20261020);
export const rand = (a, b) => a + (b - a) * rng();
export const pick = (arr) => arr[Math.floor(rng() * arr.length)];
export const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export function moveToward(v, target, maxDelta) {
  if (Math.abs(target - v) <= maxDelta) return target;
  return v + Math.sign(target - v) * maxDelta;
}
export function angleLerp(a, b, t) {
  let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * t;
}
