import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from 'motion/react';
import { UNITV_LOGO_SRC, WHATSAPP_TRIAL_URL } from '../data/mockData';
import { MessageCircle, Download, Tv, Check, ArrowRight } from 'lucide-react';

interface InstallStep {
  number: string;
  title: string;
  subtitle: string;
  timeTag: string;
  icon: React.FC<{ className?: string }>;
  activeBg: string;
  activeBorder: string;
}

const INSTALL_STEPS: InstallStep[] = [
  {
    number: '01',
    title: 'Chame no WhatsApp',
    subtitle: 'Solicite seu acesso no (47) 99273-3349 com 1 clique.',
    timeTag: 'Imediato',
    icon: MessageCircle,
    activeBg: 'from-[#FF8A00] to-[#FF1E56]',
    activeBorder: 'border-orange-400/80 shadow-orange-500/10',
  },
  {
    number: '02',
    title: 'Baixe o App Oficial UniTV',
    subtitle: 'Enviamos o link direto e código Downloader para sua TV ou Box.',
    timeTag: '2 min',
    icon: Download,
    activeBg: 'from-[#FF1E56] to-[#7928CA]',
    activeBorder: 'border-pink-500/80 shadow-pink-500/10',
  },
  {
    number: '03',
    title: 'Solicite e Aproveite Seu Teste Grátis em 4K!',
    subtitle: 'Canais ao vivo, esportes, filmes e séries liberados na hora.',
    timeTag: 'Liberado',
    icon: Tv,
    activeBg: 'from-[#7928CA] to-[#0099FF]',
    activeBorder: 'border-purple-500/80 shadow-purple-500/10',
  },
];

