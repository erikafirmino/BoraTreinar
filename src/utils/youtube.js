// Aceita links do tipo:
// https://www.youtube.com/watch?v=XXXXXXXXXXX
// https://youtu.be/XXXXXXXXXXX
// https://www.youtube.com/shorts/XXXXXXXXXXX
// e devolve só o ID do vídeo, ou null se não reconhecer o formato.
export function extrairIdYoutube(url) {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes('youtu.be')) {
      return parsed.pathname.slice(1) || null;
    }
    if (parsed.hostname.includes('youtube.com')) {
      if (parsed.pathname.startsWith('/shorts/')) {
        return parsed.pathname.split('/shorts/')[1] || null;
      }
      return parsed.searchParams.get('v');
    }
  } catch {
    // não é uma URL válida
  }
  return null;
}
