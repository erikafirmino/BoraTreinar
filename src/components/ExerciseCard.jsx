import { useState } from 'react';
import LoadStepper from './LoadStepper';
import VideoModal from './VideoModal';
import { resolverUrlVideo } from '../firebase/storage';
import './ExerciseCard.css';

// exercicio: { id, nome, series, repeticoes, videoPath }
// carga: número atual em kg
export default function ExerciseCard({ exercicio, carga, setsConcluidos, onCargaChange, onConcluirSerie }) {
  const [videoAberto, setVideoAberto] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const meta = `${exercicio.series}x${exercicio.repeticoes}`;
  const seriesFeitas = setsConcluidos ?? 0;
  const completo = seriesFeitas >= exercicio.series;

  async function abrirVideo() {
    setVideoAberto(true);
    if (videoUrl || !exercicio.videoPath) return;
    const url = await resolverUrlVideo(exercicio.videoPath);
    setVideoUrl(url);
  }

  return (
    <div className={`exercise-card ${completo ? 'exercise-card--done' : ''}`}>
      <div className="exercise-card-top">
        <div>
          <h3 className="exercise-card-nome">{exercicio.nome}</h3>
          <span className="exercise-card-meta">Meta: {meta}</span>
        </div>
        <button className="exercise-card-video-btn" onClick={abrirVideo}>
          ▶ Vídeo
        </button>
      </div>

      <div className="exercise-card-bottom">
        <LoadStepper value={carga} onChange={onCargaChange} />

        <button
          className="exercise-card-set-btn"
          onClick={onConcluirSerie}
          disabled={completo}
        >
          {completo ? 'Concluído' : `Marcar série (${seriesFeitas}/${exercicio.series})`}
        </button>
      </div>

      {videoAberto && (
        <VideoModal
          titulo={exercicio.nome}
          url={videoUrl}
          onClose={() => setVideoAberto(false)}
        />
      )}
    </div>
  );
}
