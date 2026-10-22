"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FourPointStarIcon } from "@/components/icons";
import { TeamCard, type TeamMember } from "@/components/cards/TeamCard";
import BreadCrumb from "@/components/common/BreadCrumb";
import { site } from "@/data";

export default function TeamPage() {
    const team = site.team;
    const members = (team.members || []) as TeamMember[];

    const badgeText = team.badgeText || team.title || "Our Teams";
    const headlinePrefix = team.headline?.prefix || "Meet Our";
    const headlineBadge = team.headline?.badge || "Curators";

    return (
        <main>
            <BreadCrumb title="Our Team" subtitle="Driven by passion, defined by excellence." />
            <section className="relative w-full bg-[#f4f4f2] px-4 md:px-12 py-8 md:py-10 lg:py-20 text-[#11131a] font-sans select-none overflow-hidden border-t border-zinc-200">
                <div className="max-w-7xl mx-auto w-full">
                    {/* Section Header All data */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 text-left">
                        <div className="flex flex-col items-start text-left">
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="inline-flex items-center gap-2 uppercase tracking-widest text-[#11131a] font-semibold mb-4"
                            >
                                <Sparkles className="h-5 w-5 text-[#2563EB]" />
                                <span>{badgeText}</span>
                            </motion.div>

                            <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#11131a] leading-[1.15] uppercase text-left">
                                <div className="flex flex-wrap items-center justify-start gap-x-2.5 sm:gap-x-3 gap-y-2">
                                    <span>{headlinePrefix}</span>
                                    <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.35)] select-none">
                                        <span className="inline-block skew-x-14 md:skew-x-18">
                                            {headlineBadge}
                                        </span>
                                    </span>
                                    <motion.span
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                                        className="inline-flex items-center justify-center text-[#2563EB] drop-shadow-[0_0_12px_rgba(37,99,235,0.4)] ml-0.5 sm:ml-1"
                                    >
                                        <FourPointStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563EB]" />
                                    </motion.span>
                                </div>
                            </motion.h2>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-5">
                        {members.map((member, index) => (
                            <TeamCard
                                key={member.id}
                                member={member}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}