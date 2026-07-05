"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag } from "@phosphor-icons/react";
import { NAV_LINKS } from "@/lib/nav";
import { MenuToggle } from "@/components/menu-toggle";
import { EASE_OUT, easeOut } from "@/lib/animation";

export function Navbar({ cartCount = 0 }: { cartCount?: number }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      // Return focus to the toggle only when closing an open menu, never on mount.
      if (wasOpenRef.current) toggleRef.current?.focus();
      wasOpenRef.current = false;
      return;
    }

    wasOpenRef.current = true;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div ref={sentinelRef} className="absolute top-0 h-px w-full" aria-hidden />
      <header
        className={`sticky top-0 z-40 border-b bg-bg/95 backdrop-blur-sm transition-[box-shadow,border-color] duration-200 ease-out ${
          isScrolled || isMenuOpen
            ? "border-border [box-shadow:var(--shadow-soft)]"
            : "border-transparent shadow-none"
        }`}
      >
        <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="font-heading text-xl tracking-tight text-ink"
          >
            tu les jour
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative text-sm text-ink/80 transition-colors duration-150 ease-out hover-fine:text-ink"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-200 ease-out group-hover-fine:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label={`Сагс, ${cartCount} бүтээгдэхүүн`}
              className="relative flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors duration-150 ease-out hover-fine:bg-muted-bg active:scale-[0.97]"
            >
              <ShoppingBag size={20} weight="light" />
              {cartCount > 0 && (
                  <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-medium text-on-primary">
                  {cartCount}
                </span>
              )}
            </button>

            <MenuToggle
              ref={toggleRef}
              isOpen={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((open) => !open)}
            />
          </div>
        </nav>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: EASE_OUT }}
              className="overflow-hidden border-t border-border md:hidden"
            >
              <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
                {NAV_LINKS.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={easeOut(0.25, 0.05 + index * 0.05)}
                  >
                    <Link
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block border-b border-border py-4 text-base text-ink/90 transition-colors duration-150 ease-out hover-fine:text-ink"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
