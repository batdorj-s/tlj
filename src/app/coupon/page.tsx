"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Ticket, Clock } from "@phosphor-icons/react";
import {
  customEase,
  fadeUp,
  fadeUpBlur,
  stagger,
  sectionProps,
} from "@/lib/animation";

interface Coupon {
  id: string;
  title: string;
  description: string;
  expires: string;
  gradient: string;
}

const COUPONS: Coupon[] = [
  {
    id: "cake-30",
    title: "Сонгогдсон бялуу 30% хямдарлаа",
    description: "Бүх төрлийн том бялуунд хүчинтэй",
    expires: "2026.08.01",
    gradient: "from-primary to-primary-hover",
  },
  {
    id: "coffee-20",
    title: "Өглөөний кофе +20%",
    description: "Өдрийн 08:00-10:00 цагийн хооронд",
    expires: "2026.07.20",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "fresh-combo",
    title: "Салат + Сэндвич хослол",
    description: "Шинэ салат болон сэндвич 15% хямдарлаа",
    expires: "2026.07.31",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "birthday-free",
    title: "Төрсөн өдрийн бэлэг",
    description: "Төрсөн өдрөөрөө нэг ширхэг дессеерт бэлэглэнэ",
    expires: "2026.12.31",
    gradient: "from-primary to-primary-hover",
  },
];

export default function CouponPage() {
  const hasCoupons = useMemo(() => COUPONS.length > 0, []);

  return (
    <div className="min-h-full bg-bg">
      {/* Header */}
      <motion.div
        {...sectionProps}
        variants={fadeUp}
        transition={customEase(0.8)}
        className="px-4 pt-6 pb-2"
      >
        <h1 className="font-heading text-3xl font-semibold text-ink">
          Миний купонууд
        </h1>
        <p className="mt-1 text-sm text-muted">
          Таны хямдрал, урамшууллууд
        </p>
      </motion.div>

      {hasCoupons ? (
        <motion.div
          variants={stagger}
          {...sectionProps}
          className="px-4 pt-4 pb-6 space-y-3"
        >
          {COUPONS.map((coupon, i) => (
            <motion.div
              key={coupon.id}
              variants={fadeUpBlur}
              transition={customEase(0.8, 0.1 * i)}
              className={`relative isolate overflow-hidden rounded-2xl bg-gradient-to-br ${coupon.gradient} p-5`}
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex-1 pr-4">
                    <h3 className="font-heading text-lg font-semibold leading-tight text-white">
                      {coupon.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-white/80">
                      {coupon.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-white/60">
                      <Clock size={14} weight="regular" />
                      <span>Хугацаа: {coupon.expires}</span>
                    </div>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <Ticket size={20} weight="duotone" className="text-white" />
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white/20 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-150 ease-out active:scale-[0.97] hover-fine:bg-white/30"
                >
                  Ашиглах
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          variants={fadeUp}
          transition={customEase(0.8)}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-4 text-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted-bg">
            <Ticket size={28} weight="light" className="text-muted" />
          </div>
          <h2 className="font-heading text-lg text-ink">
            Купон байхгүй байна
          </h2>
          <p className="max-w-xs text-sm text-muted">
            Та дэлгүүрээс худалдан авалт хийж купон цуглуулаарай.
          </p>
        </motion.div>
      )}
    </div>
  );
}
