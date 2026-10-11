import React from 'react';
import { MessageSquare, Eye, CheckCircle2, Calendar } from 'lucide-react';

export const PrecisionPlanningSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="precision-section" className="w-full bg-[#2449C6] text-white py-16 lg:py-24">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Section Heading Block */}
        <div className="max-w-3xl mb-14">
          <span className="font-sans text-xs font-semibold text-[#DDE1FF] uppercase tracking-wider">
            Your Care, Your Plan
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mt-2 leading-tight">
            Understand the Options. Make an Informed Decision.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#DDE1FF]/90 mt-3 leading-relaxed">
            Every dental concern is unique. A clinical consultation provides clarity into your oral health parameters, all realistic treatment pathways, and structured milestone planning.
          </p>
        </div>

        {/* Structured Three Stages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white/10 backdrop-blur-xs rounded-xl p-6 sm:p-8 flex flex-col justify-between border border-white/15">
            <div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-[#DDE1FF]/70 mb-3">
                01
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Consultation
              </h3>
              <p className="font-sans text-sm text-[#DDE1FF]/90 leading-relaxed">
                Open dialogue regarding your concerns, aesthetic goals, functional limitations, and complete dental medical history in a comfortable setting.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/15 flex items-center gap-2 text-[#DDE1FF] text-[11px] font-sans font-semibold uppercase tracking-wider">
              <MessageSquare className="w-4 h-4" />
              <span>Initial Dialogue</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white/10 backdrop-blur-xs rounded-xl p-6 sm:p-8 flex flex-col justify-between border border-white/15">
            <div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-[#DDE1FF]/70 mb-3">
                02
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Assessment
              </h3>
              <p className="font-sans text-sm text-[#DDE1FF]/90 leading-relaxed">
                Clinical inspection, anatomical imaging, and bite analysis to provide an objective presentation of diagnostic findings and treatment suitability.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/15 flex items-center gap-2 text-[#DDE1FF] text-[11px] font-sans font-semibold uppercase tracking-wider">
              <Eye className="w-4 h-4" />
              <span>Diagnostic Discovery</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white/10 backdrop-blur-xs rounded-xl p-6 sm:p-8 flex flex-col justify-between border border-white/15">
            <div>
              <div className="font-display text-3xl sm:text-4xl font-bold text-[#DDE1FF]/70 mb-3">
                03
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-2">
                Treatment Planning
              </h3>
              <p className="font-sans text-sm text-[#DDE1FF]/90 leading-relaxed">
                Review procedural stages, transparent material choices, timelines, and post-treatment maintenance protocols without pressure.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/15 flex items-center gap-2 text-[#DDE1FF] text-[11px] font-sans font-semibold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>Actionable Roadmap</span>
            </div>
          </div>
        </div>

        {/* Action Footer Banner */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 sm:p-8 bg-white/10 backdrop-blur-xs rounded-xl border border-white/15">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-white/15 flex items-center justify-center text-white flex-shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display text-base sm:text-lg font-bold text-white">
                Ready to begin your consultation?
              </div>
              <div className="font-sans text-xs sm:text-sm text-[#DDE1FF]/80">
                We arrange convenient appointments during weekdays and Saturdays.
              </div>
            </div>
          </div>

          <button
            onClick={() => scrollTo('appointment-form')}
            className="inline-flex items-center justify-center bg-[#EEE1D0] text-[#211B10] hover:bg-[#E9DCCB] font-sans text-xs sm:text-sm font-semibold px-6 py-3 rounded shadow-sm transition-colors whitespace-nowrap focus-architectural"
          >
            Plan Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
