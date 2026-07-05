import Link from "next/link";
import { MapPin, Phone, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

const PRODUCT_LINKS = [
  { label: "Талх", href: "/talh" },
  { label: "Бялуу", href: "/byalu" },
  { label: "Дессерт", href: "/dessert" },
  { label: "Салат / Сэндвич", href: "/salat-sendvich" },
];

const COMPANY_LINKS = [
  { label: "Танилцуулга", href: "/tanilcuulga" },
  { label: "Брэндийн түүх", href: "/brand-tuuh" },
  { label: "Мэдээ", href: "/medee" },
  { label: "Салбарын мэдээлэл", href: "/salbar" },
  { label: "Хүний нөөц", href: "/hr" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-ink text-bg">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 md:py-16">
        <div className="md:col-span-1">
          <p className="font-heading text-xl">tu les jour</p>
          <p className="mt-3 text-sm leading-relaxed text-bg/70">
            365 өдөр шинэ. Франц уламжлалын жороор өдөр бүр шинээр бэлтгэсэн
            талх, бялуу, амттан.
          </p>
          <p className="mt-4 text-xs text-bg/50">Артизан ХХК</p>
        </div>

        <nav aria-label="Бүтээгдэхүүн">
          <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-bg/50">
            Бүтээгдэхүүн
          </h2>
          <ul className="mt-4 space-y-2.5">
            {PRODUCT_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-bg/80 transition-colors duration-150 ease-out hover-fine:text-bg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Компани">
          <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-bg/50">
            Компани
          </h2>
          <ul className="mt-4 space-y-2.5">
            {COMPANY_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-bg/80 transition-colors duration-150 ease-out hover-fine:text-bg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-bg/50">
            Холбоо барих
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-bg/80">
            <li className="flex items-start gap-2.5">
              <MapPin size={18} weight="light" className="mt-0.5 shrink-0" />
              <span>Их Монгол гудамж, Хүннү 2222 хороолол, Улаанбаатар</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={18} weight="light" className="shrink-0" />
              <a
                href="tel:+97675757510"
                className="transition-colors duration-150 ease-out hover-fine:text-bg"
              >
                (976) 7575-7510
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <EnvelopeSimple size={18} weight="light" className="shrink-0" />
              <a
                href="mailto:info@tlj.mn"
                className="transition-colors duration-150 ease-out hover-fine:text-bg"
              >
                info@tlj.mn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-bg/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-6 text-xs text-bg/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {year} Артизан ХХК. Бүх эрх хуулиар хамгаалагдсан.</p>
          <p>Tous Les Jours Mongolia</p>
        </div>
      </div>
    </footer>
  );
}
