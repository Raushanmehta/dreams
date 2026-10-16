"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-black p-2.5 sm:p-4 md:p-5 flex flex-col justify-between overflow-hidden select-none">
      {/* Framed Hero Canvas with Rounded Corners */}
      <div className="relative w-full h-[calc(100vh-1.25rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-2.5rem)] rounded-[22px] sm:rounded-[28px] md:rounded-[34px] overflow-hidden flex flex-col justify-end border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
        {/* Background Image: Clean Surreal Floating Cliff & Golden Sunset Scene */}
        <motion.div
          initial={{ scale: 1.08, opacity: 0.9 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/hero-banners.png"
            alt="Luxury modern architectural residence with illuminated pool"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-100 contrast-[1.02]"
          />
          {/* Subtle bottom vignette to ensure ultra-sharp contrast for typography */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/35 pointer-events-none" />
        </motion.div>

        {/* Bottom Content Area */}
        <div className="relative z-10 w-full px-6 sm:px-10 md:px-12 lg:px-14 pb-6 sm:pb-8 md:pb-10 pt-24 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 lg:gap-12">
          {/* Bottom Left: Huge Bold "Book Your Dreams*" Branding */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col"
          >
            <h1 className="flex flex-col text-[#EBE7DC] drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
              <span className="text-[32px] sm:text-[46px] md:text-[62px] lg:text-[76px] xl:text-[90px] font-bold tracking-[-0.035em] leading-[0.96] text-[#EBE7DC]/90 flex items-center flex-wrap gap-x-3 sm:gap-x-4">
                <span>Book</span>
                {/* Tilted Sliced Background Badge */}
                <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 md:px-7 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.5)] select-none">
                  <span className="inline-block skew-x-14 md:skew-x-18">
                    Your
                  </span>
                </span>
                {/* SVG Icon placed OUTSIDE the blue background on the right side */}
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="inline-flex items-center justify-center text-white drop-shadow-[0_0_14px_rgba(37,99,235,0.9)] ml-0.5 sm:ml-1"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-[0.44em] h-[0.44em] text-white"
                  >
                    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                  </svg>
                </motion.span>
              </span>
              <span className="text-[76px] sm:text-[110px] md:text-[145px] lg:text-[170px] xl:text-[200px] leading-[0.84] font-bold tracking-[-0.04em] flex items-start">
                <span>Dreams</span>
                {/* Spinning 6-point asterisk matching the exact icon */}
                <motion.span
                  aria-hidden="true"
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  }}
                  className="inline-block origin-center ml-1 sm:ml-2 text-[0.42em] leading-none text-[#EBE7DC]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-[0.9em] h-[0.9em] inline-block"
                  >
                    <path d="M12 2a1.5 1.5 0 0 1 1.5 1.5v5.04l4.37-2.52a1.5 1.5 0 1 1 1.5 2.6l-4.37 2.52 4.37 2.52a1.5 1.5 0 0 1-1.5 2.6l-4.37-2.52v5.04a1.5 1.5 0 0 1-3 0v-5.04l-4.37 2.52a1.5 1.5 0 0 1-1.5-2.6l4.37-2.52-4.37-2.52a1.5 1.5 0 1 1 1.5-2.6l4.37 2.52V3.5A1.5 1.5 0 0 1 12 2z" />
                  </svg>
                </motion.span>
              </span>
            </h1>
          </motion.div>

          {/* Bottom Right: Description Paragraph & "Join the lab" Pill Button */}
          <div className="flex flex-col items-start gap-5 max-w-[420px] pb-1 sm:pb-2">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-[#E2DFD6] text-[13.5px] sm:text-[14.5px] md:text-[15px] font-normal leading-[1.48] tracking-[-0.01em] drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
            >
              Prisma is a worldwide network of visual artists, filmmakers and
              storytellers bound not by place, status or labels but by passion
              and hunger to unlock potential through our unique perspectives.
            </motion.p>

            {/* CTA Button: "Join the lab" with circle arrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.a
                href="#join"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group relative inline-flex items-center gap-3.5 pl-5 sm:pl-6 pr-1.5 py-1.5 rounded-full bg-white text-black font-medium text-[13.5px] sm:text-[14px] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-200 select-none cursor-pointer"
              >
                <span className="tracking-[-0.01em] text-neutral-900 font-medium">
                  Join the lab
                </span>
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}