"use client";

import { useLocale } from "@/i18n/LocaleProvider";

type LegalPageProps = {
  type: "privacy" | "terms";
};

export function LegalPage({ type }: LegalPageProps) {
  const { dictionary } = useLocale();
  const content = dictionary.legal[type];

  return (
    <section className="mx-auto min-h-[55vh] max-w-[1312px] px-4 py-12 sm:px-6 lg:px-16 lg:py-16">
      <h1 className="text-h1 font-bold text-neutral-900">{content.title}</h1>

      <div className="mt-8 max-w-3xl space-y-6">
        {content.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-body text-neutral-500">
            {paragraph.map((segment, segmentIndex) =>
              "bold" in segment && segment.bold ? (
                <strong
                  key={segmentIndex}
                  className="font-semibold text-neutral-700"
                >
                  {segment.text}
                </strong>
              ) : (
                <span key={segmentIndex}>{segment.text}</span>
              ),
            )}
          </p>
        ))}
      </div>
    </section>
  );
}
