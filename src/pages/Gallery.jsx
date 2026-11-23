import React, { useState, useEffect, useCallback } from 'react';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import SpinningWheelBackground from '../components/common/SpinningWheelBackground';
import { BUSINESS_INFO } from '../data/businessInfo';

export const GALLERY_ITEMS = [
  {
    id: 'img1',
    src: '/images/img1.webp',
    fallback: '/images/img1.png',
    title: 'Client Records & Filing Workstations',
    category: 'workstations',
    categoryLabel: 'Workstations',
    subtitle: 'Computing Terminals & Client Folders',
    description:
      'Equipped with dual computer terminals, high-speed networking, and organized client return folders ensuring systematic document verification and statutory e-filing.',
  },
  {
    id: 'img2',
    src: '/images/img2.webp',
    fallback: '/images/img2.png',
    title: 'Tax Return Compilation & Ledger Audit',
    category: 'operations',
    categoryLabel: 'Operations',
    subtitle: 'Staff Operations & Reconciliation',
    description:
      'Active data verification, spreadsheet reconciliation, and statutory GST return compilation conducted in an orderly, focused office environment.',
  },
  {
    id: 'img3',
    src: '/images/img3.webp',
    fallback: '/images/img3.png',
    title: 'Executive Legal & Taxation Library Study',
    category: 'consultation',
    categoryLabel: 'Consultation & Library',
    subtitle: 'Statutory Law Volumes & Private Advisory Desk',
    description:
      'Executive consultation study featuring authoritative tax law reference treatises (Tax Codes, Kolkata Audits, Corporate Accounts), historical records, and a private client advisory desk.',
  },
  {
    id: 'img4',
    src: '/images/img4.webp',
    fallback: '/images/img4.png',
    title: "Principal Consultant's Consultation Desk",
    category: 'consultation',
    categoryLabel: 'Consultation',
    subtitle: 'Executive Desk & Legal Volumes',
    description:
      'The executive consultation desk of consultant Gobinda Kumar Mukherjee, furnished with statutory codes (IPC, CPC, Business Law), client dossiers, and computational tools.',
  },
  {
    id: 'img5',
    src: '/images/img5.webp',
    fallback: '/images/img5.png',
    title: 'Statutory Records & Document Archive',
    category: 'archival',
    categoryLabel: 'Archival & Library',
    subtitle: 'Document Processing & Physical Records',
    description:
      'Dedicated document processing and record-keeping hub with tied archival client files, high-speed internet routers, and authoritative taxation reference guides.',
  },
  {
    id: 'consultant',
    src: '/images/gobinda-kumar-mukherjee.webp',
    fallback: '/images/gobinda-kumar-mukherjee.jpg',
    title: 'Gobinda Kumar Mukherjee at Consultation',
    category: 'consultation',
    categoryLabel: 'Leadership',
    subtitle: 'Founder & Principal Consultant',
    description:
      'Gobinda Kumar Mukherjee personally reviewing client financial records and tax filings at his Sodepur office, offering direct and unhurried consultation.',
  },
];

