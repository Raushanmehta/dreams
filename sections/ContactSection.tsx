"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, CheckCircle2, Phone, Mail, Globe, MapPin, ExternalLink } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
  subject: string;
  message: string;
}

export default function ContactSection(): React.JSX.Element {
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
    <section className="relative w-full bg-[#f4f4f2] px-6 md:px-12 py-16 sm:py-20 md:py-24 font-sans select-none border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto w-full">
        {/* ========================================================= */}
        {/* SECTION HEADER: Matches Dreams* Signature Brand Theme    */}
        {/* ========================================================= */}
        <div className="mb-10 sm:mb-12">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 uppercase tracking-widest text-[#11131a] mb-3 text-xs sm:text-sm font-semibold"
          >
            <Sparkles className="h-4 w-4 text-[#2563EB]" />
            <span>Get In Touch</span>
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
              <span>Private</span>
              {/* Tilted Sliced Background Badge in #2563EB */}
              <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.4)] select-none">
                <span className="inline-block skew-x-14 md:skew-x-18">
                  Concierge
                </span>
              </span>
              <span>&amp; Advisory</span>
              {/* Rotating 4-point star SVG icon */}
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="inline-flex items-center justify-center text-[#2563EB] drop-shadow-[0_0_12px_rgba(37,99,235,0.5)] ml-0.5 sm:ml-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563EB]"
                >
                  <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                </svg>
              </motion.span>
            </div>
          </motion.h2>
        </div>

        {/* ========================================================= */}
        {/* MAIN SPLIT CARD: Luxury Obsidian Left + Crisp White Right */}
        {/* Strict horizontal alignment matching the reference image */}
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
          <div className="lg:col-span-5 bg-[#0c0d12] text-white p-8 sm:p-10 lg:p-12 xl:p-14 relative flex flex-col justify-between overflow-hidden">
            {/* Ambient royal blue glow overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,rgba(37,99,235,0.22),transparent_70%)] pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-60 h-60 rounded-full bg-[#2563EB]/10 blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col h-full justify-between">
              {/* Header block (Height: 116px - exactly aligns with Right Column Header) */}
              <div className="h-auto lg:h-[116px] flex flex-col justify-start">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                  Private Office
                </h3>
                <p className="text-zinc-400 text-xs sm:text-[13.5px] mt-1 leading-relaxed max-w-sm">
                  White-glove real estate representation across Beverly Hills, London, Dubai &amp; Monaco.
                </p>
              </div>

              {/* Row 1: Item 1 - Contact Number (Height: 48px + 16px gap = 64px) */}
              <div className="h-auto lg:h-[64px] flex items-center gap-4 mb-5 lg:mb-0 group">
                <div className="w-11 h-11 rounded-full bg-white text-[#2563EB] font-bold text-base flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.3)] group-hover:bg-[#2563EB] group-hover:text-white group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                  1
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-white font-semibold text-[15.5px] tracking-tight leading-tight group-hover:text-[#3b82f6] transition-colors">
                    Contact Number
                  </h4>
                  <a
                    href="tel:+880123456789"
                    className="text-zinc-400 text-[13.5px] font-normal leading-tight mt-1 hover:text-white transition-colors"
                  >
                    +880 123 456 789
                  </a>
                </div>
              </div>

              {/* Row 2: Item 2 - Email (Height: 48px + 16px gap = 64px) */}
              <div className="h-auto lg:h-[64px] flex items-center gap-4 mb-5 lg:mb-0 group">
                <div className="w-11 h-11 rounded-full bg-white text-[#2563EB] font-bold text-base flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.3)] group-hover:bg-[#2563EB] group-hover:text-white group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                  2
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-white font-semibold text-[15.5px] tracking-tight leading-tight group-hover:text-[#3b82f6] transition-colors">
                    Email
                  </h4>
                  <a
                    href="mailto:concierge@dreamsrealty.com"
                    className="text-zinc-400 text-[13.5px] font-normal leading-tight mt-1 hover:text-white transition-colors"
                  >
                    concierge@dreamsrealty.com
                  </a>
                </div>
              </div>

              {/* Row 3: Item 3 - Join On Our Page (Height: 48px + 16px gap = 64px) */}
              <div className="h-auto lg:h-[64px] flex items-center gap-4 mb-5 lg:mb-0 group">
                <div className="w-11 h-11 rounded-full bg-white text-[#2563EB] font-bold text-base flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.3)] group-hover:bg-[#2563EB] group-hover:text-white group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                  3
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-white font-semibold text-[15.5px] tracking-tight leading-tight group-hover:text-[#3b82f6] transition-colors">
                    Address
                  </h4>
                  <a
                    href="https://telegram.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 text-[13.5px] font-normal leading-tight mt-1 hover:text-white transition-colors"
                  >
                    2715 Oxford Avenue, Los Angeles, CA 90001
                  </a>
                </div>
              </div>
              <div className="h-auto lg:h-[64px] flex items-center gap-4 mb-5 lg:mb-0 group">
                <div className="w-11 h-11 rounded-full bg-white text-[#2563EB] font-bold text-base flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.3)] group-hover:bg-[#2563EB] group-hover:text-white group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                  3
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-white font-semibold text-[15.5px] tracking-tight leading-tight group-hover:text-[#3b82f6] transition-colors">
                    Join On Our Page
                  </h4>
                  <a
                    href="https://telegram.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 text-[13.5px] font-normal leading-tight mt-1 hover:text-white transition-colors"
                  >
                    facebook/telegram.com
                  </a>
                </div>
              </div>

              {/* Row 4: Description Paragraph (Height: 140px + 20px gap = 160px) */}
              <div className="h-auto lg:h-[160px] flex flex-col justify-start pt-2 lg:pt-3 mb-6 lg:mb-0">
                <p className="text-zinc-400 text-[14px] leading-relaxed max-w-sm">
                  Curating the world&apos;s most prestigious residential sanctuaries, private waterfront estates, and prime architectural masterworks.
                </p>
              </div>

              {/* Row 5: 6 Social Icons (Height: 48px - exactly aligns with Submit Button) */}
              <div className="h-auto lg:h-[48px] flex items-center gap-2.5 flex-wrap">
                {/* 1. Facebook */}
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

                {/* 2. Twitter / X */}
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8.5 h-8.5 rounded-full bg-white/10 border border-white/15 text-zinc-300 flex items-center justify-center shadow-sm transition-all hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2]"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                  </svg>
                </motion.a>

                {/* 3. Skype */}
                <motion.a
                  href="https://skype.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Skype"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8.5 h-8.5 rounded-full bg-white/10 border border-white/15 text-zinc-300 flex items-center justify-center shadow-sm transition-all hover:bg-[#00AFF0] hover:text-white hover:border-[#00AFF0]"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5">
                    <path d="M23.996 16.516c-.056 1.49-.607 2.898-1.558 3.987a7.712 7.712 0 01-3.69 2.378c-1.46.43-2.997.5-4.49.205a11.96 11.96 0 01-4.708-2.128 11.892 11.892 0 01-3.414-3.666 11.968 11.968 0 01-1.636-4.902c-.173-1.488-.002-3.003.504-4.417a7.716 7.716 0 012.44-3.553 7.822 7.822 0 013.902-1.42 7.755 7.755 0 014.545.666 11.964 11.964 0 014.568 2.385 11.91 11.91 0 013.256 3.805 11.954 11.954 0 011.458 4.96c.148 1.15.087 2.316-.177 3.435v-.016l.995 1.164-.995-2.88zM17.07 14.18c-.287-.417-.728-.718-1.248-.853-.518-.137-1.168-.25-1.952-.338l-1.076-.12c-.54-.06-.94-.143-1.196-.25-.257-.107-.386-.296-.386-.566 0-.306.147-.532.44-.678.293-.146.685-.22 1.176-.22.42 0 .805.066 1.154.198.348.132.68.35 1.002.656l1.206-1.503c-.49-.444-1.056-.757-1.696-.94-.64-.183-1.32-.275-2.038-.275-.89 0-1.68.163-2.368.49-.688.326-1.223.774-1.603 1.344-.38.57-.57 1.218-.57 1.944 0 .584.12 1.08.358 1.486.238.406.59.722 1.054.948.465.226 1.05.385 1.758.477l1.378.18c.638.082 1.096.2 1.373.354.277.153.416.385.416.696 0 .34-.16.592-.48.757-.32.164-.754.246-1.303.246-.57 0-1.1-.112-1.59-.336-.49-.224-.956-.576-1.398-1.056l-1.272 1.46c.646.666 1.378 1.135 2.196 1.408.818.272 1.666.408 2.544.408.97 0 1.83-.16 2.58-.48.75-.32 1.332-.767 1.745-1.34.413-.573.62-1.226.62-1.958 0-.687-.16-1.27-.478-1.75z" />
                  </svg>
                </motion.a>

                {/* 4. Twitter / X */}
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8.5 h-8.5 rounded-full bg-white/10 border border-white/15 text-zinc-300 flex items-center justify-center shadow-sm transition-all hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2]"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z" />
                  </svg>
                </motion.a>

                {/* 5. Facebook */}
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

                {/* 6. Skype */}
                <motion.a
                  href="https://skype.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Skype"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8.5 h-8.5 rounded-full bg-white/10 border border-white/15 text-zinc-300 flex items-center justify-center shadow-sm transition-all hover:bg-[#00AFF0] hover:text-white hover:border-[#00AFF0]"
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-3.5 h-3.5">
                    <path d="M23.996 16.516c-.056 1.49-.607 2.898-1.558 3.987a7.712 7.712 0 01-3.69 2.378c-1.46.43-2.997.5-4.49.205a11.96 11.96 0 01-4.708-2.128 11.892 11.892 0 01-3.414-3.666 11.968 11.968 0 01-1.636-4.902c-.173-1.488-.002-3.003.504-4.417a7.716 7.716 0 012.44-3.553 7.822 7.822 0 013.902-1.42 7.755 7.755 0 014.545.666 11.964 11.964 0 014.568 2.385 11.91 11.91 0 013.256 3.805 11.954 11.954 0 011.458 4.96c.148 1.15.087 2.316-.177 3.435v-.016l.995 1.164-.995-2.88zM17.07 14.18c-.287-.417-.728-.718-1.248-.853-.518-.137-1.168-.25-1.952-.338l-1.076-.12c-.54-.06-.94-.143-1.196-.25-.257-.107-.386-.296-.386-.566 0-.306.147-.532.44-.678.293-.146.685-.22 1.176-.22.42 0 .805.066 1.154.198.348.132.68.35 1.002.656l1.206-1.503c-.49-.444-1.056-.757-1.696-.94-.64-.183-1.32-.275-2.038-.275-.89 0-1.68.163-2.368.49-.688.326-1.223.774-1.603 1.344-.38.57-.57 1.218-.57 1.944 0 .584.12 1.08.358 1.486.238.406.59.722 1.054.948.465.226 1.05.385 1.758.477l1.378.18c.638.082 1.096.2 1.373.354.277.153.416.385.416.696 0 .34-.16.592-.48.757-.32.164-.754.246-1.303.246-.57 0-1.1-.112-1.59-.336-.49-.224-.956-.576-1.398-1.056l-1.272 1.46c.646.666 1.378 1.135 2.196 1.408.818.272 1.666.408 2.544.408.97 0 1.83-.16 2.58-.48.75-.32 1.332-.767 1.745-1.34.413-.573.62-1.226.62-1.958 0-.687-.16-1.27-.478-1.75z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Architectural Pure White Area (#ffffff)     */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between">
            {/* Header Block: Height is exactly 116px */}
            <div className="h-auto lg:h-[116px] flex flex-col justify-start">
              <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#11131a] tracking-tight leading-tight mb-1.5">
                Send Us a Suggestion<span className="text-[#2563EB]">*</span>
              </h3>
              <p className="text-[#6b7280] text-[13.5px] sm:text-[14px] leading-relaxed max-w-xl">
                Have a bespoke enquiry, acquisition proposal, or feedback? Share your message directly with our private advisory office.
              </p>
            </div>

            {/* Form Block: 5 Rows matching Left Column height & baseline */}
            <form onSubmit={handleSubmit} className="flex flex-col">
              {/* Row 1: Name and Email (Height: 48px + 16px gap = 64px) */}
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

              {/* Row 2: Contact Number and Address (Height: 48px + 16px gap = 64px) */}
              <div className="h-auto lg:h-[64px] grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Your Contact Number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  className="w-full h-12 px-4.5 border border-zinc-200/90 rounded-xl text-sm text-[#11131a] placeholder:text-zinc-400 bg-zinc-50/60 focus:bg-white focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all duration-200"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Your Address / Location"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full h-12 px-4.5 border border-zinc-200/90 rounded-xl text-sm text-[#11131a] placeholder:text-zinc-400 bg-zinc-50/60 focus:bg-white focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all duration-200"
                />
              </div>

              {/* Row 3: Message Subject (Height: 48px + 16px gap = 64px) */}
              <div className="h-auto lg:h-[64px] pb-4">
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Your Message Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full h-12 px-4.5 border border-zinc-200/90 rounded-xl text-sm text-[#11131a] placeholder:text-zinc-400 bg-zinc-50/60 focus:bg-white focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all duration-200"
                />
              </div>

              {/* Row 4: Message Body (Height: 140px + 20px gap = 160px) */}
              <div className="h-auto lg:h-[160px] pb-5">
                <textarea
                  name="message"
                  required
                  placeholder="Your Message Here"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-[140px] p-4 border border-zinc-200/90 rounded-xl text-sm text-[#11131a] placeholder:text-zinc-400 bg-zinc-50/60 focus:bg-white focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all duration-200 resize-none"
                />
              </div>

              {/* Success confirmation toast */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="p-3.5 mb-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Thank you! Your message has been routed to our senior concierge advisory.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Row 5: Submit Button (Height: 48px - aligns with Left Column Social Icons) */}
              <div className="h-auto lg:h-[48px] flex items-center">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group h-[48px] px-8 sm:px-10 rounded-full bg-[#11131a] hover:bg-[#2563EB] text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.16)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8H4z"
                        />
                      </svg>
                      <span>SENDING...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT</span>
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#2563EB]">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* INTERACTIVE LOCATION MAP: Floating Glass Pill & Embed     */}
        {/* ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-8 sm:mt-10 md:mt-12 relative w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-zinc-900"
        >
          {/* Floating Glassmorphic Location Info Capsule */}
          <div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-20 max-w-sm w-[calc(100%-2.5rem)] sm:w-auto bg-[#0c0d12]/85 backdrop-blur-md border border-white/15 text-white p-4 sm:p-5 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.5)] select-none">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#2563EB] text-white flex items-center justify-center flex-shrink-0 shadow-[0_4px_16px_rgba(37,99,235,0.4)]">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-bold tracking-widest text-[#3b82f6] uppercase">
                    Headquarters
                  </span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <h4 className="text-white font-semibold text-base tracking-tight leading-snug">
                  Dreams Global Advisory
                </h4>
                <p className="text-zinc-300 text-xs sm:text-[13px] leading-relaxed mt-1">
                  9405 Wilshire Blvd, Beverly Hills, CA 90212
                </p>
                <div className="mt-3 flex items-center gap-3 pt-2.5 border-t border-white/10">
                  <a
                    href="https://maps.google.com/?q=9405+Wilshire+Blvd,+Beverly+Hills,+CA+90212"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#3b82f6] hover:text-white transition-colors group"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <span className="text-zinc-500 text-xs">•</span>
                  <span className="text-zinc-400 text-xs">Mon – Sat (9AM – 8PM)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Interactive Embed iframe */}
          <div className="w-full h-[360px] sm:h-[420px] md:h-[480px] relative">
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
