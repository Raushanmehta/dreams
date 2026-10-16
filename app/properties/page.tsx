"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import PropertiesCard from "@/components/cards/PropertiesCard";
import BreadCrumb from "@/components/common/BreadCrumb";

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
    {
        id: "french-riviera-sunset-villa",
        title: "French Riviera Sunset Villa",
        countryCode: "FR",
        propertiesCount: "135",
        estatesCount: "22",
        imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Bespoke contemporary hillside sanctuary overlooking the Mediterranean sea",
        ctaText: "Explore Property",
    },
    {
        id: "tokyo-imperial-sky-haven",
        title: "Tokyo Imperial Sky Haven",
        countryCode: "JP",
        propertiesCount: "88",
        estatesCount: "14",
        imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
        imageAlt: "Biophilic architectural penthouse overlooking Tokyo skyline",
        ctaText: "Explore Property",
    },
];

export default function PropertiesPage() {
    return (
        <main>
            <BreadCrumb
                title="Prime Properties"
                subtitle="Curated portfolios of iconic estates and architectural landmarks across global capitals."
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
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 uppercase tracking-widest text-[#11131a] font-semibold mb-4"
                            >
                                <Sparkles className="h-5 w-5 text-[#2563EB]" />
                                <span>Featured Properties</span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-4xl sm:text-5xl md:text-[56px] font-medium tracking-tight text-[#11131a] leading-[1.15] uppercase"
                            >
                                <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2">
                                    <span>Exclusive Estates &amp;</span>
                                </div>
                                <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2 mt-2 sm:mt-3">
                                    <span>Luxury</span>
                                    <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.35)] select-none">
                                        <span className="inline-block skew-x-14 md:skew-x-18">
                                            Properties
                                        </span>
                                    </span>
                                    {/* SVG Icon placed OUTSIDE the blue background on the right side */}
                                    <motion.span
                                        animate={{ rotate: 360 }}
                                        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                        className="inline-flex items-center justify-center text-[#2563EB] drop-shadow-[0_0_12px_rgba(37,99,235,0.4)] ml-0.5 sm:ml-1"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563EB]"
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
                            <p className="text-[#52525b] text-sm sm:text-base max-w-sm leading-relaxed">
                                Explore our handpicked collection of premier architectural sanctuaries, waterfront
                                estates, and prestigious luxury properties worldwide.
                            </p>
                        </motion.div>
                    </div>

                    {/* Properties Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-4">
                        {PROPERTIES_DATA.map((property) => (
                            <PropertiesCard
                                key={property.id}
                                title={property.title}
                                countryCode={property.countryCode}
                                propertiesCount={property.propertiesCount}
                                estatesCount={property.estatesCount}
                                imageUrl={property.imageUrl}
                                imageAlt={property.imageAlt}
                                ctaText={property.ctaText}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}