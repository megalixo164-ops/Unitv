import React from 'react';
import {
  STREAMING_PLATFORMS,
  WHATSAPP_TRIAL_URL,
  UNITV_LOGO_SRC,
} from '../data/mockData';
import {
  Film,
  Tv,
  CheckCircle,
  MessageCircle,
} from 'lucide-react';

interface LiveTvChannelItem {
  id: string;
  name: string;
  logoSrc: string;
  category: string;
  highlights: string;
  quality: string;
  bgClass?: string;
}

const LIVE_CHANNELS_MARQUEE: LiveTvChannelItem[] = [
  {
    id: 'espn',
    name: 'ESPN',
    logoSrc: '/assets/logos/espn.svg',
    category: 'Esportes & Futebol',
    highlights: 'Libertadores · Premier League · NBA · NFL',
    quality: '4K & FHD',
    bgClass: 'bg-white border-slate-200',
  },
  {
    id: 'premiere',
    name: 'Premiere',
    logoSrc: '/assets/logos/premiere.svg',
    category: 'Futebol Brasileiro',
    highlights: 'Brasileirão Série A & B · Copa do Brasil',
    quality: '4K 60FPS',
    bgClass: 'bg-white border-slate-200',
  },
  {
    id: 'globo',
    name: 'TV Globo',
    logoSrc: '/assets/logos/globo.svg',
    category: 'Canal Aberto',
    highlights: 'Novelas · Jornal Nacional · Futebol Ao Vivo',
    quality: '4K UHD',
    bgClass: 'bg-white border-slate-200',
  },
  {
    id: 'sbt',
    name: 'SBT',
    logoSrc: '/assets/logos/sbt.svg',
    category: 'Canal Aberto',
    highlights: 'Champions League · Sul-Americana · Entretenimento',
    quality: 'Full HD',
    bgClass: 'bg-white border-slate-200',
  },
  {
    id: 'discovery',
    name: 'Discovery Channel',
    logoSrc: '/assets/logos/discovery.svg',
    category: 'Documentários & Aventura',
    highlights: 'Largados e Pelados · Sobrevivência · Ciência',
    quality: '4K UHD',
    bgClass: 'bg-white border-slate-200',
  },
  {
    id: 'sportv',
    name: 'SporTV',
    logoSrc: '/assets/logos/sportv.svg',
    category: 'Esportes 24 Horas',
    highlights: 'Jogos Ao Vivo · Seleção · Vôlei · Tá na Área',
    quality: '4K 60FPS',
    bgClass: 'bg-white border-slate-200',
  },
  {
    id: 'tnt',
    name: 'TNT Sports',
    logoSrc: '/assets/logos/tnt.svg',
    category: 'Champions & Cinema',
    highlights: 'UEFA Champions League · Paulistão · Filmes',
    quality: 'Full HD',
    bgClass: 'bg-white border-slate-200',
  },
];

const StreamingBrandLogo: React.FC<{ name: string }> = ({ name }) => {
  const lower = name.toLowerCase();

  let logoSrc = '/assets/logos/netflix.svg';
  if (lower.includes('netflix')) {
    logoSrc = '/assets/logos/netflix.svg';
  } else if (lower.includes('max') || lower.includes('hbo')) {
    logoSrc = '/assets/logos/max.svg';
  } else if (lower.includes('disney')) {
    logoSrc = '/assets/logos/disney.svg';
  } else if (lower.includes('prime')) {
    logoSrc = '/assets/logos/prime.svg';
  } else if (lower.includes('globoplay')) {
    logoSrc = '/assets/logos/globoplay.svg';
  } else if (lower.includes('crunchyroll')) {
    logoSrc = '/assets/logos/crunchyroll.svg';
  } else {
    logoSrc = '/assets/logos/appletv.svg';
  }

  return (
    <div className="w-12 h-11 rounded-xl bg-white border border-slate-200/90 p-1.5 flex items-center justify-center shrink-0 shadow-2xs">
      <img
        src={logoSrc}
        alt={name}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className="w-full h-full object-contain pointer-events-none"
      />
    </div>
  );
};

