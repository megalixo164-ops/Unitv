import React from 'react';
import { Logo } from './Logo';
import { WHATSAPP_TRIAL_URL, UNITV_LOGO_SRC } from '../data/mockData';
import {
  CheckCircle2,
  ArrowRight,
  Star,
  MessageCircle,
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative bg-white pt-4 pb-10 sm:pt-8 sm:pb-14 overflow-hidden border-b border-slate-200/80"
    >
      {/* Lightweight background gradient for ultra-fast mobile rendering */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-pink-50/40 via-orange-50/15 to-transparent -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Official Brand Logo Showcase at the top of the Hero */}
          <div className="flex justify-center mb-2.5 sm:mb-3.5">
            <Logo variant="light" size="md" layout="stacked" />
          </div>

          {/* Compact & Elegant UniTV Partner Highlight Strip (Centered Single-Line) */}
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 rounded-2xl bg-slate-50 border border-slate-200/90 mb-4 sm:mb-5 mx-auto max-w-full">
            <picture className="shrink-0 flex items-center">
              <source srcSet="/assets/aistudio/unitv-logo.webp" type="image/webp" />
              <img
                src={UNITV_LOGO_SRC}
                alt="UniTV App Oficial"
                width={22}
                height={22}
                decoding="async"
                className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0"
              />
            </picture>
            <p className="text-[11px] sm:text-sm leading-none text-center whitespace-nowrap">
              <span className="font-extrabold text-slate-900">
                Aplicativo Oficial <span className="text-[#1E40AF]">UniTV</span>
              </span>
              <span className="text-slate-400 mx-1 sm:mx-1.5" aria-hidden="true">
                ·
              </span>
              <span className="font-bold text-pink-600">
                Solicitar Teste Grátis
              </span>
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1] mb-4 sm:mb-5 text-balance">
            O Melhor do{' '}
            <span className="bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] via-50% to-[#0088FF] bg-clip-text text-transparent">
              UniTV na Sua Tela
            </span>
            : Canais, Filmes e Séries Sem Travar
          </h1>

          {/* Optimized Hero Showcase Image (Zero-CLS 16:9 Frame + Responsive WebP <picture>) */}
          <div className="max-w-2xl mx-auto mb-4 sm:mb-6">
            <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-md">
              <picture className="w-full h-full block">
                <source
                  srcSet="/assets/aistudio/hero-tv-640.webp 640w, /assets/aistudio/hero-tv-1024.webp 1024w"
                  sizes="(max-width: 672px) 92vw, 672px"
                  type="image/webp"
                />
                <img
                  src="/assets/aistudio/Sala_moderna_com_TV_UniTV_e_luz_azul_91a8c590.png"
                  alt="Aplicativo Oficial UniTV rodando na Smart TV em 4K"
                  width={1024}
                  height={576}
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
              </picture>
            </div>
          </div>

          {/* Subheading */}
          <p className="text-sm sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-7">
            Peça agora e <strong className="text-slate-900 font-bold">solicite seu teste grátis</strong>! Mais de 100.000 conteúdos com todos os canais de{' '}
            <strong className="text-slate-900 font-bold">futebol ao vivo</strong>, cinema e streamings em{' '}
            <strong className="text-slate-900 font-bold">4K e Full HD</strong> para TV Box, Fire Stick, Smart TV e Celular.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
            <a
              id="hero-trial-cta-button"
              href={WHATSAPP_TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 rounded-2xl text-xs sm:text-base font-extrabold text-white bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] via-50% to-[#7928CA] hover:opacity-95 shadow-md active:scale-98 transition-transform duration-150 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0" />
              <span>SOLICITAR TESTE GRÁTIS</span>
              <ArrowRight className="w-4 h-4 text-white shrink-0" />
            </a>

            <a
              id="hero-plans-cta-button"
              href="#planos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:py-4 rounded-2xl text-xs sm:text-base font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300/80 transition-colors duration-150 whitespace-nowrap"
            >
              <span>Ver Planos UniTV</span>
            </a>
          </div>

          {/* Compact Single-Line Rating & Trust Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-1">
              <div className="flex" aria-label="Avaliação 4.9 de 5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-slate-900 font-extrabold tabular-nums ml-0.5">4.9/5</span>
              <span className="text-slate-500 tabular-nums">(+2.400 clientes)</span>
            </div>
            <span className="text-slate-300" aria-hidden="true">
              ·
            </span>
            <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              Liberação imediata no WhatsApp
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
