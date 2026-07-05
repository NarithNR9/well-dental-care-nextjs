import Image from "next/image";
import type { Equipment } from "@/data/technology";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type TechnologyCardProps = {
  equipment: Equipment;
  locale: Locale;
  /** Cream vs. neutral surface, driven by the checkerboard layout. */
  tone: "cream" | "neutral";
};

export function TechnologyCard({ equipment, locale, tone }: TechnologyCardProps) {
  const isKm = locale === "km";
  const name = isKm ? equipment.nameKm : equipment.name;
  const description = isKm ? equipment.descriptionKm : equipment.description;

  return (
    <article
      className={cn(
        "flex flex-col rounded-[24px] p-6 min-[744px]:p-8",
        tone === "cream" ? "bg-primary-50" : "bg-neutral-50",
      )}
    >
      <h3 className="text-2xl font-bold leading-[1.35] text-neutral-900">{name}</h3>
      <p className="text-body mt-3 text-neutral-700">
        {description.map((segment, index) =>
          segment.bold ? (
            <strong className="font-semibold text-neutral-900" key={index}>
              {segment.text}
            </strong>
          ) : (
            segment.text
          ),
        )}
      </p>
      <div className="relative mt-6 aspect-[4/3] w-full">
        <Image
          alt={equipment.imageAlt}
          className="object-contain"
          fill
          sizes="(min-width: 1024px) 45vw, (min-width: 744px) 45vw, 100vw"
          src={equipment.image}
        />
      </div>
    </article>
  );
}