export const DevicesGuide: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstIconRef = useRef<HTMLDivElement>(null);
  const lastIconRef = useRef<HTMLDivElement>(null);

  const [activeStep, setActiveStep] = useState<number>(1);
  const [railBounds, setRailBounds] = useState<{ top: number; height: number }>({
    top: 44,
    height: 190,
  });

  // Measure exact center of Step 01 icon and Step 03 (TV) icon so the line stops dead at the TV icon
  const updateRailBounds = useCallback(() => {
    const trackEl = trackRef.current;
    const firstEl = firstIconRef.current;
    const lastEl = lastIconRef.current;
    if (!trackEl || !firstEl || !lastEl) return;

    const trackRect = trackEl.getBoundingClientRect();
    const firstRect = firstEl.getBoundingClientRect();
    const lastRect = lastEl.getBoundingClientRect();

    const startY = firstRect.top - trackRect.top + firstRect.height / 2;
    const endY = lastRect.top - trackRect.top + lastRect.height / 2;

    setRailBounds({
      top: Math.max(0, Math.round(startY)),
      height: Math.max(40, Math.round(endY - startY)),
    });
  }, []);

  useEffect(() => {
    updateRailBounds();
    const observer = new ResizeObserver(updateRailBounds);
    if (trackRef.current) {
      observer.observe(trackRef.current);
    }
    window.addEventListener('resize', updateRailBounds);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateRailBounds);
    };
  }, [updateRailBounds]);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 80%', 'end 58%'],
  });

  // Overdamped spring so it never overshoots past 100% (the TV icon)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 38,
    mass: 0.6,
    restDelta: 0.001,
  });

  useMotionValueEvent(smoothProgress, 'change', (v) => {
    const clamped = Math.min(1, Math.max(0, v));
    if (clamped >= 0.88) {
      setActiveStep(3);
    } else if (clamped >= 0.42) {
      setActiveStep(2);
    } else {
      setActiveStep(1);
    }
  });

  // Strictly clamp between 0% and 100% so the line never descends past the TV icon
  const lineHeight = useTransform(smoothProgress, (v) => {
    const pct = Math.min(100, Math.max(0, v * 100));
    return `${pct}%`;
  });

  return (
    <section
      id="aparelhos"
      className="py-10 sm:py-14 bg-white border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Compact Section Header */}
        <div className="text-center mb-7 sm:mb-9">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-50 border border-slate-200/90 mb-2.5">
            <img
              src={UNITV_LOGO_SRC}
              alt="UniTV"
              width={18}
              height={18}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-4.5 h-4.5 object-contain"
            />
            <span className="text-[11px] font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] bg-clip-text text-transparent">
              Instalação Rápida UniTV
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight mb-1.5 text-balance">
            Como Funciona em 3 Passos Simples
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            TV Box, Fire Stick, Smart TV Android ou Celular — tudo pronto em menos de 3 minutos.
          </p>
        </div>

        {/* Scroll-Drawing Interactive Path Container */}
        <div ref={trackRef} className="relative pl-12 sm:pl-16">
          {/* Rail strictly bounded between center of Icon 01 and center of Icon 03 (TV) */}
          <div
            aria-hidden="true"
            style={{
              top: `${railBounds.top}px`,
              height: `${railBounds.height}px`,
            }}
            className="absolute left-5 sm:left-6.5 -translate-x-1/2 w-1.5 rounded-full bg-slate-100"
          >
            {/* Scroll-Animated Forming Gradient Path */}
            <motion.div
              style={{ height: lineHeight }}
              className="relative w-full rounded-full bg-gradient-to-b from-[#FF8A00] via-[#FF1E56] to-[#7928CA] shadow-[0_0_10px_rgba(255,30,86,0.35)]"
            >
              {/* Glowing Traveler Dot anchored at the exact bottom tip of the line */}
              <span className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#FF1E56] shadow-[0_0_10px_rgba(255,30,86,0.75)]" />
            </motion.div>
          </div>

          {/* 3 Compact Connected Steps */}
          <div className="space-y-3 sm:space-y-3.5">
            {INSTALL_STEPS.map((step, index) => {
              const stepNum = index + 1;
              const isReached = activeStep >= stepNum;
              const IconComponent = step.icon;

              return (
                <div key={step.number} className="relative">
                  {/* Checkpoint Node on the Path */}
                  <div
                    ref={
                      stepNum === 1
                        ? firstIconRef
                        : stepNum === 3
                          ? lastIconRef
                          : undefined
                    }
                    className={`absolute -left-12 sm:-left-16 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isReached
                        ? `bg-gradient-to-br ${step.activeBg} text-white shadow-md scale-100`
                        : 'bg-slate-100 border border-slate-200 text-slate-400 scale-95'
                    }`}
                  >
                    <IconComponent className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                    {isReached && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xs">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </span>
                    )}
                  </div>

                  {/* Horizontal Connector Branch from Spine to Card */}
                  <div
                    aria-hidden="true"
                    className={`absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 h-0.5 w-2 sm:w-5 transition-colors duration-300 ${
                      isReached ? 'bg-pink-500/60' : 'bg-slate-200'
                    }`}
                  />

                  {/* Compact Step Card */}
                  <div
                    className={`rounded-2xl p-3.5 sm:p-4 border transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 ${
                      isReached
                        ? `bg-white ${step.activeBorder} shadow-sm`
                        : 'bg-slate-50/70 border-slate-200/80 opacity-75'
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className={`text-[11px] font-black uppercase tracking-wider ${
                            isReached ? 'text-pink-600' : 'text-slate-400'
                          }`}
                        >
                          Passo {step.number}
                        </span>
                        <span className="text-slate-300" aria-hidden="true">
                          ·
                        </span>
                        <span className="text-[11px] font-bold text-slate-500">
                          {step.timeTag}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-extrabold text-slate-950 leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.subtitle}
                      </p>
                    </div>

                    {stepNum === 3 && (
                      <a
                        href={WHATSAPP_TRIAL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] hover:opacity-95 shadow-sm active:scale-98 transition-all whitespace-nowrap"
                      >
                        <span>Solicitar Teste Grátis</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
