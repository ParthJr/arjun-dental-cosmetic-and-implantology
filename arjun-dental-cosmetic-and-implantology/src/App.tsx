import React, { useState } from 'react';
import { Phone, Calendar } from 'lucide-react';
import { Header } from './components/layout/Header';
import { MobileNav } from './components/layout/MobileNav';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { TreatmentDiscovery } from './components/sections/TreatmentDiscovery';
import { PrecisionPlanningSection } from './components/sections/PrecisionPlanningSection';
import { CosmeticCareSection } from './components/sections/CosmeticCareSection';
import { ImplantCareSection } from './components/sections/ImplantCareSection';
import { EmergencyCareSection } from './components/sections/EmergencyCareSection';
import { PatientJourney } from './components/sections/PatientJourney';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { AppointmentForm } from './components/sections/AppointmentForm';
import { LocationSection } from './components/sections/LocationSection';
import { TreatmentModal } from './components/modals/TreatmentModal';
import { LegalModal, LegalModalType } from './components/modals/LegalModals';
import { StaffLedgerModal } from './components/modals/StaffLedgerModal';
import { ClinicTreatment } from './types/clinic';
import { CLINIC_CONFIG } from './config/clinic';

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [ledgerOpen, setLedgerOpen] = useState(false);
  const [ledgerRefreshTrigger, setLedgerRefreshTrigger] = useState(0);
  const [selectedTreatment, setSelectedTreatment] = useState<ClinicTreatment | null>(null);
  const [legalModalType, setLegalModalType] = useState<LegalModalType>(null);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const handleSelectTreatmentForBooking = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    const formEl = document.getElementById('appointment-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmissionSuccess = () => {
    setLedgerRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9FF] text-[#151C28] antialiased">
      {/* 1. Header & Navigation */}
      <Header
        onOpenMobileNav={() => setMobileNavOpen(true)}
        onOpenLedger={() => setLedgerOpen(true)}
      />

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        onOpenLedger={() => setLedgerOpen(true)}
      />

      {/* Main Content Sections in exact required order */}
      <main className="w-full pt-20 flex-1">
        {/* 2. Hero: "Confidence Starts With Your Smile." */}
        <HeroSection />

        {/* 3. Treatment Discovery Bento Grid */}
        <TreatmentDiscovery
          onSelectTreatment={(treatment) => setSelectedTreatment(treatment)}
          onOpenBookingForTreatment={handleSelectTreatmentForBooking}
        />

        {/* 4. Signature Feature: Precision & Treatment Planning */}
        <PrecisionPlanningSection />

        {/* 5. Cosmetic Dentistry Editorial Feature */}
        <CosmeticCareSection />

        {/* 6. Implant Care Feature with Technical Anatomy Spec */}
        <ImplantCareSection />

        {/* 7. Emergency Care Information */}
        <EmergencyCareSection />

        {/* 8. Patient Journey */}
        <PatientJourney />

        {/* 9. Google Reviews Summary */}
        <ReviewsSection />

        {/* 10. Interactive Appointment Form */}
        <AppointmentForm
          initialService={preselectedService}
          onSubmissionSuccess={handleFormSubmissionSuccess}
        />

        {/* 11. Location and Contact */}
        <LocationSection />
      </main>

      {/* 12. Footer */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenLedger={() => setLedgerOpen(true)}
      />

      {/* Interactive Modals */}
      <TreatmentModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        onSelectForBooking={handleSelectTreatmentForBooking}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      <StaffLedgerModal
        isOpen={ledgerOpen}
        onClose={() => setLedgerOpen(false)}
        onRefreshTrigger={ledgerRefreshTrigger}
      />

      {/* Mobile Sticky Quick Contact Strip (respects 15% mobile viewport cap) */}
      <aside aria-label="Mobile quick actions" className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-[#E2E6ED] px-4 py-2.5 flex items-center justify-between gap-3 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
        <a
          href={`tel:${CLINIC_CONFIG.phone.tel}`}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#F1F4F9] text-[#151C28] text-xs font-semibold border border-[#E2E6ED] focus-architectural"
        >
          <Phone className="w-3.5 h-3.5 text-[#2449C6]" />
          <span>Call 090999 24158</span>
        </a>
        <button
          onClick={() => {
            const formEl = document.getElementById('appointment-form');
            if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-[#2449C6] text-white text-xs font-semibold shadow-xs focus-architectural"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Visit</span>
        </button>
      </aside>
    </div>
  );
}
