"use client";

import { Info } from "lucide-react";
import { ConsultCTASection } from "@/components/common/ConsultCTASection";
import { SectionContainer } from "@/components/common/SectionContainer";
import {
  getServicesByCategory,
  serviceCategories,
} from "@/data/services";
import { useLocale } from "@/i18n/LocaleProvider";

export function PriceListPage() {
  const { dictionary, locale } = useLocale();
  const { priceList } = dictionary;
  const isKm = locale === "km";

  const categories = serviceCategories
    .map((category) => ({
      category,
      services: getServicesByCategory(category.slug),
    }))
    .filter((group) => group.services.length > 0);

  return (
    <>
      <SectionContainer as="div" className="bg-primary-50">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-h1 font-bold text-primary-700">{priceList.title}</h1>
          <p className="text-body mx-auto mt-3 max-w-2xl text-neutral-700">
            {priceList.subtitle}
          </p>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white">
        <div className="mx-auto grid max-w-4xl gap-8">
          {categories.map(({ category, services }) => (
            <div
              className="overflow-hidden rounded-[24px] border border-neutral-200 shadow-design-sm"
              key={category.slug}
            >
              <div className="bg-primary-50 px-6 py-4">
                <h2 className="text-2xl font-bold leading-[1.35] text-neutral-900">
                  {isKm ? category.titleKm : category.title}
                </h2>
              </div>

              <div className="grid grid-cols-[1fr_auto] items-center gap-x-4 border-b border-neutral-200 bg-neutral-50 px-6 py-3">
                <span className="text-small font-semibold text-neutral-500">
                  {priceList.serviceColumn}
                </span>
                <span className="text-small font-semibold text-neutral-500">
                  {priceList.priceColumn}
                </span>
              </div>

              <ul>
                {services.map((service) => (
                  <li
                    className="grid grid-cols-[1fr_auto] items-center gap-x-4 border-b border-neutral-100 px-6 py-4 last:border-b-0"
                    key={service.slug}
                  >
                    <div>
                      <p className="text-body font-semibold text-neutral-900">
                        {isKm ? service.titleKm : service.title}
                      </p>
                      <p className="text-small mt-0.5 text-neutral-500">
                        {isKm ? service.price.noteKm : service.price.note}
                      </p>
                    </div>
                    <span className="text-body whitespace-nowrap font-bold text-primary-700">
                      {service.price.from}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className="text-small flex items-start gap-2 text-neutral-500">
            <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-primary-700" />
            {priceList.disclaimer}
          </p>
        </div>
      </SectionContainer>

      <ConsultCTASection dictionary={dictionary} />
    </>
  );
}
