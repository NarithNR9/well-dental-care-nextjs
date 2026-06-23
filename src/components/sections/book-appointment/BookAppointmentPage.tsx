"use client";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { useLocale } from "@/i18n/LocaleProvider";

export function BookAppointmentPage() {
  const { dictionary, locale } = useLocale();
  const t = dictionary.book;

  return (
    <section className="mx-auto max-w-[1312px] px-4 py-16 sm:px-6 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-h1 font-bold text-primary-700">{t.title}</h1>
        <p className="text-body mt-4 text-neutral-500">{t.subtitle}</p>
      </div>

      <div className="mx-auto mt-12 max-w-4xl">
        <AppointmentForm dictionary={dictionary} locale={locale} />
      </div>
    </section>
  );
}
