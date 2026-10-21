import numpy as np, scipy.signal as ss, scipy.io.wavfile as wf, random
from tts import speak, SR as TSR
SR = 32000; DUR = 48; N = SR * DUR
R = np.random.default_rng(7); random.seed(7)

def rs(a, from_sr, to_sr):
    if from_sr == to_sr: return a
    return ss.resample_poly(a, to_sr, from_sr)
def filt(x, kind, fc, order=2):
    fc = np.clip(fc, 30, SR * 0.45)
    sos = ss.butter(order, fc, btype=kind, fs=SR, output='sos'); return ss.sosfilt(sos, x)
def band(x, lo, hi, order=2):
    sos = ss.butter(order, [lo, hi], btype='band', fs=SR, output='sos'); return ss.sosfilt(sos, x)
def db(x): return 10 ** (x / 20)
def put(buf, sig, start, gl, gr):
    """add stereo sig into circular buffer"""
    n = len(sig); idx = (np.arange(n) + start) % N
    np.add.at(buf[0], idx, sig * gl); np.add.at(buf[1], idx, sig * gr)
def pan_gains(p):  # p in [-1,1]
    a = (p + 1) * np.pi / 4; return np.cos(a), np.sin(a)
def ir(sec, early=True, seed=1, tilt=2.5):
    r = np.random.default_rng(seed); n = int(sec * SR); t = np.arange(n) / SR
    out = []
    for c in range(2):
        x = r.standard_normal(n) * np.exp(-t * 6.9 / sec)
        x = filt(x, 'lowpass', 5000)
        if early:
            for d in r.uniform(0.012, 0.09, 7): x[int(d * SR)] += r.uniform(0.4, 1.0) * (1 if r.random() < .5 else -1)
        out.append(x)
    return np.array(out) / np.sqrt(n / 800)
def reverb(buf, wet, sec=1.8, seed=1):
    h = ir(sec, seed=seed)
    # circular convolution via FFT so the loop stays seamless
    L = N + h.shape[1]; res = np.zeros_like(buf)
    for c in range(2):
        y = ss.fftconvolve(buf[c], h[c])
        y[:N] += y[N:N + h.shape[1] - 1].sum() * 0 if False else 0
        tail = y[N:]; y = y[:N].copy(); y[:len(tail)] += tail
        res[c] = y
    return res * wet

# ------------------------------------------------------------------ crowd walla
PH = ["Hey, watch it, I'm walking here", "I told him twenty bucks and not a penny more", "Where is the subway entrance", "Let's grab some coffee before the meeting",
 "Did you see that, it was crazy", "I'll call you back in five minutes", "Can you believe the price of rent", "Excuse me, is this the way to Times Square",
 "No no no, the other way", "She said she'd meet us at the corner", "That taxi is going to hit somebody", "I can't hear you, it's so loud here",
 "Two hot dogs with everything please", "We are going to be late again", "Look at that pigeon, he's huge", "What time does the show start",
 "I love this city but it never sleeps", "Hold on, I'm getting another call", "Seven dollars for a coffee, are you kidding me", "Come on, we're gonna miss the train",
 "Honestly I don't even know anymore", "Tell her I said hello", "Move it, buddy, some of us have places to be", "It's right around the corner, trust me",
 "Oh my God, did you hear what happened", "Yeah, I'll be there at noon", "Let's take a cab, it's too far to walk", "I just need five more minutes",
 "That's what I've been saying all week", "Is anybody sitting here", "Can I get a slice of pepperoni", "Wait for me, wait for me", "You gotta try the pizza on forty second",
 "The light is red, don't cross", "How much for the pretzel", "I'm so tired of this weather", "Happy birthday to you, buddy", "Did you bring the tickets",
 "It's gonna rain later, I can feel it", "We should do this more often", "Hello, yes, I'm outside the building now", "Keep the change, thanks a lot", "Look both ways before you cross"]
VOICES = ['en-us', 'en-gb', 'en-gb-x-rp', 'en-us-nyc', 'en-029']
VARS = ['', '+m1', '+m2', '+m3', '+m4', '+m5', '+m6', '+m7', '+f1', '+f2', '+f3', '+f4', '+f5']
clips = []
for i in range(110):
    v = random.choice(VOICES) + random.choice(VARS)
    t = random.choice(PH)
    if random.random() < .5: t = t + ". " + random.choice(PH)
    try: a = speak(t, v, random.randint(135, 200), random.randint(22, 72), random.randint(25, 80))
    except Exception: continue
    if len(a) < TSR: continue
    a = rs(a, TSR, SR)
    f = R.uniform(0.88, 1.18); a = ss.resample(a, int(len(a) / f)) if f != 1 else a   # cheap pitch/speed variety
    a = a / (np.abs(a).max() + 1e-9)
    # light "telephone" EQ so the sibilants of espeak don't hiss
    a = filt(a, 'lowpass', 4200); a = filt(a, 'highpass', 140)
    clips.append(a)
