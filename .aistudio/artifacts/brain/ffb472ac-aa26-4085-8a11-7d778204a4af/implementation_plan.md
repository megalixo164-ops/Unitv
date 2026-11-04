# Atualização da Identidade Visual & Nova Logo — Leandro TV+

Este plano detalha a aplicação da nova logo oficial da **Leandro TV+ (TV ONLINE PREMIUM)** e a reformulação da identidade visual do site, mantendo uma base clara e limpa (60% branco/neutro suave) e aplicando o vibrante degradê multicolorido da marca (**laranja `#FF8A00` → vermelho/magenta `#FF1E56` → roxo `#7928CA` → azul ciano `#00A8FF`**) nos destaques, botões de conversão, ícones e elementos interativos.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> As decisões abaixo refletem suas escolhas confirmadas e como a nova marca será integrada em toda a plataforma.

- **Estilo de Fundo e Atmosfera Confirmados**: Fundo claro e limpo (`#FFFFFF` e `#F8FAFC`), garantindo máxima legibilidade e contraste comercial, com o degradê colorido vibrante da logo aplicado nos botões de ação (CTAs), textos em destaque, bordas de planos em destaque e efeitos sutis de iluminação.
- **Aplicação Inteligente da Logo Confirmada**:
  - **No Menu Superior (Navbar)**: Versão horizontal adaptada e compacta para navegação ágil em uma única linha, combinando a arte oficial da logo com o texto em degradê `LeandroTV+`.
  - **No Topo (Hero), Modal de Teste e Rodapé**: Destaque para a imagem oficial enviada (`/assets/aistudio/Logo_Premium_LeandroTV___1__61939e8e.png`) acompanhada da assinatura visual `TV ONLINE PREMIUM` e acabamento adaptado tanto para fundos claros quanto escuros.

---

## 1. Overview & Core Concept

- **O Que Será Feito**: Substituição completa da antiga identidade azul monocromática pela nova identidade visual multicolorida da **Leandro TV+**, integrando o ativo oficial da logo em alta definição e sincronizando todas as seções (Hero, Planos, Catálogo de Canais, Diferenciais, Guia de Aparelhos, Simulador de Velocidade, Depoimentos, FAQ e Modal de Teste Grátis de 6h).
- **Público-Alvo**: Clientes em busca de um serviço de TV por assinatura online e streaming em 4K e Full HD estável, moderno e com atendimento rápido via WhatsApp.
- **Valor Principal**: Uma aparência autêntica, memorável e 100% alinhada com a nova marca oficial da **Leandro TV+**, aumentando a confiança do visitante e a taxa de conversão para o teste gratuito e assinatura dos planos.

---

## 2. User Experience & Visual Design

### Identidade Visual & Tema
- **Direção Estética**: *Modern Streaming & Broadcast Light* — superfície limpa e luminosa onde o espectro cromático do símbolo "Play" em fita 3D (laranja, magenta, violeta e azul elétrico) guia o olhar do usuário diretamente para os pontos de conversão.
- **Paleta de Cores (Regra 60-30-10)**:
  - **60% Base Dominante Clara**: Branco puro (`#FFFFFF`) e cinza-gelo suave (`#F8FAFC`) para áreas de leitura e seções alternadas.
  - **30% Superfícies Estruturais & Contraste**: Grafite profundo e preto-azulado (`#0F172A` / `#090D16`) para tipografia principal, moldura do player interativo de TV e rodapé institucional.
  - **10% Orçamento de Destaque (Degradê Oficial Leandro TV+)**:
    - Gradiente Principal da Marca: `linear-gradient(90deg, #FF9900 0%, #FF1E56 35%, #7928CA 68%, #0099FF 100%)`
    - Aplicado em botões primários de **Teste Grátis de 6 Horas**, palavras-chave nos títulos principais, barra divisória com a assinatura `TV ONLINE PREMIUM` e destaque do plano **Mais Popular / Maior Economia**.
- **Tipografia & Hierarquia**:
  - Títulos em fonte geométrica encorpada (`Plus Jakarta Sans` / `Outfit`), com `text-wrap: balance` e números tabulares (`tabular-nums`) nos preços e métricas de velocidade.
  - Controles de navegação e botões sempre em linha única (`whitespace-nowrap`), respeitando o contrato de cabeçalho limpo em 3 zonas (Marca — Links de Navegação — Ação Principal).

