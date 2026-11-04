import React from 'react';
import { WHATSAPP_TRIAL_URL } from '../data/mockData';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end select-none">
      <a
        id="floating-whatsapp-btn"
        href={WHATSAPP_TRIAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/25 active:scale-95 transition-transform duration-150"
        aria-label="Solicitar 3 dias de teste grátis no WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-emerald-500 shrink-0" />
        <span className="text-xs font-extrabold tracking-wide whitespace-nowrap">
          Teste Grátis 3 Dias
        </span>
      </a>
    </div>
  );
};
