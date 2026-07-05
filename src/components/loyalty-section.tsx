"use client";

import { motion } from "framer-motion";
import { SpinToWin } from "@/components/spin-to-win";
import { customEase, fadeUpBlur, sectionPropsHeavy } from "@/lib/animation";

export function LoyaltySection() {
  return (
    <section id="loyalty" className="border-t border-border">
      <div className="px-4 py-24 sm:py-28">
        <motion.div
          variants={fadeUpBlur}
          transition={customEase(0.8)}
          {...sectionPropsHeavy}
          className="text-center"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-primary">
            Урамшуулал
          </p>
          <h2 className="font-heading text-2xl text-ink sm:text-3xl">
            Хүрд эргүүлж, шагнал хожоорой
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted max-w-xs mx-auto">
            10,000₮ тутамд нэг эрх. Үнэгүй кофе, хямдрал, бонус оноо.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUpBlur}
          transition={customEase(0.8, 0.1)}
          {...sectionPropsHeavy}
          className="mt-8"
        >
          <SpinToWin />
        </motion.div>
      </div>
    </section>
  );
}
