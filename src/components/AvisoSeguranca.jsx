import { useState } from 'react';
import './AvisoSeguranca.css';

// Aviso curto e recorrente pra quem treina sem um personal por perto —
// não é aconselhamento médico, só um lembrete de bom senso antes de cada treino.
export default function AvisoSeguranca() {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="aviso-seguranca">
      <button className="aviso-seguranca-toggle" onClick={() => setAberto((v) => !v)}>
        <span>⚠️ Antes de treinar: ardência é normal, dor aguda não</span>
        <span className="aviso-seguranca-seta">{aberto ? '▲' : '▼'}</span>
      </button>
      {aberto && (
        <div className="aviso-seguranca-corpo">
          <p>
            <strong>Cansaço/ardência muscular</strong> no fim da série é esperado.
            <strong> Dor aguda, pontada ou estalo</strong> na articulação não é —
            pare o exercício na hora se sentir isso.
          </p>
          <p>
            Comece com uma carga confortável e vá evoluindo aos poucos — não vale
            sacrificar a postura pra levantar mais peso. Na dúvida sobre uma dor
            persistente, procure um profissional antes de continuar.
          </p>
        </div>
      )}
    </div>
  );
}
