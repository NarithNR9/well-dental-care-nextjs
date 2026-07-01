"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { CalendarDays, ChevronDown, MapPin, MessageCircle } from "lucide-react";
import { CTAButton } from "@/components/common/CTAButton";
import { contact } from "@/data/contact";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

export function Footer() {
  const { dictionary } = useLocale();

  const clinicLinks = [
    { label: dictionary.nav.home, href: "/" },
    { label: dictionary.nav.about, href: "/about" },
    { label: dictionary.nav.ourClinic, href: "/our-clinic" },
    { label: dictionary.nav.blog, href: "/blog" },
    { label: dictionary.nav.contact, href: "/contact" },
  ];

  const treatmentLinks = [
    { label: dictionary.nav.service, href: "/services" },
    { label: dictionary.nav.technology, href: "/technology" },
    { label: dictionary.nav.result, href: "/result" },
    { label: dictionary.nav.priceList, href: "/price-list" },
  ];

  return (
    <footer className="bg-primary-50">
      {/* Main footer wrapper - relative for mobile background image */}
      <div className="relative overflow-hidden">
        {/* Clinic building background image - full background on mobile only */}
        <Image
          src="/images/brand/clinic-building.png"
          alt=""
          aria-hidden
          fill
          className="object-cover object-bottom opacity-80 min-[744px]:hidden"
          sizes="100vw"
        />

        <div className="relative z-10 mx-auto max-w-[1440px] py-8 min-[744px]:grid min-[744px]:grid-cols-[280px_1fr] min-[744px]:items-center min-[744px]:gap-10 min-[744px]:pr-6 lg:grid-cols-[320px_1fr] lg:gap-16 lg:pr-16">
          {/* Left: Logo + Clinic Building Background (desktop only) + Social */}
          <div className="relative min-h-[240px] overflow-hidden min-[744px]:min-h-[320px] min-[744px]:h-full min-[744px]:rounded-[16px]">
            {/* Clinic building background image - desktop only */}
            <div className="hidden min-[744px]:block">
              <Image
                src="/images/brand/clinic-building.png"
                alt=""
                aria-hidden
                fill
                className="object-center opacity-90"
                sizes="320px"
              />
            </div>
            {/* Content overlay */}
            <div className="relative z-10 flex h-full flex-col justify-center items-center py-8 min-[744px]:py-0">
              {/* Logo */}
              <Image
                src="/images/brand/well-dental-logo.png"
                alt="Well Dental Care - Beyond Your Smile"
                width={220}
                height={120}
                className="h-auto w-[320px] min-[744px]:w-[360px] lg:w-[220px]"
              />
              {/* Social icons */}
              <div className="mt-6 flex gap-3">
                {contact.social.map((item) => (
                  <a
                    aria-label={item.name}
                    className="grid size-10 place-items-center rounded-full transition-colors hover:opacity-80"
                    href={item.url}
                    key={item.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      alt={item.name}
                      className="size-9"
                      src={item.icon}
                      width={36}
                      height={36}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Footer Columns + Bottom Bar */}
          <div className="px-4 min-[744px]:px-0">
            <div className="grid gap-0 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Clinic - collapsible on mobile */}
              <CollapsibleFooterColumn
                links={clinicLinks}
                title={dictionary.home.footer.clinic}
              />
              {/* Treatment - collapsible on mobile */}
              <CollapsibleFooterColumn
                links={treatmentLinks}
                title={dictionary.home.footer.treatment}
              />
              {/* Working Hour - always visible */}
              <div className="py-4 sm:border-t-0 sm:py-0">
                <h3 className="text-base font-bold text-primary-700">
                  {dictionary.home.footer.workingHour}
                </h3>
                <p className="text-base mt-3 whitespace-pre-line text-neutral-700">
                  {contact.workingHour}
                </p>
                <p className="text-base mt-2 text-neutral-700">
                  {dictionary.home.footer.openDaily}
                </p>
              </div>
              {/* Visit Us On - always visible */}
              <div className="border-t border-primary-500/20 py-4 sm:border-t-0 sm:py-0">
                <h3 className="text-base font-bold text-primary-700">
                  {dictionary.home.footer.visitUs}
                </h3>
                <p className="text-base mt-3 text-neutral-700">
                  {contact.address}
                </p>
                <CTAButton
                  target="_blank"
                  className="mt-4 h-auto min-h-10 text-primary-900 font-semibold whitespace-normal px-4 py-2 text-center text-base min-[744px]:px-4"
                  href={contact.googleMapsUrl}
                  icon={<MapPin aria-hidden className="size-6" />}
                  variant="outline"
                >
                  {dictionary.common.viewOnGoogleMaps}
                </CTAButton>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 border-t border-neutral-200 pt-5">
              <div className="text-caption flex flex-col items-center justify-center gap-2 text-center text-neutral-500">
                <div className="flex items-center gap-2">
                  <Link
                    className="transition-colors hover:text-neutral-900"
                    href="/privacy-policy"
                  >
                    {dictionary.home.footer.privacy}
                  </Link>
                  <span className="text-primary-700 text-lg" aria-hidden>•</span>
                  <Link
                    className="transition-colors hover:text-neutral-900"
                    href="/terms-of-service"
                  >
                    {dictionary.home.footer.terms}
                  </Link>
                </div>
                <p>{dictionary.home.footer.copyright}</p>
                <a href="https://github.com/NarithNR9" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-gray-800">{dictionary.home.footer.developer}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function CollapsibleFooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="sm:border-t-0">
      {/* Mobile: collapsible button */}
      <button
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left sm:hidden"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        <h3 className="text-base font-bold text-primary-700">{title}</h3>
        <ChevronDown
          aria-hidden
          className={cn(
            "size-5 text-primary-700 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      {/* Mobile: collapsible content */}
      <div
        className={cn(
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 sm:hidden",
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <ul className="text-base grid gap-2 pb-4 pl-2 text-neutral-700">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  className="transition-colors hover:text-neutral-900"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop: always visible */}
      <div className="hidden sm:block">
        <h3 className="text-base font-bold text-primary-700">{title}</h3>
        <ul className="text-base mt-3 grid gap-2 text-neutral-700">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className="transition-colors hover:text-neutral-900"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
