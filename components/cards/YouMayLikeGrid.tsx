"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogDetailAnimations } from "@/utils/animation/blog-detail.animation";

export interface RelatedPost {
  id: string;
  title: string;
  category: string;
  categoryBadgeClass?: string;
  image: string;
  href?: string;
}

export interface YouMayLikeGridProps {
  title?: string;
  posts?: RelatedPost[];
  className?: string;
}

const defaultRelatedPosts: RelatedPost[] = [
  {
    id: "related-1",
    title: "Architectural Trends Defining Luxury Living in 2025",
    category: "Architecture",
    categoryBadgeClass: "bg-[#FFF3E0] text-[#D97706]",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
    href: "/blog/post-1",
  },
  {
    id: "related-2",
    title: "Prime Waterfront Estates: Navigating Global Coastal Investments",
    category: "Market Insights",
    categoryBadgeClass: "bg-[#FEEAE6] text-[#EA580C]",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80",
    href: "/blog/post-2",
  },
  {
    id: "related-3",
    title: "The Rise of High-Rise Penthouses in Urban Epicenters",
    category: "Urban Living",
    categoryBadgeClass: "bg-[#FFF3E0] text-[#D97706]",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80",
    href: "/blog/post-3",
  },
  {
    id: "related-4",
    title: "Sustainable Sanctuaries: Net-Zero Mansions of Tomorrow",
    category: "Sustainability",
    categoryBadgeClass: "bg-[#FEF2F2] text-[#E11D48]",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80",
    href: "/blog/post-4",
  },
  {
    id: "related-5",
    title: "Curating Private Sanctuaries: The Art of Smart Home Living",
    category: "Smart Living",
    categoryBadgeClass: "bg-[#FFF3E0] text-[#D97706]",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80",
    href: "/blog/post-5",
  },
];

export default function YouMayLikeGrid({
  title = "You May Like",
  posts = defaultRelatedPosts,
  className = "",
}: YouMayLikeGridProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Section Title */}
      <h3 className="text-xl sm:text-[22px] font-bold text-[#11131a] tracking-tight mb-4">
        {title}
      </h3>

      {/* 2-Column Grid */}
      <motion.div
        variants={blogDetailAnimations.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-3 sm:gap-3.5"
      >
        {posts.map((post) => (
          <motion.div
            key={post.id}
            variants={blogDetailAnimations.item}
            whileHover={blogDetailAnimations.cardHover}
            className="group relative flex flex-col justify-start rounded-xl bg-white p-2.5 sm:p-3 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-zinc-200/80 transition-shadow hover:shadow-md cursor-pointer select-none"
          >
            <Link href={post.href || "#"} className="flex flex-col h-full">
              {/* Thumbnail */}
              <div className="relative mb-2 h-24 sm:h-26 w-full overflow-hidden rounded-lg bg-zinc-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  unoptimized
                />
              </div>

              {/* Category Badge Pill */}
              <div className="mb-1.5 flex items-center">
                <span
                  className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-tight ${
                    post.categoryBadgeClass || "bg-[#FFF3E0] text-[#D97706]"
                  }`}
                >
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-[12px] sm:text-[13px] font-bold text-[#11131a] leading-snug line-clamp-3 group-hover:text-[#2563EB] transition-colors">
                {post.title}
              </h4>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
