import React from 'react';
import { Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { CLINIC_CONFIG } from '../../config/clinic';

export const ReviewsSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-12 lg:py-16 bg-white border-b border-[#E2E6ED]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="p-6 sm:p-10 bg-[#F1F4F9] rounded-xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xs border border-[#E2E6ED]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            {/* Big 5.0 Rating Block */}
            <div className="flex flex-col items-center sm:items-start flex-shrink-0">
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#2449C6] font-bold leading-none">
                {CLINIC_CONFIG.googleReviews.rating.toFixed(1)}
              </span>
              <div className="flex items-center text-[#E5A100] mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current stroke-none" />
                ))}
              </div>
            </div>

            {/* Description & Badge */}
            <div className="flex flex-col gap-1.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#E9DCCB] text-[#211B10] text-[11px] font-sans font-semibold rounded tracking-wider uppercase self-center sm:self-start">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2449C6]" />
                <span>{CLINIC_CONFIG.googleReviews.verifiedLabel}</span>
              </div>
              <div className="font-display text-lg sm:text-xl text-[#151C28] font-bold">
                Based on {CLINIC_CONFIG.googleReviews.count} Verified Patient Experiences
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#444654] max-w-lg leading-relaxed">
                {CLINIC_CONFIG.googleReviews.quoteSummary}
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={CLINIC_CONFIG.googleReviews.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#151C28] hover:text-[#2449C6] font-sans text-xs sm:text-sm font-semibold px-5 py-3 rounded border border-[#E2E6ED] shadow-xs transition-colors whitespace-nowrap focus-architectural"
            >
              <span>Read Google Reviews</span>
              <ExternalLink className="w-4 h-4 text-[#727C8D]" />
            </a>

            <button
              onClick={() => scrollTo('appointment-form')}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#2449C6] hover:bg-[#1B38A3] text-white font-sans text-xs sm:text-sm font-semibold px-6 py-3 rounded shadow-xs transition-colors whitespace-nowrap focus-architectural"
            >
              Book an Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