export const ContentCatalog: React.FC = () => {
  // Duplicate arrays for seamless infinite loop
  const infinitePlatforms = [...STREAMING_PLATFORMS, ...STREAMING_PLATFORMS];
  const infiniteChannels = [...LIVE_CHANNELS_MARQUEE, ...LIVE_CHANNELS_MARQUEE];

  return (
    <section
      id="catalogo"
      className="py-12 sm:py-16 bg-white border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <p className="text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] bg-clip-text text-transparent mb-2">
            Catálogo Completo no Aplicativo UniTV
          </p>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-3 text-balance">
            Mais de 80 Mil Conteúdos em um Só Aplicativo
          </h2>
          <p className="text-sm sm:text-lg text-slate-600">
            Canais ao vivo em 4K e Full HD, todos os campeonatos de futebol e os catálogos completos das maiores plataformas de streaming.
          </p>
        </div>

        {/* 1. Subheader above Streaming Infinite Marquee */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2">
            <Film className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 shrink-0" />
            <span>Plataformas de Streaming Já Inclusas no UniTV</span>
          </h3>
          <span className="text-xs font-bold text-purple-700">
            Liberadas nos 3 dias de teste grátis
          </span>
        </div>
      </div>

      {/* 1. Infinite Horizontal Marquee Track: Official Streaming Platforms */}
      <div className="relative w-full py-2 mb-7 sm:mb-9">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="animate-marquee-infinite gap-3.5 sm:gap-4 px-2">
          {infinitePlatforms.map((platform, index) => (
            <div
              key={`${platform.name}-${index}`}
              className="w-[265px] sm:w-[300px] shrink-0 bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 hover:border-pink-400 transition-colors select-none"
            >
              <div className="flex items-center justify-between gap-2.5 mb-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <StreamingBrandLogo name={platform.name} />
                  <h4 className="text-xs sm:text-sm font-black text-slate-950 truncate">
                    {platform.name}
                  </h4>
                </div>

                <span className="text-[10px] font-bold text-emerald-600 flex items-center gap-1 shrink-0">
                  <CheckCircle className="w-3 h-3" /> Incluso
                </span>
              </div>

              <p className="text-[11px] sm:text-xs text-slate-600 font-medium line-clamp-1 mb-1.5">
                {platform.description}
              </p>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-semibold truncate">
                {platform.popularTitles.join(' · ')}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Subheader above Live TV Channels Infinite Marquee */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-2">
            <Tv className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 shrink-0" />
            <span>Canais Ao Vivo em 4K & Full HD Inclusos</span>
          </h3>
          <span className="text-xs font-bold text-emerald-600">
            Esportes · Canais Abertos · Documentários
          </span>
        </div>
      </div>

      {/* 2. Infinite Horizontal Marquee Track: Official Live TV Channels */}
      <div className="relative w-full py-2 mb-8 sm:mb-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="animate-marquee-infinite-reverse gap-3.5 sm:gap-4 px-2">
          {infiniteChannels.map((channel, index) => (
            <div
              key={`${channel.id}-${index}`}
              className="w-[260px] sm:w-[290px] shrink-0 bg-slate-50 border border-slate-200/90 rounded-2xl p-3.5 sm:p-4 hover:border-orange-400 transition-colors select-none"
            >
              <div className="flex items-center justify-between gap-2.5 mb-2">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-12 h-11 rounded-xl border p-1.5 flex items-center justify-center shrink-0 shadow-2xs ${
                      channel.bgClass || 'bg-white border-slate-200'
                    }`}
                  >
                    <img
                      src={channel.logoSrc}
                      alt={`Logo oficial ${channel.name}`}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain pointer-events-none"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-black text-slate-950 truncate">
                      {channel.name}
                    </h4>
                    <span className="text-[10px] font-bold text-slate-500 block truncate">
                      {channel.category}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-extrabold text-purple-700 shrink-0">
                  {channel.quality}
                </span>
              </div>

              <p className="text-[10px] sm:text-[11px] text-slate-500 font-semibold truncate">
                {channel.highlights}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Catalog Bottom CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 rounded-3xl p-5 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
            <div className="w-12 h-12 rounded-2xl bg-white p-1.5 flex items-center justify-center shrink-0">
              <img
                src={UNITV_LOGO_SRC}
                alt="UniTV"
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg sm:text-2xl font-black mb-1 text-balance">
                Quer liberar o UniTV por 3 dias grátis agora mesmo?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                Chame no WhatsApp e receba seu acesso de teste em menos de 3 minutos.
              </p>
            </div>
          </div>

          <a
            href={WHATSAPP_TRIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto justify-center whitespace-nowrap shrink-0 px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] hover:opacity-95 shadow-md active:scale-98 transition-transform flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Solicitar 3 Dias Grátis</span>
          </a>
        </div>
      </div>
    </section>
  );
};
