import Link from "next/link";
import { ArrowRight, BookOpen, Smile } from "lucide-react";
import type { BlogPost } from "@/data/blogs";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

const blogToneClasses: Record<BlogPost["imageTone"], string> = {
  checkup: "from-neutral-50 via-blue-50 to-primary-100",
  whitening: "from-red-50 via-white to-primary-100",
  children: "from-blue-50 via-white to-primary-100",
};

type BlogCardProps = {
  post: BlogPost;
  locale: Locale;
  readMoreLabel: string;
};

export function BlogCard({ post, locale, readMoreLabel }: BlogCardProps) {
  return (
    <article className="overflow-hidden rounded-[16px] bg-white">
      {/* TODO: Replace with exported Figma blog image asset. */}
      <div
        className={cn(
          "relative h-48 overflow-hidden rounded-[16px] bg-gradient-to-br",
          blogToneClasses[post.imageTone],
        )}
      >
        <div className="absolute left-6 top-6 grid size-16 place-items-center rounded-full bg-white/85 text-primary-700 shadow-design-md">
          {post.imageTone === "whitening" ? (
            <Smile aria-hidden className="size-8" />
          ) : (
            <BookOpen aria-hidden className="size-8" />
          )}
        </div>
        <div className="absolute -bottom-12 right-4 size-40 rounded-full bg-white/60" />
        <div className="absolute bottom-5 right-10 h-8 w-24 rounded-full bg-white/75" />
      </div>
      <div className="pt-4">
        <h3 className="text-h3 text-neutral-900">
          {locale === "km" ? post.titleKm : post.title}
        </h3>
        <p className="text-small mt-2 line-clamp-3 text-neutral-500">
          {locale === "km" ? post.excerptKm : post.excerpt}
        </p>
        <Link
          className="text-caption mt-4 inline-flex items-center gap-1 font-bold text-primary-700 hover:text-neutral-900"
          href={`/blog/${post.slug}`}
        >
          {readMoreLabel}
          <ArrowRight aria-hidden className="size-3.5" />
        </Link>
      </div>
    </article>
  );
}
