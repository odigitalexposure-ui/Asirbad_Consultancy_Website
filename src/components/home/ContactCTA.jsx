import React from 'react';
import Button from '../common/Button';
import { BUSINESS_INFO } from '../../data/businessInfo';

export default function ContactCTA({ onNavigate }) {
  return (
    <section className="py-16 md:py-24 bg-executive-dark text-[#F8F6F0] relative overflow-hidden border-t border-[#B69A64]/30">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-financial-pattern-dark opacity-25 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Caption */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-8 h-[1px] bg-[#B69A64]"></span>
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFC89B]">
            Consultation &amp; Advisory
          </span>
          <span className="w-8 h-[1px] bg-[#B69A64]"></span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#F8F6F0] tracking-tight leading-tight">
          Need Assistance With Your Taxation Requirements?
        </h2>

        {/* Supporting Text */}
        <p className="mt-4 text-base sm:text-lg text-[#E9E8E3]/85 max-w-2xl mx-auto font-light leading-relaxed">
          Connect with Asirbad Consultancy to discuss your taxation and consultancy requirements. 
          We offer direct, personalized guidance tailored to your specific circumstances.
        </p>

        {/* Phone Highlight */}
        <div className="mt-6 inline-block py-2 px-4 rounded-xs bg-[#142B45] border border-[#B69A64]/40">
          <span className="text-xs text-[#DFC89B] uppercase tracking-wider mr-2">
            Direct Helpline:
          </span>
          <a
            href={BUSINESS_INFO.contact.phoneTel}
            className="font-serif text-lg sm:text-xl font-bold text-[#F8F6F0] hover:text-[#DFC89B] transition-colors"
          >
            +91 {BUSINESS_INFO.contact.phone}
          </a>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button
            variant="gold"
            size="lg"
            href={BUSINESS_INFO.contact.phoneTel}
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            }
          >
            Call Now
          </Button>

          <Button
            variant="outlineLight"
            size="lg"
            onClick={() => onNavigate('contact')}
          >
            Send an Enquiry
          </Button>
        </div>
      </div>
    </section>
  );
}
