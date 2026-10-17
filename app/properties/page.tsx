"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import PropertiesCard, { type PropertyDestination } from "@/components/cards/PropertiesCard";
import BreadCrumb from "@/components/common/BreadCrumb";
import { FourPointStarIcon } from "@/components/icons";
import siteData from "@/data/site.json";
import { propertiesAnimations } from "@/utils/animation/properties.animation";

export default function PropertiesPage() {
    const { properties } = siteData;
    const propertiesList = properties.propertiesList as PropertyDestination[];

    return (
        <main>
            <BreadCrumb
                title={properties.pageTitle || properties.badgeText}
                subtitle={properties.pageSubtitle || properties.description}
            />
            <section
                className="relative w-full bg-[#f4f4f2] text-[#11131a] px-6 md:px-12 py-14 sm:py-18 md:py-20 font-sans select-none overflow-hidden border-t border-zinc-200"
            >
                {/* Subtle ambient light glow */}
                <div className="absolute top-0 right-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-[#2563EB]/5 blur-[160px] pointer-events-none" />

                <div className="relative mx-auto max-w-7xl w-full">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-8">
                        <div>
                            <motion.div
                                initial={propertiesAnimations.eyebrow.initial}
                                whileInView={propertiesAnimations.eyebrow.whileInView}
                                viewport={{ once: true }}
                                transition={propertiesAnimations.eyebrow.transition}
                                className="inline-flex items-center gap-2 uppercase tracking-widest text-[#11131a] font-semibold mb-4"
                            >
                                <Sparkles className="h-5 w-5 text-[#2563EB]" />
                                <span>{properties.badgeText}</span>
                            </motion.div>

                            <motion.h2
                                initial={propertiesAnimations.headline.initial}
                                whileInView={propertiesAnimations.headline.whileInView}
                                viewport={{ once: true }}
                                transition={propertiesAnimations.headline.transition}
                                className="text-4xl sm:text-5xl md:text-[56px] font-medium tracking-tight text-[#11131a] leading-[1.15] uppercase"
                            >
                                <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2">
                                    <span>{properties.headline.line1}</span>
                                </div>
                                <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2 mt-2 sm:mt-3">
                                    <span>{properties.headline.line2Prefix}</span>
                                    <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.35)] select-none">
                                        <span className="inline-block skew-x-14 md:skew-x-18">
                                            {properties.headline.line2Badge}
                                        </span>
                                    </span>
                                    {/* SVG Icon placed OUTSIDE the blue background on the right side */}
                                    <motion.span
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                        className="inline-flex items-center justify-center text-[#2563EB] drop-shadow-[0_0_12px_rgba(37,99,235,0.4)] ml-0.5 sm:ml-1"
                                    >
                                        <FourPointStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563EB]" />
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
                            <p className="text-[#52525b] text-sm sm:text-base max-w-sm leading-relaxed">
                                {properties.description}
                            </p>
                        </motion.div>
                    </div>

                    {/* Properties Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4">
                        {propertiesList.map((property) => (
                            <PropertiesCard
                                key={property.id}
                                id={property.id}
                                title={property.title}
                                countryCode={property.countryCode}
                                propertiesCount={property.propertiesCount}
                                estatesCount={property.estatesCount}
                                imageUrl={property.imageUrl}
                                imageAlt={property.imageAlt}
                                ctaText={property.ctaText}
                                href={`/properties/${property.id}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}