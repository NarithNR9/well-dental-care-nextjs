"use client";

import * as React from "react";
import { ChevronRight, Info } from "lucide-react";
import { ConsultCTASection } from "@/components/common/ConsultCTASection";
import { SectionContainer } from "@/components/common/SectionContainer";
import {
  priceCategories,
  type PriceCategory,
  type PriceRow,
} from "@/data/priceList";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

export function PriceListPage() {
  const { dictionary, locale } = useLocale();
  const { priceList } = dictionary;
  const isKm = locale === "km";

  const [openSlugs, setOpenSlugs] = React.useState<Set<string>>(new Set());

  const toggle = (slug: string) =>
    setOpenSlugs((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });

  return (
    <>
      <SectionContainer as="div" className="bg-primary-50">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-h1 font-bold text-primary-700">
            {priceList.title}
          </h1>
          <p className="text-body mx-auto mt-3 max-w-2xl text-neutral-700">
            {priceList.subtitle}
          </p>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-white">
        <div className="mx-auto grid max-w-3xl gap-4">
          {priceCategories.map((category) => (
            <PriceAccordionItem
              category={category}
              dictionary={priceList}
              isKm={isKm}
              isOpen={openSlugs.has(category.slug)}
              key={category.slug}
              onToggle={() => toggle(category.slug)}
            />
          ))}

          <p className="text-small mt-2 flex items-start gap-2 text-neutral-500">
            <Info
              aria-hidden
              className="mt-0.5 size-4 shrink-0 text-primary-700"
            />
            {priceList.disclaimer}
          </p>
        </div>
      </SectionContainer>

      <ConsultCTASection dictionary={dictionary} />
    </>
  );
}

type PriceListDictionary = {
  serviceColumn: string;
  beforeColumn: string;
  nowColumn: string;
  free: string;
};

function PriceAccordionItem({
  category,
  dictionary,
  isKm,
  isOpen,
  onToggle,
}: {
  category: PriceCategory;
  dictionary: PriceListDictionary;
  isKm: boolean;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `price-panel-${category.slug}`;

  return (
    <div className="overflow-hidden rounded-[16px] border border-neutral-200 shadow-design-sm">
      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 bg-primary-50 px-5 py-4 text-left transition hover:bg-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500"
        onClick={onToggle}
        type="button"
      >
        <span className="text-xl font-bold leading-[1.4] text-primary-700">
          {isKm ? category.titleKm : category.title}
        </span>
        <ChevronRight
          aria-hidden
          className={cn(
            "size-5 shrink-0 text-primary-700 transition-transform duration-200",
            isOpen && "rotate-90",
          )}
        />
      </button>

      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows] duration-200",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
        id={panelId}
      >
        <div className="min-h-0">
          <div className="bg-white px-5">
            <div className="grid grid-cols-[1fr_4.5rem_4.5rem] items-center gap-x-3 border-b border-neutral-100 py-3 sm:gap-x-6">
              <span className="text-small text-neutral-500">
                {dictionary.serviceColumn}
              </span>
              <span className="text-small text-right text-neutral-500">
                {dictionary.beforeColumn}
              </span>
              <span className="text-small text-right text-neutral-500">
                {dictionary.nowColumn}
              </span>
            </div>

            {category.rows.map((row, index) => (
              <div
                className={cn(
                  "grid grid-cols-[1fr_4.5rem_4.5rem] items-center gap-x-3 py-3.5 sm:gap-x-6",
                  index < category.rows.length - 1 &&
                    "border-b border-neutral-100",
                )}
                key={row.service}
              >
                <span className="text-body text-neutral-900">
                  {isKm ? row.serviceKm : row.service}
                </span>
                <PriceCell
                  free={dictionary.free}
                  strike={row.beforeStrike}
                  suffix={row.beforeSuffix}
                  tone="before"
                  value={row.before}
                />
                <PriceCell
                  free={dictionary.free}
                  suffix={row.nowSuffix}
                  tone="now"
                  value={row.now}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PriceCell({
  value,
  suffix,
  strike,
  tone,
  free,
}: {
  value: string;
  suffix?: PriceRow["nowSuffix"];
  strike?: boolean;
  tone: "before" | "now";
  free: string;
}) {
  const display = value === "Free" ? free : value;

  return (
    <span
      className={cn(
        "text-body text-right",
        tone === "now" ? "font-semibold text-primary-700" : "text-neutral-500",
        strike && "line-through",
      )}
    >
      {display}
      {suffix ? (
        <sup className="ml-0.5 text-[0.6em] font-normal no-underline">
          {suffix}
        </sup>
      ) : null}
    </span>
  );
}
