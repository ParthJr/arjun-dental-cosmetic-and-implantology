import React from 'react';
import { Phone } from 'lucide-react';
import { CLINIC_CONFIG } from '../../config/clinic';

export const EmergencyCareSection: React.FC = () => {
  return (
    <section id="emergency-section" className="w-full py-12 lg:py-16 bg-white border-b border-[#E2E6ED]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="bg-[#F1F4F9] rounded-xl p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden border border-[#E2E6ED]">
          {/* Cobalt Accent Stripe matching Stitch */}
          <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-[#2449C6]" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pl-2 sm:pl-3">
            <div className="lg:col-span-8 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#BA1A1A] animate-pulse" aria-hidden="true" />
                <span className="font-sans text-xs font-bold text-[#BA1A1A] uppercase tracking-wider">
                  Urgent Dental Support
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#151C28] tracking-tight">
                Need Advice About an Urgent Dental Concern?
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#444654] max-w-2xl leading-relaxed">
                Contact the clinic directly to explain your symptoms, severity, and to verify immediate clinical triage availability.
              </p>

              <p className="font-sans text-xs text-[#727C8D] leading-tight pt-1">
                Operating hours begin at 9:00 AM Monday through Saturday. Please call ahead before arriving for emergency triage.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-2">
              <a
                href={`tel:${CLINIC_CONFIG.phone.tel}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#2449C6] text-white hover:bg-[#1B38A3] font-display text-lg sm:text-xl font-bold px-7 py-3.5 rounded-lg shadow-sm transition-colors focus-architectural"
                aria-label={`Call emergency desk at ${CLINIC_CONFIG.phone.display}`}
              >
                <Phone className="w-5 h-5 text-white" />
                <span>{CLINIC_CONFIG.phone.display}</span>
              </a>
              <span className="font-sans text-xs text-[#727C8D]">
                Direct Surgical &amp; Clinic Desk
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
