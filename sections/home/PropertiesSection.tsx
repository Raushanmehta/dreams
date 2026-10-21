"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FourPointStarIcon, ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import { Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import PropertiesCard, { type PropertyDestination } from "@/components/cards/PropertiesCard";
import siteData from "@/data/site.json";
import { propertiesAnimations } from "@/utils/animation/properties.animation";

export default function PropertiesSection(): React.JSX.Element {
  const { properties } = siteData;
  const propertiesList = (properties?.propertiesList || []) as PropertyDestination[];
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(true);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
      setCount(api.scrollSnapList().length);
    };

    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    <section className="relative w-full bg-[#0a0a0a] px-4 md:px-12 py-8 md:py-10 lg:py-20 font-sans text-white select-none overflow-hidden border-t border-white/[0.08]">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-emerald-950/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 h-[380px] w-[380px] rounded-full bg-blue-950/20 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-8">
          <div>
            <motion.div
              initial={propertiesAnimations.eyebrow.initial}
              whileInView={propertiesAnimations.eyebrow.whileInView}
              viewport={{ once: true }}
              transition={propertiesAnimations.eyebrow.transition}
              className="inline-flex items-center gap-2 uppercase tracking-widest text-[#EBE7DC]/80 mb-4"
            >
              <Sparkles className="h-5 w-5 text-[#2563EB]" />
              <span>{properties.badgeText}</span>
            </motion.div>

            <motion.h2
              initial={propertiesAnimations.headline.initial}
              whileInView={propertiesAnimations.headline.whileInView}
              viewport={{ once: true }}
              transition={propertiesAnimations.headline.transition}
              className="text-4xl sm:text-5xl md:text-[56px] font-medium tracking-tight text-[#EBE7DC] leading-[1.15] uppercase"
            >
              <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2">
                <span>{properties.headline.line2Prefix}</span>
                <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.5)] select-none">
                  <span className="inline-block skew-x-14 md:skew-x-18">
                    {properties.headline.line2Badge}
                  </span>
                </span>
                {/* SVG Icon placed OUTSIDE */}
                <motion.span
                  animate={propertiesAnimations.spin.animate}
                  transition={propertiesAnimations.spin.transition}
                  className="inline-flex items-center justify-center text-white drop-shadow-[0_0_12px_rgba(37,99,235,0.9)] ml-0.5 sm:ml-1"
                >
                  <FourPointStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.span>
              </div>
            </motion.h2>
          </div>

          <motion.div
            initial={propertiesAnimations.description.initial}
            whileInView={propertiesAnimations.description.whileInView}
            viewport={{ once: true }}
            transition={propertiesAnimations.description.transition}
            className="hidden sm:flex items-center"
          >
            {/* Custom Carousel Navigation Buttons */}
            <div className="flex items-center gap-3">
              <motion.button
                initial="rest"
                whileHover={canScrollPrev ? "hover" : "rest"}
                whileTap={{ scale: 0.94 }}
                disabled={!canScrollPrev}
                onClick={() => api?.scrollPrev()}
                aria-label="Previous slide"
                className="relative overflow-hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white disabled:cursor-not-allowed disabled:opacity-30 select-none cursor-pointer"
              >
                {/* Animated #2563EB background slide/glow */}
                <motion.span
                  variants={propertiesAnimations.buttonFill.variants}
                  transition={propertiesAnimations.buttonFill.transition}
                  className="absolute inset-0 bg-[#2563EB] origin-bottom rounded-full"
                />

                {/* Framer Motion subtle shine */}
                <motion.span
                  variants={propertiesAnimations.buttonShine.variants}
                  transition={propertiesAnimations.buttonShine.transition}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] pointer-events-none"
                />

                <motion.div
                  variants={propertiesAnimations.prevArrow.variants}
                  transition={propertiesAnimations.prevArrow.transition}
                  className="relative z-10 flex items-center justify-center"
                >
                  <ArrowLeftIcon className="h-5 w-5 text-white" />
                </motion.div>
              </motion.button>

              <motion.button
                initial="rest"
                whileHover={canScrollNext ? "hover" : "rest"}
                whileTap={{ scale: 0.94 }}
                disabled={!canScrollNext}
                onClick={() => api?.scrollNext()}
                aria-label="Next slide"
                className="relative overflow-hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white disabled:cursor-not-allowed disabled:opacity-30 select-none cursor-pointer"
              >
                {/* Animated #2563EB background slide/glow */}
                <motion.span
                  variants={propertiesAnimations.buttonFill.variants}
                  transition={propertiesAnimations.buttonFill.transition}
                  className="absolute inset-0 bg-[#2563EB] origin-bottom rounded-full"
                />

                {/* Framer Motion subtle shine */}
                <motion.span
                  variants={propertiesAnimations.buttonShine.variants}
                  transition={propertiesAnimations.buttonShine.transition}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] pointer-events-none"
                />

                <motion.div
                  variants={propertiesAnimations.nextArrow.variants}
                  transition={propertiesAnimations.nextArrow.transition}
                  className="relative z-10 flex items-center justify-center"
                >
                  <ArrowRightIcon className="h-5 w-5 text-white" />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Shadcn Embla Carousel */}
        <div className="relative w-full ">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 sm:-ml-5 md:-ml-5">
              {propertiesList.map((property, index) => (
                <CarouselItem
                  key={property.id || index}
                  className="pl-4 sm:pl-5 md:pl-5 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <PropertiesCard property={property} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Carousel Pagination indicator dots */}
        <div className="flex items-center justify-center gap-2.5 mt-6 md:mt-8">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${current === i + 1
                ? "w-8 bg-[#2563EB] shadow-[0_0_12px_rgba(37,99,235,0.7)]"
                : "w-2 bg-white/25 hover:bg-white/50"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}