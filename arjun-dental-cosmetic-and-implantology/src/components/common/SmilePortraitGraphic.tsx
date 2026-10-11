import React, { useState } from 'react';

interface SmilePortraitGraphicProps {
  className?: string;
}

export const SmilePortraitGraphic: React.FC<SmilePortraitGraphicProps> = ({ className = '' }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {/* Outer container */}
      <div className="rounded-xl overflow-hidden shadow-[0_8px_24px_rgba(32,38,51,0.08)] bg-[#E8EDFF] border border-[#E2E6ED]">
        {!imgError ? (
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
            alt="Natural genuine smile portrait reflecting high aesthetic standards and healthy tooth contour"
            className="w-full h-[500px] object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          /* High-Fidelity Vector Fallback */
          <div className="w-full h-[500px] bg-gradient-to-tr from-[#E9DCCB] via-[#F1F4F9] to-[#DDE1FF] flex items-center justify-center p-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#2449C6] text-white flex items-center justify-center mb-4 shadow-md">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-display text-lg font-bold text-[#151C28]">
                Natural Cosmetic Harmony
              </h4>
              <p className="font-sans text-xs text-[#727C8D] mt-1 max-w-[200px] mx-auto">
                Individualized smile design calibrated to facial proportions
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Editorial Floating Metric Card in Warm Sand (#E9DCCB) */}
      <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-[#E9DCCB] text-[#4E4639] p-5 rounded-xl shadow-lg border border-[#665D50]/20 max-w-[240px]">
        <div className="font-display text-[15px] font-bold text-[#211B10]">
          Natural Esthetics
        </div>
        <div className="font-sans text-[12px] text-[#665D50] mt-1 leading-snug">
          Preserving natural tooth structure while enhancing contour and brightness.
        </div>
      </div>
    </div>
  );
};
