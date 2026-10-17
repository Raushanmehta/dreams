import type { Variants, Transition } from "framer-motion";

export const teamPortraitVariants: Variants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.02 },
};

export const teamPortraitTransition: Transition = {
  duration: 0.45,
  ease: [0.16, 1, 0.3, 1],
};

export const teamInfoVariants: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export const teamInfoTransition: Transition = {
  duration: 0.35,
  ease: [0.16, 1, 0.3, 1],
};

export const teamAnimations = {
  portrait: {
    variants: teamPortraitVariants,
    transition: teamPortraitTransition,
  },
  info: {
    variants: teamInfoVariants,
    transition: teamInfoTransition,
  },
  eyebrow: {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 } as Transition,
  },
  buttonFill: {
    variants: {
      rest: { scaleY: 0, opacity: 0 },
      hover: { scaleY: 1, opacity: 1 },
    } as Variants,
    transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] } as Transition,
  },
  buttonShine: {
    variants: {
      rest: { x: "-120%", opacity: 0 },
      hover: { x: "160%", opacity: 0.3 },
    } as Variants,
    transition: { duration: 0.7, ease: "easeInOut" } as Transition,
  },
  buttonArrow: {
    variants: {
      rest: { x: 0 },
      hover: { x: 3 },
    } as Variants,
    transition: { type: "spring", stiffness: 400, damping: 22 } as Transition,
  },
  prevArrow: {
    variants: {
      rest: { x: 0 },
      hover: { x: -3 },
    } as Variants,
    transition: { type: "spring", stiffness: 400, damping: 22 } as Transition,
  },
  nextArrow: {
    variants: {
      rest: { x: 0 },
      hover: { x: 3 },
    } as Variants,
    transition: { type: "spring", stiffness: 400, damping: 22 } as Transition,
  },
};

export default teamAnimations;
