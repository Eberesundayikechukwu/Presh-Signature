import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, Target, ArrowRight } from 'lucide-react';
import { Page } from '../types';
import { BRAND } from '../data';
import { DecorativeMotif } from '../components/DecorativeMotif';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div id="page-about" className="py-8 sm:py-12 space-y-16 sm:space-y-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20">
        
        {/* Page Header with Entrance Animation */}
        <motion.section
          id="about-intro-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DECE] text-[#5C1A2B] text-xs font-semibold uppercase tracking-widest shadow-sm">
            <Sparkles size={13} className="text-[#C9972B]" />
            <span>Our Story</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#5C1A2B] font-normal tracking-tight">
            About Presh Signature
          </h1>
          <p className="font-serif text-xl italic text-[#C9972B] font-medium">
            “{BRAND.tagline}”
          </p>
        </motion.section>

        {/* Brand Description & Image with Scroll Animation */}
        <motion.section
          id="about-brand-overview"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="rounded-3xl bg-white border border-[#E8DECE] shadow-card p-8 sm:p-12 lg:p-14 overflow-hidden relative"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
            className="absolute right-0 bottom-0 w-80 h-80 pointer-events-none opacity-10"
          >
            <DecorativeMotif />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            {/* Image with Hover Zoom */}
            <div className="lg:col-span-5">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-soft border border-[#E8DECE] aspect-[4/3] bg-[#F6EFE2] group"
              >
                <img
                  id="about-kitchen-image"
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
                  alt="Artisanal kitchen craftsmanship and baking at Presh Signature"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>

            {/* Verbatim Brand Description */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#5C1A2B] font-semibold">
                Culinary Passion &amp; Craftsmanship
              </h2>
              
              <blockquote className="text-base sm:text-lg text-[#4A3B37] leading-relaxed border-l-2 border-[#C9972B] pl-5 font-normal">
                {BRAND.about}
              </blockquote>

              <div className="pt-2 flex items-center gap-4">
                <motion.button
                  id="about-view-menu-btn"
                  type="button"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => onNavigate('menu')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#5C1A2B] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#461220] transition-colors shadow-sm cursor-pointer"
                >
                  <span>Explore Our Creations</span>
                  <ArrowRight size={14} />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>

        {/* The Four Brand Pillars with Staggered Scroll & Hover Animations */}
        <section id="brand-pillars-section" className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-xl mx-auto space-y-2"
          >
            <h2 className="font-serif text-3xl sm:text-4xl text-[#5C1A2B] font-normal">
              Our Four Brand Pillars
            </h2>
            <p className="text-sm text-[#735F50]">
              The core principles guiding every recipe, bake, and celebration we deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BRAND.pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                id={`pillar-card-${index}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-2xl bg-white border border-[#E8DECE] p-7 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between space-y-4 group cursor-default"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#F6EFE2] border border-[#E8DECE] flex items-center justify-center text-[#5C1A2B] font-serif font-bold text-lg group-hover:bg-[#5C1A2B] group-hover:text-white transition-colors duration-300 shadow-sm">
                    {index + 1}
                  </div>
                  <h3 className="font-serif text-2xl text-[#5C1A2B] font-semibold group-hover:text-[#C9972B] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#6E5848] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F6EFE2] flex items-center gap-1.5 text-xs text-[#C9972B] font-medium">
                  <CheckCircle2 size={14} />
                  <span>Presh Quality Standard</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Brand Vision Section with Scroll Animation */}
        <motion.section
          id="brand-vision-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white border border-[#E8DECE] shadow-card p-8 sm:p-12 text-center max-w-3xl mx-auto relative overflow-hidden"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F6EFE2] border border-[#E8DECE] text-[#5C1A2B] text-xs font-semibold uppercase tracking-widest">
              <Target size={13} className="text-[#C9972B]" />
              <span>Our Vision</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#5C1A2B] font-normal">
              Building The Future
            </h2>

            <p className="text-base sm:text-lg text-[#5A453A] leading-relaxed font-serif italic max-w-2xl mx-auto">
              “{BRAND.vision}”
            </p>
          </div>
        </motion.section>

      </div>
    </div>
  );
};
