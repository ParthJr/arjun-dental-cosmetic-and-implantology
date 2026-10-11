import React from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import { OperatoryGraphic } from '../common/OperatoryGraphic';
import { CLINIC_CONFIG } from '../../config/clinic';

export const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="w-full bg-white py-12 lg:py-20 border-b border-[#E2E6ED]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Hero Text Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            {/* Eyebrow Badge in Warm Sand (#E9DCCB) */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E9DCCB] text-[#211B10] rounded text-[11px] font-sans font-semibold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2449C6]" aria-hidden="true" />
              <span>Dental Care · Kudasan, Gandhinagar</span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[54px] font-bold text-[#151C28] tracking-tight leading-[1.12] text-balance">
              Confidence Starts With Your Smile.
            </h1>

            {/* Supporting Text */}
            <p className="font-sans text-base sm:text-lg text-[#444654] max-w-xl leading-relaxed">
              Explore cosmetic and restorative dental care with a focus on clear communication, individualized assessment, and informed treatment decisions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('appointment-form')}
                className="inline-flex items-center justify-center bg-[#2449C6] hover:bg-[#1B38A3] text-white font-sans text-sm font-semibold px-6 py-3 rounded shadow-sm transition-colors focus-architectural"
              >
                Request a Consultation
              </button>

              <button
                onClick={() => scrollTo('treatments-section')}
                className="inline-flex items-center justify-center gap-2 bg-[#F1F4F9] hover:bg-[#E8EDFF] text-[#151C28] font-sans text-sm font-semibold px-6 py-3 rounded border border-[#E2E6ED] transition-colors focus-architectural"
              >
                <span>Explore Dental Care</span>
                <ArrowRight className="w-4 h-4 text-[#2449C6]" />
              </button>
            </div>

            {/* Trust Badge / Google Reviews Indicator */}
            <div className="flex items-center gap-3 pt-2 mt-1 bg-[#F1F4F9] px-4 py-2 rounded-lg border border-[#E2E6ED]/60">
              <div className="flex items-center text-[#E5A100]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                ))}
              </div>
              <div className="flex items-center gap-1 font-sans text-xs text-[#151C28]">
                <span className="font-bold">{CLINIC_CONFIG.googleReviews.rating.toFixed(1)}</span>
                <span className="text-[#444654]">· {CLINIC_CONFIG.googleReviews.count} Google reviews</span>
              </div>
              <span className="text-[#2449C6] flex items-center" title="Verified Google Business Profile">
                <CheckCircle className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Hero Visual Column (5 cols) */}
          <div className="lg:col-span-5">
            <OperatoryGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};
