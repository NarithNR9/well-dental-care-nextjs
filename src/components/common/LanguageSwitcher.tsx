"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { type Locale } from "@/i18n/config";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

const languageOptions: {
  locale: Locale;
  label: string;
  icon: string;
}[] = [
  {
    locale: "km",
    label: "KH",
    icon: "/images/icons/icon-kh.svg",
  },
  {
    locale: "en",
    label: "EN",
    icon: "/images/icons/icon-en.svg",
  },
];

const labels: Record<Locale, "EN" | "KH"> = {
  en: "EN",
  km: "KH",
};

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const selected = languageOptions.find((item) => item.locale === locale) ?? languageOptions[0];

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Select language"
        className={cn(
          "inline-flex h-10 items-center gap-2 rounded-full bg-primary-500 px-3 text-base font-semibold text-primary-900 shadow-design-md transition hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500",
          compact && "px-2.5",
        )}
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        <Image
          alt=""
          aria-hidden
          className="size-6 rounded-full object-cover"
          height={24}
          src={selected.icon}
          width={24}
        />
        <span>{labels[locale]}</span>
        <ChevronDown
          aria-hidden
          className={cn("size-4 transition", open && "rotate-180")}
        />
      </button>

      <div
        className={cn(
          "absolute right-0 top-full z-50 mt-1 w-24 overflow-hidden rounded-[16px] bg-primary-500 py-2 shadow-design-lg transition",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0",
        )}
        role="listbox"
      >
        {languageOptions.map((item) => (
          <button
            aria-selected={locale === item.locale}
            className={cn(
              "flex w-full items-center gap-2 px-3 py-2 text-left text-base font-semibold text-primary-900 transition hover:bg-primary-600",
              locale === item.locale && "bg-primary-600",
            )}
            key={item.locale}
            onClick={() => {
              setLocale(item.locale);
              setOpen(false);
            }}
            role="option"
            type="button"
          >
            <Image
              alt=""
              aria-hidden
              className="size-6 rounded-full object-cover"
              height={24}
              src={item.icon}
              width={24}
            />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
