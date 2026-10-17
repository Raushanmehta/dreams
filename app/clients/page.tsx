"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import BreadCrumb from "@/components/common/BreadCrumb";
import TestimonialCard, { type Testimonial } from "@/components/cards/TestimonialCard";
import { FourPointStarIcon } from "@/components/icons";
import siteData from "@/data/site.json";
import { testimonialAnimations } from "@/utils/animation/testimonial.animation";

export default function ClientsPage(): React.JSX.Element {
    const { testimonials } = siteData;
    const testimonialsList = testimonials.testimonialsList as Testimonial[];

    return (
        <main>
            <BreadCrumb
                title={testimonials.pageTitle || testimonials.badgeText}
                subtitle={testimonials.pageSubtitle || testimonials.description}
            />
            <section className="relative w-full bg-[#f4f4f2] px-6 md:px-12 py-14 sm:py-18 md:py-20 font-sans select-none overflow-hidden border-t border-zinc-200/80">
                <div className="relative mx-auto max-w-7xl w-full">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-8">
                        <div>
                            {/* Eyebrow badge with blue sparkle */}
                            <motion.div
                                initial={testimonialAnimations.eyebrow.initial}
                                whileInView={testimonialAnimations.eyebrow.whileInView}
                                viewport={testimonialAnimations.eyebrow.viewport}
                                transition={testimonialAnimations.eyebrow.transition}
                                className="inline-flex items-center gap-2 uppercase tracking-widest text-[#11131a] font-semibold mb-4"
                            >
                                <Sparkles className="h-5 w-5 text-[#2563EB]" />
                                <span>{testimonials.badgeText}</span>
                            </motion.div>

                            {/* Headline with tilted blue badge and spinning 4-point star */}
                            <motion.h2
                                initial={testimonialAnimations.headline.initial}
                                whileInView={testimonialAnimations.headline.whileInView}
                                viewport={testimonialAnimations.headline.viewport}
                                transition={testimonialAnimations.headline.transition}
                                className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#11131a] leading-[1.15] uppercase"
                            >
                                <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2">
                                    <span>{testimonials.headline.line1}</span>
                                </div>
                                <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2 mt-2 sm:mt-2.5">
                                    <span>{testimonials.headline.line2Prefix}</span>
                                    <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.4)] select-none">
                                        <span className="inline-block skew-x-14 md:skew-x-18">
                                            {testimonials.headline.line2Badge}
                                        </span>
                                    </span>
                                    {/* Rotating 4-point star SVG icon */}
                                    <motion.span
                                        animate={testimonialAnimations.spin.animate}
                                        transition={testimonialAnimations.spin.transition}
                                        className="inline-flex items-center justify-center text-[#2563EB] drop-shadow-[0_0_12px_rgba(37,99,235,0.5)] ml-0.5 sm:ml-1"
                                    >
                                        <FourPointStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563EB]" />
                                    </motion.span>
                                </div>
                            </motion.h2>
                        </div>

                        {/* Right Column: Paragraph */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
                        >
                            <p className="text-zinc-600 text-sm sm:text-base max-w-sm leading-relaxed">
                                {testimonials.description}
                            </p>
                        </motion.div>
                    </div>

                    {/* Testimonial Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 justify-items-center">
                        {testimonialsList.map((item) => (
                            <TestimonialCard
                                key={item.id}
                                testimonial={item}
                                className="w-full sm:w-full md:w-full max-w-[450px]"
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}