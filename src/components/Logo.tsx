import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'horizontal' | 'stacked';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md',
  layout = 'horizontal',
  showSubtitle = true,
}) => {
  const logoFallbackSrc = '/assets/aistudio/Logo_Premium_LeandroTV___1__61939e8e.png';
  const logoWebpSrc = '/assets/aistudio/logo-leandrotv.webp';

  if (layout === 'stacked') {
    const stackedDimensions = {
      sm: 'w-28 h-28',
      md: 'w-36 h-36 sm:w-40 sm:h-40',
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
              ? 'bg-white p-3 shadow-md ring-1 ring-white/20'
              : ''
          } ${stackedDimensions[size]}`}
        >
          <picture className="w-full h-full flex items-center justify-center">
            <source srcSet={logoWebpSrc} type="image/webp" />
            <img
              src={logoFallbackSrc}
              alt="LeandroTV+ | TV Online Premium"
              width={160}
              height={160}
              decoding="async"
              className={`w-full h-full object-contain ${
                variant === 'light' ? 'mix-blend-multiply' : ''
              }`}
            />
          </picture>
        </div>
      </div>
    );
  }

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
      <div
        className={`relative flex items-center justify-center shrink-0 overflow-hidden rounded-xl p-1 ${
          !isLightBg
            ? 'bg-white shadow-sm ring-1 ring-white/20'
            : ''
        } ${iconBoxSizes[size]}`}
      >
        <picture className="w-full h-full flex items-center justify-center">
          <source srcSet="/assets/aistudio/play-icon.webp" type="image/webp" />
          <img
            src="/assets/aistudio/play-icon.png"
            alt="LeandroTV+ Ícone"
            width={44}
            height={44}
            loading="lazy"
            decoding="async"
            className={`w-full h-full object-contain ${
              isLightBg ? 'mix-blend-multiply' : ''
            }`}
          />
        </picture>
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <div
          className={`font-black leading-none flex items-baseline justify-center tracking-tight whitespace-nowrap ${textSizes[size]}`}
        >
          <span className="bg-gradient-to-r from-[#FF9900] via-[#FF1E56] via-50% to-[#6E28D9] bg-clip-text text-transparent font-extrabold">
            Leandro
          </span>
          <span className="bg-gradient-to-r from-[#5B21B6] via-[#0066FF] to-[#00C2FF] bg-clip-text text-transparent font-black">
            TV+
          </span>
        </div>

        {showSubtitle && (
          <div className="w-full flex items-center justify-center gap-1.5 mt-1">
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
