import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import {
  PLANS_1_SCREEN,
  WHATSAPP_NUMBER,
  WHATSAPP_TRIAL_URL,
  UNITV_LOGO_SRC,
} from '../data/mockData';
import { Plan } from '../types';
import {
  Check,
  Sparkles,
  Flame,
  ShieldCheck,
  MessageCircle,
  Zap,
  Lock,
  ChevronLeft,
  ChevronRight,
  MoveHorizontal,
  Film,
  Star,
} from 'lucide-react';

interface MovieReleaseItem {
  id: string;
  title: string;
  genre: string;
  year: string;
  rating: string;
  quality: string;
  poster: string;
}

const FEATURED_MOVIES_RELEASES: MovieReleaseItem[] = [
  {
    id: 'vingadores-doomsday-2026',
    title: 'Vingadores: Doomsday',
    genre: 'Ação · Marvel Studios',
    year: '2026',
    rating: '9.8',
    quality: '4K IMAX',
    poster: '/assets/movies/vingadores-doomsday-2026.jpg',
  },
  {
    id: 'homem-aranha-2026',
    title: 'Homem-Aranha: Um Novo Dia',
    genre: 'Ação · Marvel Studios',
    year: '2026',
    rating: '9.7',
    quality: '4K UHD',
    poster: '/assets/movies/homem-aranha-2026.jpg',
  },
  {
    id: 'toy-story-5-2026',
    title: 'Toy Story 5',
    genre: 'Animação · Disney Pixar',
    year: '2026',
    rating: '9.6',
    quality: '4K HDR',
    poster: '/assets/movies/toy-story-5-2026.jpg',
  },
  {
    id: 'a-odisseia-2026',
    title: 'A Odisseia',
    genre: 'Épico · Christopher Nolan',
    year: '2026',
    rating: '9.7',
    quality: '4K IMAX',
    poster: '/assets/movies/a-odisseia-2026.jpg',
  },
  {
    id: 'ainda-estou-aqui',
    title: 'Ainda Estou Aqui',
    genre: 'Drama · Vencedor do Oscar',
    year: '2025',
    rating: '9.6',
    quality: '4K UHD',
    poster: '/assets/movies/ainda-estou-aqui.jpg',
  },
  {
    id: 'capitao-america-4',
    title: 'Capitão América: Admirável Mundo Novo',
    genre: 'Ação · Marvel Studios',
    year: '2025',
    rating: '9.1',
    quality: '4K HDR',
    poster: '/assets/movies/capitao-america-4.jpg',
  },
  {
    id: 'moana-2',
    title: 'Moana 2',
    genre: 'Animação · Família',
    year: '2025',
    rating: '9.3',
    quality: '4K UHD',
    poster: '/assets/movies/moana-2.jpg',
  },
  {
    id: 'gladiador-2',
    title: 'Gladiador II',
    genre: 'Ação · Épico',
    year: '2025',
    rating: '9.2',
    quality: '4K HDR',
    poster: '/assets/movies/gladiador-2.jpg',
  },
  {
    id: 'deadpool-wolverine',
    title: 'Deadpool & Wolverine',
    genre: 'Ação · Comédia',
    year: '2024',
    rating: '9.5',
    quality: '4K 60FPS',
    poster: '/assets/movies/deadpool-wolverine.jpg',
  },
  {
    id: 'divertida-mente-2',
    title: 'Divertida Mente 2',
    genre: 'Animação · Disney Pixar',
    year: '2024',
    rating: '9.4',
    quality: '4K UHD',
    poster: '/assets/movies/divertida-mente-2.jpg',
  },
  {
    id: 'duna-parte-2',
    title: 'Duna: Parte 2',
    genre: 'Ficção Científica · Aventura',
    year: '2024',
    rating: '9.5',
    quality: '4K HDR',
    poster: '/assets/movies/duna-parte-2.jpg',
  },
];

