import React from 'react';
import { MapPin, Phone, ShieldCheck } from 'lucide-react';
import { CLINIC_CONFIG } from '../../config/clinic';
import { LegalModalType } from '../modals/LegalModals';

interface FooterProps {
  onOpenLegal: (type: LegalModalType) => void;
  onOpenLedger: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenLedger }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#202633] text-[#EDF0FF] border-t border-[#727C8D]/20">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12 pt-16 pb-12">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#727C8D]/30">
          {/* Col 1: Brand & Identity */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-bold tracking-tight text-white">
                ARJUN DENTAL
              </span>
            </div>
            <p className="font-sans text-xs sm:text-[13px] text-[#C4C5D6] leading-relaxed">
              Center for Advanced Cosmetic Dentistry &amp; Surgical Implantology. Delivering engineered precision and restorative harmony in Kudasan.
            </p>
            <div className="flex items-start gap-2 mt-2 text-[#C4C5D6]">
              <MapPin className="w-4 h-4 text-[#B8C4FF] flex-shrink-0 mt-0.5" />
              <span className="font-sans text-xs sm:text-[13px] text-[#EDF0FF]">
                34 FF, Shivalay Residency, Kudasan, Gandhinagar, Gujarat 382419
              </span>
            </div>
          </div>

          {/* Col 2: Clinical Navigation */}
          <div className="flex flex-col gap-3">
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#B8C4FF]">
              Clinical Navigation
            </span>
            <ul className="flex flex-col gap-2 font-sans text-xs sm:text-[13px] text-[#C4C5D6]">
              <li>
                <button
                  onClick={() => scrollTo('precision-section')}
                  className="hover:text-white transition-colors focus-architectural text-left"
                >
                  About the Clinic &amp; Planning
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('treatments-section')}
                  className="hover:text-white transition-colors focus-architectural text-left"
                >
                  Dental Treatments Scope
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('implant-section')}
                  className="hover:text-white transition-colors focus-architectural text-left"
                >
                  Implant Care &amp; Anatomy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('emergency-section')}
                  className="hover:text-white transition-colors focus-architectural text-left text-[#FFDAD6]"
                >
                  Emergency Care Protocol
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('appointment-form')}
                  className="hover:text-white transition-colors focus-architectural text-left"
                >
                  Consultation Booking Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Working Hours */}
          <div className="flex flex-col gap-3">
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#B8C4FF]">
              Working Hours
            </span>
            <div className="flex flex-col gap-2 font-sans text-xs sm:text-[13px] text-[#C4C5D6]">
              <div className="flex justify-between items-center">
                <span className="text-[#EDF0FF] font-medium">Monday – Saturday:</span>
                <span>9:00 AM – 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#EDF0FF] font-medium">Sunday:</span>
                <span>By Consultation</span>
              </div>
              <div className="mt-2 p-2.5 bg-[#2A303E] rounded border border-[#727C8D]/30">
                <p className="font-sans text-[11px] text-[#B8C4FF] leading-snug">
                  {CLINIC_CONFIG.schedule.advisory}
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: Compliance & Inquiries */}
          <div className="flex flex-col gap-3">
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[#B8C4FF]">
              Compliance &amp; Inquiries
            </span>
            <p className="font-sans text-xs sm:text-[13px] text-[#C4C5D6]">
              Dedicated surgical triage &amp; implant booking desk.
            </p>
            <a
              href={`tel:${CLINIC_CONFIG.phone.tel}`}
              className="font-display text-xl font-bold text-white hover:text-[#B8C4FF] transition-colors focus-architectural inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#2449C6]" />
              <span>{CLINIC_CONFIG.phone.display}</span>
            </a>
            <div className="flex items-center gap-1.5 text-[11px] text-[#C4C5D6] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B8C4FF]" />
              <span>NABH Accredited Standards Protocol</span>
            </div>
            <button
              onClick={onOpenLedger}
              className="text-left text-[11px] text-[#B8C4FF] hover:underline pt-1"
            >
              Receptionist Portal (Enquiries Ledger)
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-xs text-[#C4C5D6]">
          <div>
            © {new Date().getFullYear()} {CLINIC_CONFIG.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors focus-architectural"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors focus-architectural"
            >
              Terms of Use
            </button>
            <button
              onClick={() => onOpenLegal('disclaimer')}
              className="hover:text-white transition-colors focus-architectural"
            >
              Medical Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
