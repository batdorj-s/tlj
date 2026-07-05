import type { Variants } from "framer-motion";

export const CUSTOM_EASE = [0.32, 0.72, 0, 1] as const;
export const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export const easeOut = (duration = 0.5, delay = 0) => ({
  duration,
  ease: EASE_OUT,
  delay,
});

export const customEase = (duration = 0.8, delay = 0) => ({
  duration,
  ease: CUSTOM_EASE,
  delay,
});

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeUpBlur: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
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

export const sectionPropsHeavy = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-120px" },
};
