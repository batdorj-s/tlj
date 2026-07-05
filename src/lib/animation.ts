import type { Variants } from "framer-motion";

export const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export const easeOut = (duration = 0.5, delay = 0) => ({
  duration,
  ease: EASE_OUT,
  delay,
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export const sectionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-80px" },
};
