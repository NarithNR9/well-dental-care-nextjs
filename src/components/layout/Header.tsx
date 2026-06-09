"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, ChevronDown } from "lucide-react";
import { CTAButton } from "@/components/common/CTAButton";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { MobileNav } from "@/components/layout/MobileNav";
import { ServiceDropdown } from "@/components/layout/ServiceDropdown";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

const navItems: {
  key:
    | "home"
    | "about"
    | "service"
    | "technology"
    | "result"
    | "ourClinic"
    | "blog"
    | "contact";
  href: string;
  hasMenu?: boolean;
}[] = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "service", href: "/services", hasMenu: true },
  { key: "technology", href: "/technology" },
  { key: "result", href: "/result" },
  { key: "ourClinic", href: "/our-clinic" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
] as const;

export function Header() {
  const { dictionary } = useLocale();
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-primary-50/65 shadow-design-sm backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-3 px-4 sm:h-16 min-[744px]:px-6 lg:h-20 lg:px-16">
        <Link
          aria-label="Well Dental Care home"
          className="flex min-w-0 items-center text-neutral-900"
          href="/"
        >
          <Image
            alt="Well Dental Care"
            className="h-11 w-auto object-contain sm:h-12"
            height={1093}
            priority
            src="/images/brand/well-dental-logo.png"
            width={2616}
          />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => {
            const isActive = isNavItemActive(pathname, item.href);

            if (item.key === "service") {
              return (
                <ServiceDropdown
                  isActive={isActive}
                  key={item.key}
                  label={dictionary.nav[item.key]}
                />
              );
            }

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "inline-flex items-center gap-1 text-base font-semibold text-neutral-700 transition hover:text-primary-700",
                  isActive && "text-primary-700",
                )}
                href={item.href}
                key={item.key}
              >
                {dictionary.nav[item.key]}
                {item.hasMenu ? <ChevronDown aria-hidden className="size-3.5" /> : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <LanguageSwitcher compact />
          <CTAButton
            className="hidden sm:inline-flex"
            href="/book-appointment"
            icon={<CalendarDays aria-hidden className="size-6" />}
          >
            {dictionary.common.bookAppointment}
          </CTAButton>
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </header>
  );
}

function isNavItemActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
