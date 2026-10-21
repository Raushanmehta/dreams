"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FourPointStarIcon } from "@/components/icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { TeamCard, type TeamMember, type SocialLink } from "@/components/cards/TeamCard";
import siteData from "@/data/site.json";

export type { TeamMember, SocialLink };

export interface TeamSectionData {
  title?: string;
  badgeText?: string;
  badgeIcon?: string;
  headline?: {
    prefix?: string;
    badge?: string;
    icon?: string;
  };
  connectButtonText?: string;
  connectButtonHref?: string;
  members: TeamMember[];
}

export interface TeamSectionProps {
  data?: TeamSectionData;
}

export default function TeamSection({ data }: TeamSectionProps = {}): React.JSX.Element {
  const team = (data || siteData.team) as TeamSectionData;
  const members = (team.members || []) as TeamMember[];

  const badgeText = team.badgeText || team.title || "Our Teams";
  const headlinePrefix = team.headline?.prefix || "Meet Our";
  const headlineBadge = team.headline?.badge || "Curators";
  const connectButtonText = team.connectButtonText || "Connect";
  const connectButtonHref = team.connectButtonHref || "#contact";

  return (
    <section className="relative w-full bg-[#0a0a0a] px-4 md:px-12 py-8 md:py-10 lg:py-20 text-white font-sans select-none overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header - All data comes dynamically from JSON */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10">
          <div>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 uppercase tracking-widest text-white mb-4"
            >
              <Sparkles className="h-5 w-5 text-[#2563EB]" />
              <span>{badgeText}</span>
            </motion.div>

            {/* Headline */}
            <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.15] uppercase">
              <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2">
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

        {/* Shadcn UI Carousel: Drag & Swipe with NO buttons and NO pagination */}
        <div className="relative w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full select-none cursor-grab active:cursor-grabbing"
          >
            <CarouselContent className="-ml-4 sm:-ml-5 md:-ml-5">
              {members.map((member, index) => (
                <CarouselItem
                  key={member.id}
                  className="pl-4 sm:pl-5 md:pl-5 basis-[100%] sm:basis-1/2 lg:basis-1/3 xl:basis-1/3"
                >
                  <TeamCard
                    member={member}
                    index={index}
                    connectButtonText={connectButtonText}
                    connectButtonHref={connectButtonHref}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}