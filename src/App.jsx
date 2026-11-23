import React, { useState, useEffect, useCallback } from 'react';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  // Normalize initial route from pathname or hash
  const getInitialRoute = () => {
    if (typeof window === 'undefined') return 'home';

    const path = window.location.pathname.toLowerCase().replace(/^\/|\/$/g, '');
    const hash = window.location.hash.toLowerCase().replace(/^#\/?/, '');

    const target = hash || path;

    if (target.includes('about')) return 'about';
    if (target.includes('service')) return 'services';
    if (target.includes('contact')) return 'contact';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialRoute);
  const [preselectedService, setPreselectedService] = useState('');

  // Update document title dynamically based on active page
  useEffect(() => {
    const titles = {
      home: 'Asirbad Consultancy | Taxation Consultancy in Sodepur, Kolkata',
      about: 'About Us | Asirbad Consultancy - Gobinda Kumar Mukherjee',
      services: 'Taxation & Consultancy Services | Asirbad Consultancy',
      contact: 'Contact & Location | Asirbad Consultancy - Sodepur, Kolkata',
    };

    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  // Synchronize route changes to browser history
  const navigateTo = useCallback((pageId, options = {}) => {
    setCurrentPage(pageId);

    const routePath = pageId === 'home' ? '/' : `/${pageId}`;

    try {
      if (window.location.pathname !== routePath) {
        window.history.pushState({ page: pageId }, '', routePath);
      }
    } catch {
      // Fallback to hash if HTML5 history is restricted
      window.location.hash = pageId === 'home' ? '' : pageId;
    }

    // Scroll smoothly to top on navigation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: options.instant ? 'auto' : 'smooth',
    });
  }, []);

  // Listen to browser Back / Forward buttons (popstate & hashchange)
  useEffect(() => {
    const handlePopState = () => {
      const route = getInitialRoute();
      setCurrentPage(route);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleSelectService = (serviceTitle) => {
    setPreselectedService(serviceTitle);
  };

  return (
    <MainLayout currentPage={currentPage} onNavigate={navigateTo}>
      {currentPage === 'home' && <Home onNavigate={navigateTo} />}
      {currentPage === 'about' && <About onNavigate={navigateTo} />}
      {currentPage === 'services' && (
        <Services
          onNavigate={navigateTo}
          onSelectService={handleSelectService}
        />
      )}
      {currentPage === 'contact' && (
        <Contact
          onNavigate={navigateTo}
          preselectedService={preselectedService}
        />
      )}
    </MainLayout>
  );
}
