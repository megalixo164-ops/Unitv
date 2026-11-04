import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import {
  ScrollProgressBar,
  ScrollReveal,
} from './components/ScrollytellingShowcase';
import { Pricing } from './components/Pricing';
import { ContentCatalog } from './components/ContentCatalog';
import { Features } from './components/Features';
import { DevicesGuide } from './components/DevicesGuide';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { WHATSAPP_TRIAL_URL, UNITV_LOGO_SRC } from './data/mockData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-pink-600 selection:text-white overflow-x-hidden">
      {/* Top Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with Official Logo, Compact UniTV Badge & Direct 3-Day Trial WhatsApp CTA */}
        <Hero />

        {/* Pricing Plans (UniTV Mensal, Trimestral, Semestral, Anual) */}
        <ScrollReveal>
          <Pricing />
        </ScrollReveal>

        {/* Streaming Platforms Catalog Included in UniTV */}
        <ScrollReveal>
          <ContentCatalog />
        </ScrollReveal>

        {/* Why Choose Leandro TV+ & UniTV */}
        <ScrollReveal>
          <Features />
        </ScrollReveal>

        {/* Supported Devices and Quick UniTV Installation Guide */}
        <ScrollReveal>
          <DevicesGuide />
        </ScrollReveal>

        {/* Customer Testimonials and Social Proof Rating */}
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>

        {/* High-Impact Pre-Footer Conversion Banner */}
        <ScrollReveal>
          <section className="py-12 sm:py-16 bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] via-50% to-[#7928CA] text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-white/95 text-slate-900 text-xs font-extrabold mb-4">
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
                <span>APP OFICIAL UNITV · 3 DIAS DE TESTE GRÁTIS</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3 sm:mb-4 text-white text-balance">
                Peça Agora Seus 3 Dias de Teste Grátis no WhatsApp!
              </h2>

              <p className="text-sm sm:text-lg text-white/90 max-w-2xl mx-auto mb-6 sm:mb-8 font-medium">
                Sem fidelidade e sem precisar cadastrar cartão. Clique no botão abaixo e receba seu acesso imediato pelo WhatsApp.
              </p>

              <div className="flex justify-center">
                <a
                  href={WHATSAPP_TRIAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl font-extrabold text-sm sm:text-base text-slate-950 bg-white hover:bg-slate-100 shadow-lg active:scale-98 transition-transform flex items-center justify-center gap-2.5 whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>SOLICITAR MEU TESTE GRÁTIS DE 3 DIAS</span>
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Frequently Asked Questions (Accordion) */}
        <ScrollReveal>
          <Faq />
        </ScrollReveal>
      </main>

      {/* Footer with Payment & Trust Badges */}
      <Footer />

      {/* Floating WhatsApp Contact Button */}
      <WhatsAppButton />
    </div>
  );
}
