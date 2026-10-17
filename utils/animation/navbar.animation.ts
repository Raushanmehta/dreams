import type { Variants, Transition } from "framer-motion";

/**
 * Desktop Navbar entrance & layout transition
 */
export const navbarDesktopVariants: Variants = {
  hidden: { y: -60, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const navbarDesktopTransition: Transition = {
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
};

/**
 * Navigation Link Hover Pill Animation
 */
export const navHoverPillVariants: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export const navHoverPillTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

/**
 * Navigation Link Active Indicator Pill
 */
export const navActiveIndicatorTransition: Transition = {
  type: "spring",
  stiffness: 380,
  damping: 30,
};

/**
 * Desktop Scrolled CTA Button Entrance
 */
export const desktopCtaVariants: Variants = {
  hidden: { opacity: 0, x: 20, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: 20, filter: "blur(4px)" },
};

export const desktopCtaTransition: Transition = {
  duration: 0.28,
  ease: [0.16, 1, 0.3, 1],
};

/**
 * Mobile Navbar Container Entrance & Layout Transition
 */
export const mobileNavbarVariants: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const mobileNavbarTransition: Transition = {
  layout: { type: "spring", stiffness: 240, damping: 28 },
  y: { type: "spring", stiffness: 300, damping: 25 },
};

/**
 * Mobile CTA Button on Scrolled Header
 */
export const mobileCtaVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

/**
 * Mobile Hamburger Menu Icon Line Variants
 */
export const hamburgerTopVariants: Variants = {
  closed: { rotate: 0, y: 0, width: 20 },
  open: { rotate: 45, y: 6.5, width: 20 },
};

export const hamburgerMiddleVariants: Variants = {
  closed: { opacity: 1, width: 14 },
  open: { opacity: 0, width: 14 },
};

export const hamburgerBottomVariants: Variants = {
  closed: { rotate: 0, y: 0, width: 20 },
  open: { rotate: -45, y: -6.5, width: 20 },
};

/**
 * Mobile Dropdown Menu Container (Accordion Height & Fade)
 */
export const mobileDropdownVariants: Variants = {
  closed: { opacity: 0, height: 0 },
  open: { opacity: 1, height: "auto" },
};

export const mobileDropdownTransition: Transition = {
  duration: 0.25,
  ease: "easeInOut",
};

/**
 * Mobile Staggered Nav Items
 */
export const mobileNavItemVariants: Variants = {
  initial: { opacity: 0, x: -10 },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.04,
      duration: 0.25,
    },
  }),
};

/**
 * Consolidated navbarAnimations object
 */
export const navbarAnimations = {
  desktop: {
    variants: navbarDesktopVariants,
    transition: navbarDesktopTransition,
  },
  pill: {
    variants: navHoverPillVariants,
    transition: navHoverPillTransition,
  },
  activeIndicator: {
    transition: navActiveIndicatorTransition,
  },
  desktopCta: {
    variants: desktopCtaVariants,
    transition: desktopCtaTransition,
  },
  mobile: {
    variants: mobileNavbarVariants,
    transition: mobileNavbarTransition,
    cta: mobileCtaVariants,
  },
  hamburger: {
    top: hamburgerTopVariants,
    middle: hamburgerMiddleVariants,
    bottom: hamburgerBottomVariants,
  },
  dropdown: {
    variants: mobileDropdownVariants,
    transition: mobileDropdownTransition,
    item: mobileNavItemVariants,
  },
};

export default navbarAnimations;
