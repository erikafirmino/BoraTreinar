# Treino App

App pessoal de acompanhamento de treinos — React + Vite, Firebase (Auth, Firestore, Storage) e deploy na Vercel. PWA instalável no celular.

## O que já está pronto

- **Auth**: login por E-mail/Senha e Google (`src/contexts/AuthContext.jsx`).
- **Firestore**: coleções `treinos` (estrutura fixa A/B/C + "sem divisão") e `historico` (cargas por sessão, por usuário). O app popula `treinos` automaticamente na primeira vez que você abre o Dashboard logado (`src/firebase/firestore.js` → `seedTreinosSeVazio`). Edite `src/data/treinosPadrao.js` para mudar exercícios, séries e repetições.
- **Storage**: helper para resolver vídeos/GIFs de demonstração (`src/firebase/storage.js`). Suba os arquivos manualmente pelo Console do Firebase (ou pela função `subirVideoExercicio`) dentro da pasta `exercicios/`, com o mesmo nome usado no campo `videoPath` de cada exercício em `treinosPadrao.js` (ex.: `exercicios/pulley-alto.mp4`).
- **Tela de Treino Ativo**: cards por exercício, stepper de carga (+/-), modal de vídeo, progresso de séries.
- **Cronômetro de descanso**: presets de 45/60/90/120s, Wake Lock (mantém tela ligada), bipes nos últimos 5 segundos e vibração ao final.
- **PWA**: `vite-plugin-pwa` configurado, com ícones de placeholder em `public/icons/` (troque pelos seus).

## 1. Criar o projeto no Firebase

1. Acesse console.firebase.google.com e crie um novo projeto.
2. **Authentication** → *Sign-in method* → habilite **E-mail/senha** e **Google**.
3. **Firestore Database** → crie o banco (modo produção) → depois publique as regras deste repo: copie o conteúdo de `firestore.rules` para a aba *Rules* do Firestore.
4. **Storage** → ative o bucket padrão → publique as regras de `storage.rules` na aba *Rules*.
5. **Project settings** (ícone de engrenagem) → *Your apps* → adicione um app Web → copie as credenciais (`apiKey`, `authDomain`, etc.).

## 2. Configurar variáveis de ambiente

```bash
cp .env.example .env
```

Preencha o `.env` com as credenciais copiadas no passo anterior.

## 3. Rodar localmente

```bash
npm install
npm run dev
```

> Wake Lock e alguns recursos de PWA só funcionam de verdade em https:// ou localhost. Para testar no celular pela rede local, use `npm run dev -- --host` e acesse pelo IP, mas o Wake Lock pode exigir HTTPS (funciona normalmente já em produção na Vercel).

## 4. Deploy na Vercel

1. Suba o código para um repositório no GitHub.
2. Em vercel.com, importe o repositório.
3. Framework preset: **Vite**. Build command `npm run build`, output `dist` (a Vercel detecta isso sozinha).
4. Em *Environment Variables*, adicione as mesmas chaves do `.env` (`VITE_FIREBASE_API_KEY`, etc.).
5. Deploy. Todo `git push` depois disso já sobe uma nova versão automaticamente.
6. No Firebase Console → Authentication → *Settings* → *Authorized domains*, adicione o domínio da Vercel (ex. `seu-app.vercel.app`), senão o login com Google não funciona em produção.

## Próximos passos sugeridos (fora do escopo da v1.0)

- Gráficos de evolução de carga a partir da coleção `historico` (já fica tudo salvo, é só consultar com `fetchHistoricoUsuario`).
- Tela de admin para subir vídeos direto pelo app (a função `subirVideoExercicio` já existe em `src/firebase/storage.js`, falta só a UI).
- Ícones de PWA definitivos (os de `public/icons/` são placeholders gerados automaticamente).

## Estrutura de dados no Firestore

```
treinos/{A|B|C|extra}
  nome: string
  foco: string
  exercicios: [{ id, nome, series, repeticoes, videoPath }]

historico/{autoId}
  uid: string
  treinoId: string
  data: timestamp
  cargas: { [exercicioId]: number }
```
