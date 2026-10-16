"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import PropertiesCard from "@/components/cards/PropertiesCard";

interface PropertyDestination {
  id: string;
  title: string;
  countryCode: string;
  propertiesCount: string;
  estatesCount: string;
  imageUrl: string;
  imageAlt: string;
  ctaText: string;
}

const PROPERTIES_DATA: PropertyDestination[] = [
  {
    id: "beverly-hills-villa",
    title: "Beverly Hills Modern Villa",
    countryCode: "US",
    propertiesCount: "148",
    estatesCount: "24",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Luxury modern architectural villa with infinity pool in Beverly Hills",
    ctaText: "Explore Property",
  },
  {
    id: "dubai-sky-penthouse",
    title: "Dubai Marina Sky Penthouse",
    countryCode: "AE",
    propertiesCount: "320",
    estatesCount: "42",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Skyline luxury penthouse with glass terrace overlooking Dubai Marina",
    ctaText: "Explore Property",
  },
  {
    id: "monaco-waterfront-estate",
    title: "Monaco Waterfront Estate",
    countryCode: "MC",
    propertiesCount: "96",
    estatesCount: "18",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Ultra-luxury modern waterfront villa with private yacht dock in Monaco",
    ctaText: "Explore Property",
  },
  {
    id: "mayfair-heritage-residence",
    title: "Mayfair Heritage Residence",
    countryCode: "UK",
    propertiesCount: "185",
    estatesCount: "35",
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Prestigious illuminated heritage estate and modern residence in Mayfair",
    ctaText: "Explore Property",
  },
  {
    id: "lake-como-grand-palazzo",
    title: "Lake Como Grand Palazzo",
    countryCode: "IT",
    propertiesCount: "112",
    estatesCount: "16",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Historic palazzo and contemporary villa overlooking Lake Como Italy",
    ctaText: "Explore Property",
  },
  {
    id: "st-moritz-alpine-chalet",
    title: "St. Moritz Alpine Chalet",
    countryCode: "CH",
    propertiesCount: "74",
    estatesCount: "12",
    imageUrl: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Architectural alpine chalet with panoramic mountain glass walls in St. Moritz",
    ctaText: "Explore Property",
  },
];

export default function PropertiesSection(): React.JSX.Element {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
      setCount(api.scrollSnapList().length);
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
      id="properties"
      className="relative w-full bg-[#0a0a0a] px-6 md:px-12 py-14 sm:py-18 md:py-20 font-sans text-white select-none overflow-hidden border-t border-white/[0.08]"
    >
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 -z-10 h-[450px] w-[450px] rounded-full bg-emerald-950/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 -z-10 h-[380px] w-[380px] rounded-full bg-blue-950/20 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 uppercase tracking-widest text-[#EBE7DC]/80 mb-4"
            >
              <Sparkles className="h-5 w-5 text-[#2563EB]" />
              <span>Featured Properties</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-[56px] font-medium tracking-tight text-[#EBE7DC] leading-[1.15] uppercase"
            >
              <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2">
                <span>Exclusive Estates &amp;</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2 mt-2 sm:mt-3">
                <span>Luxury</span>
                <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.5)] select-none">
                  <span className="inline-block skew-x-14 md:skew-x-18">
                    Properties
                  </span>
                </span>
                {/* SVG Icon placed OUTSIDE the blue background on the right side */}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <p className="text-zinc-400 text-sm sm:text-base max-w-sm leading-relaxed">
              Explore our handpicked collection of premier architectural sanctuaries, waterfront
              estates, and prestigious luxury properties worldwide.
            </p>

            {/* Custom Carousel Navigation Buttons with Framer Motion Hover */}
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
                initial="rest"
                whileHover={canScrollNext ? "hover" : "rest"}
                whileTap={{ scale: 0.94 }}
                disabled={!canScrollNext}
                onClick={() => api?.scrollNext()}
                aria-label="Next slide"
                className="relative overflow-hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white disabled:cursor-not-allowed disabled:opacity-30 select-none cursor-pointer"
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

        {/* Shadcn Embla Carousel Container */}
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3.5 sm:-ml-4 md:-ml-4">
            {PROPERTIES_DATA.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-3.5 sm:pl-4 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <PropertiesCard
                  title={item.title}
                  countryCode={item.countryCode}
                  propertiesCount={item.propertiesCount}
                  estatesCount={item.estatesCount}
                  imageUrl={item.imageUrl}
                  imageAlt={item.imageAlt}
                  ctaText={item.ctaText}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Carousel Pagination indicator / count status */}
        <div className="flex items-center justify-center gap-2 mt-8 text-xs text-zinc-500 font-medium">
          <span>{current.toString().padStart(2, "0")}</span>
          <span className="w-8 h-[1px] bg-zinc-800" />
          <span>{count.toString().padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}