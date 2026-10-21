import type { Variants, Transition } from "framer-motion";

/* About Section Stagger Container */
export const aboutContainerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

/* About Section Rise / */
export const aboutRiseVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/* About Hero Image Panel Entrance */
export const aboutImageVariants: Variants = {
  initial: { opacity: 0, scale: 0.97 },
  animate: { opacity: 1, scale: 1 },
};

export const aboutImageTransition: Transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

/* Luxury CTA Button Fill */
export const buttonFillVariants: Variants = {
  rest: { scaleY: 0, opacity: 0 },
  hover: { scaleY: 1, opacity: 1 },
};

export const buttonFillTransition: Transition = {
  duration: 0.38,
  ease: [0.16, 1, 0.3, 1],
};

export const buttonShineVariants: Variants = {
  rest: { x: "-120%", opacity: 0 },
  hover: { x: "160%", opacity: 0.3 },
};

export const buttonShineTransition: Transition = {
  duration: 0.7,
  ease: "easeInOut",
};

export const buttonArrowVariants: Variants = {
  rest: { x: 0 },
  hover: { x: 4 },
};

export const buttonArrowTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 22,
};

/* Eyebrow Fade in Variants */
export const eyebrowVariants: Variants = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
};

/* Consolidated About Animations Object */
export const aboutAnimations = {
  container: aboutContainerVariants,
  rise: aboutRiseVariants,
  image: {
    variants: aboutImageVariants,
    transition: aboutImageTransition,
  },
  eyebrow: {
    variants: eyebrowVariants,
    transition: { duration: 0.5 } as Transition,
  },
  spin: {
    animate: { rotate: 360 },
    transition: { repeat: Infinity, duration: 20, ease: "linear" } as Transition,
  },
  button: {
    fill: {
      variants: buttonFillVariants,
      transition: buttonFillTransition,
    },
    shine: {
      variants: buttonShineVariants,
      transition: buttonShineTransition,
    },
    arrow: {
      variants: buttonArrowVariants,
      transition: buttonArrowTransition,
    },
  },
};

export default aboutAnimations;
