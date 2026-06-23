"use client";

import Image from "next/image";
import { CTAButton } from "@/components/common/CTAButton";
import { useLocale } from "@/i18n/LocaleProvider";

export function NotFoundPage() {
  const { dictionary } = useLocale();
  const t = dictionary.notFound;

  return (
    <section className="mx-auto flex max-w-[1312px] flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-16 lg:py-32">
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <span className="text-[120px] font-bold leading-none text-primary-500 sm:text-[160px]">
          4
        </span>
        <Image
          src="/images/tooth-worried.svg"
          alt={t.toothAlt}
          width={140}
          height={140}
          className="h-[100px] w-[100px] sm:h-[140px] sm:w-[140px]"
          priority
        />
        <span className="text-[120px] font-bold leading-none text-primary-500 sm:text-[160px]">
          4
        </span>
      </div>

      <h1 className="mt-6 text-[28px] font-bold leading-[1.3] text-primary-700 sm:text-[40px] sm:leading-[1.2]">
        {t.title}
      </h1>
      <p className="mt-4 max-w-md text-base leading-[1.5] text-neutral-500">
        {t.description}
      </p>

      <CTAButton href="/" className="mt-8">
        {t.returnHome}
      </CTAButton>
    </section>
  );
}
