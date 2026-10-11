import React from 'react';
import { Sparkles, Shield, Wrench, HeartPulse, AlertCircle, ArrowRight, ChevronRight, Phone } from 'lucide-react';
import { CLINIC_CONFIG } from '../../config/clinic';
import { ClinicTreatment } from '../../types/clinic';

interface TreatmentDiscoveryProps {
  onSelectTreatment: (treatment: ClinicTreatment) => void;
  onOpenBookingForTreatment: (title: string) => void;
}

export const TreatmentDiscovery: React.FC<TreatmentDiscoveryProps> = ({
  onSelectTreatment,
  onOpenBookingForTreatment,
}) => {
  const treatments = CLINIC_CONFIG.treatments;
  const cosmetic = treatments.find((t) => t.id === 'cosmetic-dentistry') || treatments[0];
  const implant = treatments.find((t) => t.id === 'implant-care') || treatments[1];
  const restorative = treatments.find((t) => t.id === 'restorative-dentistry') || treatments[2];
  const preventive = treatments.find((t) => t.id === 'preventive-care') || treatments[3];
  const emergency = treatments.find((t) => t.id === 'emergency-care') || treatments[4];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="treatments-section" className="w-full py-16 lg:py-24 bg-[#F9F9FF] border-b border-[#E2E6ED]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <span className="font-sans text-xs font-semibold text-[#2449C6] uppercase tracking-wider">
              Clinical Scope
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#151C28] tracking-tight mt-1">
              Explore Your Dental Care Options.
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#444654] mt-2">
              Understand the services available and discover what to discuss during your personalized consultation.
            </p>
          </div>

          <button
            onClick={() => scrollTo('appointment-form')}
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#2449C6] hover:text-[#1B38A3] transition-colors self-start md:self-end focus-architectural"
          >
            <span>Inquire about custom procedures</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bento Grid of Treatments matching Stitch */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Large Feature Card (Cosmetic Dentistry) - Spans 2 cols */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs border border-[#E2E6ED] relative group hover:border-[#2449C6]/40 transition-colors">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#E8EDFF] flex items-center justify-center text-[#2449C6]">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="inline-flex self-start px-2 py-0.5 bg-[#E9DCCB] text-[#211B10] text-[11px] font-sans font-semibold rounded tracking-wider uppercase">
                Popular Focus
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#151C28]">
                {cosmetic.title}
              </h3>
              <p className="font-sans text-sm sm:text-[15px] text-[#444654] max-w-xl leading-relaxed">
                {cosmetic.description}
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#E2E6ED]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="font-sans text-xs text-[#727C8D]">
                Diagnostics · Smile Design · Esthetics
              </span>
              <button
                onClick={() => onSelectTreatment(cosmetic)}
                className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-[#2449C6] group-hover:text-[#1B38A3] transition-colors focus-architectural self-start sm:self-auto"
              >
                <span>Learn More / Inquire</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Dental Implant Care */}
          <div className="bg-white rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs border border-[#E2E6ED] group hover:border-[#2449C6]/40 transition-colors">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#E8EDFF] flex items-center justify-center text-[#2449C6]">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#151C28]">
                {implant.title}
              </h3>
              <p className="font-sans text-sm text-[#444654] leading-relaxed">
                {implant.description}
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#E2E6ED]/60 flex items-center justify-between">
              <button
                onClick={() => onSelectTreatment(implant)}
                className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-[#2449C6] group-hover:text-[#1B38A3] transition-colors focus-architectural"
              >
                <span>Learn More / Inquire</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('implant-section')}
                className="text-xs text-[#727C8D] hover:text-[#2449C6] underline"
              >
                View Anatomy
              </button>
            </div>
          </div>

          {/* Card 3: Restorative Dentistry */}
          <div className="bg-white rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs border border-[#E2E6ED] group hover:border-[#2449C6]/40 transition-colors">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#E8EDFF] flex items-center justify-center text-[#2449C6]">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#151C28]">
                {restorative.title}
              </h3>
              <p className="font-sans text-sm text-[#444654] leading-relaxed">
                {restorative.description}
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#E2E6ED]/60">
              <button
                onClick={() => onSelectTreatment(restorative)}
                className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-[#2449C6] group-hover:text-[#1B38A3] transition-colors focus-architectural"
              >
                <span>Learn More / Inquire</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 4: Preventive Dental Care */}
          <div className="bg-white rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs border border-[#E2E6ED] group hover:border-[#2449C6]/40 transition-colors">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#E8EDFF] flex items-center justify-center text-[#2449C6]">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-[#151C28]">
                {preventive.title}
              </h3>
              <p className="font-sans text-sm text-[#444654] leading-relaxed">
                {preventive.description}
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#E2E6ED]/60">
              <button
                onClick={() => onSelectTreatment(preventive)}
                className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-[#2449C6] group-hover:text-[#1B38A3] transition-colors focus-architectural"
              >
                <span>Learn More / Inquire</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 5: Emergency Care Enquiries (Accent Triage Card) */}
          <div className="bg-gradient-to-br from-white via-[#F9F9FF] to-[#FFDAD6]/30 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-xs border border-[#BA1A1A]/20 group relative overflow-hidden">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-lg bg-[#FFDAD6] text-[#BA1A1A] flex items-center justify-center">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <span className="px-2 py-0.5 bg-[#FFDAD6] text-[#93000A] text-[10px] font-sans font-bold rounded tracking-wider uppercase">
                  Urgent Triage
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-[#151C28]">
                {emergency.title}
              </h3>
              <p className="font-sans text-sm text-[#444654] leading-relaxed">
                {emergency.description}
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-[#E2E6ED]/60 flex items-center justify-between">
              <a
                href={`tel:${CLINIC_CONFIG.phone.tel}`}
                className="font-display text-lg font-bold text-[#2449C6] hover:text-[#0030A6] transition-colors focus-architectural inline-flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-[#BA1A1A]" />
                <span>{CLINIC_CONFIG.phone.display}</span>
              </a>

              <button
                onClick={() => onSelectTreatment(emergency)}
                className="inline-flex items-center gap-1 font-sans text-xs sm:text-sm font-semibold text-[#444654] group-hover:text-[#151C28] transition-colors focus-architectural"
              >
                <span>Details</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
