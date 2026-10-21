"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BlogCard, { type BlogPost } from "@/components/cards/BlogCard";
import { FourPointStarIcon, ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { Sparkles } from "lucide-react";
import siteData from "@/data/site.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { blogAnimations } from "@/utils/animation/blog.animation";

export default function BlogSection() {
  const { blog } = siteData;
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    queueMicrotask(onSelect);

    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section
      className="relative w-full isolate bg-[#f4f4f2] px-4 md:px-12 py-8 md:py-10 lg:py-20 font-sans select-none overflow-hidden border-t border-zinc-200"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header: Styled cleanly on white background */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 ">
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={blogAnimations.eyebrow.initial}
              whileInView={blogAnimations.eyebrow.whileInView}
              viewport={blogAnimations.eyebrow.viewport}
              transition={blogAnimations.eyebrow.transition}
              className="inline-flex items-center gap-2 uppercase tracking-widest text-[#11131a] font-semibold mb-4"
            >
              <Sparkles className="h-5 w-5 text-[#2563EB]" />
              <span>{blog.badgeText}</span>
            </motion.div>

            {/* Stepped Title with #2563EB Sliced Badge and Spinning Star SVG */}
            <motion.h2
              initial={blogAnimations.headline.initial}
              whileInView={blogAnimations.headline.whileInView}
              viewport={blogAnimations.headline.viewport}
              transition={blogAnimations.headline.transition}
              className="text-4xl sm:text-5xl md:text-[56px] font-medium tracking-tight text-[#11131a] leading-[1.15] uppercase"
            >
              <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2">
                <span>{blog.headline.prefix}</span>
                <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.35)] select-none">
                  <span className="inline-block skew-x-14 md:skew-x-18">
                    {blog.headline.badge}
                  </span>
                </span>
                {/* SVG Rotating 4-point Sparkle */}
                <motion.span
                  animate={blogAnimations.spin.animate}
                  transition={blogAnimations.spin.transition}
                  className="inline-flex items-center justify-center text-[#2563EB] drop-shadow-[0_0_12px_rgba(37,99,235,0.4)] ml-0.5 sm:ml-1"
                >
                  <FourPointStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563EB]" />
                </motion.span>
              </div>
            </motion.h2>
          </div>
        </div>

        {/* Shadcn Embla Carousel: Smooth 2-card sliding on desktop, 1-card on mobile */}
        <div className="relative w-full py-2">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 sm:-ml-5 md:-ml-6">
              {((blog.blogPosts || []) as BlogPost[]).map((post) => (
                <CarouselItem
                  key={post.id}
                  className="pl-4 sm:pl-5 md:pl-6 basis-full md:basis-1/2"
                >
                  <BlogCard post={post} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Bottom Line Arrow Navigation Controls */}
        <div className="flex items-center justify-between pt-2 sm:pt-3 w-full">
          {/* Left Line Arrow: ←────── */}
          <motion.button
            type="button"
            onClick={() => api?.scrollPrev()}
            disabled={!canScrollPrev}
            whileHover={canScrollPrev ? blogAnimations.prevHover : {}}
            whileTap={canScrollPrev ? blogAnimations.tap : {}}
            aria-label="Previous articles"
            className={`group flex items-center gap-0 select-none cursor-pointer py-3 transition-opacity ${canScrollPrev ? "opacity-100" : "opacity-35 cursor-not-allowed"
              }`}
          >
            {/* Arrow Head */}
            <ArrowLeftIcon className="w-5 h-5 text-zinc-900 group-hover:text-[#2563EB] transition-colors transition-transform group-hover:-translate-x-1.5" />
            {/* Long Horizontal Extension Line */}
            <span className="w-16 sm:w-24 md:w-28 h-[1.5px] bg-zinc-300 group-hover:bg-[#2563EB] transition-colors" />
          </motion.button>

          {/* Right Line Arrow: ──────→ */}
          <motion.button
            type="button"
            onClick={() => api?.scrollNext()}
            disabled={!canScrollNext}
            whileHover={canScrollNext ? blogAnimations.nextHover : {}}
            whileTap={canScrollNext ? blogAnimations.tap : {}}
            aria-label="Next articles"
            className={`group flex items-center gap-0 select-none cursor-pointer py-3 transition-opacity ${canScrollNext ? "opacity-100" : "opacity-35 cursor-not-allowed"
              }`}
          >
            {/* Long Horizontal Extension Line */}
            <span className="w-16 sm:w-24 md:w-28 h-[1.5px] bg-zinc-300 group-hover:bg-[#2563EB] transition-colors" />
            {/* Arrow Head */}
            <ArrowRightIcon className="w-5 h-5 text-zinc-900 group-hover:text-[#2563EB] transition-colors transition-transform group-hover:translate-x-1.5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