export const Pricing: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(1); // Trimestral (Mais Vendido)
  const [cardProgress, setCardProgress] = useState<number[]>([1, 0, 1, 2]); // Distance from center (0 = centered)

  // Duplicate 11 movies array for seamless infinite conveyor belt loop
  const infiniteMovies = [...FEATURED_MOVIES_RELEASES, ...FEATURED_MOVIES_RELEASES];

  const getPlanWhatsappUrl = (plan: Plan) => {
    const text = `Olá, vim pelo site da Leandro TV+ e quero assinar o *${plan.name}* no valor de R$ ${plan.price.toFixed(2).replace('.', ',')}.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  // Continuous 60fps interpolation of each card's distance from the viewport center
  const updateCarouselMetrics = useCallback(() => {
    const container = carouselRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>('[data-plan-card]');
    if (!cards.length) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIdx = 0;
    let minDistance = Infinity;
    const distances: number[] = [];

    cards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const rawDist = Math.abs(containerCenter - cardCenter);
      const normalized = Math.min(1.5, rawDist / (card.clientWidth || 300));
      distances.push(normalized);

      if (rawDist < minDistance) {
        minDistance = rawDist;
        closestIdx = idx;
      }
    });

    setCardProgress(distances);
    setActiveIndex((prev) => (prev !== closestIdx ? closestIdx : prev));
  }, []);

  const handleScroll = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(updateCarouselMetrics);
  };

  const scrollToCard = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
    const container = carouselRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>('[data-plan-card]');
    if (!cards[index]) return;

    const targetCard = cards[index];
    const scrollLeft =
      targetCard.offsetLeft -
      (container.clientWidth - targetCard.clientWidth) / 2;

    container.scrollTo({
      left: Math.max(0, scrollLeft),
      behavior,
    });
    setActiveIndex(index);
  }, []);

  const handlePrev = () => {
    const nextIdx = activeIndex <= 0 ? PLANS_1_SCREEN.length - 1 : activeIndex - 1;
    scrollToCard(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = activeIndex >= PLANS_1_SCREEN.length - 1 ? 0 : activeIndex + 1;
    scrollToCard(nextIdx);
  };

  // Center the "Mais Vendido" card on initial mount for mobile/tablet carousel
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.innerWidth < 1024) {
        scrollToCard(1, 'instant' as ScrollBehavior);
        updateCarouselMetrics();
      }
    }, 60);
    return () => {
      clearTimeout(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [scrollToCard, updateCarouselMetrics]);

  const renderPlanCardContent = (plan: Plan, isHighlight: boolean) => (
    <>
      {/* Popular or Best Value Kicker */}
      {plan.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#FF8A00] to-[#FF1E56] text-white text-xs font-black px-4 py-1 rounded-full shadow-xs flex items-center gap-1.5 tracking-wide whitespace-nowrap">
          <Flame className="w-3.5 h-3.5 fill-white" />
          <span>MAIS VENDIDO</span>
        </div>
      )}
      {plan.bestValue && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7928CA] to-[#0099FF] text-white text-xs font-black px-4 py-1 rounded-full shadow-xs flex items-center gap-1.5 tracking-wide whitespace-nowrap">
          <Sparkles className="w-3.5 h-3.5 text-sky-200" />
          <span>MAIOR ECONOMIA</span>
        </div>
      )}

      <div>
        {/* Plan Title & compact UniTV logo */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div>
            <h3 className="text-xl font-extrabold text-slate-900">
              {plan.name}
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Acesso Completo · App UniTV
            </p>
          </div>
          <img
            src={UNITV_LOGO_SRC}
            alt="UniTV"
            width={34}
            height={34}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-8.5 h-8.5 object-contain shrink-0 pointer-events-none"
          />
        </div>

        {/* Price Block */}
        <div className="my-5 pb-5 border-b border-slate-100">
          {plan.originalPrice && (
            <span className="text-xs text-slate-400 line-through font-medium block tabular-nums">
              De R$ {plan.originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
          <div className="flex items-baseline gap-1 tabular-nums">
            <span className="text-sm font-bold text-slate-600">R$</span>
            <span className="text-4xl sm:text-5xl font-black text-slate-950 tracking-tight">
              {Math.floor(plan.price)}
            </span>
            <span className="text-xl font-extrabold text-slate-950">
              ,{(plan.price % 1).toFixed(2).substring(2)}
            </span>
            <span className="text-xs font-semibold text-slate-500 ml-1">
              /{plan.period}
            </span>
          </div>

          {plan.id !== 'mensal-1' && (
            <p className="mt-1.5 text-xs font-bold text-purple-700 tabular-nums">
              Equivale a R$ {plan.perMonthPrice.toFixed(2).replace('.', ',')} por mês
            </p>
          )}
        </div>

        {/* Features List */}
        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium mb-7">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <div className="mt-0.5 w-4 h-4 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Bottom CTA Buttons */}
      <div className="space-y-2 pt-2">
        <a
          id={`btn-subscribe-${plan.id}`}
          href={getPlanWhatsappUrl(plan)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-opacity duration-150 whitespace-nowrap ${
            isHighlight
              ? 'bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] hover:opacity-95 text-white shadow-md shadow-pink-500/20'
              : 'bg-slate-900 hover:bg-slate-800 text-white'
          }`}
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>Assinar no WhatsApp</span>
        </a>

        <a
          href={WHATSAPP_TRIAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="block w-full py-2 px-3 text-xs text-slate-600 hover:text-pink-600 font-bold transition-colors text-center whitespace-nowrap"
        >
          Solicitar teste grátis antes de assinar
        </a>
      </div>
    </>
  );

  return (
    <section
      id="planos"
      className="py-12 sm:py-20 bg-slate-50 border-b border-slate-200 overflow-hidden"
    >
      {/* ===================================================================
          7 FILMES LANÇAMENTOS ATUALIZADOS RODANDO NA PARTE DE CIMA
      =================================================================== */}
      <div className="mb-10 sm:mb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3.5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600 shrink-0" />
            <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900">
              Sucessos de Cinema Já Liberados no UniTV
            </h3>
          </div>
          <span className="text-[11px] sm:text-xs font-bold text-purple-700 whitespace-nowrap">
            Dublado & Legendado · 4K
          </span>
        </div>

        <div className="relative w-full py-1">
          {/* Soft fade masks on edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-20 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-20 bg-gradient-to-l from-slate-50 to-transparent z-10" />

          <div className="animate-marquee-infinite">
            {infiniteMovies.map((movie, idx) => (
              <a
                key={`${movie.id}-${idx}`}
                href={WHATSAPP_TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-[144px] sm:w-[168px] aspect-[2/3] shrink-0 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-sm hover:shadow-lg transition-shadow select-none"
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
                />

                {/* Subtle contrast scrim at bottom for poster title & rating */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent flex flex-col justify-between p-2 sm:p-2.5">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[9px] font-semibold text-white/90 bg-black/55 backdrop-blur-xs px-1.5 py-0.5 rounded">
                      {movie.year === '2026' ? '2026 · 4K' : movie.quality}
                    </span>
                    <span className="text-[9px] font-bold text-amber-400 bg-black/55 backdrop-blur-xs px-1.5 py-0.5 rounded flex items-center gap-0.5 tabular-nums">
                      <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                      {movie.rating}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-extrabold text-white leading-tight line-clamp-2">
                      {movie.title}
                    </h4>
                    <p className="text-[10px] text-slate-300 font-medium mt-0.5 truncate">
                      {movie.genre}
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
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          {/* Small UniTV emblem */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white border border-slate-200/90 mb-3">
            <img
              src={UNITV_LOGO_SRC}
              alt="UniTV"
              width={20}
              height={20}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-5 h-5 object-contain"
            />
            <span className="text-xs font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] bg-clip-text text-transparent">
              Planos e Recargas Oficiais UniTV
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-3 text-balance">
            Escolha Seu Plano ou Solicite um Teste Grátis
          </h2>
          <p className="text-sm sm:text-lg text-slate-600">
            Ativação imediata pelo WhatsApp. Todos os planos liberam o aplicativo completo com canais em 4K, filmes e séries sem fidelidade.
          </p>
        </div>

        {/* ===================================================================
            1. VERSÃO MOBILE & TABLET (CARROSSEL COM FÍSICA DE TOQUE SUAVE)
            Aparece em telas menores que 1024px (lg:hidden)
        =================================================================== */}
        <div className="lg:hidden">
          {/* Quick Plan Selector Tabs + Animated Finger Swipe Indicator */}
          <div className="flex flex-col items-center gap-3 mb-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200/90 text-slate-600 text-xs font-bold shadow-2xs">
              <motion.span
                animate={{ x: [-3, 3, -3] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                className="text-pink-600 flex items-center"
              >
                <MoveHorizontal className="w-3.5 h-3.5" />
              </motion.span>
              <span>Deslize suavemente para os lados</span>
            </div>

            <div className="flex items-center justify-center gap-1.5 w-full overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {PLANS_1_SCREEN.map((plan, idx) => {
                const isSelected = activeIndex === idx;
                return (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => scrollToCard(idx)}
                    className={`relative px-3.5 py-2 rounded-xl text-xs font-extrabold transition-colors duration-200 shrink-0 cursor-pointer ${
                      isSelected
                        ? 'text-white'
                        : 'bg-white text-slate-600 border border-slate-200/90'
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="mobilePlanPill"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] -z-0 shadow-xs"
                      />
                    )}
                    <span className="relative z-10">
                      {plan.name.replace('UniTV ', '')}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Native Touch-Swipe Horizontal Carousel Track with Vertical Scroll Passthrough */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            style={{ touchAction: 'pan-x pan-y' }}
            className="flex items-stretch gap-3.5 overflow-x-auto overflow-y-visible snap-x snap-mandatory pt-6 pb-7 px-[9vw] -mx-4 overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {PLANS_1_SCREEN.map((plan, idx) => {
              const isHighlight = plan.popular || plan.bestValue;
              const isCurrent = activeIndex === idx;
              const dist = cardProgress[idx] ?? (isCurrent ? 0 : 1);

              const scale = 1 - Math.min(dist, 1) * 0.055;
              const opacity = 1 - Math.min(dist, 1) * 0.22;
              const translateY = Math.min(dist, 1) * 6;

              return (
                <div
                  key={plan.id}
                  data-plan-card
                  onClick={() => scrollToCard(idx)}
                  style={{
                    touchAction: 'pan-x pan-y',
                    transform: `translate3d(0, ${translateY.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`,
                    opacity: Number(opacity.toFixed(2)),
                    transition: 'transform 140ms cubic-bezier(0.22, 1, 0.36, 1), opacity 140ms ease-out, border-color 200ms ease, box-shadow 200ms ease',
                    willChange: 'transform, opacity',
                  }}
                  className={`snap-center shrink-0 w-[82vw] max-w-[318px] relative rounded-3xl p-6 flex flex-col justify-between select-none ${
                    isCurrent
                      ? isHighlight
                        ? 'bg-white border-2 border-pink-500 shadow-xl shadow-pink-500/15'
                        : 'bg-white border-2 border-purple-500 shadow-xl shadow-purple-500/10'
                      : 'bg-white border border-slate-200/90 shadow-xs'
                  }`}
                >
                  {renderPlanCardContent(plan, Boolean(isHighlight || isCurrent))}
                </div>
              );
            })}
          </div>

          {/* Mobile Carousel Bottom Controls (Arrows + Spring Progress Dots) */}
          <div className="flex items-center justify-center gap-4 mt-0.5 mb-4">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Plano anterior"
              className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 active:scale-90 transition-transform flex items-center justify-center shadow-2xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {PLANS_1_SCREEN.map((plan, idx) => (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => scrollToCard(idx)}
                  aria-label={`Ir para ${plan.name}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ease-out ${
                    activeIndex === idx
                      ? 'w-8 bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA]'
                      : 'w-2.5 bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Próximo plano"
              className="w-9 h-9 rounded-full bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] text-white active:scale-90 transition-transform flex items-center justify-center shadow-2xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ===================================================================
            2. VERSÃO PARA PC / DESKTOP (4 COLUNAS LADO A LADO)
            Aparece em telas de computador a partir de 1024px (hidden lg:grid)
        =================================================================== */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 items-stretch pt-4">
          {PLANS_1_SCREEN.map((plan) => {
            const isHighlight = plan.popular || plan.bestValue;

            return (
              <div
                key={plan.id}
                id={`pc-plan-card-${plan.id}`}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 ${
                  isHighlight
                    ? 'bg-white border-2 border-pink-500 shadow-xl shadow-pink-500/10'
                    : 'bg-white border border-slate-200/90 shadow-xs hover:border-purple-300 hover:shadow-md'
                }`}
              >
                {renderPlanCardContent(plan, Boolean(isHighlight))}
              </div>
            );
          })}
        </div>

        {/* Security, Payment & Guarantee Footer Banner */}
        <div className="mt-8 sm:mt-14 bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="flex items-center gap-3.5 pr-2">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">
                  Teste Grátis + Garantia Total
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Comprove a qualidade no seu aparelho antes de pagar qualquer valor.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:px-6">
              <div className="w-11 h-11 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">
                  Recarga e Ativação na Hora via Pix
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Pagamento aprovado em segundos e liberação imediata no WhatsApp.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-4 md:pt-0 md:pl-6">
              <div className="w-11 h-11 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">
                  Atendimento Humano Dedicado
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Suporte completo passo a passo para instalar no seu aparelho.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
