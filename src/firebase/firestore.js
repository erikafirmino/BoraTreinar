import {
  collection,
  doc,
  getDocs,
  setDoc,
  addDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './config';
import { TREINOS_PADRAO } from '../data/treinosPadrao';

// treinos/{treinoId} — documento fixo com a estrutura do treino (não muda por usuário,
// então fica em uma coleção compartilhada de nível raiz).
export async function fetchTreinos() {
  const snap = await getDocs(collection(db, 'treinos'));
  if (snap.empty) return null;
  return snap.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .sort((a, b) => a.id.localeCompare(b.id));
}

// Popula o Firestore com a estrutura padrão caso a coleção "treinos" esteja vazia.
// Chamado uma vez, na primeira carga do dashboard.
export async function seedTreinosSeVazio() {
  const existentes = await fetchTreinos();
  if (existentes) return existentes;

  await Promise.all(
    TREINOS_PADRAO.map((treino) => setDoc(doc(db, 'treinos', treino.id), treino))
  );
  return TREINOS_PADRAO;
}

// historico/{autoId} — um documento por sessão de treino do usuário.
// { uid, treinoId, data: timestamp, cargas: { exercicioId: pesoKg } }
export async function salvarSessaoHistorico({ uid, treinoId, cargas }) {
  return addDoc(collection(db, 'historico'), {
    uid,
    treinoId,
    cargas,
    data: serverTimestamp(),
  });
}

// Histórico de um usuário, ordenado do mais recente pro mais antigo.
// Útil futuramente para montar gráficos de evolução de carga.
export async function fetchHistoricoUsuario(uid) {
  const q = query(
    collection(db, 'historico'),
    where('uid', '==', uid),
    orderBy('data', 'desc')
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

// Retorna a última carga registrada para cada exercício de um treino específico,
// usada para pré-preencher o stepper de carga na Tela de Treino Ativo.
export function extrairUltimasCargas(historico, treinoId) {
  const sessao = historico.find((h) => h.treinoId === treinoId);
  return sessao?.cargas || {};
}
