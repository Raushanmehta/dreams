"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MapPin, ExternalLink, Sparkles } from "lucide-react";
import { FourPointStarIcon, ArrowRightIcon } from "@/components/icons";
import siteData from "@/data/site.json";

interface ContactFormData {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
  subject: string;
  message: string;
}

export interface ContactItem {
  number: string;
  title: string;
  value: string;
  href: string;
}

export default function ContactSection(): React.JSX.Element {
  const contact = siteData.contact;

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        address: "",
        subject: "",
        message: "",
      });
    }, 850);
  };

  return (
    <section className="relative w-full bg-[#f4f4f2] px-4 md:px-12 py-8 md:py-10 lg:py-20 font-sans select-none border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto w-full">
        {/* ========================================================= */}
        {/* SECTION HEADER: Matches Dreams* Signature Brand Theme    */}
        {/* ========================================================= */}
        <div className="mb-8 sm:mb-10">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 uppercase tracking-widest text-[#11131a] mb-3 font-semibold"
          >
            <Sparkles className="h-5 w-5 text-[#2563EB]" />
            <span>{contact.badgeText}</span>
          </motion.div>

          {/* Headline with skewed brand badge & rotating 4-point sparkle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#11131a] leading-[1.15] uppercase"
          >
            <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2">
              <span>{contact.headline.line1}</span>
              {/* Tilted Sliced Background Badge in #2563EB */}
              <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.4)] select-none">
                <span className="inline-block skew-x-14 md:skew-x-18">
                  {contact.headline.line2Badge}
                </span>
              </span>
              {/* Rotating 4-point star SVG icon */}
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="inline-flex items-center justify-center text-[#2563EB] drop-shadow-[0_0_12px_rgba(37,99,235,0.5)] ml-0.5 sm:ml-1"
              >
                <FourPointStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563EB]" />
              </motion.span>
            </div>
          </motion.h2>
        </div>

        {/* ========================================================= */}
        {/* MAIN SPLIT CARD: Luxury Obsidian Left + Crisp White Right */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 bg-white shadow-[0_25px_70px_rgba(0,0,0,0.07)] border border-black/[0.08] overflow-hidden rounded-[28px] sm:rounded-[32px]"
        >
          {/* ========================================================= */}
          {/* LEFT COLUMN: Luxury Obsidian Dark Panel (#0c0d12)         */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 bg-[#0c0d12] text-white p-6 sm:p-6 lg:p-10 xl:p-10 relative flex flex-col justify-between overflow-hidden">
            {/* Ambient royal blue glow overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,rgba(37,99,235,0.22),transparent_70%)] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-60 h-60 rounded-full bg-[#2563EB]/10 blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              {/* Header block */}
              <div className="h-auto lg:h-[116px] flex flex-col justify-start">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                  {contact.privateOffice.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-[13.5px] mt-1 leading-relaxed max-w-sm">
                  {contact.privateOffice.subtitle}
                </p>
              </div>

              {/* Dynamic Contacts from JSON */}
              <div className="flex flex-col gap-4 mb-5 lg:mb-0">
                {(contact.contacts as ContactItem[]).map((item: ContactItem, index: number) => (
                  <div key={index} className="h-auto lg:h-[64px] flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-full bg-white text-[#2563EB] font-bold text-base flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.3)] group-hover:bg-[#2563EB] group-hover:text-white group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                      {item.number}
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-white font-semibold text-[15.5px] tracking-tight leading-tight group-hover:text-[#3b82f6] transition-colors">
                        {item.title}
                      </h4>
                      <a
                        href={item.href}
                        className="text-zinc-400 text-[13.5px] font-normal leading-tight mt-1 hover:text-white transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Description Paragraph */}
              <div className="h-auto lg:h-[120px] flex flex-col justify-start pt-2 lg:pt-3 mb-6 lg:mb-0">
                <p className="text-zinc-400 text-[14px] leading-relaxed max-w-sm">
                  {siteData.site.description}
                </p>
              </div>

              {/* Social Icons */}
              <div className="h-auto lg:h-[48px] flex items-center gap-2.5 flex-wrap">
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8.5 h-8.5 rounded-full bg-white/10 border border-white/15 text-zinc-300 flex items-center justify-center shadow-sm transition-all hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </motion.a>

                <motion.a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8.5 h-8.5 rounded-full bg-white/10 border border-white/15 text-zinc-300 flex items-center justify-center shadow-sm transition-all hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2]"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </motion.a>

                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8.5 h-8.5 rounded-full bg-white/10 border border-white/15 text-zinc-300 flex items-center justify-center shadow-sm transition-all hover:bg-gradient-to-tr hover:from-amber-500 hover:to-purple-600 hover:text-white hover:border-transparent"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.a>

                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8.5 h-8.5 rounded-full bg-white/10 border border-white/15 text-zinc-300 flex items-center justify-center shadow-sm transition-all hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5]"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Architectural Pure White Area (#ffffff)     */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-6 lg:p-10 xl:p-10 flex flex-col justify-between">
            {/* Header Block */}
            <div className="h-auto lg:h-[116px] flex flex-col justify-start">
              <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#11131a] tracking-tight leading-tight mb-1.5">
                {contact.form.title}<span className="text-[#2563EB]">*</span>
              </h3>
              <p className="text-[#6b7280] text-[13.5px] sm:text-[14px] leading-relaxed max-w-xl">
                {contact.form.subtitle}
              </p>
            </div>

            {/* Form Block */}
            <form onSubmit={handleSubmit} className="flex flex-col">
              {/* Row 1: Name and Email */}
              <div className="h-auto lg:h-[64px] grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-12 px-4.5 border border-zinc-200/90 rounded-xl text-sm text-[#11131a] placeholder:text-zinc-400 bg-zinc-50/60 focus:bg-white focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all duration-200"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-12 px-4.5 border border-zinc-200/90 rounded-xl text-sm text-[#11131a] placeholder:text-zinc-400 bg-zinc-50/60 focus:bg-white focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all duration-200"
                />
              </div>

              {/* Row 2: Contact Number and Address */}
              <div className="h-auto lg:h-[64px] grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="+1 (555) 000-0000"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full h-12 px-4.5 border border-zinc-200/90 rounded-xl text-sm text-[#11131a] placeholder:text-zinc-400 bg-zinc-50/60 focus:bg-white focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all duration-200"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Street / City / Country"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full h-12 px-4.5 border border-zinc-200/90 rounded-xl text-sm text-[#11131a] placeholder:text-zinc-400 bg-zinc-50/60 focus:bg-white focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all duration-200"
                />
              </div>

              {/* Row 3: Subject */}
              <div className="h-auto lg:h-[64px] pb-4">
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject / Property Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full h-12 px-4.5 border border-zinc-200/90 rounded-xl text-sm text-[#11131a] placeholder:text-zinc-400 bg-zinc-50/60 focus:bg-white focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all duration-200"
                />
              </div>

              {/* Row 4: Message */}
              <div className="h-auto lg:h-[160px] pb-5">
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Share details of your inquiry or consultation requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-full min-h-[120px] lg:min-h-[140px] px-4.5 py-3 border border-zinc-200/90 rounded-xl text-sm text-[#11131a] placeholder:text-zinc-400 bg-zinc-50/60 focus:bg-white focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all duration-200 resize-none"
                />
              </div>

              {/* Row 5: Submit Button and Success Feedback */}
              <div className="h-auto lg:h-[48px] flex items-center justify-between gap-4 pt-1">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                  className="relative group overflow-hidden rounded-full bg-[#11131a] px-8 sm:px-9 h-12 text-sm font-semibold tracking-wider text-white shadow-lg flex items-center gap-2.5 select-none cursor-pointer disabled:opacity-50"
                >
                  <motion.span
                    variants={{
                      rest: { scaleY: 0, opacity: 0 },
                      hover: { scaleY: 1, opacity: 1 },
                    }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 bg-[#2563EB] origin-bottom rounded-full"
                  />
                  <motion.span
                    variants={{
                      rest: { x: "-120%", opacity: 0 },
                      hover: { x: "160%", opacity: 0.3 },
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] pointer-events-none"
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? "Processing..." : contact.form.submitButton}
                  </span>
                  <motion.div
                    variants={{
                      rest: { x: 0 },
                      hover: { x: 4 },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white/15"
                  >
                    <ArrowRightIcon className="w-3.5 h-3.5 text-white" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="flex items-center gap-2 text-emerald-600 text-sm font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Submitted</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* INTERACTIVE LOCATION MAP                                  */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-8 sm:mt-10 md:mt-12 relative w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-zinc-900"
        >


          {/* Google Maps Interactive Embed iframe */}
          <div className="w-full h-[360px] sm:h-[400px] md:h-[420px] relative">
            <iframe
              title="Dreams Real Estate Global Headquarters Location"
              src="https://maps.google.com/maps?q=9405+Wilshire+Blvd,+Beverly+Hills,+CA+90212&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 contrast-[1.03] saturate-[1.08]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
