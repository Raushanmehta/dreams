"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Sparkles } from "lucide-react";


function PrivateToursIcon({ className }: { className?: string }): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 21V10a8 8 0 0 1 16 0v11" />
      <path d="M9 21v-7a3 3 0 0 1 6 0v7" />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" />
    </svg>
  );
}

function HighYieldIcon({ className }: { className?: string }): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 3h12l4 6-10 12L2 9z" />
      <path d="M2 9h20" />
      <path d="M12 21L8 9l2-6" />
      <path d="M12 21l4-12-2-6" />
    </svg>
  );
}

function PrimeLocationsIcon({ className }: { className?: string }): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <polygon points="12 4 14.5 9.5 20 12 14.5 14.5 12 20 9.5 14.5 4 12 9.5 9.5 12 4" fill="currentColor" fillOpacity="0.18" />
      <polygon points="12 6 13.8 10.2 18 12 13.8 13.8 12 18 10.2 13.8 6 12 10.2 10.2 12 6" />
    </svg>
  );
}

function BespokeLuxuryIcon({ className }: { className?: string }): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 7l4 12h12l4-12-6 4-4-7-4 7z" />
      <circle cx="12" cy="4" r="1.2" fill="currentColor" />
      <circle cx="2" cy="7" r="1.2" fill="currentColor" />
      <circle cx="22" cy="7" r="1.2" fill="currentColor" />
      <circle cx="6" cy="11" r="1" fill="currentColor" />
      <circle cx="18" cy="11" r="1" fill="currentColor" />
    </svg>
  );
}

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: "private-tours" | "high-yield" | "prime-locations" | "bespoke-luxury";
}

