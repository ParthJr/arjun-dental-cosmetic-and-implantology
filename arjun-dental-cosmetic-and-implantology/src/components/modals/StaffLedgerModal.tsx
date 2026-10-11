import React, { useEffect, useState } from 'react';
import { X, Calendar, Phone, Clock, FileText, CheckCircle2, Trash2 } from 'lucide-react';
import { AppointmentRequest } from '../../types/clinic';
import { CLINIC_CONFIG } from '../../config/clinic';

interface StaffLedgerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRefreshTrigger?: number;
}

export const StaffLedgerModal: React.FC<StaffLedgerModalProps> = ({
  isOpen,
  onClose,
  onRefreshTrigger = 0,
}) => {
  const [requests, setRequests] = useState<AppointmentRequest[]>([]);

  useEffect(() => {
    if (isOpen) {
      try {
        const stored = localStorage.getItem('arjun_dental_appointment_requests');
        if (stored) {
          setRequests(JSON.parse(stored));
        } else {
          setRequests([]);
        }
      } catch (err) {
        console.error('Failed to parse stored appointment requests', err);
      }
    }
  }, [isOpen, onRefreshTrigger]);

  const clearLedger = () => {
    if (window.confirm('Clear all locally saved consultation enquiries?')) {
      localStorage.removeItem('arjun_dental_appointment_requests');
      setRequests([]);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#151C28]/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-xl shadow-2xl border border-[#E2E6ED] w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E2E6ED] bg-[#F9F9FF]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2449C6]" />
              <span className="font-sans text-[11px] font-semibold text-[#2449C6] uppercase tracking-wider">
                Clinic Front Desk Ledger
              </span>
            </div>
            <h3 className="font-display text-xl font-bold text-[#151C28] mt-1">
              Received Consultation Enquiries
            </h3>
            <span className="font-sans text-xs text-[#727C8D]">
              {CLINIC_CONFIG.name} · Local Enquiry Storage Queue ({requests.length} total)
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-lg text-[#727C8D] hover:text-[#151C28] hover:bg-[#E8EDFF] flex items-center justify-center transition-colors focus-architectural"
            aria-label="Close ledger"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Ledger Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {requests.length === 0 ? (
            <div className="text-center py-12 px-4 bg-[#F1F4F9] rounded-xl border border-[#E2E6ED]">
              <Calendar className="w-10 h-10 text-[#727C8D] mx-auto mb-3" />
              <h4 className="font-display text-base font-bold text-[#151C28]">
                No appointment enquiries recorded yet
              </h4>
              <p className="font-sans text-xs text-[#727C8D] mt-1 max-w-sm mx-auto">
                When patients submit the consultation booking form on the website, their verified requests are logged here for clinical review.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {requests.map((item, index) => (
                <div
                  key={item.id || index}
                  className="p-4 rounded-xl border border-[#E2E6ED] bg-[#F9F9FF] hover:border-[#2449C6]/40 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#E2E6ED]/60">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-base font-bold text-[#151C28]">
                        {item.fullName}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#DDE1FF] text-[#0030A6]">
                        {item.service}
                      </span>
                    </div>
                    <span className="font-sans text-xs text-[#727C8D]">
                      {item.submittedAt ? new Date(item.submittedAt).toLocaleString('en-IN') : 'Recent'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 text-xs text-[#444654]">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#2449C6]" />
                      <a href={`tel:${item.phone}`} className="font-semibold text-[#2449C6] hover:underline">
                        {item.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#727C8D]" />
                      <span>Date: <strong>{item.preferredDate}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#727C8D]" />
                      <span>Window: <strong>{item.preferredTime}</strong></span>
                    </div>
                  </div>

                  {item.notes && (
                    <div className="mt-3 p-2.5 rounded bg-white text-xs text-[#444654] border border-[#E2E6ED]/60 flex items-start gap-2">
                      <FileText className="w-3.5 h-3.5 text-[#727C8D] flex-shrink-0 mt-0.5" />
                      <span><strong>Patient Notes:</strong> {item.notes}</span>
                    </div>
                  )}

                  <div className="mt-2 flex items-center justify-between text-[11px] text-[#727C8D] pt-1">
                    <span className="flex items-center gap-1 text-[#2449C6]">
                      <CheckCircle2 className="w-3 h-3" />
                      Privacy consent verified
                    </span>
                    <a
                      href={`tel:${item.phone}`}
                      className="text-[#2449C6] font-semibold hover:underline"
                    >
                      Call to Confirm Slot
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-[#E2E6ED] bg-[#F9F9FF] flex items-center justify-between">
          {requests.length > 0 ? (
            <button
              onClick={clearLedger}
              className="inline-flex items-center gap-1.5 text-xs text-[#BA1A1A] hover:text-[#93000A] transition-colors focus-architectural"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Ledger</span>
            </button>
          ) : (
            <span className="text-xs text-[#727C8D]">Local storage active</span>
          )}
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#2449C6] hover:bg-[#1B38A3] text-white rounded font-sans text-xs font-semibold transition-colors focus-architectural"
          >
            Close Ledger
          </button>
        </div>
      </div>
    </div>
  );
};
