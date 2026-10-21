import ctypes, numpy as np, espeakng_loader
lib = ctypes.CDLL(espeakng_loader.get_library_path())
CB = ctypes.CFUNCTYPE(ctypes.c_int, ctypes.POINTER(ctypes.c_short), ctypes.c_int, ctypes.c_void_p)
lib.espeak_Initialize.restype = ctypes.c_int
SR = lib.espeak_Initialize(1, 0, espeakng_loader.get_data_path().encode(), 0)   # 1 = retrieval (no playback)
_buf = []
def _cb(wav, n, ev):
    if wav and n > 0: _buf.append(np.ctypeslib.as_array(wav, shape=(n,)).copy())
    return 0
_cbref = CB(_cb); lib.espeak_SetSynthCallback(_cbref)
def speak(text, voice='en-us', rate=165, pitch=50, rng_=50):
    _buf.clear()
    lib.espeak_SetVoiceByName(voice.encode())
    lib.espeak_SetParameter(1, int(rate), 0); lib.espeak_SetParameter(3, int(pitch), 0); lib.espeak_SetParameter(4, int(rng_), 0)
    b = text.encode()
    lib.espeak_Synth(b, len(b) + 1, 0, 0, 0, 0, None, None)
    lib.espeak_Synchronize()
    if not _buf: return np.zeros(1, np.float32)
    return np.concatenate(_buf).astype(np.float32) / 32768.0
if __name__ == '__main__':
    import scipy.io.wavfile as w
    a = speak("Hey, watch where you're going, I said I'd be there in ten minutes", 'en-us+m3', 170, 40)
    print(SR, len(a)/SR, np.abs(a).max()); w.write('t.wav', SR, (a*32767).astype(np.int16))
