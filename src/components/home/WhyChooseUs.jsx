import React from 'react';
import SectionHeading from '../common/SectionHeading';

export default function WhyChooseUs() {
  const pillars = [
    {
      num: '01',
      title: 'Personalized Consultation',
      description:
        'Every individual and business has distinct financial considerations. We take the time to examine your specific documents and transaction history thoroughly before recommending steps.',
    },
    {
      num: '02',
      title: 'Clear Communication',
      description:
        'Taxation statutes and circulars can be bewildering. We explain your tax liabilities, exemptions, and filing options in direct, understandable language without confusing jargon.',
    },
    {
      num: '03',
      title: 'Organized Documentation Assistance',
      description:
        'Tax discrepancies often stem from disordered records. We assist you in collating Form 16, 26AS, AIS/TIS, and challans into a structured, audit-ready financial dossier.',
    },
    {
      num: '04',
      title: 'Client-Oriented Approach',
      description:
        'We operate with patience and attentiveness. From first-time return filers to established local traders, our focus remains on providing accessible and courteous service.',
    },
    {
      num: '05',
      title: 'Practical Taxation Guidance',
      description:
        'All advisory adheres strictly to the statutory provisions of the Income Tax Act and GST regulations, ensuring your filings remain compliant, lawful, and secure.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F8F6F0] bg-financial-guilloche-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          caption="Our Professional Approach"
          title="Making Taxation Simpler and More Understandable"
          subtitle="Taxation compliance is built on accuracy, discipline, and trust. Here is how Asirbad Consultancy approaches client assistance."
          align="center"
        />

        {/* Editorial Feature Presentation: Visual + 5 Core Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mt-12">
          {/* Left Column: Photorealistic Editorial Visual (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Gold Accent Corner Marks */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-[#B69A64] pointer-events-none hidden sm:block" />
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-[#B69A64] pointer-events-none hidden sm:block" />

              <div className="rounded-xs overflow-hidden border border-[#D8D6CE] shadow-xl bg-[#0B1D30]">
                <img
                  src="/images/tax-planning.webp"
                  alt="Fiscal balance scale and tax planning ledger at Asirbad Consultancy"
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="w-full h-auto object-cover hover:scale-102 transition-transform duration-500"
                />

                <div className="p-5 bg-[#0B1D30] border-t border-[#B69A64]/30 text-[#F8F6F0]">
                  <span className="text-[10px] uppercase tracking-widest text-[#DFC89B] font-semibold block">
                    Fiscal Balance &amp; Statutory Truth
                  </span>
                  <h4 className="font-serif text-lg font-bold text-[#F8F6F0] mt-1">
                    Transparent, Lawful Tax Guidance
                  </h4>
                  <p className="text-xs text-[#E9E8E3]/70 mt-1 leading-relaxed">
                    Clear advisory rooted strictly in the provisions of Indian tax law—protecting your peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Pillars List (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="p-5 sm:p-6 rounded-xs bg-[#FFFFFF] border border-[#D8D6CE] hover:border-[#B69A64] transition-all duration-200 shadow-xs flex items-start gap-4 sm:gap-5"
              >
                <div className="w-10 h-10 rounded-xs bg-[#142B45] text-[#DFC89B] font-serif text-base font-bold flex items-center justify-center shrink-0">
                  {pillar.num}
                </div>

                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#0B1D30]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555F6B] mt-1 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Responsible Compliance Callout */}
        <div className="mt-12 p-6 rounded-xs bg-[#142B45] text-[#F8F6F0] border border-[#B69A64]/40 max-w-3xl mx-auto text-center">
          <p className="text-sm leading-relaxed text-[#E9E8E3]">
            <strong className="text-[#DFC89B]">Commitment to Transparency:</strong> We 
            do not make exaggerated promises of guaranteed refunds or artificial tax reductions. 
            Our commitment is to lawful, thorough, and optimized compliance adhering to Indian tax law.
          </p>
        </div>
      </div>
    </section>
  );
}
