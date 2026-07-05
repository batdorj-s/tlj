"use client";

import { Star, QrCode, CaretRight } from "@phosphor-icons/react";

export function PointCard() {
  return (
    <div className="mx-4 mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-hover text-on-primary shadow-soft">
      <div className="flex items-center justify-between px-5 py-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.1em] text-on-primary/70">
            Таны оноо
          </p>
          <p className="mt-1 font-heading text-3xl font-semibold tracking-tight">
            1,280
          </p>
          <p className="mt-0.5 text-xs text-on-primary/60">
            10,000₮ = 1 эрх · Дараагийн шагнал: 2,000 оноо
          </p>
        </div>

        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm transition-colors duration-150 hover-fine:bg-white/30"
          aria-label="QR код уншуулах"
        >
          <QrCode size={24} weight="bold" className="text-white" />
        </button>
      </div>

      <div className="flex border-t border-white/10">
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-1.5 px-4 py-3 text-xs font-medium text-on-primary/80 transition-colors duration-150 hover-fine:bg-white/5"
        >
          <Star size={14} weight="fill" />
          Оноо цуглуулах
          <CaretRight size={12} weight="bold" />
        </button>
        <div className="w-px bg-white/10" />
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-1.5 px-4 py-3 text-xs font-medium text-on-primary/80 transition-colors duration-150 hover-fine:bg-white/5"
        >
          <Star size={14} weight="fill" />
          Оноо зарцуулах
          <CaretRight size={12} weight="bold" />
        </button>
      </div>
    </div>
  );
}
