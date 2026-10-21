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
        line2Suffix?: string;
    };
    description?: string;
    clientsList: ClientItem[];
}

interface ClientSectionProps {
    data?: ClientSectionData;
}

export default function ClientSection({ data = siteData.clients }: ClientSectionProps): React.JSX.Element {
    const clients = data.clientsList || [];

    return (
        <section className="relative w-full bg-[#f4f4f2] text-[#11131a] px-4 md:px-12 py-8 md:py-10 lg:py-20 font-sans select-none overflow-hidden border-t border-zinc-200">
            <div className="relative mx-auto max-w-7xl w-full">
                
                <div className="mb-8 sm:mb-10 text-left">
                    <div className="flex flex-col items-start text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 uppercase tracking-widest text-[#11131a] font-semibold mb-4"
                        >
                            <Sparkles className="h-5 w-5 text-[#2563EB]" />
                            <span>{data.badgeText}</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55, delay: 0.08 }}
                            className="text-4xl sm:text-5xl md:text-[56px] font-medium tracking-tight text-[#11131a] leading-[1.15] uppercase text-left"
                        >
                            <div className="flex flex-wrap items-center justify-start gap-x-2.5 sm:gap-x-3 gap-y-2">
                                <span>{data.headline.line1}</span>
                                <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.35)] select-none">
                                    <span className="inline-block skew-x-14 md:skew-x-18">
                                        {data.headline.line2Badge}
                                    </span>
                                </span>
                                {/* SVG Icon placed OUTSIDE */}
                                <motion.span
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                    className="inline-flex items-center justify-center text-[#2563EB] drop-shadow-[0_0_12px_rgba(37,99,235,0.4)] ml-0.5 sm:ml-1"
                                >
                                    <FourPointStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563EB]" />
                                </motion.span>
                                {data.headline.line2Suffix && (
                                    <span>{data.headline.line2Suffix}</span>
                                )}
                            </div>
                        </motion.h2>
                    </div>
                </div>

                {/* Clients grid 4x */}
                <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-5">
                    {clients.map((client, idx) => (
                        <motion.div
                            key={client.id}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45, delay: idx * 0.05 }}
                            whileHover={{ y: -6, transition: { duration: 0.25 } }}
                            className="group relative h-36 sm:h-44 md:h-48 rounded-2xl sm:rounded-3xl bg-white border border-zinc-200/80 p-6 flex flex-col items-center justify-center shadow-xs hover:shadow-xl hover:border-[#2563EB]/40 transition-all duration-300 cursor-pointer overflow-hidden"
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
                            <span className="text-[11px] sm:text-xs font-semibold text-zinc-500 group-hover:text-[#2563EB] tracking-wider uppercase mt-2 sm:mt-3 transition-colors duration-200 truncate max-w-full">
                                {client.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}