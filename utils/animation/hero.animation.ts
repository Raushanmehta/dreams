import type { Variants, Transition } from "framer-motion";

/**
 * Background Zoom & Fade In Animation
 */
export const heroBackgroundVariants: Variants = {
  initial: { scale: 1.08, opacity: 0.9 },
  animate: { scale: 1, opacity: 1 },
};

export const heroBackgroundTransition: Transition = {
  duration: 1.4,
  ease: [0.16, 1, 0.3, 1],
};

/**
 * Main Headline Slide Up
 */
export const heroHeadlineVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

export const heroHeadlineTransition: Transition = {
  duration: 1,
  delay: 0.15,
  ease: [0.16, 1, 0.3, 1],
};

/**
 * Infinite Linear 360-degree Rotation
 */
export const spinAnimation = {
  animate: { rotate: 360 },
  transition: { repeat: Infinity, duration: 20, ease: "linear" } as Transition,
};

/**
 * Description Paragraph Fade & Rise
 */
export const heroDescriptionVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

export const heroDescriptionTransition: Transition = {
  duration: 0.9,
  delay: 0.35,
  ease: [0.16, 1, 0.3, 1],
};

/**
 * CTA Button Entrance
 */
export const heroCtaVariants: Variants = {
  initial: { opacity: 0, y: 25, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

export const heroCtaTransition: Transition = {
  duration: 0.8,
  delay: 0.5,
  ease: [0.16, 1, 0.3, 1],
};

/**
 * Consolidated Hero Animations Object
 */
export const heroAnimations = {
  background: {
    variants: heroBackgroundVariants,
    transition: heroBackgroundTransition,
  },
  headline: {
    variants: heroHeadlineVariants,
    transition: heroHeadlineTransition,
  },
  spin: spinAnimation,
  description: {
    variants: heroDescriptionVariants,
    transition: heroDescriptionTransition,
  },
  cta: {
    variants: heroCtaVariants,
    transition: heroCtaTransition,
  },
};

export default heroAnimations;
