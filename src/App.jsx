import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import TreinoAtivo from './pages/TreinoAtivo';

function RotaProtegida({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="spinner-wrap">Carregando…</div>;
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

function Rotas() {
  const { loading } = useAuth();
  if (loading) return <div className="spinner-wrap">Carregando…</div>;

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <RotaProtegida>
            <Dashboard />
          </RotaProtegida>
        }
      />
      <Route
        path="/treino/:treinoId"
        element={
          <RotaProtegida>
            <TreinoAtivo />
          </RotaProtegida>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Rotas />
      </AuthProvider>
    </BrowserRouter>
  );
}
