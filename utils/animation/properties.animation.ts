import type { Variants, Transition } from "framer-motion";

export const propertiesAnimations = {
  eyebrow: {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 } as Transition,
  },
  headline: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.1 } as Transition,
  },
  description: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.2 } as Transition,
  },
  spin: {
    animate: { rotate: 360 },
    transition: { repeat: Infinity, duration: 20, ease: "linear" } as Transition,
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

export default propertiesAnimations;
