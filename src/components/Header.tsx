import React, { useState } from 'react';
import { Menu as MenuIcon, X, PhoneCall } from 'lucide-react';
import { Page } from '../types';
import { BRAND } from '../data';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { page: Page; label: string }[] = [
    { page: 'home', label: 'Home' },
    { page: 'about', label: 'About' },
    { page: 'menu', label: 'Menu' },
    { page: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: Page, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header id="site-header" className="sticky top-0 z-40 bg-[#F6EFE2]/95 backdrop-blur-md border-b border-[#E8DECE] transition-all">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
        {/* Brand Logo / Monogram */}
        <a
          id="header-brand-logo"
          href="#/"
          onClick={(e) => handleNavClick('home', e)}
          className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C1A2B]"
        >
          <div className="w-10 h-10 rounded-full border border-[#C9972B] bg-white flex items-center justify-center text-[#5C1A2B] font-serif text-xl font-bold shadow-sm transition-transform duration-300 group-hover:scale-105">
            P
          </div>
          <div>
            <span className="block font-serif text-2xl sm:text-[26px] tracking-wide text-[#5C1A2B] font-semibold leading-none">
              {BRAND.name}
            </span>
            <span className="block text-[11px] uppercase tracking-[0.2em] text-[#8C6D53] mt-1 font-medium">
              Catering &amp; Baking
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-navigation" className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <a
                key={item.page}
                id={`nav-link-${item.page}`}
                href={`#/${item.page === 'home' ? '' : item.page}`}
                onClick={(e) => handleNavClick(item.page, e)}
                className={`relative py-1 text-sm tracking-wider uppercase font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-[#5C1A2B] font-semibold'
                    : 'text-[#5C1A2B]/75 hover:text-[#5C1A2B]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9972B] rounded-full" />
                )}
              </a>
            );
          })}

          {/* Quick Contact Action */}
          <a
            id="nav-cta-contact"
            href="#/contact"
            onClick={(e) => handleNavClick('contact', e)}
            className="ml-2 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#C9972B] text-xs font-semibold uppercase tracking-widest text-[#5C1A2B] bg-white/80 hover:bg-[#5C1A2B] hover:text-white hover:border-[#5C1A2B] transition-all duration-300 shadow-sm"
          >
            <PhoneCall size={14} className="text-[#C9972B]" />
            <span>Inquire</span>
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          id="mobile-menu-toggle-button"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          className="md:hidden p-2.5 rounded-lg text-[#5C1A2B] hover:bg-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#5C1A2B]"
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#F6EFE2] border-b border-[#E8DECE] px-6 py-6 animate-fadeIn"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <a
                  key={item.page}
                  id={`mobile-nav-link-${item.page}`}
                  href={`#/${item.page === 'home' ? '' : item.page}`}
                  onClick={(e) => handleNavClick(item.page, e)}
                  className={`flex items-center justify-between py-2.5 px-4 rounded-md text-base tracking-wide uppercase transition-colors ${
                    isActive
                      ? 'bg-white text-[#5C1A2B] font-semibold border-l-4 border-[#C9972B]'
                      : 'text-[#5C1A2B]/85 hover:bg-white/50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#C9972B]" />}
                </a>
              );
            })}

            <div className="pt-4 border-t border-[#E8DECE] flex flex-col gap-3">
              <a
                id="mobile-nav-cta-contact"
                href="#/contact"
                onClick={(e) => handleNavClick('contact', e)}
                className="w-full text-center py-3 rounded-full bg-[#5C1A2B] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#461220] transition-colors"
              >
                Inquire &amp; Order
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
