"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import BlogCard, { type BlogPost } from "@/components/cards/BlogCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

const BLOG_POSTS: BlogPost[] = [
    {
        id: "post-1",
        title: "Architectural Trends Defining Luxury Living in 2025",
        excerpt:
            "Discover how organic biophilic architecture, zero-carbon construction, and private wellness pavilions are shaping ultra-luxury estates.",
        category: "Architecture",
        date: "18 Oct 2024",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        isLatest: false,
    },
    {
        id: "post-2",
        title: "Prime Waterfront Estates: Navigating Global Coastal Investments",
        excerpt:
            "A strategic guide to acquiring high-yield waterfront sanctuaries across the French Riviera, Amalfi Coast, and Miami Biscayne Bay.",
        category: "Market Insights",
        date: "24 Nov 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        isLatest: true,
    },
    {
        id: "post-3",
        title: "The Rise of High-Rise Penthouses in Urban Epicenters",
        excerpt:
            "How panoramic skyline terraces, private elevator foyers, and bespoke hotel-tier concierge amenities are redefining metropolis penthouses.",
        category: "Urban Living",
        date: "12 Nov 2024",
        readTime: "3 min read",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        isLatest: false,
    },
    {
        id: "post-4",
        title: "Sustainable Sanctuaries: Net-Zero Mansions of Tomorrow",
        excerpt:
            "Exploring how geothermal climate engineering and solar glass integration elevate ecological residential design to an art form.",
        category: "Sustainability",
        date: "04 Nov 2024",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        isLatest: false,
    },
    {
        id: "post-5",
        title: "Curating Private Sanctuaries: The Art of Smart Home Living",
        excerpt:
            "From ambient biological circadian lighting to AI-driven security vaults, step inside the next generation of intelligent luxury retreats.",
        category: "Smart Estates",
        date: "28 Oct 2024",
        readTime: "3 min read",
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
        isLatest: false,
    },
    {
        id: "post-6",
        title: "Heritage Restorations: Reviving Historic European Châteaux",
        excerpt:
            "Balancing centuries-old stone craftsmanship with state-of-the-art contemporary lifestyle technology across France and Tuscany.",
        category: "Heritage",
        date: "15 Oct 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
        isLatest: false,
    },
];

export default function BlogSection() {
    const [api, setApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            setCanScrollPrev(api.canScrollPrev());
            setCanScrollNext(api.canScrollNext());
        };

        queueMicrotask(onSelect);

        api.on("select", onSelect);
        api.on("reInit", onSelect);

        return () => {
            api.off("select", onSelect);
            api.off("reInit", onSelect);
        };
    }, [api]);

    return (
        <section className="relative w-full isolate bg-[#f4f4f2] text-[#11131a] px-6 md:px-12 py-14 sm:py-18 md:py-20 font-sans select-none overflow-hidden border-t border-zinc-200"
            style={{ backgroundColor: "#ffffff" }}
        >
            <div className="max-w-7xl mx-auto w-full">
                {/* Section Header: Styled cleanly on white background */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-8">
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
                            <span>Our Blog</span>
                        </motion.div>

                        {/* Stepped Title with #2563EB Sliced Badge and Spinning Star SVG */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-[56px] font-medium tracking-tight text-[#11131a] leading-[1.15] uppercase"
                        >
                            <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2">
                                <span>Featured</span>
                                <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.35)] select-none">
                                    <span className="inline-block skew-x-14 md:skew-x-18">
                                        Articles
                                    </span>
                                </span>
                                {/* SVG Rotating 8-point Sparkle */}
                                <motion.span
                                    animate={{ rotate: 360 }}
                                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                    className="inline-flex items-center justify-center text-[#2563EB] drop-shadow-[0_0_12px_rgba(37,99,235,0.4)] ml-0.5 sm:ml-1"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        aria-hidden="true"
                                        className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563EB]"
                                    >
                                        <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
                                    </svg>
                                </motion.span>
                            </div>
                        </motion.h2>
                    </div>

                    {/* Right Column: Paragraph matching the reference image ("inspire and inform.") */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-md"
                    >
                        <p className="text-[#52525b] text-sm sm:text-base leading-relaxed">
                            Explore our curated archive of design perspectives, market intelligence,
                            and creative visions engineered to inspire and inform.
                        </p>
                    </motion.div>
                </div>

                {/* Shadcn Embla Carousel: Smooth 2-card sliding on desktop, 1-card on mobile */}
                <div className="relative w-full py-2">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 sm:-ml-5 md:-ml-6">
                            {BLOG_POSTS.map((post) => (
                                <CarouselItem
                                    key={post.id}
                                    className="pl-4 sm:pl-5 md:pl-6 basis-full md:basis-1/2"
                                >
                                    <BlogCard post={post} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>

                {/* Bottom Line Arrow Navigation Controls Matching Reference Image */}
                <div className="flex items-center justify-between pt-2 sm:pt-3 w-full">
                    {/* Left Line Arrow: ←────── */}
                    <motion.button
                        type="button"
                        onClick={() => api?.scrollPrev()}
                        disabled={!canScrollPrev}
                        whileHover={canScrollPrev ? { x: -6 } : {}}
                        whileTap={canScrollPrev ? { scale: 0.96 } : {}}
                        aria-label="Previous articles"
                        className={`group flex items-center gap-0 select-none cursor-pointer py-3 transition-opacity ${canScrollPrev ? "opacity-100" : "opacity-35 cursor-not-allowed"
                            }`}
                    >
                        {/* Arrow Head */}
                        <svg
                            className="w-5 h-5 text-zinc-900 group-hover:text-[#2563EB] transition-colors transition-transform group-hover:-translate-x-1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <path
                                d="M19 12H5M5 12L12 19M5 12L12 5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        {/* Long Horizontal Extension Line */}
                        <span className="w-16 sm:w-24 md:w-28 h-[1.5px] bg-zinc-300 group-hover:bg-[#2563EB] transition-colors" />
                    </motion.button>

                    {/* Right Line Arrow: ──────→ */}
                    <motion.button
                        type="button"
                        onClick={() => api?.scrollNext()}
                        disabled={!canScrollNext}
                        whileHover={canScrollNext ? { x: 6 } : {}}
                        whileTap={canScrollNext ? { scale: 0.96 } : {}}
                        aria-label="Next articles"
                        className={`group flex items-center gap-0 select-none cursor-pointer py-3 transition-opacity ${canScrollNext ? "opacity-100" : "opacity-35 cursor-not-allowed"
                            }`}
                    >
                        {/* Long Horizontal Extension Line */}
                        <span className="w-16 sm:w-24 md:w-28 h-[1.5px] bg-zinc-300 group-hover:bg-[#2563EB] transition-colors" />
                        {/* Arrow Head */}
                        <svg
                            className="w-5 h-5 text-zinc-900 group-hover:text-[#2563EB] transition-colors transition-transform group-hover:translate-x-1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <path
                                d="M5 12H19M19 12L12 5M19 12L12 19"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
