import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import type { Service } from "@/data/services";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

const toneClasses: Record<Service["imageTone"], string> = {
  chair: "from-neutral-50 via-blue-50 to-primary-100",
  cleaning: "from-blue-50 via-white to-neutral-100",
  whitening: "from-blue-100 via-blue-50 to-primary-50",
  brace: "from-red-50 via-white to-primary-100",
  surgery: "from-neutral-50 via-white to-blue-50",
};

type ServiceCardProps = {
  service: Service;
  locale: Locale;
  learnMoreLabel: string;
};

export function ServiceCard({ service, locale, learnMoreLabel }: ServiceCardProps) {
  const title = locale === "km" ? service.titleKm : service.title;
  const category = locale === "km" ? service.categoryKm : service.category;

  return (
    <article className="group overflow-hidden rounded-[16px] border border-neutral-200 bg-white shadow-design-md transition hover:-translate-y-1 hover:shadow-design-lg">
      {/* TODO: Replace with exported Figma service image asset. */}
      <div
        className={cn(
          "relative h-32 overflow-hidden bg-gradient-to-br rounded-[16px] m-1.5 min-[744px]:h-36",
          toneClasses[service.imageTone],
        )}
      >
        <span className="text-caption absolute left-3 top-3 rounded-full bg-primary-900 px-3 py-1 font-bold text-white shadow-design-sm">
          {category}
        </span>
        <div className="absolute -right-7 bottom-4 size-28 rounded-full bg-white/65 blur-sm" />
        <div className="absolute bottom-4 right-6 grid size-16 place-items-center rounded-full bg-white/85 text-primary-700 shadow-design-md">
          <Sparkles aria-hidden className="size-7" />
        </div>
        <div className="absolute bottom-4 left-6 h-11 w-24 rounded-full bg-white/65 shadow-inner" />
      </div>
      <div className="p-2 min-[744px]:p-4">
        <h3 className="min-h-[3em] text-2xl font-semibold leading-[1.5] text-neutral-900">
          {title}
        </h3>
        <Link
          className="text-caption mt-4 inline-flex items-center justify-center w-full gap-1 font-bold text-primary-700 hover:text-neutral-900"
          href={`/services/${service.slug}`}
        >
          {learnMoreLabel}
          <ChevronRight aria-hidden className="size-3.5" />
        </Link>
      </div>
    </article>
  );
}
