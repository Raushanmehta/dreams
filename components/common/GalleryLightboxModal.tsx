"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/sections/GallerySection";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

export interface GalleryLightboxModalProps {
    selectedItem: GalleryItem | null;
    items: GalleryItem[];
    onClose: () => void;
    onSelect: (item: GalleryItem) => void;
    className?: string;
}

/* Pure Fullscreen Interactive Gallery */
export default function GalleryLightboxModal({
    selectedItem,
    items,
    onClose,
    onSelect,
    className,
}: GalleryLightboxModalProps): React.JSX.Element | null {
    const [api, setApi] = useState<CarouselApi>();
    const [mounted, setMounted] = useState<boolean>(false);
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Initial index when opened
    const initialIndex = useMemo(() => {
        if (!selectedItem || items.length === 0) return 0;
        const foundIdx = items.findIndex((item) => item.id === selectedItem.id);
        return foundIdx !== -1 ? foundIdx : 0;
    }, [selectedItem, items]);

    // Lock body scroll when
    useEffect(() => {
        if (selectedItem) {
            const originalOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = originalOverflow;
            };
        }
    }, [selectedItem]);

    // Track native browser fullscreen state
    useEffect(() => {
        const handleFsChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener("fullscreenchange", handleFsChange);
        return () => document.removeEventListener("fullscreenchange", handleFsChange);
    }, []);

    const toggleNativeFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen().catch(() => {});
                setIsFullscreen(false);
            }
        }
    }, []);

    // Synchronize embla carousel slide
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

    // If selectedItem changes externally,
    useEffect(() => {
        if (!api || !selectedItem) return;
        const targetIdx = items.findIndex((item) => item.id === selectedItem.id);
        if (targetIdx !== -1 && api.selectedScrollSnap() !== targetIdx) {
            api.scrollTo(targetIdx);
        }
    }, [api, selectedItem, items]);

    // Keyboard Navigation (Escape to
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

    const currentIndex = selectedItem
        ? items.findIndex((item) => item.id === selectedItem.id)
        : 0;

    const modalContent = (
        <AnimatePresence>
            {selectedItem && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className={cn(
                        "fixed inset-0 z-[9999] w-screen h-screen flex items-center justify-center bg-black/95 backdrop-blur-2xl select-none overflow-hidden",
                        className
                    )}
                    onClick={onClose}
                >
                    {/* Top Control Bar */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="fixed top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 md:top-8 md:left-8 md:right-8 z-50 flex items-center justify-between pointer-events-none"
                    >
                        {/* Top Left Slide Counter */}
                        <div className="bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-mono text-zinc-200 border border-white/15 shadow-lg pointer-events-auto">
                            <span>{String(currentIndex + 1).padStart(2, "0")}</span>
                            <span className="text-zinc-500 mx-1.5">/</span>
                            <span>{String(items.length).padStart(2, "0")}</span>
                        </div>

                        {/* Top Right Fullscreen Toggle */}
                        <div className="flex items-center gap-2.5 sm:gap-3 pointer-events-auto">
                            <button
                                type="button"
                                onClick={toggleNativeFullscreen}
                                aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white/90 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-2xl hover:scale-105"
                            >
                                {isFullscreen ? (
                                    <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                                ) : (
                                    <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                                )}
                            </button>

                            <button
                                type="button"
                                onClick={onClose}
                                aria-label="Close modal"
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white/90 hover:text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-2xl hover:scale-105"
                            >
                                <X className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Left Floating Previous Button */}
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            api?.scrollPrev();
                        }}
                        aria-label="Previous image"
                        className="fixed left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 active:scale-95 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-[0_8px_32px_rgba(0,0,0,0.7)] hover:scale-105 hover:border-white/40"
                    >
                        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
                    </button>

                    {/* Right Floating Next Button */}
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            api?.scrollNext();
                        }}
                        aria-label="Next image"
                        className="fixed right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-50 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-black/60 hover:bg-black/90 active:scale-95 text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all cursor-pointer shadow-[0_8px_32px_rgba(0,0,0,0.7)] hover:scale-105 hover:border-white/40"
                    >
                        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
                    </button>

                    {/* Main Fullscreen Image Viewport */}
                    <motion.div
                        initial={{ scale: 0.96, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.96, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Carousel
                            setApi={setApi}
                            opts={{
                                loop: true,
                                startIndex: initialIndex,
                                duration: 25,
                                align: "center",
                            }}
                            className="w-full h-full flex items-center justify-center"
                        >
                            <CarouselContent className="h-full -ml-0 items-center">
                                {items.map((item, idx) => (
                                    <CarouselItem
                                        key={item.id}
                                        className="pl-0 basis-full min-w-0 h-full flex items-center justify-center select-none"
                                    >
                                        <div className="relative w-full h-[88vh] sm:h-[92vh] md:h-[95vh] max-w-[96vw] mx-auto px-2 sm:px-16 md:px-20 flex items-center justify-center">
                                            <Image
                                                src={item.image}
                                                alt={item.alt}
                                                fill
                                                sizes="100vw"
                                                className="object-contain select-none pointer-events-none drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
                                                unoptimized
                                                priority={idx === initialIndex}
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );

    if (!mounted) return null;
    return createPortal(modalContent, document.body);
}
