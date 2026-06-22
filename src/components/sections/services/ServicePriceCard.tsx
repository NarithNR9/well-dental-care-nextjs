import { HeartHandshake, Lightbulb, Users } from "lucide-react";
import { CTAButton } from "@/components/common/CTAButton";
import type { Service } from "@/data/services";
import type { Dictionary, Locale } from "@/i18n/config";

type ServicePriceCardProps = {
  service: Service;
  dictionary: Dictionary;
  locale: Locale;
};

export function ServicePriceCard({ service, dictionary, locale }: ServicePriceCardProps) {
  const { detail } = dictionary.services;
  const isKm = locale === "km";

  return (
    <aside className="rounded-[24px] border border-neutral-100 bg-white p-6 shadow-design-md min-[744px]:p-8">
      <p className="text-body font-semibold text-neutral-900">{detail.priceTitle}</p>
      <p className="mt-1 text-[40px] font-bold leading-[1.2] text-primary-700">
        {service.price.from}
      </p>
      <p className="text-small mt-1 text-neutral-700">
        {isKm ? service.price.noteKm : service.price.note}
      </p>

      <dl className="mt-6 space-y-4">
        <div className="flex items-start gap-3">
          <Users aria-hidden className="mt-0.5 size-5 shrink-0 text-primary-700" />
          <div>
            <dt className="text-small font-semibold text-neutral-900">
              {detail.designedForLabel}
            </dt>
            <dd className="text-small text-neutral-500">
              {isKm ? service.designedForKm : service.designedFor}
            </dd>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Lightbulb aria-hidden className="mt-0.5 size-5 shrink-0 text-primary-700" />
          <div>
            <dt className="text-small font-semibold text-neutral-900">
              {detail.suggestionLabel}
            </dt>
            <dd className="text-small text-neutral-500">
              {isKm ? service.suggestionKm : service.suggestion}
            </dd>
          </div>
        </div>
      </dl>

      <CTAButton
        className="mt-6 w-full"
        href="/book-appointment"
        icon={<HeartHandshake aria-hidden className="size-5" />}
      >
        {detail.bookNow}
      </CTAButton>
    </aside>
  );
}
