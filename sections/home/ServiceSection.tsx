"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FourPointStarIcon } from "@/components/icons";
import ServiceCard, { type ServiceItem } from "@/components/cards/ServiceCard";
import siteData from "@/data/site.json";
import { serviceAnimations } from "@/utils/animation/service.animation";

export default function ServiceSection(): React.JSX.Element {
  const { services } = siteData;

  return (
    <section
      className="relative w-full isolate text-[#11131a] bg-[#f4f4f2] px-4 md:px-12 py-8 md:py-10 lg:py-20 font-sans select-none overflow-hidden border-t border-zinc-200"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 text-left">
          <div className="flex flex-col items-start text-left">
            {/* Eyebrow */}
            <motion.div
              initial={serviceAnimations.eyebrow.initial}
              whileInView={serviceAnimations.eyebrow.whileInView}
              viewport={serviceAnimations.eyebrow.viewport}
              transition={serviceAnimations.eyebrow.transition}
              className="inline-flex items-center gap-2 uppercase tracking-widest text-[#11131a] mb-2 font-semibold"
            >
              <Sparkles className="h-5 w-5 text-[#2563EB]" />
              <span>{services.badgeText}</span>
            </motion.div>

            {/* Single-line Headline */}
            <motion.h2
              initial={serviceAnimations.headline.initial}
              whileInView={serviceAnimations.headline.whileInView}
              viewport={serviceAnimations.headline.viewport}
              transition={serviceAnimations.headline.transition}
              className="text-4xl sm:text-5xl md:text-[56px] font-medium tracking-tight text-[#11131a] leading-[1.15] uppercase text-left"
            >
              <div className="flex flex-wrap items-center justify-start gap-x-2.5 sm:gap-x-3 gap-y-2">
                <span>{services.headline.prefix}</span>
                <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.35)] select-none">
                  <span className="inline-block skew-x-14 md:skew-x-18">
                    {services.headline.badge}
                  </span>
                </span>
                {/* SVG Rotating 4-point Sparkle */}
                <motion.span
                  animate={serviceAnimations.spin.animate}
                  transition={serviceAnimations.spin.transition}
                  className="inline-flex items-center justify-center text-[#2563EB] drop-shadow-[0_0_12px_rgba(37,99,235,0.4)] ml-0.5 sm:ml-1"
                >
                  <FourPointStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563EB]" />
                </motion.span>
              </div>
            </motion.h2>
          </div>
        </div>

        {/* 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-5 w-full">
          {(services.servicesList as ServiceItem[]).map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
