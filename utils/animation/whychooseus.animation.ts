import type { Variants, Transition } from "framer-motion";

export const whyChooseUsImageVariants: Variants = {
  initial: { opacity: 0, x: -35 },
  whileInView: { opacity: 1, x: 0 },
};

export const whyChooseUsImageTransition: Transition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
};

export const whyChooseUsFloatingAsterisk = {
  animate: { rotate: 360, y: [0, -6, 0] },
  transition: {
    rotate: { repeat: Infinity, duration: 20, ease: "linear" },
    y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
  } as Transition,
};

export const whyChooseUsContainerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const whyChooseUsItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const whyChooseUsAnimations = {
  image: {
    variants: whyChooseUsImageVariants,
    transition: whyChooseUsImageTransition,
  },
  floatingAsterisk: whyChooseUsFloatingAsterisk,
  eyebrow: {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 } as Transition,
  },
  headline: {
    initial: { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.1 } as Transition,
  },
  spin: {
    animate: { rotate: 360 },
    transition: { repeat: Infinity, duration: 20, ease: "linear" } as Transition,
  },
  description: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.2 } as Transition,
  },
  gridContainer: whyChooseUsContainerVariants,
  gridItem: whyChooseUsItemVariants,
};

export default whyChooseUsAnimations;
