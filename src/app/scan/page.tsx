"use client";

import { motion } from "framer-motion";
import { QrCode, Camera } from "@phosphor-icons/react";
import { customEase, fadeUp, fadeUpBlur, sectionProps } from "@/lib/animation";

export default function ScanPage() {
  return (
    <div className="min-h-full bg-bg">
      <motion.div
        {...sectionProps}
        variants={fadeUp}
        transition={customEase(0.8)}
        className="flex flex-col items-center justify-center px-6 min-h-[80vh]"
      >
        {/* Animated QR icon */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{
            scale: [0.9, 1, 0.9],
            opacity: 1,
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="flex h-28 w-28 items-center justify-center rounded-full bg-muted-bg"
        >
          <QrCode size={64} weight="duotone" className="text-primary" />
        </motion.div>

        <motion.h1
          variants={fadeUpBlur}
          transition={customEase(0.8, 0.15)}
          className="mt-8 font-heading text-2xl font-semibold text-ink text-center"
        >
          QR код уншуулах
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={customEase(0.8, 0.3)}
          className="mt-3 max-w-xs text-center text-sm leading-relaxed text-muted"
        >
          Дэлгүүрт ирэхдээ QR кодоо уншуулж оноогоо цуглуулаарай
        </motion.p>

        <motion.button
          variants={fadeUp}
          transition={customEase(0.8, 0.45)}
          type="button"
          className="mt-10 inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-base font-medium text-on-primary transition-all duration-150 ease-out active:scale-[0.97] hover-fine:bg-primary-hover"
        >
          <Camera size={22} weight="bold" />
          Сканнердах
        </motion.button>

        <motion.p
          variants={fadeUp}
          transition={customEase(0.8, 0.6)}
          className="mt-6 text-xs text-muted text-center"
        >
          Камер ашиглах зөвшөөрөл шаардлагатай
        </motion.p>
      </motion.div>
    </div>
  );
}
