"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Link from "next/link";

export interface BlogPost {
    id: string;
    slug?: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime?: string;
    image: string;
    isLatest?: boolean;
}

export interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    const slug = post.slug || post.id;
    return (
        <Link href={`/blog/${slug}`} className="block w-full">
            <motion.article
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group relative w-full h-[300px] sm:h-[340px] md:h-[380px] rounded-[24px] sm:rounded-[28px] overflow-hidden select-none border border-black/[0.08] bg-zinc-100 flex flex-col justify-end cursor-pointer"
            >
            {/* Background Artwork Image */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    unoptimized
                />
                {/* Subtle top vignette shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
            </div>

            {/* Floating White Content Box */}
            <div className="relative z-10 mx-2.5 sm:mx-3 mb-2.5 sm:mb-3">
                {/* Optional 'Latest' Top Tab */}
                {post.isLatest && (
                    <div className="flex items-end -mb-px">
                        {/* The Tab Cradling the Badge */}
                        <div className="bg-white px-3.5 sm:px-4 pt-2 pb-1 rounded-t-[16px] shadow-sm">
                            <span className="inline-block px-3 py-0.5 rounded-full bg-[#0c0d14] text-white text-[11px] font-bold tracking-wide">
                                Latest
                            </span>
                        </div>
                        {/* Smooth Inverted Concave Fillet */}
                        <div className="w-4 h-4 overflow-hidden pointer-events-none self-end">
                            <svg
                                viewBox="0 0 16 16"
                                className="w-full h-full fill-white"
                                preserveAspectRatio="none"
                            >
                                <path d="M0,0 C0,8.837 7.163,16 16,16 L0,16 Z" />
                            </svg>
                        </div>
                    </div>
                )}

                {/* Upper Block Title and Excerpt */}
                <div
                    className={`relative bg-white text-[#0c0d14] p-2 sm:p-3 md:p-4 pb-1 sm:pb-2 shadow-sm ${post.isLatest
                        ? "rounded-tr-[22px] sm:rounded-tr-[24px] rounded-tl-none"
                        : "rounded-t-[22px] sm:rounded-t-[24px]"
                        }`}
                >
                    
                    <h3 className="text-base sm:text-lg md:text-[18px] font-bold text-[#0c0d14] tracking-tight leading-snug line-clamp-2 mb-1 group-hover:text-[#2563EB] transition-colors">
                        {post.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] md:text-sm text-[#4f566b] leading-relaxed line-clamp-2 font-normal">
                        {post.excerpt}
                    </p>
                </div>

                {/* Lower Block Bottom Meta */}
                <div className="flex items-start">
                    {/* Meta Content Pill & */}
                    <div className="bg-white px-4 sm:px-5 md:px-6 pb-3.5 sm:pb-4 md:pb-5 pt-1 rounded-bl-[20px] sm:rounded-bl-[22px] rounded-br-[18px] sm:rounded-br-[20px] flex items-center gap-2.5 sm:gap-3 shadow-sm">
                        
                        <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#eef0f8] text-[#4f566b] text-[11px] sm:text-xs font-semibold tracking-wide">
                            {post.category}
                        </span>

                        <span className="text-[11px] sm:text-xs text-[#71717a] font-medium tracking-tight whitespace-nowrap">
                            {post.date}
                        </span>
                    </div>

                    {/* Smooth Concave Fillet in */}
                    <div className="w-4 sm:w-5 h-4 sm:h-5 overflow-hidden pointer-events-none -mt-px">
                        <svg
                            viewBox="0 0 20 20"
                            className="w-full h-full fill-white"
                            preserveAspectRatio="none"
                        >
                            <path d="M0,0 L0,20 C0,8.954 8.954,0 20,0 Z" />
                        </svg>
                    </div>

                    {/* The remaining area to */}
                </div>
            </div>
        </motion.article>
        </Link>
    );
}
