"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FourPointStarIcon } from "@/components/icons";
import siteData from "@/data/site.json";

export interface ClientItem {
    id: number;
    name: string;
    logo: string;
}

export interface ClientSectionData {
    badgeText: string;
    headline: {
        line1: string;
        line2Badge: string;
        line2Suffix: string;
    };
    description: string;
    clientsList: ClientItem[];
}

interface ClientSectionProps {
    data?: ClientSectionData;
}

export default function ClientSection({ data = siteData.clients }: ClientSectionProps): React.JSX.Element {
    const clients = data.clientsList || [];

    return (
        <section className="relative w-full bg-[#f4f4f2] px-6 md:px-12 py-14 sm:py-18 md:py-20 font-sans select-none overflow-hidden border-t border-zinc-200/80">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-blue-100/40 via-purple-100/30 to-transparent rounded-full blur-[140px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center text-center">
                {/* Eyebrow badge */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 uppercase tracking-widest text-[#11131a] font-semibold mb-4"
                >
                    <Sparkles className="h-5 w-5 text-[#2563EB]" />
                    <span>{data.badgeText}</span>
                </motion.div>

                {/* Main headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.08 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1a1a1a] leading-[1.18] uppercase"
                >
                    <span className="block sm:inline">{data.headline.line1}</span>{" "}
                    <span className="inline-flex items-center gap-x-2.5 sm:gap-x-3 mt-1.5 sm:mt-0">
                        {/* Tilted Sliced Badge */}
                        <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.4)] select-none">
                            <span className="inline-block skew-x-14 md:skew-x-18">
                                {data.headline.line2Badge}
                            </span>
                        </span>
                        {/* Spinning Star Icon */}
                        <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
                            className="inline-flex items-center justify-center shrink-0 ml-0.5"
                        >
                            <FourPointStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#1a1a1a]" />
                        </motion.span>
                    </span>{" "}
                    <span className="block sm:inline mt-1.5 sm:mt-0">{data.headline.line2Suffix}</span>
                </motion.h2>

                {/* Subtitle description */}
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.16 }}
                    className="mt-4 text-xs sm:text-sm md:text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed"
                >
                    {data.description}
                </motion.p>

                {/* Clients grid 4x2 */}
                <div className="mt-8 sm:mt-10 w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-5">
                    {clients.map((client, idx) => (
                        <motion.div
                            key={client.id}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: idx * 0.05 }}
                            whileHover={{ y: -6, transition: { duration: 0.25 } }}
                            className="group relative h-36 sm:h-44 md:h-48 rounded-2xl sm:rounded-3xl bg-white border border-zinc-200/80 p-6 flex flex-col items-center justify-center shadow-2xs hover:shadow-xl hover:border-blue-200/90 transition-all duration-300 cursor-pointer overflow-hidden"
                        >
                            {/* Top accent glow */}
                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Client Logo Image */}
                            <div className="relative w-full h-16 sm:h-20 md:h-24 flex items-center justify-center">
                                <Image
                                    src={client.logo}
                                    alt={client.name}
                                    fill
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                    className="object-contain filter contrast-105 group-hover:scale-108 transition-transform duration-300"
                                />
                            </div>

                            {/* Client Name Label */}
                            <span className="text-[11px] sm:text-xs font-semibold text-zinc-400 group-hover:text-[#2563EB] tracking-wider uppercase mt-2 sm:mt-3 transition-colors duration-200 truncate max-w-full">
                                {client.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}