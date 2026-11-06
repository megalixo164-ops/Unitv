import React from 'react';
import { WHATSAPP_CLOSED_OS_URL } from '../data/mockData';
import {
  Tv,
  Clock,
  Wifi,
  Lock,
  Headphones,
  Layers,
  Cpu,
  RefreshCw,
  MessageCircle,
  CheckCircle2,
} from 'lucide-react';

export const Features: React.FC = () => {
  const featuresList = [
    {
      icon: Cpu,
      title: '01. Tecnologia Anti-Travamento (CDN)',
      description:
        'Servidores de alto desempenho com balanceamento automático para transmissão fluida e sem cortes.',
      accent: 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
    },
    {
      icon: Tv,
      title: '02. Qualidade 4K Ultra HD & 60 FPS',
      description:
        'Máxima fidelidade visual e alta taxa de quadros por segundo para esportes ao vivo e cinema.',
      accent: 'bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white',
    },
    {
      icon: RefreshCw,
      title: '03. Atualizações Automáticas Diárias',
      description:
        'Filmes recém-saídos do cinema e novos episódios de séries adicionados automaticamente.',
      accent: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
    },
    {
      icon: Clock,
      title: '04. Ativação Rápida em 5 Minutos',
      description:
        'Sem burocracia: solicite o acesso e receba suas credenciais direto no seu WhatsApp.',
      accent: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white',
    },
    {
      icon: Layers,
      title: '05. Guia de Programação (EPG)',
      description:
        'Consulte o que está passando agora e os próximos horários de cada canal direto na tela.',
      accent: 'bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
    },
    {
      icon: Wifi,
      title: '06. 100% Livre de Antenas e Fios',
      description:
        'Sem furos nas paredes nem antenas no telhado. Basta conectar seu aparelho ao Wi-Fi.',
      accent: 'bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white',
    },
    {
      icon: Lock,
      title: '07. Controle Parental com Senha',
      description:
        'Bloqueie categorias adultas ou específicas com senha PIN personalizada e total segurança.',
      accent: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
    },
    {
      icon: Headphones,
      title: '08. Suporte VIP via WhatsApp 7 Dias',
      description:
        'Equipe brasileira pronta para auxiliar na instalação e tirar dúvidas com atendimento humano.',
      accent: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white',
    },
  ];

  // Duplicate list for seamless infinite conveyor belt loop
  const infiniteFeatures = [...featuresList, ...featuresList];

  return (
    <section
      id="vantagens"
      className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dedicated Banner for Samsung, LG & Roku Smart TVs */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="relative rounded-3xl bg-white border-2 border-purple-500/25 shadow-md p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
            <div className="space-y-2.5 max-w-xl">
              <div className="inline-flex flex-wrap items-center justify-center md:justify-start gap-1.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-purple-100 text-purple-800">
                  <Tv className="w-3 h-3" />
                  Smart TV Samsung
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-pink-100 text-pink-800">
                  <Tv className="w-3 h-3" />
                  Smart TV LG
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-orange-100 text-orange-800">
                  <Tv className="w-3 h-3" />
                  Sistema Roku
                </span>
              </div>

              <h3 className="text-lg sm:text-2xl font-extrabold text-slate-950 tracking-tight text-balance">
                Você tem uma TV Samsung, LG ou Sistema Roku?
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                Nós também temos aplicativos exclusivos para o seu sistema operacional! Entre em contato agora mesmo para realizar um teste grátis direto na sua TV.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-0.5 text-[11px] font-bold text-emerald-700">
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  Instalação fácil sem precisar de aparelho extra
                </span>
              </div>
            </div>

            <div className="w-full md:w-auto shrink-0">
              <a
                href={WHATSAPP_CLOSED_OS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl text-xs sm:text-sm font-extrabold text-white bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] hover:opacity-95 shadow-md shadow-pink-500/15 active:scale-98 transition-transform whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                <span>Solicitar Teste para Minha TV</span>
              </a>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <p className="text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] bg-clip-text text-transparent mb-2">
            Exclusividade Leandro TV+
          </p>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-3 text-balance">
            Por Que Somos a Escolha Número 1 no Brasil?
          </h2>
          <p className="text-sm sm:text-lg text-slate-600">
            Combinamos infraestrutura de ponta e suporte humanizado para entregar a melhor experiência de TV online do mercado.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Conveyor Belt (Modo Esteira) */}
      <div className="relative w-full py-2">
        {/* Soft fade masks on left and right edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        <div className="animate-marquee-infinite">
          {infiniteFeatures.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="w-[270px] sm:w-[310px] shrink-0 bg-white border border-slate-200/90 rounded-2xl p-5 hover:border-pink-400 transition-colors group select-none"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200 ${item.accent}`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-xs sm:text-sm leading-snug group-hover:text-pink-600 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
