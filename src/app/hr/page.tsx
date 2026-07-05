export default function HrPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="font-heading text-2xl text-ink">Ажлын байр</h1>
      <p className="mt-2 text-sm text-muted">Бидэнтэй хамтран ажиллана уу</p>

      <div className="mt-8 space-y-4">
        <div className="rounded-xl border border-border bg-surface p-4">
          <h2 className="font-heading text-base text-ink">Нарийн боовч</h2>
          <p className="mt-1 text-xs text-muted">Улаанбаатар · Бүрэн цагаар</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Бэйкерид шинэхэн талх, нарийн боов, бялуу бэлтгэх туршлагатай
            мэргэжлийн нарийн боовч элсүүлнэ.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4">
          <h2 className="font-heading text-base text-ink">Бариста</h2>
          <p className="mt-1 text-xs text-muted">Улаанбаатар · Бүрэн цагаар</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Кофе бэлтгэх, үйлчлүүлэгчдэд хурдан шуурхай үйлчилгээ үзүүлэх,
            кафегийн орчныг цэвэрхэн байлгах чиглэлээр ажиллах хүсэлтэй,
            хариуцлагатай хүнийг хайж байна.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4">
          <h2 className="font-heading text-base text-ink">Үйлчлэгч</h2>
          <p className="mt-1 text-xs text-muted">Улаанбаатар · Бүрэн цагаар</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Борлуулалтын танхимд үйлчлүүлэгч хүлээн авах, бүтээгдэхүүний
            мэдээлэл өгөх, кассын үйлчилгээ хариуцсан ажилтан.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <a
          href="mailto:info@tlj.mn"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-on-primary transition-all duration-150 ease-out hover-fine:bg-primary-hover active:scale-[0.97]"
        >
          CV-ээ илгээх
        </a>
      </div>
    </div>
  );
}
