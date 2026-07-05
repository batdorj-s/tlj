"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, X } from "@phosphor-icons/react";
import { NAV_LINKS } from "@/lib/nav";
import { EASE_OUT } from "@/lib/animation";

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
        className={`sticky top-0 z-40 bg-primary transition-[box-shadow] duration-200 ease-out ${
          isScrolled || isMenuOpen
            ? "[box-shadow:var(--shadow-soft)]"
            : "shadow-none"
        }`}
      >
        <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="font-heading text-xl tracking-tight text-on-primary"
          >
            tu les jour
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative text-sm text-on-primary/80 transition-colors duration-150 ease-out hover-fine:text-on-primary"
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
              className="relative flex h-10 w-10 items-center justify-center rounded-md text-on-primary transition-colors duration-150 ease-out hover-fine:bg-white/10 active:scale-[0.97]"
            >
              <ShoppingBag size={20} weight="light" />
              {cartCount > 0 && (
                  <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-medium text-on-primary">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              ref={toggleRef}
              type="button"
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Хаах" : "Цэс нээх"}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-md text-on-primary transition-colors duration-150 hover-fine:bg-white/10 md:hidden"
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2, ease: EASE_OUT }}
                  >
                    <X size={20} weight="bold" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2, ease: EASE_OUT }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <rect x="3" y="5" width="14" height="1.5" rx="0.75" fill="currentColor" />
                      <rect x="3" y="9.25" width="14" height="1.5" rx="0.75" fill="currentColor" />
                      <rect x="3" y="13.5" width="14" height="1.5" rx="0.75" fill="currentColor" />
                    </svg>
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE_OUT }}
            className="fixed inset-0 top-18 z-30 flex flex-col bg-primary/95 backdrop-blur-2xl md:hidden"
          >
            <ul className="mx-auto flex w-full max-w-6xl flex-col px-4 pt-8 sm:px-6">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.32, 0.72, 0, 1],
                    delay: 0.05 + index * 0.06,
                  }}
                >
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block border-b border-white/10 py-5 text-xl font-medium text-on-primary/90 transition-colors duration-150 ease-out hover-fine:text-on-primary"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
