"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import GalleryCard from "@/components/cards/GalleryCard";
import GalleryLightboxModal from "@/components/common/GalleryLightboxModal";
import { FourPointStarIcon } from "@/components/icons";
import { Sparkles } from "lucide-react";
import siteData from "@/data/site.json";

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  creator?: string;
  dimensions?: string;
  year?: string;
  description: string;
  image: string;
  alt: string;
  colSpanDesktop: string;
  heightDesktop: string;
  colSpanMobile: string;
  heightMobile: string;
  aspectClass?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = siteData.gallery.items as GalleryItem[];

export interface GallerySectionProps {
  title?: string;
  badgeText?: string;
  highlightWord?: string;
  className?: string;
}

export default function GallerySection({
  title = siteData.gallery.title,
  badgeText = siteData.gallery.badgeText,
  highlightWord = siteData.gallery.highlightWord,
  className,
}: GallerySectionProps): React.JSX.Element {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  // Group into 3 rows of 3 items, matching the 4-column bento ratios from the reference
  const GALLERY_ROWS = [
    {
      id: "row-1",
      height: "h-[200px] sm:h-[280px] md:h-[380px] lg:h-[440px]",
      cards: [
        { item: GALLERY_ITEMS[0], defaultFlex: 1, activeFlex: 2.3 },
        { item: GALLERY_ITEMS[1], defaultFlex: 2, activeFlex: 2.6 },
        { item: GALLERY_ITEMS[2], defaultFlex: 1, activeFlex: 2.3 },
      ],
    },
    {
      id: "row-2",
      height: "h-[160px] sm:h-[220px] md:h-[260px] lg:h-[300px]",
      cards: [
        { item: GALLERY_ITEMS[3], defaultFlex: 1, activeFlex: 2.3 },
        { item: GALLERY_ITEMS[4], defaultFlex: 2, activeFlex: 2.6 },
        { item: GALLERY_ITEMS[5], defaultFlex: 1, activeFlex: 2.3 },
      ],
    },
    {
      id: "row-3",
      height: "h-[160px] sm:h-[220px] md:h-[260px] lg:h-[300px]",
      cards: [
        { item: GALLERY_ITEMS[6], defaultFlex: 1, activeFlex: 2.3 },
        { item: GALLERY_ITEMS[7], defaultFlex: 1, activeFlex: 2.3 },
        { item: GALLERY_ITEMS[8], defaultFlex: 2, activeFlex: 2.6 },
      ],
    },
  ];

  // Dynamically compute flex values so hovering any card smoothly expands its width (w)
  const getCardFlex = (
    rowCards: (typeof GALLERY_ROWS)[0]["cards"],
    cardIndex: number,
    hoveredId: string | null
  ): number => {
    const hoveredInRow = rowCards.find((c) => c.item.id === hoveredId);

    // If no card in this row is hovered, return default ratio
    if (!hoveredInRow) {
      return rowCards[cardIndex].defaultFlex;
    }

    // If this is the hovered card, expand width!
    if (hoveredInRow.item.id === rowCards[cardIndex].item.id) {
      return rowCards[cardIndex].activeFlex;
    }

    // Calculate remaining flex space for siblings so total row width stays locked at 100%
    const totalDefault = rowCards.reduce((acc, c) => acc + c.defaultFlex, 0);
    const remaining = Math.max(0.6, totalDefault - hoveredInRow.activeFlex);
    const siblingDefaultTotal = rowCards
      .filter((c) => c.item.id !== hoveredInRow.item.id)
      .reduce((acc, c) => acc + c.defaultFlex, 0);

    return (rowCards[cardIndex].defaultFlex / siblingDefaultTotal) * remaining;
  };

  return (
    <section
      className={cn(
        "relative w-full bg-[#f4f4f2] px-6 md:px-12 py-14 sm:py-18 md:py-20 font-sans select-none overflow-hidden border-t border-zinc-200/80",
        className
      )}
    >
      <div className="relative mx-auto max-w-7xl w-full">
        {/* ========================================================= */}
        {/* SECTION HEADER: Matches Dreams* Signature Brand Theme    */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 uppercase tracking-widest text-[#11131a] font-semibold mb-4"
            >
              <Sparkles className="h-5 w-5 text-[#2563EB]" />
              <span>{badgeText}</span>
            </motion.div>

            {/* Headline with tilted blue sliced badge and spinning 4-point star */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#11131a] leading-[1.15] uppercase"
            >
              <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2">
                <span>{title}</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2 mt-2 sm:mt-2.5">
                <span>Architecture &amp;</span>
                {/* Tilted Sliced Background Badge in #2563EB */}
                <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.4)] select-none">
                  <span className="inline-block skew-x-14 md:skew-x-18">
                    {highlightWord}
                  </span>
                </span>
                {/* Rotating 4-point star SVG icon */}
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear",
                  }}
                  className="inline-flex items-center justify-center text-[#2563EB] drop-shadow-[0_0_12px_rgba(37,99,235,0.5)] ml-0.5 sm:ml-1"
                >
                  <FourPointStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563EB]" />
                </motion.span>
              </div>
            </motion.h2>
          </div>
        </div>

        {/* ========================================================= */}
        {/* EXPANDING BENTO ACCORDION GRID                            */}
        {/* ========================================================= */}
        <div className="relative space-y-2.5 sm:space-y-3.5 md:space-y-4 w-full">
          {GALLERY_ROWS.map((row, rowIdx) => (
            <div
              key={row.id}
              onMouseLeave={() => setHoveredCardId(null)}
              className={cn(
                "flex flex-row w-full gap-2.5 sm:gap-3.5 md:gap-4",
                row.height
              )}
            >
              {row.cards.map((cardConfig, cardIdx) => {
                const item = cardConfig.item;
                const flexValue = getCardFlex(row.cards, cardIdx, hoveredCardId);
                const isHovered = hoveredCardId === item.id;
                const globalIdx = rowIdx * 3 + cardIdx;

                return (
                  <GalleryCard
                    key={item.id}
                    item={item}
                    imageSrc={item.image}
                    flexValue={flexValue}
                    isHovered={isHovered}
                    globalIdx={globalIdx}
                    onClick={() => setSelectedItem(item)}
                    onMouseEnter={() => setHoveredCardId(item.id)}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* INTERACTIVE FULLSCREEN LIGHTBOX MODAL (Component)         */}
      {/* ========================================================= */}
      <GalleryLightboxModal
        selectedItem={selectedItem}
        items={GALLERY_ITEMS}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
      />
    </section>
  );
}
