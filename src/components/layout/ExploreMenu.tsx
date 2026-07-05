"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { exploreMenuItems } from "@/data/exploreMenu";
import type { Dictionary } from "@/i18n/config";
import { cn } from "@/lib/utils";

type ExploreMenuProps = {
  dictionary: Dictionary;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
};

export function ExploreMenu({
  dictionary,
  onNavigate,
  variant = "desktop",
}: ExploreMenuProps) {
  const pathname = usePathname();

  return (
    <ul className={cn("grid", variant === "desktop" ? "gap-2" : "gap-1")}>
      {exploreMenuItems.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <li key={item.href}>
            <Link
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "block py-1 text-base font-bold leading-[1.35] text-neutral-700 transition hover:text-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500",
                variant === "desktop"
                  ? "rounded-xl"
                  : "rounded-2xl px-3",
                isActive && "text-primary-700",
              )}
              href={item.href}
              onClick={onNavigate}
            >
              {dictionary.nav[item.key]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
