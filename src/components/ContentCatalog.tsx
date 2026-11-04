import React from 'react';
import {
  STREAMING_PLATFORMS,
  WHATSAPP_TRIAL_URL,
  UNITV_LOGO_SRC,
} from '../data/mockData';
import {
  Film,
  CheckCircle,
  MessageCircle,
} from 'lucide-react';

const StreamingBrandLogo: React.FC<{ name: string }> = ({ name }) => {
  const lower = name.toLowerCase();

  // Official Netflix "N" Ribbon Icon
  if (lower.includes('netflix')) {
    return (
      <div className="w-11 h-11 rounded-xl bg-black flex items-center justify-center shrink-0 shadow-xs border border-slate-800">
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 2H9V22H5V2Z" fill="#B1060F" />
          <path d="M15 2H19V22H15V2Z" fill="#B1060F" />
          <path d="M5 2H9.2L19 22H14.8L5 2Z" fill="#E50914" />
        </svg>
      </div>
    );
  }

  // Official Max (HBO) Wordmark Logo
  if (lower.includes('max') || lower.includes('hbo')) {
    return (
      <div className="w-11 h-11 rounded-xl bg-[#002BE7] flex items-center justify-center shrink-0 shadow-xs">
        <svg viewBox="0 0 64 28" className="w-9 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text
            x="32"
            y="20"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="Outfit, Plus Jakarta Sans, sans-serif"
            fontWeight="900"
            fontSize="20"
            letterSpacing="-0.5"
          >
            max
          </text>
          <circle cx="35.5" cy="14.5" r="2.2" fill="#002BE7" />
          <circle cx="35.5" cy="14.5" r="1.1" fill="#FFFFFF" />
        </svg>
      </div>
    );
  }

  // Official Disney+ Logo with Shooting Star Arc
  if (lower.includes('disney')) {
    return (
      <div className="w-11 h-11 rounded-xl bg-[#040714] flex items-center justify-center shrink-0 shadow-xs border border-slate-800">
        <svg viewBox="0 0 68 36" className="w-9 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Disney+ Signature Arch */}
          <path
            d="M10 18C18 5 44 4 54 15"
            stroke="url(#disneyArc)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="disneyArc" x1="10" y1="18" x2="54" y2="15" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0063E5" stopOpacity="0.2" />
              <stop offset="60%" stopColor="#00B4FF" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
          <text
            x="33"
            y="26"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="800"
            fontSize="13.5"
            letterSpacing="-0.3"
          >
            Disney+
          </text>
        </svg>
      </div>
    );
  }

  // Official Amazon Prime Video Logo with Smile Arrow
  if (lower.includes('prime')) {
    return (
      <div className="w-11 h-11 rounded-xl bg-[#00A8E1] flex items-center justify-center shrink-0 shadow-xs">
        <svg viewBox="0 0 64 36" className="w-9 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text
            x="32"
            y="18"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontWeight="800"
            fontSize="14.5"
            letterSpacing="-0.3"
          >
            prime
          </text>
          {/* Signature Amazon Smile Arrow */}
          <path
            d="M16 24.5C24 29.5 40 29.5 48 24.5"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M44.5 23.5L49 24.2L47.2 28"
            stroke="#FFFFFF"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  // Official Globoplay Logo
  if (lower.includes('globoplay')) {
    return (
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FF073A] via-[#FF4D00] to-[#FF8A00] flex items-center justify-center shrink-0 shadow-xs">
        <svg viewBox="0 0 64 32" className="w-9 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text
            x="32"
            y="15"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="Outfit, sans-serif"
            fontWeight="900"
            fontSize="12.5"
            letterSpacing="-0.3"
          >
            globo
          </text>
          <text
            x="32"
            y="26"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="Outfit, sans-serif"
            fontWeight="700"
            fontSize="11.5"
            letterSpacing="-0.2"
          >
            play
          </text>
        </svg>
      </div>
    );
  }

  // Official Apple TV+ Logo
  return (
    <div className="w-11 h-11 rounded-xl bg-black flex items-center justify-center shrink-0 shadow-xs border border-slate-800">
      <svg viewBox="0 0 56 28" className="w-9 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Apple Icon */}
        <path
          d="M15.8 11.4C15.8 9.6 17.3 8.6 17.4 8.5C16.5 7.2 15.1 7 14.6 7C13.4 6.9 12.3 7.7 11.7 7.7C11.1 7.7 10.2 7 9.2 7C7.9 7 6.7 7.8 6.1 8.9C4.8 11.2 5.8 14.6 7 16.4C7.6 17.3 8.4 18.3 9.4 18.2C10.3 18.2 10.7 17.6 11.8 17.6C12.9 17.6 13.3 18.2 14.2 18.2C15.2 18.2 15.9 17.3 16.5 16.4C17.2 15.4 17.5 14.4 17.5 14.3C17.5 14.2 15.8 13.6 15.8 11.4ZM13.8 5.2C14.3 4.6 14.7 3.7 14.6 2.8C13.8 2.8 12.8 3.3 12.3 4C11.8 4.5 11.4 5.4 11.5 6.3C12.4 6.4 13.3 5.8 13.8 5.2Z"
          fill="#FFFFFF"
        />
        <text
          x="36"
          y="17.5"
          textAnchor="middle"
          fill="#FFFFFF"
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontWeight="800"
          fontSize="14.5"
          letterSpacing="-0.5"
        >
          tv+
        </text>
      </svg>
    </div>
  );
};

export const ContentCatalog: React.FC = () => {
  return (
    <section id="catalogo" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-xs font-extrabold uppercase tracking-widest bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] bg-clip-text text-transparent mb-2.5">
            Catálogo Completo no Aplicativo UniTV
          </p>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight mb-3 sm:mb-4 text-balance">
            Mais de 80 Mil Conteúdos em um Só Aplicativo
          </h2>
          <p className="text-sm sm:text-lg text-slate-600">
            Canais ao vivo em 4K e Full HD, todos os campeonatos de futebol e os catálogos completos das maiores plataformas de streaming.
          </p>
        </div>

        {/* Streaming Services Included Grid */}
        <div className="mb-10 sm:mb-12">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h3 className="text-base sm:text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <Film className="w-5 h-5 text-pink-600 shrink-0" />
              <span>Plataformas de Streaming Já Inclusas no UniTV</span>
            </h3>
            <span className="text-xs font-bold text-purple-700">
              Liberadas nos 3 dias de teste grátis
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {STREAMING_PLATFORMS.map((platform) => (
              <div
                key={platform.name}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 hover:border-pink-400 transition-colors"
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <StreamingBrandLogo name={platform.name} />
                    <h4 className="text-sm sm:text-base font-black text-slate-950 truncate">
                      {platform.name}
                    </h4>
                  </div>

                  <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1 shrink-0">
                    <CheckCircle className="w-3.5 h-3.5" /> 100% Incluso
                  </span>
                </div>

                <p className="text-xs text-slate-600 font-medium mb-2.5">
                  {platform.description}
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 font-semibold">
                  {platform.popularTitles.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Catalog Bottom CTA Banner */}
        <div className="bg-slate-950 rounded-3xl p-5 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
            <div className="w-12 h-12 rounded-2xl bg-white p-1.5 flex items-center justify-center shrink-0">
              <img
                src={UNITV_LOGO_SRC}
                alt="UniTV"
                width={40}
                height={40}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg sm:text-2xl font-black mb-1 text-balance">
                Quer liberar o UniTV por 3 dias grátis agora mesmo?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm">
                Chame no WhatsApp e receba seu acesso de teste em menos de 3 minutos.
              </p>
            </div>
          </div>

          <a
            href={WHATSAPP_TRIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto justify-center whitespace-nowrap shrink-0 px-6 py-3.5 rounded-xl font-extrabold text-xs sm:text-sm text-white bg-gradient-to-r from-[#FF8A00] via-[#FF1E56] to-[#7928CA] hover:opacity-95 shadow-md active:scale-98 transition-transform flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 shrink-0" />
            <span>Solicitar 3 Dias Grátis</span>
          </a>
        </div>
      </div>
    </section>
  );
};
