import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { TESTIMONIALS } from '../data/mockData';
import { Testimonial } from '../types';
import {
  Star,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Layers,
  Quote,
} from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [deck, setDeck] = useState<Testimonial[]>(TESTIMONIALS);
  const [exitDirection, setExitDirection] = useState<'left' | 'right'>('left');
  const [isPaused, setIsPaused] = useState(false);

  // Move top card to the last position in the deck (infinite loop)
  const handleNextCard = useCallback((dir: 'left' | 'right' = 'left') => {
    setExitDirection(dir);
    setDeck((prev) => {
      if (prev.length <= 1) return prev;
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  }, []);

  // Bring the last card in the deck back to the top
  const handlePrevCard = useCallback(() => {
    setExitDirection('right');
    setDeck((prev) => {
      if (prev.length <= 1) return prev;
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, prev.length - 1);
      return [last, ...rest];
    });
  }, []);

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const swipeThreshold = 45;
    const velocityThreshold = 260;

    if (
      info.offset.x < -swipeThreshold ||
      info.velocity.x < -velocityThreshold
    ) {
      handleNextCard('left');
    } else if (
      info.offset.x > swipeThreshold ||
      info.velocity.x > velocityThreshold
    ) {
      handleNextCard('right');
    }
  };

  // Gentle auto-shuffle every 6.5s unless user is interacting
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNextCard('left');
    }, 6500);
    return () => clearInterval(timer);
  }, [isPaused, handleNextCard]);

  const activeCard = deck[0];
  const activeOriginalIndex = TESTIMONIALS.findIndex(
    (t) => t.id === activeCard?.id
  );

  return (
    <section
      id="depoimentos"
      className="py-10 sm:py-14 bg-slate-50 border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact & Centered Section Header + Unified 4-Stat Strip */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-9">
          <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] bg-clip-text text-transparent mb-2">
            Opinião de Quem Já Usa
          </p>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-2 text-balance">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xs sm:text-base text-slate-600 max-w-xl mx-auto mb-5 leading-relaxed text-balance">
            Mais de 12.000 famílias já trocaram a TV tradicional pela estabilidade e economia da Leandro TV+.
          </p>

          {/* Compact Single-Row Centered 4-Stat Bar */}
          <div className="bg-white border border-slate-200/90 rounded-2xl py-2.5 sm:py-3.5 px-1 sm:px-3 grid grid-cols-4 divide-x divide-slate-200/80 shadow-2xs tabular-nums">
            <div className="px-1.5 sm:px-3 flex flex-col items-center justify-center text-center">
              <span className="text-base sm:text-2xl font-black text-orange-500 leading-tight">
                4.9/5
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-semibold leading-tight mt-0.5">
                Satisfação
              </span>
            </div>

            <div className="px-1.5 sm:px-3 flex flex-col items-center justify-center text-center">
              <span className="text-base sm:text-2xl font-black text-pink-600 leading-tight">
                +12.000
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-semibold leading-tight mt-0.5">
                Assinantes
              </span>
            </div>

            <div className="px-1.5 sm:px-3 flex flex-col items-center justify-center text-center">
              <span className="text-base sm:text-2xl font-black text-purple-600 leading-tight">
                99.8%
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-semibold leading-tight mt-0.5">
                Estabilidade
              </span>
            </div>

            <div className="px-1.5 sm:px-3 flex flex-col items-center justify-center text-center">
              <span className="text-base sm:text-2xl font-black text-sky-600 leading-tight whitespace-nowrap">
                &lt; 5 min
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-semibold leading-tight mt-0.5">
                Ativação
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Stacked Card Deck ("Passar Cartas em Loop") */}
        <div
          className="max-w-lg mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Subtle Swipe Hint */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-slate-500 mb-3">
            <Layers className="w-3.5 h-3.5 text-pink-600" />
            <span>Arraste a carta para o lado ou toque para passar</span>
          </div>

          {/* Deck Stage */}
          <div className="relative h-[250px] sm:h-[245px] w-full flex items-start justify-center pt-1">
            <AnimatePresence initial={false} mode="popLayout">
              {deck.slice(0, 3).map((card, stackIndex) => {
                const isTop = stackIndex === 0;
                const scale = 1 - stackIndex * 0.055;
                const translateY = stackIndex * 14;
                const zIndex = 30 - stackIndex * 10;
                const cardOpacity = 1 - stackIndex * 0.22;

                return (
                  <motion.div
                    key={card.id}
                    layout
                    style={{
                      zIndex,
                      touchAction: 'pan-y',
                    }}
                    initial={{
                      scale: 0.88,
                      y: 36,
                      opacity: 0,
                    }}
                    animate={{
                      scale,
                      y: translateY,
                      x: 0,
                      rotate: 0,
                      opacity: cardOpacity,
                    }}
                    exit={{
                      x: exitDirection === 'left' ? -260 : 260,
                      y: 10,
                      rotate: exitDirection === 'left' ? -10 : 10,
                      scale: 0.9,
                      opacity: 0,
                      transition: {
                        duration: 0.28,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 340,
                      damping: 28,
                      mass: 0.75,
                    }}
                    drag={isTop ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.85}
                    dragDirectionLock
                    onDragEnd={isTop ? handleDragEnd : undefined}
                    onClick={isTop ? () => handleNextCard('left') : undefined}
                    className={`w-full rounded-3xl p-5 sm:p-6 bg-white flex flex-col justify-between select-none ${
                      isTop
                        ? 'cursor-grab active:cursor-grabbing border-2 border-pink-500/80 shadow-xl shadow-slate-900/10'
                        : 'pointer-events-none border border-slate-200/90 shadow-md'
                    }`}
                  >
                    {/* Card Top Bar: Rating Stars + Verified Client Tag */}
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(card.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                          <span className="text-[11px] text-slate-400 ml-1.5 font-semibold">
                            {card.date}
                          </span>
                        </div>

                        <Quote className="w-5 h-5 text-pink-500/25 shrink-0" />
                      </div>

                      {/* Testimonial Quote */}
                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed line-clamp-3 mb-4">
                        "{card.comment}"
                      </p>
                    </div>

                    {/* Card Footer: Client Avatar + Name + Plan */}
                    <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FF8A00] via-[#FF1E56] to-[#7928CA] text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                          {card.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')
                            .slice(0, 2)}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-extrabold text-slate-950 text-xs sm:text-sm truncate">
                              {card.name}
                            </h4>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          </div>
                          <span className="text-[11px] text-slate-500 font-medium block truncate">
                            {card.city}, {card.state} · {card.plan}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-pink-600 shrink-0">
                        Passar →
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Deck Controls (Previous / Dots / Next Card) */}
          <div className="flex items-center justify-center gap-4 mt-2">
            <button
              type="button"
              onClick={handlePrevCard}
              aria-label="Carta anterior"
              className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-pink-400 active:scale-90 transition-all flex items-center justify-center shadow-2xs cursor-pointer"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
            </button>

            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((item, idx) => {
                const isCurrent = idx === activeOriginalIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      if (idx === activeOriginalIndex) return;
                      const reordered = [
                        ...TESTIMONIALS.slice(idx),
                        ...TESTIMONIALS.slice(0, idx),
                      ];
                      setExitDirection('left');
                      setDeck(reordered);
                    }}
                    aria-label={`Ver depoimento ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isCurrent
                        ? 'w-7 bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA]'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => handleNextCard('left')}
              aria-label="Passar próxima carta"
              className="w-9 h-9 rounded-full bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] text-white active:scale-90 transition-transform flex items-center justify-center shadow-2xs cursor-pointer"
            >
              <ChevronRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
