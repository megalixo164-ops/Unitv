import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] bg-clip-text text-transparent mb-3">
            Opinião de Quem Já Usa
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-4 text-balance">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Mais de 12.000 famílias já trocaram a TV tradicional pela estabilidade e economia da Leandro TV+.
          </p>

          {/* Stats Bar */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto tabular-nums">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 text-center">
              <span className="text-2xl sm:text-3xl font-black text-orange-500 block">4.9/5</span>
              <span className="text-xs text-slate-500 font-medium">Nota de Satisfação</span>
            </div>
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 text-center">
              <span className="text-2xl sm:text-3xl font-black text-pink-600 block">+12.000</span>
              <span className="text-xs text-slate-500 font-medium">Assinantes Ativos</span>
            </div>
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 text-center">
              <span className="text-2xl sm:text-3xl font-black text-purple-600 block">99.8%</span>
              <span className="text-xs text-slate-500 font-medium">Estabilidade de Sinal</span>
            </div>
            <div className="bg-white border border-slate-200/80 rounded-2xl p-4 text-center">
              <span className="text-2xl sm:text-3xl font-black text-sky-600 block">&lt; 5 min</span>
              <span className="text-xs text-slate-500 font-medium">Tempo de Ativação</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-pink-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Stars Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs text-slate-400 ml-1 font-semibold">{t.date}</span>
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF8A00] via-[#FF1E56] to-[#7928CA] text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                    {t.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-xs">{t.name}</h4>
                    <span className="text-[11px] text-slate-500 block">
                      {t.city} · {t.state} · {t.plan}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
