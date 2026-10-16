"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import TestimonialCard, { type Testimonial } from "@/components/cards/TestimonialCard";

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "sarah-anderson",
    name: "Sarah Anderson",
    role: "VP of Marketing",
    avatar: "/images/testimonial-sarah.jpg",
    rating: "5/5",
    bgColor: "#FEF3B4", // Soft warm butter cream
    quote:
      "“From the very first meeting the team understood our vision and turned it into a brand that feels exactly like us. The attention to detail was incredible.”",
  },
  {
    id: "michael-carter",
    name: "Michael Carter",
    role: "Founder & CEO",
    avatar: "/images/testimonial-michael.jpg",
    rating: "4.5/5",
    bgColor: "#DCF2DE", // Soft pastel sage / mint green
    quote:
      "“Scaling our product design system seemed daunting, but their strategic approach and execution blew us away. Truly a world-class team that delivered beyond our expectations.”",
  },
  {
    id: "emily-thompson",
    name: "Emily Thompson",
    role: "Head of Brand",
    avatar: "/images/testimonial-emily.jpg",
    rating: "5/5",
    bgColor: "#E7DBF9", // Soft pastel lavender / lilac
    quote:
      "“They didn't just deliver a website; they redefined how our global audience perceives our luxury brand identity. Invaluable partners for our long-term growth.”",
  },
  {
    id: "daniel-wilson",
    name: "Daniel Wilson",
    role: "Product Director",
    avatar: "/images/testimonial-daniel.jpg",
    rating: "5/5",
    bgColor: "#F8DECB", // Soft pastel peach
    quote:
      "“The turnaround time and architectural technical execution were unmatched. Our user retention and conversion metrics jumped significantly right after the relaunch.”",
  },
  {
    id: "sophia-martinez",
    name: "Sophia Martinez",
    role: "Chief Strategy Officer",
    avatar: "/images/testimonial-sarah.jpg",
    rating: "5/5",
    bgColor: "#DEF0FA", // Soft pastel sky blue
    quote:
      "“Working with this team elevated our digital presence into an elite tier. Every single milestone was executed with uncompromising precision and creative flair.”",
  },
  {
    id: "alex-rivera",
    name: "Alex Rivera",
    role: "Head of Growth",
    avatar: "/images/testimonial-michael.jpg",
    rating: "5/5",
    bgColor: "#FDE6E6", // Soft pastel blush rose
    quote:
      "“From day one, their communication and creative insights set a new benchmark for agency partnerships. Exceptional work and reliable collaboration throughout.”",
  },
];

// Create 3 duplicated sets for truly seamless, infinite smooth marquee looping
const INFINITE_TESTIMONIALS = [
  ...TESTIMONIALS_DATA.map((t) => ({ ...t, uniqueKey: `${t.id}-set1` })),
  ...TESTIMONIALS_DATA.map((t) => ({ ...t, uniqueKey: `${t.id}-set2` })),
  ...TESTIMONIALS_DATA.map((t) => ({ ...t, uniqueKey: `${t.id}-set3` })),
];

