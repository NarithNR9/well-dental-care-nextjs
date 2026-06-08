import { BlogCard } from "@/components/cards/BlogCard";
import { SectionContainer } from "@/components/common/SectionContainer";
import { blogs } from "@/data/blogs";
import type { Dictionary, Locale } from "@/i18n/config";

export function BlogSection({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  return (
    <SectionContainer className="bg-white">
      <div className="text-center">
        <h2 className="text-h2 text-primary-700">
          {dictionary.home.blog.eyebrow}
        </h2>
        <p className="text-small mt-2 text-neutral-500">{dictionary.home.blog.subtitle}</p>
      </div>
      <div className="mt-8 grid gap-8 min-[744px]:grid-cols-2 lg:grid-cols-3">
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
  );
}
