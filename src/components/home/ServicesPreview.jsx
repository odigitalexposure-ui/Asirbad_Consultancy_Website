import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { SERVICES_DATA } from '../../data/services';

export default function ServicesPreview({ onNavigate }) {
  // Display selected primary services
  const featuredServices = SERVICES_DATA.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] bg-ledger-grid border-y border-[#E9E8E3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionHeading
            caption="Capabilities &amp; Guidance"
            title="Taxation &amp; Consultancy Services"
            subtitle="Selected taxation advisory and return filing services designed to simplify statutory obligations for individuals, professionals, and businesses."
            className="mb-0"
          />

          <div className="mt-6 md:mt-0 shrink-0">
            <Button
              variant="outline"
              size="md"
              onClick={() => onNavigate('services')}
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
              Explore All Services
            </Button>
          </div>
        </div>

        {/* Visually Varied Service Presentation with Diagonal Navy & Ivory Balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredServices.map((service, idx) => {
            // Diagonal boxes: idx === 0 (Top-Left) and idx === 3 (Bottom-Right)
            const isNavy = idx === 0 || idx === 3;

            return (
              <div
                key={service.id}
                className={`p-6 sm:p-8 rounded-xs transition-all duration-300 relative group flex flex-col justify-between ${
                  isNavy
                    ? 'bg-[#0B1D30] text-[#F8F6F0] border border-[#B69A64]/40 shadow-md'
                    : 'bg-[#F8F6F0] text-[#0B1D30] border border-[#D8D6CE] hover:border-[#B69A64] hover:shadow-md'
                }`}
              >
                <div>
                  {/* Header row: Service index & suitable badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-mono text-xs font-bold px-2 py-0.5 rounded-xs uppercase tracking-widest ${
                        isNavy
                          ? 'bg-[#B69A64] text-[#0B1D30]'
                          : 'bg-[#0B1D30] text-[#F8F6F0]'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span
                      className={`text-[11px] font-medium tracking-wide uppercase ${
                        isNavy ? 'text-[#DFC89B]' : 'text-[#8F7441]'
                      }`}
                    >
                      {service.suitableFor.split(',')[0]}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3
                    className={`font-serif text-xl sm:text-2xl font-bold tracking-tight mb-3 ${
                      isNavy ? 'text-[#F8F6F0]' : 'text-[#0B1D30]'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      isNavy ? 'text-[#E9E8E3]/85' : 'text-[#555F6B]'
                    }`}
                  >
                    {service.shortDescription}
                  </p>

                  {/* What it involves bullet points */}
                  <ul className="space-y-2 mb-6">
                    {service.involves.slice(0, 3).map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-xs flex items-start gap-2.5"
                      >
                        <span
                          className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${
                            isNavy ? 'bg-[#B69A64]' : 'bg-[#142B45]'
                          }`}
                        />
                        <span className={isNavy ? 'text-[#E9E8E3]/80' : 'text-[#555F6B]'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Card Action */}
                <div
                  className={`pt-4 border-t flex items-center justify-between ${
                    isNavy ? 'border-[#142B45]' : 'border-[#E9E8E3]'
                  }`}
                >
                  <button
                    onClick={() => onNavigate('services')}
                    className={`text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors cursor-pointer ${
                      isNavy
                        ? 'text-[#DFC89B] hover:text-[#FFFFFF]'
                        : 'text-[#0B1D30] hover:text-[#B69A64]'
                    }`}
                  >
                    View Details &amp; Scope
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
                  </button>

                  <Button
                    variant={isNavy ? 'gold' : 'primary'}
                    size="sm"
                    onClick={() => onNavigate('contact')}
                  >
                    Enquire
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Proposed content confirmation notice */}
        <div className="mt-10 p-4 rounded-xs bg-[#F8F6F0] border border-[#D8D6CE] text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#555F6B] leading-relaxed">
            <span className="font-semibold text-[#0B1D30]">Proposed Service Scope:</span>{' '}
            The categories listed represent our core taxation guidance areas. Specific 
            filing and consultancy requirements are confirmed during one-on-one consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
