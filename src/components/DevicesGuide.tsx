import React from 'react';
import { UNITV_LOGO_SRC } from '../data/mockData';

export const DevicesGuide: React.FC = () => {
  return (
    <section id="aparelhos" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-50 border border-slate-200/90 mb-3">
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
              Instalação Rápida UniTV
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-3 sm:mb-4 text-balance">
            Assista no Seu Aparelho Favorito
          </h2>
          <p className="text-sm sm:text-lg text-slate-600">
            O aplicativo UniTV é super leve, rápido e fácil de instalar na sua TV Box, Fire Stick, Smart TV Android ou Celular.
          </p>
        </div>

        {/* 3-Step Setup Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF8A00] to-[#FF1E56] text-white font-black text-xs flex items-center justify-center mb-3.5">
              01
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mb-1">
              Chame no WhatsApp
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Clique no botão de teste grátis para falar conosco no WhatsApp (47) 99273-3349.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF1E56] to-[#7928CA] text-white font-black text-xs flex items-center justify-center mb-3.5">
              02
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mb-1">
              Instale o App UniTV
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Enviamos o aplicativo oficial UniTV e te ajudamos a instalar em menos de 3 minutos.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7928CA] to-[#0099FF] text-white font-black text-xs flex items-center justify-center mb-3.5">
              03
            </div>
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base mb-1">
              Aproveite 3 Dias Grátis!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Curta 3 dias inteiros de canais em 4K, futebol ao vivo, filmes e séries sem pagar nada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
