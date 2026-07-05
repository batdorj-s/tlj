"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, CaretLeft } from "@phosphor-icons/react";
import { PRODUCTS } from "@/lib/products";
import { easeOut, fadeUp } from "@/lib/animation";

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 px-4">
        <p className="text-muted">Бүтээгдэхүүн олдсонгүй</p>
        <Link
          href="/"
          className="text-sm font-medium text-primary hover-fine:text-primary-hover"
        >
          Нүүр хуудас руу буцах
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-bg">
      <div className="relative">
        <Link
          href="/"
          className="absolute top-4 left-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-bg/90 backdrop-blur-sm shadow-soft"
          aria-label="Буцах"
        >
          <CaretLeft size={18} weight="bold" />
        </Link>
        <div className="relative aspect-[4/3] overflow-hidden bg-muted-bg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      <motion.div
        variants={fadeUp}
        transition={easeOut(0.5)}
        initial="hidden"
        animate="visible"
        className="px-4 pt-6 pb-8"
      >
        <p className="text-xs font-medium uppercase tracking-[0.08em] text-muted">
          {product.category}
        </p>
        <h1 className="mt-2 font-heading text-2xl text-ink">
          {product.name}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {product.description}
        </p>
        <p className="mt-6 font-heading text-3xl font-semibold text-primary tabular-nums">
          {product.price.toLocaleString("mn-MN")}₮
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-on-primary transition-all duration-150 ease-out active:scale-[0.97] hover-fine:bg-primary-hover"
          >
            <ShoppingBag size={18} weight="bold" />
            Сагсанд нэмэх
          </button>
        </div>
      </motion.div>
    </div>
  );
}
