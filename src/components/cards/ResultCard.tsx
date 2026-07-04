import Image from "next/image";
import type { TreatmentResult } from "@/data/results";
import type { Locale } from "@/i18n/config";

type ResultCardProps = {
  result: TreatmentResult;
  locale: Locale;
  beforeLabel: string;
  afterLabel: string;
};

export function ResultCard({ result, locale, beforeLabel, afterLabel }: ResultCardProps) {
  const isKm = locale === "km";
  const title = isKm ? result.titleKm : result.title;
  const description = isKm ? result.descriptionKm : result.description;
  const sizes = "(min-width: 744px) 22vw, 45vw";

  return (
    <article className="flex flex-col">
      <div className="grid grid-cols-2 overflow-hidden rounded-[24px] shadow-design-sm">
        <div className="relative aspect-square">
          <Image alt={`${title} — ${beforeLabel}`} className="object-cover" fill sizes={sizes} src={result.beforeImage} />
          <span className="text-caption absolute left-3 top-3 rounded-full bg-primary-900/80 px-3 py-1 font-semibold text-white backdrop-blur-sm">
            {beforeLabel}
          </span>
        </div>
        <div className="relative aspect-square">
          <Image alt={`${title} — ${afterLabel}`} className="object-cover" fill sizes={sizes} src={result.afterImage} />
          <span className="text-caption absolute right-3 top-3 rounded-full bg-primary-900/80 px-3 py-1 font-semibold text-white backdrop-blur-sm">
            {afterLabel}
          </span>
        </div>
      </div>

      <h3 className="mt-4 text-2xl font-bold leading-[1.35] text-neutral-900">{title}</h3>
      <p className="text-body mt-1.5 text-neutral-700">{description}</p>
    </article>
  );
}
