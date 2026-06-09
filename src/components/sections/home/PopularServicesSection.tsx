import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionContainer } from "@/components/common/SectionContainer";
import { services } from "@/data/services";
import type { Dictionary, Locale } from "@/i18n/config";

export function PopularServicesSection({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  return (
    <SectionContainer className="bg-primary-50">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-h2 text-neutral-900">
            {dictionary.home.services.title}
          </h2>
          <p className="text-base mt-1 text-neutral-500">{dictionary.home.services.subtitle}</p>
        </div>
        <Link
          className="text-small hidden items-center gap-1 text-neutral-900 hover:text-primary-700 sm:inline-flex"
          href="/services"
        >
          {dictionary.common.learnMore}
          <ChevronRight aria-hidden className="size-3.5" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 min-[390px]:grid-cols-2 min-[744px]:grid-cols-2 min-[744px]:gap-6 lg:grid-cols-4">
        {services.slice(0, 4).map((service) => (
          <ServiceCard
            key={service.slug}
            learnMoreLabel={dictionary.common.learnMore}
            locale={locale}
            service={service}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 min-[390px]:grid-cols-2 min-[744px]:hidden">
        {services.slice(4).map((service) => (
          <ServiceCard
            key={service.slug}
            learnMoreLabel={dictionary.common.learnMore}
            locale={locale}
            service={service}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
