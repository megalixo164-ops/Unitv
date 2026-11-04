import React, { useState } from 'react';
import { Logo } from './Logo';
import { WHATSAPP_TRIAL_URL, UNITV_LOGO_SRC } from '../data/mockData';
import {
  Play,
  Sparkles,
  ShieldCheck,
  Tv,
  Zap,
  CheckCircle2,
  Volume2,
  Maximize2,
  ArrowRight,
  Star,
  MessageCircle,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeChannelPreview, setActiveChannelPreview] = useState<'sports' | 'cinema' | 'series'>('sports');
  const [isPlaying, setIsPlaying] = useState(true);

  const previewChannels = [
    {
      id: 'sports' as const,
      label: 'Futebol Ao Vivo',
      sub: 'Premiere · ESPN · SporTV 4K',
      quality: '4K 60FPS',
    },
    {
      id: 'cinema' as const,
      label: 'Filmes & Cinema',
      sub: 'HBO · Telecine · Lançamentos',
      quality: 'ULTRA HD',
    },
    {
      id: 'series' as const,
      label: 'Séries & Streaming',
      sub: 'Netflix · Max · Disney+ · Prime',
      quality: 'FULL HD',
    },
  ];

  return (
    <section
      id="hero"
      className="relative bg-white pt-5 pb-12 sm:pt-8 sm:pb-20 overflow-hidden border-b border-slate-200/80"
    >
      {/* Lightweight background gradient for ultra-fast mobile rendering */}
      <div className="absolute top-0 inset-x-0 h-72 bg-gradient-to-b from-pink-50/50 via-orange-50/20 to-transparent -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          {/* Official Brand Logo Showcase at the top of the Hero */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <Logo variant="light" size="md" layout="stacked" />
          </div>

          {/* Compact & Elegant UniTV Partner Highlight Strip */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-2xl bg-slate-50 border border-slate-200/90 mb-5">
            <img
              src={UNITV_LOGO_SRC}
              alt="UniTV App Oficial"
              width={28}
              height={28}
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-7 h-7 object-contain shrink-0"
            />
            <div className="text-left leading-tight">
              <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                Aplicativo Oficial <span className="text-[#1E40AF]">UniTV</span>
              </span>
              <span className="text-xs text-slate-400 mx-1.5" aria-hidden="true">
                ·
              </span>
              <span className="text-xs font-bold text-pink-600">
                3 Dias de Teste Grátis Liberados
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1] mb-4 sm:mb-6 text-balance">
            O Melhor do{' '}
            <span className="bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] via-50% to-[#0088FF] bg-clip-text text-transparent">
              UniTV na Sua Tela
            </span>
            : Canais, Filmes e Séries Sem Travar
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
            Experimente <strong className="text-slate-900 font-bold">3 dias totalmente grátis</strong>! Mais de 80.000 conteúdos com todos os canais de{' '}
            <strong className="text-slate-900 font-bold">futebol ao vivo</strong>, cinema e streamings em{' '}
            <strong className="text-slate-900 font-bold">4K e Full HD</strong> para TV Box, Fire Stick, Smart TV e Celular.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-7">
            <a
              id="hero-trial-cta-button"
              href={WHATSAPP_TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl text-sm sm:text-base font-extrabold text-white bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] via-50% to-[#7928CA] hover:opacity-95 shadow-lg shadow-pink-500/20 active:scale-98 transition-transform duration-150 whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5 text-white shrink-0" />
              <span>TESTAR 3 DIAS GRÁTIS NO WHATSAPP</span>
              <ArrowRight className="w-4 h-4 text-white shrink-0" />
            </a>

            <a
              id="hero-plans-cta-button"
              href="#planos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-sm sm:text-base font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300/80 transition-colors duration-150 whitespace-nowrap"
            >
              <span>Ver Planos UniTV</span>
            </a>
          </div>

          {/* Social Proof Strip */}
          <div className="flex flex-wrap items-center justify-center gap-y-1.5 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-900 font-bold tabular-nums">4.9/5</span>
              <span className="text-slate-500 tabular-nums">(+2.400 clientes)</span>
            </div>
            <span className="hidden sm:inline text-slate-300" aria-hidden="true">
              ·
            </span>
            <div className="flex items-center gap-1 text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>3 Dias Grátis Sem Compromisso</span>
            </div>
            <span className="hidden sm:inline text-slate-300" aria-hidden="true">
              ·
            </span>
            <div className="flex items-center gap-1 text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span>Liberação Imediata no WhatsApp</span>
            </div>
          </div>
        </div>

        {/* High-Definition Interactive TV Player Mockup */}
        <div id="interactive-tv-mockup" className="relative max-w-5xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl bg-slate-950 border border-slate-800 shadow-xl overflow-hidden">
            {/* Player Top Bar with Compact UniTV Logo */}
            <div className="bg-slate-900 border-b border-slate-800 px-3.5 sm:px-6 py-2.5 flex items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-md bg-white p-0.5 flex items-center justify-center shrink-0">
                  <img
                    src={UNITV_LOGO_SRC}
                    alt="UniTV"
                    width={20}
                    height={20}
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-extrabold text-white text-xs sm:text-sm">
                  UniTV App
                </span>
                <span className="text-slate-600" aria-hidden="true">
                  ·
                </span>
                <span className="font-bold bg-gradient-to-r from-[#FF9900] via-[#FF1E56] to-[#00C2FF] bg-clip-text text-transparent text-xs">
                  LeandroTV+
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300 font-medium">
                <span className="text-emerald-400 font-semibold tabular-nums">
                  Sinal Estável
                </span>
                <span className="text-slate-600" aria-hidden="true">
                  ·
                </span>
                <span className="text-sky-400 font-bold tabular-nums">4K UHD</span>
              </div>
            </div>

            {/* Interactive TV Screen Area */}
            <div className="relative bg-gradient-to-br from-slate-900 via-[#130d26] to-slate-950 flex flex-col justify-between p-4 sm:p-8 min-h-[260px] sm:min-h-[340px]">
              {/* Interactive Channel Switcher Tabs */}
              <div className="relative z-10 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {previewChannels.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveChannelPreview(item.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 ${
                      activeChannelPreview === item.id
                        ? 'bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] text-white shadow-sm'
                        : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/70'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] opacity-85 font-extrabold">
                      · {item.quality}
                    </span>
                  </button>
                ))}
              </div>

              {/* Screen Center Program Description */}
              <div className="relative z-10 my-auto py-5 sm:py-6">
                <div className="max-w-xl">
                  <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-amber-400 mb-1.5">
                    Aplicativo Oficial UniTV · Teste Grátis de 3 Dias
                  </p>
                  <h2 className="text-lg sm:text-3xl font-black text-white tracking-tight mb-2 text-balance">
                    {activeChannelPreview === 'sports' &&
                      'Todos os Jogos do Seu Time Ao Vivo em 4K Sem Travar'}
                    {activeChannelPreview === 'cinema' &&
                      'Os Maiores Lançamentos do Cinema Direto na Sua TV'}
                    {activeChannelPreview === 'series' &&
                      'Todas as Séries das Maiores Plataformas no Mesmo App'}
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                    {activeChannelPreview === 'sports' &&
                      'Premiere, SporTV, ESPN, TNT Sports, Conmebol TV, UFC e estaduais completos com estabilidade máxima.'}
                    {activeChannelPreview === 'cinema' &&
                      'Mais de 65.000 filmes sob demanda e canais HBO, Telecine e Megapix atualizados automaticamente.'}
                    {activeChannelPreview === 'series' &&
                      'Produções completas da Netflix, Max, Prime Video, Disney+, Globoplay e Apple TV+ já inclusas.'}
                  </p>
                </div>
              </div>

              {/* Player Control Bar */}
              <div className="relative z-10 bg-slate-900/90 rounded-xl p-2.5 sm:p-3 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    aria-label={isPlaying ? 'Pausar prévia' : 'Reproduzir prévia'}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] text-white flex items-center justify-center transition-transform active:scale-95 cursor-pointer shrink-0"
                  >
                    <Play className={`w-4 h-4 ${isPlaying ? 'fill-white' : ''}`} />
                  </button>
                  <div className="truncate">
                    <p className="text-white text-xs font-bold truncate">
                      {activeChannelPreview === 'sports' && 'Premiere Clubes 4K · UniTV Ao Vivo'}
                      {activeChannelPreview === 'cinema' && 'Telecine Premium UHD · UniTV Cinema'}
                      {activeChannelPreview === 'series' && 'Catálogo On-Demand 4K · UniTV Séries'}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 truncate">
                      Áudio Dublado & Legendado · Servidores CDN Anti-Freeze
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <a
                    href={WHATSAPP_TRIAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-slate-950 hover:bg-slate-100 text-xs font-extrabold transition-colors whitespace-nowrap"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-pink-600" />
                    <span>Testar 3 Dias</span>
                  </a>
                  <Volume2 className="hidden sm:block w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
                  <Maximize2 className="hidden sm:block w-4 h-4 text-slate-400 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI / Value Strip below Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12 max-w-5xl mx-auto">
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-100 text-orange-600 mx-auto flex items-center justify-center mb-2">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-slate-900 font-bold text-xs sm:text-sm">3 Dias de Teste Grátis</h3>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Liberado na hora no WhatsApp</p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-pink-100 text-pink-600 mx-auto flex items-center justify-center mb-2">
              <Tv className="w-5 h-5" />
            </div>
            <h3 className="text-slate-900 font-bold text-xs sm:text-sm">Qualidade 4K & FHD</h3>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Transmissão limpa sem travar</p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-100 text-purple-600 mx-auto flex items-center justify-center mb-2">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-slate-900 font-bold text-xs sm:text-sm tabular-nums">+80.000 Conteúdos</h3>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Canais, filmes e séries no UniTV</p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-sky-100 text-sky-600 mx-auto flex items-center justify-center mb-2">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-slate-900 font-bold text-xs sm:text-sm">Sem Fidelidade</h3>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">Recarregue quando quiser</p>
          </div>
        </div>
      </div>
    </section>
  );
};
