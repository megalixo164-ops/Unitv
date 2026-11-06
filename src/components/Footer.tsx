import React from 'react';
import { Logo } from './Logo';
import { WHATSAPP_TRIAL_URL, UNITV_LOGO_SRC } from '../data/mockData';
import {
  ShieldCheck,
  Lock,
  MessageCircle,
  CreditCard,
  Sparkles,
  ArrowUp,
  CheckCircle2,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-14 pb-10 relative overflow-hidden"
    >
      {/* Top rainbow accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] via-50% to-[#00A8FF]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 border-b border-slate-800/80 text-center">
          {/* Brand Info (2 cols on lg) - Fully Centered */}
          <div className="lg:col-span-2 flex flex-col items-center text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Logo variant="dark" size="sm" layout="horizontal" showSubtitle={true} />
              <div className="h-9 w-9 rounded-xl bg-white p-1 flex items-center justify-center shrink-0">
                <img
                  src={UNITV_LOGO_SRC}
                  alt="UniTV"
                  width={28}
                  height={28}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mx-auto text-center">
              Revendedor oficial UniTV na Leandro TV+. Solicite seu teste grátis com mais de 100.000 conteúdos em 4K e Full HD, futebol ao vivo, filmes e séries sem travamentos.
            </p>

            <div className="pt-1 flex flex-wrap items-center justify-center gap-2.5">
              <a
                href={WHATSAPP_TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] hover:opacity-95 transition-opacity flex items-center gap-1.5 whitespace-nowrap"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                <span>Solicitar Teste Grátis</span>
              </a>

              <a
                href={WHATSAPP_TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 hover:bg-emerald-900/60 transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>(47) 99273-3349</span>
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-3.5">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-white transition-colors">
                  Planos UniTV
                </a>
              </li>
              <li>
                <a href="#catalogo" className="hover:text-white transition-colors">
                  Grade de Canais
                </a>
              </li>
              <li>
                <a href="#vantagens" className="hover:text-white transition-colors">
                  Diferenciais UniTV
                </a>
              </li>
              <li>
                <a href="#aparelhos" className="hover:text-white transition-colors">
                  Aparelhos Compatíveis
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Destaques de Conteúdo */}
          <div className="flex flex-col items-center">
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-3.5">
              Incluso no UniTV
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Premiere & Futebol Ao Vivo 4K</li>
              <li>Champions League & Libertadores</li>
              <li>Combate & UFC Ao Vivo</li>
              <li>Lançamentos de Cinema</li>
              <li>Séries Netflix, Max & Disney+</li>
              <li>Desenhos & Kids 24 Horas</li>
            </ul>
          </div>

          {/* Pagamento e Selos */}
          <div className="flex flex-col items-center">
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-3.5">
              Segurança & Ativação
            </h4>
            <div className="space-y-2.5 text-xs flex flex-col items-center">
              <div className="flex items-center justify-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Solicitar Teste Grátis</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sky-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Pix com recarga imediata</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-pink-400">
                <CreditCard className="w-4 h-4 shrink-0" />
                <span>Cartões de Crédito</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-amber-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Suporte Oficial via WhatsApp</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-300">
                <Lock className="w-4 h-4 shrink-0" />
                <span>Ambiente 100% Seguro</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} LeandroTV+ · Revendedor Oficial UniTV. Todos os direitos reservados.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
