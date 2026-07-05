"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { easeOut } from "@/lib/animation";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: easeOut(0.6, delay),
  };
}

export function HeroBanner() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-end overflow-hidden sm:min-h-[80vh]">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/00_Croissant._Yum.jpg"
        alt="Шинэхэн жигнэсэн, алтлаг өнгөтэй франц крүассан"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/20" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-20">
        <div className="max-w-xl">
          <motion.p
            {...fadeUp(0)}
            className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-white"
          >
            365 өдөр шинэ
          </motion.p>
          <motion.h1
            {...fadeUp(0.06)}
            className="font-heading text-4xl text-white sm:text-6xl"
          >
            Гар урлалын амттан, өдөр бүр шинээр
          </motion.h1>
          <motion.p
            {...fadeUp(0.12)}
            className="mt-4 max-w-md text-base leading-relaxed text-white/85"
          >
            Франц уламжлалын жор, орон нутгийн шилдэг орцоор өдөр бүр шинээр
            бэлтгэсэн талх, бялуу, амттан.
          </motion.p>
          <motion.div {...fadeUp(0.18)}>
            <a
              href="#products"
              className="mt-7 inline-block rounded-md bg-accent px-7 py-3 text-sm font-medium text-on-accent transition-[background-color,transform] duration-150 ease-out hover-fine:bg-accent-hover active:scale-[0.97]"
            >
              Цэсийг үзэх
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
