"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface ServiceItem {
  id: string;
  title: string;
  lines: string[];
  subtitle?: string;
  image: string;
  bgHex?: string;
  category?: string;
}

export interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
  index?: number;
}

/* Exact matching 8-spoke square-node starburst icon from the design reference */
export function StarburstNodeIcon({
  className = "w-10 h-10",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central junction hub */}
      <circle cx="32" cy="32" r="3.2" fill="#18181B" />

      {/* Up spoke */}
      <line
        x1="32"
        y1="28.8"
        x2="32"
        y2="14"
        stroke="#18181B"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect x="29.5" y="8" width="5" height="5" fill="#18181B" rx="0.8" />

      {/* Down spoke */}
      <line
        x1="32"
        y1="35.2"
        x2="32"
        y2="50"
        stroke="#18181B"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect x="29.5" y="51" width="5" height="5" fill="#18181B" rx="0.8" />

      {/* Left spoke */}
      <line
        x1="28.8"
        y1="32"
        x2="14"
        y2="32"
        stroke="#18181B"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect x="8" y="29.5" width="5" height="5" fill="#18181B" rx="0.8" />

      {/* Right spoke */}
      <line
        x1="35.2"
        y1="32"
        x2="50"
        y2="32"
        stroke="#18181B"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect x="51" y="29.5" width="5" height="5" fill="#18181B" rx="0.8" />

      {/* Top-Right spoke (45°) */}
      <line
        x1="34.3"
        y1="29.7"
        x2="45"
        y2="19"
        stroke="#18181B"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect x="44.5" y="14.5" width="5" height="5" fill="#18181B" rx="0.8" />

      {/* Bottom-Right spoke (135°) */}
      <line
        x1="34.3"
        y1="34.3"
        x2="45"
        y2="45"
        stroke="#18181B"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect x="44.5" y="44.5" width="5" height="5" fill="#18181B" rx="0.8" />

      {/* Bottom-Left spoke (225°) */}
      <line
        x1="29.7"
        y1="34.3"
        x2="19"
        y2="45"
        stroke="#18181B"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect x="14.5" y="44.5" width="5" height="5" fill="#18181B" rx="0.8" />

      {/* Top-Left spoke (315°) */}
      <line
        x1="29.7"
        y1="29.7"
        x2="19"
        y2="19"
        stroke="#18181B"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect x="14.5" y="14.5" width="5" height="5" fill="#18181B" rx="0.8" />
    </svg>
  );
}

export default function ServiceCard({
  service,
  className = "",
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`group relative bg-white/70 w-full h-[290px] sm:h-[300px]  md:h-[300px] rounded-[28px] sm:rounded-[32px] overflow-hidden p-6 sm:p-7 flex flex-col justify-between select-none cursor-pointer border border-black/[0.06] shadow-[0_4px_20px_rgba(20,40,80,0.04)] transition-all duration-300 ${className}`}
    >
      {/* Top Left: Starburst Node Icon matching design reference */}
      <div className="relative z-10">
        <motion.div
          whileHover={{ rotate: 45 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="inline-block"
        >
          <StarburstNodeIcon className="w-9 h-9 sm:w-12 sm:h-12 text-[#18181B]" />
        </motion.div>
      </div>

      {/* Bottom Left: 3-line Bold All-Caps Headline matching reference */}
      <div className="relative z-10 max-w-[55%] sm:max-w-[52%]">
        <h3 className="font-medium text-[#18181B] text-[19px] sm:text-[25px] md:text-[30px] tracking-tight leading-[1.05] uppercase">
          {service.lines.map((line, idx) => (
            <span key={idx} className="block">
              {line}
            </span>
          ))}
        </h3>
        {service.subtitle && (
          <p className="text-[11px] sm:text-xs text-[#4b5568] font-medium tracking-wide uppercase mt-2 line-clamp-1 opacity-75">
            {service.subtitle}
          </p>
        )}
      </div>

      {/* Right / Bottom-Right: 3D Isometric Architectural Building Render */}
      <div className="absolute right-0 bottom-0 w-[66%] sm:w-[70%] md:w-[74%] h-full pointer-events-none overflow-hidden flex items-end justify-end">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain object-bottom-right scale-105 sm:scale-110 origin-bottom-right transition-transform duration-700 ease-out"
          unoptimized
          priority={index < 4}
        />
      </div>
    </motion.article>
  );
}