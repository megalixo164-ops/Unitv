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
  Star,
} from 'lucide-react';

interface SeriesReleaseItem {
  id: string;
  title: string;
  seasonBadge: string;
  genre: string;
  rating: string;
  quality: string;
  poster: string;
}

const FEATURED_SERIES_RELEASES: SeriesReleaseItem[] = [
  {
    id: 'stranger-things-5',
    title: 'Stranger Things',
    seasonBadge: '5ª Temp',
    genre: 'Ficção · Netflix',
    rating: '9.8',
    quality: '4K HDR',
    poster: '/assets/series/stranger-things-5.jpg',
  },
  {
    id: 'round-6-t3',
    title: 'Round 6',
    seasonBadge: '3ª Temp',
    genre: 'Suspense · Netflix',
    rating: '9.7',
    quality: '4K UHD',
    poster: '/assets/series/round-6-t3.png',
  },
  {
    id: 'the-last-of-us-2',
    title: 'The Last of Us',
    seasonBadge: '2ª Temp',
    genre: 'Ação · Max',
    rating: '9.8',
    quality: '4K HDR',
    poster: '/assets/series/the-last-of-us-2.png',
  },
  {
    id: 'casa-do-dragao-2',
    title: 'A Casa do Dragão',
    seasonBadge: '2ª Temp',
    genre: 'Épico · Max',
    rating: '9.6',
    quality: '4K UHD',
    poster: '/assets/series/casa-do-dragao-2.png',
  },
  {
    id: 'the-boys-4',
    title: 'The Boys',
    seasonBadge: 'Nova Temp',
    genre: 'Ação · Prime Video',
    rating: '9.6',
    quality: '4K HDR',
    poster: '/assets/series/the-boys-4.jpg',
  },
  {
    id: 'reacher-3',
    title: 'Reacher',
    seasonBadge: '3ª Temp',
    genre: 'Ação · Prime Video',
    rating: '9.5',
    quality: '4K UHD',
    poster: '/assets/series/reacher-3.jpg',
  },
  {
    id: 'cobra-kai-6',
    title: 'Cobra Kai',
    seasonBadge: '6ª Temp',
    genre: 'Ação · Netflix',
    rating: '9.4',
    quality: '4K UHD',
    poster: '/assets/series/cobra-kai-6.jpg',
  },
  {
    id: 'aneis-de-poder-2',
    title: 'Os Anéis de Poder',
    seasonBadge: '2ª Temp',
    genre: 'Fantasia · Prime Video',
    rating: '9.3',
    quality: '4K HDR',
    poster: '/assets/series/aneis-de-poder-2.jpg',
  },
  {
    id: 'the-bear-4',
    title: 'O Urso (The Bear)',
    seasonBadge: '4ª Temp',
    genre: 'Drama · Disney+',
    rating: '9.5',
    quality: '4K UHD',
    poster: '/assets/series/the-bear-4.png',
  },
  {
    id: 'white-lotus-3',
    title: 'The White Lotus',
    seasonBadge: '3ª Temp',
    genre: 'Drama · Max',
    rating: '9.4',
    quality: '4K HDR',
    poster: '/assets/series/white-lotus-3.png',
  },
];

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
    logoSrc: '/assets/logos/globo.svg?v=2',
    category: 'Canal Aberto',
    highlights: 'Novelas · Jornal Nacional · Futebol Ao Vivo',
    quality: '4K UHD',
    bgClass: 'bg-white border-slate-200',
  },
  {
    id: 'sbt',
    name: 'SBT',
    logoSrc: '/assets/logos/sbt.svg?v=2',
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
        width={40}
        height={36}
        loading="eager"
        decoding="async"
        className="w-full h-full object-contain pointer-events-none"
      />
    </div>
  );
};

export const ContentCatalog: React.FC = () => {
  // Duplicate arrays for seamless infinite loop
  const infiniteSeries = [...FEATURED_SERIES_RELEASES, ...FEATURED_SERIES_RELEASES];
  const infinitePlatforms = [...STREAMING_PLATFORMS, ...STREAMING_PLATFORMS];
  const infiniteChannels = [...LIVE_CHANNELS_MARQUEE, ...LIVE_CHANNELS_MARQUEE];

  return (
    <section
      id="catalogo"
      className="py-12 sm:py-16 bg-white border-b border-slate-200 overflow-hidden"
    >
      {/* ===================================================================
          10 SÉRIES LANÇAMENTOS E ATUALIZADAS MAIS PROCURADAS RODANDO NO TOPO
      =================================================================== */}
      <div className="mb-10 sm:mb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3.5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Tv className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 shrink-0" />
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900">
              Top 10 Séries Mais Procuradas & Novas Temporadas
            </h3>
          </div>
          <span className="text-[11px] sm:text-xs font-bold text-pink-600 whitespace-nowrap">
            Todas as Temporadas · 4K
          </span>
        </div>

        <div className="relative w-full py-1">
          {/* Soft fade masks on edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="animate-marquee-infinite">
            {infiniteSeries.map((serie, idx) => (
              <a
                key={`${serie.id}-${idx}`}
                href={WHATSAPP_TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-[144px] sm:w-[168px] aspect-[2/3] shrink-0 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-sm hover:shadow-lg transition-shadow select-none"
              >
                <picture className="w-full h-full block">
                  <source
                    srcSet={serie.poster.replace(/\.(jpg|jpeg|png)$/i, '.webp')}
                    type="image/webp"
                  />
                  <img
                    src={serie.poster}
                    alt={serie.title}
                    width={168}
                    height={252}
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                  />
                </picture>

                {/* Subtle contrast scrim at bottom for poster title & rating */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent flex flex-col justify-between p-2 sm:p-2.5">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[9px] font-semibold text-white/95 bg-black/75 px-1.5 py-0.5 rounded">
                      {serie.seasonBadge} · 4K
                    </span>
                    <span className="text-[9px] font-bold text-amber-400 bg-black/75 px-1.5 py-0.5 rounded flex items-center gap-0.5 tabular-nums">
                      <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                      {serie.rating}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-white leading-tight line-clamp-2">
                      {serie.title}
                    </h4>
                    <p className="text-[10px] text-slate-300 font-medium mt-0.5 truncate">
                      {serie.genre}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <p className="text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] bg-clip-text text-transparent mb-2">
            Catálogo Completo no Aplicativo UniTV
          </p>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-3 text-balance">
            Mais de 100 Mil Conteúdos em um Só Aplicativo
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
            Liberadas no teste grátis
          </span>
        </div>
      </div>

      {/* 1. Infinite Horizontal Marquee Track: Official Streaming Platforms */}
      <div className="relative w-full py-2 mb-7 sm:mb-9">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="animate-marquee-infinite">
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

        <div className="animate-marquee-infinite-reverse">
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
                      width={40}
                      height={36}
                      loading="eager"
                      decoding="async"
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
                Quer solicitar seu teste grátis do UniTV agora mesmo?
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
            <span>Solicitar Teste Grátis</span>
          </a>
        </div>
      </div>
    </section>
  );
};
