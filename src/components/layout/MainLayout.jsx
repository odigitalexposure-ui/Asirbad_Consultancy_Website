import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BUSINESS_INFO } from '../../data/businessInfo';

export default function MainLayout({
  children,
  currentPage,
  onNavigate,
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F0] text-[#555F6B] font-sans">
      {/* Header */}
      <Header currentPage={currentPage} onNavigate={onNavigate} />

      {/* Main Content Area */}
      <main className="grow focus:outline-none" id="main-content" tabIndex={-1}>
        {children}
      </main>

      {/* Floating WhatsApp / Direct Contact Shortcut for immediate client convenience */}
      <aside aria-label="Quick Contact Actions">
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
          <a
            href={BUSINESS_INFO.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 border-2 border-white focus:outline-none focus:ring-2 focus:ring-[#25D366]"
            aria-label="Contact Asirbad Consultancy via WhatsApp"
            title="Chat on WhatsApp"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.96.523 1.84.819 2.796.819 3.18 0 5.767-2.587 5.767-5.766.001-3.182-2.585-5.766-5.767-5.766zm3.391 8.21c-.145.409-.844.756-1.178.788-.315.03-.717.05-2.072-.511-1.632-.676-2.678-2.339-2.759-2.449-.081-.11-.663-.881-.663-1.681 0-.8.419-1.194.568-1.356.149-.162.325-.203.433-.203.109 0 .217 0 .312.006.101.006.236-.039.369.284.145.352.497 1.214.542 1.304.045.09.075.195.015.314-.06.12-.09.195-.18.3-.09.105-.19.233-.271.314-.09.09-.185.188-.08.369.105.18.468.772 1.004 1.249.69.614 1.272.805 1.452.895.18.09.285.075.39-.045.105-.12.45-.525.57-.705.12-.18.24-.15.405-.09.165.06 1.05.495 1.23.585.18.09.3.135.345.21.045.075.045.435-.1 1.044zM12 2C6.477 2 2 6.477 2 12c0 1.826.49 3.538 1.346 5.016L2 22l5.125-1.316C8.544 21.498 10.217 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
            </svg>
          </a>
        </div>
      </aside>

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
