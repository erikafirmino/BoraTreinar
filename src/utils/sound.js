let audioCtx;

function getContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Bipe curto. `high` = true para o bipe final (mais agudo), usado no "vai".
export function beep({ durationMs = 120, frequency = 660, high = false } = {}) {
  try {
    const ctx = getContext();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = high ? frequency * 1.6 : frequency;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.35, ctx.currentTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + durationMs / 1000);
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.start();
    oscillator.stop(ctx.currentTime + durationMs / 1000 + 0.02);
  } catch (err) {
    // Ambientes sem suporte a Web Audio simplesmente não tocam som.
  }
}

export function beepContagem() {
  beep({ frequency: 520, durationMs: 100 });
}

export function beepFinal() {
  beep({ frequency: 720, durationMs: 260, high: true });
}
