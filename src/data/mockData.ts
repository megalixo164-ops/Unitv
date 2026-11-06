import { Plan, ChannelItem, StreamingPlatform, DeviceGuide, Testimonial, FaqItem } from '../types';

export const WHATSAPP_NUMBER = '5547992733349';
export const WHATSAPP_TRIAL_MESSAGE = 'Olá, vim solicitar meu teste grátis';
export const WHATSAPP_TRIAL_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TRIAL_MESSAGE)}`;
export const UNITV_LOGO_SRC = '/assets/aistudio/image_311ee0b3.png';

export const PLANS_1_SCREEN: Plan[] = [
  {
    id: 'mensal-1',
    name: 'UniTV Mensal',
    period: 'por mês',
    price: 29.90,
    perMonthPrice: 29.90,
    screens: 1,
    features: [
      'Acesso Oficial UniTV (30 Dias)',
      '+100.000 canais, filmes e séries',
      'Qualidade 4K, Full HD e HD',
      'Servidores Anti-Travamento (CDN)',
      'Guia de Programação (EPG) ao vivo',
      'Canais Adultos (com bloqueio por senha)',
      'Compatível com TV Box, Smart TV e Celular',
      'Suporte rápido via WhatsApp'
    ]
  },
  {
    id: 'trimestral-1',
    name: 'UniTV Trimestral',
    period: 'a cada 3 meses',
    price: 79.90,
    originalPrice: 89.70,
    perMonthPrice: 26.63,
    popular: true,
    screens: 1,
    features: [
      'Acesso Oficial UniTV (90 Dias)',
      '+100.000 canais, filmes e séries',
      'Qualidade 4K, Full HD e HD',
      'Servidores Anti-Travamento (CDN)',
      'Guia de Programação (EPG) ao vivo',
      'Canais Adultos (com bloqueio por senha)',
      'Economia de R$ 10,00 no período',
      'Compatível com TV Box, Smart TV e Celular',
      'Suporte VIP via WhatsApp'
    ]
  },
  {
    id: 'semestral-1',
    name: 'UniTV Semestral',
    period: 'a cada 6 meses',
    price: 159.90,
    originalPrice: 179.40,
    perMonthPrice: 26.65,
    screens: 1,
    features: [
      'Acesso Oficial UniTV (180 Dias)',
      '+100.000 canais, filmes e séries',
      'Qualidade 4K, Full HD e HD',
      'Servidores Anti-Travamento (CDN)',
      'Guia de Programação (EPG) ao vivo',
      'Canais Adultos (com bloqueio por senha)',
      'Economia garantida no semestre',
      'Compatível com TV Box, Smart TV e Celular',
      'Suporte VIP prioritário 7 dias'
    ]
  },
  {
    id: 'anual-1',
    name: 'UniTV Anual',
    period: 'por 1 ano completo',
    price: 289.90,
    originalPrice: 358.80,
    perMonthPrice: 24.15,
    bestValue: true,
    screens: 1,
    features: [
      'Acesso Oficial UniTV (365 Dias)',
      '+100.000 canais, filmes e séries',
      'Qualidade 4K, Full HD e HD',
      'Servidores Anti-Travamento (CDN VIP)',
      'Guia de Programação (EPG) ao vivo',
      'Canais Adultos (com bloqueio por senha)',
      'Super economia de quase R$ 70,00',
      'Atualizações automáticas de cinema',
      'Suporte VIP Dedicado com fila zero'
    ]
  }
];

export const CHANNELS_SAMPLE: ChannelItem[] = [
  { id: '1', name: 'Premiere Clubes', category: 'esportes', quality: '4K', currentProgram: 'Brasileirão Série A - Ao Vivo', logoText: 'PFC', color: 'from-green-600 to-emerald-800' },
  { id: '2', name: 'SporTV 4K', category: 'esportes', quality: '4K', currentProgram: 'Tá na Área / Debate Esportivo', logoText: 'SPTV', color: 'from-blue-600 to-indigo-800' },
  { id: '3', name: 'ESPN 1 Brasil', category: 'esportes', quality: 'FHD', currentProgram: 'Premier League: Rodada Inglesa', logoText: 'ESPN', color: 'from-red-600 to-red-800' },
  { id: '4', name: 'TNT Sports', category: 'esportes', quality: 'FHD', currentProgram: 'UEFA Champions League - Ao Vivo', logoText: 'TNT', color: 'from-amber-600 to-orange-700' },
  { id: '5', name: 'Combate UFC', category: 'esportes', quality: 'FHD', currentProgram: 'UFC Noite de Lutas - Card Principal', logoText: 'UFC', color: 'from-zinc-800 to-black' },
  { id: '6', name: 'Telecine Premium', category: 'filmes', quality: '4K', currentProgram: 'Estreia da Semana: Cinema em Casa', logoText: 'TC', color: 'from-red-500 to-rose-700' },
  { id: '7', name: 'HBO Signature', category: 'filmes', quality: '4K', currentProgram: 'A Casa do Dragão (Nova Temporada)', logoText: 'HBO', color: 'from-purple-900 to-slate-900' },
  { id: '8', name: 'Megapix', category: 'filmes', quality: 'FHD', currentProgram: 'Sessão Dupla de Ação', logoText: 'MPX', color: 'from-orange-500 to-amber-600' },
  { id: '9', name: 'Globo SP/RJ 4K', category: 'abertos', quality: '4K', currentProgram: 'Jornal Nacional / Novela das 9', logoText: 'GLB', color: 'from-sky-500 to-blue-700' },
  { id: '10', name: 'SBT HD', category: 'abertos', quality: 'FHD', currentProgram: 'Programação Ao Vivo', logoText: 'SBT', color: 'from-blue-500 to-cyan-600' },
  { id: '11', name: 'Record TV HD', category: 'abertos', quality: 'FHD', currentProgram: 'Jornal da Record', logoText: 'REC', color: 'from-blue-700 to-indigo-900' },
  { id: '12', name: 'Band HD', category: 'abertos', quality: 'FHD', currentProgram: 'Fórmula 1 & Esportes', logoText: 'BND', color: 'from-emerald-500 to-teal-700' },
  { id: '13', name: 'Cartoon Network', category: 'infantil', quality: 'FHD', currentProgram: 'O Incrível Mundo de Gumball', logoText: 'CN', color: 'from-slate-900 to-black' },
  { id: '14', name: 'Discovery Kids', category: 'infantil', quality: 'FHD', currentProgram: 'Peppa Pig & Patrulha Canina', logoText: 'DK', color: 'from-yellow-400 to-amber-500' },
  { id: '15', name: 'GloboNews', category: 'noticias', quality: 'FHD', currentProgram: 'Edição das 18h - Cobertura Ao Vivo', logoText: 'GNews', color: 'from-red-600 to-red-900' },
  { id: '16', name: 'CNN Brasil', category: 'noticias', quality: 'FHD', currentProgram: 'CNN 360 Graus', logoText: 'CNN', color: 'from-red-700 to-red-950' },
  { id: '17', name: 'Discovery Channel', category: 'variedades', quality: '4K', currentProgram: 'Sobrevivência & Aventura', logoText: 'DISC', color: 'from-cyan-600 to-blue-800' },
  { id: '18', name: 'History Channel', category: 'variedades', quality: 'FHD', currentProgram: 'Trato Feito & Documentários', logoText: 'HIST', color: 'from-amber-700 to-yellow-900' }
];

export const STREAMING_PLATFORMS: StreamingPlatform[] = [
  {
    name: 'Catálogo Netflix',
    description: 'Todas as temporadas originais, sucessos mundiais e filmes em 4K direto no UniTV',
    badgeColor: 'bg-red-600 text-white',
    popularTitles: ['Stranger Things', 'Wandinha', 'Round 6', 'La Casa de Papel']
  },
  {
    name: 'Max (HBO)',
    description: 'Produções HBO, Warner Bros, Universo DC e cinema de ponta',
    badgeColor: 'bg-indigo-700 text-white',
    popularTitles: ['House of the Dragon', 'The Last of Us', 'Succession', 'Batman']
  },
  {
    name: 'Disney+ & Star+',
    description: 'Marvel, Star Wars, Pixar, Disney e esportes ao vivo ESPN',
    badgeColor: 'bg-blue-600 text-white',
    popularTitles: ['Loki', 'The Mandalorian', 'Divertida Mente 2', 'Deadpool']
  },
  {
    name: 'Prime Video',
    description: 'Séries premiadas, estreias semanais e produções Amazon Originals',
    badgeColor: 'bg-sky-500 text-white',
    popularTitles: ['The Boys', 'Os Anéis de Poder', 'Reacher', 'Fallout']
  },
  {
    name: 'Globoplay + Telecine',
    description: 'Novelas, realities, jornalismo e todos os filmes Telecine',
    badgeColor: 'bg-amber-600 text-white',
    popularTitles: ['Novelas Completas', 'Séries Nacionais', 'Globoplay Originais', 'Ao Vivo']
  },
  {
    name: 'Apple TV+ & Paramount+',
    description: 'Superproduções com alta fidelidade de áudio e imagem 4K',
    badgeColor: 'bg-zinc-800 text-white',
    popularTitles: ['Ted Lasso', 'Severance', 'Yellowstone', 'Tulsa King']
  },
  {
    name: 'Crunchyroll',
    description: 'O maior catálogo de animes do mundo dublados e legendados em HD',
    badgeColor: 'bg-orange-500 text-white',
    popularTitles: ['One Piece', 'Jujutsu Kaisen', 'Solo Leveling', 'Demon Slayer']
  }
];

export const DEVICE_GUIDES: DeviceGuide[] = [
  {
    id: 'tv-box',
    name: 'TV Box & Fire TV Stick',
    iconName: 'Box',
    tag: 'Fire Stick, Mi Box, Chromecast, TX9, MXQ',
    apps: ['UniTV Oficial (TV)', 'Downloader'],
    instructions: [
      'No seu TV Box ou Fire Stick, solicite o link oficial do app UniTV diretamente no nosso WhatsApp.',
      'Instale o aplicativo UniTV em menos de 2 minutos com nosso passo a passo guiado.',
      'Abra o UniTV na sua TV e aproveite seu teste grátis liberado na hora!',
      'Navegação rápida pelo controle remoto com canais, filmes e séries organizados.'
    ]
  },
  {
    id: 'smart-tv',
    name: 'Smart TVs (Android / Google TV)',
    iconName: 'Tv',
    tag: 'TCL, Philips, Philco, Sony, Samsung & LG',
    apps: ['UniTV Smart TV', 'Downloader', 'Smarters / IBO'],
    instructions: [
      'Em Smart TVs com sistema Android ou Google TV, você instala o aplicativo oficial UniTV diretamente.',
      'Para TVs Samsung ou LG, nossa equipe orienta a melhor opção compatível ou conexão via Fire Stick/TV Box.',
      'Chame no WhatsApp para receber o acesso e solicitar seu teste grátis.',
      'Suporte completo passo a passo pelo WhatsApp para deixar tudo funcionando.'
    ]
  },
  {
    id: 'mobile',
    name: 'Celular & Tablet Android',
    iconName: 'Smartphone',
    tag: 'Smartphones e Tablets Android',
    apps: ['UniTV Mobile App'],
    instructions: [
      'Peça o link seguro do aplicativo UniTV Mobile no nosso WhatsApp.',
      'Baixe e instale no seu celular ou tablet Android em poucos segundos.',
      'Entre com seu acesso e assista futebol ao vivo, filmes e séries onde estiver (Wi-Fi ou 4G/5G).',
      'Solicite seu teste grátis sem compromisso!'
    ]
  },
  {
    id: 'pc',
    name: 'Computador & Notebook',
    iconName: 'Laptop',
    tag: 'Windows, Mac & Emuladores',
    apps: ['UniTV para PC', 'Web Player'],
    instructions: [
      'Solicite no nosso WhatsApp as instruções para assistir no seu computador ou notebook.',
      'Instale de forma rápida e faça login com a sua conta UniTV.',
      'Assista em tela cheia com alta definição e zero travamentos.',
      'Atendimento imediato para tirar qualquer dúvida.'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Eduardo Silveira',
    city: 'Joinville',
    state: 'SC',
    rating: 5,
    date: 'Há 1 dia',
    avatar: '/assets/avatars/avatar-1.jpg',
    topicTag: 'Futebol Sem Travar',
    comment: 'Quarta-feira passada teve jogo decisivo da Libertadores e rodou liso demais na minha TV Box! Antes minha lista antiga travava no meio do lance, aqui na Leandro TV+ o Premiere e a ESPN ficam em 4K sem atraso.',
    plan: 'UniTV Anual'
  },
  {
    id: '2',
    name: 'Mariana Fontes',
    city: 'Blumenau',
    state: 'SC',
    rating: 5,
    date: 'Há 2 dias',
    avatar: '/assets/avatars/avatar-2.jpg',
    topicTag: 'Novelas Completas',
    comment: 'Assinei principalmente por causa das novelas! Tem tanto as novelas atuais quanto as antigas da Globo e Globoplay completas, além dos canais abertos ao vivo em Full HD. Minha mãe assiste o dia inteiro na sala.',
    plan: 'UniTV Trimestral'
  },
  {
    id: '3',
    name: 'Lucas Gabriel Oliveira',
    city: 'Curitiba',
    state: 'PR',
    rating: 5,
    date: 'Há 3 dias',
    avatar: '/assets/avatars/avatar-3.jpg',
    topicTag: 'Animes & Crunchyroll',
    comment: 'Pra quem curte anime o aplicativo UniTV é absurdo! Tem One Piece, Solo Leveling, Jujutsu Kaisen e Demon Slayer tudo atualizado, dublado e legendado em alta definição. Cancelei todas as outras assinaturas.',
    plan: 'UniTV Semestral'
  },
  {
    id: '4',
    name: 'Fernanda Cristina Rocha',
    city: 'Florianópolis',
    state: 'SC',
    rating: 5,
    date: 'Há 4 dias',
    avatar: '/assets/avatars/avatar-4.jpg',
    topicTag: '+100.000 Conteúdos',
    comment: 'Fiquei impressionada com a quantidade de conteúdos! São mais de 100 mil opções entre filmes recém-saídos do cinema, séries da Netflix, Max e Disney+ e canais ao vivo. Nunca falta o que assistir em casa.',
    plan: 'UniTV Anual'
  },
  {
    id: '5',
    name: 'Rodrigo Alencar',
    city: 'São José dos Campos',
    state: 'SP',
    rating: 5,
    date: 'Há 5 dias',
    avatar: '/assets/avatars/avatar-5.jpg',
    topicTag: 'Estabilidade de Sinal',
    comment: 'O que mais me ganhou foi a estabilidade. Mesmo usando no Wi-Fi na TV do quarto com internet normal, os canais abrem em menos de 1 segundo e não ficam carregando. Já estou no quinto mês sem dor de cabeça.',
    plan: 'UniTV Anual'
  },
  {
    id: '6',
    name: 'Patrícia Martins',
    city: 'Porto Alegre',
    state: 'RS',
    rating: 5,
    date: 'Há 6 dias',
    avatar: '/assets/avatars/avatar-6.jpg',
    topicTag: 'Desenhos & Área Kids',
    comment: 'Meus dois filhos amaram! Tem todos os canais infantis 24h como Discovery Kids e Cartoon, além das animações da Disney e Pixar dubladas. E o bloqueio por senha nos canais adultos dá total tranquilidade.',
    plan: 'UniTV Trimestral'
  },
  {
    id: '7',
    name: 'Rafael Almeida',
    city: 'Belo Horizonte',
    state: 'MG',
    rating: 5,
    date: 'Há 1 semana',
    avatar: '/assets/avatars/avatar-7.jpg',
    topicTag: 'Fácil de Instalar',
    comment: 'Eu sou leigo pra tecnologia, mas chamei no WhatsApp e o atendimento me mandou o passo a passo certinho. Em menos de 3 minutos já estava rodando no meu Fire Stick e na Smart TV TCL da sala.',
    plan: 'UniTV Semestral'
  },
  {
    id: '8',
    name: 'Camila Azevedo',
    city: 'Campinas',
    state: 'SP',
    rating: 5,
    date: 'Há 1 semana',
    avatar: '/assets/avatars/avatar-8.jpg',
    topicTag: 'Cinema em 4K',
    comment: 'Todo fim de semana fazemos sessão de cinema em casa. Filmes que acabaram de sair do cinema já entram no catálogo do UniTV dublados em 4K UHD. A qualidade de imagem e som na TV grande é surreal!',
    plan: 'UniTV Anual'
  },
  {
    id: '9',
    name: 'Marcelo Tavares',
    city: 'Itajaí',
    state: 'SC',
    rating: 5,
    date: 'Há 2 semanas',
    avatar: '/assets/avatars/avatar-9.jpg',
    topicTag: 'UFC & Esportes 60fps',
    comment: 'Assisto todos os eventos do UFC no Combate, Fórmula 1 e jogos do Brasileirão todo fim de semana. Imagem limpa em 60fps e zero travamento mesmo sábado à noite em horário de pico.',
    plan: 'UniTV Semestral'
  },
  {
    id: '10',
    name: 'Juliana Mendes',
    city: 'Londrina',
    state: 'PR',
    rating: 5,
    date: 'Há 2 semanas',
    avatar: '/assets/avatars/avatar-10.jpg',
    topicTag: 'Super Economia',
    comment: 'Eu gastava mais de R$ 260 por mês somando TV por assinatura e 4 streamings diferentes. Solicitei o teste grátis no WhatsApp, vi que tinha tudo num lugar só e economizei muito. Recomendo de olhos fechados!',
    plan: 'UniTV Trimestral'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Como solicitar o teste grátis do UniTV?',
    answer: 'É super simples e sem compromisso! Basta clicar em qualquer botão de "Solicitar Teste Grátis" aqui no site. Você será direcionado para o nosso WhatsApp com a mensagem pronta e nossa equipe libera na hora o seu teste gratuito no aplicativo UniTV.'
  },
  {
    question: 'Por que o aplicativo UniTV é o mais recomendado?',
    answer: 'O UniTV é hoje a plataforma mais completa e estável do Brasil. Ele reúne todos os canais ao vivo em 4K/FHD, esportes, Premiere, além de um catálogo gigantesco de filmes e séries das principais plataformas de streaming em uma interface rápida, moderna e muito fácil de mexer pelo controle remoto ou celular.'
  },
  {
    question: 'Em quais aparelhos o UniTV funciona?',
    answer: 'O UniTV funciona perfeitamente em qualquer TV Box, Amazon Fire TV Stick, Google Chromecast, Smart TVs com sistema Android/Google TV, celulares e tablets Android, além de computadores.'
  },
  {
    question: 'A transmissão trava durante jogos de futebol?',
    answer: 'Não! O sistema conta com servidores CDN de alta velocidade e tecnologia anti-travamento, garantindo imagem fluida mesmo em finais de campeonato e horários de pico.'
  },
  {
    question: 'Qual a velocidade de internet necessária?',
    answer: 'Com uma conexão básica a partir de 15 Mbps você já assiste com tranquilidade. Para canais em 4K Ultra HD, recomendamos internet a partir de 25 a 30 Mbps.'
  },
  {
    question: 'Como recebo minha recarga ou ativação após assinar?',
    answer: 'A liberação é imediata pelo WhatsApp! Assim que você escolhe seu plano e confirma via Pix ou cartão, enviamos seu código de recarga ou dados de acesso na hora.'
  },
  {
    question: 'Possui controle parental para bloquear conteúdo adulto?',
    answer: 'Sim! O aplicativo UniTV possui área protegida por senha para que apenas adultos com o PIN tenham acesso, garantindo total segurança para toda a família.'
  },
  {
    question: 'Tem contrato de fidelidade ou multa?',
    answer: 'Nenhuma! Você não fica preso a contratos. Você solicita seu teste grátis e depois escolhe o plano que preferir (Mensal, Trimestral, Semestral ou Anual) com total liberdade.'
  }
];
