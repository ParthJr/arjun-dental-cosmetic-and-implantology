import React from 'react';
import { ImplantAnatomyDiagram } from '../common/ImplantAnatomyDiagram';

export const ImplantCareSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="implant-section" className="w-full py-16 lg:py-24 bg-[#F9F9FF] border-b border-[#E2E6ED]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Informational Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="font-sans text-xs font-semibold text-[#2449C6] uppercase tracking-wider">
              Surgical Restorations
            </span>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#151C28] tracking-tight">
              Explore Tooth Replacement Options.
            </h2>

            <p className="font-sans text-base text-[#444654] leading-relaxed">
              Considering dental implants? Learn about the three key assessment phases, biocompatible titanium fixtures, and the crucial diagnostic factors to review with your practitioner.
            </p>

            {/* 3 Informational Milestones */}
            <div className="flex flex-col gap-3 my-2">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-[#E2E6ED] shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-[#2449C6] text-white flex items-center justify-center flex-shrink-0 font-sans text-xs font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-display text-[15px] font-bold text-[#151C28]">
                    Bone Evaluation &amp; Diagnostic Scans
                  </h4>
                  <p className="font-sans text-xs sm:text-[13px] text-[#444654] mt-0.5 leading-relaxed">
                    Detailed bone density analysis and anatomical clearance verification to evaluate your structural foundation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-[#E2E6ED] shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-[#2449C6] text-white flex items-center justify-center flex-shrink-0 font-sans text-xs font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-display text-[15px] font-bold text-[#151C28]">
                    Digital Treatment Simulation
                  </h4>
                  <p className="font-sans text-xs sm:text-[13px] text-[#444654] mt-0.5 leading-relaxed">
                    Computer-guided surgical planning to determine exact implant angulation, depth, and integration schedule.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-[#E2E6ED] shadow-2xs">
                <div className="w-8 h-8 rounded-full bg-[#2449C6] text-white flex items-center justify-center flex-shrink-0 font-sans text-xs font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-display text-[15px] font-bold text-[#151C28]">
                    Custom Prosthetic Restoration
                  </h4>
                  <p className="font-sans text-xs sm:text-[13px] text-[#444654] mt-0.5 leading-relaxed">
                    Fabrication of precision ceramic crowns matched seamlessly in contour, shade, and bite dynamics with surrounding dentition.
                  </p>
                </div>
              </div>
            </div>

            {/* Ethical Medical Notice */}
            <div className="p-3.5 bg-[#E8EDFF] rounded-lg text-xs font-sans text-[#444654] leading-relaxed border border-[#C4C5D6]/40">
              <span className="font-semibold text-[#151C28]">Clinical Disclaimer:</span> Treatment suitability, necessity of bone augmentation, healing periods, and long-term durability are contingent upon comprehensive diagnostic imaging and individualized clinical examination.
            </div>

            <div>
              <button
                onClick={() => scrollTo('appointment-form')}
                className="inline-flex items-center justify-center bg-[#2449C6] hover:bg-[#1B38A3] text-white font-sans text-sm font-semibold px-6 py-3 rounded shadow-sm transition-colors focus-architectural"
              >
                Enquire About Implant Care
              </button>
            </div>
          </div>

          {/* Technical Implant Anatomy Diagram (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl shadow-[0_4px_20px_rgba(32,38,51,0.06)] border border-[#E2E6ED]">
            <ImplantAnatomyDiagram />
          </div>
        </div>
      </div>
    </section>
  );
};
