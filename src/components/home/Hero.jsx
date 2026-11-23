import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import { BUSINESS_INFO } from '../../data/businessInfo';

export default function Hero({ onNavigate }) {
  // 3 Curated Slides representing core website sections, auto-sliding every 3 seconds
  const heroSlides = [
    {
      id: 1,
      image: '/images/hero-consultancy.webp',
      alt: 'Taxation and financial advisory ledger at Asirbad Consultancy',
      tabTitle: 'Income Tax',
      title: 'Income Tax & Return Filing',
      caption: 'ITR filings, AIS reconciliation & capital gains advisory',
    },
    {
      id: 2,
      image: '/images/taxation-services.webp',
      alt: 'GST compliance and audit dossiers',
      tabTitle: 'GST Support',
      title: 'GST Advisory & Returns',
      caption: 'Monthly GSTR-1, 3B filings & Input Tax Credit verification',
    },
    {
      id: 3,
      image: '/images/about-consultancy.webp',
      alt: 'Consultant advisory office in Sodepur, Kolkata',
      tabTitle: 'Chambers',
      title: 'Personal Advisory Chambers',
      caption: 'Direct consultations led by Gobinda Kumar Mukherjee in Sodepur',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  // Auto-sliding every 3 seconds (3000ms) cycling through the 3 core website sections
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setProgressKey((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, heroSlides.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setProgressKey((prev) => prev + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setProgressKey((prev) => prev + 1);
  };

  const selectSlide = (index) => {
    setCurrentSlide(index);
    setProgressKey((prev) => prev + 1);
  };

  // Reusable Auto-Sliding Image Slider Component with Clean, Unobstructed Image View
  const renderHeroSlider = (isMobile = false) => (
    <div
      className={`relative w-full flex flex-col justify-between ${
        isMobile ? 'max-w-md mx-auto' : 'h-full'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Slider Display Area: Unobstructed Image View with Increased Height & Width */}
      <div className="relative w-full flex-1 min-h-[340px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-[480px] xl:min-h-[520px] rounded-xs overflow-hidden border-2 border-[#B69A64]/60 shadow-[0_25px_60px_rgba(0,0,0,0.7)] bg-[#0B1D30] group">
        
        {/* Subtle Architectural Corner Accents */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#DFC89B] z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#DFC89B] z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#DFC89B] z-20 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#DFC89B] z-20 pointer-events-none" />

        {/* 3-Segment Hairline Progress Bar at Top Rim */}
        <div className="absolute top-0 inset-x-0 z-30 flex h-1 bg-[#142B45]/80">
          {heroSlides.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => selectSlide(dotIdx)}
              aria-label={`Jump to slide ${dotIdx + 1}`}
              className="flex-1 relative overflow-hidden bg-white/10 hover:bg-white/20 transition-colors cursor-pointer h-full"
            >
              {dotIdx === currentSlide ? (
                <div
                  key={`progress-${progressKey}`}
                  className={`h-full bg-gradient-to-r from-[#B69A64] to-[#DFC89B] ${
                    isPaused ? 'w-full' : 'animate-[progressGrow_3s_linear_forwards]'
                  }`}
                  style={{ animationDuration: '3000ms' }}
                />
              ) : dotIdx < currentSlide ? (
                <div className="h-full w-full bg-[#B69A64]/60" />
              ) : (
                <div className="h-full w-0 bg-transparent" />
              )}
            </button>
          ))}
        </div>

        {/* Slides Images with Smooth Crossfade and Subtle Zoom */}
        {heroSlides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                width={1792}
                height={1008}
                loading={index === 0 ? 'eager' : 'lazy'}
                className={`w-full h-full object-cover object-center transform transition-transform duration-1000 ${
                  isActive ? 'scale-100' : 'scale-105'
                }`}
              />

              {/* Minimal Bottom Vignette Gradient: 85%+ of Image is 100% Uncovered and Visible */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B1D30]/95 via-[#0B1D30]/40 to-transparent pointer-events-none" />

              {/* Short, Clean Details (No giant opaque box, no buttons covering image) */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-end justify-between gap-4 z-20">
                <div className="max-w-md">
                  <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-[#F8F6F0] leading-snug drop-shadow-sm">
                    {slide.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#E9E8E3]/90 mt-0.5 line-clamp-1 drop-shadow-sm font-light">
                    {slide.caption}
                  </p>
                </div>

                {/* Minimalist Slide Counter Indicator */}
                <div className="text-[11px] font-mono text-[#DFC89B] shrink-0 font-medium">
                  0{index + 1} / 0{heroSlides.length}
                </div>
              </div>
            </div>
          );
        })}

        {/* Subtle, Non-Intrusive Navigation Chevrons: Visible on hover at the outer edges */}
        <button
          onClick={handlePrevSlide}
          aria-label="Previous Slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#0B1D30]/60 hover:bg-[#B69A64] text-[#F8F6F0] hover:text-[#0B1D30] border border-[#B69A64]/40 flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 shadow-md"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNextSlide}
          aria-label="Next Slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#0B1D30]/60 hover:bg-[#B69A64] text-[#F8F6F0] hover:text-[#0B1D30] border border-[#B69A64]/40 flex items-center justify-center transition-all cursor-pointer opacity-0 group-hover:opacity-100 shadow-md"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <section className="relative bg-executive-dark text-[#F8F6F0] pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 lg:pt-36 lg:pb-24 xl:pt-40 xl:pb-28 overflow-hidden border-b border-[#B69A64]/40">
      {/* 1. Visible, Drifting Architectural Financial Grid */}
      <div className="absolute inset-0 bg-financial-pattern-dark opacity-55 animate-grid-drift pointer-events-none" />

      {/* 2. Vibrant Moving Golden Ambient Light Nebula (Drifting behind Typography) */}
      <div
        className="absolute top-1/6 left-1/12 w-[600px] h-[600px] rounded-full bg-[#B69A64]/28 blur-3xl animate-ambient-orb1 pointer-events-none"
        aria-hidden="true"
      />

      {/* 3. Radiant Deep Sapphire / Royal Azure Nebula (Drifting behind Photography) */}
      <div
        className="absolute -bottom-10 right-1/12 w-[700px] h-[700px] rounded-full bg-[#1E436B]/45 blur-3xl animate-ambient-orb2 pointer-events-none"
        aria-hidden="true"
      />

      {/* 4. Elegant Glowing Banknote Guilloche Waves (Dual Flow) */}
      <div className="absolute inset-x-0 bottom-0 h-64 overflow-hidden pointer-events-none opacity-40">
        <svg
          className="w-[130%] h-full animate-wave-drift text-[#B69A64]"
          viewBox="0 0 1400 240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Primary Golden Wave */}
          <path
            d="M0 130 C 350 40, 700 210, 1050 90 C 1200 40, 1320 160, 1400 120"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="6 4"
          />
          {/* Secondary Counter-Wave in Pale Gold with Counter Motion */}
          <path
            d="M0 160 C 380 70, 720 230, 1080 120 C 1240 60, 1340 180, 1400 145"
            stroke="#DFC89B"
            strokeWidth="1.5"
            className="animate-wave-counter"
          />
          {/* Third Fine Harmonic Hairline */}
          <path
            d="M0 190 C 320 100, 680 240, 1020 150 C 1180 90, 1300 200, 1400 170"
            stroke="currentColor"
            strokeWidth="0.8"
            strokeOpacity="0.7"
          />
        </svg>
      </div>

      {/* 5. Glowing Golden Diamond Precision Specks */}
      <div className="absolute top-1/4 left-1/12 w-2 h-2 rotate-45 bg-[#DFC89B] shadow-[0_0_12px_rgba(223,200,155,0.9)] animate-float-slow pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 w-2.5 h-2.5 rotate-45 border border-[#DFC89B] shadow-[0_0_10px_rgba(182,154,100,0.8)] animate-float-delayed pointer-events-none" />
      <div className="absolute top-1/5 right-1/4 w-2 h-2 rotate-45 bg-[#B69A64] shadow-[0_0_8px_rgba(182,154,100,0.8)] animate-float-delayed2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-1.5 h-1.5 rotate-45 bg-[#DFC89B] shadow-[0_0_10px_rgba(223,200,155,0.9)] animate-float-slow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Evenly Balanced 6-Column Grid Layout on Desktop matching Full Vertical Height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Headline, Mobile-Slider, Description, Actions & Metadata (6 cols on desktop) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Main Editorial Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] xl:text-[3.25rem] font-serif font-bold text-[#F8F6F0] leading-[1.16] tracking-tight">
                Your Trusted Partner in Taxation &amp; Financial Consultancy
              </h1>

              {/* Mobile View Slider: Displayed directly after heading on mobile/tablet (< 1024px) */}
              <div className="block lg:hidden my-6">
                {renderHeroSlider(true)}
              </div>

              {/* Supporting Content */}
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-[#E9E8E3]/85 leading-relaxed font-light">
                Professional taxation and consultancy support designed to simplify financial 
                responsibilities and help individuals and businesses navigate their tax-related 
                requirements with clarity and confidence.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Button
                  variant="gold"
                  size="lg"
                  onClick={() => onNavigate('services')}
                  icon={
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  }
                >
                  Explore Our Services
                </Button>

                <Button
                  variant="outlineLight"
                  size="lg"
                  onClick={() => onNavigate('contact')}
                >
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Key Fact Badges - Evenly Anchored Below */}
            <div className="mt-10 pt-6 border-t border-[#142B45] grid grid-cols-2 sm:grid-cols-3 gap-5 text-left">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#B69A64] font-semibold">
                  Principal
                </div>
                <div className="font-serif text-sm font-semibold text-[#F8F6F0] mt-0.5">
                  {BUSINESS_INFO.owner.name}
                </div>
                <div className="text-[11px] text-[#E9E8E3]/60">Owner / Consultant</div>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#B69A64] font-semibold">
                  Location
                </div>
                <div className="font-serif text-sm font-semibold text-[#F8F6F0] mt-0.5">
                  Sodepur, Kolkata
                </div>
                <div className="text-[11px] text-[#E9E8E3]/60">Near Water Tank</div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="text-[11px] uppercase tracking-wider text-[#B69A64] font-semibold">
                  Statutory GSTIN
                </div>
                <div className="font-mono text-xs font-medium text-[#DFC89B] mt-0.5">
                  {BUSINESS_INFO.compliance.gstin}
                </div>
                <div className="text-[11px] text-[#E9E8E3]/60">West Bengal Jurisdiction</div>
              </div>
            </div>
          </div>

          {/* Right Column: Desktop Auto-Slider (6 cols on desktop, evenly matched in height and width) */}
          <div className="hidden lg:flex lg:col-span-6 flex-col justify-between">
            {renderHeroSlider(false)}
          </div>
        </div>
      </div>
    </section>
  );
}
