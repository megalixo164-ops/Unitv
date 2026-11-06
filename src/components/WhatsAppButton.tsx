import React from 'react';
import { WHATSAPP_TRIAL_URL } from '../data/mockData';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 select-none">
      <a
        id="floating-whatsapp-btn"
        href={WHATSAPP_TRIAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="Solicitar Teste Grátis no WhatsApp"
        aria-label="Solicitar teste grátis no WhatsApp"
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/30 active:scale-95 transition-transform duration-150 flex items-center justify-center"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
      </a>
    </div>
  );
};
