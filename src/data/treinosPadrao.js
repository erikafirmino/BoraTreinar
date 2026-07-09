// Estrutura inicial usada para popular o Firestore na primeira execução.
// Transcrito do caderno de treino. Ajuste séries/repetições/grupo à vontade —
// as cargas (kg) não ficam aqui, elas evoluem no histórico a cada sessão.
// `grupo` é só um rótulo pra agrupar visualmente os exercícios na tela (Peitorais,
// Costas, etc.), igual ao caderno. `videoPath` é o caminho do arquivo no Storage
// (ex.: "exercicios/pulley-alto.mp4"); deixe null até subir o vídeo.

export const TREINOS_PADRAO = [
  {
    id: 'A',
    nome: 'Treino A',
    foco: 'Coxas e Panturrilha',
    exercicios: [
      { id: 'agachamento-corporal', grupo: 'Coxas', nome: 'Agachamento corporal', series: 4, repeticoes: 10, videoPath: null },
      { id: 'cadeira-extensora', grupo: 'Coxas', nome: 'Cadeira extensora', series: 4, repeticoes: 10, videoPath: null },
      { id: 'leg-press-45', grupo: 'Coxas', nome: 'Leg press 45°', series: 4, repeticoes: 10, videoPath: null },
      { id: 'leg-horizontal', grupo: 'Coxas', nome: 'Leg horizontal', series: 4, repeticoes: 10, videoPath: null },
      { id: 'aducao', grupo: 'Coxas', nome: 'Adução', series: 4, repeticoes: 10, videoPath: null },
      { id: 'panturrilha-vertical', grupo: 'Panturrilha', nome: 'Panturrilha vertical', series: 4, repeticoes: 10, videoPath: null },
      { id: 'panturrilha-sentada', grupo: 'Panturrilha', nome: 'Panturrilha sentada', series: 4, repeticoes: 10, videoPath: null },
    ],
  },
  {
    id: 'B',
    nome: 'Treino B',
    foco: 'Peito, Costas, Ombro e Braços',
    exercicios: [
      { id: 'supino-reto', grupo: 'Peitorais', nome: 'Supino reto', series: 3, repeticoes: 12, videoPath: null },
      { id: 'supino-inclinado', grupo: 'Peitorais', nome: 'Supino inclinado', series: 3, repeticoes: 12, videoPath: null },
      { id: 'supino-declinado', grupo: 'Peitorais', nome: 'Supino declinado', series: 3, repeticoes: 12, videoPath: null },
      { id: 'crucifixo', grupo: 'Peitorais', nome: 'Crucifixo', series: 3, repeticoes: 12, videoPath: null },
      { id: 'supino-inclinado-convergente', grupo: 'Peitorais', nome: 'Supino inclinado convergente (máquina)', series: 3, repeticoes: 12, videoPath: null },

      { id: 'puxador-frente', grupo: 'Costas', nome: 'Puxador frente', series: 3, repeticoes: 12, videoPath: null },
      { id: 'puxador-articulado', grupo: 'Costas', nome: 'Puxador articulado', series: 3, repeticoes: 12, videoPath: null },
      { id: 'remada-apoio-lateral', grupo: 'Costas', nome: 'Remada com apoio (pegada lateral)', series: 3, repeticoes: 12, videoPath: null },
      { id: 'remada-apoio-baixa', grupo: 'Costas', nome: 'Remada com apoio (pegada baixa)', series: 3, repeticoes: 12, videoPath: null },
      { id: 'remada-sentado-triangular', grupo: 'Costas', nome: 'Remada sentado (triângulo)', series: 3, repeticoes: 12, videoPath: null },

      { id: 'desenvolvimento-maquina', grupo: 'Ombros', nome: 'Desenvolvimento na máquina', series: 3, repeticoes: 12, videoPath: null },
      { id: 'elevacao-frontal', grupo: 'Ombros', nome: 'Elevação frontal', series: 3, repeticoes: 12, videoPath: null },
      { id: 'elevacao-lateral', grupo: 'Ombros', nome: 'Elevação lateral', series: 3, repeticoes: 12, videoPath: null },

      { id: 'banco-scott', grupo: 'Bíceps', nome: 'Banco Scott', series: 3, repeticoes: 12, videoPath: null },
      { id: 'rosca-direta-pulley', grupo: 'Bíceps', nome: 'Rosca direta no pulley', series: 3, repeticoes: 12, videoPath: null },
      { id: 'rosca-alternada', grupo: 'Bíceps', nome: 'Rosca alternada', series: 3, repeticoes: 12, videoPath: null },
      { id: 'rosca-concentrada', grupo: 'Bíceps', nome: 'Rosca concentrada', series: 3, repeticoes: 12, videoPath: null },
      { id: 'rosca-martelo', grupo: 'Bíceps', nome: 'Rosca martelo', series: 3, repeticoes: 12, videoPath: null },

      { id: 'pulley-alto-pronado', grupo: 'Tríceps', nome: 'Pulley alto (pronado)', series: 3, repeticoes: 12, videoPath: null },
      { id: 'pulley-alto-supinado', grupo: 'Tríceps', nome: 'Pulley alto (supinado)', series: 3, repeticoes: 12, videoPath: null },
      { id: 'pulley-alto-corda', grupo: 'Tríceps', nome: 'Pulley alto com corda', series: 3, repeticoes: 12, videoPath: null },

      { id: 'flexao-punhos', grupo: 'Antebraço', nome: 'Flexão dos punhos', series: 3, repeticoes: 12, videoPath: null },
    ],
  },
  {
    id: 'C',
    nome: 'Treino C',
    foco: 'Posterior e Glúteos',
    exercicios: [
      { id: 'stiff', grupo: 'Posterior', nome: 'Stiff', series: 3, repeticoes: 12, videoPath: null },
      { id: 'mesa-flexora-sentada', grupo: 'Posterior', nome: 'Mesa flexora sentada', series: 3, repeticoes: 12, videoPath: null },
      { id: 'mesa-flexora-vertical', grupo: 'Posterior', nome: 'Mesa flexora vertical', series: 3, repeticoes: 12, videoPath: null },
      { id: 'mesa-flexora-horizontal', grupo: 'Posterior', nome: 'Mesa flexora horizontal', series: 3, repeticoes: 12, videoPath: null },

      { id: 'elevacao-pelvica', grupo: 'Glúteos', nome: 'Elevação pélvica', series: 3, repeticoes: 12, videoPath: null },
      { id: 'cadeira-abdutora', grupo: 'Glúteos', nome: 'Cadeira abdutora', series: 3, repeticoes: 12, videoPath: null },
      { id: 'cadeira-adutora', grupo: 'Glúteos', nome: 'Cadeira adutora', series: 3, repeticoes: 12, videoPath: null },
      { id: 'extensao-quadril', grupo: 'Glúteos', nome: 'Extensão de quadril (coice)', series: 3, repeticoes: 12, videoPath: null },
    ],
  },
];
