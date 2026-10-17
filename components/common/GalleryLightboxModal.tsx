"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  X,
  Eye,
  Share2,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/sections/GallerySection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";

export interface GalleryLightboxModalProps {
  selectedItem: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
  className?: string;
}

export default function GalleryLightboxModal({
  selectedItem,
  items,
  onClose,
  onSelect,
  className,
}: GalleryLightboxModalProps): React.JSX.Element {
  const [api, setApi] = useState<CarouselApi>();
  const [copied, setCopied] = useState<boolean>(false);

  // Initial index when opened
  const initialIndex = useMemo(() => {
    if (!selectedItem || items.length === 0) return 0;
    const foundIdx = items.findIndex((item) => item.id === selectedItem.id);
    return foundIdx !== -1 ? foundIdx : 0;
  }, [selectedItem, items]);

  // Synchronize shadcn/embla carousel slides with onSelect callback
  useEffect(() => {
    if (!api) return;

    const handleSlideSelect = () => {
      const activeSnap = api.selectedScrollSnap();
      const currentItem = items[activeSnap];
      if (currentItem && currentItem.id !== selectedItem?.id) {
        onSelect(currentItem);
      }
    };

    api.on("select", handleSlideSelect);
    return () => {
      api.off("select", handleSlideSelect);
    };
  }, [api, items, onSelect, selectedItem]);

  // If selectedItem changes externally, smoothly scroll to it
  useEffect(() => {
    if (!api || !selectedItem) return;
    const targetIdx = items.findIndex((item) => item.id === selectedItem.id);
    if (targetIdx !== -1 && api.selectedScrollSnap() !== targetIdx) {
      api.scrollTo(targetIdx);
    }
  }, [api, selectedItem, items]);

  // Global Keyboard Navigation (Escape to close, Left/Right for smooth shadcn carousel glide)
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!selectedItem) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        api?.scrollNext();
      } else if (e.key === "ArrowLeft") {
        api?.scrollPrev();
      }
    },
    [selectedItem, onClose, api]
  );

  useEffect(() => {
    if (!selectedItem) return;
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, handleKeyDown]);

  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const currentIndex = selectedItem
    ? items.findIndex((item) => item.id === selectedItem.id)
    : 0;

  return (
    <AnimatePresence>
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-2xl",
            className
          )}
          onClick={onClose}
        >
          {/* Main Modal Shell */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-5xl w-full max-h-[92vh] bg-zinc-950 border border-white/15 rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.95)] flex flex-col md:flex-row select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left/Main Media Container with shadcn smooth slide Carousel */}
            <div className="relative w-full md:w-3/5 h-[340px] sm:h-[450px] md:h-[520px] bg-black overflow-hidden flex items-center justify-center">
              <Carousel
                setApi={setApi}
                opts={{
                  loop: true,
                  startIndex: initialIndex,
                  duration: 30,
                  align: "start",
                }}
                className="w-full h-full relative"
              >
                <CarouselContent className="h-full -ml-0">
                  {items.map((item, idx) => (
                    <CarouselItem
                      key={item.id}
                      className="pl-0 basis-full min-w-0 h-full flex items-center justify-center select-none"
                    >
                      <div className="relative w-full h-[340px] sm:h-[450px] md:h-[520px] bg-black overflow-hidden flex items-center justify-center">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-contain select-none pointer-events-none"
                          unoptimized
                          priority={idx === initialIndex}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* shadcn Carousel Previous and Next buttons with luxury styling */}
                <CarouselPrevious
                  variant="ghost"
                  className="left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 z-20"
                />
                <CarouselNext
                  variant="ghost"
                  className="right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 z-20"
                />

                {/* Counter Tag */}
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-zinc-300 border border-white/10 z-20 pointer-events-none">
                  {String(currentIndex + 1).padStart(2, "0")} /{" "}
                  {String(items.length).padStart(2, "0")}
                </div>

                {/* Smooth Slide Dots Indicator */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 z-20">
                  {items.map((it, idx) => (
                    <button
                      key={it.id}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        api?.scrollTo(idx);
                      }}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
                        idx === currentIndex
                          ? "w-5 bg-[#3b82f6]"
                          : "w-1.5 bg-white/40 hover:bg-white/70"
                      )}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </Carousel>
            </div>

            {/* Right Side Info Pane (Synchronized with active slide) */}
            <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-none bg-zinc-950 border-t md:border-t-0 md:border-l border-white/10">
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                {/* Curation Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#2563EB]/20 text-[#3b82f6] border border-[#2563EB]/30 mb-3">
                  <Sparkles className="w-3 h-3 text-[#2563EB]" />
                  <span>Curated Masterwork</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-2 uppercase">
                  {selectedItem.title}
                </h3>

                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                  {selectedItem.subtitle}
                </p>

                <div className="h-px w-full bg-white/10 mb-6" />

                {/* Meta Specs */}
                <div className="grid grid-cols-2 gap-4 text-xs font-mono mb-6">
                  <div>
                    <span className="text-zinc-500 block mb-1">LOCATION</span>
                    <span className="text-white font-medium">
                      {selectedItem.location}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block mb-1">CURATOR</span>
                    <span className="text-white font-medium">
                      {selectedItem.creator || "Dreams Collective"}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block mb-1">YEAR</span>
                    <span className="text-white font-medium">
                      {selectedItem.year || "2026"}
                    </span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block mb-1">FORMAT</span>
                    <span className="text-emerald-400 font-medium">
                      Ultra-HD 4K
                    </span>
                  </div>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {selectedItem.description}
                </p>
              </motion.div>

              {/* Bottom Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleShare}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer shadow-lg shadow-blue-500/20"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Link Copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4" />
                      <span>Share Masterwork</span>
                    </>
                  )}
                </button>

                <a
                  href={selectedItem.image}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium border border-white/10 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>Raw File</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
