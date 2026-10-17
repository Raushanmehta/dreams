"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { HouseIcon, StarIcon, BriefcaseIcon, ArrowLeftIcon, ArrowRightIcon } from "@/components/icons";
import siteData from "@/data/site.json";
import { teamAnimations } from "@/utils/animation/team.animation";

export interface SocialLink {
  platform: "linkedin" | "instagram" | "twitter" | "email";
  href: string;
  label: string;
}

export interface TeamStats {
  sold: string;
  rating: string;
  listings: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  description: string;
  location: string;
  stats: TeamStats;
  socials: SocialLink[];
}

export default function TeamSection() {
  const { team } = siteData;
  const members = team.members as TeamMember[];

  // Start on index 3 (Marcus Cole, displaying '04 / 05' matching the design screenshot)
  const [currentIndex, setCurrentIndex] = useState<number>(3);

  const current = members[currentIndex] || members[0];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? members.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === members.length - 1 ? 0 : prev + 1));
  };

  // Get other team members for the bottom-left thumbnails
  const thumbnails = members.filter((_, idx) => idx !== currentIndex).slice(0, 3);

  return (
    <section
      id="team"
      className="relative w-full bg-[#0a0a0a] text-white px-6 md:px-12 py-14 sm:py-18 md:py-20 font-sans select-none overflow-hidden border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 xl:gap-8 items-center">

          {/* Left Column: Number Counter, Vertical "OUR TEAMS" label, and Clickable Thumbnails */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col justify-between items-start lg:h-[500px] w-full">
            <div className="flex flex-col items-start">
              {/* Counter: e.g. 04 / 05 */}
              <div className="text-zinc-500 font-mono text-[13px] sm:text-[14px] tracking-[0.2em] font-medium select-none">
                {String(currentIndex + 1).padStart(2, "0")} /{" "}
                {String(members.length).padStart(2, "0")}
              </div>

              {/* Vertical Stacked "OUR TEAMS" Label */}
              <div className="hidden lg:flex flex-col items-center mt-12 select-none space-y-1">
                {team.title.split("").map((letter, i) =>
                  letter === " " ? (
                    <span key={i} className="h-2.5 block" />
                  ) : (
                    <span
                      key={i}
                      className="text-white font-bold text-[11px] tracking-wider leading-none select-none"
                    >
                      {letter}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Thumbnail Previews */}
            <div className="flex items-center gap-2.5 sm:gap-3 mt-4 lg:mt-auto">
              {thumbnails.map((item) => {
                const itemIndex = members.findIndex((r) => r.id === item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentIndex(itemIndex)}
                    aria-label={`Switch to review by ${item.name}`}
                    className={cn(
                      "group relative w-12 h-16 sm:w-14 sm:h-20 rounded-[14px] overflow-hidden border transition-all duration-300 cursor-pointer focus:outline-none flex-shrink-0",
                      "border-white/10 hover:border-white/50 opacity-75 hover:opacity-100 hover:scale-105 active:scale-95 shadow-md"
                    )}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Center Column: Prominent Portrait Photo with Rounded Corners */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[380px] sm:max-w-[395px] aspect-[3.2/4.05] rounded-[24px] sm:rounded-[26px] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] bg-zinc-950">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  variants={teamAnimations.portrait.variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={teamAnimations.portrait.transition}
                  className="relative w-full h-full"
                >
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    priority
                    sizes="(max-width: 640px) 380px, 420px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Details, Quote, Key Stats & Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between lg:h-[500px]">
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  variants={teamAnimations.info.variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={teamAnimations.info.transition}
                  className="flex flex-col items-start"
                >
                  <motion.div
                    initial={teamAnimations.eyebrow.initial}
                    whileInView={teamAnimations.eyebrow.whileInView}
                    viewport={teamAnimations.eyebrow.viewport}
                    transition={teamAnimations.eyebrow.transition}
                    className="inline-flex items-center gap-2 uppercase tracking-widest text-white mb-4"
                  >
                    <MapPin className="h-5 w-5 text-[#2563EB]" />
                    <span>{current.location}</span>
                  </motion.div>

                  {/* Team Member Name */}
                  <h3 className="text-3xl sm:text-4xl md:text-[36px] font-bold text-white tracking-tight">
                    {current.name}
                  </h3>

                  {/* Position / Role Badge */}
                  <div className="inline-flex items-center gap-2 mt-2 mb-5 sm:mb-6">
                    <span className="text-[#2563EB] text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 shadow-sm">
                      {current.position}
                    </span>
                  </div>

                  {/* Large Featured Description / Quote with fixed min-height */}
                  <div className="min-h-[76px] sm:min-h-[82px] flex items-start mb-4 w-full">
                    <p className="text-xl sm:text-2xl md:text-[23px] lg:text-[25px] font-semibold text-white/95 leading-[1.34] tracking-tight max-w-xl">
                      {current.description}
                    </p>
                  </div>

                  {/* Performance Stats: Properties Sold, Client Rating, Active Listings with SVG Icons */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 w-full max-w-xl">
                    {/* Properties Sold */}
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="flex items-center justify-center w-12 h-12 text-[#2563EB] flex-shrink-0">
                          <HouseIcon className="w-10 h-10" />
                        </span>
                        <p className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                          {current.stats.sold}
                        </p>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-zinc-400 font-medium uppercase tracking-wider mt-1">
                        Properties Sold
                      </p>
                    </div>

                    {/* Client Rating */}
                    <div className="border-x border-white/10 px-3 sm:px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="flex items-center justify-center w-12 h-12 text-amber-400 flex-shrink-0">
                          <StarIcon className="w-10 h-10 fill-amber-400" />
                        </span>
                        <p className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                          {current.stats.rating}
                        </p>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-zinc-400 font-medium uppercase tracking-wider mt-1">
                        Client Rating
                      </p>
                    </div>

                    {/* Active Listings */}
                    <div className="pl-1 sm:pl-0">
                      <div className="flex items-center gap-1.5">
                        <span className="flex items-center justify-center w-12 h-12 text-[#2563EB] flex-shrink-0">
                          <BriefcaseIcon className="w-10 h-10" />
                        </span>
                        <p className="text-xl sm:text-2xl font-bold text-white tracking-tight font-sans">
                          {current.stats.listings}
                        </p>
                      </div>
                      <p className="text-[10px] sm:text-[11px] text-zinc-400 font-medium uppercase tracking-wider mt-1">
                        Active Listings
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Actions Bar: Action Button, Social Media Icons & Prev/Next Arrows */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 pt-4 border-t border-white/10 w-full mt-auto">
              {/* Left group: Connect Button & Social Icons */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Connect / Consultation Button matching AboutSection */}
                <motion.a
                  href="#contact"
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.96 }}
                  className="relative group overflow-hidden rounded-full bg-[#1a1a1a] border border-white/10 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold tracking-wider text-white shadow-md flex items-center gap-2.5 select-none cursor-pointer"
                >
                  {/* Animated #2563EB background slide/glow fill with Framer Motion */}
                  <motion.span
                    variants={teamAnimations.buttonFill.variants}
                    transition={teamAnimations.buttonFill.transition}
                    className="absolute inset-0 bg-[#2563EB] origin-bottom rounded-full"
                  />

                  {/* Framer Motion subtle shine sweep across button on hover */}
                  <motion.span
                    variants={teamAnimations.buttonShine.variants}
                    transition={teamAnimations.buttonShine.transition}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] pointer-events-none"
                  />

                  {/* Text */}
                  <span className="relative z-10 uppercase tracking-wider text-xs sm:text-sm">
                    CONNECT
                  </span>

                  {/* Arrow container with spring translation */}
                  <motion.div
                    variants={teamAnimations.buttonArrow.variants}
                    transition={teamAnimations.buttonArrow.transition}
                    className="relative z-10 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/15"
                  >
                    <ArrowRightIcon className="w-3.5 h-3.5 text-white" />
                  </motion.div>
                </motion.a>

                {/* Social Media Icons */}
                <div className="flex items-center gap-2">
                  {current.socials.map((social) => (
                    <motion.a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${current.name}'s ${social.label}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.92 }}
                      className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 hover:border-[#2563EB]/60 hover:bg-[#2563EB]/15 text-zinc-400 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                    >
                      {social.platform === "linkedin" && (
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      )}
                      {social.platform === "instagram" && (
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      )}
                      {social.platform === "twitter" && (
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      )}
                      {social.platform === "email" && <Mail className="w-3.5 h-3.5" />}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Right group: Arrow Navigation Controls matching ServiceSection & TestimonialSection */}
              <div className="flex items-center gap-3">
                {/* Previous Button */}
                <motion.button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous team member"
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.94 }}
                  className="relative overflow-hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white select-none cursor-pointer"
                >
                  {/* Animated #2563EB background slide/glow fill */}
                  <motion.span
                    variants={teamAnimations.buttonFill.variants}
                    transition={teamAnimations.buttonFill.transition}
                    className="absolute inset-0 bg-[#2563EB] origin-bottom rounded-full"
                  />

                  {/* Subtle shine sweep */}
                  <motion.span
                    variants={teamAnimations.buttonShine.variants}
                    transition={teamAnimations.buttonShine.transition}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] pointer-events-none"
                  />

                  <motion.div
                    variants={teamAnimations.prevArrow.variants}
                    transition={teamAnimations.prevArrow.transition}
                    className="relative z-10 flex items-center justify-center"
                  >
                    <ArrowLeftIcon className="h-5 w-5 text-white" />
                  </motion.div>
                </motion.button>

                {/* Next Button */}
                <motion.button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next team member"
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.94 }}
                  className="relative overflow-hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white select-none cursor-pointer"
                >
                  {/* Animated #2563EB background slide/glow fill */}
                  <motion.span
                    variants={teamAnimations.buttonFill.variants}
                    transition={teamAnimations.buttonFill.transition}
                    className="absolute inset-0 bg-[#2563EB] origin-bottom rounded-full"
                  />

                  {/* Subtle shine sweep */}
                  <motion.span
                    variants={teamAnimations.buttonShine.variants}
                    transition={teamAnimations.buttonShine.transition}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] pointer-events-none"
                  />

                  <motion.div
                    variants={teamAnimations.nextArrow.variants}
                    transition={teamAnimations.nextArrow.transition}
                    className="relative z-10 flex items-center justify-center"
                  >
                    <ArrowRightIcon className="h-5 w-5 text-white" />
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}