
"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";

export interface BreadCrumbProps {
  title?: string;
  subtitle?: string;
}

function BreadCrumbInner({ title, subtitle }: BreadCrumbProps) {
  const pathname = usePathname();
  const currentRoute = {
    title:
      title ||
      pathname
        .replace("/", "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()) ||
      "Page",
    subtitle:
      subtitle || "Experience unparalleled prestige and architectural elegance.",
  };

  const displayTitle = title || currentRoute.title;
  const displaySubtitle = subtitle || currentRoute.subtitle;

  return (
    <section className="relative w-full bg-black text-white pt-28 sm:pt-32 md:pt-36 pb-14 sm:pb-16 md:pb-20 px-6 md:px-12 overflow-hidden border-b border-zinc-900 select-none">
      {/* Ambient radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(37,99,235,0.14),transparent)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-start gap-4">
        {/* Breadcrumb Navigation Trail */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400"
        >
          <Link
            href="/"
            className="flex items-center gap-1.5 hover:text-white transition-colors group"
          >
            <Home className="w-3.5 h-3.5 group-hover:text-[#2563EB] transition-colors" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-[#2563EB] font-medium">{displayTitle}</span>
        </motion.nav>

        {/* Page Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-2 max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {displayTitle}
            <span className="text-[#2563EB]">*</span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {displaySubtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default function BreadCrumb(props: BreadCrumbProps): React.JSX.Element {
  return (
    <Suspense fallback={<div className="w-full bg-black py-16" />}>
      <BreadCrumbInner {...props} />
    </Suspense>
  );
}