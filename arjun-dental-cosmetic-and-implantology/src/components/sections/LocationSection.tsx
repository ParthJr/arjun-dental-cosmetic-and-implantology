import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { CLINIC_CONFIG } from '../../config/clinic';
import { MapGraphic } from '../common/MapGraphic';

export const LocationSection: React.FC = () => {
  return (
    <section id="location-section" className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Clinic Details (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <span className="font-sans text-xs font-semibold text-[#2449C6] uppercase tracking-wider">
              Clinical Facility
            </span>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#151C28] tracking-tight">
              Find Us in Kudasan.
            </h2>

            <p className="font-sans text-base text-[#444654] leading-relaxed">
              Conveniently located in Gandhinagar with modern sterilization infrastructure, high-definition digital imaging, and patient parking.
            </p>

            <div className="flex flex-col gap-4 my-2">
              {/* Address Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#E8EDFF] flex items-center justify-center text-[#2449C6] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-display text-[15px] text-[#151C28] font-bold">
                    Address
                  </span>
                  <span className="font-sans text-xs sm:text-sm text-[#444654]">
                    {CLINIC_CONFIG.address.full}
                  </span>
                </div>
              </div>

              {/* Phone Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#E8EDFF] flex items-center justify-center text-[#2449C6] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-display text-[15px] text-[#151C28] font-bold">
                    Phone Inquiries
                  </span>
                  <a
                    href={`tel:${CLINIC_CONFIG.phone.tel}`}
                    className="font-sans text-xs sm:text-sm text-[#2449C6] font-semibold hover:underline"
                  >
                    {CLINIC_CONFIG.phone.display}
                  </a>
                </div>
              </div>

              {/* Hours Item */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#E8EDFF] flex items-center justify-center text-[#2449C6] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-display text-[15px] text-[#151C28] font-bold">
                    Hours of Operation
                  </span>
                  <span className="font-sans text-xs sm:text-sm text-[#444654]">
                    {CLINIC_CONFIG.schedule.weekdaySaturday}
                  </span>
                  <span className="block font-sans text-xs text-[#727C8D] mt-0.5">
                    {CLINIC_CONFIG.schedule.advisory}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={CLINIC_CONFIG.maps.destinationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#2449C6] hover:bg-[#1B38A3] text-white font-sans text-sm font-semibold px-6 py-3 rounded shadow-sm transition-colors focus-architectural"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${CLINIC_CONFIG.phone.tel}`}
                className="inline-flex items-center justify-center gap-2 bg-[#F1F4F9] hover:bg-[#E8EDFF] text-[#151C28] font-sans text-sm font-semibold px-6 py-3 rounded border border-[#E2E6ED] transition-colors focus-architectural"
              >
                <Phone className="w-4 h-4 text-[#2449C6]" />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>

          {/* Styled Location Map Viewport (6 cols) */}
          <div className="lg:col-span-6">
            <MapGraphic />
          </div>
        </div>
      </div>
    </section>
  );
};
