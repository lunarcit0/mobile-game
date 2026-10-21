// Tiny persistence layer: coins, owned clothes, current look and stats live in localStorage (when available).
const KEY = 'pigeonCity.save.v1';

export const DEFAULT_LOOK = { neck: { type: 'bandana', color: 0xd8312a } };

const fresh = () => ({ coins: 0, owned: ['neck:bandana-red'], look: JSON.parse(JSON.stringify(DEFAULT_LOOK)), stats: { jobs: 0, rats: 0, fares: 0, bonked: 0 } });

export const save = {
  data: fresh(),
  load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) { const d = JSON.parse(raw); this.data = { ...fresh(), ...d, stats: { ...fresh().stats, ...(d.stats || {}) } }; }
    } catch (e) { /* private mode etc: just run without saving */ }
    return this.data;
  },
  write() { try { localStorage.setItem(KEY, JSON.stringify(this.data)); } catch (e) { /* ignore */ } },
  reset() { this.data = fresh(); this.write(); },
};
