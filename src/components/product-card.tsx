"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import type { Product } from "@/lib/types";
import { customEase, fadeUp } from "@/lib/animation";

export function ProductCard({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart?: (product: Product) => void;
}) {
  return (
    <motion.article
      variants={fadeUp}
      transition={customEase(0.6)}
      className="overflow-hidden rounded-xl border border-border bg-surface transition-[border-color,box-shadow] duration-200 ease-out [box-shadow:var(--shadow-soft)] hover-fine:[box-shadow:var(--shadow-soft-hover)]"
    >
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-muted-bg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 640px) 33vw, 50vw"
            className="object-cover transition-transform duration-500 ease-out hover-fine:scale-[1.05]"
          />
        </div>
      </Link>

      <div className="flex flex-col gap-2 p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="line-clamp-1 font-heading text-sm text-ink transition-colors duration-150 hover-fine:text-primary">
            {product.name}
          </h3>
        </Link>
        <p className="line-clamp-1 text-xs leading-relaxed text-muted">
          {product.description}
        </p>
        <p className="pt-1 text-sm font-semibold tabular-nums text-primary">
          {product.price.toLocaleString("mn-MN")}₮
        </p>

        <button
          type="button"
          onClick={() => onAddToCart?.(product)}
          className="group mt-1.5 inline-flex items-center gap-2 rounded-lg bg-primary pl-3 pr-1.5 py-1.5 text-xs font-medium text-on-primary transition-all duration-150 ease-out active:scale-[0.97] hover-fine:bg-primary-hover"
        >
          <span className="flex-1">Сагсанд</span>
          <span className="flex h-5 w-5 items-center justify-center rounded-md bg-white/20 transition-transform duration-200 ease-out group-hover:translate-x-0.5">
            <ShoppingBag size={10} weight="bold" />
          </span>
        </button>
      </div>
    </motion.article>
  );
}
