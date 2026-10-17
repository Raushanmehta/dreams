"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

export interface PropertyDestination {
    id?: string;
    title?: string;
    countryCode?: string;
    propertiesCount?: string | number;
    estatesCount?: string | number;
    subtitle?: string;
    imageUrl?: string;
    imageAlt?: string;
    ctaText?: string;
    href?: string;
}

export interface PropertiesCardProps extends PropertyDestination {
    property?: PropertyDestination;
    index?: number;
    onExplore?: () => void;
    className?: string;
}

export default function PropertiesCard({
    property,
    index,
    title = property?.title || "Beverly Hills Modern Villa",
    countryCode = property?.countryCode || "US",
    propertiesCount = property?.propertiesCount,
    estatesCount = property?.estatesCount,
    subtitle = property?.subtitle,
    imageUrl = property?.imageUrl || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    imageAlt = property?.imageAlt || "Luxury modern architectural villa with infinity pool",
    ctaText = property?.ctaText || "Explore Property",
    href = property?.href || (property?.id ? `/properties/${property.id}` : "/properties/villa-on-hollywood-boulevard"),
    onExplore,
    className,
}: PropertiesCardProps) {
    const cardContent = (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
                "group relative w-full h-[350px] sm:h-[420px] md:h-[450px] overflow-hidden rounded-[28px] sm:rounded-[32px]",
                "border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.45)] select-none cursor-pointer",
                className
            )}
        >
            {/* Background Image with smooth hover scale */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    priority
                    unoptimized
                />
                {/* Cinematic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </div>

            {/* Country Pill Flag Badge */}
            <div className="absolute top-5 left-5 sm:top-6 sm:left-6 z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-3.5 py-1.5 shadow-lg">
                    <span className="text-xs font-semibold tracking-wider text-white">
                        {countryCode}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] shadow-[0_0_8px_rgba(37,99,235,0.8)]" />
                </div>
            </div>

            {/* Bottom Content Area */}
            <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-6 sm:p-7">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug drop-shadow-md group-hover:text-white transition-colors">
                    {title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1.5 font-medium tracking-wide">
                    {subtitle || `${propertiesCount || 148} Properties • ${estatesCount || 24} Estates`}
                </p>

                {/* Explore Button: Glassmorphic Frosted Blur */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 sm:mt-5"
                >
                    <div
                        onClick={onExplore}
                        className="group/btn relative flex w-full items-center justify-between overflow-hidden rounded-xl sm:rounded-2xl bg-white/15 hover:bg-white/25 active:bg-white/20 border border-white/25 backdrop-blur-xl px-5 py-3 sm:py-3 text-white shadow-[0_8px_32px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.3)] transition-all duration-300 group-hover:border-white/40 group-hover:shadow-[0_12px_36px_rgba(0,0,0,0.45)]"
                    >
                        {/* Glass top reflection highlight */}
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/25 via-white/5 to-transparent" />

                        <span className="relative z-10 text-[15px] sm:text-base font-medium tracking-wide text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                            {ctaText}
                        </span>
                        <motion.div
                            className="relative z-10 flex items-center justify-center"
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                            <ArrowRightIcon className="h-5 w-5 text-white transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );

    if (href) {
        return (
            <Link href={href} className="block w-full focus:outline-none">
                {cardContent}
            </Link>
        );
    }

    return cardContent;
}
