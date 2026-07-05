export interface NavLink {
  label: string;
  href: string;
}

// Primary categories mirror tlj.mn's real navigation (see tlj-reference.md).
export const NAV_LINKS: NavLink[] = [
  { label: "Талх", href: "/talh" },
  { label: "Бялуу", href: "/byalu" },
  { label: "Дессерт", href: "/dessert" },
  { label: "Салат / Сэндвич", href: "/salat-sendvich" },
  { label: "Мэдээ", href: "/medee" },
  { label: "Салбарууд", href: "/salbar" },
];
