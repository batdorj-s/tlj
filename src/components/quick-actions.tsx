"use client";

import { QrCode, Spinner, Ticket, MapPin } from "@phosphor-icons/react";
import Link from "next/link";

const ACTIONS = [
  {
    label: "QR Скан",
    icon: QrCode,
    href: "/scan",
    color: "text-primary bg-primary/8",
  },
  {
    label: "Хүрд эргүүлэх",
    icon: Spinner,
    href: "#loyalty",
    color: "text-accent bg-accent/8",
  },
  {
    label: "Купон",
    icon: Ticket,
    href: "/coupon",
    color: "text-success bg-success-bg",
  },
  {
    label: "Салбарууд",
    icon: MapPin,
    href: "/salbar",
    color: "text-foreground bg-muted",
  },
];

export function QuickActions() {
  return (
    <div className="mx-4 mt-4">
      <div className="grid grid-cols-4 gap-3">
        {ACTIONS.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.href}
              href={action.href}
              className={`flex flex-col items-center gap-1.5 rounded-xl px-3 py-4 text-center transition-transform duration-150 active:scale-[0.95] ${action.color}`}
            >
              <Icon size={26} weight="duotone" />
              <span className="text-[11px] font-medium leading-tight">
                {action.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
