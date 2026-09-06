import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Check, MessageCircle, UtensilsCrossed } from 'lucide-react';
import { Page, ProductCategory } from '../types';
import { BRAND, PRODUCT_CATEGORIES } from '../data';
import { DecorativeMotif } from '../components/DecorativeMotif';

interface MenuPageProps {
  onNavigate: (page: Page) => void;
  onSelectCategoryForInquiry?: (categoryName: string) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onNavigate, onSelectCategoryForInquiry }) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all');

  const filteredCategories: ProductCategory[] =
    activeCategoryFilter === 'all'
      ? PRODUCT_CATEGORIES
      : PRODUCT_CATEGORIES.filter((cat) => cat.id === activeCategoryFilter);

  const handleInquireCategory = (categoryName: string) => {
    if (onSelectCategoryForInquiry) {
      onSelectCategoryForInquiry(categoryName);
    }
    onNavigate('contact');
  };

  return (
    <div id="page-menu" className="py-8 sm:py-12 space-y-12 sm:space-y-16 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        
        {/* Page Header with Entrance Animation */}
        <motion.section
          id="menu-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DECE] text-[#5C1A2B] text-xs font-semibold uppercase tracking-widest shadow-sm">
            <Sparkles size={13} className="text-[#C9972B]" />
            <span>Our Offerings</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#5C1A2B] font-normal tracking-tight">
            The Presh Signature Menu
          </h1>
          <p className="text-sm sm:text-base text-[#6E5848] font-normal">
            Seven curated categories crafted with premium ingredients and artful presentation.
          </p>
        </motion.section>

        {/* Category Navigation Pills with Hover & Active animations */}
        <motion.div
          id="category-filter-nav"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategoryFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeCategoryFilter === 'all'
                ? 'bg-[#5C1A2B] text-white shadow-md'
                : 'bg-white text-[#5C1A2B] border border-[#E8DECE] hover:border-[#5C1A2B] shadow-sm'
            }`}
          >
            All Categories ({PRODUCT_CATEGORIES.length})
          </motion.button>
          {PRODUCT_CATEGORIES.map((cat) => (
            <motion.button
              key={cat.id}
              type="button"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategoryFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategoryFilter === cat.id
                  ? 'bg-[#5C1A2B] text-white shadow-md'
                  : 'bg-white text-[#5C1A2B] border border-[#E8DECE] hover:border-[#5C1A2B] shadow-sm'
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Product Categories Grid with Scroll & Hover Animations */}
        <section id="menu-categories-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.id}
              id={`menu-category-${category.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: (index % 2) * 0.15 }}
              whileHover={{ y: -8, scale: 1.015 }}
              className="rounded-3xl bg-white border border-[#E8DECE] overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group"
            >
              {/* Category Image with Hover Zoom */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-[#F6EFE2]">
                <img
                  id={`image-${category.id}`}
                  src={category.imageUrl}
                  alt={category.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                
                {/* Category Title badge & Floating Motif */}
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#E8C87A] font-semibold flex items-center gap-1.5 mb-1">
                      <span className="w-2 h-2 rounded-full bg-[#C9972B]" />
                      Category 0{index + 1}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-semibold leading-none text-white drop-shadow-sm">
                      {category.name}
                    </h2>
                  </div>

                  <div className="hidden sm:flex w-9 h-9 rounded-full bg-white/20 backdrop-blur-md items-center justify-center text-white/90 group-hover:bg-[#5C1A2B] group-hover:text-white transition-colors">
                    <UtensilsCrossed size={16} />
                  </div>
                </div>
              </div>

              {/* Category Content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-sm text-[#6E5848] font-normal leading-relaxed">
                    {category.shortDescription}
                  </p>

                  {/* Itemized List with Interactive Hover State on Items */}
                  <div className="space-y-2 pt-2 border-t border-[#F6EFE2]">
                    <span className="text-[11px] uppercase tracking-widest font-semibold text-[#5C1A2B]">
                      Featured Offerings
                    </span>
                    <ul className="grid grid-cols-1 gap-2 pt-1">
                      {category.items.map((item, itemIdx) => (
                        <motion.li
                          key={itemIdx}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center gap-2.5 text-sm text-[#423336] p-1.5 rounded-lg hover:bg-[#F6EFE2]/60 transition-colors"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#C9972B] shrink-0" />
                          <span className="font-medium">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Direct Category Inquiry Action */}
                <div className="pt-4 border-t border-[#F6EFE2] flex items-center justify-between gap-3">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleInquireCategory(category.name)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#5C1A2B] hover:text-[#C9972B] transition-colors cursor-pointer group/btn"
                  >
                    <span>Order / Inquire {category.name}</span>
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1.5 transition-transform" />
                  </motion.button>

                  <motion.a
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    whileTap={{ scale: 0.9 }}
                    href={`${BRAND.contact.whatsappUrl}?text=${encodeURIComponent(`Hello Presh Signature, I would like to inquire about your ${category.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#F6EFE2] text-[#5C1A2B] hover:bg-[#5C1A2B] hover:text-white transition-colors shadow-sm"
                    title={`Inquire on WhatsApp about ${category.name}`}
                  >
                    <MessageCircle size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Menu Bottom Note with Scroll animation */}
        <motion.section
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white border border-[#E8DECE] p-8 sm:p-10 text-center max-w-2xl mx-auto space-y-4 shadow-card"
        >
          <h3 className="font-serif text-2xl text-[#5C1A2B] font-semibold">
            Custom Menus &amp; Dietary Requests
          </h3>
          <p className="text-sm text-[#6E5848] leading-relaxed">
            Need a tailored catering package or bespoke cake flavor? We work closely with you to craft the perfect menu for your occasion.
          </p>
          <motion.button
            type="button"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#5C1A2B] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#461220] transition-colors cursor-pointer shadow-sm"
          >
            <span>Consult Our Team</span>
            <ArrowRight size={14} />
          </motion.button>
        </motion.section>

      </div>
    </div>
  );
};
