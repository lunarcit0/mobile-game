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
WASD / arrows walk or drive · Shift run · Space hop (hold to flutter) / handbrake · mouse look · **E** enter cars, shops and the subway / beg for crumbs · **F** / click throw a poop bomb (auto-aims at nearby rats) · **H** honk · **C** coo · **M** mute · **G** fly (Space/Ctrl up and down, Shift faster) · **Z** run lock · **T** start a taxi or bus job · **P** pause · Esc menu.

Things to do: hop into any parked car, taxi or traffic car and drive it; walk into any shop door or subway entrance; board a train to pop up at another station; beg hot dog vendors for crumbs.
Touch devices get an on-screen joystick and hop button.

## Coins, jobs and the boutique
Earn coins, spend them on clothes at the BOUTIQUE (walk to the mirror, press E). Coins and outfits are saved in the browser.
- **Driving jobs:** get in a taxi (fares, bonus for speed and a clean car) or a city bus (4 stops, score 100 minus infractions: red lights, speeding, collisions, pedestrians, stop signs) and press **T**.
- **Rat bounty:** every rat you beat pays 3 coins. **Burglars:** masked pigeons rob shops; two poop bombs catch one for 25 coins.
- **NYPD pigeons** patrol the sidewalks. Hit pedestrians or wreck street furniture near one and he chases you for a fine.
- **Crashes:** cars dent and smoke, knock over stop signs, lamps, hydrants and bins, and bonk pedestrians.
- **City College** is the campus block east of the start.

## Story pigeons
Pigeons with a yellow `!` over their head give GTA-style missions: Big Tony (a delivery for Rosa), Detective Dolores (catch the burglar), Professor Pidge (lost textbooks at City College), Gina (taxi fares) and Chef Marco (pizza shift). One mission at a time; press E to talk. Any other pigeon will chat if you press E near it. The main goal: wreck the five Rat Corp stashes and beat the Rat Tycoon.

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

## Sound
The city ambience (crowd murmur, traffic passes, horns, sirens, construction) is a pre-rendered 48 s loop embedded in `src/cityloop.js` (base64 MP3) and cross-faded so it never has a seam. `tools/make_city_ambience.py` regenerates it (needs `numpy scipy espeakng-loader` and `ffmpeg`). Everything else (horns near traffic, coos, footsteps, engine, shop and subway ambience) is synthesized live in `src/audio.js`; master volume is `MASTER` at the top of that file.
