"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import {
  AsteriskIcon,
  FourPointStarIcon,
  PrivateToursIcon,
  HighYieldIcon,
  PrimeLocationsIcon,
  BespokeLuxuryIcon,
} from "@/components/icons";
import siteData from "@/data/site.json";
import { whyChooseUsAnimations } from "@/utils/animation/whychooseus.animation";

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export default function WhyChooseUsSection(): React.JSX.Element {
  const { whyChooseUs } = siteData;

  const renderFeatureIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case "privatetours":
      case "private-tours":
        return <PrivateToursIcon className="w-12 h-12" />;
      case "highyield":
      case "high-yield":
        return <HighYieldIcon className="w-12 h-12" />;
      case "primelocations":
      case "prime-locations":
        return <PrimeLocationsIcon className="w-12 h-12" />;
      case "bespokeluxury":
      case "bespoke-luxury":
        return <BespokeLuxuryIcon className="w-12 h-12" />;
      default:
        return <PrivateToursIcon className="w-12 h-12" />;
    }
  };

  return (
    <section
      className="relative w-full bg-[#f4f4f2] px-4 md:px-12 py-8 md:py-10 lg:py-20  font-sans text-neutral-900 select-none overflow-hidden border-t border-black/[0.08]"
    >
      {/* Ambient background accent */}
      <div className="absolute top-1/4 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#2563EB]/5 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Column: Asymmetrical Rounded Image with 3D Offset Cross */}
        <motion.div
          variants={whyChooseUsAnimations.image.variants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-60px" }}
          transition={whyChooseUsAnimations.image.transition}
          className="lg:col-span-5 relative flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[430px] md:max-w-full lg:max-w-[465px] aspect-[3.7/4.5]">
            {/* Main Rounded Photo */}
            <div className="relative h-full w-full overflow-hidden rounded-tl-[80px] sm:rounded-tl-[100px] rounded-br-[80px] sm:rounded-br-[100px] rounded-tr-2xl rounded-bl-2xl shadow-[0_24px_60px_rgba(0,0,0,0.14)] border border-black/[0.06]">
              <Image
                src={whyChooseUs.image}
                alt={whyChooseUs.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>

            {/* Spinning 6-point asterisk matching Hero section */}
            <motion.div
              animate={whyChooseUsAnimations.floatingAsterisk.animate}
              transition={whyChooseUsAnimations.floatingAsterisk.transition}
              className="absolute -bottom-7 -left-5 sm:-bottom-9 sm:-left-7 z-20 w-16 h-16 sm:w-20 sm:h-20"
            >
              {/* Offset shadow asterisk */}
              <AsteriskIcon className="absolute -top-1.5 -right-1.5 w-full h-full text-[#2563EB]/35" />
              {/* Foreground solid asterisk with #2563EB */}
              <AsteriskIcon className="relative w-full h-full text-[#2563EB] drop-shadow-[0_12px_28px_rgba(37,99,235,0.45)]" />
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Content, Stepped Headline with Badges & 2x2 Grid */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow */}
          <motion.div
            initial={whyChooseUsAnimations.eyebrow.initial}
            whileInView={whyChooseUsAnimations.eyebrow.whileInView}
            viewport={{ once: true }}
            transition={whyChooseUsAnimations.eyebrow.transition}
            className="inline-flex items-center gap-2 uppercase tracking-widest text-black mb-4"
          >
            <Sparkles className="h-5 w-5 text-[#2563EB]" />
            <span>{whyChooseUs.badgeText}</span>
          </motion.div>

          {/* Stepped Headline matching About section typography and Hero tilted sliced badge style */}
          <motion.h2
            initial={whyChooseUsAnimations.headline.initial}
            whileInView={whyChooseUsAnimations.headline.whileInView}
            viewport={{ once: true }}
            transition={whyChooseUsAnimations.headline.transition}
            className="text-4xl sm:text-5xl md:text-[56px] font-medium leading-[1.18] tracking-tight text-[#1a1a1a] uppercase"
          >
            <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2">
              <span>{whyChooseUs.headline.line1Prefix}</span>
              {/* Tilted Sliced Background Badge */}
              <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.4)] select-none">
                <span className="inline-block skew-x-14 md:skew-x-18">
                  {whyChooseUs.headline.line1Badge}
                </span>
              </span>
              {/* SVG Icon placed OUTSIDE the blue background on the right side */}
              <motion.span
                animate={whyChooseUsAnimations.spin.animate}
                transition={whyChooseUsAnimations.spin.transition}
                className="inline-flex items-center justify-center text-[#2563EB] drop-shadow-[0_0_12px_rgba(37,99,235,0.6)] ml-0.5 sm:ml-1"
              >
                <FourPointStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563EB]" />
              </motion.span>
            </div>
            <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2 mt-2 sm:mt-3">
              <span>{whyChooseUs.headline.line2}</span>
            </div>
          </motion.h2>

          {/* Description Paragraph */}
          <motion.p
            initial={whyChooseUsAnimations.description.initial}
            whileInView={whyChooseUsAnimations.description.whileInView}
            viewport={{ once: true }}
            transition={whyChooseUsAnimations.description.transition}
            className="mt-6 text-neutral-500 text-sm sm:text-base leading-relaxed max-w-2xl"
          >
            {whyChooseUs.description}
          </motion.p>

          {/* 2x2 Features Grid */}
          <motion.div
            variants={whyChooseUsAnimations.gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 lg:gap-x-6 gap-y-4 sm:gap-y-6 mt-6 sm:mt-8"
          >
            {(whyChooseUs.features as FeatureItem[]).map((feature) => (
              <motion.div
                key={feature.id}
                variants={whyChooseUsAnimations.gridItem}
                whileHover={{ x: 3 }}
                className="group flex items-start gap-4 sm:gap-5"
              >
                {/* Icon Column with Horizontal Underline */}
                <div className="flex flex-col items-center flex-shrink-0 pt-0.5">
                  <div className="text-[#2563EB] transition-transform duration-300 group-hover:scale-110">
                    {renderFeatureIcon(feature.icon)}
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
