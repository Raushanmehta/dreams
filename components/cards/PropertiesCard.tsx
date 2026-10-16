"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PropertiesCardProps {
    title?: string;
    countryCode?: string;
    propertiesCount?: string | number;
    estatesCount?: string | number;
    subtitle?: string;
    imageUrl?: string;
    imageAlt?: string;
    ctaText?: string;
    href?: string;
    onExplore?: () => void;
    className?: string;
}

export default function PropertiesCard({
    title = "Beverly Hills Modern Villa",
    countryCode = "US",
    propertiesCount,
    estatesCount,
    subtitle,
    imageUrl = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    imageAlt = "Luxury modern architectural villa with infinity pool",
    ctaText = "Explore Property",
    href,
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
                {/* Cinematic Gradient Overlay: clear upper sky, deep black shade at bottom for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-45% to-transparent pointer-events-none" />
            </div>

            {/* Card Content Container */}
            <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6">
                {/* Title + Country Code Badge */}
                <div className="flex items-center gap-2.5">
                    <h3 className="text-2xl sm:text-[20px] md:text-[24px] font-semibold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] leading-tight">
                        {title}
                    </h3>
                    {countryCode && (
                        <span className="inline-flex items-center justify-center rounded-md border border-white/60 bg-white/10 px-2 py-0.5 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white backdrop-blur-[2px]">
                            {countryCode}
                        </span>
                    )}
                </div>

                {/* Subtitle: Properties / Real Estate Stats */}
                <p className="mt-1 text-[14px] sm:text-[15px] font-medium text-white/90 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
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
                            <ArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );

    if (href) {
        return (
            <Link href={href} className="inline-block focus:outline-none">
                {cardContent}
            </Link>
        );
    }

    return cardContent;
}
