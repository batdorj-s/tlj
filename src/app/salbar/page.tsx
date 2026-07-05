"use client";

import { MapPin, Clock, Phone } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { customEase, fadeUp, stagger, sectionProps } from "@/lib/animation";

const BRANCHES = [
  {
    district: "Хан-Уул",
    address: "Хан-Уул дүүрэг, Шангри-Ла төв, 1 давхар",
    hours: "08:00 – 22:00",
    phone: "7711-0999",
    maps: "https://www.google.com/maps/search/?api=1&query=Шангри-Ла+төв+Хан-Уул+Улаанбаатар",
  },
  {
    district: "Сүхбаатар",
    address: "Сүхбаатар дүүрэг, Чингисийн өргөн чөлөө, 3-р байр",
    hours: "08:00 – 22:00",
    phone: "7711-0888",
    maps: "https://www.google.com/maps/search/?api=1&query=Чингисийн+өргөн+чөлөө+Сүхбаатар+Улаанбаатар",
  },
  {
    district: "Баянзүрх",
    address: "Баянзүрх дүүрэг, 22-р хороо, Миллениум төв",
    hours: "09:00 – 21:00",
    phone: "7711-0777",
    maps: "https://www.google.com/maps/search/?api=1&query=Миллениум+төв+Баянзүрх+Улаанбаатар",
  },
];

export default function SalbarPage() {
  return (
    <div className="min-h-full bg-bg">
      <div className="px-4 py-12">
        <motion.div
          variants={fadeUp}
          transition={customEase(0.8)}
          {...sectionProps}
          className="flex flex-col items-center text-center"
        >
          <MapPin size={48} weight="duotone" className="text-primary" />
          <h1 className="mt-4 font-heading text-3xl text-ink">Салбарууд</h1>
          <p className="mt-2 text-sm text-muted">Бидний 26 салбар</p>
        </motion.div>

        <motion.div
          variants={stagger}
          {...sectionProps}
          className="mt-8 space-y-4"
        >
          {BRANCHES.map((branch) => (
            <motion.div
              key={branch.district}
              variants={fadeUp}
              transition={customEase(0.6)}
              className="rounded-2xl border border-border bg-surface p-5"
            >
              <h2 className="font-heading text-xl text-ink">
                {branch.district}
              </h2>
              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    weight="duotone"
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <p className="text-sm text-ink">{branch.address}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock
                    size={18}
                    weight="duotone"
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <p className="text-sm text-ink">{branch.hours}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone
                    size={18}
                    weight="duotone"
                    className="mt-0.5 shrink-0 text-primary"
                  />
                  <p className="text-sm text-ink">{branch.phone}</p>
                </div>
              </div>
              <Link
                href={branch.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-on-primary transition-colors duration-150 hover-fine:bg-primary-hover"
              >
                <MapPin size={16} weight="fill" />
                Газрын зураг дээр нээх
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
