import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { BUSINESS_INFO } from '../../data/businessInfo';

export default function ConsultantPreview({ onNavigate }) {
  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-t border-[#E9E8E3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Consultant Portrait Placeholder (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Outer Architectural Border */}
              <div className="absolute -inset-2 rounded-xs border border-[#B69A64]/40 transform -rotate-1 pointer-events-none hidden sm:block" />

              <div className="relative rounded-xs overflow-hidden border border-[#B69A64]/50 shadow-xl bg-[#0B1D30]">
                <img
                  src="/images/consultant-placeholder.webp"
                  alt={`Authentic portrait placeholder for consultant ${BUSINESS_INFO.owner.name}`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />

                {/* Bottom Authenticity Note */}
                <div className="p-3 bg-[#0B1D30] border-t border-[#B69A64]/30 text-center">
                  <p className="text-[11px] uppercase tracking-wider text-[#DFC89B] font-semibold">
                    {BUSINESS_INFO.owner.name}
                  </p>
                  <p className="text-[10px] text-[#E9E8E3]/70">
                    {BUSINESS_INFO.owner.role} • Asirbad Consultancy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Consultant Profile & Bio (7 cols) */}
          <div className="lg:col-span-7">
            <SectionHeading
              caption="Leadership &amp; Expertise"
              title="Meet Your Consultant"
              subtitle="Direct, personalized consultation from an experienced taxation professional dedicated to orderly statutory compliance."
            />

            <div className="p-6 rounded-xs bg-[#F8F6F0] border border-[#D8D6CE] mb-6">
              <div className="text-xs uppercase tracking-widest text-[#B69A64] font-semibold">
                Owner / Consultant
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1D30] mt-1">
                {BUSINESS_INFO.owner.name}
              </h3>
              <p className="text-sm text-[#555F6B] mt-1">
                Taxation &amp; Financial Consultancy • Sodepur, Kolkata
              </p>
            </div>

            <div className="space-y-4 text-base text-[#555F6B] leading-relaxed">
              <p>
                At Asirbad Consultancy, clients receive dedicated personal attention 
                from <strong>{BUSINESS_INFO.owner.name}</strong>. With a focused practice 
                centered on income tax and GST matters, he assists individual taxpayers, 
                salaried employees, independent practitioners, and local business owners.
              </p>
              <p>
                Consultations are conducted with meticulous care for detail, ensuring that 
                every return filed and every document compiled aligns strictly with 
                regulatory provisions, avoiding unnecessary penalties or tax queries.
              </p>
            </div>

            {/* Quick Contact & Details */}
            <div className="mt-8 pt-6 border-t border-[#E9E8E3] flex flex-wrap items-center gap-6">
              <div>
                <span className="text-xs text-[#8F7441] uppercase tracking-wider font-semibold block">
                  Direct Line
                </span>
                <a
                  href={BUSINESS_INFO.contact.phoneTel}
                  className="font-serif text-lg font-bold text-[#0B1D30] hover:text-[#B69A64] transition-colors"
                >
                  +91 {BUSINESS_INFO.contact.phone}
                </a>
              </div>

              <div>
                <span className="text-xs text-[#8F7441] uppercase tracking-wider font-semibold block">
                  Office Location
                </span>
                <span className="font-serif text-base font-semibold text-[#0B1D30]">
                  Sodepur, Kolkata – 700110
                </span>
              </div>
            </div>

            <div className="mt-8">
              <Button
                variant="primary"
                size="md"
                onClick={() => onNavigate('about')}
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                }
              >
                Know More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
