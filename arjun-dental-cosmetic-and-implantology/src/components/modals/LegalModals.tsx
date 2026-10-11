import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, AlertTriangle } from 'lucide-react';
import { CLINIC_CONFIG } from '../../config/clinic';

export type LegalModalType = 'privacy' | 'terms' | 'disclaimer' | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#151C28]/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-xl shadow-2xl border border-[#E2E6ED] w-full max-w-2xl max-h-[85vh] overflow-y-auto flex flex-col focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E2E6ED] bg-[#F9F9FF]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#E8EDFF] text-[#2449C6] flex items-center justify-center">
              {type === 'privacy' && <ShieldCheck className="w-5 h-5" />}
              {type === 'terms' && <FileText className="w-5 h-5" />}
              {type === 'disclaimer' && <AlertTriangle className="w-5 h-5 text-[#BA1A1A]" />}
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#151C28]">
                {type === 'privacy' && 'Patient Privacy & Enquiry Policy'}
                {type === 'terms' && 'Terms of Consultation & Service'}
                {type === 'disclaimer' && 'Clinical & Medical Disclaimer'}
              </h3>
              <span className="font-sans text-xs text-[#727C8D]">
                {CLINIC_CONFIG.name} · Kudasan, Gandhinagar
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg text-[#727C8D] hover:text-[#151C28] hover:bg-[#E8EDFF] flex items-center justify-center transition-colors focus-architectural"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 font-sans text-sm text-[#444654] leading-relaxed">
          {type === 'privacy' && (
            <>
              <p>
                At <strong>{CLINIC_CONFIG.name}</strong>, we treat the privacy and confidentiality of our patients and visitors with clinical rigor.
              </p>
              <h5 className="font-display font-semibold text-[#151C28] text-base pt-2">
                1. Information We Collect
              </h5>
              <p>
                When you submit an appointment request through our digital portal, we collect your full name, Indian mobile number, preferred service of interest, preferred date and time, and any voluntary diagnostic notes.
              </p>
              <h5 className="font-display font-semibold text-[#151C28] text-base pt-2">
                2. Use of Contact Information
              </h5>
              <p>
                Your contact details are utilized solely by our front-desk reception and clinical coordinators to verify appointment availability, coordinate pre-visit triage, and confirm clinical schedules. We do not sell, rent, or distribute patient contact details to third-party telemarketers.
              </p>
              <h5 className="font-display font-semibold text-[#151C28] text-base pt-2">
                3. Data Security &amp; Confidentiality
              </h5>
              <p>
                All enquiry records are stored securely in compliance with standard clinical record safeguarding procedures. If you wish to update or withdraw your details from our records, please contact our direct desk at {CLINIC_CONFIG.phone.display}.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                By requesting an appointment or browsing the digital portal of <strong>{CLINIC_CONFIG.name}</strong>, you acknowledge and agree to the following operational terms:
              </p>
              <h5 className="font-display font-semibold text-[#151C28] text-base pt-2">
                1. Nature of Online Appointment Requests
              </h5>
              <p>
                Submitting an appointment request through this website represents an initial inquiry and does not constitute a guaranteed clinical reservation until confirmed directly by our desk staff via phone call or direct message.
              </p>
              <h5 className="font-display font-semibold text-[#151C28] text-base pt-2">
                2. Scheduling &amp; Rescheduling
              </h5>
              <p>
                Clinical appointments at 34 FF, Shivalay Residency, Kudasan, Gandhinagar are allocated based on surgical suite availability. We request at least 24 hours prior notice for appointment rescheduling where possible.
              </p>
              <h5 className="font-display font-semibold text-[#151C28] text-base pt-2">
                3. Transparent Clinical Diagnosis
              </h5>
              <p>
                All final treatment plans, procedural phases, material selections, and fees are discussed and confirmed only following an individualized in-person diagnostic examination.
              </p>
            </>
          )}

          {type === 'disclaimer' && (
            <>
              <div className="p-3.5 bg-[#FFDAD6]/40 border border-[#BA1A1A]/20 rounded-lg">
                <p className="text-[#93000A] font-medium text-xs sm:text-sm">
                  <strong>Important Notice:</strong> Content published on this website is for general informational and educational purposes regarding dental health and restorative alternatives.
                </p>
              </div>
              <h5 className="font-display font-semibold text-[#151C28] text-base pt-2">
                No Substitute for Clinical Examination
              </h5>
              <p>
                Information presented on this site does not constitute individual medical diagnosis, surgical guarantee, or doctor-patient confidentiality establishment prior to in-person clinical registration.
              </p>
              <h5 className="font-display font-semibold text-[#151C28] text-base pt-2">
                Individual Anatomical Variability
              </h5>
              <p>
                Outcomes of cosmetic veneers, digital smile design, and dental implant osseointegration depend on unique biological factors including bone density, periodontal baseline, systemic health, and occlusal dynamics. Exact procedural suitability is determined exclusively upon comprehensive clinical imaging and evaluation.
              </p>
              <h5 className="font-display font-semibold text-[#151C28] text-base pt-2">
                Emergency Care Protocol
              </h5>
              <p>
                For immediate life-threatening facial trauma or severe respiratory obstruction, visit the nearest emergency hospital trauma facility immediately. For acute dental emergencies, call our desk directly at {CLINIC_CONFIG.phone.display}.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-[#E2E6ED] bg-[#F9F9FF] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#151C28] hover:bg-[#202633] text-white rounded font-sans text-xs font-semibold transition-colors focus-architectural"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
