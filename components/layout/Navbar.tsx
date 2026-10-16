"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Properties", href: "/properties" },
  { label: "Team", href: "/team" },
  { label: "Clients", href: "/clients" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
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

  // Close mobile drawer whenever route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // When scrolled to full width, 'Contact us' shifts out of the center capsule into the dedicated right-side CTA button.
  // In the top notch capsule (unscrolled), all items including 'Contact us' are displayed inside the capsule.
  const displayItems = isScrolled
    ? navItems.filter((item) => item.href !== "/contact")
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
          "pointer-events-auto relative hidden md:flex items-center text-white",
          "transition-colors duration-300",
          isScrolled
            ? "w-full rounded-none border-b border-white/10 border-x-0 bg-black/85 backdrop-blur-md px-6 md:px-10 lg:px-12 py-3 shadow-lg shadow-black/40 justify-center"
            : "w-auto max-w-[96vw] rounded-b-[24px] border-b border-x border-white/10 bg-black/95 px-5 md:px-6 lg:px-7 py-2 md:py-2.5 shadow-[0_12px_36px_rgba(0,0,0,0.55)] backdrop-blur-md justify-center"
        )}
      >
        <motion.div
          layout
          className={cn(
            "flex items-center transition-all duration-300",
            isScrolled
              ? "w-full max-w-7xl mx-auto justify-between gap-4"
              : "w-auto justify-center gap-3 lg:gap-5"
          )}
        >
          {/* Brand Logo */}
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
              <span className="font-bold text-[17px] md:text-[18px] lg:text-[19px] tracking-tight text-white group-hover:text-[#2563EB] transition-colors">
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
                isScrolled ? "gap-2 lg:gap-5" : "gap-1 md:gap-1.5 lg:gap-3"
              )}
            >
              {displayItems.map((item) => {
                const isHovered = hoveredHref === item.href;
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <motion.li layout key={item.label} className="relative">
                    <Link
                      href={item.href}
                      onMouseEnter={() => setHoveredHref(item.href)}
                      onMouseLeave={() => setHoveredHref(null)}
                      className={cn(
                        "relative block px-2.5 lg:px-3 py-1 text-[12.5px] lg:text-[13.5px]",
                        "tracking-[-0.01em] transition-colors duration-200 select-none whitespace-nowrap",
                        isActive
                          ? "text-white font-semibold"
                          : "text-zinc-300 hover:text-white font-normal"
                      )}
                    >
                      {/* Framer Motion hover pill */}
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

                      {/* Active indicator dot/pill */}
                      {isActive && (
                        <motion.span
                          layoutId="navActiveIndicator"
                          className="absolute -bottom-0.5 left-2.5 right-2.5 h-[2px] bg-[#2563EB] rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 380,
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

          {/* Right Side: CTA Button (Only shown when scrolled - shifts out of menu) */}
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
                  href="/contact"
                  className={cn(
                    "group relative inline-flex items-center justify-center gap-1.5 lg:gap-2",
                    "pl-3.5 lg:pl-4 pr-1.5 py-1.5 lg:py-2 rounded-full bg-white text-black text-[12px] lg:text-[13px] font-semibold",
                    "transition-all duration-200 hover:bg-zinc-100 hover:shadow-md hover:scale-105 active:scale-95 select-none",
                    pathname === "/contact" && "ring-2 ring-[#2563EB]"
                  )}
                >
                  <span>Contact us</span>
                  <div className="w-5 h-5 lg:w-5.5 lg:h-5.5 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
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
          "pointer-events-auto md:hidden w-full flex flex-col items-center transition-all duration-300",
          isScrolled ? "px-0" : "px-3.5 pt-0"
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
              : "w-full max-w-[390px] rounded-b-[22px] border-white/10 border-x bg-black px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          )}
        >
          <div className="flex items-center justify-between gap-3">
            {/* Mobile Logo */}
            <Link
              href="/"
              className="flex items-center gap-0.5 select-none focus:outline-none group flex-shrink-0"
            >
              <span className="font-bold text-[17px] tracking-tight text-white group-hover:text-[#2563EB] transition-colors">
                Dreams<span className="text-[#2563EB]">*</span>
              </span>
            </Link>

            <div className="flex items-center gap-2">
              {/* Mobile CTA Button (Only shown when scrolled) */}
              <AnimatePresence>
                {isScrolled && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <Link
                      href="/contact"
                      className={cn(
                        "px-3 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-200 transition-colors whitespace-nowrap",
                        pathname === "/contact" && "ring-2 ring-[#2563EB]"
                      )}
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
                className="p-1.5 text-zinc-300 hover:text-white transition-colors focus:outline-none rounded-md"
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
                <ul className="flex flex-col gap-1.5 p-0 m-0 list-none pb-2">
                  {navItems.map((item, idx) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);

                    return (
                      <motion.li
                        key={item.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileOpen(false)}
                          className={cn(
                            "flex items-center justify-between py-2 px-3 rounded-lg text-sm transition-colors",
                            isActive
                              ? "bg-white/15 text-white font-semibold"
                              : "text-zinc-300 hover:bg-white/5 hover:text-white"
                          )}
                        >
                          <span>{item.label}</span>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}

                  {!isScrolled && (
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navItems.length * 0.04 }}
                      className="pt-2 border-t border-white/10 mt-1"
                    >
                      <Link
                        href="/contact"
                        onClick={() => setIsMobileOpen(false)}
                        className="flex items-center justify-center gap-2 text-center py-2.5 px-4 rounded-full bg-[#2563EB] text-white text-sm font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25"
                      >
                        <span>Contact us</span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
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