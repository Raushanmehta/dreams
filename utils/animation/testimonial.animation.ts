import type { Transition } from "framer-motion";

export const testimonialAnimations = {
  eyebrow: {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 } as Transition,
  },
  headline: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: 0.1 } as Transition,
  },
  spin: {
    animate: { rotate: 360 },
    transition: { repeat: Infinity, duration: 20, ease: "linear" } as Transition,
  },
  description: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay: 0.2 } as Transition,
  },
};

export default testimonialAnimations;
