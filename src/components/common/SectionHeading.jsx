import React from 'react';

/**
 * Editorial Section Heading
 * Displays small gold caption, editorial serif title, and supporting subtitle.
 */
export default function SectionHeading({
  caption,
  title,
  subtitle,
  align = 'left',
  dark = false,
  className = '',
  titleTag = 'h2',
}) {
  const isCenter = align === 'center';
  const TitleElement = titleTag;

  return (
    <div
      className={`mb-10 sm:mb-12 ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'
      } ${className}`}
    >
      {caption && (
        <div
          className={`inline-flex items-center gap-2 mb-3 ${
            isCenter ? 'justify-center' : 'justify-start'
          }`}
        >
          <span className="w-6 h-[1px] bg-[#B69A64]"></span>
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B69A64]">
            {caption}
          </span>
          <span className="w-6 h-[1px] bg-[#B69A64]"></span>
        </div>
      )}

      <TitleElement
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-serif font-bold leading-tight tracking-tight ${
          dark ? 'text-[#F8F6F0]' : 'text-[#0B1D30]'
        }`}
      >
        {title}
      </TitleElement>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-[#E9E8E3]/80' : 'text-[#555F6B]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
