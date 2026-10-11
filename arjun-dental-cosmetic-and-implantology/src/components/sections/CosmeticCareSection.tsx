import React from 'react';
import { Sliders, Palette, Info } from 'lucide-react';
import { SmilePortraitGraphic } from '../common/SmilePortraitGraphic';

export const CosmeticCareSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-white border-b border-[#E2E6ED]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Natural Smile Portrait (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <SmilePortraitGraphic />
          </div>

          {/* Editorial Text Panel (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-4">
            <span className="font-sans text-xs font-semibold text-[#2449C6] uppercase tracking-wider">
              Cosmetic Philosophy
            </span>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#151C28] tracking-tight leading-tight">
              Your Smile. Your Priorities.
            </h2>

            <p className="font-sans text-base text-[#444654] leading-relaxed">
              Whether you are exploring aesthetic refinements or seeking restorative care for tooth wear, start with a focused conversation about your specific objectives and personal expectations.
            </p>

            {/* Architectural Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
              <div className="bg-[#F1F4F9] p-4 rounded-lg border border-[#E2E6ED]/80">
                <div className="flex items-center gap-2 text-[#2449C6] font-display text-[15px] font-bold mb-1">
                  <Sliders className="w-4 h-4" />
                  <span>Veneers &amp; Contouring</span>
                </div>
                <p className="font-sans text-xs sm:text-[13px] text-[#444654] leading-normal">
                  Minimally invasive restorative options crafted to harmonize natural dentition.
                </p>
              </div>

              <div className="bg-[#F1F4F9] p-4 rounded-lg border border-[#E2E6ED]/80">
                <div className="flex items-center gap-2 text-[#2449C6] font-display text-[15px] font-bold mb-1">
                  <Palette className="w-4 h-4" />
                  <span>Restorative Color Match</span>
                </div>
                <p className="font-sans text-xs sm:text-[13px] text-[#444654] leading-normal">
                  Precision shade-matching calibrated to your facial undertones and enamel translucency.
                </p>
              </div>
            </div>

            {/* Ethical Medical Advisory Note */}
            <div className="p-4 bg-[#E9DCCB]/40 rounded-lg border border-[#665D50]/20 flex items-start gap-3">
              <Info className="w-5 h-5 text-[#665D50] flex-shrink-0 mt-0.5" />
              <p className="font-sans text-xs sm:text-[13px] text-[#4E4639] leading-relaxed">
                <strong className="font-semibold text-[#151C28]">Advisory Note:</strong> Cosmetic consultations emphasize realistic expectations. Precise suitability and biological requirements are determined following clinical oral examination and bite assessment.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => scrollTo('appointment-form')}
                className="inline-flex items-center justify-center bg-[#2449C6] hover:bg-[#1B38A3] text-white font-sans text-sm font-semibold px-6 py-3 rounded shadow-sm transition-colors focus-architectural"
              >
                Discuss Your Smile Goals
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
