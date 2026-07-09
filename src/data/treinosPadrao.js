// Estrutura inicial usada para popular o Firestore na primeira execução.
// Transcrito do caderno de treino. Ajuste séries/repetições/grupo à vontade —
// as cargas (kg) não ficam aqui, elas evoluem no histórico a cada sessão.
// `grupo` é só um rótulo pra agrupar visualmente os exercícios na tela (Peitorais,
// Costas, etc.), igual ao caderno. `videoPath` é o caminho do arquivo no Storage
// (ex.: "exercicios/pulley-alto.mp4"); deixe null até subir o vídeo. `youtubeUrl`
// é um fallback opcional: cole ali o link de um vídeo do YouTube (ex.:
// "https://www.youtube.com/watch?v=XXXXXXXXXXX") pra exibir embutido quando
// ainda não tiver um vídeo próprio no Storage — o Storage tem prioridade se
// os dois estiverem preenchidos.
// `dicas` são 2-3 pontos curtos de execução (postura, erro comum, onde sentir)
// — pensados pra quem treina sem orientação de um personal ao lado. Não
// substituem avaliação profissional, mas ajudam a treinar com mais segurança.

export const TREINOS_PADRAO = [
  {
    id: 'A',
    nome: 'Treino A',
    foco: 'Coxas e Panturrilha',
    exercicios: [
      {
        id: 'agachamento-corporal', grupo: 'Coxas', nome: 'Agachamento corporal',
        series: 4, repeticoes: 10, videoPath: null, youtubeUrl: null,
        dicas: [
          'Desça como se fosse sentar numa cadeira: quadril pra trás, joelho alinhado com a ponta do pé.',
          'Peso nos calcanhares, não na ponta do pé — se o calcanhar levantar, você desceu demais ou rápido demais.',
          'Sinta o esforço nas coxas e glúteos, não nos joelhos.',
        ],
      },
      {
        id: 'cadeira-extensora', grupo: 'Coxas', nome: 'Cadeira extensora',
        series: 4, repeticoes: 10, videoPath: null, youtubeUrl: null,
        dicas: [
          'Ajuste o encosto pra a articulação do joelho ficar alinhada com o eixo do aparelho.',
          'Estenda sem "jogar" a perna com impulso — controle a subida e a descida.',
          'Erro comum: tirar o quadril do banco pra ajudar a levantar mais carga.',
        ],
      },
      {
        id: 'leg-press-45', grupo: 'Coxas', nome: 'Leg press 45°',
        series: 4, repeticoes: 10, videoPath: null, youtubeUrl: null,
        dicas: [
          'Não deixe o joelho ultrapassar muito a linha da ponta do pé na descida.',
          'Nunca trave o joelho totalmente esticado no topo — mantenha uma leve flexão.',
          'Se o quadril "arredondar" e descolar do banco, é sinal de amplitude excessiva pra sua mobilidade — reduza o curso.',
        ],
      },
      {
        id: 'leg-horizontal', grupo: 'Coxas', nome: 'Leg horizontal',
        series: 4, repeticoes: 10, videoPath: null, youtubeUrl: null,
        dicas: [
          'Mantenha a coluna apoiada no encosto durante todo o movimento.',
          'Empurre com o pé todo, não só com a ponta.',
          'Evite travar o joelho com força no final da extensão.',
        ],
      },
      {
        id: 'aducao', grupo: 'Coxas', nome: 'Adução',
        series: 4, repeticoes: 10, videoPath: null, youtubeUrl: null,
        dicas: [
          'Movimento controlado, sem "bater" as pernas uma na outra com força no final.',
          'Mantenha o tronco parado — quem trabalha é a parte interna da coxa, não o corpo todo.',
        ],
      },
      {
        id: 'panturrilha-vertical', grupo: 'Panturrilha', nome: 'Panturrilha vertical',
        series: 4, repeticoes: 10, videoPath: null, youtubeUrl: null,
        dicas: [
          'Desça até sentir um alongamento leve no tendão antes de subir de novo.',
          'Suba na ponta do pé o máximo possível, com pausa breve no topo.',
          'Evite "quicar" — o movimento precisa ser controlado, não usar embalo.',
        ],
      },
      {
        id: 'panturrilha-sentada', grupo: 'Panturrilha', nome: 'Panturrilha sentada',
        series: 4, repeticoes: 10, videoPath: null, youtubeUrl: null,
        dicas: [
          'Amplitude completa: desça bem e suba bem, sem cortar o movimento pela metade.',
          'Segure 1 segundo no topo antes de descer de novo.',
        ],
      },
    ],
  },
  {
    id: 'B',
    nome: 'Treino B',
    foco: 'Peito, Costas, Ombro e Braços',
    exercicios: [
      {
        id: 'supino-reto', grupo: 'Peitorais', nome: 'Supino reto',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Escápulas "presas" no banco (ombros pra trás e pra baixo) durante todo o movimento.',
          'A barra/halteres descem até a altura do meio do peito, sem bater na caixa torácica.',
          'Evite arquear demais a lombar — pés firmes no chão ajudam a estabilizar.',
        ],
      },
      {
        id: 'supino-inclinado', grupo: 'Peitorais', nome: 'Supino inclinado',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Banco entre 30° e 45° — mais que isso vira exercício de ombro, não de peito superior.',
          'Mesma lógica do supino reto: escápulas fixas, descida controlada até a altura do peito.',
        ],
      },
      {
        id: 'supino-declinado', grupo: 'Peitorais', nome: 'Supino declinado',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Trave bem os pés/joelhos no suporte do banco antes de começar.',
          'Movimento mais curto que o supino reto — desça até sentir alongamento confortável no peito, sem forçar o ombro.',
        ],
      },
      {
        id: 'crucifixo', grupo: 'Peitorais', nome: 'Crucifixo',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Cotovelos com uma leve flexão fixa durante todo o movimento — não é remada, não dobra e estica o cotovelo.',
          'Abra os braços como se fosse abraçar um tronco de árvore grande, sentindo o alongamento no peito.',
        ],
      },
      {
        id: 'supino-inclinado-convergente', grupo: 'Peitorais', nome: 'Supino inclinado convergente (máquina)',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Ajuste o banco pra o "ponto de pega" ficar na altura do peito, não do pescoço.',
          'Aperte o peito no final do movimento, quando as alavancas se encontram no meio.',
        ],
      },

      {
        id: 'puxador-frente', grupo: 'Costas', nome: 'Puxador frente',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Puxe pensando em levar o cotovelo em direção ao bolso de trás, não só "puxar a barra pra baixo com o braço".',
          'Peito aberto, leve inclinação do tronco pra trás — evite balançar o corpo pra ganhar embalo.',
        ],
      },
      {
        id: 'puxador-articulado', grupo: 'Costas', nome: 'Puxador articulado',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Mesma ideia do puxador frente: cotovelo guia o movimento, não a mão.',
          'Volte a barra de forma controlada — não deixe o peso "puxar" seu braço de volta rápido demais.',
        ],
      },
      {
        id: 'remada-apoio-lateral', grupo: 'Costas', nome: 'Remada com apoio (pegada lateral)',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Peito apoiado, coluna neutra — não arredonde as costas pra puxar mais peso.',
          'Puxe levando o cotovelo pra trás rente ao corpo, apertando a escápula no final.',
        ],
      },
      {
        id: 'remada-apoio-baixa', grupo: 'Costas', nome: 'Remada com apoio (pegada baixa)',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Cotovelos mais próximos do corpo nessa pegada — trabalha mais a parte inferior das costas.',
          'Evite usar o embalo do tronco; quem trabalha são os braços e as costas.',
        ],
      },
      {
        id: 'remada-sentado-triangular', grupo: 'Costas', nome: 'Remada sentado (triângulo)',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Tronco ereto — incline só um pouco pra frente na largada e volte à vertical puxando, sem "balançar" pra trás com força.',
          'Puxe o triângulo até perto do abdômen, cotovelos rentes ao corpo.',
        ],
      },

      {
        id: 'desenvolvimento-maquina', grupo: 'Ombros', nome: 'Desenvolvimento na máquina',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Não estenda o cotovelo 100% travado no topo — mantenha controle na articulação.',
          'Costas apoiadas no encosto o tempo todo, sem arquear a lombar pra empurrar mais peso.',
        ],
      },
      {
        id: 'elevacao-frontal', grupo: 'Ombros', nome: 'Elevação frontal',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Suba até a altura dos ombros, sem passar muito disso — não precisa ir acima da cabeça.',
          'Evite embalar o corpo pra jogar o peso pra cima; movimento lento e controlado.',
        ],
      },
      {
        id: 'elevacao-lateral', grupo: 'Ombros', nome: 'Elevação lateral',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Cotovelos com leve flexão fixa, "liderando" o movimento — não é o pulso que sobe primeiro.',
          'Suba até a linha dos ombros; se estiver encolhendo o pescoço pra subir mais, é peso demais.',
        ],
      },

      {
        id: 'banco-scott', grupo: 'Bíceps', nome: 'Banco Scott',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Braço bem apoiado no banco do início ao fim — não descole o cotovelo do apoio.',
          'Não estique o braço 100% de forma brusca no final; controle a descida.',
        ],
      },
      {
        id: 'rosca-direta-pulley', grupo: 'Bíceps', nome: 'Rosca direta no pulley',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Cotovelos fixos ao lado do corpo — só o antebraço se move.',
          'Evite balançar o tronco pra "ajudar" a puxar o peso.',
        ],
      },
      {
        id: 'rosca-alternada', grupo: 'Bíceps', nome: 'Rosca alternada',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Gire o punho (supinação) conforme sobe, terminando com a palma da mão voltada pra você.',
          'Um braço de cada vez, sem usar o corpo pra dar embalo no halter.',
        ],
      },
      {
        id: 'rosca-concentrada', grupo: 'Bíceps', nome: 'Rosca concentrada',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Cotovelo apoiado na parte interna da coxa, corpo levemente inclinado pra frente.',
          'Movimento lento, sentindo o bíceps contrair no topo antes de descer.',
        ],
      },
      {
        id: 'rosca-martelo', grupo: 'Bíceps', nome: 'Rosca martelo',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Pegada neutra (como se fosse martelar um prego) do início ao fim, sem girar o punho.',
          'Cotovelos fixos ao lado do corpo, igual à rosca direta.',
        ],
      },

      {
        id: 'pulley-alto-pronado', grupo: 'Tríceps', nome: 'Pulley alto (pronado)',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Cotovelos colados ao corpo e fixos — só o antebraço se estende pra baixo.',
          'Evite inclinar o tronco pra frente pra empurrar mais peso; postura ereta.',
        ],
      },
      {
        id: 'pulley-alto-supinado', grupo: 'Tríceps', nome: 'Pulley alto (supinado)',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Palmas voltadas pra cima, cotovelos fixos ao lado do corpo.',
          'Estenda totalmente embaixo, sentindo a contração do tríceps.',
        ],
      },
      {
        id: 'pulley-alto-corda', grupo: 'Tríceps', nome: 'Pulley alto com corda',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'No final do movimento, abra levemente as pontas da corda pra fora — aumenta a contração.',
          'Cotovelos fixos ao lado do corpo o tempo todo.',
        ],
      },

      {
        id: 'flexao-punhos', grupo: 'Antebraço', nome: 'Flexão dos punhos',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Apoie o antebraço numa superfície (banco/coxa), só o punho se move.',
          'Amplitude completa e controlada — é um movimento pequeno, não precisa de carga alta.',
        ],
      },
    ],
  },
  {
    id: 'C',
    nome: 'Treino C',
    foco: 'Posterior e Glúteos',
    exercicios: [
      {
        id: 'stiff', grupo: 'Posterior', nome: 'Stiff',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Joelhos com leve flexão fixa, quadril "dobra" pra trás como fechar uma porta com o bumbum.',
          'Coluna reta do início ao fim — se a lombar arredondar, pare e reduza a carga/amplitude.',
          'Sinta o alongamento na parte de trás da coxa antes de voltar à posição inicial.',
        ],
      },
      {
        id: 'mesa-flexora-sentada', grupo: 'Posterior', nome: 'Mesa flexora sentada',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Costas apoiadas no encosto, sem tirar o quadril do banco pra flexionar mais.',
          'Desça controlado — não deixe o peso "puxar" a perna de volta rápido.',
        ],
      },
      {
        id: 'mesa-flexora-vertical', grupo: 'Posterior', nome: 'Mesa flexora vertical',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Quadril apoiado, sem empinar pra trás pra ajudar o movimento.',
          'Flexione até perto de tocar o glúteo, com controle na volta.',
        ],
      },
      {
        id: 'mesa-flexora-horizontal', grupo: 'Posterior', nome: 'Mesa flexora horizontal',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Quadril colado no banco durante todo o movimento.',
          'Evite impulso — a fase de descida (excêntrica) é tão importante quanto a subida.',
        ],
      },

      {
        id: 'elevacao-pelvica', grupo: 'Glúteos', nome: 'Elevação pélvica',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Queixo levemente recolhido, olhando pra frente — não jogue a cabeça pra trás.',
          'No topo, aperte bem o glúteo por um instante antes de descer, sem hiperextender a lombar.',
          'Pés na largura do quadril, apoiados por completo no chão.',
        ],
      },
      {
        id: 'cadeira-abdutora', grupo: 'Glúteos', nome: 'Cadeira abdutora',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Tronco ereto, sem se inclinar pra frente pra "ajudar" a empurrar mais peso.',
          'Movimento controlado nos dois sentidos — não solte o peso voltando rápido.',
        ],
      },
      {
        id: 'cadeira-adutora', grupo: 'Glúteos', nome: 'Cadeira adutora',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Costas apoiadas no encosto, movimento controlado sem "bater" as pernas no final.',
        ],
      },
      {
        id: 'extensao-quadril', grupo: 'Glúteos', nome: 'Extensão de quadril (coice)',
        series: 3, repeticoes: 12, videoPath: null, youtubeUrl: null,
        dicas: [
          'Coluna neutra — evite arquear a lombar pra levar a perna mais alto.',
          'Suba até a linha do quadril, sentindo o glúteo contrair, e desça controlado.',
        ],
      },
    ],
  },
];