### Fluxos Visuais por Seção
1. **Cabeçalho (Navbar)**: Exibição limpa em linha única com a logo horizontal da Leandro TV+, links diretos para as seções e botão de destaque com o degradê da marca para **Teste Grátis (6h)**.
2. **Hero & Player Interativo**: Apresentação em destaque da nova logo oficial `Leandro TV+ — TV ONLINE PREMIUM`, título principal com texto em degradê multicolorido, botão de ação vibrante e o Player Interativo com halo luminoso nas cores laranja, rosa, roxo e azul.
3. **Planos & Preços (1 Tela / 2 Telas)**: Seletor interativo de telas e cartões de assinatura onde os planos em destaque recebem borda e botão com o degradê oficial da Leandro TV+.
4. **Catálogo, Aparelhos, Simulador de Velocidade, Depoimentos e FAQ**: Ícones, abas ativas e chamadas de conversão atualizados com a paleta multicolorida da marca.

---

## 3. Key Product Decisions & Trade-Offs

- **Decisão 1: Componente de Logo Adaptativo (`Logo.tsx`)**
  - *Abordagem Escolhida*: Suportar modos dedicados (`stacked` com a imagem completa oficial para o Hero/Modal e `horizontal` otimizado para a barra de navegação e rodapé), utilizando diretamente o arquivo `/assets/aistudio/Logo_Premium_LeandroTV___1__61939e8e.png`.
  - *Por quê*: A imagem original enviada tem formato quadrado/vertical (ícone Play grande no topo, nome `LeandroTV+` no centro e `TV ONLINE PREMIUM` na base). Usá-la inteira em tamanho grande no Hero valoriza os detalhes 3D do ícone, enquanto o recorte/adaptação horizontal na barra superior mantém o menu elegante e sem ocupar espaço excessivo na tela do celular.
- **Decisão 2: Harmonia do Degradê de 4 Cores em Fundo Claro**
  - *Abordagem Escolhida*: Concentrar o degradê completo (laranja → rosa → roxo → azul) nos elementos principais de marca e botões primários, usando tons suaves coordenados (violeta/azul/âmbar sutis) para estados secundários.
  - *Por quê*: Evita poluição visual e garante que o botão de **Teste Grátis** e a **Logo** sejam as âncoras visuais imediatas de cada seção.

---

## 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────────────────┐
│                             App.tsx (Root)                              │
│   Estado Global: isTrialModalOpen | Configuração WhatsApp Atendimento   │
└───────────────┬─────────────────────────────────────────┬───────────────┘
                │                                         │
                ▼                                         ▼
┌───────────────────────────────────────┐ ┌───────────────────────────────┐
│      Identidade Visual & Marca        │ │   Fluxos de Conversão & UI    │
│ ───────────────────────────────────── │ │ ───────────────────────────── │
│ • Logo.tsx                            │ │ • Hero.tsx (Logo Destaque +   │
│   ├─ Asset Oficial:                   │ │   Player TV 4K Multicolor)    │
│   │  Logo_Premium_LeandroTV.png       │ │ • Pricing.tsx (1/2 Telas +    │
│   ├─ Modo Horizontal (Navbar)         │ │   Degradê Oficial nos Planos) │
│   └─ Modo Completo (Hero / Modal)     │ │ • ContentCatalog.tsx (Busca + │
│                                       │ │   Filtros com Acento Marca)   │
│ • Tokens Visuais:                     │ │ • DevicesGuide.tsx & Speed    │
│   ├─ Gradiente: Laranja→Rosa→Roxo→Azul│ │ • FreeTrialModal.tsx (Gerador │
│   └─ Canvas: Branco & Slate Neutro    │ │   de Código + WhatsApp Link)  │
└───────────────────────────────────────┘ └───────────────────────────────┘
```

### Mapeamento de Interatividade
- **Logo Component**: Renderiza a imagem oficial `/assets/aistudio/Logo_Premium_LeandroTV___1__61939e8e.png` com tratamento para fundo claro e fundo escuro, além de opção de layout empilhado (Hero) ou horizontal (Navbar).
- **Hero & Player Preview**: Alternância instantânea entre canais ao vivo (*Futebol 4K*, *Cinema*, *Séries*) com iluminação ambiente sincronizada com as cores da logo.
- **Planos & Modal de Teste Grátis**: Mantém todos os fluxos funcionais de cálculo de planos (1 ou 2 telas), validação de WhatsApp com máscara brasileira, geração de código único de teste de 6 horas e redirecionamento direto para o atendimento.
