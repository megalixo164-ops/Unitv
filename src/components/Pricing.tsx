import React from 'react';
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
} from 'lucide-react';

export const Pricing: React.FC = () => {
  const getPlanWhatsappUrl = (plan: Plan) => {
    const text = `Olá, vim pelo site da Leandro TV+ e quero assinar o *${plan.name}* no valor de R$ ${plan.price.toFixed(2).replace('.', ',')}.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="planos" className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
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

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-3 sm:mb-4 text-balance">
            Escolha Seu Plano Após Testar 3 Dias Grátis
          </h2>
          <p className="text-sm sm:text-lg text-slate-600">
            Ativação imediata pelo WhatsApp. Todos os planos liberam o aplicativo completo com canais em 4K, filmes e séries sem fidelidade.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {PLANS_1_SCREEN.map((plan) => {
            const isHighlight = plan.popular || plan.bestValue;

            return (
              <div
                key={plan.id}
                id={`plan-card-${plan.id}`}
                className={`relative rounded-3xl p-5 sm:p-7 flex flex-col justify-between transition-colors duration-150 ${
                  isHighlight
                    ? 'bg-white border-2 border-pink-500 shadow-lg shadow-pink-500/10'
                    : 'bg-white border border-slate-200/90 shadow-xs hover:border-purple-300'
                }`}
              >
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
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Acesso Completo · App UniTV
                      </p>
                    </div>
                    <img
                      src={UNITV_LOGO_SRC}
                      alt="UniTV"
                      width={32}
                      height={32}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 object-contain shrink-0"
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
                    className="block w-full py-2 px-3 text-xs text-slate-600 hover:text-pink-600 font-bold transition-colors text-center whitespace-nowrap"
                  >
                    Testar 3 dias grátis antes de assinar
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security, Payment & Guarantee Footer Banner */}
        <div className="mt-10 sm:mt-14 bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="flex items-center gap-3.5 pr-2">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">
                  3 Dias de Teste + Garantia Total
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
