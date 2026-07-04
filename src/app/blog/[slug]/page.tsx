import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetailPage } from "@/components/sections/blog/BlogDetailPage";
import { blogs, getBlogBySlug } from "@/data/blogs";

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return { title: "Blog | Well Dental Care" };
  }

  return {
    title: `${post.title} | Well Dental Care`,
    description: post.excerpt,
  };
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!getBlogBySlug(slug)) {
    notFound();
  }

  return <BlogDetailPage slug={slug} />;
}
