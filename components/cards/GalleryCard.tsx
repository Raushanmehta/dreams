"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/sections/GallerySection";

export interface GalleryCardProps {
  item: GalleryItem;
  imageSrc: string;
  flexValue: number;
  isHovered: boolean;
  globalIdx: number;
  onClick: () => void;
  onMouseEnter: () => void;
  className?: string;
}

export default function GalleryCard({
  item,
  imageSrc,
  flexValue,
  isHovered,
  globalIdx,
  onClick,
  onMouseEnter,
  className,
}: GalleryCardProps): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: globalIdx * 0.04,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        flex: `${flexValue} 1 0%`,
        transition:
          "flex 650ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 350ms ease, transform 350ms ease",
        minWidth: "75px",
      }}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={cn(
        "group relative h-full overflow-hidden rounded-[16px] sm:rounded-[20px] md:rounded-[24px]",
        "border-0 outline-none cursor-pointer bg-zinc-950 select-none",
        isHovered
          ? "shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
          : "shadow-[0_10px_30px_rgba(0,0,0,0.12)]",
        className
      )}
    >
      {/* Background Photo with smooth zoom on hover */}
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={item.alt}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className={cn(
            "object-cover object-center transition-transform duration-700 ease-out",
            isHovered ? "scale-108" : "scale-100"
          )}
          unoptimized
        />

        {/* Cinematic gradient overlay for contrast */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300",
            isHovered ? "opacity-90" : "opacity-75"
          )}
        />
      </div>

      {/* Top-Right Quick View Action Badge */}
      <div
        className={cn(
          "absolute top-2.5 sm:top-3.5 right-2.5 sm:right-3.5 z-10 transition-all duration-300",
          isHovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-1 pointer-events-none"
        )}
      >
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 backdrop-blur-md border-0 flex items-center justify-center text-white shadow-lg hover:scale-110 active:scale-95 transition-transform">
          <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
        </div>
      </div>

      {/* Bottom Caption Info (No category, borderless) */}
      <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 md:p-5 z-10 flex flex-col justify-end">
        <div className="transform transition-transform duration-300">
          <p className="text-[10px] sm:text-xs text-[#3b82f6] font-mono tracking-wider uppercase font-semibold mb-0.5 truncate">
            {String(globalIdx + 1).padStart(2, "0")}
          </p>
          <h3 className="text-white font-medium text-sm sm:text-base md:text-lg tracking-tight leading-tight line-clamp-1 drop-shadow-sm">
            {item.title}
          </h3>
          <p
            className={cn(
              "text-zinc-300 text-[11px] sm:text-xs tracking-normal line-clamp-1 transition-opacity duration-300 mt-0.5",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          >
            {item.subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
