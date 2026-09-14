import React from 'react';
import { MessageCircle, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { Page } from '../types';
import { BRAND } from '../data';



interface FooterProps {
  onNavigate: (page: Page) => void;
}

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z" /></svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
);

const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" /></svg>
);

const TiktokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82c-.9-.98-1.4-2.26-1.4-3.57h-3.2v13.9c0 1.56-1.27 2.83-2.83 2.83a2.83 2.83 0 1 1 0-5.66c.29 0 .57.04.83.13V9.98a6 6 0 1 0 5.2 5.95V9.38a8.15 8.15 0 0 0 4.4 1.29V7.47a4.85 4.85 0 0 1-3-1.65z" /></svg>
);

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
            <div className="flex items-center gap-3 pt-2">
              <a href="https://www.facebook.com/share/1FiB4BARzq/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#F6EFE2] border border-[#E8DECE] flex items-center justify-center text-[#5C1A2B] hover:bg-[#5C1A2B] hover:text-white transition-colors">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/preshsignature1?stkn=cnlweG4yaXhlYjgy" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-[#F6EFE2] border border-[#E8DECE] flex items-center justify-center text-[#5C1A2B] hover:bg-[#5C1A2B] hover:text-white transition-colors">
                <InstagramIcon />
              </a>
              <a href="https://youtube.com/@preshsignature1?si=VcbZlGcOgJZgEcVW" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded-full bg-[#F6EFE2] border border-[#E8DECE] flex items-center justify-center text-[#5C1A2B] hover:bg-[#5C1A2B] hover:text-white transition-colors">
                <YoutubeIcon />
              </a>
              <a href="https://www.tiktok.com/@preshsignature3" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-9 h-9 rounded-full bg-[#F6EFE2] border border-[#E8DECE] flex items-center justify-center text-[#5C1A2B] hover:bg-[#5C1A2B] hover:text-white transition-colors">
                <TiktokIcon />
              </a>
            </div>
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
