import React from 'react';
import {
  Tv,
  Clock,
  Wifi,
  Lock,
  Headphones,
  Layers,
  Cpu,
  RefreshCw,
} from 'lucide-react';

export const Features: React.FC = () => {
  const featuresList = [
    {
      icon: Cpu,
      title: '01. Tecnologia Anti-Travamento (CDN)',
      description:
        'Nossa rede de servidores de alto desempenho possui balanceamento automático para garantir transmissão fluida e sem cortes, mesmo em dias de finais de campeonato.',
      accent: 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
    },
    {
      icon: Tv,
      title: '02. Qualidade 4K Ultra HD & 60 FPS',
      description:
        'Canais com máxima fidelidade visual e alta taxa de quadros por segundo, proporcionando a melhor nitidez em esportes ao vivo e filmes de ação.',
      accent: 'bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white',
    },
    {
      icon: RefreshCw,
      title: '03. Atualizações Automáticas Diárias',
      description:
        'Filmes recém-saídos do cinema e novos episódios de séries das principais plataformas são adicionados ao seu catálogo automaticamente todos os dias.',
      accent: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
    },
    {
      icon: Clock,
      title: '04. Ativação Rápida em 5 Minutos',
      description:
        'Sem burocracia e sem esperar dias por um técnico. Você solicita o acesso e recebe suas credenciais diretamente no seu WhatsApp para começar a assistir agora.',
      accent: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white',
    },
    {
      icon: Layers,
      title: '05. Guia de Programação (EPG)',
      description:
        'Consulte a programação completa do que está passando agora e dos próximos horários de cada canal diretamente na tela da sua televisão.',
      accent: 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
    },
    {
      icon: Wifi,
      title: '06. 100% Livre de Antenas e Fios',
      description:
        'Diga adeus a furos nas paredes e antenas no telhado. Basta conectar seu dispositivo ao Wi-Fi ou cabo de rede para ter acesso total.',
      accent: 'bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white',
    },
    {
      icon: Lock,
      title: '07. Controle Parental com Senha',
      description:
        'Mantenha seus filhos seguros. Bloqueie categorias adultas ou específicas com senha mestra personalizada com total privacidade.',
      accent: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
    },
    {
      icon: Headphones,
      title: '08. Suporte VIP via WhatsApp 7 Dias',
      description:
        'Nossa equipe brasileira está pronta para te auxiliar na instalação, tirar dúvidas ou configurar qualquer aparelho com atendimento humanizado.',
      accent: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white',
    },
  ];

  return (
    <section id="vantagens" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] bg-clip-text text-transparent mb-3">
            Exclusividade Leandro TV+
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4 text-balance">
            Por Que Somos a Escolha Número 1 no Brasil?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Combinamos infraestrutura de ponta e suporte humanizado para entregar a melhor experiência de TV online do mercado.
          </p>
        </div>

        {/* Features 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-pink-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-200 ${item.accent}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-base mb-2 group-hover:text-pink-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
