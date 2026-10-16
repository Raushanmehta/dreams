"use client";

import BreadCrumb from "@/components/common/BreadCrumb";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import BlogCard, { type BlogPost } from "@/components/cards/BlogCard";

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

export default function BlogsPage() {
    return (
        <main>
            <BreadCrumb
                title="Market Insights & Journal"
                subtitle="In-depth intelligence on prime global real estate, architectural trends, and wealth preservation."
            />
            <section
                className="relative w-full isolate bg-[#f4f4f2] text-[#11131a] px-6 md:px-12 py-14 sm:py-18 md:py-20 font-sans select-none overflow-hidden border-t border-zinc-200"
            >
                <div className="max-w-7xl mx-auto w-full">
                    {/* Section Header */}
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

                        {/* Right Column */}
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

                    {/* Grid Container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                        {BLOG_POSTS.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}