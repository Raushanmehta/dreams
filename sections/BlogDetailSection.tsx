"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MessageSquare, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { FourPointStarIcon } from "@/components/icons";
import YouMayLikeGrid, { type RelatedPost } from "@/components/cards/YouMayLikeGrid";
import PromotionalBannerCard from "@/components/cards/PromotionalBannerCard";
import { blogDetailAnimations } from "@/utils/animation/blog-detail.animation";
import siteData from "@/data/site.json";

export interface BlogContentSection {
  subheading: string;
  paragraphs: string[];
}

export interface BlogDetailArticleData {
  id: string;
  slug?: string;
  title: string;
  excerpt?: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  isLatest?: boolean;
  badgeText?: string;
  headlinePrefix?: string;
  headlineBadge?: string;
  headlineSuffix?: string;
  author?: {
    name: string;
    avatar: string;
  };
  commentsCountText?: string;
  quote?: {
    text: string;
    author: string;
  };
  sections?: BlogContentSection[];
}

export interface BlogSiteSchema {
  pageTitle: string;
  pageSubtitle: string;
  badgeText: string;
  badgeIcon: string;
  headline: {
    prefix: string;
    badge: string;
    icon: string;
  };
  description?: string;
  blogPosts?: BlogDetailArticleData[];
  author?: {
    name?: string;
    role?: string;
    bio?: string;
    avatar?: string;
  };
  promotionalBanner?: {
    badge?: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonHref?: string;
  };
}

export interface BlogDetailSectionProps {
  postSlug?: string;
  customArticle?: Partial<BlogDetailArticleData>;
  customRelatedPosts?: RelatedPost[];
}

