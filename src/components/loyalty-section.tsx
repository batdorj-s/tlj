import { SpinToWin } from "@/components/spin-to-win";

export function LoyaltySection() {
  return (
    <section id="loyalty" className="border-t border-border bg-background">
      <div className="px-4 py-10">
        <div className="text-center">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-primary">
            Урамшуулал
          </p>
          <h2 className="font-heading text-2xl text-foreground">
            Хүрд эргүүлж, шагнал хожоорой
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-xs mx-auto">
            10,000₮ тутамд нэг эрх. Үнэгүй кофе, хямдрал, бонус оноо.
          </p>
        </div>

        <div className="mt-8">
          <SpinToWin />
        </div>
      </div>
    </section>
  );
}
