"use client";

import Image from "next/image";
import { CalendarDays, Clock } from "lucide-react";
import { BlogCard } from "@/components/cards/BlogCard";
import { SectionContainer } from "@/components/common/SectionContainer";
import { getBlogBySlug, getRelatedBlogs, type BlogPost } from "@/data/blogs";
import type { Locale } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";

const MONTHS_EN = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const MONTHS_KM = [
  "មករា", "កុម្ភៈ", "មីនា", "មេសា", "ឧសភា", "មិថុនា",
  "កក្កដា", "សីហា", "កញ្ញា", "តុលា", "វិច្ឆិកា", "ធ្នូ",
];

function formatDate(iso: string, locale: Locale) {
  const [year, month, day] = iso.split("-").map(Number);
  const months = locale === "km" ? MONTHS_KM : MONTHS_EN;
  const dd = String(day).padStart(2, "0");
  return `${months[month - 1]} ${dd} ${year}`;
}

export function BlogDetailPage({ slug }: { slug: string }) {
  const { dictionary, locale } = useLocale();
  const post = getBlogBySlug(slug);

  if (!post) {
    return null;
  }

  const isKm = locale === "km";
  const related = getRelatedBlogs(slug);

  return (
    <>
      <SectionContainer as="section" className="bg-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-h1 text-center font-bold text-neutral-900">
            {isKm ? post.titleKm : post.title}
          </h1>

          <div className="text-small mt-4 flex items-center justify-center gap-5 text-neutral-500">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays aria-hidden className="size-4" />
              {formatDate(post.date, locale)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock aria-hidden className="size-4" />
              {post.readMinutes} {dictionary.blog.minRead}
            </span>
          </div>

          <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-[24px]">
            <Image
              alt={isKm ? post.titleKm : post.title}
              className="object-cover"
              fill
              priority
              sizes="(min-width: 768px) 768px, 100vw"
              src={post.image}
            />
          </div>

          <div className="mt-8">
            {post.content.map((block, index) => (
              <BlogContentBlock block={block} isKm={isKm} key={index} />
            ))}
          </div>
        </div>
      </SectionContainer>

      {related.length > 0 ? (
        <SectionContainer className="bg-neutral-50">
          <h2 className="text-h2 text-center font-bold text-neutral-900">
            {dictionary.blog.continueReading}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 min-[744px]:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <BlogCard
                key={item.slug}
                locale={locale}
                post={item}
                readMoreLabel={dictionary.common.readMore}
              />
            ))}
          </div>
        </SectionContainer>
      ) : null}
    </>
  );
}

function BlogContentBlock({
  block,
  isKm,
}: {
  block: BlogPost["content"][number];
  isKm: boolean;
}) {
  if (block.type === "heading") {
    return (
      <h2 className="text-body mt-6 font-semibold text-neutral-900">
        {isKm ? block.textKm : block.text}
      </h2>
    );
  }

  if (block.type === "image") {
    return (
      <div className="relative my-6 aspect-[16/9] w-full overflow-hidden rounded-[16px]">
        <Image
          alt={block.alt}
          className="object-cover"
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          src={block.src}
        />
      </div>
    );
  }

  return (
    <p className="text-body mt-2 text-neutral-700">{isKm ? block.textKm : block.text}</p>
  );
}
