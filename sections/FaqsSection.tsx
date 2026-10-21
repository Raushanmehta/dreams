"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Sparkles, ArrowRight } from "lucide-react";
import { FourPointStarIcon } from "@/components/icons";
import siteData from "@/data/site.json";

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface BookingCardData {
  avatar: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export interface FaqsSectionData {
  badgeText: string;
  headline: {
    line1: string;
    line2Badge: string;
    line2Suffix: string;
  };
  bookingCard: BookingCardData;
  items: FaqItem[];
}

interface FaqsSectionProps {
  data?: FaqsSectionData;
}

export default function FaqsSection({ data = siteData.faqs }: FaqsSectionProps): React.JSX.Element {
  // First item open
  const [openId, setOpenId] = useState<number | null>(data?.items?.[0]?.id ?? 1);

  // Toggle accordion state
  const toggleItem = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const booking = data?.bookingCard || {
    avatar: "/images/team-brian.webp",
    title: "Book a 15 min call",
    description: "If you have any questions, schedule a 15-minute discovery consultation with our luxury property advisors.",
    buttonText: "Book a Free Call",
    buttonHref: "/enquiry-now",
  };

  return (
    <section className="relative w-full bg-[#f4f4f2] px-4 md:px-12 py-8 md:py-10 lg:py-20 font-sans select-none overflow-hidden border-t border-zinc-200/80">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/6 -z-10 h-[500px] w-[500px] rounded-full bg-[#2563EB]/5 blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-5 flex flex-col gap-6 sm:gap-8 lg:sticky lg:top-0">
            <div>
              
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2 uppercase tracking-widest  font-semibold text-[#11131a] mb-3"
              >
                <Sparkles className="h-5 w-5 text-[#2563EB]" />
                <span>{data.badgeText}</span>
              </motion.div>

              {/* Stepped brand headline */}
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1a1a1a] leading-[1.15] uppercase"
              >
                <span className="block">{data.headline.line1}</span>
                <span className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 mt-1.5 sm:mt-2">
                  
                  <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.4)] select-none">
                    <span className="inline-block skew-x-14 md:skew-x-18">
                      {data.headline.line2Badge}
                    </span>
                  </span>
                  
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
                    className="inline-flex items-center justify-center shrink-0 ml-0.5"
                  >
                    <FourPointStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#1a1a1a]" />
                  </motion.span>
                  <span>{data.headline.line2Suffix}</span>
                </span>
              </motion.h2>
            </div>

            {/* Booking consultation card */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="relative bg-white rounded-3xl p-6 sm:p-8 md:p-9 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-zinc-200/80 flex flex-col items-start overflow-hidden"
            >
              {/* Consultant avatar wrapper */}
              <div className="relative mb-5">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-xl pointer-events-none" />
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden bg-zinc-100 border-2 border-white ring-2 ring-blue-100/70 shadow-sm">
                  <Image
                    src={booking.avatar}
                    alt="Estate Advisor"
                    fill
                    sizes="72px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Consultation card title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] tracking-tight">
                {booking.title}
              </h3>

              {/* Consultation card description */}
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                {booking.description}
              </p>

              {/* Booking CTA link */}
              <Link
                href={booking.buttonHref}
                className="mt-6 sm:mt-7 w-full py-3.5 sm:py-4 px-6 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm sm:text-base text-center shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{booking.buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right accordion column */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 sm:gap-4">
            {data?.items?.map((item, index) => {
              const isOpen = openId === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className={`bg-white rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${isOpen
                    ? "border-blue-200/90 shadow-md ring-1 ring-blue-500/10"
                    : "border-zinc-200/80 shadow-2xs hover:shadow-md hover:border-zinc-300"
                    }`}
                >
                  {/* Accordion trigger button */}
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-5 sm:p-6 flex items-start justify-between gap-4 text-left cursor-pointer select-none transition-colors"
                  >
                    {/* Real estate question */}
                    <span
                      className={`text-sm sm:text-base md:text-[17px] font-semibold leading-snug transition-colors pt-0.5 ${isOpen ? "text-[#2563EB]" : "text-[#1a1a1a]"
                        }`}
                    >
                      {item.question}
                    </span>

                    {/* Toggle button icon */}
                    <span
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${isOpen
                        ? "bg-[#2563EB] text-white shadow-xs"
                        : "bg-[#f4f4f2] text-zinc-600 hover:bg-blue-50 hover:text-[#2563EB]"
                        }`}
                    >
                      {isOpen ? (
                        <X className="w-4 h-4 stroke-[2.2]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.2]" />
                      )}
                    </span>
                  </button>

                  {/* Accordion content collapse */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm md:text-[15px] text-zinc-600 leading-relaxed font-normal border-t border-zinc-100/80 mt-1">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}