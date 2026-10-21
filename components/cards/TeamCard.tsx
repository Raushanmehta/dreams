"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@/components/icons";

export interface SocialLink {
  platform: "linkedin" | "instagram" | "twitter" | "email";
  href: string;
  label: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  description: string;
  location: string;
  socials: SocialLink[];
}

export interface TeamCardProps {
  member: TeamMember;
  index?: number;
  className?: string;
  connectButtonText?: string;
  connectButtonHref?: string;
}

// Ultra-smooth luxury cubic-bezier curve (similar to Apple iOS drawer physics)
const easeSmooth = [0.32, 0.72, 0, 1] as const;

const overlayVariants: Variants = {
  rest: {
    y: "100%",
    transition: {
      duration: 0.6,
      ease: easeSmooth,
    },
  },
  hover: {
    y: "0%",
    transition: {
      duration: 0.6,
      ease: easeSmooth,
    },
  },
};

const bottomInfoVariants: Variants = {
  rest: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.42,
      ease: easeSmooth,
    },
  },
  hover: {
    y: 16,
    opacity: 0,
    transition: {
      duration: 0.35,
      ease: easeSmooth,
    },
  },
};

const imageVariants: Variants = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.75,
      ease: easeSmooth,
    },
  },
  hover: {
    scale: 1.07,
    transition: {
      duration: 0.75,
      ease: easeSmooth,
    },
  },
};

const contentVariants: Variants = {
  rest: {
    y: 16,
    opacity: 0,
    transition: {
      duration: 0.28,
      ease: easeSmooth,
    },
  },
  hover: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      delay: 0.1,
      ease: easeSmooth,
    },
  },
};

const actionsVariants: Variants = {
  rest: {
    y: 16,
    opacity: 0,
    transition: {
      duration: 0.28,
      ease: easeSmooth,
    },
  },
  hover: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
      delay: 0.15,
      ease: easeSmooth,
    },
  },
};

export function TeamCard({
  member,
  index = 0,
  className = "",
  connectButtonText = "Connect",
  connectButtonHref = "#contact",
}: TeamCardProps) {
  const [isTapped, setIsTapped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="w-full h-full"
    >
      <motion.article
        initial="rest"
        whileHover="hover"
        animate={isTapped ? "hover" : "rest"}
        onClick={() => setIsTapped((prev) => !prev)}
        className={cn(
          "group relative w-full aspect-[3/3.8] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-zinc-950 border border-white/10  cursor-pointer select-none transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] transform-gpu",
          className
        )}
      >
        {/* Background Portrait Image with smooth zoom */}
        <motion.div variants={imageVariants} className="absolute inset-0 w-full h-full">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top"
            priority={index < 3}
          />
          {/* Subtle Ambient Shadow Gradient for clean default text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />
        </motion.div>

        {/* Normal State: Name & Position shown at card bottom */}
        <motion.div
          variants={bottomInfoVariants}
          className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10 pointer-events-none"
        >
          {/* Location chip */}
          <div className="flex items-center gap-1.5 text-zinc-400 text-xs tracking-wider uppercase mb-1.5 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
            <span className="truncate">{member.location}</span>
          </div>

          {/* Member Name */}
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
            {member.name}
          </h3>

          {/* Member Position */}
          <p className="text-xs sm:text-sm text-zinc-300 font-medium tracking-wide mt-1 uppercase">
            {member.position}
          </p>
        </motion.div>

        {/* Hover State: Black background slides UP smoothly from bottom to top */}
        <motion.div
          variants={overlayVariants}
          className="absolute inset-0 z-20 bg-black/95 sm:bg-black/95 p-5 sm:p-6 flex flex-col justify-between backdrop-blur-md overflow-y-auto pointer-events-auto"
        >
          {/* Header: Role Badge, Location, Name, Bio */}
          <motion.div variants={contentVariants} className="flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-1 text-zinc-400 text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
              <span className="truncate max-w-[130px]">{member.location}</span>
            </div>

            <h3 className="text-2xl sm:text-[26px] font-bold text-white tracking-tight leading-tight mt-1">
              {member.name}
            </h3>

            <div className="w-10 h-[2px] bg-[#2563EB] my-3 rounded-full" />
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="inline-block rounded-full text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-[#2563EB]">
                {member.position}
              </span>
            </div>

            {/* Member Description / Bio */}
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed line-clamp-5">
              &ldquo;{member.description}&rdquo;
            </p>
          </motion.div>

          {/* Bottom Actions: Socials & Connect Button */}
          <motion.div
            variants={actionsVariants}
            className="flex items-center justify-between gap-3 pt-3 border-t border-white/10 mt-auto"
          >
            {/* Social Links */}
            <div className="flex items-center gap-1.5">
              {member.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`${member.name}'s ${social.label}`}
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 hover:border-[#2563EB] hover:bg-[#2563EB] text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  {social.platform === "linkedin" && (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}
                  {social.platform === "instagram" && (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {social.platform === "twitter" && (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                  {social.platform === "email" && <Mail className="w-4 h-4" />}
                </a>
              ))}
            </div>

            {/* Quick Connect Button */}
            <a
              href={connectButtonHref}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-[11px] font-semibold tracking-wider uppercase transition-colors"
            >
              <span>{connectButtonText}</span>
              <ArrowRightIcon className="w-3 h-3" />
            </a>
          </motion.div>
        </motion.div>
      </motion.article>
    </motion.div>
  );
}

export default TeamCard;
