import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import ExerciseCard from '../components/ExerciseCard';
import RestTimer from '../components/RestTimer';
import {
  fetchTreinos,
  fetchHistoricoUsuario,
  extrairUltimasCargas,
  salvarSessaoHistorico,
} from '../firebase/firestore';
import './TreinoAtivo.css';

// Agrupa exercícios por `grupo` (ex.: "Peitorais", "Costas") preservando a ordem
// de primeira aparição, igual à organização do caderno. Exercícios sem grupo
// caem num bucket sem título.
function agruparPorGrupo(exercicios) {
  const mapa = new Map();
  exercicios.forEach((ex) => {
    const chave = ex.grupo || '';
    if (!mapa.has(chave)) mapa.set(chave, []);
    mapa.get(chave).push(ex);
  });
  return Array.from(mapa.entries());
}

export default function TreinoAtivo() {
  const { treinoId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [treino, setTreino] = useState(null);
  const [cargas, setCargas] = useState({});
  const [sets, setSets] = useState({});
  const [timerAberto, setTimerAberto] = useState(false);
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    async function carregar() {
      const [todosTreinos, historico] = await Promise.all([
        fetchTreinos(),
        fetchHistoricoUsuario(user.uid),
      ]);
      const atual = todosTreinos?.find((t) => t.id === treinoId);
      setTreino(atual || null);

      const ultimasCargas = extrairUltimasCargas(historico, treinoId);
      const cargasIniciais = {};
      atual?.exercicios.forEach((ex) => {
        cargasIniciais[ex.id] = ultimasCargas[ex.id] ?? 0;
      });
      setCargas(cargasIniciais);
      setCarregando(false);
    }
    carregar();
  }, [treinoId, user.uid]);

  function handleCargaChange(exercicioId, novoValor) {
    setCargas((prev) => ({ ...prev, [exercicioId]: novoValor }));
  }

  function handleConcluirSerie(exercicio) {
    setSets((prev) => {
      const atual = prev[exercicio.id] ?? 0;
      return { ...prev, [exercicio.id]: Math.min(atual + 1, exercicio.series) };
    });
    setTimerAberto(true);
  }

  async function handleFinalizarTreino() {
    setSalvando(true);
    try {
      await salvarSessaoHistorico({ uid: user.uid, treinoId, cargas });
      navigate('/');
    } finally {
      setSalvando(false);
    }
  }

  if (carregando) {
    return <div className="spinner-wrap">Carregando treino…</div>;
  }

  if (!treino) {
    return (
      <div className="page">
        <p>Treino não encontrado.</p>
        <button className="btn-ghost" onClick={() => navigate('/')}>Voltar</button>
      </div>
    );
  }

  const totalSeries = treino.exercicios.reduce((acc, ex) => acc + ex.series, 0);
  const seriesFeitas = Object.values(sets).reduce((acc, n) => acc + n, 0);

  return (
    <div className="page">
      <div className="top-bar">
        <div>
          <span className="dashboard-saudacao">{treino.foco}</span>
          <h1>{treino.nome}</h1>
        </div>
        <button className="btn-ghost treino-ativo-voltar" onClick={() => navigate('/')}>Voltar</button>
      </div>

      <div className="treino-ativo-progresso">
        <div className="treino-ativo-progresso-barra">
          <div
            className="treino-ativo-progresso-fill"
            style={{ width: `${totalSeries ? (seriesFeitas / totalSeries) * 100 : 0}%` }}
          />
        </div>
        <span>{seriesFeitas}/{totalSeries} séries</span>
      </div>

      <div className="treino-ativo-lista">
        {agruparPorGrupo(treino.exercicios).map(([grupo, exerciciosDoGrupo]) => (
          <div key={grupo} className="treino-ativo-grupo">
            {grupo && <span className="treino-ativo-grupo-titulo">{grupo}</span>}
            {exerciciosDoGrupo.map((exercicio) => (
              <ExerciseCard
                key={exercicio.id}
                exercicio={exercicio}
                carga={cargas[exercicio.id] ?? 0}
                setsConcluidos={sets[exercicio.id]}
                onCargaChange={(v) => handleCargaChange(exercicio.id, v)}
                onConcluirSerie={() => handleConcluirSerie(exercicio)}
              />
            ))}
          </div>
        ))}
      </div>

      <button className="btn-accent treino-ativo-finalizar" onClick={handleFinalizarTreino} disabled={salvando}>
        {salvando ? 'Salvando…' : 'Finalizar treino'}
      </button>

      {timerAberto && <RestTimer onClose={() => setTimerAberto(false)} />}
    </div>
  );
}
