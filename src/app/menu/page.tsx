"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Funnel } from "@phosphor-icons/react";
import { ProductCard } from "@/components/product-card";
import { PRODUCTS, type Product } from "@/lib/products";
import { customEase, fadeUp, stagger, sectionProps } from "@/lib/animation";

const ALL = "Бүгд";

export default function MenuPage() {
  const [active, setActive] = useState(ALL);

  const categories = useMemo(() => {
    const cats = PRODUCTS.map((p: Product) => p.category);
    return [ALL, ...Array.from(new Set(cats))];
  }, []);

  const filtered = useMemo(
    () =>
      active === ALL
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === active),
    [active],
  );

  return (
    <div className="min-h-full bg-bg">
      {/* Hero */}
      <motion.section
        {...sectionProps}
        variants={fadeUp}
        transition={customEase(0.8)}
        className="px-4 pt-6 pb-4"
      >
        <h1 className="font-heading text-3xl font-semibold text-ink">
          Цэс
        </h1>
        <p className="mt-1 text-sm text-muted">Бүх бүтээгдэхүүн</p>
      </motion.section>

      {/* Filter tabs */}
      <motion.div
        variants={stagger}
        {...sectionProps}
        className="px-4 pb-3"
      >
        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              variants={fadeUp}
              transition={customEase(0.4)}
              onClick={() => setActive(cat)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-150 ${
                active === cat
                  ? "bg-primary text-on-primary"
                  : "bg-muted-bg text-ink hover-fine:bg-border"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Product grid */}
      <motion.section
        variants={stagger}
        {...sectionProps}
        className="px-4 pb-6"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={stagger}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={customEase(0.6)}
            className="grid grid-cols-2 gap-3"
          >
            {filtered.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.div
            variants={fadeUp}
            transition={customEase(0.6)}
            className="flex flex-col items-center justify-center py-20 gap-3 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted-bg">
              <Funnel size={24} weight="light" className="text-muted" />
            </div>
            <p className="text-sm text-muted">Илэрц олдсонгүй</p>
          </motion.div>
        )}
      </motion.section>
    </div>
  );
}
