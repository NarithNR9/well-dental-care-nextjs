import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionContainer } from "@/components/common/SectionContainer";
import { getPopularServices } from "@/data/services";
import type { Dictionary, Locale } from "@/i18n/config";

export function PopularServicesSection({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const popularServices = getPopularServices();

  return (
    <SectionContainer className="bg-primary-50">
      <div className="mb-8 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-h2 text-neutral-900">
            {dictionary.home.services.title}
          </h2>
          <p className="text-base mt-1 text-neutral-500">{dictionary.home.services.subtitle}</p>
        </div>
        <Link
          className="text-small inline-flex shrink-0 items-center gap-1 text-neutral-900 hover:text-primary-700"
          href="/services"
        >
          {dictionary.common.learnMore}
          <ChevronRight aria-hidden className="size-3.5" />
        </Link>
      </div>
      {/* Mobile + tablet: swipeable horizontal slideshow (one row, scroll left to right). */}
      <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] min-[744px]:-mx-6 min-[744px]:px-6 lg:hidden [&::-webkit-scrollbar]:hidden">
        {popularServices.map((service) => (
          <div
            className="w-[80%] shrink-0 snap-start min-[744px]:w-[calc(50%-8px)]"
            key={service.slug}
          >
            <ServiceCard
              learnMoreLabel={dictionary.common.learnMore}
              locale={locale}
              popularLabel={dictionary.services.popularBadge}
              service={service}
            />
          </div>
        ))}
      </div>

      {/* Desktop: grid. */}
      <div className="hidden gap-6 lg:grid lg:grid-cols-4">
        {popularServices.slice(0, 4).map((service) => (
          <ServiceCard
            key={service.slug}
            learnMoreLabel={dictionary.common.learnMore}
            locale={locale}
            popularLabel={dictionary.services.popularBadge}
            service={service}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
