"use client";

import Image from "next/image";
import { Check, Sparkles } from "lucide-react";
import { ConsultCTASection } from "@/components/common/ConsultCTASection";
import { SectionContainer } from "@/components/common/SectionContainer";
import { ServicePriceCard } from "@/components/sections/services/ServicePriceCard";
import { getCategoryBySlug, getServiceBySlug } from "@/data/services";
import { useLocale } from "@/i18n/LocaleProvider";

export function ServiceDetailPage({ slug }: { slug: string }) {
  const { dictionary, locale } = useLocale();
  const isKm = locale === "km";

  const service = getServiceBySlug(slug);

  if (!service) {
    return null;
  }

  const category = getCategoryBySlug(service.categorySlug);
  const title = isKm ? service.titleKm : service.title;
  const categoryTitle = category
    ? isKm
      ? category.titleKm
      : category.title
    : "";
  const included = isKm ? service.includedKm : service.included;
  const { detail } = dictionary.services;

  return (
    <>
      <SectionContainer className="bg-white" innerClassName="max-w-[1000px]">
        <div className="text-center">
          {categoryTitle ? (
            <p className="text-body font-semibold text-neutral-900">{categoryTitle}</p>
          ) : null}
          <h1 className="text-h1 mt-2 font-bold text-primary-700">{title}</h1>
        </div>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-[24px] shadow-design-md">
          {service.image ? (
            <Image
              alt={title}
              className="object-cover"
              fill
              priority
              sizes="(min-width: 1024px) 1000px, 100vw"
              src={service.image}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100">
              <div className="grid size-24 place-items-center rounded-full bg-white/85 text-primary-700 shadow-design-md">
                <Sparkles aria-hidden className="size-10" />
              </div>
            </div>
          )}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px] lg:gap-12">
          <div>
            <h2 className="text-h3 text-neutral-900">{detail.aboutTitle}</h2>
            <p className="text-body mt-3 text-neutral-500">
              {isKm ? service.aboutKm : service.about}
            </p>

            <h3 className="text-body mt-8 font-semibold text-neutral-900">
              {detail.includedTitle}
            </h3>
            <ul className="mt-4 space-y-3">
              {included.map((item) => (
                <li className="flex items-start gap-3" key={item}>
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary-100 text-primary-700">
                    <Check aria-hidden className="size-3.5" />
                  </span>
                  <span className="text-body text-neutral-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <ServicePriceCard dictionary={dictionary} locale={locale} service={service} />
        </div>
      </SectionContainer>

      <ConsultCTASection dictionary={dictionary} />
    </>
  );
}
