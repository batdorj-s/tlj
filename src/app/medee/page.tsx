import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import { NEWS_POSTS } from "@/lib/news";

export default function NewsIndex() {
  return (
    <div className="min-h-full bg-bg">
      <div className="px-4 pt-6 pb-2">
        <h1 className="text-center font-heading text-2xl text-ink">Мэдээ</h1>
      </div>

      <div className="mx-auto max-w-lg px-4 pt-4 pb-16">
        <div className="divide-y divide-border rounded-xl border border-border bg-surface">
          {NEWS_POSTS.map((post) => (
            <Link
              key={post.id}
              href={post.href}
              className="group flex items-start gap-4 px-5 py-4 transition-colors hover-fine:bg-muted-bg"
            >
              <div className="flex-1 min-w-0">
                <span className="inline-block rounded-md bg-primary/8 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {post.tag}
                </span>
                <h2 className="mt-2 font-heading text-sm text-ink truncate">
                  {post.title}
                </h2>
                <p className="mt-1 text-xs text-muted">2026-он</p>
              </div>
              <CaretRight
                size={16}
                weight="bold"
                className="mt-2 shrink-0 text-muted transition-colors group-hover-fine:text-primary"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
