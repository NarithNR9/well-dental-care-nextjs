import type { Feature } from "@/data/features";
import type { Locale } from "@/i18n/config";

type FeatureCardProps = {
  feature: Feature;
  locale: Locale;
  index: number;
};

export function FeatureCard({ feature, locale, index }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article
      className={`rounded-[24px] p-6 shadow-design-md ${index % 2 === 0 ? "bg-primary-50" : "bg-neutral-50"}`}
    >
      <div className="flex items-start gap-3">
        <div>
          <div
            className={`flex items-center space-x-2 ${index % 2 === 0 ? "text-primary-700" : "text-neutral-900"}`}
          >
            <Icon aria-hidden className="size-6" />
            <h3 className="text-base font-semibold">
              {locale === "km" ? feature.titleKm : feature.title}
            </h3>
          </div>
          <p className="text-base mt-2 text-neutral-500 min-[744px]:text-small">
            {locale === "km" ? feature.descriptionKm : feature.description}
          </p>
        </div>
      </div>
    </article>
  );
}
