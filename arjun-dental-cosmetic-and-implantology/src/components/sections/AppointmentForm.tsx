import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Calendar, CheckCircle2, AlertCircle, RotateCcw, Loader2 } from 'lucide-react';
import { CLINIC_CONFIG } from '../../config/clinic';
import { AppointmentRequest } from '../../types/clinic';

interface AppointmentFormProps {
  initialService?: string;
  onSubmissionSuccess?: () => void;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialService = '',
  onSubmissionSuccess,
}) => {
  const [formData, setFormData] = useState<AppointmentRequest>({
    fullName: '',
    phone: '',
    service: initialService || '',
    preferredDate: '',
    preferredTime: 'Morning Window (9:00 AM – 1:00 PM)',
    notes: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [lastSubmissionId, setLastSubmissionId] = useState<string | null>(null);

  // Update if parent passes a pre-selected service
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  // Minimum date allowed is today
  const todayString = new Date().toISOString().split('T')[0];

  const validatePhone = (phone: string): boolean => {
    // Allows 10 digit Indian number with optional +91 or 0 prefix
    const cleaned = phone.replace(/[\s\-()]/g, '');
    const indianRegex = /^(\+91|0)?[6-9]\d{9}$/;
    return indianRegex.test(cleaned);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    // 1. Full Name
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (minimum 2 characters).';
    }

    // 2. Indian Mobile Number
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required.';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please provide a valid 10-digit Indian mobile number (e.g., 98765 43210).';
    }

    // 3. Service of Interest
    if (!formData.service) {
      newErrors.service = 'Please select a service or consultation concern.';
    }

    // 4. Preferred Date
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select your preferred appointment date.';
    } else if (formData.preferredDate < todayString) {
      newErrors.preferredDate = 'Appointment date cannot be in the past.';
    }

    // 5. Preferred Time
    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time window.';
    }

    // 6. Privacy Consent
    if (!formData.consent) {
      newErrors.consent = 'You must acknowledge the communication consent to proceed.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Process submission
    setIsSubmitting(true);

    try {
      // Simulate real asynchronous network dispatch
      await new Promise((resolve) => setTimeout(resolve, 800));

      const newId = `APT-${Date.now()}`;
      const payload: AppointmentRequest = {
        ...formData,
        id: newId,
        submittedAt: new Date().toISOString(),
      };

      // Save to local storage ledger for front-desk review
      const existing = localStorage.getItem('arjun_dental_appointment_requests');
      const requestsList: AppointmentRequest[] = existing ? JSON.parse(existing) : [];
      requestsList.unshift(payload);
      localStorage.setItem('arjun_dental_appointment_requests', JSON.stringify(requestsList));

      setLastSubmissionId(newId);
      setIsSubmitted(true);
      if (onSubmissionSuccess) onSubmissionSuccess();
    } catch (err) {
      console.error('Error submitting appointment', err);
      setErrors({ form: 'An unexpected transmission error occurred. Please call the clinic directly at 090999 24158.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      service: '',
      preferredDate: '',
      preferredTime: 'Morning Window (9:00 AM – 1:00 PM)',
      notes: '',
      consent: false,
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="appointment-form" className="w-full py-16 lg:py-24 bg-[#F9F9FF] border-b border-[#E2E6ED]">
      <div className="max-w-[1360px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Side: Context & Assistance (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="font-sans text-xs font-semibold text-[#2449C6] uppercase tracking-wider">
              Priority Booking
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#151C28] tracking-tight leading-tight">
              Start With a Consultation.
            </h2>
            <p className="font-sans text-base text-[#444654] leading-relaxed">
              Fill in your preferred details. Our front desk team will contact you to confirm available slots and discuss preliminary details.
            </p>

            {/* Direct Details Box */}
            <div className="bg-white p-6 rounded-xl shadow-xs border border-[#E2E6ED] flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E8EDFF] flex items-center justify-center text-[#2449C6] flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-sans text-[11px] text-[#727C8D] uppercase tracking-wider font-semibold">
                    Direct Assistance
                  </span>
                  <a
                    href={`tel:${CLINIC_CONFIG.phone.tel}`}
                    className="font-display text-base font-bold text-[#151C28] hover:text-[#2449C6] transition-colors"
                  >
                    {CLINIC_CONFIG.phone.display}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E8EDFF] flex items-center justify-center text-[#2449C6] flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-sans text-[11px] text-[#727C8D] uppercase tracking-wider font-semibold">
                    Clinical Hours
                  </span>
                  <span className="font-sans text-sm text-[#151C28]">
                    {CLINIC_CONFIG.schedule.weekdaySaturday}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#E8EDFF] flex items-center justify-center text-[#2449C6] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-sans text-[11px] text-[#727C8D] uppercase tracking-wider font-semibold">
                    Location
                  </span>
                  <span className="font-sans text-xs sm:text-sm text-[#151C28] leading-snug">
                    {CLINIC_CONFIG.address.full}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Card Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#F1F4F9] p-6 sm:p-8 lg:p-10 rounded-xl shadow-sm border border-[#E2E6ED]">
            {!isSubmitted ? (
              <div id="form-content">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#151C28] mb-1">
                  Appointment Request Form
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#444654] mb-6">
                  Please complete the required details below.
                </p>

                {errors.form && (
                  <div className="mb-4 p-3 bg-[#FFDAD6] text-[#93000A] rounded-lg text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errors.form}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="fullName" className="font-sans text-xs font-semibold text-[#151C28] uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Ramesh Patel"
                        className={`w-full bg-white text-[#151C28] px-3.5 py-2.5 rounded text-sm border focus:outline-none focus:ring-2 focus:ring-[#2449C6]/20 ${
                          errors.fullName ? 'border-[#BA1A1A]' : 'border-[#C4C5D6]'
                        }`}
                        required
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      />
                      {errors.fullName && (
                        <span id="fullName-error" className="text-[11px] text-[#BA1A1A] font-medium">
                          {errors.fullName}
                        </span>
                      )}
                    </div>

                    {/* Mobile Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="font-sans text-xs font-semibold text-[#151C28] uppercase tracking-wider">
                        Mobile Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className={`w-full bg-white text-[#151C28] px-3.5 py-2.5 rounded text-sm border focus:outline-none focus:ring-2 focus:ring-[#2449C6]/20 ${
                          errors.phone ? 'border-[#BA1A1A]' : 'border-[#C4C5D6]'
                        }`}
                        required
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                      />
                      {errors.phone && (
                        <span id="phone-error" className="text-[11px] text-[#BA1A1A] font-medium">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Service of Interest */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="font-sans text-xs font-semibold text-[#151C28] uppercase tracking-wider">
                      Service of Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full bg-white text-[#151C28] px-3.5 py-2.5 rounded text-sm border focus:outline-none focus:ring-2 focus:ring-[#2449C6]/20 ${
                        errors.service ? 'border-[#BA1A1A]' : 'border-[#C4C5D6]'
                      }`}
                      required
                    >
                      <option value="">Select a clinical procedure or concern...</option>
                      <option value="Comprehensive Dental Consultation">Comprehensive Dental Consultation</option>
                      <option value="Cosmetic Dentistry & Smile Aesthetics">Cosmetic Dentistry &amp; Smile Aesthetics</option>
                      <option value="Dental Implant Consultation & 3D Assessment">Dental Implant Consultation &amp; 3D Assessment</option>
                      <option value="Restorative Dentistry (Crowns / Fillings)">Restorative Dentistry (Crowns / Fillings)</option>
                      <option value="Emergency Dental Enquiry">Emergency Dental Enquiry</option>
                      <option value="Routine Preventive Checkup & Cleaning">Routine Preventive Checkup &amp; Cleaning</option>
                      <option value="Other / Clinical Advice Needed">Other / Not Sure (Need Clinical Advice)</option>
                    </select>
                    {errors.service && (
                      <span className="text-[11px] text-[#BA1A1A] font-medium">
                        {errors.service}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Preferred Date */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="preferredDate" className="font-sans text-xs font-semibold text-[#151C28] uppercase tracking-wider">
                        Preferred Date *
                      </label>
                      <input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        min={todayString}
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className={`w-full bg-white text-[#151C28] px-3.5 py-2.5 rounded text-sm border focus:outline-none focus:ring-2 focus:ring-[#2449C6]/20 ${
                          errors.preferredDate ? 'border-[#BA1A1A]' : 'border-[#C4C5D6]'
                        }`}
                        required
                      />
                      {errors.preferredDate && (
                        <span className="text-[11px] text-[#BA1A1A] font-medium">
                          {errors.preferredDate}
                        </span>
                      )}
                    </div>

                    {/* Preferred Time Window */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="preferredTime" className="font-sans text-xs font-semibold text-[#151C28] uppercase tracking-wider">
                        Preferred Time *
                      </label>
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full bg-white text-[#151C28] px-3.5 py-2.5 rounded text-sm border border-[#C4C5D6] focus:outline-none focus:ring-2 focus:ring-[#2449C6]/20"
                        required
                      >
                        <option value="Morning Window (9:00 AM – 1:00 PM)">Morning Window (9:00 AM – 1:00 PM)</option>
                        <option value="Evening Window (4:00 PM – 8:00 PM)">Evening Window (4:00 PM – 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Symptoms or Specific Notes */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="notes" className="font-sans text-xs font-semibold text-[#151C28] uppercase tracking-wider">
                      Optional Symptoms or Specific Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Share any specific pain, history, or cosmetic questions..."
                      className="w-full bg-white text-[#151C28] px-3.5 py-2.5 rounded text-sm border border-[#C4C5D6] focus:outline-none focus:ring-2 focus:ring-[#2449C6]/20 resize-none"
                    />
                  </div>

                  {/* Privacy Consent Checkbox */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-1 w-4 h-4 text-[#2449C6] rounded border-[#727C8D] focus:ring-[#2449C6]"
                      required
                    />
                    <label htmlFor="consent" className="font-sans text-xs text-[#444654] cursor-pointer leading-normal">
                      I agree to be contacted by Arjun Dental Cosmetic &amp; Implantology regarding my appointment enquiry via phone call or WhatsApp.
                    </label>
                  </div>
                  {errors.consent && (
                    <span className="text-[11px] text-[#BA1A1A] font-medium -mt-2">
                      {errors.consent}
                    </span>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#2449C6] hover:bg-[#1B38A3] text-white font-sans text-sm font-semibold px-6 py-3.5 rounded shadow-sm transition-colors focus-architectural disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Processing Enquiry...</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4" />
                          <span>Request an Appointment</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Success Confirmation Box matching the suggested copy */
              <div className="flex flex-col items-center justify-center text-center py-8 sm:py-12 gap-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#2449C6] text-white flex items-center justify-center shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#151C28]">
                  Request Received
                </h3>
                <p className="font-sans text-sm text-[#444654] max-w-md leading-relaxed">
                  Your appointment request has been received. The clinic team will contact you to confirm availability.
                </p>

                {lastSubmissionId && (
                  <span className="font-mono text-xs text-[#727C8D]">
                    Reference ID: {lastSubmissionId}
                  </span>
                )}

                <div className="p-4 bg-white rounded-lg w-full max-w-md text-left border border-[#E2E6ED]">
                  <div className="font-sans text-[11px] text-[#727C8D] uppercase tracking-wider font-semibold">
                    Immediate Question or Urgent Triage?
                  </div>
                  <div className="font-display text-sm font-bold text-[#151C28] mt-1 flex items-center justify-between">
                    <span>Direct Surgical Desk:</span>
                    <a
                      href={`tel:${CLINIC_CONFIG.phone.tel}`}
                      className="text-[#2449C6] hover:underline"
                    >
                      {CLINIC_CONFIG.phone.display}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 font-sans text-xs sm:text-sm font-semibold text-[#2449C6] hover:text-[#1B38A3] transition-colors pt-2 focus-architectural"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Submit another inquiry</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
