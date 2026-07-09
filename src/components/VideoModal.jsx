import { extrairIdYoutube } from '../utils/youtube';
import './VideoModal.css';

export default function VideoModal({ titulo, url, youtubeUrl, dicas, onClose }) {
  const youtubeId = extrairIdYoutube(youtubeUrl);

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div className="video-modal-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="video-modal-header">
          <span className="display">{titulo}</span>
          <button className="video-modal-close" onClick={onClose} aria-label="Fechar">✕</button>
        </div>
        {url ? (
          <video
            src={url}
            controls
            autoPlay
            loop
            muted
            playsInline
            className="video-modal-player"
          />
        ) : youtubeId ? (
          <div className="video-modal-youtube-wrap">
            <iframe
              className="video-modal-youtube"
              src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
              title={titulo}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <p className="video-modal-empty">Vídeo demonstrativo ainda não cadastrado — mas as dicas de execução já valem!</p>
        )}

        {dicas?.length > 0 && (
          <div className="video-modal-dicas">
            <span className="video-modal-dicas-titulo">Como executar certo</span>
            <ul>
              {dicas.map((dica, i) => (
                <li key={i}>{dica}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