print('clips', len(clips))
crowd = np.zeros((2, N))
total = 0; target = DUR * 24      # ~24 voices talking at any moment
while total < target:
    a = random.choice(clips)
    dist = R.lognormal(1.9, 0.7)                       # metres
    g = 1.0 / (1 + dist * 0.55)
    fc = np.clip(5200 / (1 + dist * 0.28), 700, 5200)
    s = filt(a, 'lowpass', fc, 2) * g
    # slow volume wobble: talkers turn their heads
    s *= 1 + 0.25 * np.sin(np.linspace(0, R.uniform(2, 9), len(s)) + R.uniform(0, 6))
    gl, gr = pan_gains(R.uniform(-1, 1))
    put(crowd, s, int(R.integers(0, N)), gl, gr)
    total += len(a) / SR
crowd_wet = reverb(crowd, 0.55, 1.4, seed=3)
crowd = crowd * 0.75 + crowd_wet
crowd = np.array([filt(crowd[0], 'highpass', 120), filt(crowd[1], 'highpass', 120)])
crowd /= np.sqrt((crowd ** 2).mean())

# ------------------------------------------------------------------ traffic
traffic = np.zeros((2, N))
# distant avenue wash with slow swells
def swell(seed, rate):
    r = np.random.default_rng(seed); k = np.cumsum(r.standard_normal(int(N / 3000) + 8)); k = (k - k.min()) / (np.ptp(k) + 1e-9)
    return np.interp(np.arange(N), np.linspace(0, N, len(k)), k)
for c in range(2):
    wash = band(R.standard_normal(N), 70, 700, 2) * (0.5 + swell(11 + c, 1) * 1.1)
    rumble = filt(np.cumsum(R.standard_normal(N)) * 0.0, 'lowpass', 100)  # placeholder (kept zero; brown noise drifts)
    traffic[c] += wash
traffic /= np.sqrt((traffic ** 2).mean()); traffic *= 0.45

def car_pass(kind):
    v = R.uniform(7, 17) * (1 if kind != 'bus' else 0.7)          # m/s
    d = R.uniform(5, 26)                                          # closest approach (m)
    T = min(9.0, 2 * 60 / v)                                       # window of +-60 m
    n = int(T * SR); t = np.arange(n) / SR - T / 2
    dirn = 1 if R.random() < .5 else -1
    x = dirn * v * t; r = np.sqrt(x * x + d * d)
    vr = dirn * v * x / r * dirn * 0 + (v * x / r) * dirn * dirn    # radial speed, + = receding
    vr = (v * x / r) * dirn
    dop = 343.0 / (343.0 + vr)
    f0 = {'car': R.uniform(28, 48), 'taxi': R.uniform(28, 44), 'bus': R.uniform(17, 24), 'truck': R.uniform(15, 22)}[kind] * (0.75 + 0.5 * min(1, v / 17))
    ph = np.cumsum(2 * np.pi * f0 * dop / SR)
    eng = np.zeros(n)
    nh = 14
    for k in range(1, nh + 1):
        eng += np.sin(k * ph + R.uniform(0, 6.28)) * (1.0 / k ** 1.1) * (1 + 0.35 * np.sin(2 * np.pi * (f0 / 2) * t * dop + k))
    eng = filt(eng, 'lowpass', 520 + 40 * v, 2)
    tire = band(R.standard_normal(n), 500, 2400, 2) * (v / 17) ** 2.2
    s = eng * (0.9 if kind in ('bus', 'truck') else 0.55) + tire * 0.6
    amp = 1.0 / (r / 6.0 + 0.4)
    s *= amp
    # distance darkening
    p = np.clip(x / (r + 1e-6) * (1 if True else 0), -1, 1)
    gl, gr = pan_gains(np.clip(p * 0.9, -0.95, 0.95))
    return s * 0.06, gl, gr, n
cars = 0
t_cur = 0.0
while t_cur < DUR:
    kind = random.choices(['car', 'taxi', 'bus', 'truck'], [3, 5, 0.5, 0.35])[0]
    s, gl, gr, n = car_pass(kind)
    put(traffic, s, int((t_cur - n / SR / 2) * SR) % N, gl, gr)
    t_cur += R.uniform(0.35, 1.8); cars += 1
print('car passes', cars)

# ------------------------------------------------------------------ events: horns, siren, jackhammer, air brake
events = np.zeros((2, N))
def horn(pair, dur, dist, start):
    n = int(dur * SR); t = np.arange(n) / SR
    s = np.zeros(n)
    for f in pair:
        for k in range(1, 12, 2): s += np.sin(2 * np.pi * f * k * t + R.uniform(0, 6)) / k
    env = np.minimum(1, t / 0.012) * np.minimum(1, (dur - t) / 0.05)
    s *= env
    s = filt(s, 'lowpass', np.clip(3500 / (1 + dist / 25), 700, 3500))
    gl, gr = pan_gains(R.uniform(-.9, .9))
    put(events, s * 0.5 / (1 + dist / 8), start, gl, gr)
