import React, { useState, useEffect } from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import SpinningWheelBackground from '../components/common/SpinningWheelBackground';
import { BUSINESS_INFO } from '../data/businessInfo';
import { SERVICES_DATA } from '../data/services';

export default function Contact({ onNavigate, preselectedService = '' }) {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceInterestedIn: preselectedService || '',
    subject: '',
    message: '',
  });

  // Validation Errors
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Update selected service if passed via navigation
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        serviceInterestedIn: preselectedService,
      }));
    }
  }, [preselectedService]);

  const validate = () => {
    const newErrors = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full Name must be at least 2 characters.';
    }

    // Phone Number (Indian phone number validation: 10 digits starting with 6-9, or +91 prefix)
    const phoneClean = formData.phone.replace(/[\s\-\(\)]/g, '');
    const indianPhoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
    if (!phoneClean) {
      newErrors.phone = 'Phone number is required.';
    } else if (!indianPhoneRegex.test(phoneClean)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number.';
    }

    // Email Address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    // Service Interested In
    if (!formData.serviceInterestedIn) {
      newErrors.serviceInterestedIn = 'Please select a service category.';
    }

    // Subject
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message or query details.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters for clarity.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for field once typed
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate validation pass and prompt integration readiness
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionComplete(true);
      setSubmittedData({ ...formData });
    }, 800);
  };

  // Helper to construct WhatsApp message from verified fields
  const generateWhatsAppUrl = () => {
    if (!submittedData) return BUSINESS_INFO.contact.whatsappUrl;
    const text = encodeURIComponent(
      `Hello Asirbad Consultancy,\nMy Name: ${submittedData.fullName}\nPhone: ${submittedData.phone}\nEmail: ${submittedData.email}\nService: ${submittedData.serviceInterestedIn}\nSubject: ${submittedData.subject}\nMessage: ${submittedData.message}`
    );
    return `https://wa.me/919830039464?text=${text}`;
  };

  // Helper to construct Mailto link from verified fields
  const generateMailtoUrl = () => {
    if (!submittedData) return BUSINESS_INFO.contact.emailMailto;
    const subject = encodeURIComponent(`Taxation Enquiry: ${submittedData.subject} [${submittedData.serviceInterestedIn}]`);
    const body = encodeURIComponent(
      `Dear Gobinda Kumar Mukherjee,\n\nName: ${submittedData.fullName}\nPhone: ${submittedData.phone}\nEmail: ${submittedData.email}\nService: ${submittedData.serviceInterestedIn}\n\nEnquiry Details:\n${submittedData.message}\n\nRegards,\n${submittedData.fullName}`
    );
    return `mailto:asirbadconsultancy@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-[#F8F6F0]">
      {/* 1. Page Hero */}
      <PageHero
        title="Contact Asirbad Consultancy"
        subtitle="Connect with Gobinda Kumar Mukherjee for professional taxation consultancy, ITR filing, GST compliance, and document guidance."
        currentPageLabel="Contact"
        onNavigate={onNavigate}
      />

      {/* 2. Contact Information & Enquiry Form (Two Columns) */}
      <section className="py-20 md:py-28 bg-[#F8F6F0] relative overflow-hidden">
        {/* Dynamic Spinning Guilloche Wheelwork Background */}
        <SpinningWheelBackground opacity="opacity-70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            {/* Left Side: Contact Information (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <SectionHeading
                  caption="Get in Touch"
                  title="Direct Financial Advisory"
                  subtitle="Reach out for clear, structured answers to your tax responsibilities."
                />

                <div className="space-y-6 text-sm text-[#555F6B]">
                  {/* Company & Consultant */}
                  <div className="p-5 rounded-xs bg-[#FFFFFF] border border-[#D8D6CE]">
                    <div className="text-xs uppercase tracking-wider text-[#B69A64] font-semibold">
                      Consultancy Practice
                    </div>
                    <div className="font-serif text-xl font-bold text-[#0B1D30] mt-1">
                      {BUSINESS_INFO.companyName}
                    </div>
                    <div className="text-xs text-[#555F6B] mt-1">
                      Principal: <strong className="text-[#0B1D30]">{BUSINESS_INFO.owner.name}</strong> ({BUSINESS_INFO.owner.role})
                    </div>
                    <div className="mt-3 pt-3 border-t border-[#E9E8E3] text-xs font-mono text-[#8F7441]">
                      GSTIN: {BUSINESS_INFO.compliance.gstin}
                    </div>
                  </div>

                  {/* Direct Phone */}
                  <div className="p-5 rounded-xs bg-[#FFFFFF] border border-[#D8D6CE]">
                    <div className="text-xs uppercase tracking-wider text-[#B69A64] font-semibold">
                      Telephone / Mobile
                    </div>
                    <a
                      href={BUSINESS_INFO.contact.phoneTel}
                      className="font-serif text-2xl font-bold text-[#0B1D30] hover:text-[#B69A64] transition-colors mt-1 block"
                    >
                      +91 {BUSINESS_INFO.contact.phone}
                    </a>
                    <p className="text-xs text-[#555F6B] mt-1">
                      Available for appointment scheduling and taxation inquiries.
                    </p>
                  </div>

                  {/* Email */}
                  <div className="p-5 rounded-xs bg-[#FFFFFF] border border-[#D8D6CE]">
                    <div className="text-xs uppercase tracking-wider text-[#B69A64] font-semibold">
                      Official Email
                    </div>
                    <a
                      href={BUSINESS_INFO.contact.emailMailto}
                      className="font-medium text-[#0B1D30] hover:text-[#B69A64] transition-colors text-base mt-1 block break-all"
                    >
                      {BUSINESS_INFO.contact.email}
                    </a>
                    <p className="text-xs text-[#555F6B] mt-1">
                      Send your tax notices, Form 16, or return documentation.
                    </p>
                  </div>

                  {/* WhatsApp Quick Link */}
                  <div className="p-5 rounded-xs bg-[#FFFFFF] border border-[#D8D6CE] flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#B69A64] font-semibold">
                        Instant Messaging
                      </div>
                      <div className="font-semibold text-sm text-[#0B1D30] mt-0.5">
                        WhatsApp Consultation
                      </div>
                    </div>
                    <a
                      href={BUSINESS_INFO.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xs bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20ba5a] transition-colors flex items-center gap-1.5"
                    >
                      Chat Now
                    </a>
                  </div>

                  {/* Registered Address & Map Link */}
                  <div className="p-5 rounded-xs bg-[#FFFFFF] border border-[#D8D6CE]">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-xs uppercase tracking-wider text-[#B69A64] font-semibold">
                        Registered Office Location
                      </div>
                      <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded-xs bg-[#F8F6F0] text-[#8F7441] border border-[#D8D6CE]">
                        Sodepur, Kolkata
                      </span>
                    </div>
                    <address className="not-italic text-sm text-[#0B1D30] font-medium leading-relaxed mt-2">
                      {BUSINESS_INFO.location.houseName}, {BUSINESS_INFO.location.road},<br />
                      {BUSINESS_INFO.location.holdingNumber}, {BUSINESS_INFO.location.locality},<br />
                      {BUSINESS_INFO.location.area}, {BUSINESS_INFO.location.city} – {BUSINESS_INFO.location.postalCode},<br />
                      {BUSINESS_INFO.location.state}, {BUSINESS_INFO.location.country}.
                    </address>
                    <div className="mt-2 text-xs font-semibold text-[#8F7441]">
                      Nearby Landmark: {BUSINESS_INFO.location.landmark}
                    </div>

                    {/* Direct Map Integration Link */}
                    <div className="mt-4 pt-3 border-t border-[#E9E8E3] flex flex-wrap items-center justify-between gap-2">
                      <a
                        href={BUSINESS_INFO.location.googleMapsPlaceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#0B1D30] hover:text-[#B69A64] transition-colors inline-flex items-center gap-1.5"
                      >
                        <svg
                          className="w-4 h-4 text-[#B69A64]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>View on Google Maps</span>
                      </a>

                      <a
                        href={BUSINESS_INFO.location.googleMapsDirectionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-[#B69A64] hover:text-[#0B1D30] transition-colors"
                      >
                        Get Directions &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="mt-6 p-4 rounded-xs bg-[#142B45] text-[#F8F6F0] text-xs leading-relaxed">
                <span className="text-[#DFC89B] font-semibold block uppercase tracking-wider mb-1">
                  Consultation Schedule
                </span>
                {BUSINESS_INFO.workingHours}
              </div>
            </div>

            {/* Right Side: Professional Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-10 rounded-xs bg-[#FFFFFF] border border-[#D8D6CE] shadow-lg relative">
                <div className="border-b border-[#E9E8E3] pb-6 mb-8">
                  <div className="inline-flex items-center gap-2 mb-2">
                    <span className="w-4 h-[1px] bg-[#B69A64]"></span>
                    <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B69A64]">
                      Enquiry Submission
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1D30]">
                    Send a Taxation Enquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555F6B] mt-1">
                    Please provide your details and the service you are interested in. 
                    All information is handled with strict confidentiality.
                  </p>
                </div>

                {!submissionComplete ? (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Full Name & Phone Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Full Name *"
                          aria-label="Full Name"
                          className={`w-full px-4 py-3 text-sm rounded-xs border transition-colors focus:outline-none focus:ring-1 ${
                            errors.fullName
                              ? 'border-red-500 focus:ring-red-500 bg-red-50/20'
                              : 'border-[#D8D6CE] focus:border-[#B69A64] focus:ring-[#B69A64] bg-[#F8F6F0]/40'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-xs text-red-600 font-medium">
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number * (10 Digits)"
                          aria-label="Phone Number"
                          className={`w-full px-4 py-3 text-sm rounded-xs border transition-colors focus:outline-none focus:ring-1 ${
                            errors.phone
                              ? 'border-red-500 focus:ring-red-500 bg-red-50/20'
                              : 'border-[#D8D6CE] focus:border-[#B69A64] focus:ring-[#B69A64] bg-[#F8F6F0]/40'
                          }`}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-xs text-red-600 font-medium">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email & Service Interested In Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Email Address */}
                      <div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address *"
                          aria-label="Email Address"
                          className={`w-full px-4 py-3 text-sm rounded-xs border transition-colors focus:outline-none focus:ring-1 ${
                            errors.email
                              ? 'border-red-500 focus:ring-red-500 bg-red-50/20'
                              : 'border-[#D8D6CE] focus:border-[#B69A64] focus:ring-[#B69A64] bg-[#F8F6F0]/40'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-xs text-red-600 font-medium">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      {/* Service Interested In */}
                      <div>
                        <select
                          id="serviceInterestedIn"
                          name="serviceInterestedIn"
                          value={formData.serviceInterestedIn}
                          onChange={handleChange}
                          aria-label="Service Interested In"
                          className={`w-full px-4 py-3 text-sm rounded-xs border transition-colors focus:outline-none focus:ring-1 ${
                            errors.serviceInterestedIn
                              ? 'border-red-500 focus:ring-red-500 bg-red-50/20'
                              : 'border-[#D8D6CE] focus:border-[#B69A64] focus:ring-[#B69A64] bg-[#F8F6F0]/40'
                          }`}
                        >
                          <option value="">-- Select Service Interested In * --</option>
                          {SERVICES_DATA.map((srv) => (
                            <option key={srv.id} value={srv.title}>
                              {srv.title}
                            </option>
                          ))}
                          <option value="General Taxation Enquiry">
                            General Taxation Enquiry
                          </option>
                        </select>
                        {errors.serviceInterestedIn && (
                          <p className="mt-1 text-xs text-red-600 font-medium">
                            {errors.serviceInterestedIn}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject * (e.g. Query regarding ITR-2 filing and capital gains)"
                        aria-label="Subject"
                        className={`w-full px-4 py-3 text-sm rounded-xs border transition-colors focus:outline-none focus:ring-1 ${
                          errors.subject
                            ? 'border-red-500 focus:ring-red-500 bg-red-50/20'
                            : 'border-[#D8D6CE] focus:border-[#B69A64] focus:ring-[#B69A64] bg-[#F8F6F0]/40'
                        }`}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-xs text-red-600 font-medium">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message / Query Details * (Please describe your tax situation, relevant assessment year, or specific doubts...)"
                        aria-label="Message or Query Details"
                        className={`w-full px-4 py-3 text-sm rounded-xs border transition-colors focus:outline-none focus:ring-1 ${
                          errors.message
                            ? 'border-red-500 focus:ring-red-500 bg-red-50/20'
                            : 'border-[#D8D6CE] focus:border-[#B69A64] focus:ring-[#B69A64] bg-[#F8F6F0]/40'
                        }`}
                      ></textarea>
                      {errors.message && (
                        <p className="mt-1 text-xs text-red-600 font-medium">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Transparency & Backend Note */}
                    <div className="p-3.5 rounded-xs bg-[#F8F6F0] border border-[#D8D6CE] text-xs text-[#555F6B] leading-relaxed">
                      <span className="font-semibold text-[#0B1D30]">Notice on Form Processing:</span>{' '}
                      Your enquiry details will be validated and formatted. To ensure direct, immediate 
                      delivery to consultant Gobinda Kumar Mukherjee without mail relay latency, you will 
                      be provided with 1-click WhatsApp and email transmission options upon submission.
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="gold"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="inline-flex items-center gap-2">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#0B1D30]"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8H4z"
                              ></path>
                            </svg>
                            Validating Enquiry...
                          </span>
                        ) : (
                          'Submit Enquiry'
                        )}
                      </Button>
                    </div>
                  </form>
                ) : (
                  /* Success & Direct Transmission Options */
                  <div className="py-6 text-left">
                    <div className="w-12 h-12 rounded-full bg-[#142B45] text-[#DFC89B] flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <h4 className="font-serif text-2xl font-bold text-[#0B1D30]">
                      Enquiry Validated &amp; Ready for Transmission
                    </h4>

                    <p className="mt-2 text-sm text-[#555F6B] leading-relaxed">
                      Thank you, <strong className="text-[#0B1D30]">{submittedData?.fullName}</strong>. 
                      Your enquiry regarding <strong className="text-[#0B1D30]">{submittedData?.serviceInterestedIn}</strong> has 
                      been formatted.
                    </p>

                    {/* Transmit Options Box */}
                    <div className="mt-6 p-5 rounded-xs bg-[#F8F6F0] border border-[#D8D6CE]">
                      <div className="text-xs uppercase tracking-wider text-[#B69A64] font-semibold mb-2">
                        Immediate Direct Delivery Options:
                      </div>
                      <p className="text-xs text-[#555F6B] mb-4">
                        Transmit your formatted query directly to consultant Gobinda Kumar Mukherjee:
                      </p>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={generateWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2.5 px-4 rounded-xs bg-[#25D366] text-white text-xs font-semibold text-center hover:bg-[#20ba5a] transition-colors flex items-center justify-center gap-2"
                        >
                          Send via WhatsApp (Direct)
                        </a>

                        <a
                          href={generateMailtoUrl()}
                          className="flex-1 py-2.5 px-4 rounded-xs bg-[#0B1D30] text-[#F8F6F0] text-xs font-semibold text-center hover:bg-[#142B45] transition-colors flex items-center justify-center gap-2 border border-[#B69A64]/40"
                        >
                          Send via Email Client
                        </a>
                      </div>
                    </div>

                    {/* Reset Button */}
                    <div className="mt-6 text-center">
                      <button
                        onClick={() => {
                          setSubmissionComplete(false);
                          setSubmittedData(null);
                        }}
                        className="text-xs text-[#0B1D30] hover:text-[#B69A64] underline font-medium cursor-pointer"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Google Maps Integration Section */}
      <section className="py-16 bg-[#FFFFFF] bg-ledger-grid border-t border-[#E9E8E3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-4 h-[1px] bg-[#B69A64]"></span>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B69A64]">
                  Interactive Map Integration
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1D30]">
                Find Asirbad Consultancy in Sodepur
              </h2>
              <p className="text-sm text-[#555F6B] mt-1">
                Located at Ashirbad, 108/1, Uttar Pally, Sodepur, Kolkata – 700110 (Near Water Tank).
              </p>
            </div>

            <div className="mt-4 md:mt-0 shrink-0 flex flex-wrap items-center gap-3">
              <Button
                variant="outline"
                size="md"
                href={BUSINESS_INFO.location.googleMapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                }
              >
                View on Google Maps
              </Button>

              <Button
                variant="gold"
                size="md"
                href={BUSINESS_INFO.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
              >
                Get Directions
              </Button>
            </div>
          </div>

          {/* Embedded Exact Google Maps iframe & Integration Container */}
          <div className="rounded-xs overflow-hidden border border-[#D8D6CE] shadow-lg bg-[#FFFFFF]">
            {/* Top Interactive Bar */}
            <div className="p-3.5 bg-[#0B1D30] text-[#F8F6F0] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B69A64] animate-pulse" />
                <span className="font-semibold text-[#F8F6F0]">
                  Asirbad Consultancy
                </span>
                <span className="text-[#DFC89B] hidden sm:inline">
                  • 108/1, Uttar Pally, Sodepur, Kolkata – 700110 (Near Water Tank)
                </span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={BUSINESS_INFO.location.googleMapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#DFC89B] hover:text-[#FFFFFF] transition-colors underline font-medium flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Exact Google Maps Embed from Business Information */}
            <div className="relative w-full h-[380px] sm:h-[450px] md:h-[500px] bg-[#E9E8E3]">
              <iframe
                src={BUSINESS_INFO.location.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Google Maps Location for Asirbad Consultancy"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Bottom Bar with Direct Map Details */}
            <div className="p-3.5 bg-[#F8F6F0] border-t border-[#E9E8E3] flex flex-wrap items-center justify-between gap-3 text-xs text-[#555F6B]">
              <div>
                <span className="font-semibold text-[#0B1D30]">Coordinates:</span>{' '}
                <span className="font-mono text-[11px] text-[#8F7441]">22°42'15.4"N 88°23'14.3"E</span>
                <span className="mx-2 text-[#D8D6CE]">|</span>
                <span>Landmark: <strong>Water Tank</strong></span>
              </div>

              <a
                href={BUSINESS_INFO.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#0B1D30] hover:text-[#B69A64] transition-colors inline-flex items-center gap-1"
              >
                <span>Navigate via GPS Directions &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
