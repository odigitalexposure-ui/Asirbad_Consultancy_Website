import React from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import SpinningWheelBackground from '../components/common/SpinningWheelBackground';
import { SERVICES_DATA } from '../data/services';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function Services({ onNavigate, onSelectService }) {
  const handleServiceEnquire = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    onNavigate('contact');
  };

  return (
    <div className="bg-[#F8F6F0]">
      {/* 1. Page Hero */}
      <PageHero
        title="Our Taxation &amp; Consultancy Services"
        subtitle="Explore taxation-related assistance and consultancy services designed around individual and business requirements."
        currentPageLabel="Services"
        onNavigate={onNavigate}
      />

      {/* 2. Proposed Services Scope Notice */}
      <div className="bg-[#FFFFFF] border-b border-[#E9E8E3] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#555F6B]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B69A64]" />
              <span className="font-semibold text-[#0B1D30]">
                Proposed Service Categories:
              </span>
              <span>
                These services represent proposed capabilities subject to confirmation during direct client engagement.
              </span>
            </div>
            <a
              href={BUSINESS_INFO.contact.phoneTel}
              className="text-[#0B1D30] font-semibold hover:text-[#B69A64] shrink-0"
            >
              Call for details: +91 {BUSINESS_INFO.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* 3. Detailed Services Sections */}
      <section className="py-20 md:py-28 bg-[#F8F6F0] relative overflow-hidden">
        {/* Dynamic Spinning Guilloche Wheelwork Background */}
        <SpinningWheelBackground opacity="opacity-70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            caption="Comprehensive Taxation Advisory"
            title="Structured Guidance Across Every Tax Milestone"
            subtitle="From individual return filings to regular enterprise GST compliance, we deliver practical and statutory support."
            className="mb-12"
          />

          {/* Featured Services Editorial Spotlight with AI Photorealistic Asset */}
          <div className="mb-14 rounded-xs overflow-hidden border border-[#D8D6CE] bg-[#FFFFFF] shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              <div className="lg:col-span-6 relative overflow-hidden bg-[#0B1D30]">
                <img
                  src="/images/taxation-services.webp"
                  alt="Asirbad Consultancy statutory tax compliance and audit dossiers"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D30]/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="lg:col-span-6 p-6 sm:p-10">
                <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B69A64]">
                  Statutory Practice Standard
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1D30] mt-2 mb-3">
                  Meticulous Dossier Compilation &amp; Compliance Filing
                </h3>
                <p className="text-sm text-[#555F6B] leading-relaxed mb-4">
                  Every filing managed by Asirbad Consultancy is supported by verified 
                  documentation—from Form 26AS and AIS reconciliation to cross-verified 
                  GSTR-2B purchase ledgers. We eliminate discrepancies before submissions reach 
                  the tax portal.
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs pt-4 border-t border-[#E9E8E3]">
                  <div>
                    <span className="font-semibold text-[#0B1D30] block">ITR Reconciliation</span>
                    <span className="text-[#555F6B]">Matched with Form 26AS &amp; AIS/TIS</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#0B1D30] block">GST Compliance</span>
                    <span className="text-[#555F6B]">ITC verified against GSTR-2B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {SERVICES_DATA.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="rounded-xs bg-[#FFFFFF] border border-[#D8D6CE] shadow-sm hover:border-[#B69A64] transition-all duration-300 overflow-hidden"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Header Strip or Aside Column */}
                    <div
                      className={`lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between ${
                        isEven
                          ? 'bg-[#0B1D30] text-[#F8F6F0]'
                          : 'bg-[#142B45] text-[#F8F6F0]'
                      }`}
                    >
                      <div>
                        {/* Service Number & Category */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-xs bg-[#B69A64] text-[#0B1D30] uppercase tracking-widest">
                            0{index + 1}
                          </span>
                          <span className="text-[11px] uppercase tracking-wider text-[#DFC89B]">
                            Taxation Service
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-2xl sm:text-2xl font-bold text-[#F8F6F0] leading-snug">
                          {service.title}
                        </h3>

                        {/* Short Description */}
                        <p className="mt-3 text-xs sm:text-sm text-[#E9E8E3]/85 leading-relaxed font-light">
                          {service.shortDescription}
                        </p>
                      </div>

                      {/* Suitable For Badge */}
                      <div className="mt-8 pt-4 border-t border-white/10">
                        <span className="text-[10px] uppercase tracking-wider text-[#DFC89B] font-semibold block">
                          Recommended For:
                        </span>
                        <p className="text-xs text-[#F8F6F0] mt-0.5 font-medium">
                          {service.suitableFor}
                        </p>
                      </div>
                    </div>

                    {/* Detailed Content Column (8 cols) */}
                    <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#FFFFFF]">
                      <div>
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-[#B69A64] mb-2">
                          Service Overview
                        </h4>
                        <p className="text-sm text-[#555F6B] leading-relaxed mb-6">
                          {service.fullDescription}
                        </p>

                        {/* What it involves */}
                        <div className="mb-6">
                          <h4 className="text-xs uppercase tracking-wider font-semibold text-[#0B1D30] mb-3">
                            What This Service Involves:
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {service.involves.map((step, stepIdx) => (
                              <div
                                key={stepIdx}
                                className="flex items-start gap-2.5 p-3 rounded-xs bg-[#F8F6F0] border border-[#E9E8E3]"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#B69A64] shrink-0 mt-1.5" />
                                <span className="text-xs text-[#555F6B] leading-relaxed">
                                  {step}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Action Strip */}
                      <div className="pt-6 border-t border-[#E9E8E3] flex flex-wrap items-center justify-between gap-4">
                        <div className="text-xs text-[#8F7441]">
                          Direct assistance with consultant{' '}
                          <span className="font-semibold text-[#0B1D30]">
                            {BUSINESS_INFO.owner.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <Button
                            variant="secondary"
                            size="sm"
                            href={BUSINESS_INFO.contact.phoneTel}
                          >
                            Call for Enquiry
                          </Button>

                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => handleServiceEnquire(service.title)}
                            icon={
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
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            }
                          >
                            Enquire About This Service
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Final Enquiry Section directing to Contact */}
      <section className="py-16 md:py-24 bg-[#0B1D30] text-[#F8F6F0] border-t border-[#B69A64]/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-financial-pattern-dark opacity-20 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFC89B] mb-3 block">
            Have a Specific Tax Scenario?
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#F8F6F0] leading-tight">
            Schedule a Personalized Consultation Today
          </h2>

          <p className="mt-4 text-base text-[#E9E8E3]/85 max-w-xl mx-auto font-light leading-relaxed">
            Reach out with your documents, notices, or filing questions. We provide 
            direct, structured answers tailored to your statutory obligations.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              variant="gold"
              size="lg"
              onClick={() => onNavigate('contact')}
            >
              Go to Contact &amp; Enquiry Form
            </Button>

            <Button
              variant="outlineLight"
              size="lg"
              href={BUSINESS_INFO.contact.phoneTel}
            >
              Call: {BUSINESS_INFO.contact.phone}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
