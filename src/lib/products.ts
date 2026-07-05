export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "peach-queen-cake",
    name: "Peach Queen Cake",
    description:
      "Гялалзсан ягаан тоороор бүхэлд нь чимэглэсэн, чийглэг цагаан кекстэй сүүн кремтэй бялуу.",
    price: 80000,
    currency: "MNT",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/IMG-20240601-WA0044Peach_and_fresh_cream_cake.jpg",
    category: "Бялуу",
  },
  {
    id: "rose-blossom-butter-cake",
    name: "Rose Blossom Butter Cake",
    description:
      "Баглаа цэцэг санагдуулам чимэглэлтэй, 3 давхар цагаан кекстэй маслон кремтэй бялуу.",
    price: 70000,
    currency: "MNT",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Pink_rose_birthday_cake_%285919553257%29.jpg",
    category: "Бялуу",
  },
  {
    id: "original-tiramisu-treasure-box",
    name: "Original Tiramisu Treasure Box",
    description:
      "Хар шоколадан бүрхүүлийг хагалаад, тирамисүгийн тансаг амтыг нээн мэдрээрэй.",
    price: 55000,
    currency: "MNT",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e7/Classic_Italian_Tiramisu-3_%2829989504485%29.jpg",
    category: "Дессерт",
  },
  {
    id: "cookie-cheese-treasure-box",
    name: "Cookie & Cheese Treasure Box",
    description:
      "Орео жигнэмэгний амттай зөөлөн кекс болон крем чийзний тансаг амт.",
    price: 55000,
    currency: "MNT",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Mousse_cake.jpg",
    category: "Дессерт",
  },
];
