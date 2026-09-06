import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Page } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const getPageFromHash = (): Page => {
    const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
    if (hash === 'about') return 'about';
    if (hash === 'menu') return 'menu';
    if (hash === 'contact') return 'contact';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash);
  const [selectedCategoryForInquiry, setSelectedCategoryForInquiry] = useState<string>('');

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '#/' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategoryForInquiry(categoryName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6EFE2] text-[#2E2528] selection:bg-[#5C1A2B] selection:text-[#F6EFE2] relative">
      {/* Dynamic Animated Background with SVG ribbons, glows & sparkles */}
      <AnimatedBackground />

      {/* Shared Header with navigation */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content with smooth fade transitions */}
      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
            {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
            {currentPage === 'menu' && (
              <MenuPage
                onNavigate={handleNavigate}
                onSelectCategoryForInquiry={handleCategorySelect}
              />
            )}
            {currentPage === 'contact' && (
              <ContactPage
                onNavigate={handleNavigate}
                initialCategory={selectedCategoryForInquiry}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Shared Footer across all pages */}
      <div className="relative z-10">
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
