"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import { FourPointStarIcon, ArrowRightIcon } from "@/components/icons";
import siteData from "@/data/site.json";

export interface EnquiryFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

export default function EnquiryNowSection(): React.JSX.Element {
  const { enquiryNow } = siteData;

  const [formData, setFormData] = useState<EnquiryFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
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
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    }, 850);
  };

  return (
    <section className="relative w-full bg-[#f4f4f2] px-4 md:px-12 py-8 md:py-10 lg:py-20 font-sans select-none border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* SECTION HEADER Matches Dreams */}
        
        <div className="mb-8 sm:mb-10">
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 uppercase tracking-widest text-[#11131a] mb-3 font-semibold"
          >
            <Sparkles className="h-5 w-5 text-[#2563EB]" />
            <span>{enquiryNow.badgeText}</span>
          </motion.div>

          {/* Stepped Headline with signature */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#11131a] leading-[1.15] uppercase"
          >
            <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2">
              <span>{enquiryNow.headline.line1}</span>
              <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.4)] select-none">
                <span className="inline-block skew-x-14 md:skew-x-18">
                  {enquiryNow.headline.line2Badge}
                </span>
              </span>
              {/* Rotating 4 point star SVG */}
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

        {/* MAIN SPLIT CARD Luxury */}
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 bg-white border border-black/[0.08] overflow-hidden rounded-[28px] sm:rounded-[32px]"
        >
          
          {/* LEFT COLUMN Ultra Luxury */}
          
          <div className="relative lg:col-span-6 min-h-[360px] sm:min-h-[460px] lg:min-h-full w-full overflow-hidden group">
            <Image
              src={enquiryNow.image}
              alt={enquiryNow.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 ease-out"
            />

          </div>

          {/* RIGHT COLUMN Pure White */}
          
          <div className="lg:col-span-6 bg-white p-6 sm:p-6 lg:p-10 xl:p-10 flex flex-col justify-center">
            <div className="w-full">
              
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#11131a] tracking-tight leading-tight mb-2">
                  {enquiryNow.form.title}<span className="text-[#2563EB]">*</span>
                </h3>
                <p className="text-[#6b7280] text-[13.5px] sm:text-[14px] leading-relaxed max-w-lg">
                  {enquiryNow.form.subtitle}
                </p>
              </div>

              {/* Interactive contact form container */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Row 1 First Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="FIRST NAME*"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full h-12 px-4.5 border border-zinc-200/90 rounded-xl text-sm text-[#11131a] placeholder:text-zinc-400 bg-zinc-50/60 focus:bg-white focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all duration-200"
                  />
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="LAST NAME*"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full h-12 px-4.5 border border-zinc-200/90 rounded-xl text-sm text-[#11131a] placeholder:text-zinc-400 bg-zinc-50/60 focus:bg-white focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all duration-200"
                  />
                </div>

                {/* Row 2 Email Address */}
                <div>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="EMAIL ADDRESS*"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-12 px-4.5 border border-zinc-200/90 rounded-xl text-sm text-[#11131a] placeholder:text-zinc-400 bg-zinc-50/60 focus:bg-white focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all duration-200"
                  />
                </div>

                {/* Row 3 Phone Number */}
                <div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="PHONE NUMBER"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full h-12 px-4.5 border border-zinc-200/90 rounded-xl text-sm text-[#11131a] placeholder:text-zinc-400 bg-zinc-50/60 focus:bg-white focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all duration-200"
                  />
                </div>

                {/* Row 4 Message Textarea */}
                <div>
                  <textarea
                    name="message"
                    required
                    placeholder="YOUR MESSAGE"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full h-[120px] p-4 border border-zinc-200/90 rounded-xl text-sm text-[#11131a] placeholder:text-zinc-400 bg-zinc-50/60 focus:bg-white focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Success Notification Alert */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Thank you. Your enquiry has been received and our team will contact you within 24 hours.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Row 5 Submit Button */}
                <div className="flex justify-end pt-2">
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
                        <span>{enquiryNow.form.submitButton}</span>
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-[#2563EB]">
                          <ArrowRightIcon className="w-3.5 h-3.5" />
                        </div>
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
