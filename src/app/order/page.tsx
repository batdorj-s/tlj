"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, CreditCard, CaretLeft, Spinner } from "@phosphor-icons/react";
import { easeOut, fadeUp } from "@/lib/animation";

const STEPS = [
  { icon: MapPin, label: "Хаяг", done: false },
  { icon: Phone, label: "Холбоо барих", done: false },
  { icon: CreditCard, label: "Төлбөр", done: false },
];

export default function OrderPage() {
  return (
    <div className="min-h-full bg-bg">
      <div className="flex items-center gap-3 border-b border-border px-4 py-4">
        <Link
          href="/cart"
          className="flex h-9 w-9 items-center justify-center rounded-full hover-fine:bg-muted-bg"
          aria-label="Буцах"
        >
          <CaretLeft size={18} weight="bold" />
        </Link>
        <h1 className="font-heading text-lg text-ink">Захиалга</h1>
      </div>

      <motion.div
        variants={fadeUp}
        transition={easeOut(0.5)}
        initial="hidden"
        animate="visible"
        className="px-4 pt-6"
      >
        <div className="flex items-center justify-between">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex flex-col items-center gap-2">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                    step.done
                      ? "border-primary bg-primary text-on-primary"
                      : "border-border text-muted"
                  }`}
                >
                  <Icon size={18} weight={step.done ? "fill" : "regular"} />
                </div>
                <span className="text-[11px] font-medium text-muted">
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-10 space-y-4">
          <div className="rounded-xl border border-border bg-surface p-4">
            <h3 className="text-sm font-medium text-ink">Хүргэлтийн хаяг</h3>
            <p className="mt-1 text-sm text-muted">
              Хаягаа оруулаагүй байна
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-4">
            <h3 className="text-sm font-medium text-ink">Захиалгын мэдээлэл</h3>
            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-muted">Сагсны дүн</span>
              <span className="text-ink font-medium">0₮</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="text-muted">Хүргэлт</span>
              <span className="text-ink font-medium">—</span>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-border pt-2 text-sm">
              <span className="font-medium text-ink">Нийт</span>
              <span className="font-heading text-lg font-semibold text-primary">0₮</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          disabled
          className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary/60 px-6 py-3.5 text-sm font-medium text-on-primary cursor-not-allowed"
        >
          <Spinner size={18} weight="bold" className="animate-spin" />
          Сагс хоосон
        </button>
      </motion.div>
    </div>
  );
}
