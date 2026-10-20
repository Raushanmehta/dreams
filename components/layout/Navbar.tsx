"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Info,
  Building2,
  Users,
  Award,
  BookOpen,
  Mail,
  ArrowRight,
  Phone,
  Compass,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import siteData from "@/data/site.json";
import { navbarAnimations } from "@/utils/animation/navbar.animation";

// Dynamic icon registry
const ICON_MAP: Record<string, LucideIcon> = {
  Home,
  Info,
  Building2,
  Users,
  Award,
  BookOpen,
  Mail,
  ArrowRight,
  Phone,
  Compass,
  Sparkles,
};

function renderNavIcon(iconName?: string, className = "w-4 h-4"): React.JSX.Element | null {
  if (!iconName) return null;
  const IconComponent = ICON_MAP[iconName];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}

// NavItem configuration interface
export interface NavItemConfig {
  label: string;
  href: string;
  icon?: string;
}

// Logo configuration interface
export interface LogoConfig {
  text: string;
  highlight: string;
  image?: string;
  alt?: string;
  href?: string;
}

// CTA configuration interface
export interface CtaConfig {
  label: string;
  href: string;
  icon?: string;
}

// Navbar content component
function NavbarContent(): React.JSX.Element {
  const pathname = usePathname();
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const { logo, navItems, cta } = siteData.navbar as {
    logo: LogoConfig;
    navItems: NavItemConfig[];
    cta: CtaConfig;
  };

  // Scroll handler effect
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

  // Route change effect
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Active navigation items
  const displayItems = navItems;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300">
      {/* Desktop navigation bar */}
      <motion.nav
        layout
        aria-label="Main Navigation"
        variants={navbarAnimations.desktop.variants}
        initial="hidden"
        animate="visible"
        transition={navbarAnimations.desktop.transition}
        className={cn(
          "pointer-events-auto relative hidden md:flex items-center text-white",
          "transition-colors duration-300",
          isScrolled
            ? "w-full rounded-none border-b border-white/10 border-x-0 bg-black/85 backdrop-blur-md px-6 md:px-10 lg:px-12 py-3 shadow-lg shadow-black/40 justify-center"
            : "w-auto max-w-[96vw] rounded-b-[24px] border-b border-x border-white/10 bg-black/95 px-5 md:px-6 lg:px-7 py-2 md:py-2.5 shadow-[0_12px_36px_rgba(0,0,0,0.55)] backdrop-blur-md justify-center"
        )}
      >
        {/* Flex layout container */}
        <motion.div
          layout
          className={cn(
            "flex items-center transition-all duration-300",
            isScrolled
              ? "w-full max-w-7xl mx-auto justify-between gap-4"
              : "w-auto justify-center gap-3 lg:gap-5"
          )}
        >
          {/* Brand logo container */}
          <motion.div
            layout
            className={cn(
              "flex items-center flex-shrink-0",
              isScrolled ? "flex-1 justify-start" : ""
            )}
          >
            <Link
              href={logo.href || "/"}
              className="group flex items-center gap-1.5 select-none focus:outline-none"
            >
              {logo.image ? (
                <Image
                  src={logo.image}
                  alt={logo.alt || logo.text}
                  width={120}
                  height={32}
                  className="h-7 w-auto object-contain"
                  priority
                />
              ) : (
                <span className="font-bold text-[17px] md:text-[18px] lg:text-[22px] tracking-tight text-white group-hover:text-[#2563EB] transition-colors">
                  {logo.text}
                  <span className="text-[#2563EB]">{logo.highlight}</span>
                </span>
              )}
            </Link>
          </motion.div>

          {/* Capsule divider element */}
          {!isScrolled && (
            <div className="w-[1px] h-3.5 bg-white/20 select-none pointer-events-none" />
          )}

          {/* Navigation links container */}
          <motion.div
            layout
            className="flex items-center justify-center flex-shrink-0"
          >
            {/* Navigation links list */}
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
                  // Navigation link item
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
                      {/* Hover pill effect */}
                      {isHovered && (
                        <motion.span
                          layoutId="navHoverBackground"
                          className="absolute inset-0 -z-10 rounded-full bg-white/[0.12]"
                          variants={navbarAnimations.pill.variants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          transition={navbarAnimations.pill.transition}
                        />
                      )}

                      {/* Active link indicator */}
                      {isActive && (
                        <motion.span
                          layoutId="navActiveIndicator"
                          className="absolute -bottom-0.5 left-2.5 right-2.5 h-[2px] bg-[#2563EB] rounded-full"
                          transition={navbarAnimations.activeIndicator.transition}
                        />
                      )}

                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>

          {/* CTA button wrapper */}
          <AnimatePresence>
            {isScrolled && (
              <motion.div
                key="desktop-cta"
                variants={navbarAnimations.desktopCta.variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={navbarAnimations.desktopCta.transition}
                className="flex-1 flex items-center justify-end flex-shrink-0"
              >
                <Link
                  href={cta.href}
                  className={cn(
                    "group relative inline-flex items-center justify-center gap-1.5 lg:gap-2",
                    "pl-3.5 lg:pl-4 pr-1.5 py-1.5 lg:py-2 rounded-full bg-white text-black text-[12px] lg:text-[13px] font-semibold",
                    "transition-all duration-200 hover:bg-zinc-100 hover:shadow-md hover:scale-105 active:scale-95 select-none",
                    pathname === cta.href && "ring-2 ring-[#2563EB]"
                  )}
                >
                  <span>{cta.label}</span>
                  <div className="w-5 h-5 lg:w-5.5 lg:h-5.5 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                    {renderNavIcon(cta.icon, "w-2.5 h-2.5 lg:w-3 lg:h-3 stroke-[2.5]") || (
                      <ArrowRight className="w-2.5 h-2.5 stroke-[2.5]" />
                    )}
                  </div>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>

      {/* Mobile navigation wrapper */}
      <div
        className={cn(
          "pointer-events-auto md:hidden w-full flex flex-col items-center transition-all duration-300",
          isScrolled ? "px-0" : "px-3.5 pt-0"
        )}
      >
        {/* Mobile header bar */}
        <motion.div
          layout
          variants={navbarAnimations.mobile.variants}
          initial="hidden"
          animate="visible"
          transition={navbarAnimations.mobile.transition}
          className={cn(
            "relative text-white border-b transition-all duration-300",
            isScrolled
              ? "w-full rounded-none border-white/10 border-x-0 bg-black/90 backdrop-blur-md px-4 py-3 shadow-lg shadow-black/40"
              : "w-full max-w-[390px] rounded-b-[22px] border-white/10 border-x bg-black px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          )}
        >
          <div className="flex items-center justify-between gap-3">
            {/* Mobile logo wrapper */}
            <Link
              href={logo.href || "/"}
              className="flex items-center gap-1.5 select-none focus:outline-none group flex-shrink-0"
            >
              {logo.image ? (
                <Image
                  src={logo.image}
                  alt={logo.alt || logo.text}
                  width={100}
                  height={28}
                  className="h-6 w-auto object-contain"
                  priority
                />
              ) : (
                <span className="font-bold text-[17px] tracking-tight text-white group-hover:text-[#2563EB] transition-colors">
                  {logo.text}
                  <span className="text-[#2563EB]">{logo.highlight}</span>
                </span>
              )}
            </Link>

            {/* Mobile controls wrapper */}
            <div className="flex items-center gap-2">
              {/* Hamburger toggle button */}
              <button
                type="button"
                onClick={() => setIsMobileOpen((prev) => !prev)}
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileOpen}
                className=" text-zinc-300 hover:text-white transition-colors focus:outline-none rounded-md cursor-pointer"
              >
                <div className="w-5 h-4 flex flex-col justify-between items-end">
                  <motion.span
                    variants={navbarAnimations.hamburger.top}
                    animate={isMobileOpen ? "open" : "closed"}
                    transition={{ duration: 0.2 }}
                    className="h-[2px] bg-white rounded-full block origin-center"
                  />
                  <motion.span
                    variants={navbarAnimations.hamburger.middle}
                    animate={isMobileOpen ? "open" : "closed"}
                    transition={{ duration: 0.15 }}
                    className="h-[2px] bg-white rounded-full block"
                  />
                  <motion.span
                    variants={navbarAnimations.hamburger.bottom}
                    animate={isMobileOpen ? "open" : "closed"}
                    transition={{ duration: 0.2 }}
                    className="h-[2px] bg-white rounded-full block origin-center"
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile dropdown menu */}
          <AnimatePresence>
            {isMobileOpen && (
              <motion.div
                variants={navbarAnimations.dropdown.variants}
                initial="closed"
                animate="open"
                exit="closed"
                transition={navbarAnimations.dropdown.transition}
                className="overflow-hidden pt-3 border-t border-white/10 mt-3"
              >
                {/* Mobile links list */}
                <ul className="flex flex-col gap-1.5 p-0 m-0 list-none pb-2">
                  {navItems.map((item, idx) => {
                    const isActive =
                      item.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(item.href);

                    return (
                      // Mobile link item
                      <motion.li
                        key={item.label}
                        custom={idx}
                        variants={navbarAnimations.dropdown.item}
                        initial="initial"
                        animate="animate"
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
                          <div className="flex items-center gap-2.5">
                            {renderNavIcon(item.icon, "w-4 h-4 text-zinc-400")}
                            <span>{item.label}</span>
                          </div>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                          )}
                        </Link>
                      </motion.li>
                    );
                  })}

                  {/* Mobile CTA item */}
                  <motion.li
                    custom={navItems.length}
                    variants={navbarAnimations.dropdown.item}
                    initial="initial"
                    animate="animate"
                    className="pt-2 border-t border-white/10 mt-1"
                  >
                    <Link
                      href={cta.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-center justify-center gap-2 text-center py-2.5 px-4 rounded-full bg-[#2563EB] text-white text-sm font-semibold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/25"
                    >
                      <span>{cta.label}</span>
                      {renderNavIcon(cta.icon, "w-3.5 h-3.5 stroke-[2.5]") || (
                        <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      )}
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
}

// Navbar root export
export default function Navbar(): React.JSX.Element {
  return (
    <Suspense fallback={null}>
      <NavbarContent />
    </Suspense>
  );
}