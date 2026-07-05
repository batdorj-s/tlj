"use client";

import { Star, Gift, Coffee } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { SpinToWin } from "@/components/spin-to-win";
import {
  customEase,
  fadeUp,
  fadeUpBlur,
  stagger,
  sectionProps,
  sectionPropsHeavy,
} from "@/lib/animation";

const BENEFITS = [
  { icon: Star, text: "10,000₮ тутамд 1 оноо" },
  { icon: Coffee, text: "500 оноо = Үнэгүй кофе" },
  { icon: Gift, text: "1,000 оноо = 15% хямдрал" },
  { icon: Gift, text: "2,000 оноо = Үнэгүй бялуу" },
];

export default function LoyaltyPage() {
  return (
    <div className="min-h-full bg-bg">
      <div className="px-4 py-12">
        <motion.div
          variants={fadeUpBlur}
          transition={customEase(0.8)}
          {...sectionPropsHeavy}
          className="flex flex-col items-center text-center"
        >
          <Star size={48} weight="duotone" className="text-primary" />
          <h1 className="mt-4 font-heading text-3xl text-ink">
            Үнэнч хэрэглэгчийн хөтөлбөр
          </h1>
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={customEase(0.8, 0.1)}
          {...sectionProps}
          className="mt-8"
        >
          <div className="rounded-2xl bg-white/5 p-[3px] shadow-lg shadow-primary/10">
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-hover text-on-primary shadow-inner">
              <div className="px-5 py-6 text-center">
                <p className="text-xs font-medium uppercase tracking-[0.1em] text-on-primary/70">
                  Таны оноо
                </p>
                <p className="mt-2 font-heading text-4xl font-semibold tracking-tight">
                  1,280
                </p>
                <p className="mt-2 text-xs text-on-primary/60">
                  10,000₮ = 1 эрх · Дараагийн шагнал: 2,000 оноо
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          {...sectionProps}
          className="mt-8 space-y-3"
        >
          <motion.p
            variants={fadeUp}
            transition={customEase(0.6)}
            className="font-heading text-lg text-ink"
          >
            Шагналууд
          </motion.p>
          {BENEFITS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.text}
                variants={fadeUp}
                transition={customEase(0.6)}
                className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Icon size={20} weight="duotone" className="text-primary" />
                </div>
                <p className="text-sm font-medium text-ink">{item.text}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUpBlur}
          transition={customEase(0.8, 0.2)}
          {...sectionPropsHeavy}
          className="mt-12"
        >
          <h2 className="mb-6 text-center font-heading text-2xl text-ink">
            Хүрд эргүүлж, шагнал хожоорой
          </h2>
          <SpinToWin />
        </motion.div>
      </div>
    </div>
  );
}
