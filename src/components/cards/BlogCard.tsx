import Link from "next/link";
import { ArrowRight, BookOpen, Smile } from "lucide-react";
import type { BlogPost } from "@/data/blogs";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
    <article className="overflow-hidden">
      <Image
        src={post.image}
        alt={post.title}
        width={420}
        height={420}
        className="relative h-72 overflow-hidden rounded-[24px] object-cover object-center"
      />
      <div className="pt-4">
        <h3 className="text-h3 text-neutral-900">
          {locale === "km" ? post.titleKm : post.title}
        </h3>
        <p className="text-base mt-2 line-clamp-3 text-neutral-500">
          {locale === "km" ? post.excerptKm : post.excerpt}
        </p>
        <Link
          className="text-caption text-base mt-4 inline-flex items-center gap-1 font-bold text-primary-700 hover:text-neutral-900"
          href={`/blog/${post.slug}`}
        >
          {readMoreLabel}
          <ArrowRight aria-hidden className="size-3.5" />
        </Link>
      </div>
    </article>
  );
}
