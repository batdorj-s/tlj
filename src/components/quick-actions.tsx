"use client";

import { QrCode, Spinner, Ticket, MapPin } from "@phosphor-icons/react";
import Link from "next/link";
import { motion } from "framer-motion";

const ACTIONS = [
  {
    label: "QR Скан",
    icon: QrCode,
    href: "/scan",
    color: "text-primary bg-primary/8 hover-fine:bg-primary/15",
  },
  {
    label: "Хүрд эргүүлэх",
    icon: Spinner,
    href: "#loyalty",
    color: "text-ink bg-muted-bg hover-fine:bg-border",
  },
  {
    label: "Купон",
    icon: Ticket,
    href: "/coupon",
    color: "text-success bg-success-bg hover-fine:bg-success/10",
  },
  {
    label: "Салбарууд",
    icon: MapPin,
    href: "/salbar",
    color: "text-ink bg-muted-bg hover-fine:bg-border",
  },
];

export function QuickActions() {
  return (
    <div className="mx-4 mt-4">
      <div className="grid grid-cols-4 gap-3">
        {ACTIONS.map((action, i) => {
          const Icon = action.icon;
          return (
            <motion.div
              key={action.href}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1], delay: 0.3 + i * 0.06 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={action.href}
                className={`flex flex-col items-center gap-1.5 rounded-xl px-3 py-4 text-center transition-colors duration-150 ${action.color}`}
              >
                <Icon size={26} weight="duotone" />
                <span className="text-[11px] font-medium leading-tight">
                  {action.label}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
