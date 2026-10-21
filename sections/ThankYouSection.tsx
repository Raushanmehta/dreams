"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, ArrowRight, Home, Compass } from "lucide-react";
import { FourPointStarIcon } from "@/components/icons";
import siteData from "@/data/site.json";

export interface ThankYouData {
  badgeText?: string;
  headline?: {
    line1?: string;
    line2Badge?: string;
    line2Suffix?: string;
  };
  subtitle?: string;
  actionButtons?: Array<{
    label: string;
    href: string;
    primary?: boolean;
  }>;
}

interface ThankYouSectionProps {
  data?: ThankYouData;
}

export default function ThankYouSection({ data = siteData.thankYou }: ThankYouSectionProps): React.JSX.Element {
  const headline = data?.headline || {
    line1: "Thank You",
    line2Badge: "Confirmed",
    line2Suffix: "& Received",
  };

  const actionButtons = data?.actionButtons || [
    { label: "Explore Residences", href: "/properties", primary: true },
    { label: "Return to Home", href: "/", primary: false },
  ];

  return (
    <section className="relative w-full min-h-[80vh] bg-[#f4f4f2] px-4 md:px-12 py-8 md:py-10 lg:py-20 font-sans select-none flex items-center justify-center">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_25%,rgba(37,99,235,0.08),transparent)] pointer-events-none" />

      {/* Main card container */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-3xl p-8 sm:p-12 md:p-14 text-center flex flex-col items-center"
      >
        {/* Animated checkmark badge */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center mb-6 shadow-sm border border-blue-100"
        >
          <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.2]" />
        </motion.div>

        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 uppercase tracking-widest text-xs font-semibold text-black mb-4">
          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-[#2563EB]" />
          <span>{data?.badgeText || "Confirmation"}</span>
        </div>

        {/* Main headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1a1a1a] leading-[1.18] uppercase">
          <span className="block">{headline.line1}</span>
          <span className="flex flex-wrap items-center justify-center gap-x-2.5 sm:gap-x-3 gap-y-2 mt-2">
            {/* Tilted Sliced Badge */}
            <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.4)] select-none">
              <span className="inline-block skew-x-14 md:skew-x-18">
                {headline.line2Badge}
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
            <span>{headline.line2Suffix}</span>
          </span>
        </h1>

        {/* Subtitle description */}
        <p className="mt-4 text-sm sm:text-base text-zinc-600 max-w-lg leading-relaxed">
          {data?.subtitle ||
            "Your enquiry has been successfully registered. A dedicated luxury portfolio advisor will connect with you shortly."}
        </p>

        {/* Action buttons row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
          {actionButtons.map((btn) => (
            <Link
              key={btn.label}
              href={btn.href}
              className={`inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${btn.primary
                ? "bg-[#2563EB] hover:bg-blue-700 text-white shadow-sm hover:shadow-blue-500/25 hover:translate-y-[-1px]"
                : "bg-[#f4f4f2] hover:bg-zinc-200 text-[#1a1a1a] border border-zinc-300/80"
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
        </div>
      </motion.div>
    </section>
  );
}