import React from 'react';
import { MessageCircle, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { Page } from '../types';
import { BRAND } from '../data';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: Page, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-[#EFE5D5] border-t border-[#DFD3C0] text-[#3D3033]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Presh Signature logo" className="w-8 h-8 rounded-full object-cover" />
              <span className="font-serif text-2xl text-[#5C1A2B] font-bold tracking-wide">
                {BRAND.name}
              </span>
            </div>
            <p className="font-serif text-lg italic text-[#5C1A2B] font-medium leading-snug">
              “{BRAND.tagline}”
            </p>
            <p className="text-sm text-[#6E5848] leading-relaxed max-w-sm">
              Dedicated to creating delicious meals, quality baked goods, custom cakes, and unforgettable culinary celebrations.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#5C1A2B]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  id="footer-link-home"
                  href="#/"
                  onClick={(e) => handleNavClick('home', e)}
                  className="hover:text-[#5C1A2B] transition-colors py-1 inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  id="footer-link-about"
                  href="#/about"
                  onClick={(e) => handleNavClick('about', e)}
                  className="hover:text-[#5C1A2B] transition-colors py-1 inline-block"
                >
                  About Us &amp; Pillars
                </a>
              </li>
              <li>
                <a
                  id="footer-link-menu"
                  href="#/menu"
                  onClick={(e) => handleNavClick('menu', e)}
                  className="hover:text-[#5C1A2B] transition-colors py-1 inline-block"
                >
                  Full Menu (7 Categories)
                </a>
              </li>
              <li>
                <a
                  id="footer-link-contact"
                  href="#/contact"
                  onClick={(e) => handleNavClick('contact', e)}
                  className="hover:text-[#5C1A2B] transition-colors py-1 inline-block"
                >
                  Contact &amp; Bookings
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contact Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#5C1A2B]">
              Direct Inquiries
            </h4>
            <div className="space-y-2.5 text-sm">
              <a
                id="footer-whatsapp-link"
                href={BRAND.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#5C1A2B] hover:text-[#C9972B] transition-colors group"
              >
                <MessageCircle size={16} className="text-[#C9972B] shrink-0" />
                <span className="font-medium">WhatsApp Booking</span>
                <ArrowUpRight size={14} className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                id="footer-email-link"
                href={BRAND.contact.emailUrl}
                className="flex items-center gap-2.5 text-[#5C1A2B] hover:text-[#C9972B] transition-colors group"
              >
                <Mail size={16} className="text-[#C9972B] shrink-0" />
                <span className="font-medium">{BRAND.contact.email}</span>
                <ArrowUpRight size={14} className="opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="flex items-center gap-2.5 text-[#6E5848] pt-1">
                <MapPin size={16} className="text-[#C9972B] shrink-0" />
                <span>{BRAND.contact.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Placeholder Notes */}
        <div className="mt-12 pt-6 border-t border-[#DFD3C0] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7665]">
          <p>© {currentYear} {BRAND.name}. All rights reserved.</p>
          <p className="text-[11px] italic">
            Luxury Catering, Artisan Baking &amp; Refreshments
          </p>
        </div>
      </div>
    </footer>
  );
};
