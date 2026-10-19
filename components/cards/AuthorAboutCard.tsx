"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { blogDetailAnimations } from "@/utils/animation/blog-detail.animation";

export interface AuthorProfile {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  signatureText?: string;
  socials?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface AuthorAboutCardProps {
  author?: AuthorProfile;
  className?: string;
}

const defaultAuthor: AuthorProfile = {
  name: "Erin Carter",
  role: "Senior Real Estate Advisor & Curator",
  bio: "Meet Erin Carter, an esteemed luxury property advisor and design curator at Dreams. With over 14 years of advisory experience across prime international waterfront sanctuaries, she helps discerning clients acquire generational architectural masterworks.",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  signatureText: "Carter",
  socials: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
};

/**
 * Custom SVG cursive signature matching the 'Carter' handwriting in the screenshot
 */
function CursiveSignature({ text = "Carter" }: { text?: string }) {
  return (
    <div className="py-1 flex items-center justify-center select-none" aria-label={`Signature of ${text}`}>
      <svg
        viewBox="0 0 160 52"
        className="h-11 w-auto fill-none stroke-[#E5A138] drop-shadow-xs"
        style={{ overflow: "visible" }}
      >
        {/* Stylized cursive Carter vector path */}
        <path
          d="M26 14 C18 10, 10 16, 12 28 C14 40, 26 44, 38 38 C42 36, 45 32, 44 26 C43 20, 36 18, 30 20 C24 22, 22 28, 26 34"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48 34 C44 28, 48 22, 54 22 C60 22, 62 26, 60 34 C58 36, 52 38, 48 34 M60 23 L60 35"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M66 35 L66 24 C66 22, 70 20, 74 21 C76 22, 77 25, 76 27 C74 30, 71 31, 74 35"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M84 16 L84 35 C84 38, 88 38, 92 35 M78 23 L90 23"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M96 29 C96 25, 100 22, 105 22 C110 22, 112 25, 110 30 L96 30 C96 34, 100 37, 106 36 C109 35, 111 33, 112 32"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M118 35 L118 24 C118 22, 122 20, 126 21 C129 22, 130 25, 129 27 C127 30, 124 31, 128 35 C132 37, 138 36, 144 32"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function AuthorAboutCard({
  author = defaultAuthor,
  className = "",
}: AuthorAboutCardProps) {
  return (
    <motion.section
      variants={blogDetailAnimations.fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`relative w-full rounded-2xl bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-zinc-200/80 text-center flex flex-col items-center select-none ${className}`}
      aria-label="Author Profile"
    >
      {/* Author Avatar with delicate ring */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.3 }}
        className="relative mb-3.5 h-24 w-24 sm:h-28 sm:w-28 overflow-hidden rounded-full border-3 border-zinc-100 shadow-sm"
      >
        <Image
          src={author.avatar}
          alt={author.name}
          fill
          sizes="112px"
          className="object-cover"
          unoptimized
        />
      </motion.div>

      {/* Author Name */}
      <h3 className="text-xl sm:text-[22px] font-bold text-[#11131a] tracking-tight mb-1">
        {author.name}
      </h3>

      {/* Role */}
      <p className="text-xs text-zinc-400 font-medium tracking-wide mb-3">
        {author.role}
      </p>

      {/* Bio Copy */}
      <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed max-w-[280px] mb-3.5 px-1">
        {author.bio}
      </p>

      {/* Signature */}
      <CursiveSignature text={author.signatureText} />

      {/* Social Links matching screenshot */}
      <div className="mt-3.5 flex items-center justify-center gap-3">
        {/* Facebook */}
        <motion.a
          href={author.socials?.facebook || "#"}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={blogDetailAnimations.socialHover}
          whileTap={{ scale: 0.95 }}
          className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#EBF3FE] text-[#2563EB] transition-colors duration-200 hover:bg-[#2563EB] hover:text-white"
          aria-label={`${author.name} on Facebook`}
        >
          <svg
            className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </motion.a>

        {/* Twitter */}
        <motion.a
          href={author.socials?.twitter || "#"}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={blogDetailAnimations.socialHover}
          whileTap={{ scale: 0.95 }}
          className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#EBF3FE] text-[#2563EB] transition-colors duration-200 hover:bg-[#2563EB] hover:text-white"
          aria-label={`${author.name} on Twitter`}
        >
          <svg
            className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href={author.socials?.linkedin || "#"}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={blogDetailAnimations.socialHover}
          whileTap={{ scale: 0.95 }}
          className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[#EBF3FE] text-[#2563EB] transition-colors duration-200 hover:bg-[#2563EB] hover:text-white"
          aria-label={`${author.name} on LinkedIn`}
        >
          <svg
            className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </motion.a>
      </div>
    </motion.section>
  );
}
