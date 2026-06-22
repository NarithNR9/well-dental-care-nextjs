import { ServiceCard } from "@/components/cards/ServiceCard";
import { SectionContainer } from "@/components/common/SectionContainer";
import type { Service } from "@/data/services";
import type { Dictionary, Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type ServiceCategorySectionProps = {
  id: string;
  title: string;
  subtitle: string;
  services: Service[];
  dictionary: Dictionary;
  locale: Locale;
  className?: string;
};

export function ServiceCategorySection({
  id,
  title,
  subtitle,
  services,
  dictionary,
  locale,
  className,
}: ServiceCategorySectionProps) {
  if (services.length === 0) {
    return null;
  }

  return (
    <SectionContainer className={cn("bg-white", className)} id={id}>
      <div>
        <h2 className="text-h2 text-neutral-900">{title}</h2>
        <p className="text-body mt-1 text-neutral-500">{subtitle}</p>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 min-[744px]:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
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
