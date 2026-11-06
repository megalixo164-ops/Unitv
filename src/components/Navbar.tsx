import React, { useState } from 'react';
import { WHATSAPP_TRIAL_URL, UNITV_LOGO_SRC } from '../data/mockData';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Planos UniTV', href: '#planos' },
    { label: 'Canais & Filmes', href: '#catalogo' },
    { label: 'Aparelhos', href: '#aparelhos' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header
      id="main-navbar"
      className="sticky top-0 z-50 w-full bg-white/98 lg:bg-white/95 lg:backdrop-blur-xs border-b border-slate-200/80"
    >
      {/* Top vibrant brand gradient accent line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#FF9900] via-[#FF1E56] via-55% to-[#00A8FF]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Text Only (LeandroTV) */}
        <a
          href="#hero"
          className="flex items-center shrink-0 focus:outline-hidden select-none"
          aria-label="LeandroTV Início"
        >
          <span className="text-xl sm:text-2xl font-black tracking-tight leading-none whitespace-nowrap">
            <span className="bg-gradient-to-r from-[#FF9900] via-[#FF1E56] via-50% to-[#6E28D9] bg-clip-text text-transparent font-extrabold">
              Leandro
            </span>
            <span className="bg-gradient-to-r from-[#5B21B6] via-[#0066FF] to-[#00C2FF] bg-clip-text text-transparent font-black">
              TV
            </span>
          </span>
        </a>

        {/* Zone 2: 5 Concise Single-Line Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-700 hover:text-pink-600 text-sm font-semibold transition-colors duration-150 whitespace-nowrap shrink-0 py-1 hover:underline underline-offset-8 decoration-2 decoration-pink-500"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action Button (Direct WhatsApp 3-Day Trial) */}
        <div className="hidden sm:flex items-center shrink-0">
          <a
            id="nav-free-trial-btn"
            href={WHATSAPP_TRIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] via-50% to-[#7928CA] hover:opacity-95 shadow-sm active:scale-98 transition-all duration-150 whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-100" />
            <span>Solicitar Teste Grátis</span>
          </a>
        </div>

        {/* Mobile Quick Action + Menu Button */}
        <div className="flex sm:hidden items-center gap-2 shrink-0">
          <a
            href={WHATSAPP_TRIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-extrabold text-white bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] shadow-xs whitespace-nowrap"
          >
            <span>Teste Grátis</span>
          </a>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 focus:outline-hidden"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-3 shadow-lg"
        >
          {/* Compact UniTV badge inside mobile menu */}
          <div className="flex items-center gap-2.5 px-3 py-2 bg-slate-50 rounded-xl border border-slate-200/80">
            <img
              src={UNITV_LOGO_SRC}
              alt="UniTV"
              width={28}
              height={28}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-7 h-7 object-contain shrink-0"
            />
            <span className="text-xs font-bold text-slate-700">
              Revendedor Oficial UniTV · Teste Grátis
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-slate-800 hover:bg-pink-50 hover:text-pink-600 font-semibold rounded-xl text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100">
            <a
              id="mobile-nav-trial-btn"
              href={WHATSAPP_TRIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl font-extrabold text-sm text-white bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] via-50% to-[#7928CA] shadow-sm flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Solicitar Teste Grátis</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
