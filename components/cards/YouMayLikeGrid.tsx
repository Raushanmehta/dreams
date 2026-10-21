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
  date?: string;
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
    date: "18 Oct 2024",
    categoryBadgeClass: "bg-[#FFF3E0] text-[#D97706]",
    image: "/images/downloaded/photo-1600585154340-be6161a56a0c.webp",
    href: "/blog/post-1",
  },
  {
    id: "related-2",
    title: "Prime Waterfront Estates: Navigating Global Coastal Investments",
    category: "Market Insights",
    date: "24 Nov 2024",
    categoryBadgeClass: "bg-[#FEEAE6] text-[#EA580C]",
    image: "/images/downloaded/photo-1512917774080-9991f1c4c750.webp",
    href: "/blog/post-2",
  },
  {
    id: "related-3",
    title: "The Rise of High-Rise Penthouses in Urban Epicenters",
    category: "Urban Living",
    date: "12 Nov 2024",
    categoryBadgeClass: "bg-[#FFF3E0] text-[#D97706]",
    image: "/images/downloaded/photo-1600607687939-ce8a6c25118c.webp",
    href: "/blog/post-3",
  },
  {
    id: "related-4",
    title: "Sustainable Sanctuaries: Net-Zero Mansions of Tomorrow",
    category: "Sustainability",
    date: "05 Nov 2024",
    categoryBadgeClass: "bg-[#FEF2F2] text-[#E11D48]",
    image: "/images/downloaded/photo-1600596542815-ffad4c1539a9.webp",
    href: "/blog/post-4",
  },
  {
    id: "related-5",
    title: "Curating Private Sanctuaries: The Art of Smart Home Living",
    category: "Smart Living",
    date: "28 Oct 2024",
    categoryBadgeClass: "bg-[#FFF3E0] text-[#D97706]",
    image: "/images/downloaded/photo-1600210492486-724fe5c67fb0.webp",
    href: "/blog/post-5",
  },
];

export default function YouMayLikeGrid({
  title = "Recent Posts",
  posts = defaultRelatedPosts,
  className = "",
}: YouMayLikeGridProps) {
  return (
    <div className={`w-full ${className}`}>
      
      <h3 className="text-xl sm:text-[22px] font-bold text-[#11131a] tracking-tight mb-4">
        {title}
      </h3>

      <motion.div
        variants={blogDetailAnimations.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-3 sm:gap-3.5"
      >
        {posts.map((post) => (
          <motion.div
            key={post.id}
            variants={blogDetailAnimations.item}
            whileHover={blogDetailAnimations.cardHover}
            className="group relative rounded-xl bg-white p-2.5 sm:p-3 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-zinc-200/80 transition-shadow hover:shadow-md cursor-pointer select-none"
          >
            <Link href={post.href || "#"} className="flex items-center gap-3 sm:gap-3.5">
              
              <div className="relative h-20 w-20 sm:h-22 sm:w-22 shrink-0 overflow-hidden rounded-lg bg-zinc-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="88px"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  unoptimized
                />
              </div>

              <div className="flex flex-col justify-center min-w-0 flex-1">
                {/* Category Badge & Date */}
                <div className="mb-1.5 flex items-center gap-2">
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold tracking-tight ${
                      post.categoryBadgeClass || "bg-[#FFF3E0] text-[#D97706]"
                    }`}
                  >
                    {post.category}
                  </span>
                  {post.date && (
                    <span className="text-[11px] text-zinc-400 font-medium truncate">
                      {post.date}
                    </span>
                  )}
                </div>

                {/* Main heading title element */}
                <h4 className="text-[13px] sm:text-[13.5px] font-bold text-[#11131a] leading-snug line-clamp-2 group-hover:text-[#2563EB] transition-colors">
                  {post.title}
                </h4>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export { YouMayLikeGrid as RecentPostsGrid };
