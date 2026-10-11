import React, { useState } from 'react';

interface OperatoryGraphicProps {
  className?: string;
}

export const OperatoryGraphic: React.FC<OperatoryGraphicProps> = ({ className = '' }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Architectural Offset Accent Plate */}
      <div 
        className="absolute -inset-2 bg-[#E8EDFF] rounded-xl -rotate-1 pointer-events-none transition-transform duration-500 group-hover:rotate-0" 
        aria-hidden="true" 
      />

      <div className="relative bg-white rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(32,38,51,0.08)] border border-[#E2E6ED]">
        {!imgError ? (
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
            alt="Interior view of modern clean dental operatory in Kudasan with ergonomic treatment chair, clinical workstation, overhead LED light, and natural window lighting"
            className="w-full h-[430px] object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
            onError={() => setImgError(true)}
            loading="eager"
          />
        ) : (
          /* High-Fidelity Architectural SVG Operatory Fallback */
          <div className="w-full h-[430px] bg-gradient-to-br from-[#F1F4F9] via-[#E8EDFF] to-[#DDE2F4] relative flex items-center justify-center p-6 overflow-hidden">
            <svg
              className="w-full h-full max-w-[500px]"
              viewBox="0 0 600 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Operatory Architecture */}
              <rect x="0" y="0" width="600" height="450" fill="#F8FAFC" />
              {/* Floor */}
              <path d="M0 320L600 320L600 450L0 450Z" fill="#E2E8F0" />
              {/* Large Picture Window */}
              <rect x="420" y="40" width="160" height="260" rx="4" fill="#EBF8FF" stroke="#CBD5E1" strokeWidth="3" />
              <line x1="500" y1="40" x2="500" y2="300" stroke="#CBD5E1" strokeWidth="2" />
              {/* Cabinets */}
              <rect x="180" y="80" width="220" height="220" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="2" rx="4" />
              <rect x="230" y="120" width="120" height="70" fill="#E9DCCB" rx="2" />
              {/* Wooden Consultation Desk */}
              <rect x="20" y="240" width="160" height="120" fill="#D4AF37" rx="3" opacity="0.8" />
              <rect x="40" y="220" width="60" height="30" rx="2" fill="#475569" />
              {/* Modern Dental Chair Outline */}
              <path
                d="M320 360 C320 280, 420 240, 450 200 C470 170, 490 200, 480 230 C460 280, 400 320, 360 360 Z"
                fill="#2449C6"
                opacity="0.85"
              />
              <rect x="360" y="360" width="80" height="20" rx="4" fill="#64748B" />
              {/* Overhead Surgical LED Arm */}
              <path d="M430 40 L430 110 L480 130" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
              <ellipse cx="480" cy="135" rx="25" ry="12" fill="#FDE047" opacity="0.7" />
            </svg>
          </div>
        )}

        {/* Floating Architectural Status Tag matching Stitch exactly */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur px-4 py-3 rounded-lg shadow-sm border border-[#E2E6ED] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2449C6]" aria-hidden="true" />
            <span className="font-sans text-[13px] text-[#151C28] font-semibold tracking-tight">
              Individualized Clinical Assessment
            </span>
          </div>
          <span className="font-sans text-[11px] text-[#727C8D] uppercase tracking-wider font-semibold">
            Kudasan
          </span>
        </div>
      </div>
    </div>
  );
};
