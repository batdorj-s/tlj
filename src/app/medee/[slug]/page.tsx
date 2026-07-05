import Link from "next/link";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr";
import { NEWS_POSTS } from "@/lib/news";

export async function generateStaticParams() {
  return NEWS_POSTS.map((post) => ({
    slug: post.href.split("/medee/")[1],
  }));
}

function getPostBySlug(slug: string) {
  return (
    NEWS_POSTS.find((post) => post.href === `/medee/${slug}`) ?? null
  );
}

export default async function NewsDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4">
        <p className="text-muted">Мэдээ олдсонгүй</p>
        <Link
          href="/medee"
          className="text-sm font-medium text-primary hover-fine:text-primary-hover"
        >
          Мэдээ рүү буцах
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-bg">
      <div className="mx-auto max-w-2xl px-4 py-12">
        <Link
          href="/medee"
          className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover-fine:text-primary"
        >
          <CaretLeft size={16} weight="bold" />
          Буцах
        </Link>

        <span className="inline-block rounded-md bg-primary/8 px-2.5 py-0.5 text-xs font-medium text-primary">
          {post.tag}
        </span>

        <h1 className="mt-3 font-heading text-2xl text-ink">
          {post.title}
        </h1>

        <p className="mt-2 text-sm text-muted">2026-он</p>

        <div className="mt-8 space-y-5 text-sm leading-relaxed text-ink/80">
          <p>
            TOUS les JOURS Монголын багийнхан та бүхэндээ баярын мэдээ дуулгахад
            таатай байна. Бидний шинэ бүтээгдэхүүнүүд өдөр бүр шинэхэн бэлтгэгдэж,
            таны өглөөний кофены амтыг чимэх болно. Манай нарийн боовчид хамгийн
            шилдэг орц найрлагыг ашиглан, уламжлалт франц-азийн жорыг орчин үеийн
            амталгаатай хослуулсан юм.
          </p>
          <p>
            Энэхүү шинэчлэлийн хүрээнд бид гурилан бүтээгдэхүүнийхээ жорыг
            сайжруулж, илүү зөөлөн бүтэцтэй, удаан хугацаанд шинэлэг байх
            шийдлүүдийг нэвтрүүлсэн. Үйлчлүүлэгчдийн хүсэлтийг харгалзан
            элсэн чихрийн хэмжээг тохируулж, байгалийн гаралтай амтлагчуудыг
            илүүтэй ашиглах болсон. Манай бялуу, нарийн боовны шинэ цуглуулга
            таны өдөр тутмын амтлаг мөчүүдийг улам баяжуулна гэдэгт итгэлтэй
            байна.
          </p>
          <p>
            Түүнчлэн бид шинэ салбарууддаа тусгайлан зориулсан цэс боловсруулж,
            орон нутгийн онцлогт тохируулан бүтээгдэхүүний нэр төрлийг сонгон
            авчсан. Улаангом, Эрдэнэт зэрэг хотуудын салбарууддаа шинэхэн
            талх, амттан, кофег өдөр бүр шууд бэлтгэн нийлүүлж байна. TOUS les
            JOURS-ын халуун дулаан үйлчилгээ, чанартай бүтээгдэхүүн таныг
            хүлээж байна.
          </p>
        </div>
      </div>
    </div>
  );
}
