import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../../data/businessInfo';
import Button from '../common/Button';

export default function Header({ currentPage, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (pageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F6F0]/95 backdrop-blur-md shadow-xs border-b border-[#D8D6CE]'
          : 'bg-[#F8F6F0]/90 backdrop-blur-xs border-b border-[#E9E8E3]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-22">
          {/* Logo / Wordmark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3.5 text-left focus:outline-none group cursor-pointer"
            aria-label="Asirbad Consultancy Home"
          >
            {/* Custom Emblem */}
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-xs bg-[#0B1D30] border border-[#B69A64]/70 flex items-center justify-center shadow-xs transition-transform duration-200 group-hover:scale-105 shrink-0">
              <span className="font-serif text-[#F8F6F0] text-base md:text-lg font-bold tracking-tight">
                AC
              </span>
            </div>

            {/* Typography */}
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-[#0B1D30] leading-tight group-hover:text-[#142B45] transition-colors">
                ASIRBAD CONSULTANCY
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans font-medium tracking-[0.16em] uppercase text-[#B69A64] leading-none mt-0.5">
                Taxation &amp; Advisory
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
          >
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors cursor-pointer rounded-xs ${
                    isActive
                      ? 'text-[#0B1D30] font-semibold'
                      : 'text-[#555F6B] hover:text-[#0B1D30] hover:bg-[#0B1D30]/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-[#B69A64] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={BUSINESS_INFO.contact.phoneTel}
              className="text-xs font-semibold text-[#0B1D30] hover:text-[#B69A64] tracking-wider transition-colors flex items-center gap-1.5"
              title="Call Asirbad Consultancy"
            >
              <svg
                className="w-3.5 h-3.5 text-[#B69A64]"
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
              <span>{BUSINESS_INFO.contact.phone}</span>
            </a>

            <Button
              variant="primary"
              size="sm"
              onClick={() => handleLinkClick('contact')}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={BUSINESS_INFO.contact.phoneTel}
              className="p-2 text-[#0B1D30] hover:text-[#B69A64] transition-colors"
              aria-label="Direct Phone Call"
            >
              <svg
                className="w-5 h-5 text-[#B69A64]"
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
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0B1D30] hover:text-[#B69A64] focus:outline-none transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? (
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
              ) : (
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B1D30] text-[#F8F6F0] border-t border-[#B69A64]/30 px-6 py-6 shadow-xl transition-all animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between text-left py-2.5 text-base font-serif tracking-wide border-b border-[#142B45] ${
                    isActive
                      ? 'text-[#DFC89B] font-bold pl-2'
                      : 'text-[#E9E8E3] hover:text-[#DFC89B] pl-0'
                  } transition-all`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B69A64]"></span>
                  )}
                </button>
              );
            })}

            <div className="pt-4 flex flex-col gap-3">
              <Button
                variant="gold"
                size="md"
                onClick={() => handleLinkClick('contact')}
                className="w-full"
              >
                Contact Us
              </Button>

              <a
                href={BUSINESS_INFO.contact.phoneTel}
                className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#DFC89B] border border-[#B69A64]/40 hover:bg-[#B69A64]/10 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-[#B69A64]"
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
                Call: {BUSINESS_INFO.contact.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
