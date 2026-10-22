"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FourPointStarIcon, ArrowRightIcon } from "@/components/icons";
import { Sparkles } from "lucide-react";
import { site, SectionProps, DreamsAboutData } from "@/data";
import { aboutAnimations } from "@/utils/animation/about.animation";
import StatCounter from "@/components/common/StatCounter";

export interface AboutSectionProps {
  showButton?: boolean;
}

export function AboutSection({
  data,
  className,
  showButton,
}: SectionProps<DreamsAboutData> & AboutSectionProps = {}): React.JSX.Element {
  const about = (data || site.about) as unknown as DreamsAboutData;
  const pathname = usePathname();
  const shouldShowButton = showButton !== undefined ? showButton : pathname !== "/about";

  return (
    <section className={`bg-[#f4f4f2] px-4 md:px-12 py-8 md:py-10 lg:py-20 font-sans text-[#1a1a1a] select-none ${className || ""}`}>
      <div className="relative mx-auto max-w-7xl w-full">
        
        <motion.div
          variants={aboutAnimations.image.variants}
          initial="initial"
          animate="animate"
          transition={aboutAnimations.image.transition}
          className="relative ml-auto h-[360px] sm:h-[420px] md:h-[500px] w-full overflow-hidden rounded-xl md:w-[65%]"
        >
          <Image
            src={about.image}
            alt={about.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 65vw"
            className="h-full w-full object-cover"
            unoptimized
          />
        </motion.div>

        {/* Headline + copy, sits */}
        <motion.div
          variants={aboutAnimations.container}
          initial="hidden"
          animate="show"
          className="relative z-10 mt-4  md:absolute md:left-0 md:top-0 md:mt-0 w-full md:w-[70%] lg:w-[50%]"
        >
          <div className="rounded-br-[28px] bg-[#f4f4f2] pb-5 pr-5 pt-1 md:pr-6">
            <motion.div
              variants={aboutAnimations.eyebrow.variants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={aboutAnimations.eyebrow.transition}
              className="inline-flex items-center gap-2 uppercase tracking-widest text-black mb-4"
            >
              <Sparkles className="h-5 w-5 text-[#2563EB]" />
              <span>{about.badgeText}</span>
            </motion.div>
            <h2 className="text-4xl font-medium leading-[1.18] tracking-tight md:text-[45px] lg:text-[56px] text-[#1a1a1a]">
              <motion.span variants={aboutAnimations.rise} className="block">
                {about.headline.line1}
              </motion.span>
              <motion.span variants={aboutAnimations.rise} className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 my-1">
                <span>{about.headline.line2Prefix}</span>
                {/* Tilted Sliced Background Badge */}
                <span className="relative inline-block bg-[#2563EB] text-white px-3 sm:px-4 md:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.4)] select-none">
                  <span className="inline-block skew-x-14 md:skew-x-18">
                    {about.headline.line2Badge}
                  </span>
                </span>
                {/* SVG Icon placed OUTSIDE */}
                <motion.span
                  animate={aboutAnimations.spin.animate}
                  transition={aboutAnimations.spin.transition}
                  className="inline-flex items-center justify-center text-[#2563EB] drop-shadow-[0_0_12px_rgba(37,99,235,0.6)] ml-0.5 sm:ml-1"
                >
                  <FourPointStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563EB]" />
                </motion.span>
              </motion.span>
              <motion.span variants={aboutAnimations.rise} className="block">
                {about.headline.line3}
              </motion.span>
            </h2>
          </div>

          <div className=" md:max-w-[250px] lg:max-w-[400px] lg:mt-2">
            <motion.div variants={aboutAnimations.rise} className="mb-3 h-px w-full bg-black/15" />

            <div className="min-h-[85px]">
              <motion.p
                variants={aboutAnimations.rise}
                className="text-[14px] sm:text-[15px] leading-relaxed text-black/70"
              >
                {about.description}
              </motion.p>
            </div>

            {/* Real Estate Key Highlights */}
            <motion.div
              variants={aboutAnimations.rise}
              className="grid grid-cols-3 gap-2 sm:gap-3 py-3 border-y border-black/10 "
            >
              {about.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-lg sm:text-xl font-bold text-black tracking-tight">
                    <StatCounter value={stat.value} delay={i * 0.15} />
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-black/55 font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {shouldShowButton && (
              <Link href={about.cta.href}>
                <motion.button
                  variants={aboutAnimations.rise}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.96 }}
                  className="relative group mt-2 overflow-hidden rounded-full bg-[#1a1a1a] px-6 sm:px-7 py-3 text-sm font-semibold tracking-wider text-white shadow-md flex items-center gap-2.5 select-none cursor-pointer"
                >
                  {/* Animated #2563EB background slide/glow */}
                  <motion.span
                    variants={aboutAnimations.button.fill.variants}
                    transition={aboutAnimations.button.fill.transition}
                    className="absolute inset-0 bg-[#2563EB] origin-bottom rounded-full"
                  />

                  {/* Framer Motion subtle shine */}
                  <motion.span
                    variants={aboutAnimations.button.shine.variants}
                    transition={aboutAnimations.button.shine.transition}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] pointer-events-none"
                  />

                  <span className="relative z-10">{about.cta.label}</span>

                  {/* Arrow container with spring translation */}
                  <motion.div
                    variants={aboutAnimations.button.arrow.variants}
                    transition={aboutAnimations.button.arrow.transition}
                    className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-white/15"
                  >
                    <ArrowRightIcon className="w-3.5 h-3.5 text-white" />
                  </motion.div>
                </motion.button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
