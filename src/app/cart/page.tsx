"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Trash, CaretLeft } from "@phosphor-icons/react";
import { easeOut, fadeUp } from "@/lib/animation";

export default function CartPage() {
  return (
    <div className="min-h-full bg-bg">
      <div className="flex items-center gap-3 border-b border-border px-4 py-4">
        <Link
          href="/"
          className="flex h-9 w-9 items-center justify-center rounded-full hover-fine:bg-muted-bg"
          aria-label="Буцах"
        >
          <CaretLeft size={18} weight="bold" />
        </Link>
        <h1 className="font-heading text-lg text-ink">Сагс</h1>
      </div>

      <motion.div
        variants={fadeUp}
        transition={easeOut(0.5)}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-4 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted-bg">
          <ShoppingBag size={28} weight="light" className="text-muted" />
        </div>
        <h2 className="font-heading text-lg text-ink">
          Сагс хоосон байна
        </h2>
        <p className="max-w-xs text-sm text-muted">
          Бүтээгдэхүүн нэмээд, захиалгаа баталгаажуулаарай.
        </p>
        <Link
          href="/"
          className="mt-2 inline-flex items-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-on-primary transition-all duration-150 ease-out active:scale-[0.97] hover-fine:bg-primary-hover"
        >
          Дэлгүүрээр аялах
        </Link>
      </motion.div>
    </div>
  );
}
