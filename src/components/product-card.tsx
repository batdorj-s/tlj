"use client";

import Image from "next/image";
import type { Product } from "@/lib/types";

export function ProductCard({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart?: (product: Product) => void;
}) {
  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-card transition-[box-shadow,border-color,transform] duration-200 ease-out [box-shadow:var(--shadow-soft)] active:scale-[0.98]">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-300 ease-out group-hover-fine:scale-[1.04]"
        />
      </div>

      <div className="flex flex-col gap-1.5 p-3">
        <h3 className="line-clamp-1 font-heading text-sm text-foreground">
          {product.name}
        </h3>
        <p className="line-clamp-1 text-xs leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <p className="pt-0.5 text-sm font-semibold tabular-nums text-accent">
          {product.price.toLocaleString("mn-MN")}₮
        </p>

        <button
          type="button"
          onClick={() => onAddToCart?.(product)}
          className="mt-1 rounded-lg bg-primary py-2 text-xs font-medium text-on-primary transition-[background-color,transform] duration-150 ease-out active:scale-[0.97]"
        >
          Сагсанд
        </button>
      </div>
    </article>
  );
}
