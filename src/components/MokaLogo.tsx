import React from 'react';

interface MokaLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'header';
  showTagline?: boolean;
}

export const MokaLogo: React.FC<MokaLogoProps> = ({
  className = '',
  variant = 'header',
  showTagline = true,
}) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Visual Cart & Leaf Emblem */}
      <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#881326] via-[#B91C1C] to-[#881326] shadow-md shadow-red-950/20 text-white p-2">
        {/* Shopping Cart outline with leaf in center */}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Cart handle and frame */}
          <path
            d="M6 10H12L17.2 28.5C17.5 29.5 18.5 30.2 19.6 30.2H36.4C37.5 30.2 38.5 29.5 38.8 28.5L42 17H14"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Cart wheels */}
          <circle cx="20" cy="38" r="3.5" fill="#FEF08A" stroke="white" strokeWidth="1.5" />
          <circle cx="36" cy="38" r="3.5" fill="#FEF08A" stroke="white" strokeWidth="1.5" />
          {/* Inner Leaf motif symbolizing freshness & terroir */}
          <path
            d="M27 15C27 15 33 16 34 22C34 22 28 23 27 15Z"
            fill="white"
          />
          <path
            d="M27 22C27 22 23 20 23 17C23 17 26 17 27 22Z"
            fill="#FEF08A"
          />
        </svg>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-white animate-pulse" />
      </div>

      {/* Brand Name & Tagline */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span
            className={`font-display text-2xl sm:text-3xl font-bold tracking-tight ${
              isLight ? 'text-white' : 'text-[#881326]'
            }`}
          >
            MOKA
          </span>
          <span
            className={`text-xs uppercase font-bold tracking-widest px-1.5 py-0.5 rounded ${
              isLight
                ? 'bg-white/20 text-white'
                : 'bg-[#881326]/10 text-[#881326]'
            }`}
          >
            SHOP
          </span>
        </div>
        {showTagline && (
          <span
            className={`text-[11px] font-medium tracking-tight mt-0.5 ${
              isLight ? 'text-stone-300' : 'text-[#5C3D2E]'
            }`}
          >
            Votre boutique, tout simplement
          </span>
        )}
      </div>
    </div>
  );
};