export default function BlogDetailSection({
  postSlug,
  customArticle,
  customRelatedPosts,
}: BlogDetailSectionProps) {
  // Extract all data directly
  const blogData = siteData.blog as unknown as BlogSiteSchema;
  const allBlogPosts = blogData.blogPosts || [];
  const matchedPost = (postSlug ? allBlogPosts.find((p) => p.slug === postSlug || p.id === postSlug) : null) || allBlogPosts[0];
  const postData = matchedPost || allBlogPosts[0] || ({} as BlogDetailArticleData);

  // Build article data from
  const titleWords = (postData.title || "Architectural Trends Defining Luxury Living in 2025").split(" ");
  const article: BlogDetailArticleData = {
    id: postData.id || "post-1",
    badgeText: postData.badgeText || `${postData.category || "Architecture"} • Insights`,
    headlinePrefix: postData.headlinePrefix || titleWords[0] || "Architectural",
    headlineBadge: postData.headlineBadge || titleWords[1] || "Trends",
    headlineSuffix: postData.headlineSuffix || titleWords.slice(2).join(" ") || "",
    title: postData.title || "Architectural Trends Defining Luxury Living in 2025",
    excerpt: postData.excerpt,
    category: postData.category || "Architecture",
    readTime: postData.readTime || "4 min read",
    image: postData.image || "/images/downloaded/photo-1600585154340-be6161a56a0c.webp",
    author: postData.author || {
      name: "Marcus Vance",
      avatar: "/images/downloaded/photo-1534528741775-53994a69daeb.webp",
    },
    date: postData.date || "18 Oct 2024",
    commentsCountText: postData.commentsCountText || `${postData.readTime || "4 min read"} • Market Intelligence`,
    quote: postData.quote,
    sections: postData.sections || [],
    ...customArticle,
  };

  // Build recent posts for
  const relatedPosts: RelatedPost[] = customRelatedPosts || allBlogPosts
    .filter((p) => p.id !== article.id && p.slug !== postSlug)
    .slice(0, 5)
    .map((p, idx) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      date: p.date,
      categoryBadgeClass:
        idx % 3 === 0
          ? "bg-[#FFF3E0] text-[#D97706]"
          : idx % 3 === 1
            ? "bg-[#FEEAE6] text-[#EA580C]"
            : "bg-[#FEF2F2] text-[#E11D48]",
      image: p.image,
      href: `/blog/${p.slug || p.id}`,
    }));

  // Build promotional banner from site.json
  const promotionalBanner = blogData.promotionalBanner || {};

  // References for sticky column
  const mainColRef = useRef<HTMLDivElement | null>(null);
  const sidebarContainerRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let pinTrigger: ScrollTrigger | null = null;
    const mm = gsap.matchMedia();

    const setupPin = () => {
      mm.add("(min-width: 1024px)", () => {
        if (!sidebarRef.current || !mainColRef.current) return;

        if (pinTrigger) {
          pinTrigger.kill();
          pinTrigger = null;
        }

        const smoother = ScrollSmoother.get();
        const hasSmoothContent = Boolean(document.querySelector("#smooth-content"));

        pinTrigger = ScrollTrigger.create({
          trigger: sidebarRef.current,
          start: "top 90px",
          end: () => {
            if (!mainColRef.current || !sidebarRef.current) return "+=0";
            const diff = mainColRef.current.offsetHeight - sidebarRef.current.offsetHeight;
            return `+=${Math.max(0, diff)}`;
          },
          pin: true,
          pinSpacing: false,
          pinType: (smoother || hasSmoothContent) ? "transform" : "fixed",
          invalidateOnRefresh: true,
        });

        return () => {
          if (pinTrigger) {
            pinTrigger.kill();
            pinTrigger = null;
          }
        };
      });

      ScrollTrigger.refresh();
    };

    // Small delay ensures ScrollSmoother
    const timer = setTimeout(setupPin, 120);
    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(refreshTimer);
      if (pinTrigger) pinTrigger.kill();
      mm.revert();
    };
  }, []);

  return (
    <section className="relative w-full isolate  text-[#11131a] bg-[#f4f4f2] px-4 md:px-12 py-8 md:py-10 lg:py-20 font-sans select-none border-t border-zinc-200">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main 2 Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN Main Blog */}
          
          <main ref={mainColRef} className="lg:col-span-8 flex flex-col">
            {/* Eyebrow Badge matching site theme */}
            <motion.div
              variants={blogDetailAnimations.fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 uppercase tracking-widest text-[#11131a] font-semibold  mb-3.5"
            >
              <Sparkles className="h-5 w-5 text-[#2563EB]" />
              <span>{article.badgeText}</span>
            </motion.div>

            {/* Main Article Title with */}
            <motion.h1
              variants={blogDetailAnimations.fadeUp}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#11131a] leading-[1.15] uppercase mb-3 sm:mb-4"
            >
              <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-2">
                <span>{article.headlinePrefix}</span>
                {article.headlineBadge && (
                  <span className="relative inline-block bg-[#2563EB] text-white px-3 sm:px-4 md:px-5 py-0.5 sm:py-1 leading-none -skew-x-14 md:-skew-x-18 shadow-[0_8px_26px_rgba(37,99,235,0.4)] select-none">
                    <span className="inline-block skew-x-14 md:skew-x-18">
                      {article.headlineBadge}
                    </span>
                  </span>
                )}
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  className="inline-flex items-center justify-center text-[#2563EB] drop-shadow-[0_0_12px_rgba(37,99,235,0.4)] ml-0.5 sm:ml-1"
                >
                  <FourPointStarIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563EB]" />
                </motion.span>
                {article.headlineSuffix && (
                  <span>{article.headlineSuffix}</span>
                )}
              </div>
            </motion.h1>

            {/* Hero Featured Image (Luxury */}
            <motion.figure
              variants={blogDetailAnimations.fadeUp}
              initial="hidden"
              animate="visible"
              className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-zinc-200/80  bg-zinc-100"
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
                unoptimized
              />
            </motion.figure>

            {/* Article Body Content Dynamic */}
            <article className="prose prose-zinc max-w-none text-[#52525b] text-[15px] sm:text-[15.5px] leading-[1.8] mt-3">
              {article.sections && article.sections.length > 0 ? (
                article.sections.map((sec, idx) => (
                  <React.Fragment key={idx}>
                    <motion.div
                      variants={blogDetailAnimations.fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className={idx > 0 ? "pt-1" : ""}
                    >
                      <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#11131a] tracking-tight mb-3 mt-3">
                        {sec.subheading}
                      </h2>
                      {sec.paragraphs.map((para, pIdx) => (
                        <p key={pIdx} className="">
                          {para}
                        </p>
                      ))}
                    </motion.div>

                    {/* Show Quote block after */}
                    {(idx === 1 || (article.sections && article.sections.length <= 1)) && article.quote && (
                      <motion.blockquote
                        variants={blogDetailAnimations.fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="my-3 sm:my-4 rounded-2xl bg-white p-6 sm:p-8 md:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-zinc-200/80 relative not-italic"
                      >
                        <p className="text-base sm:text-lg lg:text-[19px] font-semibold text-[#11131a] leading-relaxed mb-3">
                          &ldquo;{article.quote.text}&rdquo;
                        </p>
                        <footer className="text-xs sm:text-sm font-medium text-zinc-400 tracking-wide">
                          {article.quote.author}
                        </footer>
                      </motion.blockquote>
                    )}
                  </React.Fragment>
                ))
              ) : (
                <p>{article.excerpt}</p>
              )}
            </article>
          </main>

          {/* RIGHT COLUMN Sidebar */}
          
          <aside ref={sidebarContainerRef} className="lg:col-span-4 relative self-start w-full">
            <div ref={sidebarRef} className="w-full flex flex-col gap-4 sm:gap-6 lg:sticky lg:top-0">
              {/* Recent Posts Grid (From */}
              <YouMayLikeGrid title="Recent Posts" posts={relatedPosts} />

              {/* Promotional Content Gradient Banner */}
              <PromotionalBannerCard {...promotionalBanner} />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export { YouMayLikeGrid, YouMayLikeGrid as RecentPostsGrid, PromotionalBannerCard };