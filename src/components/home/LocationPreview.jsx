import React from 'react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { BUSINESS_INFO } from '../../data/businessInfo';

export default function LocationPreview({ onNavigate }) {
  return (
    <section className="py-20 md:py-24 bg-[#F8F6F0] bg-ledger-grid border-t border-[#E9E8E3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Address & Details (6 cols) */}
          <div className="lg:col-span-6">
            <SectionHeading
              caption="Registered Practice Location"
              title="Visit Our Office in Sodepur, Kolkata"
              subtitle="Conveniently situated in Uttar Pally, Sodepur. Clients are welcome to schedule a personal consultation to discuss their tax requirements."
            />

            <div className="space-y-4 text-sm text-[#555F6B]">
              <div className="p-4 rounded-xs bg-[#FFFFFF] border border-[#D8D6CE]">
                <div className="text-xs uppercase tracking-wider text-[#B69A64] font-semibold mb-1">
                  Business Address
                </div>
                <address className="not-italic text-sm text-[#0B1D30] font-medium leading-relaxed">
                  {BUSINESS_INFO.location.houseName}, {BUSINESS_INFO.location.road},<br />
                  {BUSINESS_INFO.location.holdingNumber}, {BUSINESS_INFO.location.locality},<br />
                  {BUSINESS_INFO.location.area}, {BUSINESS_INFO.location.city} – {BUSINESS_INFO.location.postalCode},<br />
                  {BUSINESS_INFO.location.state}, {BUSINESS_INFO.location.country}.
                </address>
                <div className="mt-2 text-xs text-[#8F7441] font-semibold">
                  Nearby Landmark: {BUSINESS_INFO.location.landmark}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xs bg-[#FFFFFF] border border-[#D8D6CE]">
                  <div className="text-xs uppercase tracking-wider text-[#B69A64] font-semibold">
                    Phone / Helpline
                  </div>
                  <a
                    href={BUSINESS_INFO.contact.phoneTel}
                    className="text-sm font-semibold text-[#0B1D30] hover:text-[#B69A64] transition-colors mt-0.5 block"
                  >
                    +91 {BUSINESS_INFO.contact.phone}
                  </a>
                </div>

                <div className="p-3.5 rounded-xs bg-[#FFFFFF] border border-[#D8D6CE]">
                  <div className="text-xs uppercase tracking-wider text-[#B69A64] font-semibold">
                    Email Inquiries
                  </div>
                  <a
                    href={BUSINESS_INFO.contact.emailMailto}
                    className="text-xs font-semibold text-[#0B1D30] hover:text-[#B69A64] transition-colors mt-0.5 block break-all"
                  >
                    {BUSINESS_INFO.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => onNavigate('contact')}
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
                Visit Contact Page &amp; View Map
              </Button>

              <Button
                variant="outline"
                size="md"
                href={BUSINESS_INFO.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </Button>
            </div>
          </div>

          {/* Right Column: Embedded Map Card (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-xs overflow-hidden border border-[#D8D6CE] shadow-lg bg-[#FFFFFF]">
              <div className="p-4 bg-[#0B1D30] text-[#F8F6F0] flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#F8F6F0]">
                    Asirbad Consultancy
                  </h4>
                  <p className="text-[11px] text-[#DFC89B]">
                    108/1, Uttar Pally, Sodepur, Kolkata
                  </p>
                </div>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-xs bg-[#142B45] text-[#DFC89B] border border-[#B69A64]/40">
                  Google Maps
                </span>
              </div>

              {/* Exact Google Maps Embed from Business Information */}
              <div className="relative w-full h-[320px] sm:h-[360px] bg-[#E9E8E3]">
                <iframe
                  src={BUSINESS_INFO.location.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Asirbad Consultancy Google Maps Location"
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="p-3 bg-[#FFFFFF] border-t border-[#E9E8E3] flex items-center justify-between text-xs text-[#555F6B]">
                <span>Near Water Tank, Sodepur</span>
                <a
                  href={BUSINESS_INFO.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#0B1D30] hover:text-[#B69A64] transition-colors"
                >
                  Open in Maps &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
