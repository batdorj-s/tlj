"use client";

import { motion } from "framer-motion";
import { BowlFood } from "@phosphor-icons/react";
import { ProductCard } from "@/components/product-card";
import { customEase, fadeUpBlur, stagger, sectionPropsHeavy } from "@/lib/animation";
import { PRODUCTS } from "@/lib/products";

export default function SalatSendvichPage() {
  const products = PRODUCTS.filter((p) => p.category === "Салат / Сэндвич");

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
            <BowlFood size={32} weight="fill" className="text-primary" />
            <h1 className="font-heading text-2xl text-ink">Салат / Сэндвич</h1>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Шинэ ногоо, эрүүл хоол — хөнгөн зууш болон өдрийн хоолонд.
          </p>
        </div>
      </motion.section>

      {products.length > 0 ? (
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
      ) : (
        <motion.div
          variants={fadeUpBlur}
          transition={customEase(0.8, 0.15)}
          {...sectionPropsHeavy}
          className="flex flex-col items-center justify-center px-4 pb-24 pt-12"
        >
          <BowlFood size={48} weight="thin" className="text-border" />
          <h2 className="mt-4 font-heading text-lg text-ink">Удахгүй</h2>
          <p className="mt-1 text-sm text-muted">Тун удахгүй...</p>
        </motion.div>
      )}
    </div>
  );
}
