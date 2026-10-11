import React from 'react';

interface ArjunLogoProps {
  variant?: 'light' | 'dark' | 'mono';
  showSubtitle?: boolean;
  className?: string;
  iconOnly?: boolean;
}

export const ArjunLogo: React.FC<ArjunLogoProps> = ({
  variant = 'dark',
  showSubtitle = true,
  className = '',
  iconOnly = false,
}) => {
  const isDarkCanvas = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Precision Brand Icon matching Google Stitch */}
      <div className="relative w-10 h-10 flex-shrink-0">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
          aria-hidden="true"
        >
          {/* Cobalt Rounded Square Base */}
          <rect
            width="48"
            height="48"
            rx="12"
            fill="#2449C6"
          />
          {/* Stylized Tooth & Smile Symbol */}
          <path
            d="M24 10C17.5 10 13 14.5 13 21C13 27 18 35 24 38C30 35 35 27 35 21C35 14.5 30.5 10 24 10Z"
            stroke="#FFFFFF"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner Smile Arc */}
          <path
            d="M19.5 20C21 21.5 27 21.5 28.5 20"
            stroke="#FFFFFF"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-display text-[17px] font-bold tracking-tight ${
              isDarkCanvas ? 'text-white' : 'text-[#151C28]'
            }`}
          >
            ARJUN DENTAL
          </span>
          {showSubtitle && (
            <span
              className={`font-sans text-[10px] font-semibold uppercase tracking-[0.16em] mt-1 ${
                isDarkCanvas ? 'text-[#DDE1FF]' : 'text-[#2449C6]'
              }`}
            >
              Cosmetic &amp; Implantology
            </span>
          )}
        </div>
      )}
    </div>
  );
};
