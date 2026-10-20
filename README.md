# Pigeon City

A 3D browser game: you are a pigeon in a Midtown-Manhattan-style city. Walk the avenues, dodge taxis,
and watch pigeons in suits and streetwear stroll past. Built with Three.js; no external assets (every
texture and model is generated in code).

## Put it on your webpage
1. Upload `pigeon-city.html` (single self-contained file, ~550 KB) next to your page.
2. Add this where you want the game:

```html
<iframe src="pigeon-city.html" title="Pigeon City" allow="fullscreen; autoplay"
        style="width:100%; aspect-ratio:16/9; border:0; border-radius:14px"></iframe>
```
See `host-example.html` for a complete page.

## Controls
WASD / arrows walk or drive · Shift run · Space hop (hold to flutter) / handbrake · mouse look · **E** enter cars, shops and the subway / beg for crumbs · **F** / click throw a poop bomb (auto-aims at nearby rats) · **H** honk · **C** coo · **M** mute · Esc menu.

Things to do: hop into any parked car, taxi or traffic car and drive it; walk into any shop door or subway entrance; board a train to pop up at another station; beg hot dog vendors for crumbs.
Touch devices get an on-screen joystick and hop button.

## Edit and rebuild
```
npm install
npx esbuild src/main.js --bundle --minify --format=iife --outfile=dist/game.js
```
Then open `index.html` through any static server (e.g. `python3 -m http.server`).

- `src/config.js`   city size, block/road dimensions
- `src/city.js`     buildings, shops, subway entrances, food trucks, street props
- `src/traffic.js`  cars, buses, taxis, traffic lights
- `src/npcs.js`     NPC pigeons
- `src/pigeon.js`   pigeon model, outfits, animation
- `src/player.js`   controls, collisions, camera


## Rats
Rats roam the sidewalks and crawl out of subway entrances. A rat that sees you (within ~26 m, no building in the way) chases and bites. They run faster than you walk but slower than you sprint; hop to dodge a bite. Two poop bombs kill a rat, a car runs them over, and every kill drops crumbs. If your health bar empties you wake up at the start and lose half your crumbs. Tunables are at the top of `src/rats.js`.
