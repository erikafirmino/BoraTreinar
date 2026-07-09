import './VideoModal.css';

export default function VideoModal({ titulo, url, onClose }) {
  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div className="video-modal-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="video-modal-header">
          <span className="display">{titulo}</span>
          <button className="video-modal-close" onClick={onClose} aria-label="Fechar vídeo">✕</button>
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
        ) : (
          <p className="video-modal-empty">Nenhum vídeo cadastrado para este exercício ainda.</p>
        )}
      </div>
    </div>
  );
}
