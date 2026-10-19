"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MessageSquare, Sparkles } from "lucide-react";
import { FourPointStarIcon } from "@/components/icons";
import AuthorAboutCard, { type AuthorProfile } from "@/components/cards/AuthorAboutCard";
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
  description: string;
  blogPosts?: BlogDetailArticleData[];
  author?: AuthorProfile;
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
  customAuthorProfile?: AuthorProfile;
  customRelatedPosts?: RelatedPost[];
}

export default function BlogDetailSection({
  postSlug,
  customArticle,
  customAuthorProfile,
  customRelatedPosts,
}: BlogDetailSectionProps) {
  // Extract all data directly from site.json
  const blogData = siteData.blog as unknown as BlogSiteSchema;
  const allBlogPosts = blogData.blogPosts || [];
  const matchedPost = (postSlug ? allBlogPosts.find((p) => p.slug === postSlug || p.id === postSlug) : null) || allBlogPosts[0];
  const postData = matchedPost || allBlogPosts[0] || ({} as BlogDetailArticleData);

  // Build article data from matched post in site.json
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
    image: postData.image || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    author: postData.author || {
      name: "Marcus Vance",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    },
    date: postData.date || "18 Oct 2024",
    commentsCountText: postData.commentsCountText || `${postData.readTime || "4 min read"} • Market Intelligence`,
    quote: postData.quote,
    sections: postData.sections || [],
    ...customArticle,
  };

  // Build related posts for sidebar directly from site.json blogPosts
  const relatedPosts: RelatedPost[] = customRelatedPosts || allBlogPosts
    .filter((p) => p.id !== article.id && p.slug !== postSlug)
    .slice(0, 5)
    .map((p, idx) => ({
      id: p.id,
      title: p.title,
      category: p.category,
      categoryBadgeClass:
        idx % 3 === 0
          ? "bg-[#FFF3E0] text-[#D97706]"
          : idx % 3 === 1
          ? "bg-[#FEEAE6] text-[#EA580C]"
          : "bg-[#FEF2F2] text-[#E11D48]",
      image: p.image,
      href: `/blog/${p.slug || p.id}`,
    }));

  // Build author profile from site.json
  const authorProfile: AuthorProfile = customAuthorProfile || blogData.author || {
    name: "Erin Carter",
    role: "Senior Real Estate Advisor & Curator",
    bio: "Meet Erin Carter, an esteemed luxury property advisor and design curator at Dreams.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    signatureText: "Carter",
  };

  // Build promotional banner from site.json
  const promotionalBanner = blogData.promotionalBanner || {};

  return (
    <section className="relative w-full isolate bg-[#f4f4f2] text-[#11131a] px-6 md:px-12 py-12 sm:py-16 md:py-20 font-sans select-none border-t border-zinc-200">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ============================================================== */}
          {/* LEFT COLUMN: Main Blog Post Content (8 Cols)                   */}
          {/* ============================================================== */}
          <main className="lg:col-span-8 flex flex-col">
            {/* Eyebrow Badge matching site theme */}
            <motion.div
              variants={blogDetailAnimations.fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 uppercase tracking-widest text-[#11131a] font-semibold text-xs sm:text-sm mb-3.5"
            >
              <Sparkles className="h-5 w-5 text-[#2563EB]" />
              <span>{article.badgeText}</span>
            </motion.div>

            {/* 1. Main Article Title with Signature Sliced Badge and Spinning Star */}
            <motion.h1
              variants={blogDetailAnimations.fadeUp}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#11131a] leading-[1.15] uppercase mb-5 sm:mb-6"
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

            {/* 2. Hero Featured Image (Luxury Estate from site.json) */}
            <motion.figure
              variants={blogDetailAnimations.fadeUp}
              initial="hidden"
              animate="visible"
              className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-zinc-200/80 mb-4 sm:mb-5 bg-zinc-100"
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

            {/* 3. Meta Information Bar (Author, Date, Comments) */}
            <motion.div
              variants={blogDetailAnimations.fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-5 sm:gap-6 text-xs sm:text-[13px] text-zinc-500 pb-5 mb-7 sm:mb-8 border-b border-zinc-200/80"
            >
              {/* Author Avatar + Name */}
              <div className="flex items-center gap-2.5">
                <div className="relative h-7 w-7 rounded-full overflow-hidden border border-zinc-300 shadow-xs flex-shrink-0">
                  <Image
                    src={article.author?.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"}
                    alt={article.author?.name || "Author"}
                    fill
                    sizes="28px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <span className="font-bold text-[#11131a] text-sm">
                  {article.author?.name}
                </span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-1.5 text-zinc-500 font-medium">
                <Calendar className="h-3.5 w-3.5 text-zinc-400" />
                <time dateTime={article.date}>
                  {article.date}
                </time>
              </div>

              {/* Comments / Read Time */}
              <div className="flex items-center gap-1.5 text-zinc-500 font-medium">
                <MessageSquare className="h-3.5 w-3.5 text-zinc-400" />
                <span>
                  {article.commentsCountText}
                </span>
              </div>
            </motion.div>

            {/* 4. Article Body Content - Dynamic sections from site.json */}
            <article className="prose prose-zinc max-w-none text-[#52525b] text-[15px] sm:text-[15.5px] leading-[1.8]">
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
                      <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-[#11131a] tracking-tight mb-3 mt-6">
                        {sec.subheading}
                      </h2>
                      {sec.paragraphs.map((para, pIdx) => (
                        <p key={pIdx} className="mb-4">
                          {para}
                        </p>
                      ))}
                    </motion.div>

                    {/* Show Quote block after the second section (or if only 1 section) */}
                    {(idx === 1 || (article.sections && article.sections.length <= 1)) && article.quote && (
                      <motion.blockquote
                        variants={blogDetailAnimations.fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="my-7 sm:my-8 rounded-2xl bg-white p-6 sm:p-8 md:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-zinc-200/80 relative not-italic"
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

          {/* ============================================================== */}
          {/* RIGHT COLUMN: Sidebar (4 Cols)                                 */}
          {/* ============================================================== */}
          <aside className="lg:col-span-4 flex flex-col gap-8 sm:gap-9 lg:sticky lg:top-24">
            {/* 1. Author About Profile Card (From site.json blog.author) */}
            <AuthorAboutCard author={authorProfile} />

            {/* 2. You May Like Grid (From site.json blog.blogPosts) */}
            <YouMayLikeGrid posts={relatedPosts} />

            {/* 3. Promotional Content Gradient Banner (From site.json blog.promotionalBanner) */}
            <PromotionalBannerCard {...promotionalBanner} />
          </aside>
        </div>
      </div>
    </section>
  );
}

export { AuthorAboutCard, YouMayLikeGrid, PromotionalBannerCard };