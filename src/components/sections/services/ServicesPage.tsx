
"use client";

import { useMemo, useState } from "react";
import { ConsultCTASection } from "@/components/common/ConsultCTASection";
import { SectionContainer } from "@/components/common/SectionContainer";
import { ServiceCategorySection } from "@/components/sections/services/ServiceCategorySection";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import {
  getPopularServices,
  getServicesByCategory,
  serviceCategories,
  type Service,
} from "@/data/services";
import { useLocale } from "@/i18n/LocaleProvider";

function matchesQuery(service: Service, query: string, isKm: boolean) {
  const title = isKm ? service.titleKm : service.title;
  return title.toLowerCase().includes(query);
}

export function ServicesPage() {
  const { dictionary, locale } = useLocale();
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();
  const isKm = locale === "km";

  const categorySections = useMemo(
    () =>
      serviceCategories.map((category) => ({
        category,
        services: getServicesByCategory(category.slug).filter((service) =>
          normalizedQuery ? matchesQuery(service, normalizedQuery, isKm) : true,
        ),
      })),
    [normalizedQuery, isKm],
  );

  const popularServices = useMemo(
    () =>
      getPopularServices().filter((service) =>
        normalizedQuery ? matchesQuery(service, normalizedQuery, isKm) : true,
      ),
    [normalizedQuery, isKm],
  );

  const hasResults =
    categorySections.some((section) => section.services.length > 0) ||
    popularServices.length > 0;

  // Index drives the alternating section background across visible sections.
  let visibleIndex = 0;
  const nextBackground = () =>
    visibleIndex++ % 2 === 0 ? "bg-white" : "bg-neutral-50";

  return (
    <>
      <ServicesHero dictionary={dictionary} onQueryChange={setQuery} query={query} />

      {hasResults ? (
        <>
          {categorySections.map(({ category, services }) => (
            <ServiceCategorySection
              className={nextBackground()}
              dictionary={dictionary}
              id={category.slug}
              key={category.slug}
              locale={locale}
              services={services}
              subtitle={isKm ? category.descriptionKm : category.description}
              title={isKm ? category.titleKm : category.title}
            />
          ))}

          <ServiceCategorySection
            className="bg-primary-50"
            dictionary={dictionary}
            id="popular-service"
            locale={locale}
            services={popularServices}
            subtitle={dictionary.services.popularSubtitle}
            title={dictionary.services.popularTitle}
          />
        </>
      ) : (
        <SectionContainer className="bg-white">
          <p className="text-body py-12 text-center text-neutral-500">
            {dictionary.services.noResults}
          </p>
        </SectionContainer>
      )}

      <ConsultCTASection dictionary={dictionary} />
    </>
  );
}
