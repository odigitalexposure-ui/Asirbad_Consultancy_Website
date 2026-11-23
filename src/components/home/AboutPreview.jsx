import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import SpinningWheelBackground from '../common/SpinningWheelBackground';
import { BUSINESS_INFO } from '../../data/businessInfo';

export default function AboutPreview({ onNavigate }) {
  return (
    <section className="py-20 md:py-28 bg-[#F8F6F0] relative overflow-hidden">
      {/* Dynamic Spinning Guilloche Wheelwork Background */}
      <SpinningWheelBackground opacity="opacity-75" />

      {/* Decorative Gold Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B69A64]/60 to-transparent pointer-events-none" />

      {/* Moving Prominent Architectural Watermark Seal */}
      <div 
        className="absolute -right-16 -bottom-16 w-96 h-96 rounded-full border-2 border-[#B69A64]/25 pointer-events-none flex items-center justify-center opacity-75 animate-watermark-spin"
        aria-hidden="true"
      >
        <div className="w-80 h-80 rounded-full border border-dashed border-[#B69A64]/35 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full border border-[#B69A64]/25 flex items-center justify-center">
            <span className="font-serif text-[100px] font-bold text-[#B69A64]/25 select-none">AC</span>
          </div>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Relevant Professional Visual (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Gold Offset Accent Line */}
              <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-[#B69A64] pointer-events-none hidden sm:block" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-[#B69A64] pointer-events-none hidden sm:block" />

              <div className="relative rounded-xs overflow-hidden border border-[#D8D6CE] shadow-lg bg-[#FFFFFF]">
                <img
                  src="/images/about-consultancy.webp"
                  alt="Asirbad Consultancy advisory ledger and pillars of practice"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
                />

                {/* Caption Card */}
                <div className="p-4 bg-[#FFFFFF] border-t border-[#E9E8E3]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0B1D30] uppercase tracking-wider">
                      Asirbad Consultancy
                    </span>
                    <span className="text-[#B69A64] font-medium">Sodepur, Kolkata</span>
                  </div>
                  <p className="text-xs text-[#555F6B] mt-1">
                    Client-focused taxation guidance led by Gobinda Kumar Mukherjee.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Values (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionHeading
              caption="About Asirbad Consultancy"
              title="Clarity in Taxation. Confidence in Every Decision."
              subtitle="Tax responsibilities do not need to be stressful or uncertain. We assist individuals and businesses in meeting their compliance requirements through systematic, transparent, and approachable guidance."
            />

            <div className="space-y-4 text-base text-[#555F6B] leading-relaxed">
              <p>
                Founded and managed by consultant <strong>{BUSINESS_INFO.owner.name}</strong>, 
                Asirbad Consultancy operates with a straightforward objective: to make 
                taxation obligations comprehensible and manageable for every client.
              </p>
              <p>
                Whether you are an individual taxpayer seeking to file your annual Income Tax 
                Return, a professional evaluating deductions, or a business owner managing 
                regular GST obligations, our approach is centered on careful document review, 
                direct dialogue, and statutory accuracy.
              </p>
            </div>

            {/* Core Working Highlights */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xs bg-[#FFFFFF] border border-[#E9E8E3] border-l-2 border-l-[#B69A64]">
                <h3 className="font-serif text-base font-bold text-[#0B1D30]">
                  Client-Focused Assistance
                </h3>
                <p className="text-xs text-[#555F6B] mt-1 leading-normal">
                  Each case is reviewed based on your specific financial situation and documents.
                </p>
              </div>

              <div className="p-4 rounded-xs bg-[#FFFFFF] border border-[#E9E8E3] border-l-2 border-l-[#142B45]">
                <h3 className="font-serif text-base font-bold text-[#0B1D30]">
                  Clear Communication
                </h3>
                <p className="text-xs text-[#555F6B] mt-1 leading-normal">
                  Statutory provisions and tax calculations explained simply, without legal jargon.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 pt-4">
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
                More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
