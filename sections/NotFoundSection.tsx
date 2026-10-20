"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Home, Compass } from "lucide-react";
import { FourPointStarIcon } from "@/components/icons";
import siteData from "@/data/site.json";

export interface NotFoundData {
  code: string;
  badgeText: string;
  headline: {
    line1: string;
    line2Badge: string;
    line2Suffix: string;
  };
  subtitle: string;
  actionButtons: Array<{
    label: string;
    href: string;
    primary?: boolean;
  }>;
}

interface NotFoundSectionProps {
  data?: NotFoundData;
}

export default function NotFoundSection({ data = siteData.notFound }: NotFoundSectionProps): React.JSX.Element {
  return (
    <section className="relative w-full min-h-[100vh] bg-[#f4f4f2] px-6 md:px-12 py-16 sm:py-20 md:py-24 font-sans select-none flex items-center justify-center">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_20%,rgba(37,99,235,0.06),transparent)] pointer-events-none" />

      {/* Centered content wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 uppercase tracking-widest text-xs font-semibold text-black mb-4">
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-[#2563EB]" />
          <span>{data.badgeText}</span>
        </div>

        {/* Decorative 404 number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="relative select-none my-1"
        >
          <span className="font-sans font-black text-7xl sm:text-9xl md:text-[140px] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#1a1a1a] via-[#2a2a2a] to-zinc-400 drop-shadow-sm leading-none block">
            {data.code}
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1a1a1a] leading-[1.18] mt-2 uppercase"
        >
          <span className="block">{data.headline.line1}</span>
          <span className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3 gap-y-2 mt-2">
            {/* Tilted Sliced Badge */}
            <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.4)] select-none">
              <span className="inline-block skew-x-14 md:skew-x-18">
                {data.headline.line2Badge}
              </span>
            </span>
            {/* Spinning Star Icon */}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
              className="inline-flex items-center justify-center shrink-0 ml-0.5"
            >
              <FourPointStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#1a1a1a]" />
            </motion.span>
            <span>{data.headline.line2Suffix}</span>
          </span>
        </motion.h1>

        {/* Subtitle description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-4 text-sm sm:text-base text-zinc-600 max-w-xl leading-relaxed"
        >
          {data.subtitle}
        </motion.p>

        {/* Action buttons row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {data.actionButtons.map((btn) => (
            <Link
              key={btn.label}
              href={btn.href}
              className={`inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                btn.primary
                  ? "bg-[#2563EB] hover:bg-blue-700 text-white shadow-sm hover:shadow-blue-500/25 hover:translate-y-[-1px]"
                  : "bg-white hover:bg-zinc-100 text-[#1a1a1a] border border-zinc-200/90 shadow-2xs"
              }`}
            >
              {btn.primary ? (
                <Compass className="w-4 h-4" />
              ) : (
                <Home className="w-4 h-4" />
              )}
              <span>{btn.label}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
