"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { ExploreMenu } from "@/components/layout/ExploreMenu";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

type ExploreDropdownProps = {
  isActive: boolean;
  label: string;
};

export function ExploreDropdown({ isActive, label }: ExploreDropdownProps) {
  const { dictionary } = useLocale();
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
      <button
        aria-controls="desktop-explore-menu"
        aria-expanded={open}
        className={cn(
          "inline-flex cursor-pointer items-center gap-1 text-base font-semibold text-neutral-700 transition hover:text-primary-700",
          isActive && "text-primary-700",
        )}
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {label}
        <ChevronDown aria-hidden className={cn("size-4 transition", open && "rotate-180")} />
      </button>

      <div
        className={cn(
          "absolute left-1/2 top-full z-50 w-[min(180px,calc(100vw-32px))] -translate-x-1/2 pt-8 transition duration-150",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        id="desktop-explore-menu"
      >
        <div className="rounded-[24px] border border-primary-500 bg-primary-50/95 p-3 shadow-design-lg backdrop-blur-xl">
          <ExploreMenu dictionary={dictionary} onNavigate={() => setOpen(false)} />
        </div>
      </div>
    </div>
  );
}
