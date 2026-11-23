import React from 'react';

/**
 * Page Hero for secondary pages (About, Services, Contact)
 * Sets up a consistent editorial banner with breadcrumbs and clear page intent.
 */
export default function PageHero({
  title,
  subtitle,
  currentPageLabel,
  onNavigate,
}) {
  return (
    <section className="relative bg-executive-dark text-[#F8F6F0] pt-32 pb-20 md:pt-40 md:pb-24 border-b border-[#B69A64]/30 overflow-hidden">
      {/* Moving Architectural Financial Grid */}
      <div className="absolute inset-0 bg-financial-pattern-dark opacity-50 animate-grid-drift pointer-events-none" />

      {/* Vibrant Golden Ambient Nebula */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#B69A64]/25 rounded-full blur-3xl animate-ambient-orb1 pointer-events-none"
        aria-hidden="true"
      />
      {/* Royal Azure Nebula */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-[#1E436B]/40 rounded-full blur-3xl animate-ambient-orb2 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#DFC89B] mb-5"
        >
          <button
            onClick={() => onNavigate && onNavigate('home')}
            className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span className="text-[#B69A64]/60">/</span>
          <span className="text-[#F8F6F0] font-semibold">
            {currentPageLabel || title}
          </span>
        </nav>

        {/* Editorial Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#B69A64]"></span>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B69A64]">
              Asirbad Consultancy
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-serif font-bold text-[#F8F6F0] leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-4 text-base sm:text-lg md:text-xl text-[#E9E8E3]/85 leading-relaxed font-light">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Refined Gold Bottom Hairline */}
      <div className="absolute bottom-0 left-0 right-0 gold-hairline" />
    </section>
  );
}
