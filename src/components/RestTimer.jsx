import { useEffect, useRef, useState } from 'react';
import { useWakeLock } from '../hooks/useWakeLock';
import { beepContagem, beepFinal } from '../utils/sound';
import './RestTimer.css';

const PRESETS = [45, 60, 90, 120];

export default function RestTimer({ onClose }) {
  const [duration, setDuration] = useState(60);
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);
  const wakeLock = useWakeLock();

  useEffect(() => {
    if (!running) return undefined;

    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        const next = prev - 1;
        if (next <= 5 && next > 0) {
          beepContagem();
        }
        if (next === 0) {
          beepFinal();
          clearInterval(intervalRef.current);
          setRunning(false);
          wakeLock.release();
          if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
        }
        return Math.max(next, 0);
      });
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [running]); // eslint-disable-line react-hooks/exhaustive-deps

  function iniciar(segundos) {
    setDuration(segundos);
    setSecondsLeft(segundos);
    setRunning(true);
    wakeLock.request();
  }

  function pausar() {
    setRunning(false);
    clearInterval(intervalRef.current);
    wakeLock.release();
  }

  function continuar() {
    if (secondsLeft === 0) return;
    setRunning(true);
    wakeLock.request();
  }

  function reiniciar() {
    pausar();
    setSecondsLeft(duration);
  }

  const progresso = duration > 0 ? (duration - secondsLeft) / duration : 0;
  const quaseAcabando = secondsLeft <= 5 && secondsLeft > 0;

  return (
    <div className="rest-timer-backdrop" role="dialog" aria-label="Cronômetro de descanso">
      <div className="rest-timer-sheet">
        <div className="rest-timer-header">
          <span className="display rest-timer-title">Descanso</span>
          <button className="rest-timer-close" onClick={onClose} aria-label="Fechar cronômetro">
            ✕
          </button>
        </div>

        <div className={`rest-timer-ring ${quaseAcabando ? 'rest-timer-ring--alert' : ''}`}>
          <svg viewBox="0 0 200 200" width="220" height="220">
            <circle cx="100" cy="100" r="88" className="ring-track" />
            <circle
              cx="100"
              cy="100"
              r="88"
              className="ring-progress"
              style={{
                strokeDasharray: 2 * Math.PI * 88,
                strokeDashoffset: 2 * Math.PI * 88 * (1 - progresso),
              }}
            />
          </svg>
          <span className="rest-timer-seconds">{secondsLeft}</span>
        </div>

        {!running && secondsLeft === duration && (
          <div className="rest-timer-presets">
            {PRESETS.map((p) => (
              <button key={p} className="preset-btn" onClick={() => iniciar(p)}>
                {p}s
              </button>
            ))}
          </div>
        )}

        <div className="rest-timer-controls">
          {running ? (
            <button className="btn-accent" onClick={pausar}>Pausar</button>
          ) : secondsLeft > 0 && secondsLeft < duration ? (
            <button className="btn-accent" onClick={continuar}>Continuar</button>
          ) : secondsLeft === 0 ? (
            <button className="btn-accent" onClick={onClose}>Concluído — fechar</button>
          ) : null}
          {secondsLeft !== duration && (
            <button className="btn-ghost" onClick={reiniciar}>Reiniciar</button>
          )}
        </div>

        {!wakeLock.isSupported && (
          <p className="rest-timer-hint">
            Seu navegador não suporta manter a tela ligada automaticamente — ajuste o bloqueio de tela do celular manualmente.
          </p>
        )}
      </div>
    </div>
  );
}
