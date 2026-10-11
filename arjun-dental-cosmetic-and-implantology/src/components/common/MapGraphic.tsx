import React from 'react';
import { ExternalLink, Navigation, MapPin } from 'lucide-react';
import { CLINIC_CONFIG } from '../../config/clinic';

interface MapGraphicProps {
  className?: string;
}

export const MapGraphic: React.FC<MapGraphicProps> = ({ className = '' }) => {
  return (
    <div className={`relative rounded-xl overflow-hidden shadow-md border border-[#E2E6ED] ${className}`}>
      {/* Clean Architectural Map Canvas */}
      <div className="w-full h-[400px] bg-[#E8EDFF] relative overflow-hidden select-none">
        {/* Stylized Vector Grid of Kudasan, Gandhinagar */}
        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 600 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Base ground fill */}
          <rect width="600" height="400" fill="#F1F4F9" />

          {/* Urban Sector Zones */}
          <rect x="40" y="40" width="180" height="120" fill="#E2E8FA" rx="4" opacity="0.6" />
          <rect x="250" y="30" width="160" height="90" fill="#E2E8FA" rx="4" opacity="0.6" />
          <rect x="440" y="50" width="130" height="140" fill="#E2E8FA" rx="4" opacity="0.6" />
          <rect x="50" y="210" width="190" height="150" fill="#E2E8FA" rx="4" opacity="0.6" />
          <rect x="280" y="230" width="280" height="130" fill="#E2E8FA" rx="4" opacity="0.6" />

          {/* Green Belts & Open Spaces (Kudasan / GIFT City corridor) */}
          <path d="M 40 80 Q 110 50 160 110 L 140 140 L 50 130 Z" fill="#DDECE2" opacity="0.7" />
          <path d="M 450 250 Q 520 230 570 290 L 530 330 L 460 300 Z" fill="#DDECE2" opacity="0.7" />

          {/* Sabarmati River curve in distance */}
          <path
            d="M 580 0 Q 540 180 590 400"
            stroke="#C9DCFA"
            strokeWidth="32"
            strokeLinecap="round"
            fill="none"
          />

          {/* Secondary Street Network */}
          <line x1="30" y1="180" x2="570" y2="180" stroke="#FFFFFF" strokeWidth="12" />
          <line x1="240" y1="20" x2="240" y2="380" stroke="#FFFFFF" strokeWidth="12" />
          <line x1="430" y1="20" x2="430" y2="380" stroke="#FFFFFF" strokeWidth="10" />
          <line x1="30" y1="90" x2="570" y2="90" stroke="#FFFFFF" strokeWidth="8" />
          <line x1="30" y1="290" x2="570" y2="290" stroke="#FFFFFF" strokeWidth="8" />

          {/* Primary Arterial Roads (Kudasan High Street / Gandhinagar Highway) */}
          <path
            d="M 0 140 Q 240 160 600 130"
            stroke="#DDE1FF"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 330 0 L 330 400"
            stroke="#2449C6"
            strokeWidth="6"
            strokeDasharray="16 4"
            opacity="0.3"
          />

          {/* Road Labels */}
          <text x="60" y="176" fill="#727C8D" fontSize="11" fontFamily="Inter" fontWeight="600" letterSpacing="0.05em">
            KUDASAN MAIN ROAD
          </text>
          <text x="345" y="70" fill="#727C8D" fontSize="10" fontFamily="Inter" fontWeight="500">
            TO INFOCITY / PDPU
          </text>
          <text x="345" y="340" fill="#727C8D" fontSize="10" fontFamily="Inter" fontWeight="500">
            TO SG HIGHWAY
          </text>

          {/* Shivalay Residency Pulsing Pin Anchor */}
          <g transform="translate(240, 180)">
            {/* Radar Wave */}
            <circle cx="0" cy="0" r="28" fill="#2449C6" opacity="0.15">
              <animate attributeName="r" values="16;36;16" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0.05;0.3" dur="3s" repeatCount="indefinite" />
            </circle>
            {/* Core Glow */}
            <circle cx="0" cy="0" r="14" fill="#2449C6" opacity="0.25" />
            {/* Pin Symbol */}
            <circle cx="0" cy="-6" r="10" fill="#2449C6" />
            <path d="M -10 -6 L 0 10 L 10 -6 Z" fill="#2449C6" />
            <circle cx="0" cy="-6" r="4" fill="#FFFFFF" />
          </g>
        </svg>

        {/* Top subtle location badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded shadow-sm border border-[#E2E6ED] flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#2449C6]" />
          <span className="font-sans text-xs font-semibold text-[#151C28]">
            Kudasan, Gandhinagar 382419
          </span>
        </div>
      </div>

      {/* Inset Map Overlay Details Card matching Stitch design */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur p-4 rounded-lg shadow-md border border-[#E2E6ED] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#E8EDFF] flex items-center justify-center text-[#2449C6] flex-shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <div className="font-display text-[15px] text-[#151C28] font-bold">
              Shivalay Residency
            </div>
            <div className="font-sans text-xs text-[#727C8D]">
              34 First Floor · Kudasan, Gandhinagar
            </div>
          </div>
        </div>

        <a
          href={CLINIC_CONFIG.maps.destinationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#2449C6] hover:text-[#1B38A3] bg-[#F1F4F9] hover:bg-[#E8EDFF] px-3 py-2 rounded transition-colors focus-architectural"
          aria-label="Navigate to Arjun Dental on Google Maps"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Navigate</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
