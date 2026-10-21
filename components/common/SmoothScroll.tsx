"use client";

import React, { useEffect, useRef, Suspense } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

interface SmoothScrollProps {
  children: React.ReactNode;
}

function SmoothScrollInner({ children }: SmoothScrollProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // Clean up any previous
    const existing = ScrollSmoother.get();
    if (existing) {
      existing.kill();
    }

    const ctx = gsap.context(() => {
      const smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.25, // Butter-smooth scroll lag timing
        effects: true, // Enables data-speed & data-lag parallax attributes
        smoothTouch: 0.1, // Subtle smoothing on mobile/touch screens
        normalizeScroll: false,
      });

      // Smooth scroll navigation for
      const handleAnchorClick = (e: MouseEvent) => {
        const anchor = (e.target as HTMLElement).closest("a");
        if (!anchor) return;

        const href = anchor.getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            smoother.scrollTo(target, true, "top 70px");
          }
        }
      };

      document.addEventListener("click", handleAnchorClick);

      return () => {
        document.removeEventListener("click", handleAnchorClick);
      };
    });

    return () => {
      ctx.revert();
    };
  }, []);

  // When route changes, reset
  useEffect(() => {
    const smoother = ScrollSmoother.get();
    if (smoother) {
      smoother.scrollTop(0);
      ScrollTrigger.refresh();
    } else if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div id="smooth-wrapper" ref={wrapperRef} className="w-full">
      <div id="smooth-content" ref={contentRef} className="w-full min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <Suspense
      fallback={
        <div id="smooth-wrapper" className="w-full">
          <div id="smooth-content" className="w-full min-h-screen">
            {children}
          </div>
        </div>
      }
    >
      <SmoothScrollInner>{children}</SmoothScrollInner>
    </Suspense>
  );
}

