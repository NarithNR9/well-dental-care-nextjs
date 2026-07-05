"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ServiceMenuAccordion } from "@/components/layout/ServiceMenuAccordion";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

type ServiceDropdownProps = {
  isActive: boolean;
  label: string;
};

export function ServiceDropdown({ isActive, label }: ServiceDropdownProps) {
  const { locale } = useLocale();
  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (menuRef.current?.contains(event.target as Node)) {
        return;
      }

      setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  return (
    <div className="relative" ref={menuRef}>
      <div
        className={cn(
          "inline-flex items-center gap-1 text-base font-semibold text-neutral-700",
          isActive && "text-primary-700",
        )}
      >
        <Link
          aria-current={isActive ? "page" : undefined}
          className="transition hover:text-primary-700"
          href="/services"
          onClick={() => setOpen(false)}
        >
          {label}
        </Link>
        <button
          aria-controls="desktop-service-menu"
          aria-expanded={open}
          aria-label={`${label} menu`}
          className="inline-flex cursor-pointer items-center transition hover:text-primary-700"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <ChevronDown aria-hidden className={cn("size-4 transition", open && "rotate-180")} />
        </button>
      </div>

      <div
        className={cn(
          "absolute left-1/2 top-full z-50 w-[min(300px,calc(100vw-32px))] -translate-x-1/2 pt-8 transition duration-150",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        id="desktop-service-menu"
      >
        <div className="max-h-[calc(100vh-112px)] overflow-y-auto rounded-[24px] border border-primary-500 bg-primary-50/95 p-6 pb-3 shadow-design-lg backdrop-blur-xl">
          <ServiceMenuAccordion locale={locale} onNavigate={() => setOpen(false)} />
        </div>
      </div>
    </div>
  );
}
