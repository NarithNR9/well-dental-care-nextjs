"use client";

import { BlogCard } from "@/components/cards/BlogCard";
import { SectionContainer } from "@/components/common/SectionContainer";
import { blogs } from "@/data/blogs";
import { useLocale } from "@/i18n/LocaleProvider";

export function BlogPage() {
  const { dictionary, locale } = useLocale();

  return (
    <>
      <SectionContainer as="div" className="bg-primary-50">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-h1 font-bold text-primary-700">{dictionary.blog.title}</h1>
          <p className="text-body mx-auto mt-3 max-w-2xl text-neutral-700">
            {dictionary.blog.subtitle}
          </p>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 min-[744px]:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => (
            <BlogCard
              key={post.slug}
              locale={locale}
              post={post}
              readMoreLabel={dictionary.common.readMore}
            />
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
