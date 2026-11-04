import React, { useState } from 'react';
import { FAQ_ITEMS, WHATSAPP_TRIAL_URL } from '../data/mockData';
import { ChevronDown, MessageCircle } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] bg-clip-text text-transparent mb-2.5">
            Tire Suas Dúvidas
          </p>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-3 text-balance">
            Perguntas Frequentes Sobre o UniTV
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Confira como funcionam os 3 dias de teste grátis, a instalação e as recargas na Leandro TV+.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className={`rounded-2xl border transition-colors duration-150 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-50/90 border-pink-400'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-xs sm:text-base font-extrabold transition-colors ${
                      isOpen ? 'text-pink-600' : 'text-slate-900'
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-150 ${
                      isOpen
                        ? 'bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] text-white rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Card */}
        <div className="mt-10 bg-slate-50 border border-slate-200 rounded-3xl p-5 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h4 className="font-extrabold text-slate-900 text-sm sm:text-base mb-1">
              Quer pedir seu teste grátis de 3 dias ou tirar uma dúvida?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500">
              Chame agora no WhatsApp (47) 99273-3349 que liberamos na hora para você.
            </p>
          </div>

          <a
            href={WHATSAPP_TRIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto justify-center whitespace-nowrap shrink-0 px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-xs flex items-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Solicitar Teste no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
