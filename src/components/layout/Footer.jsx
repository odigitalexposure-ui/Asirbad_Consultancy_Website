import React from "react";
import { BUSINESS_INFO } from "../../data/businessInfo";
import { SERVICES_DATA } from "../../data/services";

export default function Footer({ onNavigate }) {
  const handleNav = (pageId, e) => {
    if (e) e.preventDefault();
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-executive-dark text-[#F8F6F0] border-t border-[#B69A64]/30 relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-financial-pattern-dark opacity-20 pointer-events-none" />

      {/* Main 3-Column Footer Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Logo & Introduction (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Wordmark */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-xs bg-[#142B45] border border-[#B69A64] flex items-center justify-center shrink-0">
                  <span className="font-serif text-[#F8F6F0] text-lg font-bold">
                    AC
                  </span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold tracking-tight text-[#F8F6F0] leading-tight">
                    {BUSINESS_INFO.companyName}
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#B69A64] font-medium">
                    Taxation &amp; Financial Consultancy
                  </p>
                </div>
              </div>

              {/* Company Introduction */}
              <p className="text-sm text-[#E9E8E3]/80 leading-relaxed max-w-md mt-4">
                Dedicated taxation and consultancy assistance based in Sodepur,
                Kolkata. Focused on providing individual taxpayers and business
                owners with clear, orderly, and statutory tax compliance
                guidance.
              </p>

              {/* Consultant Details */}
              <div className="mt-5 p-3.5 rounded-xs bg-[#142B45]/60 border border-[#B69A64]/30 max-w-md">
                <div className="text-xs uppercase tracking-wider text-[#DFC89B] font-semibold">
                  Principal Consultant
                </div>
                <div className="font-serif text-[#F8F6F0] text-base font-semibold mt-0.5">
                  {BUSINESS_INFO.owner.name}
                </div>
                <div className="text-xs text-[#E9E8E3]/70">
                  {BUSINESS_INFO.owner.role}
                </div>
              </div>

              {/* Small Decorative Element */}
              <div className="flex items-center gap-2 mt-6">
                <span className="w-8 h-[1px] bg-[#B69A64]/60"></span>
                <span className="text-[11px] text-[#B69A64] uppercase tracking-widest font-mono">
                  GSTIN: {BUSINESS_INFO.compliance.gstin}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation & Services (3 cols) */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-4 h-[1px] bg-[#B69A64]"></span>
              <h4 className="font-serif text-base font-bold text-[#F8F6F0] tracking-wide">
                Navigation
              </h4>
            </div>

            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={(e) => handleNav("home", e)}
                  className="text-[#E9E8E3]/80 hover:text-[#DFC89B] transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <span className="w-1.5 h-[1px] bg-[#B69A64] group-hover:w-3 transition-all"></span>
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNav("about", e)}
                  className="text-[#E9E8E3]/80 hover:text-[#DFC89B] transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <span className="w-1.5 h-[1px] bg-[#B69A64] group-hover:w-3 transition-all"></span>
                  About Asirbad
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNav("services", e)}
                  className="text-[#E9E8E3]/80 hover:text-[#DFC89B] transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <span className="w-1.5 h-[1px] bg-[#B69A64] group-hover:w-3 transition-all"></span>
                  Services Overview
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNav("gallery", e)}
                  className="text-[#E9E8E3]/80 hover:text-[#DFC89B] transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <span className="w-1.5 h-[1px] bg-[#B69A64] group-hover:w-3 transition-all"></span>
                  Office Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNav("contact", e)}
                  className="text-[#E9E8E3]/80 hover:text-[#DFC89B] transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <span className="w-1.5 h-[1px] bg-[#B69A64] group-hover:w-3 transition-all"></span>
                  Contact &amp; Location
                </button>
              </li>
            </ul>

            <div className="mt-6 pt-5 border-t border-[#142B45]">
              <div className="text-xs uppercase tracking-wider text-[#B69A64] font-semibold mb-2">
                Key Services
              </div>
              <ul className="space-y-1.5 text-xs text-[#E9E8E3]/70">
                <li>• Income Tax Return Filing</li>
                <li>• GST Consultancy &amp; Return Filing</li>
                <li>• Tax Documentation Assistance</li>
                <li>• Business Taxation Support</li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Details (4 cols) */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-4 h-[1px] bg-[#B69A64]"></span>
              <h4 className="font-serif text-base font-bold text-[#F8F6F0] tracking-wide">
                Contact Details
              </h4>
            </div>

            <div className="space-y-3.5 text-sm">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xs bg-[#142B45] border border-[#B69A64]/50 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-[#DFC89B]"
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
                </div>
                <div>
                  <div className="text-xs text-[#B69A64] font-medium uppercase tracking-wider">
                    Telephone
                  </div>
                  <a
                    href={BUSINESS_INFO.contact.phoneTel}
                    className="font-medium text-[#F8F6F0] hover:text-[#DFC89B] transition-colors"
                  >
                    {BUSINESS_INFO.contact.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xs bg-[#142B45] border border-[#B69A64]/50 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-[#DFC89B]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#B69A64] font-medium uppercase tracking-wider">
                    Email
                  </div>
                  <a
                    href={BUSINESS_INFO.contact.emailMailto}
                    className="font-medium text-[#F8F6F0] hover:text-[#DFC89B] transition-colors break-all"
                  >
                    {BUSINESS_INFO.contact.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xs bg-[#142B45] border border-[#B69A64]/50 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-[#DFC89B]"
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
                </div>
                <div>
                  <div className="text-xs text-[#B69A64] font-medium uppercase tracking-wider">
                    Office Address
                  </div>
                  <address className="not-italic text-xs sm:text-sm text-[#E9E8E3]/85 leading-relaxed">
                    Ashirbad, Iswar Chatterjee Road,
                    <br />
                    108/1, Uttar Pally, Sodepur,
                    <br />
                    Kolkata – 700110, West Bengal, India.
                    <br />
                    <span className="text-[#DFC89B] font-medium">
                      Landmark: Water Tank
                    </span>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold Hairline Separator */}
      <div className="gold-hairline" />

      {/* Footer Bottom Banner */}
      <div className="relative bg-[#071321] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#E9E8E3]/70 text-center sm:text-left">
          <div>&copy; 2026 Asirbad Consultancy.</div>

          <div>
            <span>Designed &amp; Developed by</span>
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
