"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import siteData from "@/data/site.json";
import {
  FourPointStarIcon,
  AsteriskIcon,
  ArrowRightIcon,
} from "@/components/icons";
import { heroAnimations } from "@/utils/animation/hero.animation";

export interface HeroData {
  backgroundImage: string;
  backgroundAlt: string;
  headline: {
    prefix: string;
    badge: string;
    main: string;
    badgeIcon: string;
    mainIcon: string;
  };
  description: string;
  cta: {
    label: string;
    href: string;
    icon: string;
  };
}

function renderHeroIcon(name: string, className = "w-4 h-4"): React.JSX.Element | null {
  switch (name) {
    case "FourPointStar":
      return <FourPointStarIcon className={className} />;
    case "Asterisk":
      return <AsteriskIcon className={className} />;
    case "ArrowRight":
      return <ArrowRightIcon className={className} />;
    default:
      return null;
  }
}

export default function HeroSection(): React.JSX.Element {
  // All Hero Section data
  const hero = siteData.hero as HeroData;

  return (
    <section className="relative w-full h-[85vh] lg:min-h-screen  bg-black p-4 sm:p-4 md:p-5 flex flex-col justify-between overflow-hidden select-none">
      {/* Framed Hero Canvas with */}
      <div className="relative w-full h-[calc(85vh-1.5rem)] sm:h-[calc(850vh-2rem)] md:h-[calc(100vh-2.5rem)] rounded-[22px] sm:rounded-[28px] md:rounded-[34px] overflow-hidden flex flex-col justify-end border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
        {/* Background Image from JSON */}
        <motion.div
          variants={heroAnimations.background.variants}
          initial="initial"
          animate="animate"
          transition={heroAnimations.background.transition}
          className="absolute inset-0 z-0"
        >
          <Image
            src={hero.backgroundImage}
            alt={hero.backgroundAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-100 contrast-[1.02]"
          />
          {/* Subtle bottom vignette to */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/35 pointer-events-none" />
        </motion.div>

        {/* Bottom Content Area */}
        <div className="relative z-10 w-full px-6 sm:px-10 md:px-12 lg:px-14 pb-6 sm:pb-8 md:pb-10 pt-24 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-12">
          {/* Bottom Left Huge Bold */}
          <motion.div
            variants={heroAnimations.headline.variants}
            initial="initial"
            animate="animate"
            transition={heroAnimations.headline.transition}
            className="flex flex-col"
          >
            <h1 className="flex flex-col text-[#EBE7DC] drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
              <span className="text-[32px] sm:text-[46px] md:text-[62px] lg:text-[76px] xl:text-[90px] font-bold tracking-[-0.035em] leading-[0.96] text-[#EBE7DC]/90 flex items-center flex-wrap gap-x-3 sm:gap-x-4">
                <span>{hero.headline.prefix}</span>
                {/* Tilted Sliced Background Badge */}
                <span className="inline-flex items-center gap-2 sm:gap-2.5 shrink-0">
                  <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 md:px-7 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.5)] select-none">
                    <span className="inline-block skew-x-14 md:skew-x-18">
                      {hero.headline.badge}
                    </span>
                  </span>
                  {/* SVG Icon from components/icons folder */}
                  <motion.span
                    animate={heroAnimations.spin.animate}
                    transition={heroAnimations.spin.transition}
                    className="inline-flex items-center justify-center text-white drop-shadow-[0_0_14px_rgba(37,99,235,0.9)]"
                  >
                    {renderHeroIcon(hero.headline.badgeIcon, "w-[0.44em] h-[0.44em] text-white")}
                  </motion.span>
                </span>
              </span>
              <span className="text-[76px] sm:text-[110px] md:text-[145px] lg:text-[170px] xl:text-[200px] leading-[0.84] font-bold tracking-[-0.04em] flex items-start">
                <span>{hero.headline.main}</span>
                {/* Spinning 6 point asterisk */}
                <motion.span
                  aria-hidden="true"
                  animate={heroAnimations.spin.animate}
                  transition={heroAnimations.spin.transition}
                  className="inline-block origin-center ml-1 sm:ml-2 text-[0.42em] leading-none text-[#EBE7DC]"
                >
                  {renderHeroIcon(hero.headline.mainIcon, "w-[0.9em] h-[0.9em] inline-block")}
                </motion.span>
              </span>
            </h1>
          </motion.div>

          {/* Bottom Right CTA Button */}
          <motion.div
            variants={heroAnimations.cta.variants}
            initial="initial"
            animate="animate"
            transition={heroAnimations.cta.transition}
            className="flex items-center lg:self-end lg:mb-2 xl:mb-3 shrink-0"
          >
            <Link
              href={hero.cta.href}
              className="group relative inline-flex items-center gap-3.5 pl-5 sm:pl-6 pr-1.5 py-1.5 rounded-full bg-white text-black font-medium text-[13.5px] sm:text-[14px] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-200 select-none cursor-pointer hover:scale-105 active:scale-95"
            >
              <span className="tracking-[-0.01em] text-neutral-900 font-medium">
                {hero.cta.label}
              </span>
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                {renderHeroIcon(hero.cta.icon, "w-3.5 h-3.5")}
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}