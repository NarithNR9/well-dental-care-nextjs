import type { Dentist } from "@/data/dentists";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import Image from "next/image";

type DentistCardProps = {
  dentist: Dentist;
  locale: Locale;
};

export function DentistCard({ dentist, locale }: DentistCardProps) {
  const name = locale === "km" ? dentist.nameKm : dentist.name;
  const role = locale === "km" ? dentist.roleKm : dentist.role;

  return (
    <article className="relative aspect-[319/314] overflow-hidden rounded-[24px] bg-primary-600 shadow-design-md">
      <div className="absolute -left-24 -top-32 size-[380px] rounded-full bg-primary-300" />
      <Image
        width={36}
        height={36}
        src="/images/dentists/white-logo.svg"
        alt="Well Dental Care"
        className="absolute left-1 top-1 z-20 size-12"
      />
      <Image
        width={169}
        height={290}
        src={dentist.image}
        alt={name}
        className={cn(
          "absolute bottom-0 left-1/2 z-10 h-auto -translate-x-1/2 object-contain w-[54%] min-[744px]:w-[56%]",
        )}
      />
      <div className="absolute inset-x-2 bottom-2 z-20 rounded-[16px] border border-white bg-white/30 px-3 py-2 text-center shadow-design-sm backdrop-blur-xl">
        <h3 className="text-lg font-bold leading-[1.35] text-neutral-900">
          {name}
        </h3>
        <p className="text-base font-medium leading-[1.5] text-neutral-700">
          {role}
        </p>
      </div>
    </article>
  );
}
