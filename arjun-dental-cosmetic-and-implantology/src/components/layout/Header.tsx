import React, { useState, useEffect } from 'react';
import { Phone, Menu, User } from 'lucide-react';
import { ArjunLogo } from '../common/ArjunLogo';
import { CLINIC_CONFIG } from '../../config/clinic';

interface HeaderProps {
  onOpenMobileNav: () => void;
  onOpenLedger: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMobileNav, onOpenLedger }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ['hero', 'precision-section', 'treatments-section', 'implant-section', 'emergency-section', 'location-section'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const elem = document.getElementById(sectionId);
        if (elem) {
          const top = elem.offsetTop;
          const height = elem.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 bg-white border-b border-[#E2E6ED] border-t-[3px] border-t-[#2449C6] transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_2px_12px_rgba(32,38,51,0.08)]' : 'shadow-[0_1px_8px_rgba(0,0,0,0.04)]'
      }`}
    >
      <div className="h-20 max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand Zone (Single-line wordmark & logo) */}
        <div className="flex items-center">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hero');
            }}
            className="flex items-center focus-architectural rounded"
            aria-label="Arjun Dental Home"
          >
            <ArjunLogo />
          </a>
        </div>

        {/* Clean Nav Zone (4-5 single-line links with subtle underline/active state) */}
        <nav
          className="hidden xl:flex items-center gap-7 h-full text-sm font-medium"
          aria-label="Main Navigation"
        >
          <button
            onClick={() => scrollTo('hero')}
            className={`transition-colors py-1 focus-architectural whitespace-nowrap ${
              activeSection === 'hero'
                ? 'text-[#2449C6] font-semibold border-b-2 border-[#2449C6]'
                : 'text-[#444654] hover:text-[#151C28]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('precision-section')}
            className={`transition-colors py-1 focus-architectural whitespace-nowrap ${
              activeSection === 'precision-section'
                ? 'text-[#2449C6] font-semibold border-b-2 border-[#2449C6]'
                : 'text-[#444654] hover:text-[#151C28]'
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollTo('treatments-section')}
            className={`transition-colors py-1 focus-architectural whitespace-nowrap ${
              activeSection === 'treatments-section'
                ? 'text-[#2449C6] font-semibold border-b-2 border-[#2449C6]'
                : 'text-[#444654] hover:text-[#151C28]'
            }`}
          >
            Dental Treatments
          </button>
          <button
            onClick={() => scrollTo('implant-section')}
            className={`transition-colors py-1 focus-architectural whitespace-nowrap ${
              activeSection === 'implant-section'
                ? 'text-[#2449C6] font-semibold border-b-2 border-[#2449C6]'
                : 'text-[#444654] hover:text-[#151C28]'
            }`}
          >
            Implant Care
          </button>
          <button
            onClick={() => scrollTo('emergency-section')}
            className={`transition-colors py-1 focus-architectural whitespace-nowrap ${
              activeSection === 'emergency-section'
                ? 'text-[#BA1A1A] font-semibold border-b-2 border-[#BA1A1A]'
                : 'text-[#444654] hover:text-[#BA1A1A]'
            }`}
          >
            Emergency Care
          </button>
          <button
            onClick={() => scrollTo('location-section')}
            className={`transition-colors py-1 focus-architectural whitespace-nowrap ${
              activeSection === 'location-section'
                ? 'text-[#2449C6] font-semibold border-b-2 border-[#2449C6]'
                : 'text-[#444654] hover:text-[#151C28]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Action Zone: Verified Phone, Book Consultation CTA, Patient Ledger Icon */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Click to Call */}
          <a
            href={`tel:${CLINIC_CONFIG.phone.tel}`}
            className="hidden sm:flex items-center gap-2 text-[#151C28] hover:text-[#2449C6] transition-colors py-2 px-1 focus-architectural rounded"
            title="Call Arjun Dental Kudasan"
          >
            <Phone className="w-4 h-4 text-[#2449C6]" />
            <span className="font-sans text-sm font-semibold tracking-tight whitespace-nowrap">
              {CLINIC_CONFIG.phone.display}
            </span>
          </a>

          {/* Book Consultation Button */}
          <button
            onClick={() => scrollTo('appointment-form')}
            className="inline-flex items-center justify-center bg-[#2449C6] hover:bg-[#1B38A3] text-white font-sans text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded shadow-xs transition-colors focus-architectural whitespace-nowrap"
          >
            Book a Consultation
          </button>

          {/* Patient Account / Ledger Icon */}
          <button
            onClick={onOpenLedger}
            className="w-9 h-9 rounded-full bg-[#0030A6] text-white flex items-center justify-center hover:bg-[#2449C6] transition-colors focus-architectural flex-shrink-0"
            title="View Patient Consultation Ledger"
            aria-label="View Consultation Ledger"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={onOpenMobileNav}
            className="xl:hidden w-9 h-9 rounded-lg text-[#151C28] hover:bg-[#F1F4F9] flex items-center justify-center transition-colors focus-architectural"
            aria-label="Open mobile menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
