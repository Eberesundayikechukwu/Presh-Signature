import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Mail, MapPin, Sparkles, Send, CheckCircle2, ArrowUpRight, Clock } from 'lucide-react';
import { Page } from '../types';
import { BRAND, PRODUCT_CATEGORIES } from '../data';
import { DecorativeMotif } from '../components/DecorativeMotif';

interface ContactPageProps {
  onNavigate: (page: Page) => void;
  initialCategory?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, initialCategory = '' }) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'General Inquiry');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const constructWhatsAppUrl = () => {
    const text = `Hello Presh Signature!%0A%0A*Name:* ${encodeURIComponent(name || 'Customer')}%0A*Interest:* ${encodeURIComponent(selectedCategory)}%0A*Event Date:* ${encodeURIComponent(eventDate || 'Not specified')}%0A*Message:* ${encodeURIComponent(message || 'I would like to inquire about your catering and baking services.')}`;
    return `https://wa.me/2348123122777?text=${text}`;
  };

  return (
    <div id="page-contact" className="py-8 sm:py-12 space-y-12 sm:space-y-16 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">

        {/* Page Header with Entrance Animation */}
        <motion.section
          id="contact-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DECE] text-[#5C1A2B] text-xs font-semibold uppercase tracking-widest shadow-sm">
            <Sparkles size={13} className="text-[#C9972B]" />
            <span>Connect</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#5C1A2B] font-normal tracking-tight">
            Get in Touch
          </h1>
          <p className="text-sm sm:text-base text-[#6E5848] font-normal">
            We look forward to creating memorable flavors and celebrations for you.
          </p>
           </motion.section>

        {/* Contact Cards Strip with Staggered Scroll Entrance & Hover Lift */}
        <section id="contact-methods-strip" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-3xl bg-white border border-[#E8DECE] p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#F6EFE2] border border-[#E8DECE] flex items-center justify-center text-[#5C1A2B] shadow-sm">
                <MessageCircle size={22} className="text-[#25D366]" />
              </div>
              <h2 className="font-serif text-2xl text-[#5C1A2B] font-semibold">
                WhatsApp Direct
              </h2>
              <p className="text-sm text-[#6E5848] leading-relaxed">
                Fastest response for cake bookings, event catering dates, and quick inquiries.
              </p>
              <div className="pt-1">
                <span className="font-mono text-xs bg-[#F6EFE2] px-2.5 py-1 rounded text-[#5C1A2B] font-medium inline-block">
                  {BRAND.contact.whatsappDisplay}
                </span>

              </div>
            </div>

            <motion.a
              id="contact-btn-whatsapp"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={BRAND.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#1EBE5D] transition-colors shadow-sm"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight size={14} />
            </motion.a>
          </motion.div>

          {/* Card 2: Email */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-3xl bg-white border border-[#E8DECE] p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#F6EFE2] border border-[#E8DECE] flex items-center justify-center text-[#5C1A2B] shadow-sm">
                <Mail size={22} className="text-[#C9972B]" />
              </div>
              <h2 className="font-serif text-2xl text-[#5C1A2B] font-semibold">
                Email Us
              </h2>
              <p className="text-sm text-[#6E5848] leading-relaxed">
                For corporate catering proposals, partnership requests, and formal inquiries.
              </p>
              <div className="pt-1">
                <span className="font-mono text-xs bg-[#F6EFE2] px-2.5 py-1 rounded text-[#5C1A2B] font-medium inline-block">
                  {BRAND.contact.email}
                </span>

              </div>
            </div>

            <motion.a
              id="contact-btn-email"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={BRAND.contact.emailUrl}
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-[#5C1A2B] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#461220] transition-colors shadow-sm"
            >
              <span>Send an Email</span>
              <ArrowUpRight size={14} />
            </motion.a>
          </motion.div>

          {/* Card 3: Service Location & Hours */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="rounded-3xl bg-white border border-[#E8DECE] p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#F6EFE2] border border-[#E8DECE] flex items-center justify-center text-[#5C1A2B] shadow-sm">
                <MapPin size={22} className="text-[#5C1A2B]" />
              </div>
              <h2 className="font-serif text-2xl text-[#5C1A2B] font-semibold">
                Service Area
              </h2>
              <p className="text-sm text-[#6E5848] leading-relaxed">
                Serving Lagos and catering special celebrations across Nigeria.
              </p>
              <div className="pt-1 flex items-center gap-2 text-xs text-[#5C1A2B] font-medium">
                <Clock size={14} className="text-[#C9972B]" />
                <span>Advance booking recommended</span>
              </div>
            </div>

            <div className="p-3.5 bg-[#F6EFE2] rounded-xl text-center border border-[#E8DECE]">
              <span className="text-xs text-[#5C1A2B] font-semibold">
                Custom Orders &amp; Event Booking Open
              </span>
            </div>
          </motion.div>
        </section>

        {/* Inquiry Form Section with Scroll Animation */}
        <motion.section
          id="contact-form-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white border border-[#E8DECE] shadow-card p-8 sm:p-12 max-w-3xl mx-auto relative overflow-hidden"
        >
          <div className="space-y-6 relative z-10">
            <div className="text-center space-y-2 pb-2 border-b border-[#F6EFE2]">
              <h2 className="font-serif text-3xl text-[#5C1A2B] font-semibold">
                Send an Inquiry
              </h2>
              <p className="text-sm text-[#6E5848]">
                Fill in your celebration details and connect directly.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="py-10 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-[#F6EFE2] border border-[#C9972B] text-[#5C1A2B] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 size={30} className="text-[#C9972B]" />
                </div>
                <h3 className="font-serif text-2xl text-[#5C1A2B] font-semibold">
                  Thank You for Reaching Out
                </h3>
                <p className="text-sm text-[#6E5848] max-w-md mx-auto leading-relaxed">
                  We have received your message details. You can also send this instantly to our team on WhatsApp:
                </p>
                <div className="pt-3 flex flex-wrap justify-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    href={constructWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#1EBE5D] transition-colors shadow-sm"
                  >
                    <MessageCircle size={15} />
                    <span>Send Via WhatsApp Now</span>
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3.5 rounded-full bg-[#F6EFE2] text-[#5C1A2B] text-xs uppercase tracking-widest font-semibold hover:bg-[#E8DECE] transition-colors cursor-pointer"
                  >
                    <span>New Inquiry</span>
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Category Selection */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-category" className="block text-xs font-semibold uppercase tracking-wider text-[#5C1A2B]">
                    Select Category of Interest
                  </label>
                  <select
                    id="inquiry-category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8DECE] bg-[#F6EFE2]/50 text-sm text-[#2E2528] focus:outline-none focus:ring-2 focus:ring-[#5C1A2B] transition-all"
                  >
                    <option value="General Inquiry">General Catering &amp; Baking Inquiry</option>
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="inquiry-name" className="block text-xs font-semibold uppercase tracking-wider text-[#5C1A2B]">
                      Your Name
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      placeholder="e.g., Amaka Johnson"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DECE] bg-[#F6EFE2]/50 text-sm text-[#2E2528] focus:outline-none focus:ring-2 focus:ring-[#5C1A2B] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="inquiry-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#5C1A2B]">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      id="inquiry-phone"
                      type="tel"
                      placeholder="e.g., +234 801 234 5678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DECE] bg-[#F6EFE2]/50 text-sm text-[#2E2528] focus:outline-none focus:ring-2 focus:ring-[#5C1A2B] transition-all"
                    />
                  </div>
                </div>

                {/* Email & Event Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="inquiry-email" className="block text-xs font-semibold uppercase tracking-wider text-[#5C1A2B]">
                      Email Address
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      placeholder="e.g., amaka@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DECE] bg-[#F6EFE2]/50 text-sm text-[#2E2528] focus:outline-none focus:ring-2 focus:ring-[#5C1A2B] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="inquiry-date" className="block text-xs font-semibold uppercase tracking-wider text-[#5C1A2B]">
                      Event Date (Optional)
                    </label>
                    <input
                      id="inquiry-date"
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DECE] bg-[#F6EFE2]/50 text-sm text-[#2E2528] focus:outline-none focus:ring-2 focus:ring-[#5C1A2B] transition-all"
                    />
                  </div>
                </div>

                {/* Message Details */}
                <div className="space-y-1.5">
                  <label htmlFor="inquiry-message" className="block text-xs font-semibold uppercase tracking-wider text-[#5C1A2B]">
                    Order Details or Special Requests
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={4}
                    placeholder="Tell us about your celebration, guest count, preferred flavors, or delivery requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8DECE] bg-[#F6EFE2]/50 text-sm text-[#2E2528] focus:outline-none focus:ring-2 focus:ring-[#5C1A2B] transition-all"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <motion.button
                    id="submit-inquiry-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#5C1A2B] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#461220] transition-colors shadow-sm cursor-pointer"
                  >
                    <Send size={14} />
                    <span>Submit Inquiry</span>
                  </motion.button>

                  <motion.a
                    id="direct-whatsapp-compose-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={constructWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#1EBE5D] transition-colors shadow-sm"
                  >
                    <MessageCircle size={15} />
                    <span>Chat Directly on WhatsApp</span>
                  </motion.a>
                </div>
              </form>
            )}
          </div>
        </motion.section>

      </div>
    </div>
  );
};
