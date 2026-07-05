import { motion } from "framer-motion";
import { SpinToWin } from "@/components/spin-to-win";
import { easeOut, fadeUp, sectionProps } from "@/lib/animation";

export function LoyaltySection() {
  return (
    <section id="loyalty" className="border-t border-border">
      <div className="px-4 py-16 sm:py-20">
        <motion.div
          variants={fadeUp}
          transition={easeOut(0.5)}
          {...sectionProps}
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
          variants={fadeUp}
          transition={easeOut(0.5, 0.1)}
          {...sectionProps}
          className="mt-8"
        >
          <SpinToWin />
        </motion.div>
      </div>
    </section>
  );
}
