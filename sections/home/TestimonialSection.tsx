"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FourPointStarIcon } from "@/components/icons";
import TestimonialCard, { type Testimonial } from "@/components/cards/TestimonialCard";
import siteData from "@/data/site.json";
import { testimonialAnimations } from "@/utils/animation/testimonial.animation";

export default function TestimonialSection() {
  const { testimonials } = siteData;
  const testimonialsList = testimonials.testimonialsList as Testimonial[];

  // Create 3 duplicated sets for truly seamless, infinite smooth marquee looping
  const INFINITE_TESTIMONIALS = [
    ...testimonialsList.map((t) => ({ ...t, uniqueKey: `${t.id}-set1` })),
    ...testimonialsList.map((t) => ({ ...t, uniqueKey: `${t.id}-set2` })),
    ...testimonialsList.map((t) => ({ ...t, uniqueKey: `${t.id}-set3` })),
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth continuous infinite auto-scroll loop
  useEffect(() => {
    let animationFrameId: number;

    const autoScroll = () => {
      const container = scrollRef.current;
      if (container && !isPaused) {
        // Silky smooth constant movement
        container.scrollLeft += 0.75;

        // Calculate single batch width
        const singleSetWidth = container.scrollWidth / 3;

        // When scrolled past the 2nd set, wrap back smoothly by singleSetWidth
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [isPaused]);

  return (
    <section className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-14 sm:py-18 md:py-20 font-sans text-white select-none overflow-hidden border-t border-white/[0.08]">
      {/* Background glow effects matching ServiceSection */}
      <div className="absolute top-0 right-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-blue-950/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 h-[380px] w-[380px] rounded-full bg-emerald-950/20 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full">
        {/* Section Header: Aligned identically to ServiceSection */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-8">
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={testimonialAnimations.eyebrow.initial}
              whileInView={testimonialAnimations.eyebrow.whileInView}
              viewport={testimonialAnimations.eyebrow.viewport}
              transition={testimonialAnimations.eyebrow.transition}
              className="inline-flex items-center gap-2 uppercase tracking-widest text-[#EBE7DC]/80 mb-4"
            >
              <Sparkles className="h-5 w-5 text-[#2563EB]" />
              <span>{testimonials.badgeText}</span>
            </motion.div>

            {/* Stepped Headline matching ServiceSection & AboutSection typography */}
            <motion.h2
              initial={testimonialAnimations.headline.initial}
              whileInView={testimonialAnimations.headline.whileInView}
              viewport={testimonialAnimations.headline.viewport}
              transition={testimonialAnimations.headline.transition}
              className="text-4xl sm:text-5xl md:text-[56px] font-medium tracking-tight text-[#EBE7DC] leading-[1.15] uppercase"
            >
              <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2">
                <span>{testimonials.headline.line1}</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2 mt-2 sm:mt-3">
                <span>{testimonials.headline.line2Prefix}</span>
                <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.5)] select-none">
                  <span className="inline-block skew-x-14 md:skew-x-18">
                    {testimonials.headline.line2Badge}
                  </span>
                </span>
                {/* SVG Sparkle Icon placed OUTSIDE the blue badge on the right side */}
                <motion.span
                  animate={testimonialAnimations.spin.animate}
                  transition={testimonialAnimations.spin.transition}
                  className="inline-flex items-center justify-center text-white drop-shadow-[0_0_12px_rgba(37,99,235,0.9)] ml-0.5 sm:ml-1"
                >
                  <FourPointStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.span>
              </div>
            </motion.h2>
          </div>

          {/* Right Column: Paragraph matching ServiceSection */}
          <motion.div
            initial={testimonialAnimations.description.initial}
            whileInView={testimonialAnimations.description.whileInView}
            viewport={testimonialAnimations.description.viewport}
            transition={testimonialAnimations.description.transition}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <p className="text-zinc-400 text-sm sm:text-base max-w-sm leading-relaxed">
              {testimonials.description}
            </p>
          </motion.div>
        </div>

        {/* Cards Slider Track with Infinite Continuous Scroll */}
        <div className="relative w-full">
          {/* Soft Left & Right Vignette Shadows */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent z-10" />

          {/* Infinite Scrollable Track with Pause on Hover/Touch */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => {
              if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
              resumeTimeoutRef.current = setTimeout(() => setIsPaused(false), 2000);
            }}
            className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto no-scrollbar pb-6 pt-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {INFINITE_TESTIMONIALS.map((item) => (
              <TestimonialCard
                key={item.uniqueKey}
                testimonial={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