const FEATURES: FeatureItem[] = [
  {
    id: "private-tours",
    title: "Private Tours",
    description: "Curated walkthroughs and VIP viewings at your personal convenience.",
    icon: "private-tours",
  },
  {
    id: "high-yield",
    title: "High Yield",
    description: "Proven asset appreciation and prime market efficiency for elite portfolios.",
    icon: "high-yield",
  },
  {
    id: "prime-locations",
    title: "Prime Locations",
    description: "Sanctuaries situated in the world's most sought-after and secure enclaves.",
    icon: "prime-locations",
  },
  {
    id: "bespoke-luxury",
    title: "Bespoke Luxury",
    description: "Architectural mastery engineered for privacy and timeless presence.",
    icon: "bespoke-luxury",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyChooseUsSection(): React.JSX.Element {
  return (
    <section
      id="why-choose-us"
      className="relative w-full bg-[#f4f4f2] px-6 md:px-12 py-14 sm:py-18 md:py-20 font-sans text-neutral-900 select-none overflow-hidden border-t border-black/[0.08]"
    >
      {/* Ambient background accent */}
      <div className="absolute top-1/4 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#2563EB]/5 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Asymmetrical Rounded Image with 3D Offset Cross */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[420px] aspect-[3.7/4.6]">
            {/* Main Rounded Photo */}
            <div className="relative h-full w-full overflow-hidden rounded-tl-[80px] sm:rounded-tl-[100px] rounded-br-[80px] sm:rounded-br-[100px] rounded-tr-2xl rounded-bl-2xl shadow-[0_24px_60px_rgba(0,0,0,0.14)] border border-black/[0.06]">
              <Image
                src="/images/why-choose-uss.jpg"
                alt="Luxury modern architectural residence interior"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>

            {/* Spinning 6-point asterisk matching Hero section */}
            <motion.div
              animate={{ rotate: 360, y: [0, -6, 0] }}
              transition={{
                rotate: { repeat: Infinity, duration: 20, ease: "linear" },
                y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
              }}
              className="absolute -bottom-7 -left-5 sm:-bottom-9 sm:-left-7 z-20 w-16 h-16 sm:w-20 sm:h-20"
            >
              {/* Offset shadow asterisk */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute -top-1.5 -right-1.5 w-full h-full text-[#2563EB]/35"
                aria-hidden="true"
              >
                <path d="M12 2a1.5 1.5 0 0 1 1.5 1.5v5.04l4.37-2.52a1.5 1.5 0 1 1 1.5 2.6l-4.37 2.52 4.37 2.52a1.5 1.5 0 0 1-1.5 2.6l-4.37-2.52v5.04a1.5 1.5 0 0 1-3 0v-5.04l-4.37 2.52a1.5 1.5 0 0 1-1.5-2.6l4.37-2.52-4.37-2.52a1.5 1.5 0 1 1 1.5-2.6l4.37 2.52V3.5A1.5 1.5 0 0 1 12 2z" />
              </svg>
              {/* Foreground solid asterisk with #2563EB */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="relative w-full h-full text-[#2563EB] drop-shadow-[0_12px_28px_rgba(37,99,235,0.45)]"
                aria-hidden="true"
              >
                <path d="M12 2a1.5 1.5 0 0 1 1.5 1.5v5.04l4.37-2.52a1.5 1.5 0 1 1 1.5 2.6l-4.37 2.52 4.37 2.52a1.5 1.5 0 0 1-1.5 2.6l-4.37-2.52v5.04a1.5 1.5 0 0 1-3 0v-5.04l-4.37 2.52a1.5 1.5 0 0 1-1.5-2.6l4.37-2.52-4.37-2.52a1.5 1.5 0 1 1 1.5-2.6l4.37 2.52V3.5A1.5 1.5 0 0 1 12 2z" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Content, Stepped Headline with Badges & 2x2 Grid */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow: ■ Why Choose Us? */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2  uppercase tracking-widest text-black  mb-4"
          >
            <Sparkles className="h-5 w-5 text-[#2563EB]" />
            <span>Why Choose Us?</span>
          </motion.div>

          {/* Stepped Headline matching About section typography and Hero tilted sliced badge style */}
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-[56px] font-medium leading-[1.18] tracking-tight text-[#1a1a1a] uppercase">
            <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2">
              <span>When You Need The Best</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2 mt-2 sm:mt-3">
              <span>Exclusive </span>
              {/* Tilted Sliced Background Badge for 'Prestige Living' */}
              <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.4)] select-none">
                <span className="inline-block skew-x-14 md:skew-x-18">
                  Prestige
                </span>
              </span>
              {/* SVG Icon placed OUTSIDE the blue background on the right side */}
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="inline-flex items-center justify-center text-[#2563EB] drop-shadow-[0_0_12px_rgba(37,99,235,0.6)] ml-0.5 sm:ml-1"
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

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-neutral-500 text-sm sm:text-base leading-relaxed max-w-2xl"
          >
            Discover unparalleled architectural excellence and bespoke estates tailored to
            your elevated lifestyle. We combine discreet advisory, prime global locations,
            and seamless acquisition services for discerning investors and homeowners worldwide.
          </motion.p>

          {/* 2x2 Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 lg:gap-x-6 gap-y-4 sm:gap-y-6 mt-6 sm:mt-8"
          >
            {FEATURES.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ x: 3 }}
                className="group flex items-start gap-4 sm:gap-5"
              >
                {/* Icon Column with Horizontal Underline */}
                <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
                  <div className="text-[#2563EB] transition-transform duration-300 group-hover:scale-110">
                    {feature.icon === "private-tours" && <PrivateToursIcon className="w-12 h-12" />}
                    {feature.icon === "high-yield" && <HighYieldIcon className="w-12 h-12" />}
                    {feature.icon === "prime-locations" && <PrimeLocationsIcon className="w-12 h-12" />}
                    {feature.icon === "bespoke-luxury" && <BespokeLuxuryIcon className="w-12 h-12" />}
                  </div>
                  {/* Subtle underline below the icon */}
                  <div className="w-9 h-[2px] bg-[#2563EB]/40 mt-2.5 rounded-full" />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-[#2563EB] transition-colors leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1.5 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
