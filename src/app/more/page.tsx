"use client";

import {
  User,
  ClockCounterClockwise,
  Info,
  BookOpen,
  UsersThree,
  Newspaper,
  Gear,
  CaretRight,
} from "@phosphor-icons/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { customEase, fadeUp, stagger, sectionProps } from "@/lib/animation";

const MENU_ITEMS = [
  { label: "Хувийн мэдээлэл", icon: User, href: null },
  { label: "Захиалгын түүх", icon: ClockCounterClockwise, href: null },
  { label: "Танилцуулга", icon: Info, href: "/tanilcuulga" },
  { label: "Брэндийн түүх", icon: BookOpen, href: "/brand-tuuh" },
  { label: "Хүний нөөц", icon: UsersThree, href: "/hr" },
  { label: "Мэдээ", icon: Newspaper, href: "/medee" },
  { label: "Тохиргоо", icon: Gear, href: null },
];

export default function MorePage() {
  return (
    <div className="min-h-full bg-bg">
      <div className="px-4 py-12">
        <motion.div
          variants={fadeUp}
          transition={customEase(0.8)}
          {...sectionProps}
          className="flex flex-col items-center text-center"
        >
          <h1 className="font-heading text-3xl text-ink">Бусад</h1>
        </motion.div>

        <motion.div
          variants={stagger}
          {...sectionProps}
          className="mt-8 rounded-xl border border-border bg-surface"
        >
          {MENU_ITEMS.map((item, i) => {
            const Icon = item.icon;
            const content = (
              <div className="flex items-center gap-4 px-5 py-4 transition-colors duration-150 hover-fine:bg-muted-bg">
                <Icon size={22} weight="duotone" className="text-primary" />
                <span className="flex-1 text-sm font-medium text-ink">
                  {item.label}
                </span>
                <CaretRight
                  size={16}
                  weight="bold"
                  className="text-muted shrink-0"
                />
              </div>
            );

            return (
              <motion.div
                key={item.label}
                variants={fadeUp}
                transition={customEase(0.6)}
              >
                {item.href ? (
                  <Link href={item.href} className="block">
                    {content}
                  </Link>
                ) : (
                  <button type="button" className="w-full text-left">
                    {content}
                  </button>
                )}
                {i < MENU_ITEMS.length - 1 && (
                  <div className="mx-5 h-px bg-border" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
