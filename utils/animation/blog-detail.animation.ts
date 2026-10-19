import type { Variants, Transition } from "framer-motion";

export const detailFadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const detailStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const detailItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export const blogDetailAnimations = {
  container: detailStaggerContainer,
  item: detailItemVariants,
  fadeUp: detailFadeUpVariants,
  cardHover: {
    y: -4,
    transition: { duration: 0.25, ease: "easeOut" } as Transition,
  },
  buttonHover: {
    scale: 1.04,
    transition: { duration: 0.2 } as Transition,
  },
  buttonTap: {
    scale: 0.96,
  },
  socialHover: {
    scale: 1.12,
    y: -2,
    transition: { duration: 0.2 } as Transition,
  },
};

export default blogDetailAnimations;
