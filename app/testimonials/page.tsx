"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import BreadCrumb from "@/components/common/BreadCrumb";
import { FourPointStarIcon } from "@/components/icons";
import { TestimonialCard } from "@/components/cards";
import siteData from "@/data/site.json";
import { testimonialAnimations } from "@/utils/animation/testimonial.animation";

export default function TestimonialsPage(): React.JSX.Element {
    const { testimonials } = siteData;

    return (
        <main>
            {/* Breadcrumb navigation */}
            <BreadCrumb
                title={testimonials.breadcrumb.title}
                subtitle={testimonials.breadcrumb.subtitle}
            />

            {/* Testimonials section */}
            <section className="relative w-full bg-[#f4f4f2] px-4 md:px-12 py-8 md:py-10 lg:py-20 font-sans select-none overflow-hidden border-t border-zinc-200/80">
                {/* Background ambient glow */}
                <div className="absolute top-1/4 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-[#2563EB]/5 blur-[160px] pointer-events-none" />

                <div className="relative mx-auto max-w-7xl w-full">
                    {/* Section header container */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10">
                        <div>
                            {/* Eyebrow badge */}
                            <motion.div
                                initial={testimonialAnimations.eyebrow.initial}
                                whileInView={testimonialAnimations.eyebrow.whileInView}
                                viewport={testimonialAnimations.eyebrow.viewport}
                                transition={testimonialAnimations.eyebrow.transition}
                                className="inline-flex items-center gap-2 uppercase tracking-widest font-semibold text-[#11131a] mb-3"
                            >
                                <Sparkles className="h-5 w-5 text-[#2563EB]" />
                                <span>{testimonials.badgeText}</span>
                            </motion.div>

                            {/* Stepped headline */}
                            <motion.h2
                                initial={testimonialAnimations.headline.initial}
                                whileInView={testimonialAnimations.headline.whileInView}
                                viewport={testimonialAnimations.headline.viewport}
                                transition={testimonialAnimations.headline.transition}
                                className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1a1a1a] leading-[1.15] uppercase"
                            >
                                {(testimonials.headline as { line1?: string }).line1 && (
                                    <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2">
                                        <span>{(testimonials.headline as { line1?: string }).line1}</span>
                                    </div>
                                )}
                                <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2 mt-2 sm:mt-3">
                                    <span>{testimonials.headline.line2Prefix}</span>
                                    {/* Tilted badge */}
                                    <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.4)] select-none">
                                        <span className="inline-block skew-x-14 md:skew-x-18">
                                            {testimonials.headline.line2Badge}
                                        </span>
                                    </span>
                                    {/* Rotating star */}
                                    <motion.span
                                        animate={testimonialAnimations.spin.animate}
                                        transition={testimonialAnimations.spin.transition}
                                        className="inline-flex items-center justify-center text-[#1a1a1a] ml-0.5 sm:ml-1"
                                    >
                                        <FourPointStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#1a1a1a]" />
                                    </motion.span>
                                </div>
                            </motion.h2>
                        </div>

                        {/* Description container */}
                        {(testimonials as { description?: string }).description && (
                            <motion.div
                                initial={testimonialAnimations.description.initial}
                                whileInView={testimonialAnimations.description.whileInView}
                                viewport={testimonialAnimations.description.viewport}
                                transition={testimonialAnimations.description.transition}
                                className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
                            >
                                <p className="text-zinc-600 text-sm sm:text-base max-w-sm leading-relaxed">
                                    {(testimonials as { description?: string }).description}
                                </p>
                            </motion.div>
                        )}
                    </div>

                    {/* Testimonials grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-5 items-stretch">
                        {testimonials.testimonialsList.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: index * 0.06 }}
                                className="flex"
                            >
                                <TestimonialCard
                                    testimonial={item}
                                    className="w-full sm:w-full md:w-full"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}