export default function Gallery({ onNavigate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'workstations', label: 'Workstations' },
    { id: 'operations', label: 'Operations' },
    { id: 'consultation', label: 'Consultation Desks' },
    { id: 'archival', label: 'Records & Archival' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  // Keyboard navigation for Lightbox
  const handleKeyDown = useCallback(
    (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedImageIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedImageIndex(
          (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
        );
      }
    },
    [selectedImageIndex, filteredItems.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex(
      (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
    );
  };

  const currentItem =
    selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  return (
    <div className="bg-[#F8F6F0] min-h-screen">
      {/* 1. Page Hero */}
      <PageHero
        title="Office & Infrastructure Gallery"
        subtitle="A look inside Asirbad Consultancy — our client consultation desks, document archival systems, and computing infrastructure in Sodepur, Kolkata."
        currentPageLabel="Gallery"
        onNavigate={onNavigate}
      />

      {/* 2. Overview Banner */}
      <section className="py-12 bg-[#FFFFFF] border-b border-[#E9E8E3] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-6 sm:p-8 rounded-xs bg-[#F8F6F0] border border-[#D8D6CE]">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#B69A64] font-semibold mb-1">
                Authentic Office Environment
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1D30]">
                A Transparent, Well-Equipped Physical Workspace
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#555F6B] max-w-2xl leading-relaxed">
                We believe that reliable taxation advice requires genuine accountability. 
                Our registered office in Sodepur is equipped with specialized reference libraries, 
                high-speed computing terminals, and physical record storage for complete statutory compliance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
              <div className="p-3.5 rounded-xs bg-[#FFFFFF] border border-[#D8D6CE] text-xs">
                <span className="text-[#8F7441] font-semibold block uppercase tracking-wider">
                  Registered Office
                </span>
                <span className="font-serif text-[#0B1D30] font-bold block mt-0.5">
                  108/1, Uttar Pally, Sodepur
                </span>
                <span className="text-[#555F6B] font-mono text-[11px] block mt-1">
                  GSTIN: {BUSINESS_INFO.compliance.gstin}
                </span>
              </div>

              <Button
                variant="primary"
                size="md"
                onClick={() => onNavigate('contact')}
              >
                Plan a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Filter Tabs & Gallery Grid */}
      <section className="py-16 md:py-24 bg-[#F8F6F0] relative overflow-hidden">
        {/* Dynamic Spinning Guilloche Background */}
        <SpinningWheelBackground opacity="opacity-60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            caption="Visual Tour"
            title="Office Premises & Working Setup"
            subtitle="Explore our workstations, client consultation areas, document management systems, and legal reference library."
            align="center"
          />

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xs transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0B1D30] text-[#DFC89B] shadow-sm font-semibold'
                      : 'bg-[#FFFFFF] text-[#555F6B] hover:text-[#0B1D30] hover:bg-[#FFFFFF]/90 border border-[#D8D6CE]'
                  }`}
                >
                  {cat.label}
                  {cat.id !== 'all' && (
                    <span className="ml-1.5 opacity-60 text-xs">
                      (
                      {
                        GALLERY_ITEMS.filter((item) => item.category === cat.id)
                          .length
                      }
                      )
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative bg-[#FFFFFF] rounded-xs overflow-hidden border border-[#D8D6CE] hover:border-[#B69A64] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[16/11] overflow-hidden bg-[#0B1D30]">
                  <picture>
                    <source srcSet={item.src} type="image/webp" />
                    <img
                      src={item.fallback}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </picture>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D30]/80 via-[#0B1D30]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider bg-[#0B1D30]/90 text-[#DFC89B] border border-[#B69A64]/40 rounded-xs backdrop-blur-xs">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* View Enlarge Icon on Hover */}
                  <div className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-xs bg-[#B69A64] text-[#0B1D30] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-md">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#8F7441] font-semibold mb-1">
                      {item.subtitle}
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0B1D30] group-hover:text-[#142B45] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-[#555F6B] leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-[#E9E8E3] flex items-center justify-between text-xs text-[#8F7441]">
                    <span className="font-semibold flex items-center gap-1.5 group-hover:text-[#0B1D30] transition-colors">
                      <span>Click to view full photo</span>
                      <span className="text-base">&rarr;</span>
                    </span>
                    <span className="font-mono text-[11px] text-[#555F6B]">
                      Asirbad Office
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Infrastructure & Trust Highlights */}
      <section className="py-20 md:py-24 bg-[#FFFFFF] bg-ledger-grid border-y border-[#E9E8E3] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            caption="Facilities & Standards"
            title="Why Physical Verification Matters in Taxation"
            subtitle="In an era of faceless online bots, having a dependable local consultancy office gives your tax returns lasting stability."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-xs bg-[#F8F6F0] border border-[#D8D6CE]">
              <div className="w-12 h-12 rounded-xs bg-[#0B1D30] text-[#DFC89B] flex items-center justify-center mb-5 border border-[#B69A64]/40">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0B1D30] mb-2">
                Physical Office & Direct Access
              </h3>
              <p className="text-sm text-[#555F6B] leading-relaxed">
                Clients can schedule an in-person visit to sit with the consultant, 
                present physical papers, and receive honest counsel without intermediation.
              </p>
            </div>

            <div className="p-6 rounded-xs bg-[#F8F6F0] border border-[#D8D6CE]">
              <div className="w-12 h-12 rounded-xs bg-[#0B1D30] text-[#DFC89B] flex items-center justify-center mb-5 border border-[#B69A64]/40">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0B1D30] mb-2">
                Orderly Document Archiving
              </h3>
              <p className="text-sm text-[#555F6B] leading-relaxed">
                Form 16/16A, bank statements, capital gains statements, and GST invoices 
                are systematically organized so you hold an audit-ready filing dossier.
              </p>
            </div>

            <div className="p-6 rounded-xs bg-[#F8F6F0] border border-[#D8D6CE]">
              <div className="w-12 h-12 rounded-xs bg-[#0B1D30] text-[#DFC89B] flex items-center justify-center mb-5 border border-[#B69A64]/40">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#0B1D30] mb-2">
                Legal & Statutory Grounding
              </h3>
              <p className="text-sm text-[#555F6B] leading-relaxed">
                Our practice stays rooted in authoritative taxation jurisprudence, 
                CBDT guidelines, and official GST rules to ensure zero regulatory penalties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Closing CTA */}
      <section className="py-16 md:py-24 bg-[#0B1D30] text-[#F8F6F0] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-financial-pattern-dark opacity-20 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#DFC89B] mb-3 block">
            Visit Us in Sodepur, Kolkata
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#F8F6F0] leading-tight">
            Schedule an In-Person Consultation Today
          </h2>

          <p className="mt-4 text-base text-[#E9E8E3]/85 max-w-xl mx-auto font-light leading-relaxed">
            Visit our office at Uttar Pally, Sodepur to consult directly with Gobinda Kumar Mukherjee 
            for income tax return filing, GST registration, or tax advisory.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              variant="gold"
              size="lg"
              onClick={() => onNavigate('contact')}
            >
              Contact & Location
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

      {/* 6. Lightbox Modal */}
      {currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-[#0B1D30]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-all animate-fadeIn"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-60 p-2.5 rounded-xs bg-[#0B1D30] text-[#F8F6F0] hover:text-[#DFC89B] border border-[#B69A64]/40 hover:border-[#B69A64] transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-60 p-3 rounded-xs bg-[#0B1D30]/80 text-[#F8F6F0] hover:text-[#DFC89B] border border-[#B69A64]/40 hover:border-[#B69A64] transition-colors cursor-pointer hidden sm:flex items-center justify-center"
            aria-label="Previous Image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-60 p-3 rounded-xs bg-[#0B1D30]/80 text-[#F8F6F0] hover:text-[#DFC89B] border border-[#B69A64]/40 hover:border-[#B69A64] transition-colors cursor-pointer hidden sm:flex items-center justify-center"
            aria-label="Next Image"
          >
            <svg
              className="w-6 h-6"
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

          {/* Lightbox Content Card */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#0B1D30] rounded-xs border border-[#B69A64]/50 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Top Bar with Counter & Title */}
            <div className="p-4 sm:p-5 bg-[#142B45] border-b border-[#B69A64]/30 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#DFC89B] block">
                  {currentItem.categoryLabel}
                </span>
                <h4 className="font-serif text-base sm:text-lg font-bold text-[#F8F6F0] truncate">
                  {currentItem.title}
                </h4>
              </div>

              <div className="text-xs text-[#DFC89B] font-mono px-3 py-1 rounded-xs bg-[#0B1D30] border border-[#B69A64]/30">
                {selectedImageIndex + 1} / {filteredItems.length}
              </div>
            </div>

            {/* Expanded Image */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] max-h-[60vh]">
              <picture>
                <source srcSet={currentItem.src} type="image/webp" />
                <img
                  src={currentItem.fallback}
                  alt={currentItem.title}
                  className="max-h-[60vh] w-auto max-w-full object-contain"
                />
              </picture>
            </div>

            {/* Bottom Caption & Description */}
            <div className="p-4 sm:p-5 bg-[#0B1D30] border-t border-[#B69A64]/30">
              <p className="text-xs sm:text-sm text-[#E9E8E3]/90 leading-relaxed">
                {currentItem.description}
              </p>
              <div className="mt-2 text-[11px] text-[#B69A64] font-medium flex items-center justify-between">
                <span>Asirbad Consultancy Office • Sodepur, Kolkata</span>
                <span className="hidden sm:inline text-[#E9E8E3]/60">
                  Use &larr; / &rarr; keys to browse • Esc to close
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
