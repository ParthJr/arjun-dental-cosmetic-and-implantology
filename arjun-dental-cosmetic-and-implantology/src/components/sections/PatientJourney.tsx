import React from 'react';

export const PatientJourney: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-[#F9F9FF] border-b border-[#E2E6ED]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="font-sans text-xs font-semibold text-[#2449C6] uppercase tracking-wider">
            Structured Care
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#151C28] tracking-tight mt-1">
            A Clear Path to Your Visit.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#444654] mt-2">
            A transparent, stress-free clinical experience from initial contact to enduring wellness.
          </p>
        </div>

        {/* 3-Step Horizontal Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connecting Line for Tablet/Desktop */}
          <div
            className="hidden md:block absolute top-12 left-[18%] right-[18%] h-0.5 bg-[#E2E6ED] -z-0"
            aria-hidden="true"
          />

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-xl shadow-xs border border-[#E2E6ED]">
            <div className="w-14 h-14 rounded-full bg-[#2449C6] text-white font-display text-xl font-bold flex items-center justify-center mb-4 shadow-xs">
              01
            </div>
            <h3 className="font-display text-lg font-bold text-[#151C28] mb-2">
              Get in Touch
            </h3>
            <p className="font-sans text-sm text-[#444654] leading-relaxed">
              Send an appointment request online or reach out via phone to register your dental concern.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-xl shadow-xs border border-[#E2E6ED]">
            <div className="w-14 h-14 rounded-full bg-[#2449C6] text-white font-display text-xl font-bold flex items-center justify-center mb-4 shadow-xs">
              02
            </div>
            <h3 className="font-display text-lg font-bold text-[#151C28] mb-2">
              Discuss Your Needs
            </h3>
            <p className="font-sans text-sm text-[#444654] leading-relaxed">
              Ask questions, review clinical diagnostic findings, and understand the options relevant to your situation.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center p-6 sm:p-8 bg-white rounded-xl shadow-xs border border-[#E2E6ED]">
            <div className="w-14 h-14 rounded-full bg-[#2449C6] text-white font-display text-xl font-bold flex items-center justify-center mb-4 shadow-xs">
              03
            </div>
            <h3 className="font-display text-lg font-bold text-[#151C28] mb-2">
              Plan the Next Step
            </h3>
            <p className="font-sans text-sm text-[#444654] leading-relaxed">
              Review detailed recommendations, schedule procedures at your pace, and arrange ongoing maintenance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
