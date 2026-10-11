import React, { useEffect } from 'react';
import { X, Phone, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { CLINIC_CONFIG } from '../../config/clinic';
import { ArjunLogo } from '../common/ArjunLogo';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLedger: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, onOpenLedger }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleLinkClick = (hash: string) => {
    onClose();
    const elem = document.querySelector(hash);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden flex justify-end bg-[#151C28]/60 backdrop-blur-xs transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div
        className="w-[85%] max-w-sm h-full bg-white shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between p-5 border-b border-[#E2E6ED]">
            <ArjunLogo />
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-lg text-[#727C8D] hover:text-[#151C28] hover:bg-[#F1F4F9] flex items-center justify-center transition-colors focus-architectural"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-5 space-y-1">
            <button
              onClick={() => handleLinkClick('#hero')}
              className="w-full text-left py-3 px-3 rounded-lg text-[15px] font-semibold text-[#151C28] hover:bg-[#F1F4F9] flex items-center justify-between transition-colors focus-architectural"
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 text-[#727C8D]" />
            </button>
            <button
              onClick={() => handleLinkClick('#precision-section')}
              className="w-full text-left py-3 px-3 rounded-lg text-[15px] font-semibold text-[#444654] hover:text-[#151C28] hover:bg-[#F1F4F9] flex items-center justify-between transition-colors focus-architectural"
            >
              <span>About &amp; Clinical Planning</span>
              <ArrowRight className="w-4 h-4 text-[#727C8D]" />
            </button>
            <button
              onClick={() => handleLinkClick('#treatments-section')}
              className="w-full text-left py-3 px-3 rounded-lg text-[15px] font-semibold text-[#444654] hover:text-[#151C28] hover:bg-[#F1F4F9] flex items-center justify-between transition-colors focus-architectural"
            >
              <span>Dental Treatments</span>
              <ArrowRight className="w-4 h-4 text-[#727C8D]" />
            </button>
            <button
              onClick={() => handleLinkClick('#implant-section')}
              className="w-full text-left py-3 px-3 rounded-lg text-[15px] font-semibold text-[#444654] hover:text-[#151C28] hover:bg-[#F1F4F9] flex items-center justify-between transition-colors focus-architectural"
            >
              <span>Implant Care</span>
              <ArrowRight className="w-4 h-4 text-[#727C8D]" />
            </button>
            <button
              onClick={() => handleLinkClick('#emergency-section')}
              className="w-full text-left py-3 px-3 rounded-lg text-[15px] font-semibold text-[#BA1A1A] hover:bg-[#FFDAD6]/40 flex items-center justify-between transition-colors focus-architectural"
            >
              <span>Emergency Care</span>
              <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 bg-[#FFDAD6] text-[#93000A] rounded">Urgent</span>
            </button>
            <button
              onClick={() => handleLinkClick('#location-section')}
              className="w-full text-left py-3 px-3 rounded-lg text-[15px] font-semibold text-[#444654] hover:text-[#151C28] hover:bg-[#F1F4F9] flex items-center justify-between transition-colors focus-architectural"
            >
              <span>Location &amp; Contact</span>
              <ArrowRight className="w-4 h-4 text-[#727C8D]" />
            </button>
          </nav>
        </div>

        {/* Bottom Quick Contact & Actions */}
        <div className="p-5 border-t border-[#E2E6ED] bg-[#F9F9FF] space-y-3">
          <a
            href={`tel:${CLINIC_CONFIG.phone.tel}`}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#E8EDFF] text-[#0030A6] font-sans text-sm font-semibold hover:bg-[#DDE1FF] transition-colors focus-architectural"
          >
            <Phone className="w-4 h-4" />
            <span>Call: {CLINIC_CONFIG.phone.display}</span>
          </a>

          <button
            onClick={() => handleLinkClick('#appointment-form')}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#2449C6] text-white font-sans text-sm font-semibold hover:bg-[#1B38A3] transition-colors shadow-sm focus-architectural"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Consultation</span>
          </button>

          <div className="pt-2 text-center">
            <button
              onClick={() => {
                onClose();
                onOpenLedger();
              }}
              className="text-xs text-[#727C8D] hover:text-[#2449C6] underline"
            >
              View Consultation Requests Ledger
            </button>
          </div>

          <div className="pt-2 flex items-start gap-2 text-xs text-[#727C8D]">
            <MapPin className="w-4 h-4 text-[#2449C6] flex-shrink-0 mt-0.5" />
            <span>34 FF, Shivalay Residency, Kudasan, Gandhinagar</span>
          </div>
        </div>
      </div>
    </div>
  );
};