pairs = {'taxi': (466, 587), 'sedan': (415, 523), 'suv': (370, 466), 'van': (330, 415), 'bus': (250, 311), 'truck': (174, 220)}
tt = R.uniform(0.5, 3)
while tt < DUR - 1:
    kind = random.choices(list(pairs), [6, 3, 2, 1, 1, 0.6])[0]; dist = R.uniform(18, 110)
    r = R.random(); reps = 3 if r < .12 else 2 if r < .4 else 1
    for i in range(reps):
        horn(pairs[kind], 0.16 if reps == 3 else 0.2 if reps == 2 else R.uniform(0.35, 1.0), dist, int((tt + i * 0.34) * SR))
    tt += R.uniform(1.6, 5.5)
def siren(start, dur, kind, dist):
    n = int(dur * SR); t = np.arange(n) / SR
    if kind == 'wail': f = 880 + 420 * np.sin(2 * np.pi * t / 3.2 - 1)
    else: f = 700 + 500 * (np.mod(t * 4.0, 1.0))
    # Doppler glide: approaching then receding
    dop = 1 + 0.07 * np.tanh((t - dur / 2) * -1.2) * -1
    ph = np.cumsum(2 * np.pi * f * (1 + 0.06 * np.tanh((dur / 2 - t) * 1.0)) / SR)
    s = sum(np.sin(k * ph) / k for k in range(1, 8))
    s = filt(s, 'lowpass', 2400)
    env = np.sin(np.pi * t / dur) ** 1.5
    gl, gr = pan_gains(np.linspace(-0.8, 0.8, n)[0])  # fixed pan; stereo sweep below
    sl = s * env * np.linspace(1, 0.2, n); sr_ = s * env * np.linspace(0.2, 1, n)
    idx = (np.arange(n) + start) % N
    k = 0.18 / (1 + dist / 40)
    np.add.at(events[0], idx, sl * k); np.add.at(events[1], idx, sr_ * k)
siren(int(4 * SR), 9.5, 'wail', 90); siren(int(29 * SR), 8, 'yelp', 120)
def jackhammer(start, dur, dist):
    n = int(dur * SR); s = np.zeros(n)
    t = 0.0
    while t < dur:
        i = int(t * SR); L = int(0.05 * SR)
        if i + L < n:
            burst = band(R.standard_normal(L), 380, 2200, 2) * np.exp(-np.arange(L) / (0.012 * SR)); s[i:i + L] += burst
            s[i:i + int(0.02 * SR)] += np.sin(2 * np.pi * 95 * np.arange(int(0.02 * SR)) / SR) * 0.6
        t += 1 / 14.0 * R.uniform(0.92, 1.08)
    s = filt(s, 'lowpass', 2400)
    s *= np.minimum(1, np.arange(n) / (0.2 * SR)) * np.minimum(1, (n - np.arange(n)) / (0.4 * SR))
    gl, gr = pan_gains(R.uniform(-.7, .7)); put(events, s * 0.7 / (1 + dist / 10), start, gl, gr)
jackhammer(int(16 * SR), 6.0, 70); jackhammer(int(40 * SR), 4.0, 85)
def brake(start, dist):
    n = int(0.9 * SR); t = np.arange(n) / SR
    s = filt(R.standard_normal(n), 'highpass', 3500) * np.exp(-t / 0.28) * np.minimum(1, t / 0.02)
    gl, gr = pan_gains(R.uniform(-.8, .8)); put(events, s * 0.6 / (1 + dist / 8), start, gl, gr)
brake(int(9 * SR), 22); brake(int(34 * SR), 30)
ev_wet = reverb(events, 0.8, 1.9, seed=9)
events = events * 0.6 + ev_wet

# ------------------------------------------------------------------ mix
def rms(x): return np.sqrt((x ** 2).mean())
def nrm(x, target): return x * (target / rms(x))
mix = nrm(crowd, 0.050) + nrm(traffic, 0.034) + nrm(events, 0.020)
mix = np.array([filt(mix[0], 'highpass', 45), filt(mix[1], 'highpass', 45)])
mix *= db(-29) / rms(mix)                      # quiet bed: about -29 dBFS RMS
print('peak before limit', np.abs(mix).max())
mix = np.tanh(mix / 0.5) * 0.5                 # soft-limit horn peaks
mix *= min(1.0, 0.6 / np.abs(mix).max())
wf.write('city.wav', SR, (mix.T * 32767).astype(np.int16))
print('done', mix.shape, 'rms dB', 20 * np.log10(rms(mix)))
