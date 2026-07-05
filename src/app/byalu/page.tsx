"use client";

import { motion } from "framer-motion";
import { Cake } from "@phosphor-icons/react";
import { ProductCard } from "@/components/product-card";
import { customEase, fadeUpBlur, stagger, sectionPropsHeavy } from "@/lib/animation";
import { PRODUCTS } from "@/lib/products";

export default function ByaluPage() {
  const products = PRODUCTS.filter((p) => p.category === "Бялуу");

  return (
    <div className="min-h-full bg-bg">
      <motion.section
        variants={fadeUpBlur}
        transition={customEase(0.8)}
        {...sectionPropsHeavy}
        className="px-4 pt-8 pb-6"
      >
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-3">
            <Cake size={32} weight="fill" className="text-primary" />
            <h1 className="font-heading text-2xl text-ink">Бялуу</h1>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Төрсөн өдөр, баяр ёслол, онцгой мөч бүрт зориулсан гар аргаар хийсэн тансаг бялуунууд.
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={stagger}
        {...sectionPropsHeavy}
        className="px-4 pb-24"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </motion.section>
    </div>
  );
}
