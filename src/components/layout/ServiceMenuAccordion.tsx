"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  getServiceMenuTitle,
  serviceMenuCategories,
} from "@/data/serviceMenu";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

type ServiceMenuAccordionProps = {
  locale: Locale;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
};

export function ServiceMenuAccordion({
  locale,
  onNavigate,
  variant = "desktop",
}: ServiceMenuAccordionProps) {
  const [openCategory, setOpenCategory] = React.useState<string | null>(null);

  return (
    <ul className={cn("grid", variant === "desktop" ? "gap-2" : "gap-1")}>
      {serviceMenuCategories.map((category) => {
        const isOpen = openCategory === category.href;

        return (
          <li key={category.href}>
            <button
              aria-expanded={isOpen}
              className={cn(
                "flex w-full items-center justify-between gap-4 text-left font-bold leading-[1.35] text-neutral-700 transition hover:text-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500 cursor-pointer",
                variant === "desktop"
                  ? "rounded-xl text-base"
                  : "rounded-2xl px-3 py-0 text-sm",
                isOpen && "text-primary-700",
              )}
              onClick={() => setOpenCategory(isOpen ? null : category.href)}
              type="button"
            >
              <span>{getServiceMenuTitle(category, locale)}</span>
              <ChevronRight
                aria-hidden
                className={cn("size-4 shrink-0 transition", isOpen && "rotate-90")}
              />
            </button>

            <div
              className={cn(
                "grid overflow-hidden transition-[grid-template-rows,opacity] duration-200",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <ul
                className={cn(
                  "min-h-0",
                  variant === "desktop"
                    ? "grid gap-3.5 pb-1 pl-6 pt-4"
                    : "grid gap-2.5 pb-2 pl-6 pt-2",
                )}
              >
                {category.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      className={cn(
                        "block leading-[1.5] text-neutral-700 transition hover:text-primary-700",
                        variant === "desktop" ? "text-md" : "text-sm",
                      )}
                      href={child.href}
                      onClick={onNavigate}
                    >
                      {getServiceMenuTitle(child, locale)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