export default function TestimonialSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [expandedIds, setExpandedIds] = useState<string[]>(["sarah-anderson"]);
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

  // Arrow button handlers with infinite boundary wrapping
  const handleScroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    // Pause auto-scroll briefly during manual interaction
    setIsPaused(true);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 4000);

    const singleSetWidth = container.scrollWidth / 3;
    const scrollAmount = 360;

    if (direction === "left") {
      if (container.scrollLeft <= singleSetWidth * 0.1) {
        container.scrollLeft += singleSetWidth;
      }
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      if (container.scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft -= singleSetWidth;
      }
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-14 sm:py-18 md:py-20 font-sans text-white select-none overflow-hidden border-t border-white/[0.08]"
    >
      {/* Background glow effects matching ServiceSection */}
      <div className="absolute top-0 right-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-blue-950/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 h-[380px] w-[380px] rounded-full bg-emerald-950/20 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full">
        {/* Section Header: Aligned identically to ServiceSection (flex md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-8) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-8">
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 uppercase tracking-widest text-[#EBE7DC]/80 mb-4"
            >
              <Sparkles className="h-5 w-5 text-[#2563EB]" />
              <span>Testimonials</span>
            </motion.div>

            {/* Stepped Headline matching ServiceSection & AboutSection typography */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-[56px] font-medium tracking-tight text-[#EBE7DC] leading-[1.15] uppercase"
            >
              <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2">
                <span>Loved By The</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2 mt-2 sm:mt-3">
                <span>Prestige</span>
                <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.5)] select-none">
                  <span className="inline-block skew-x-14 md:skew-x-18">
                    Clients
                  </span>
                </span>
                {/* SVG Sparkle Icon placed OUTSIDE the blue badge on the right side */}
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="inline-flex items-center justify-center text-white drop-shadow-[0_0_12px_rgba(37,99,235,0.9)] ml-0.5 sm:ml-1"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                  >
                    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                  </svg>
                </motion.span>
              </div>
            </motion.h2>
          </div>

          {/* Right Column: Paragraph + Navigation Arrow Buttons matching ServiceSection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <p className="text-zinc-400 text-sm sm:text-base max-w-sm leading-relaxed">
              A few words from the founders, marketers, and private homeowners we
              have curated sanctuaries with.
            </p>

            {/* Custom Carousel Navigation Buttons matching ServiceSection */}
            <div className="flex items-center gap-3">
              <motion.button
                type="button"
                onClick={() => handleScroll("left")}
                aria-label="Previous testimonials"
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.94 }}
                className="relative overflow-hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white select-none cursor-pointer"
              >
                {/* Animated #2563EB background slide/glow fill */}
                <motion.span
                  variants={{
                    rest: { scaleY: 0, opacity: 0 },
                    hover: { scaleY: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-[#2563EB] origin-bottom rounded-full"
                />

                {/* Subtle shine sweep */}
                <motion.span
                  variants={{
                    rest: { x: "-120%", opacity: 0 },
                    hover: { x: "160%", opacity: 0.3 },
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] pointer-events-none"
                />

                <motion.div
                  variants={{
                    rest: { x: 0 },
                    hover: { x: -3 },
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className="relative z-10 flex items-center justify-center"
                >
                  <ArrowLeft className="h-5 w-5 text-white" />
                </motion.div>
              </motion.button>

              <motion.button
                type="button"
                onClick={() => handleScroll("right")}
                aria-label="Next testimonials"
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.94 }}
                className="relative overflow-hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white select-none cursor-pointer"
              >
                {/* Animated #2563EB background slide/glow fill */}
                <motion.span
                  variants={{
                    rest: { scaleY: 0, opacity: 0 },
                    hover: { scaleY: 1, opacity: 1 },
                  }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-[#2563EB] origin-bottom rounded-full"
                />

                {/* Subtle shine sweep */}
                <motion.span
                  variants={{
                    rest: { x: "-120%", opacity: 0 },
                    hover: { x: "160%", opacity: 0.3 },
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] pointer-events-none"
                />

                <motion.div
                  variants={{
                    rest: { x: 0 },
                    hover: { x: 3 },
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                  className="relative z-10 flex items-center justify-center"
                >
                  <ArrowRight className="h-5 w-5 text-white" />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Cards Slider Container - Perfectly aligned with max-w-7xl with Infinite Auto Scroll */}
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
            className="flex items-start gap-5 sm:gap-6 overflow-x-auto no-scrollbar pb-6 pt-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {INFINITE_TESTIMONIALS.map((item) => (
              <TestimonialCard
                key={item.uniqueKey}
                testimonial={item}
                isExpanded={expandedIds.includes(item.id)}
                onToggle={() => toggleExpand(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
