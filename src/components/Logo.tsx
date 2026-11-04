import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // 'light' means placed on a light background, 'dark' means placed on a dark background
  size?: 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'horizontal' | 'stacked'; // 'horizontal' for navbar/compact, 'stacked' uses full vertical artwork
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  layout = 'horizontal',
  showSubtitle = true,
}) => {
  const logoSrc = '/assets/aistudio/Logo_Premium_LeandroTV___1__61939e8e.png';

  // Full Stacked Original Logo Showcase (ideal for Hero, Modal, and Brand Showcases)
  if (layout === 'stacked') {
    const stackedDimensions = {
      sm: 'w-28 h-28',
      md: 'w-40 h-40',
      lg: 'w-52 h-52 sm:w-60 sm:h-60',
      xl: 'w-64 h-64 sm:w-72 sm:h-72',
    };

    return (
      <div
        id="leandro-tv-logo-stacked"
        className={`inline-flex flex-col items-center justify-center select-none ${className}`}
      >
        <div
          className={`relative flex items-center justify-center overflow-hidden rounded-3xl ${
            variant === 'dark'
              ? 'bg-white p-3 shadow-xl shadow-fuchsia-500/15 ring-1 ring-white/20'
              : ''
          } ${stackedDimensions[size]}`}
        >
          <img
            src={logoSrc}
            alt="LeandroTV+ | TV Online Premium"
            referrerPolicy="no-referrer"
            className={`w-full h-full object-contain ${
              variant === 'light' ? 'mix-blend-multiply' : ''
            }`}
          />
        </div>
      </div>
    );
  }

  // Horizontal Layout (ideal for Top Bar Navigation and Compact Headers)
  const iconBoxSizes = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const subSizes = {
    sm: 'text-[8px] tracking-[0.22em]',
    md: 'text-[9.5px] tracking-[0.25em]',
    lg: 'text-[11px] tracking-[0.28em]',
    xl: 'text-[13px] tracking-[0.3em]',
  };

  const isLightBg = variant === 'light';

  return (
    <div
      id="leandro-tv-logo"
      className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}
    >
      {/* Official 3D Ribbon Play Emblem cropped from the official uploaded logo */}
      <div
        className={`relative flex items-center justify-center shrink-0 overflow-hidden rounded-xl ${
          !isLightBg
            ? 'bg-white shadow-md shadow-pink-500/20 ring-1 ring-white/20'
            : ''
        } ${iconBoxSizes[size]}`}
      >
        <img
          src={logoSrc}
          alt="LeandroTV+ Ícone"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-[50%_18%] scale-[1.65] ${
            isLightBg ? 'mix-blend-multiply' : ''
          }`}
        />
      </div>

      {/* Brand Text Lockup matching the exact rainbow gradient (Orange -> Red/Pink -> Purple -> Blue/Cyan) */}
      <div className="flex flex-col justify-center">
        <div
          className={`font-black leading-none flex items-baseline tracking-tight whitespace-nowrap ${textSizes[size]}`}
        >
          <span className="bg-gradient-to-r from-[#FF9900] via-[#FF1E56] via-50% to-[#6E28D9] bg-clip-text text-transparent font-extrabold">
            Leandro
          </span>
          <span className="bg-gradient-to-r from-[#5B21B6] via-[#0066FF] to-[#00C2FF] bg-clip-text text-transparent font-black">
            TV+
          </span>
        </div>

        {showSubtitle && (
          <div className="w-full flex items-center gap-1.5 mt-1">
            <span className="h-[1.5px] w-4 sm:w-5 rounded-full bg-gradient-to-r from-[#FF9900] via-[#FF1E56] to-[#9333EA]" />
            <span
              className={`font-bold uppercase whitespace-nowrap ${subSizes[size]} ${
                isLightBg ? 'text-[#2E1065]' : 'text-slate-200'
              }`}
            >
              TV ONLINE PREMIUM
            </span>
            <span className="h-[1.5px] w-4 sm:w-5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#00C2FF]" />
          </div>
        )}
      </div>
    </div>
  );
};
