"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Properties", href: "#properties" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact us", href: "#contact" },
];

export default function Navbar() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When scrolled to full width, 'Contact us' is displayed as the dedicated right-side CTA button.
  // In the top notch capsule, all 6 items are displayed cleanly in the notch.
  const displayItems = isScrolled
    ? navItems.filter((item) => item.href !== "#contact")
    : navItems;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300">
      {/* Desktop & Tablet Navigation */}
      <motion.nav
        layout
        aria-label="Main Navigation"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          layout: {
            type: "spring",
            stiffness: 240,
            damping: 28,
            mass: 0.8,
          },
          y: {
            type: "spring",
            stiffness: 280,
            damping: 24,
            mass: 0.8,
          },
        }}
        className={cn(
          "pointer-events-auto relative hidden sm:flex items-center text-white",
          "transition-colors duration-300",
          isScrolled
            ? "w-full rounded-none border-b border-white/10 border-x-0 bg-black/85 backdrop-blur-md px-6 md:px-12 py-3.5 shadow-lg shadow-black/40 justify-center"
            : "w-auto rounded-b-[24px] md:rounded-b-[26px] border-b border-x border-white/10 bg-black px-7 md:px-9 py-2.5 md:py-3 shadow-[0_12px_36px_rgba(0,0,0,0.55)] backdrop-blur-md justify-center"
        )}
      >
        <motion.div
          layout
          className={cn(
            "flex items-center transition-all duration-300",
            isScrolled
              ? "w-full max-w-7xl mx-auto justify-between"
              : "w-auto justify-center gap-4 md:gap-6"
          )}
        >
          {/* Left Side: Brand Logo (Always visible in navbar) */}
          <motion.div
            layout
            className={cn(
              "flex items-center flex-shrink-0",
              isScrolled ? "flex-1 justify-start" : ""
            )}
          >
            <Link
              href="/"
              className="group flex items-center gap-0.5 select-none focus:outline-none"
            >
              <span className="font-bold text-[17px] md:text-[19px] tracking-tight text-white group-hover:text-[#2563EB] transition-colors">
                Dreams<span className="text-[#2563EB]">*</span>
              </span>
            </Link>
          </motion.div>

          {/* Subtle divider in capsule mode */}
          {!isScrolled && (
            <div className="w-[1px] h-3.5 bg-white/20 select-none pointer-events-none" />
          )}

          {/* Center: Nav Items */}
          <motion.div
            layout
            className="flex items-center justify-center flex-shrink-0"
          >
            <motion.ul
              layout
              className={cn(
                "flex items-center m-0 p-0 list-none",
                isScrolled ? "gap-5 md:gap-7 lg:gap-8" : "gap-4 md:gap-6"
              )}
            >
              {displayItems.map((item, idx) => {
                const isHovered = hoveredIdx === idx;
                const isActive = activeIdx === idx;

                return (
                  <motion.li layout key={item.label} className="relative">
                    <Link
                      href={item.href}
                      onClick={() => setActiveIdx(idx)}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className={cn(
                        "relative block px-2.5 py-1 text-[13px] md:text-[14px]",
                        "font-normal tracking-[-0.01em] transition-colors duration-200 select-none whitespace-nowrap",
                        isActive
                          ? "text-white font-medium"
                          : "text-zinc-300 hover:text-white"
                      )}
                    >
                      {/* Subtle Framer Motion hover pill */}
                      {isHovered && (
                        <motion.span
                          layoutId="navHoverBackground"
                          className="absolute inset-0 -z-10 rounded-full bg-white/[0.12]"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}

                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>

          {/* Right Side: CTA Button (Only shown when navbar is full-width / scrolled) */}
          <AnimatePresence>
            {isScrolled && (
              <motion.div
                key="desktop-contact"
                initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 flex items-center justify-end flex-shrink-0"
              >
                <Link
                  href="#contact"
                  className={cn(
                    "group relative inline-flex items-center justify-center gap-2",
                    "pl-4 pr-1.5 py-2 rounded-full bg-white text-black text-[13px] md:text-[13.5px] font-medium",
                    "transition-all duration-200 hover:bg-zinc-100 hover:shadow-md hover:scale-105 active:scale-95 select-none"
                  )}
                >
                  <span>Contact us</span>
                  <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>

      {/* Mobile Dynamic Island / Full-width bar on Scroll */}
      <div
        className={cn(
          "pointer-events-auto sm:hidden w-full flex flex-col items-center transition-all duration-300",
          isScrolled ? "px-0" : "px-4 pt-0"
        )}
      >
        <motion.div
          layout
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            layout: { type: "spring", stiffness: 240, damping: 28 },
            y: { type: "spring", stiffness: 300, damping: 25 },
          }}
          className={cn(
            "relative text-white border-b transition-all duration-300",
            isScrolled
              ? "w-full rounded-none border-white/10 border-x-0 bg-black/90 backdrop-blur-md px-4 py-3 shadow-lg shadow-black/40"
              : "w-full max-w-[360px] rounded-b-[22px] border-white/10 border-x bg-black px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Mobile Logo: Always shown */}
            <Link
              href="/"
              className="flex items-center gap-0.5 select-none focus:outline-none group"
            >
              <span className="font-bold text-[17px] tracking-tight text-white group-hover:text-[#2563EB] transition-colors">
                Dreams<span className="text-[#2563EB]">*</span>
              </span>
            </Link>

            <div className="flex items-center gap-2.5">
              {/* Mobile CTA Button (Only shown when scrolled) */}
              <AnimatePresence>
                {isScrolled && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <Link
                      href="#contact"
                      className="px-3 py-1 rounded-full bg-white text-black text-xs font-medium hover:bg-zinc-200 transition-colors"
                    >
                      Contact us
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setIsMobileOpen((prev) => !prev)}
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileOpen}
                className="p-1 text-zinc-300 hover:text-white transition-colors focus:outline-none"
              >
                <div className="w-5 h-4 flex flex-col justify-between items-end">
                  <motion.span
                    animate={{
                      rotate: isMobileOpen ? 45 : 0,
                      y: isMobileOpen ? 6.5 : 0,
                      width: isMobileOpen ? 20 : 20,
                    }}
                    transition={{ duration: 0.2 }}
                    className="h-[2px] bg-white rounded-full block origin-center"
                  />
                  <motion.span
                    animate={{
                      opacity: isMobileOpen ? 0 : 1,
                      width: 14,
                    }}
                    transition={{ duration: 0.15 }}
                    className="h-[2px] bg-white rounded-full block"
                  />
                  <motion.span
                    animate={{
                      rotate: isMobileOpen ? -45 : 0,
                      y: isMobileOpen ? -6.5 : 0,
                      width: isMobileOpen ? 20 : 20,
                    }}
                    transition={{ duration: 0.2 }}
                    className="h-[2px] bg-white rounded-full block origin-center"
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Animated Mobile Dropdown */}
          <AnimatePresence>
            {isMobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden pt-3 border-t border-white/10 mt-3"
              >
                <ul className="flex flex-col gap-2 p-0 m-0 list-none pb-1">
                  {navItems.map((item, idx) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => {
                          setActiveIdx(idx);
                          setIsMobileOpen(false);
                        }}
                        className={cn(
                          "block py-2 px-3 rounded-lg text-sm transition-colors",
                          activeIdx === idx
                            ? "bg-white/10 text-white font-medium"
                            : "text-zinc-300 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                  {!isScrolled && (
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navItems.length * 0.05 }}
                      className="pt-2"
                    >
                      <Link
                        href="#contact"
                        onClick={() => setIsMobileOpen(false)}
                        className="block text-center py-2 px-4 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
                      >
                        Contact us
                      </Link>
                    </motion.li>
                  )}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
}