"use client";

import { motion } from "framer-motion";
import { HeroBanner } from "@/components/hero-banner";
import { PromoBanner } from "@/components/promo-banner";
import { PointCard } from "@/components/point-card";
import { QuickActions } from "@/components/quick-actions";
import { ProductCard } from "@/components/product-card";
import { LoyaltySection } from "@/components/loyalty-section";
import { NewsSection } from "@/components/news-section";
import GradientMenu from "@/components/ui/gradient-menu";
import {
  customEase,
  fadeUp,
  fadeUpBlur,
  stagger,
  sectionProps,
  sectionPropsHeavy,
} from "@/lib/animation";
import { PRODUCTS } from "@/lib/products";

export default function Home() {
  return (
    <div className="min-h-full bg-bg">
      <HeroBanner />

      <div className="px-4 -mt-6 relative z-10">
        <PointCard />
        <QuickActions />
        <PromoBanner />
      </div>

      <motion.section
        variants={fadeUpBlur}
        transition={customEase(0.8)}
        {...sectionPropsHeavy}
        className="mt-24"
      >
        <div className="px-4 mb-6">
          <h2 className="font-heading text-lg text-ink">Ангилал</h2>
        </div>
        <GradientMenu />
      </motion.section>

      <motion.section
        id="products"
        variants={stagger}
        {...sectionPropsHeavy}
        className="mt-24 px-4"
      >
        <motion.div
          variants={fadeUpBlur}
          transition={customEase(0.8)}
          className="flex items-center justify-between"
        >
          <h2 className="font-heading text-lg text-ink">
            Өнөөдрийн онцлох амттан
          </h2>
          <a
            href="/menu"
            className="text-xs font-medium text-primary transition-colors hover-fine:text-primary-hover"
          >
            Бүгдийг үзэх
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={customEase(0.8, 0.1)}
          className="mt-4 grid grid-cols-2 gap-3"
        >
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </motion.section>

      <LoyaltySection />

      <div className="mt-16 pb-24">
        <NewsSection />
      </div>
    </div>
  );
}
