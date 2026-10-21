"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  lines?: string[];
  subtitle?: string;
  description?: string;
  image: string;
  year?: string;
  bgHex?: string;
  category?: string;
  href?: string;
}

export interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
  index?: number;
}

export default function ServiceCard({
  service,
  className = "",
  index = 0,
}: ServiceCardProps): React.JSX.Element {
  const href = service.href || `/properties`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative flex flex-col w-full select-none cursor-pointer ${className}`}
    >
      <Link href={href} className="block w-full">
        {/* Top Image Canvas with Rounded Corners and Organic Cut-Out */}
        <div className="relative w-full aspect-[16/10] rounded-[28px] sm:rounded-[32px] overflow-hidden">
          {/* Architectural Project Image */}
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
            priority={index < 3}
          />

          {/* Ambient Lighting Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15 pointer-events-none" />

          {/* Organic Inverted Notch Cut-out with Circular Arrow Button */}
          <div className="absolute bottom-0 right-0 z-20 pointer-events-auto">
            {/* Top Fillet (Smooth concave arc connecting right edge to notch top) */}
            <div
              className="absolute -top-[24px] right-0 w-[24px] h-[24px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 0% 0%, transparent 24px, #f4f4f2 24.5px)",
              }}
            />

            {/* Left Fillet (Smooth concave arc connecting bottom edge to notch left) */}
            <div
              className="absolute bottom-0 -left-[24px] w-[24px] h-[24px] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 0% 0%, transparent 24px, #f4f4f2 24.5px)",
              }}
            />

            {/* Notch Background Block */}
            <div className="w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] bg-[#f4f4f2] rounded-tl-[24px] sm:rounded-tl-[28px] flex items-center justify-center pl-1 pt-1 sm:pl-1.5 sm:pt-1.5">
              {/* Circular Action Button with ↗ Arrow */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#11131a] border border-black/10 text-white flex items-center justify-center transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.18)] group-hover:bg-[#2563EB] group-hover:border-[#2563EB] group-hover:scale-105 active:scale-95 cursor-pointer">
                <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Title & Subtitle Below the Image matching previous font styling */}
        <div className="w-full mt-2 flex flex-col px-1">
          <h3 className="w-full font-medium text-[#18181B] text-[20px] sm:text-[22px] md:text-[25px] tracking-tight leading-snug uppercase group-hover:text-[#2563EB] transition-colors">
            {service.lines && service.lines.length > 0
              ? service.lines.join(" ")
              : service.title}
          </h3>
          {service.subtitle && (
            <p className="w-full text-[11px] sm:text-xs text-[#4b5568] font-medium tracking-wide uppercase mt-1.5 line-clamp-1 opacity-75">
              {service.subtitle}
            </p>
          )}
        </div>
      </Link>
    </motion.article>
  );
}