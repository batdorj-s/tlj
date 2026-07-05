"use client";

import { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const PROMOS = [
  {
    title: "Сонгогдсон бялуунууд 30% хямдарлаа",
    subtitle: "Дуусах хугацаа: 7 хоног",
    gradient: "from-primary to-primary-hover",
  },
  {
    title: "Шинэ Салат & Сэндвич",
    subtitle: "Эрүүл, шинэхэн, амттай",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Өглөөний 8-10: Кофе +20%",
    subtitle: "Өдрийг TLJ-ээр эхлүүлээрэй",
    gradient: "from-amber-500 to-orange-600",
  },
];

const DOT_ACTIVE = "bg-primary w-5";
const DOT_INACTIVE = "bg-muted/25 w-2";

export function PromoBanner() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((p) => (p === 0 ? PROMOS.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p === PROMOS.length - 1 ? 0 : p + 1));

  const promo = PROMOS[current];

  return (
    <div className="mx-4 mt-3">
      <div
        className={`relative isolate flex min-h-[120px] items-center overflow-hidden rounded-2xl bg-gradient-to-br ${promo.gradient} px-5 py-4`}
      >
        <div className="flex-1">
          <h3 className="font-heading text-xl font-semibold leading-tight text-white">
            {promo.title}
          </h3>
          <p className="mt-1 text-sm text-white/80">{promo.subtitle}</p>
        </div>

        <button
          type="button"
          onClick={next}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-colors hover-fine:bg-white/30"
          aria-label="Дараагийн"
        >
          <CaretRight size={16} weight="bold" className="text-white" />
        </button>
      </div>

      <div className="mt-2 flex items-center justify-center gap-1.5">
        {PROMOS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? DOT_ACTIVE : DOT_INACTIVE
            }`}
            aria-label={`Слайд ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
