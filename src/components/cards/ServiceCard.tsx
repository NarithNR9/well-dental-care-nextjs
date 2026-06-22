import Image from "next/image";
import Link from "next/link";
import {
  Baby,
  Bone,
  ChevronRight,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/data/services";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type CategoryVisual = { gradient: string; icon: LucideIcon };

// Placeholder visuals per category — used until real service photography
// arrives via the API (service.image).
const categoryVisuals: Record<string, CategoryVisual> = {
  "general-dentistry": { gradient: "from-neutral-50 via-blue-50 to-primary-100", icon: Stethoscope },
  "cosmetic-dentistry": { gradient: "from-blue-100 via-blue-50 to-primary-50", icon: Sparkles },
  orthodontics: { gradient: "from-primary-50 via-white to-primary-100", icon: Smile },
  "oral-surgery": { gradient: "from-neutral-50 via-white to-blue-50", icon: Syringe },
  implants: { gradient: "from-blue-50 via-white to-neutral-100", icon: Bone },
  "pediatric-dentistry": { gradient: "from-red-50 via-white to-primary-100", icon: Baby },
};

const fallbackVisual: CategoryVisual = {
  gradient: "from-neutral-50 via-white to-primary-100",
  icon: Sparkles,
};

type ServiceCardProps = {
  service: Service;
  locale: Locale;
  learnMoreLabel: string;
  popularLabel: string;
};

export function ServiceCard({
  service,
  locale,
  learnMoreLabel,
  popularLabel,
}: ServiceCardProps) {
  const title = locale === "km" ? service.titleKm : service.title;
  const visual = categoryVisuals[service.categorySlug] ?? fallbackVisual;
  const Icon = visual.icon;

  return (
    <Link
      className="group flex flex-col overflow-hidden rounded-[16px] border-neutral-200 bg-white shadow-design-md transition hover:-translate-y-1 hover:shadow-design-lg"
      href={`/services/${service.slug}`}
    >
      <div className="relative m-1.5 h-32 overflow-hidden rounded-[16px] min-[744px]:h-36">
        {service.image ? (
          <Image
            alt={title}
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 744px) 45vw, 100vw"
            src={service.image}
          />
        ) : (
          <div className={cn("flex h-full w-full items-center justify-center bg-gradient-to-br", visual.gradient)}>
            <div className="grid size-16 place-items-center rounded-full bg-white/85 text-primary-700 shadow-design-md">
              <Icon aria-hidden className="size-7" />
            </div>
          </div>
        )}
        {service.popular ? (
          <span className="text-caption absolute left-3 top-3 rounded-full bg-primary-900 px-3 py-1 font-bold text-white shadow-design-sm">
            {popularLabel}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-2 min-[744px]:p-4">
        <h3 className="min-h-[3em] text-2xl font-semibold leading-[1.5] text-neutral-900">
          {title}
        </h3>
        <span className="text-caption mt-4 inline-flex w-full items-center justify-center gap-1 font-bold text-primary-700 group-hover:text-neutral-900">
          {learnMoreLabel}
          <ChevronRight aria-hidden className="size-3.5" />
        </span>
      </div>
    </Link>
  );
}
