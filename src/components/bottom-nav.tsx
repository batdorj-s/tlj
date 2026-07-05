"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  House,
  GridFour,
  Star,
  MapPin,
  DotsThree,
} from "@phosphor-icons/react";

interface Tab {
  label: string;
  href: string;
  icon: typeof House;
}

const TABS: Tab[] = [
  { label: "Нүүр", href: "/", icon: House },
  { label: "Цэс", href: "/menu", icon: GridFour },
  { label: "Лояалти", href: "/loyalty", icon: Star },
  { label: "Салбарууд", href: "/salbar", icon: MapPin },
  { label: "Бусад", href: "/more", icon: DotsThree },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur-lg supports-[padding-bottom]:pb-[env(safe-area-inset-bottom,0px)]">
      <ul className="mx-auto flex h-16 max-w-lg items-center justify-around px-2">
        {TABS.map((tab) => {
          const isActive = pathname === tab.href;
          const Icon = tab.icon;
          return (
            <li key={tab.href} className="flex-1">
              <Link
                href={tab.href}
                className={`flex flex-col items-center justify-center gap-0.5 rounded-lg py-1.5 text-[10px] font-medium transition-colors duration-150 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover-fine:text-foreground"
                }`}
              >
                <Icon
                  size={22}
                  weight={isActive ? "fill" : "regular"}
                  aria-hidden
                />
                <span>{tab.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
