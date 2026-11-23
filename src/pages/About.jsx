import React from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import SpinningWheelBackground from '../components/common/SpinningWheelBackground';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function About({ onNavigate }) {
  const approachSteps = [
    {
      num: '01',
      title: 'Understanding Client Requirements',
      desc: 'We start by listening attentively to your financial background, income streams, and previous filing history. Every taxpayer’s situation is unique, and personalized scrutiny ensures no critical detail is overlooked.',
    },
    {
      num: '02',
      title: 'Providing Clear Guidance',
      desc: 'Tax laws and e-filing forms can seem overwhelming. We explain applicable provisions, tax regime options (Old vs. New), and tax calculations in plain, straightforward language so you can make informed decisions.',
    },
    {
      num: '03',
      title: 'Supporting Documentation',
      desc: 'Organized records prevent statutory discrepancies. We assist you in collating Form 16/16A, bank interest certificates, investment receipts, 26AS, and AIS/TIS into a structured, audit-ready compliance package.',
    },
    {
      num: '04',
      title: 'Maintaining Transparent Communication',
      desc: 'Throughout the filing and consultancy process, you remain informed of every step, timeline, and statutory due date. We provide full copies of filed returns and acknowledgment receipts for your permanent records.',
    },
  ];

  return (
    <div className="bg-[#F8F6F0]">
      {/* 1. Page Hero */}
      <PageHero
        title="About Asirbad Consultancy"
        subtitle="Professional Taxation Consultancy With a Client-Focused Approach."
        currentPageLabel="About Us"
        onNavigate={onNavigate}
      />

      {/* 2. Company Introduction */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] bg-ledger-grid border-b border-[#E9E8E3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              <SectionHeading
                caption="Our Foundation &amp; Purpose"
                title="Committed to Clarity and Integrity in Taxation"
                subtitle="Helping individuals, salaried employees, and local businesses navigate their tax responsibilities with confidence and complete peace of mind."
              />

              <div className="space-y-4 text-base text-[#555F6B] leading-relaxed">
                <p>
                  <strong>Asirbad Consultancy</strong> was established in Sodepur, Kolkata, 
                  with a focused mission: to provide accessible, dependable, and structured 
                  taxation assistance. In an evolving regulatory landscape where tax rules, 
                  GST notifications, and compliance deadlines change continuously, taxpayers 
                  require guidance they can trust.
                </p>
                <p>
                  Our consultancy assists clients across the spectrum—from salaried employees 
                  filing their first Income Tax Return to experienced business owners managing 
                  recurring GST obligations. We believe that true professional consulting is 
                  not just about submitting numbers online; it is about ensuring that every 
                  figure is backed by verified documents and compliant with statutory law.
                </p>
                <p>
                  Operating from our registered office at Uttar Pally, Sodepur, we serve 
                  clients across the northern Kolkata region and West Bengal, offering direct, 
                  unhurried consultations where your queries receive sincere attention.
                </p>
              </div>

              {/* Core Philosophy Box */}
              <div className="mt-8 p-5 rounded-xs bg-[#F8F6F0] border-l-4 border-l-[#B69A64] border border-[#D8D6CE]">
                <p className="text-sm font-serif italic text-[#0B1D30] leading-relaxed">
                  &ldquo;Our focus is never on rushing through returns, but on ensuring 
                  that every client understands their tax status and holds an orderly, 
                  defensible record of their statutory filings.&rdquo;
                </p>
              </div>
            </div>

            {/* Right Visual (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-xs overflow-hidden border border-[#D8D6CE] shadow-lg bg-[#F8F6F0]">
                <img
                  src="/images/about-consultancy.webp"
                  alt="Asirbad Consultancy office principles and advisory ledger"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />

                <div className="p-5 bg-[#FFFFFF] border-t border-[#E9E8E3]">
                  <div className="text-xs font-semibold text-[#0B1D30] uppercase tracking-wider">
                    Asirbad Consultancy
                  </div>
                  <div className="text-xs text-[#555F6B] mt-1">
                    Ashirbad, 108/1, Uttar Pally, Sodepur, Kolkata – 700110
                  </div>
                  <div className="text-xs text-[#8F7441] font-mono mt-2">
                    GSTIN: {BUSINESS_INFO.compliance.gstin}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Owner / Consultant Profile */}
      <section className="py-20 md:py-28 bg-[#F8F6F0] relative overflow-hidden">
        {/* Dynamic Spinning Guilloche Wheelwork Background */}
        <SpinningWheelBackground opacity="opacity-75" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            caption="Consultant Leadership"
            title="Meet Gobinda Kumar Mukherjee"
            subtitle="Owner &amp; Principal Consultant at Asirbad Consultancy."
            align="center"
          />

          <div className="max-w-4xl mx-auto mt-12 bg-[#FFFFFF] rounded-xs border border-[#D8D6CE] shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              {/* Consultant Placeholder (5 cols) */}
              <div className="md:col-span-5 bg-[#0B1D30] p-6 sm:p-8 flex flex-col justify-between items-center text-center">
                <div className="w-full">
                  <div className="relative mx-auto max-w-[240px] rounded-xs overflow-hidden border-2 border-[#B69A64]/50 shadow-md">
                    <img
                      src="/images/consultant-placeholder.webp"
                      alt={`Portrait placeholder of ${BUSINESS_INFO.owner.name}`}
                      width={800}
                      height={1000}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-serif text-xl font-bold text-[#F8F6F0]">
                    {BUSINESS_INFO.owner.name}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#DFC89B] mt-1">
                    {BUSINESS_INFO.owner.role}
                  </p>
                  <p className="text-[11px] text-[#E9E8E3]/70 mt-1">
                    Asirbad Consultancy • Sodepur, Kolkata
                  </p>
                </div>
              </div>

              {/* Profile Details (7 cols) */}
              <div className="md:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-2.5 py-1 rounded-xs bg-[#F8F6F0] border border-[#D8D6CE] text-[11px] font-semibold text-[#0B1D30] uppercase tracking-wider mb-4">
                    Professional Profile
                  </div>

                  <h4 className="font-serif text-2xl font-bold text-[#0B1D30] mb-3">
                    A Direct, Personalized Approach to Client Tax Affairs
                  </h4>

                  <div className="space-y-3.5 text-sm text-[#555F6B] leading-relaxed">
                    <p>
                      <strong>{BUSINESS_INFO.owner.name}</strong> leads Asirbad Consultancy 
                      with an emphasis on accessibility, thorough document scrutiny, and 
                      consistent client communication.
                    </p>
                    <p>
                      Recognizing that taxation can often cause hesitation or confusion, 
                      he takes a patient, advisory role with each client. Whether assisting 
                      a pensioner organizing interest certificates or helping a local merchant 
                      maintain proper sales and purchase records for GST returns, his practice 
                      is rooted in structured, orderly handling.
                    </p>
                    <p>
                      All taxation filings and advice are carried out in strict accordance 
                      with prevailing Indian taxation statutes, maintaining honesty, clarity, 
                      and statutory compliance at all times.
                    </p>
                  </div>
                </div>

                {/* Direct Contact Links */}
                <div className="mt-8 pt-6 border-t border-[#E9E8E3] flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs text-[#8F7441] font-semibold uppercase tracking-wider block">
                      Direct Consultation
                    </span>
                    <a
                      href={BUSINESS_INFO.contact.phoneTel}
                      className="font-serif text-base font-bold text-[#0B1D30] hover:text-[#B69A64] transition-colors"
                    >
                      +91 {BUSINESS_INFO.contact.phone}
                    </a>
                  </div>

                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => onNavigate('contact')}
                  >
                    Schedule a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Approach */}
      <section className="py-20 md:py-28 bg-[#FFFFFF] bg-ledger-grid border-y border-[#E9E8E3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            caption="Methodology &amp; Standards"
            title="Our Four-Step Advisory Approach"
            subtitle="How we guide each client from initial consultation to final return submission and archived records."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
            {approachSteps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-xs bg-[#F8F6F0] border border-[#D8D6CE] hover:border-[#B69A64] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xs bg-[#0B1D30] text-[#DFC89B] font-serif text-base font-bold flex items-center justify-center mb-5">
                    {step.num}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#0B1D30] mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555F6B] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#D8D6CE] text-[10px] uppercase tracking-widest text-[#B69A64] font-semibold">
                  Step {step.num}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="py-16 md:py-24 bg-[#0B1D30] text-[#F8F6F0] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-financial-pattern-dark opacity-20 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFC89B] mb-3 block">
            Begin With Confidence
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#F8F6F0] leading-tight">
            Let&rsquo;s Make Your Taxation Journey Simpler.
          </h2>

          <p className="mt-4 text-base text-[#E9E8E3]/85 max-w-xl mx-auto font-light">
            Contact Gobinda Kumar Mukherjee at Asirbad Consultancy to discuss your 
            income tax return, GST obligations, or documentation queries.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              variant="gold"
              size="lg"
              onClick={() => onNavigate('contact')}
            >
              Contact Us
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
