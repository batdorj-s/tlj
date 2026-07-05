export interface NewsPost {
  id: string;
  title: string;
  tag: string;
  href: string;
}

// Real headlines sourced from tlj.mn (see tlj-reference.md).
export const NEWS_POSTS: NewsPost[] = [
  {
    id: "ulaangom-26",
    title:
      "TOUS les JOURS Монгол Улсын баруун хязгаарт — 26 дахь салбараа Улаангом хотод нээлээ",
    tag: "Салбар",
    href: "/medee/ulaangom-26",
  },
  {
    id: "bagel-trend",
    title: "Багел трэндэд нэгдэхэд бэлэн үү?",
    tag: "Бүтээгдэхүүн",
    href: "/medee/bagel-trend",
  },
  {
    id: "salat-sendvich",
    title: "Шинэ Салат & Сэндвичээ танилцуулж байна",
    tag: "Бүтээгдэхүүн",
    href: "/medee/salat-sendvich",
  },
  {
    id: "cake-30-off",
    title: "Сонгогдсон бялуунууд 30% хямдарлаа",
    tag: "Урамшуулал",
    href: "/medee/cake-30-off",
  },
];
