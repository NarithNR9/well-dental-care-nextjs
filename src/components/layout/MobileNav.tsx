"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { createPortal } from "react-dom";
import { CalendarDays, ChevronRight, Menu, X } from "lucide-react";
import { CTAButton } from "@/components/common/CTAButton";
import { ServiceMenuAccordion } from "@/components/layout/ServiceMenuAccordion";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

type NavItem = {
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
};

export function MobileNav({ navItems }: { navItems: readonly NavItem[] }) {
  const { dictionary, locale } = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [serviceOpen, setServiceOpen] = React.useState(false);
  const portalTarget = typeof document === "undefined" ? null : document.body;

  const closeMenu = () => {
    setOpen(false);
    setServiceOpen(false);
  };

  const toggleMenu = () => {
    if (open) {
      setServiceOpen(false);
    }

    setOpen((value) => !value);
  };

  const drawer = (
    <div
      className={cn(
        "fixed inset-0 z-[100] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      id="mobile-navigation-drawer"
    >
      <button
        aria-label="Close mobile navigation"
        className={cn(
          "absolute inset-0 bg-neutral-950/35 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={closeMenu}
        type="button"
      />

        <aside
          className={cn(
            "absolute inset-y-0 right-0 flex w-[min(560px,calc(100vw-56px))] flex-col bg-primary-50/95 p-6 shadow-design-lg backdrop-blur-xl transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="mb-6 flex items-center justify-between gap-6">
            <Link aria-label="Well Dental Care home" href="/" onClick={closeMenu}>
              <Image
                alt="Well Dental Care"
                className="h-12 w-auto object-contain"
                height={1093}
                priority
                src="/images/brand/well-dental-logo.png"
                width={2616}
              />
            </Link>

            <button
              aria-label="Close menu"
              className="grid size-9 shrink-0 place-items-center rounded-full text-primary-700 transition hover:bg-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500"
              onClick={closeMenu}
              type="button"
            >
              <X aria-hidden className="size-5" />
            </button>
          </div>

          <nav
            aria-label="Mobile navigation"
            className="grid flex-1 content-start gap-2 overflow-y-auto pb-6"
          >
            {navItems.map((item) => {
              const isActive = isNavItemActive(pathname, item.href);

              if (item.key === "service") {
                return (
                  <div key={item.key}>
                    <div
                      className={cn(
                        "flex w-full items-center justify-between gap-2 rounded-2xl py-1 text-base font-bold text-neutral-700",
                        isActive && "text-primary-700",
                      )}
                    >
                      <Link
                        aria-current={isActive ? "page" : undefined}
                        className="flex-1 transition hover:text-primary-700"
                        href={item.href}
                        onClick={closeMenu}
                      >
                        {dictionary.nav[item.key]}
                      </Link>
                      <button
                        aria-expanded={serviceOpen}
                        aria-label={`${dictionary.nav[item.key]} menu`}
                        className="grid size-8 shrink-0 place-items-center rounded-full transition hover:text-primary-700"
                        onClick={() => setServiceOpen((value) => !value)}
                        type="button"
                      >
                        <ChevronRight
                          aria-hidden
                          className={cn("size-5 transition", serviceOpen && "rotate-90")}
                        />
                      </button>
                    </div>

                    <div
                      className={cn(
                        "grid overflow-hidden transition-[grid-template-rows,opacity] duration-200",
                        serviceOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className={cn("min-h-0", serviceOpen && "pt-2")}>
                        <ServiceMenuAccordion
                          locale={locale}
                          onNavigate={closeMenu}
                          variant="mobile"
                        />
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-2xl px-0 py-1 text-base font-bold text-neutral-700 transition hover:text-primary-700",
                    isActive && "text-primary-700",
                  )}
                  href={item.href}
                  key={item.key}
                  onClick={closeMenu}
                >
                  {dictionary.nav[item.key]}
                </Link>
              );
            })}
          </nav>

          <CTAButton
            className="h-14 w-full justify-center px-6 text-lg"
            href="/book-appointment"
            icon={<CalendarDays aria-hidden className="size-6" />}
            onClick={closeMenu}
          >
            {dictionary.common.bookAppointment}
          </CTAButton>
      </aside>
    </div>
  );

  return (
    <div className="lg:hidden">
      <button
        aria-expanded={open}
        aria-controls="mobile-navigation-drawer"
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid size-10 place-items-center rounded-full bg-primary text-neutral-900 shadow-design-sm transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-500"
        onClick={toggleMenu}
        type="button"
      >
        {open ? <X aria-hidden className="size-4" /> : <Menu aria-hidden className="size-4" />}
      </button>
      {portalTarget ? createPortal(drawer, portalTarget) : null}
    </div>
  );
}

function isNavItemActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
