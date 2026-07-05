import type { Metadata } from "next";
import { BlogPage } from "@/components/sections/blog/BlogPage";

export const metadata: Metadata = {
  title: "Blog | Well Dental Care",
  description:
    "Discover the latest in modern dental care and essential guides for your family's lifelong dental wellness with Well Dental Care.",
};

export default function Blog() {
  return <BlogPage />;
}
