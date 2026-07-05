"use client";

import { motion } from "framer-motion";
import { EASE_OUT } from "@/lib/animation";

export function MenuToggle({
  isOpen,
  ...props
}: { isOpen: boolean } & React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      aria-label={isOpen ? "Цэсийг хаах" : "Цэсийг нээх"}
      aria-expanded={isOpen}
      className="relative flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors duration-150 ease-out hover-fine:bg-muted-bg active:scale-[0.97] md:hidden"
      {...props}
    >
      <span className="relative block h-3 w-5">
        <motion.span
          className="absolute left-0 top-1/2 block h-px w-5 bg-current"
          initial={false}
          animate={isOpen ? { y: 0, rotate: 45 } : { y: -4, rotate: 0 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
        />
        <motion.span
          className="absolute left-0 top-1/2 block h-px w-5 bg-current"
          initial={false}
          animate={isOpen ? { y: 0, rotate: -45 } : { y: 3, rotate: 0 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
        />
      </span>
    </button>
  );
}
