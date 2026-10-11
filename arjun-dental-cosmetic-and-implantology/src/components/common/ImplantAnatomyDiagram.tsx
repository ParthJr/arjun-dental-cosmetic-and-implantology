import React from 'react';

export const ImplantAnatomyDiagram: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Header bar */}
      <div className="w-full flex items-center justify-between pb-3 border-b border-[#E2E6ED]">
        <span className="font-display text-[13px] font-bold text-[#151C28] tracking-wider uppercase">
          Anatomy of an Implant
        </span>
        <span className="px-2 py-0.5 bg-[#DDE1FF] text-[#0030A6] rounded text-[11px] font-semibold tracking-wide">
          Medical Spec
        </span>
      </div>

      {/* Vector Anatomy Diagram */}
      <div className="py-6 w-full flex items-center justify-center">
        <svg
          className="w-full max-w-[300px] h-auto drop-shadow-sm"
          fill="none"
          viewBox="0 0 340 380"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Dental implant anatomical diagram illustrating porcelain crown, custom abutment, gingiva margin, titanium fixture, and alveolar bone"
          role="img"
        >
          {/* Subtle grid background lines for architectural feel */}
          <line x1="30" y1="120" x2="310" y2="120" stroke="#E2E6ED" strokeWidth="0.8" strokeDasharray="4 4" />
          <line x1="30" y1="160" x2="310" y2="160" stroke="#E2E6ED" strokeWidth="0.8" strokeDasharray="4 4" />

          {/* Jawbone Area Indication (Alveolar Bone) */}
          <rect x="55" y="165" width="230" height="155" rx="6" fill="#F1F4F9" opacity="0.8" />
          <text x="24" y="235" className="text-[11px] font-medium fill-[#727C8D]" fontFamily="Inter">
            Alveolar Bone
          </text>
          <line x1="55" y1="230" x2="80" y2="230" stroke="#727C8D" strokeWidth="1" strokeDasharray="2 2" />

          {/* Crown Area */}
          <path
            d="M 120 40 C 130 18, 190 18, 200 40 C 215 70, 215 110, 195 120 L 125 120 C 105 110, 105 70, 120 40 Z"
            fill="#FFFFFF"
            stroke="#2449C6"
            strokeWidth="2.5"
          />
          {/* Porcelain Crown subtle specular contour */}
          <path
            d="M 135 48 C 142 35, 178 35, 185 48"
            stroke="#DDE1FF"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <text x="232" y="75" className="text-[12px] font-semibold fill-[#151C28]" fontFamily="Inter">
            Porcelain Crown
          </text>
          <text x="232" y="90" className="text-[10px] fill-[#727C8D]" fontFamily="Inter">
            Zirconia / Ceramic
          </text>
          <line x1="195" y1="72" x2="226" y2="72" stroke="#727C8D" strokeWidth="1.2" strokeDasharray="2 2" />

          {/* Abutment Collar */}
          <path
            d="M 140 120 L 180 120 L 175 160 L 145 160 Z"
            fill="#E9DCCB"
            stroke="#665D50"
            strokeWidth="2"
          />
          <text x="232" y="142" className="text-[12px] font-semibold fill-[#151C28]" fontFamily="Inter">
            Custom Abutment
          </text>
          <text x="232" y="156" className="text-[10px] fill-[#727C8D]" fontFamily="Inter">
            Precision Interface
          </text>
          <line x1="175" y1="140" x2="226" y2="140" stroke="#727C8D" strokeWidth="1.2" strokeDasharray="2 2" />

          {/* Gum Margin / Soft Tissue Line */}
          <path
            d="M 45 152 Q 160 166 275 152"
            stroke="#BA1A1A"
            strokeWidth="1.8"
            strokeDasharray="4 3"
          />
          <text x="16" y="152" className="text-[10px] uppercase font-bold fill-[#BA1A1A]" fontFamily="Inter">
            Gingiva
          </text>

          {/* Titanium Fixture / Screw */}
          <path
            d="M 145 160 L 175 160 L 170 300 C 165 320, 155 320, 150 300 Z"
            fill="#DDE2F4"
            stroke="#0030A6"
            strokeWidth="2"
          />

          {/* Precision Threads */}
          <path
            d="M 142 185 L 178 195 M 142 215 L 178 225 M 142 245 L 178 255 M 143 275 L 177 285"
            stroke="#2449C6"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <text x="232" y="240" className="text-[12px] font-semibold fill-[#151C28]" fontFamily="Inter">
            Titanium Fixture
          </text>
          <text x="232" y="255" className="text-[10px] fill-[#727C8D]" fontFamily="Inter">
            (Osseointegrated)
          </text>
          <line x1="176" y1="240" x2="226" y2="240" stroke="#727C8D" strokeWidth="1.2" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* Metric Summary Strips */}
      <div className="w-full grid grid-cols-2 gap-3 pt-3 border-t border-[#E2E6ED]">
        <div className="bg-[#F1F4F9] p-3 rounded text-center border border-[#E2E6ED]/60">
          <span className="block font-display text-[15px] font-bold text-[#2449C6]">
            Biocompatible
          </span>
          <span className="font-sans text-[11px] text-[#727C8D] uppercase tracking-wider">
            Grade 4/5 Titanium
          </span>
        </div>
        <div className="bg-[#F1F4F9] p-3 rounded text-center border border-[#E2E6ED]/60">
          <span className="block font-display text-[15px] font-bold text-[#2449C6]">
            Stable Anchor
          </span>
          <span className="font-sans text-[11px] text-[#727C8D] uppercase tracking-wider">
            Lifelong Foundation
          </span>
        </div>
      </div>
    </div>
  );
};
