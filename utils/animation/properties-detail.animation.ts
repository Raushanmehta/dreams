import type { Variants, Transition } from "framer-motion";

export const detailHeroVariants: Variants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
};

export const detailHeroTransition: Transition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
};

export const detailFadeUpVariants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export const detailContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const detailItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export const propertiesDetailAnimations = {
  hero: {
    variants: detailHeroVariants,
    transition: detailHeroTransition,
  },
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } as Transition,
  },
  container: detailContainerVariants,
  item: detailItemVariants,
  buttonHover: { scale: 1.05, y: -2 },
  buttonTap: { scale: 0.96 },
  cardHover: { y: -3, transition: { duration: 0.25 } as Transition },
};

export default propertiesDetailAnimations;
