"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: string;
  bgColor?: string;
  quote: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function TestimonialCard({
  testimonial,
  isExpanded,
  onToggle,
}: TestimonialCardProps) {
  return (
    <motion.div
      layout
      transition={{
        layout: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
      }}
      className="group relative w-[290px] sm:w-[320px] md:w-[340px] rounded-[26px] p-[1.5px] hover:from-white/65 hover:via-[#2563EB]/45 hover:to-[#2563EB]/70 shadow-[0_18px_45px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.35)] hover:shadow-[0_22px_55px_rgba(37,99,235,0.25),inset_0_1px_2px_rgba(255,255,255,0.5)] transition-all duration-500 flex-shrink-0 select-none self-start"
    >
      {/* Inner Glossy Glass Container */}
      <div className="relative w-full h-full rounded-[24.5px] p-6 sm:p-7 flex flex-col justify-between  backdrop-blur-2xl overflow-hidden shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.22),inset_0_0_24px_0_rgba(255,255,255,0.02)]">
        {/* Specular Diagonal Glass Gloss Reflection */}
        {/* <div className="pointer-events-none absolute -top-16 -left-16 w-36 h-36 bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-full blur-xl group-hover:from-white/30 transition-all duration-500" /> */}

        {/* Ambient subtle top-right #2563EB glow inside card */}
        {/* <div className="pointer-events-none absolute -top-10 -right-10 w-28 h-28 bg-[#2563EB]/15 rounded-full blur-2xl group-hover:bg-[#2563EB]/25 transition-all duration-500" /> */}

        {/* Subtle diagonal glossy sheen across entire card surface */}
        {/* <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-[#2563EB]/[0.03] opacity-80" /> */}

        <div className="relative z-10">
          {/* Top Row: Avatar and Star Rating */}
          <div className="flex items-center justify-between mb-6">
            {/* Avatar Container */}
            <div className="w-[52px] h-[52px] rounded-xl bg-white/[0.06] shadow-inner overflow-hidden flex items-center justify-center p-0.5 border border-white/15 flex-shrink-0 group-hover:border-[#2563EB]/40 transition-colors">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={52}
                height={52}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>

            {/* Star Rating Badge */}
            <div className="flex items-center gap-1.5 text-white font-semibold text-[13.5px] bg-white/[0.05] border border-white/10 px-2.5 py-1 rounded-full">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#2563EB] drop-shadow-[0_0_8px_rgba(37,99,235,0.6)]"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className="text-zinc-200 tracking-tight">{testimonial.rating}</span>
            </div>
          </div>

          {/* Middle Row: Name, Role and Action Button (+ / ✕) */}
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-bold text-[17px] sm:text-[18px] text-white tracking-tight leading-snug truncate">
                {testimonial.name}
              </h3>
              <p className="text-[12.5px] sm:text-[13px] text-zinc-400 font-medium tracking-tight mt-0.5 truncate">
                {testimonial.role}
              </p>
            </div>

            {/* Action Button: Themed button that smoothly rotates + to ✕ */}
            <button
              type="button"
              onClick={onToggle}
              aria-label={
                isExpanded
                  ? `Collapse quote for ${testimonial.name}`
                  : `Expand quote for ${testimonial.name}`
              }
              className={cn(
                "w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all flex-shrink-0 cursor-pointer shadow-md focus:outline-none",
                isExpanded
                  ? "bg-[#2563EB] text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]"
                  : "bg-white/10 hover:bg-[#2563EB] text-white border border-white/10 hover:border-[#2563EB]"
              )}
            >
              <motion.div
                animate={{ rotate: isExpanded ? 45 : 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                <Plus className="w-4 h-4 text-white stroke-[2.6]" />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Expandable Quote Section */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="quote-content"
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 20 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-white/[0.08] pt-3.5"
            >
              <p className="text-zinc-300 text-[14px] sm:text-[14.5px] font-normal leading-[1.65] tracking-[-0.01em]">
                {testimonial.quote}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}


