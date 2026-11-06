import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../data/mockData';
import {
  Star,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MoveHorizontal,
} from 'lucide-react';

export const Testimonials: React.FC = () => {
  const total = TESTIMONIALS.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastMovedIndex, setLastMovedIndex] = useState<number | null>(null);
  const [swipeDir, setSwipeDir] = useState<-1 | 1>(-1);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  // Touch / Pointer gesture tracking refs for 60fps mobile swipe
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const startTimeRef = useRef(0);
  const axisLockedRef = useRef<'x' | 'y' | null>(null);
  const pointerDownRef = useRef(false);

  const goToNextCard = useCallback(
    (direction: -1 | 1 = -1) => {
      setSwipeDir(direction);
      setLastMovedIndex(activeIndex);
      setActiveIndex((prev) => (prev + 1) % total);
      setDragX(0);
      setIsDragging(false);
    },
    [activeIndex, total]
  );

  const goToPrevCard = useCallback(() => {
    setSwipeDir(1);
    setLastMovedIndex(null);
    setActiveIndex((prev) => (prev - 1 + total) % total);
    setDragX(0);
    setIsDragging(false);
  }, [total]);

  // Auto-advance every 6.5s when user is not touching/hovering
  useEffect(() => {
    if (isInteracting || isDragging) return;
    const timer = setInterval(() => {
      goToNextCard(-1);
    }, 6500);
    return () => clearInterval(timer);
  }, [isInteracting, isDragging, goToNextCard]);

  // Unified Touch Handlers (Mobile First, never blocks vertical scroll)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    startXRef.current = touch.clientX;
    startYRef.current = touch.clientY;
    startTimeRef.current = Date.now();
    axisLockedRef.current = null;
    setIsInteracting(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    const touch = e.touches[0];
    const dx = touch.clientX - startXRef.current;
    const dy = touch.clientY - startYRef.current;

    if (!axisLockedRef.current) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      axisLockedRef.current = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
    }

    // If user is scrolling vertically, do not intercept
    if (axisLockedRef.current === 'y') {
      return;
    }

    setIsDragging(true);
    // Dampen extreme drag distances
    const clampedDx = Math.max(-180, Math.min(180, dx));
    setDragX(clampedDx);
  };

  const handleTouchEnd = () => {
    if (axisLockedRef.current === 'x') {
      const elapsed = Math.max(1, Date.now() - startTimeRef.current);
      const velocity = Math.abs(dragX) / elapsed; // px per ms

      if (Math.abs(dragX) > 36 || (Math.abs(dragX) > 14 && velocity > 0.32)) {
        goToNextCard(dragX < 0 ? -1 : 1);
      } else {
        setDragX(0);
        setIsDragging(false);
      }
    } else {
      setDragX(0);
      setIsDragging(false);
    }
    axisLockedRef.current = null;
    setTimeout(() => setIsInteracting(false), 1200);
  };

  // Mouse Drag Handlers for Desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    pointerDownRef.current = true;
    startXRef.current = e.clientX;
    startTimeRef.current = Date.now();
    setIsInteracting(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!pointerDownRef.current) return;
    const dx = e.clientX - startXRef.current;
    if (Math.abs(dx) > 5) {
      setIsDragging(true);
      setDragX(Math.max(-180, Math.min(180, dx)));
    }
  };

  const handleMouseUp = () => {
    if (!pointerDownRef.current) return;
    pointerDownRef.current = false;

    if (Math.abs(dragX) > 40) {
      goToNextCard(dragX < 0 ? -1 : 1);
    } else {
      setDragX(0);
      setIsDragging(false);
    }
  };

  // Progress of current finger drag (0 to 1) to smoothly lift the underlying cards
  const dragProgress = Math.min(1, Math.abs(dragX) / 130);

  return (
    <section
      id="depoimentos"
      className="py-10 sm:py-14 bg-slate-50 border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact & Centered Section Header + Unified 4-Stat Strip */}
        <div className="text-center max-w-2xl mx-auto mb-7 sm:mb-9">
          <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] bg-clip-text text-transparent mb-2">
            Opinião Real de Quem Já Usa
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

        {/* 3D Stacked Card Deck Stage */}
        <div
          className="max-w-md mx-auto select-none"
          onMouseEnter={() => setIsInteracting(true)}
          onMouseLeave={() => {
            pointerDownRef.current = false;
            setDragX(0);
            setIsDragging(false);
            setIsInteracting(false);
          }}
        >
          {/* Swipe Instruction Indicator + Card Counter */}
          <div className="flex items-center justify-between px-1 text-[11px] font-bold text-slate-500 mb-3">
            <div className="flex items-center gap-1.5">
              <MoveHorizontal className="w-3.5 h-3.5 text-pink-600 animate-pulse" />
              <span>Deslize o card com o dedo para passar</span>
            </div>
            <span className="text-[11px] font-extrabold text-slate-700 bg-white border border-slate-200/90 px-2.5 py-0.5 rounded-full tabular-nums">
              {activeIndex + 1} / {total}
            </span>
          </div>

          {/* Stacked Cards Container (All cards strictly absolute so they stack cleanly) */}
          <div
            style={{ touchAction: 'pan-y' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            className="relative h-[248px] sm:h-[240px] w-full cursor-grab active:cursor-grabbing"
          >
            {TESTIMONIALS.map((card, idx) => {
              // 0 = front card, 1 = second, 2 = third, total - 1 = card just swiped to the back
              const stackPos = (idx - activeIndex + total) % total;
              const isFront = stackPos === 0;
              const isJustMovedToBack =
                idx === lastMovedIndex && stackPos === total - 1;

              // Only render top 3 cards in stack + the card currently animating to the back
              const isVisibleInDeck = stackPos <= 2 || isJustMovedToBack;

              const targetScale = isFront
                ? 1
                : stackPos === 1
                  ? 0.94 + dragProgress * 0.06
                  : stackPos === 2
                    ? 0.88 + dragProgress * 0.06
                    : 0.84;

              const targetY = isFront
                ? 0
                : stackPos === 1
                  ? 13 - dragProgress * 13
                  : stackPos === 2
                    ? 26 - dragProgress * 13
                    : 34;

              const targetOpacity = isFront
                ? 1
                : stackPos === 1
                  ? 0.9 + dragProgress * 0.1
                  : stackPos === 2
                    ? 0.55 + dragProgress * 0.3
                    : 0;

              const zIndex = isFront
                ? 40
                : stackPos === 1
                  ? 30
                  : stackPos === 2
                    ? 20
                    : isJustMovedToBack
                      ? 10
                      : 1;

              return (
                <motion.div
                  key={card.id}
                  style={{
                    zIndex,
                    visibility: isVisibleInDeck ? 'visible' : 'hidden',
                  }}
                  animate={
                    isFront
                      ? {
                          x: dragX,
                          y: 0,
                          scale: 1,
                          rotate: dragX * 0.045,
                          opacity: 1,
                        }
                      : isJustMovedToBack
                        ? {
                            // Peel out to the side, then tuck smoothly behind the deck
                            x: [swipeDir * 165, 0],
                            y: [6, targetY],
                            rotate: [swipeDir * 9, 0],
                            scale: [0.92, targetScale],
                            opacity: [0.75, 0],
                          }
                        : {
                            x: 0,
                            y: targetY,
                            scale: targetScale,
                            rotate: 0,
                            opacity: targetOpacity,
                          }
                  }
                  transition={
                    isFront && isDragging
                      ? { duration: 0 }
                      : isJustMovedToBack
                        ? { duration: 0.38, ease: [0.22, 1, 0.36, 1] }
                        : {
                            type: 'spring',
                            stiffness: 320,
                            damping: 28,
                            mass: 0.7,
                          }
                  }
                  className={`absolute inset-x-0 top-0 h-[214px] sm:h-[208px] rounded-3xl p-4 sm:p-5 bg-white flex flex-col justify-between transition-colors ${
                    isFront
                      ? 'border-2 border-pink-500/85 shadow-xl shadow-slate-900/10'
                      : 'border border-slate-200/90 shadow-md pointer-events-none'
                  }`}
                >
                  {/* Top Row: 5 Stars + Date + Topic Tag */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        {[...Array(card.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                        <span className="text-[11px] text-slate-400 ml-1 font-semibold">
                          {card.date}
                        </span>
                      </div>

                      {card.topicTag && (
                        <span className="text-[10px] font-extrabold text-purple-700 bg-purple-50 border border-purple-200/70 px-2 py-0.5 rounded-full whitespace-nowrap">
                          {card.topicTag}
                        </span>
                      )}
                    </div>

                    {/* Comment Text */}
                    <p className="text-xs sm:text-[13.5px] text-slate-700 font-medium leading-relaxed line-clamp-4">
                      "{card.comment}"
                    </p>
                  </div>

                  {/* Bottom Row: Real Brazilian Client Photo Avatar + Name + City + Plan */}
                  <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="relative shrink-0">
                        <picture>
                          <source
                            srcSet={card.avatar.replace(/\.jpg$/, '.webp')}
                            type="image/webp"
                          />
                          <img
                            src={card.avatar}
                            alt={`Foto de ${card.name}`}
                            width={42}
                            height={42}
                            loading="eager"
                            decoding="async"
                            className="w-10 h-10 sm:w-10.5 sm:h-10.5 rounded-full object-cover ring-2 ring-pink-500/25 pointer-events-none"
                          />
                        </picture>
                        <span
                          aria-hidden="true"
                          className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-white flex items-center justify-center"
                        />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1">
                          <h4 className="font-extrabold text-slate-950 text-xs sm:text-sm truncate">
                            {card.name}
                          </h4>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        </div>
                        <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium block truncate">
                          {card.city}, {card.state} · {card.plan}
                        </span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToNextCard(-1);
                      }}
                      className="text-[11px] font-extrabold text-pink-600 hover:text-pink-700 px-2.5 py-1 rounded-lg bg-pink-50 shrink-0 cursor-pointer"
                    >
                      Próximo →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls & 10-Card Progress Dots */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-1">
            <button
              type="button"
              onClick={goToPrevCard}
              aria-label="Depoimento anterior"
              className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-pink-400 active:scale-90 transition-all flex items-center justify-center shadow-2xs cursor-pointer shrink-0"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
            </button>

            <div className="flex items-center gap-1.5">
              {TESTIMONIALS.map((item, idx) => {
                const isCurrent = idx === activeIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      if (idx === activeIndex) return;
                      setSwipeDir(-1);
                      setLastMovedIndex(activeIndex);
                      setActiveIndex(idx);
                    }}
                    aria-label={`Ir para depoimento ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      isCurrent
                        ? 'w-6 bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA]'
                        : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => goToNextCard(-1)}
              aria-label="Próximo depoimento"
              className="w-9 h-9 rounded-full bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] text-white active:scale-90 transition-transform flex items-center justify-center shadow-2xs cursor-pointer shrink-0"
            >
              <ChevronRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
