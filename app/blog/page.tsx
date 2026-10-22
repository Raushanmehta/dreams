"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import BreadCrumb from "@/components/common/BreadCrumb";
import BlogCard, { type BlogPost } from "@/components/cards/BlogCard";
import { FourPointStarIcon } from "@/components/icons";
import { blogAnimations } from "@/utils/animation/blog.animation";
import { site } from "@/data";

export default function BlogsPage() {
    const blog = site.blog;
    const posts = (blog.blogPosts || []) as BlogPost[];

    return (
        <main>
            <BreadCrumb
                title={blog.pageTitle || blog.badgeText}
                subtitle={blog.pageSubtitle}
            />
            <section className="relative w-full isolate text-[#11131a] bg-[#f4f4f2] px-4 md:px-12 py-8 md:py-10 lg:py-20 font-sans select-none overflow-hidden border-t border-zinc-200">
                <div className="max-w-7xl mx-auto w-full">
                    
                    <div className="mb-8 sm:mb-10 text-left">
                        <div className="flex flex-col items-start text-left">
                            {/* Section eyebrow badge element */}
                            <motion.div
                                initial={blogAnimations.eyebrow.initial}
                                whileInView={blogAnimations.eyebrow.whileInView}
                                viewport={blogAnimations.eyebrow.viewport}
                                transition={blogAnimations.eyebrow.transition}
                                className="inline-flex items-center gap-2 uppercase tracking-widest text-[#11131a] font-semibold mb-4"
                            >
                                <Sparkles className="h-5 w-5 text-[#2563EB]" />
                                <span>{blog.badgeText}</span>
                            </motion.div>

                            {/* Stepped Title with #2563EB */}
                            <motion.h2
                                initial={blogAnimations.headline.initial}
                                whileInView={blogAnimations.headline.whileInView}
                                viewport={blogAnimations.headline.viewport}
                                transition={blogAnimations.headline.transition}
                                className="text-4xl sm:text-5xl md:text-[56px] font-medium tracking-tight text-[#11131a] leading-[1.15] uppercase text-left"
                            >
                                <div className="flex flex-wrap items-center justify-start gap-x-2.5 sm:gap-x-3 gap-y-2">
                                    <span>{blog.headline.prefix}</span>
                                    <span className="relative inline-block bg-[#2563EB] text-white px-3.5 sm:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.35)] select-none">
                                        <span className="inline-block skew-x-14 md:skew-x-18">
                                            {blog.headline.badge}
                                        </span>
                                    </span>
                                    {/* SVG Rotating 4 point Sparkle */}
                                    <motion.span
                                        animate={blogAnimations.spin.animate}
                                        transition={blogAnimations.spin.transition}
                                        className="inline-flex items-center justify-center text-[#2563EB] drop-shadow-[0_0_12px_rgba(37,99,235,0.4)] ml-0.5 sm:ml-1"
                                    >
                                        <FourPointStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563EB]" />
                                    </motion.span>
                                </div>
                            </motion.h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-5">
                        {posts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}