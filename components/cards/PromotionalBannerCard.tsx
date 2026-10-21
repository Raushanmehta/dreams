"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { blogDetailAnimations } from "@/utils/animation/blog-detail.animation";

export interface PromotionalBannerCardProps {
  badge?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export default function PromotionalBannerCard({
  badge = "Exclusive Sanctuaries",
  title = "Discover Curated\nLuxury Waterfront\nEstates & Villas",
  buttonText = "Enquiry Now",
  buttonHref = "/enquiry-now",
  className = "",
}: PromotionalBannerCardProps) {
  return (
    <motion.aside
      variants={blogDetailAnimations.fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#5b2df6] via-[#4d1de0] to-[#3407bf] p-4 sm:p-5 text-white shadow-[0_12px_36px_rgba(77,29,224,0.32)] select-none ${className}`}
      aria-label="Real Estate Promotional Announcement"
    >
      {/* Ambient background glows */}
      <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-36 w-36 rounded-full bg-[#8B5CF6]/25 blur-2xl pointer-events-none" />

      {/* Subtle Eyebrow Badge */}
      <motion.div

        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}

        className="inline-flex items-center gap-2 uppercase tracking-widest text-white mb-4"
      >
        <Sparkles className="h-5 w-5 text-[#2563EB]" />
        <span>{badge}</span>
      </motion.div>

      {/* Main Promo Headline */}
      <h3 className="relative z-10 text-2xl sm:text-[27px] font-extrabold leading-[1.18] tracking-tight mb-2.5 whitespace-pre-line max-w-[240px]">
        {title}
      </h3>

      {/* CTA Button */}
      <motion.div
        whileHover={blogDetailAnimations.buttonHover}
        whileTap={blogDetailAnimations.buttonTap}
        className="relative z-10 inline-block"
      >
        <Link
          href={buttonHref}
          className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-[#4d1de0] shadow-md transition-all hover:bg-zinc-100 hover:shadow-lg active:scale-95 group"
        >
          <span>{buttonText}</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </motion.div>
    </motion.aside>
  );
}
