import type { Transition } from "framer-motion";

/* Standard spring and easing */
export const springPresets = {
  gentle: {
    type: "spring",
    stiffness: 240,
    damping: 28,
    mass: 0.8,
  } as Transition,
  snappy: {
    type: "spring",
    stiffness: 380,
    damping: 30,
  } as Transition,
  bouncy: {
    type: "spring",
    stiffness: 400,
    damping: 22,
  } as Transition,
  smoothEase: [0.16, 1, 0.3, 1] as const,
};
