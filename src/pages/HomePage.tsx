import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, BookOpen, Utensils, PhoneCall, Cake, HeartHandshake } from 'lucide-react';
import { Page } from '../types';
import { BRAND, PRODUCT_CATEGORIES } from '../data';
import { DecorativeMotif } from '../components/DecorativeMotif';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div id="page-home" className="space-y-16 sm:space-y-24 py-6 sm:py-10">
      {/* Hero Section with Scroll and Stagger Animations */}
      <section id="hero-section" className="relative overflow-hidden px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative rounded-3xl bg-white border border-[#E8DECE] shadow-card p-8 sm:p-12 lg:p-16 overflow-hidden"
          >
            {/* Animated decorative SVG motif overlays */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
              className="absolute -right-20 -top-20 w-80 sm:w-96 h-80 sm:h-96 pointer-events-none opacity-20"
            >
              <DecorativeMotif />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 110, repeat: Infinity, ease: 'linear' }}
              className="absolute -left-20 -bottom-20 w-72 sm:w-80 h-72 sm:h-80 pointer-events-none opacity-15"
            >
              <DecorativeMotif />
            </motion.div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Typography & CTAs */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
                className="lg:col-span-7 space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6EFE2] border border-[#E8DECE] text-[#5C1A2B] text-xs font-semibold uppercase tracking-widest">
                  <Sparkles size={13} className="text-[#C9972B]" />
                  <span>{BRAND.name}</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#5C1A2B] font-normal leading-[1.12] tracking-tight">
                  {BRAND.tagline}
                </h1>

                <p className="text-base sm:text-lg text-[#5A453A] leading-relaxed max-w-xl font-normal">
                  Premium catering, bespoke baking, custom cakes, healthy refreshments, and artful food trays crafted for unforgettable moments.
                </p>

                {/* Primary Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <motion.button
                    id="hero-cta-menu"
                    type="button"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onNavigate('menu')}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#5C1A2B] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#461220] transition-all duration-300 shadow-sm hover:shadow-md group cursor-pointer"
                  >
                    <span>Explore Menu</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <motion.button
                    id="hero-cta-contact"
                    type="button"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F6EFE2] text-[#5C1A2B] border border-[#C9972B]/60 text-xs uppercase tracking-widest font-semibold hover:bg-[#5C1A2B] hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    <span>Get in Touch</span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Column: Hero Visual Asset with hover animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                className="lg:col-span-5"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden shadow-soft border border-[#E8DECE] bg-[#F6EFE2] aspect-[4/3] sm:aspect-[4/3] group"
                >
                  <img
                    id="hero-featured-image"
                    src="images/hero.jpg"
                    alt="Presh Signature luxury catering spread and celebration confectionery"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-xs font-serif italic tracking-wide text-white/95">
                      Bespoke Catering &amp; Confectionery
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Category Sneak Peek with Hover Animations on Products */}
      <section id="category-preview-strip" className="px-6 sm:px-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8C6D53] font-semibold">
                Signature Specialties
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#5C1A2B] font-semibold">
                Handcrafted For Celebrations
              </h2>
            </div>
            <button
              onClick={() => onNavigate('menu')}
              className="text-xs uppercase tracking-widest font-semibold text-[#5C1A2B] hover:text-[#C9972B] flex items-center gap-1 group cursor-pointer"
            >
              <span>View All</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {PRODUCT_CATEGORIES.slice(0, 4).map((cat, idx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onNavigate('menu')}
                className="group cursor-pointer rounded-2xl bg-white border border-[#E8DECE] overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
              >
                <div className="relative h-32 sm:h-36 overflow-hidden bg-[#F6EFE2]">
                  <img
                    src={cat.imageUrl}
                    alt={cat.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-1">
                  <h3 className="font-serif text-lg font-semibold text-[#5C1A2B] group-hover:text-[#C9972B] transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-[11px] text-[#8C6D53] font-medium flex items-center gap-1">
                    {cat.items.length} items
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Strip: 3 Clean Cards linking to Menu, About, and Contact with Scroll & Hover animations */}
      <section id="highlights-strip-section" className="px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Menu */}
            <motion.div
              id="highlight-card-menu"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('menu')}
              className="group cursor-pointer rounded-2xl bg-white border border-[#E8DECE] p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F6EFE2] border border-[#E8DECE] flex items-center justify-center text-[#5C1A2B] group-hover:bg-[#5C1A2B] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Utensils size={20} />
                </div>
                <h2 className="font-serif text-2xl text-[#5C1A2B] font-semibold">
                  Our Menu
                </h2>
                <p className="text-sm text-[#6E5848] leading-relaxed">
                  Discover all seven product categories, from custom wedding cakes to savory Nigerian dishes and healthy drinks.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#F6EFE2] flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#5C1A2B] group-hover:text-[#C9972B] transition-colors">
                <span>View All 7 Categories</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>

            {/* Card 2: About */}
            <motion.div
              id="highlight-card-about"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('about')}
              className="group cursor-pointer rounded-2xl bg-white border border-[#E8DECE] p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F6EFE2] border border-[#E8DECE] flex items-center justify-center text-[#5C1A2B] group-hover:bg-[#5C1A2B] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <BookOpen size={20} />
                </div>
                <h2 className="font-serif text-2xl text-[#5C1A2B] font-semibold">
                  About Us
                </h2>
                <p className="text-sm text-[#6E5848] leading-relaxed">
                  Learn our story, the four pillars of our craft—Creativity, Quality, Presentation, and Service—and our brand vision.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#F6EFE2] flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#5C1A2B] group-hover:text-[#C9972B] transition-colors">
                <span>Read Our Story</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>

            {/* Card 3: Contact */}
            <motion.div
              id="highlight-card-contact"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('contact')}
              className="group cursor-pointer rounded-2xl bg-white border border-[#E8DECE] p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#F6EFE2] border border-[#E8DECE] flex items-center justify-center text-[#5C1A2B] group-hover:bg-[#5C1A2B] group-hover:text-white transition-colors duration-300 shadow-sm">
                  <PhoneCall size={20} />
                </div>
                <h2 className="font-serif text-2xl text-[#5C1A2B] font-semibold">
                  Contact &amp; Bookings
                </h2>
                <p className="text-sm text-[#6E5848] leading-relaxed">
                  Connect directly via WhatsApp or email for catering reservations, custom celebration cakes, and food trays.
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#F6EFE2] flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#5C1A2B] group-hover:text-[#C9972B] transition-colors">
                <span>Inquire Online</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
