"use client";

import Link from "next/link";
import { NEWS_POSTS } from "@/lib/news";

export function NewsSection() {
  return (
    <section id="news" className="border-t border-border">
      <div className="px-4 py-6">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-lg text-ink">Мэдээ</h2>
          <Link
            href="/medee"
            className="text-xs font-medium text-primary transition-colors hover-fine:text-primary-hover"
          >
            Бүгдийг үзэх
          </Link>
        </div>

        <ul className="mt-3 space-y-0">
          {NEWS_POSTS.slice(0, 3).map((post) => (
            <li key={post.id}>
              <Link
                href={post.href}
                className="flex items-center gap-3 border-b border-border py-3 last:border-0"
              >
                <span className="shrink-0 rounded-md bg-primary/8 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.08em] text-primary">
                  {post.tag}
                </span>
                <span className="line-clamp-1 flex-1 text-sm text-ink">
                  {post.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
