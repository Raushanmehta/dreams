"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutSection(): React.JSX.Element {
  return (
    <section className="bg-[#f4f4f2] px-6 md:px-12 py-14 sm:py-18 md:py-20 font-sans text-[#1a1a1a] select-none">
      <div className="relative mx-auto max-w-7xl w-full">
        {/* Image panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative ml-auto h-[360px] sm:h-[420px] md:h-[500px] w-full overflow-hidden rounded-xl md:w-[65%]"
        >
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80"
            alt="Luxury living room with sculpted chairs and a stone coffee table"
            fill
            sizes="(max-width: 768px) 100vw, 65vw"
            className="h-full w-full object-cover"
            unoptimized
          />
        </motion.div>

        {/* Headline + copy, sits over the image's left edge with notched corners */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 mt-8 md:absolute md:left-0 md:top-0 md:mt-0 md:w-[48%]"
        >

          <div className="rounded-br-[28px] bg-[#f4f4f2] pb-5 pr-5 pt-1 md:pr-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2  uppercase tracking-widest text-black  mb-4"
            >
              <Sparkles className="h-5 w-5 text-[#2563EB]" />
              <span>About Us</span>
            </motion.div>
            <h2 className="text-4xl font-medium leading-[1.18] tracking-tight md:text-[56px] text-[#1a1a1a]">
              <motion.span variants={rise} className="block">
                ABOUT OUR
              </motion.span>
              <motion.span variants={rise} className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 my-1">
                <span>BOOK</span>
                {/* Tilted Sliced Background Badge in #2563EB matching Hero Section */}
                <span className="relative inline-block bg-[#2563EB] text-white px-3 sm:px-4 md:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.4)] select-none">
                  <span className="inline-block skew-x-14 md:skew-x-18">
                    PRESTIGIOUS
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
              </motion.span>
              <motion.span variants={rise} className="block">
                RESIDENCES
              </motion.span>
            </h2>
          </div>

          <div className="max-w-[400px] md:mt-2">
            <motion.div variants={rise} className="mb-3 h-px w-full bg-black/15" />

            <div className="min-h-[85px]">
              <motion.p
                variants={rise}
                className="text-[14px] sm:text-[15px] leading-relaxed text-black/70"
              >
                We represent the world’s most distinguished residential estates,
                private waterfront sanctuaries, and prime architectural masterworks.
              </motion.p>
            </div>

            {/* Real Estate Key Highlights */}
            <motion.div
              variants={rise}
              className="grid grid-cols-3 gap-2 sm:gap-3 py-3 border-y border-black/10 "
            >
              <div>
                <p className="text-lg sm:text-xl font-bold text-black tracking-tight">$2.8B+</p>
                <p className="text-[10px] sm:text-[11px] text-black/55 font-medium uppercase tracking-wider">Volume Sold</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-black tracking-tight">450+</p>
                <p className="text-[10px] sm:text-[11px] text-black/55 font-medium uppercase tracking-wider">Estates</p>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-bold text-black tracking-tight">15+ Yrs</p>
                <p className="text-[10px] sm:text-[11px] text-black/55 font-medium uppercase tracking-wider">Advisory</p>
              </div>
            </motion.div>

            <motion.button
              variants={rise}
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.96 }}
              className="relative group mt-2 overflow-hidden rounded-full bg-[#1a1a1a] px-6 sm:px-7 py-3 text-sm font-semibold tracking-wider text-white shadow-md flex items-center gap-2.5 select-none cursor-pointer"
            >
              {/* Animated #2563EB background slide/glow fill with Framer Motion */}
              <motion.span
                variants={{
                  rest: { scaleY: 0, opacity: 0 },
                  hover: { scaleY: 1, opacity: 1 },
                }}
                transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-[#2563EB] origin-bottom rounded-full"
              />

              {/* Framer Motion subtle shine sweep across button on hover */}
              <motion.span
                variants={{
                  rest: { x: "-120%", opacity: 0 },
                  hover: { x: "160%", opacity: 0.3 },
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] pointer-events-none"
              />

              {/* Text */}
              <span className="relative z-10">EXPLORE PORTFOLIO</span>

              {/* Arrow container with spring translation */}
              <motion.div
                variants={{
                  rest: { x: 0 },
                  hover: { x: 4 },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white/15"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
