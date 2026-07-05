import { PromoBanner } from "@/components/promo-banner";
import { PointCard } from "@/components/point-card";
import { QuickActions } from "@/components/quick-actions";
import { ProductCard } from "@/components/product-card";
import { NewsSection } from "@/components/news-section";
import type { Product } from "@/lib/types";

const PRODUCTS: Product[] = [
  {
    id: "peach-queen-cake",
    name: "Peach Queen Cake",
    description:
      "Гялалзсан ягаан тоороор бүхэлд нь чимэглэсэн, чийглэг цагаан кекстэй сүүн кремтэй бялуу.",
    price: 80000,
    currency: "MNT",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d7/IMG-20240601-WA0044Peach_and_fresh_cream_cake.jpg",
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
  },
  {
    id: "cookie-cheese-treasure-box",
    name: "Cookie & Cheese Treasure Box",
    description:
      "Орео жигнэмэгний амттай зөөлөн кекс болон крем чийзний тансаг амт.",
    price: 55000,
    currency: "MNT",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Mousse_cake.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-full bg-background">
      <div className="pb-20">
        <PointCard />
        <QuickActions />
        <PromoBanner />

        <section id="products" className="mt-6 px-4">
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-lg text-foreground">
              Өнөөдрийн онцлох амттан
            </h2>
            <a
              href="/menu"
              className="text-xs font-medium text-primary transition-colors hover-fine:text-primary-hover"
            >
              Бүгдийг үзэх
            </a>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <div className="mt-6">
          <NewsSection />
        </div>
      </div>
    </div>
  );
}
