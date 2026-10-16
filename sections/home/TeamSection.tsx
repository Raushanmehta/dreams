"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

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

const TEAMS: TeamMember[] = [
  {
    id: "julian-vance",
    name: "Julian Vance",
    position: "Principal Estates Director",
    image: "/images/review-sweater.jpg",
    description:
      "The sheer caliber of craftsmanship and discretion is unmatched. We curate private off-market sanctuaries for discerning global collectors.",
    location: "Mayfair, London & Monaco",
    stats: {
      sold: "142",
      rating: "4.9",
      listings: "36",
    },
    socials: [
      { platform: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
      { platform: "instagram", href: "https://instagram.com", label: "Instagram" },
      { platform: "twitter", href: "https://x.com", label: "X (Twitter)" },
      { platform: "email", href: "mailto:julian@luxuryestates.com", label: "Direct Email" },
    ],
  },
  {
    id: "brian-hanley",
    name: "Brian Hanley",
    position: "Managing Partner — Acquisitions",
    image: "/images/review-vneck.jpg",
    description:
      "Every acquisition is conducted with white-glove precision. We set the gold standard for premier architectural and residential masterworks.",
    location: "Beverly Hills & Bel Air, CA",
    stats: {
      sold: "185",
      rating: "4.9",
      listings: "42",
    },
    socials: [
      { platform: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
      { platform: "instagram", href: "https://instagram.com", label: "Instagram" },
      { platform: "twitter", href: "https://x.com", label: "X (Twitter)" },
      { platform: "email", href: "mailto:brian@luxuryestates.com", label: "Direct Email" },
    ],
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    position: "Head of Private Wealth & Waterfront",
    image: "/images/review-blue.jpg",
    description:
      "Curating access to private coastal havens and ultra-prime waterfront villas that never appear on public real estate listings.",
    location: "Monaco & French Riviera",
    stats: {
      sold: "88",
      rating: "5.0",
      listings: "24",
    },
    socials: [
      { platform: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
      { platform: "instagram", href: "https://instagram.com", label: "Instagram" },
      { platform: "twitter", href: "https://x.com", label: "X (Twitter)" },
      { platform: "email", href: "mailto:elena@luxuryestates.com", label: "Direct Email" },
    ],
  },
  {
    id: "marcus-cole",
    name: "Marcus Cole",
    position: "Lead Architectural Designer",
    image: "/images/review-marcus.jpg",
    description:
      "A true time-saver. I can focus on my core logic instead of pixel-pushing. Highly recommended.",
    location: "Zurich, Switzerland",
    stats: {
      sold: "95",
      rating: "4.8",
      listings: "28",
    },
    socials: [
      { platform: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
      { platform: "instagram", href: "https://instagram.com", label: "Instagram" },
      { platform: "twitter", href: "https://x.com", label: "X (Twitter)" },
      { platform: "email", href: "mailto:marcus@luxuryestates.com", label: "Direct Email" },
    ],
  },
  {
    id: "sophia-laurent",
    name: "Sophia Laurent",
    position: "Chief Strategy & Heritage Officer",
    image: "/images/testimonial-sarah.jpg",
    description: "Exceptional market foresight paired with world-class architectural curation. Delivering extraordinary residential value across generations.",
    location: "Paris & Lake Como, Italy",
    stats: {
      sold: "120",
      rating: "4.9",
      listings: "31",
    },
    socials: [
      { platform: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
      { platform: "instagram", href: "https://instagram.com", label: "Instagram" },
      { platform: "twitter", href: "https://x.com", label: "X (Twitter)" },
      { platform: "email", href: "mailto:sophia@luxuryestates.com", label: "Direct Email" },
    ],
  },
];

export default function TeamSection() {
  // Start on index 3 (Marcus Cole, displaying '04 / 05' matching the design screenshot)
  const [currentIndex, setCurrentIndex] = useState<number>(3);

  const current = TEAMS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TEAMS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TEAMS.length - 1 ? 0 : prev + 1));
  };

  // Get other team members for the bottom-left thumbnails
  const thumbnails = TEAMS.filter((_, idx) => idx !== currentIndex).slice(0, 3);

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
                {String(TEAMS.length).padStart(2, "0")}
              </div>

              {/* Vertical Stacked "OUR TEAMS" Label */}
              <div className="hidden lg:flex flex-col items-center mt-12 select-none space-y-1">
                {"OUR TEAMS".split("").map((letter, i) =>
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
                const itemIndex = TEAMS.findIndex((r) => r.id === item.id);
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
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={current.image}
                    alt={current.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-center"
                    priority
                  />
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Location, Name, Position, Description, Stats, Button, Socials & Navigation */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full lg:h-[500px] py-1">
            {/* Locked Content Container to eliminate any layout shift */}
            <div className="w-full min-h-[385px] sm:min-h-[390px] flex flex-col justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-start"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2  uppercase tracking-widest text-white  mb-4"
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
                          <svg
                            className="w-10 h-10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                          </svg>
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
                          <svg
                            className="w-10 h-10 fill-amber-400"
                            viewBox="0 0 24 24"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
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
                          <svg
                            className="w-10 h-10"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                          </svg>
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
                    variants={{
                      rest: { scaleY: 0, opacity: 0 },
                      hover: { scaleY: 1, opacity: 1 },
                    }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 bg-[#2563EB] origin-bottom rounded-full"
                  />

                  {/* Framer Motion subtle shine sweep across button on hover */}
                  <motion.span
                    variants={{
                      rest: { x: "-120%", opacity: 0 },
                      hover: { x: "160%", opacity: 0.3 },
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] pointer-events-none"
                  />

                  {/* Text */}
                  <span className="relative z-10 uppercase tracking-wider text-xs sm:text-sm">
                    CONNECT
                  </span>

                  {/* Arrow container with spring translation */}
                  <motion.div
                    variants={{
                      rest: { x: 0 },
                      hover: { x: 3 },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className="relative z-10 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/15"
                  >
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
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
                    variants={{
                      rest: { scaleY: 0, opacity: 0 },
                      hover: { scaleY: 1, opacity: 1 },
                    }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 bg-[#2563EB] origin-bottom rounded-full"
                  />

                  {/* Subtle shine sweep */}
                  <motion.span
                    variants={{
                      rest: { x: "-120%", opacity: 0 },
                      hover: { x: "160%", opacity: 0.3 },
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] pointer-events-none"
                  />

                  <motion.div
                    variants={{
                      rest: { x: 0 },
                      hover: { x: -3 },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className="relative z-10 flex items-center justify-center"
                  >
                    <ArrowLeft className="h-5 w-5 text-white" />
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
                    variants={{
                      rest: { scaleY: 0, opacity: 0 },
                      hover: { scaleY: 1, opacity: 1 },
                    }}
                    transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 bg-[#2563EB] origin-bottom rounded-full"
                  />

                  {/* Subtle shine sweep */}
                  <motion.span
                    variants={{
                      rest: { x: "-120%", opacity: 0 },
                      hover: { x: "160%", opacity: 0.3 },
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] pointer-events-none"
                  />

                  <motion.div
                    variants={{
                      rest: { x: 0 },
                      hover: { x: 3 },
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    className="relative z-10 flex items-center justify-center"
                  >
                    <ArrowRight className="h-5 w-5 text-white" />
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section >
  );
}