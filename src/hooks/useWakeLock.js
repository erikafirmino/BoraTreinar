import { useCallback, useEffect, useRef, useState } from 'react';

// Mantém a tela ligada usando a Screen Wake Lock API.
// Reaquire automaticamente o lock se o usuário trocar de aba e voltar
// (o navegador libera o wake lock quando a página perde visibilidade).
export function useWakeLock() {
  const [isSupported] = useState('wakeLock' in navigator);
  const [isActive, setIsActive] = useState(false);
  const sentinelRef = useRef(null);
  const wantsLockRef = useRef(false);

  const request = useCallback(async () => {
    if (!isSupported) return;
    wantsLockRef.current = true;
    try {
      const sentinel = await navigator.wakeLock.request('screen');
      sentinelRef.current = sentinel;
      setIsActive(true);
      sentinel.addEventListener('release', () => {
        setIsActive(false);
      });
    } catch (err) {
      // Pode falhar se a aba não estiver em foco; sem problema, tentamos de novo
      // quando a visibilidade mudar.
      setIsActive(false);
    }
  }, [isSupported]);

  const release = useCallback(async () => {
    wantsLockRef.current = false;
    if (sentinelRef.current) {
      await sentinelRef.current.release();
      sentinelRef.current = null;
    }
    setIsActive(false);
  }, []);

  useEffect(() => {
    function handleVisibility() {
      if (document.visibilityState === 'visible' && wantsLockRef.current) {
        request();
      }
    }
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [request]);

  useEffect(() => () => release(), [release]);

  return { isSupported, isActive, request, release };
}
