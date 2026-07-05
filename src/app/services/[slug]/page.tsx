import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/sections/services/ServiceDetailPage";
import { getServiceBySlug, services } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service | Well Dental Care" };
  }

  return {
    title: `${service.title} | Well Dental Care`,
    description: service.about.slice(0, 160),
  };
}

export default async function ServiceDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!getServiceBySlug(slug)) {
    notFound();
  }

  return <ServiceDetailPage slug={slug} />;
}
