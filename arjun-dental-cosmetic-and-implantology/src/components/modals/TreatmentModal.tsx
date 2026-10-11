import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, AlertCircle, Phone } from 'lucide-react';
import { ClinicTreatment } from '../../types/clinic';
import { CLINIC_CONFIG } from '../../config/clinic';

interface TreatmentModalProps {
  treatment: ClinicTreatment | null;
  onClose: () => void;
  onSelectForBooking: (treatmentTitle: string) => void;
}

export const TreatmentModal: React.FC<TreatmentModalProps> = ({
  treatment,
  onClose,
  onSelectForBooking,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (treatment) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [treatment, onClose]);

  if (!treatment) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#151C28]/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-treatment-title"
    >
      <div
        className="bg-white rounded-xl shadow-2xl border border-[#E2E6ED] w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-6 border-b border-[#E2E6ED] bg-[#F9F9FF]">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-sans text-[11px] font-semibold text-[#2449C6] uppercase tracking-wider">
                Clinical Scope Briefing
              </span>
              {treatment.badge && (
                <span
                  className={`text-[10px] font-semibold uppercase px-2 py-0.5 rounded tracking-wider ${
                    treatment.isUrgent
                      ? 'bg-[#FFDAD6] text-[#93000A]'
                      : 'bg-[#E9DCCB] text-[#4E4639]'
                  }`}
                >
                  {treatment.badge}
                </span>
              )}
            </div>
            <h3
              id="modal-treatment-title"
              className="font-display text-xl sm:text-2xl font-bold text-[#151C28] mt-1"
            >
              {treatment.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg text-[#727C8D] hover:text-[#151C28] hover:bg-[#E8EDFF] flex items-center justify-center transition-colors focus-architectural"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          <p className="font-sans text-[15px] text-[#444654] leading-relaxed">
            {treatment.description}
          </p>

          {/* Key Clinical Focus Areas */}
          <div>
            <h4 className="font-display text-sm font-bold text-[#151C28] uppercase tracking-wider mb-3">
              Key Diagnostic &amp; Procedural Aspects
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {treatment.keyAspects.map((aspect, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F1F4F9] border border-[#E2E6ED]/60"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2449C6] flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-xs sm:text-[13px] text-[#151C28] font-medium leading-snug">
                    {aspect}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Consideration / Advisory */}
          <div className="p-4 rounded-lg bg-[#E9DCCB]/35 border border-[#665D50]/20 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#665D50] flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-sans text-xs font-bold text-[#211B10] uppercase tracking-wider block">
                Clinical Advisory Note
              </span>
              <p className="font-sans text-xs sm:text-[13px] text-[#4E4639] leading-relaxed">
                {treatment.clinicalConsiderations}
              </p>
            </div>
          </div>

          {treatment.isUrgent && (
            <div className="p-4 bg-[#FFDAD6]/50 rounded-lg border border-[#BA1A1A]/20 flex items-center justify-between gap-4">
              <div>
                <span className="font-sans text-xs font-bold text-[#93000A] uppercase tracking-wider block">
                  Urgent Clinical Triage
                </span>
                <span className="font-sans text-xs text-[#93000A]">
                  For acute symptoms, telephone triage provides the most expedited clinical assessment.
                </span>
              </div>
              <a
                href={`tel:${CLINIC_CONFIG.phone.tel}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#BA1A1A] text-white rounded text-xs font-semibold hover:bg-[#93000A] transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {CLINIC_CONFIG.phone.display}</span>
              </a>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="p-6 border-t border-[#E2E6ED] bg-[#F9F9FF] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-sans text-xs text-[#727C8D]">
            Consultation scheduled at 34 FF, Shivalay Residency, Kudasan
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-medium text-[#444654] hover:text-[#151C28] transition-colors focus-architectural"
            >
              Close
            </button>
            <button
              onClick={() => {
                onSelectForBooking(treatment.title);
                onClose();
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#2449C6] hover:bg-[#1B38A3] text-white rounded font-sans text-xs font-semibold transition-colors shadow-sm focus-architectural"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
