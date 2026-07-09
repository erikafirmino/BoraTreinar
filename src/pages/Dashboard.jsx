import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { seedTreinosSeVazio } from '../firebase/firestore';
import './Dashboard.css';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [treinos, setTreinos] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    seedTreinosSeVazio()
      .then(setTreinos)
      .finally(() => setCarregando(false));
  }, []);

  if (carregando) {
    return <div className="spinner-wrap">Carregando treinos…</div>;
  }

  return (
    <div className="page">
      <div className="top-bar">
        <div>
          <span className="dashboard-saudacao">Olá,</span>
          <h1>{user?.displayName?.split(' ')[0] || 'Atleta'}</h1>
        </div>
        <button className="btn-danger" onClick={logout}>Sair</button>
      </div>

      <div className="dashboard-list">
        {treinos?.map((treino) => (
          <button
            key={treino.id}
            className="dashboard-card"
            onClick={() => navigate(`/treino/${treino.id}`)}
          >
            <span className="dashboard-card-nome display">{treino.nome}</span>
            <span className="dashboard-card-foco">{treino.foco}</span>
            <span className="dashboard-card-count">{treino.exercicios.length} exercícios</span>
          </button>
        ))}
      </div>
    </div>
  );
}
