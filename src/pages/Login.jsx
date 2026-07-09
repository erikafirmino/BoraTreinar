import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import logo from '../assets/logo.png';
import './Login.css';

export default function Login() {
  const { login, signup, loginComGoogle, authError } = useAuth();
  const [modo, setModo] = useState('login'); // 'login' | 'cadastro'
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [enviando, setEnviando] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setEnviando(true);
    try {
      if (modo === 'login') {
        await login(email, senha);
      } else {
        await signup(email, senha);
      }
      navigate('/');
    } catch (err) {
      // erro já tratado e exposto via authError no contexto
    } finally {
      setEnviando(false);
    }
  }

  async function handleGoogle() {
    setEnviando(true);
    try {
      await loginComGoogle();
      navigate('/');
    } catch (err) {
      // erro já tratado
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="login-page">
      <div className="login-hero">
        <div className="login-hero-card">
          <img src={logo} alt="BoraTreinar" className="login-hero-logo" />
        </div>
        <span className="login-hero-sub">Sua jornada no treino.</span>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <label className="login-label">
          E-mail
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="voce@email.com"
          />
        </label>
        <label className="login-label">
          Senha
          <input
            type="password"
            required
            minLength={6}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="••••••••"
          />
        </label>

        {authError && <p className="login-error">{authError}</p>}

        <button className="btn-accent" type="submit" disabled={enviando}>
          {modo === 'login' ? 'Entrar' : 'Criar conta'}
        </button>

        <button
          type="button"
          className="login-switch"
          onClick={() => setModo(modo === 'login' ? 'cadastro' : 'login')}
        >
          {modo === 'login' ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Entrar'}
        </button>

        <div className="login-divider"><span>ou</span></div>

        <button type="button" className="btn-ghost login-google" onClick={handleGoogle} disabled={enviando}>
          Entrar com Google
        </button>
      </form>
    </div>
  );
}
