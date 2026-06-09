"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, MessageCircle } from "lucide-react";
import { CTAButton } from "@/components/common/CTAButton";
import { contact } from "@/data/contact";
import { useLocale } from "@/i18n/LocaleProvider";

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
  ];

  return (
    <footer className="bg-primary-50">
      <div className="grid max-w-[1440px] gap-8 pr-4 pb-8 items-center min-[744px]:grid-cols-[280px_1fr] min-[744px]:gap-10 min-[744px]:pr-6 lg:grid-cols-[320px_1fr] lg:gap-16 lg:pr-16">
        {/* Left: Logo + Clinic Building Background + Social */}
        <div className="relative min-h-[280px] h-full overflow-hidden rounded-[16px] min-[744px]:min-h-[320px]">
          {/* Clinic building background image */}
          <Image
            src="/images/brand/clinic-building.png"
            alt=""
            aria-hidden
            fill
            className="object-center opacity-90"
            sizes="(max-width: 744px) 100vw, 320px"
          />
          {/* Content overlay */}
          <div className="relative z-10 flex h-full flex-col justify-center items-center">
            {/* Logo */}
            <Image
              src="/images/brand/well-dental-logo.png"
              alt="Well Dental Care - Beyond Your Smile"
              width={220}
              height={120}
              className="h-auto w-[180px] min-[744px]:w-[200px] lg:w-[220px]"
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
        <div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FooterColumn
              links={clinicLinks}
              title={dictionary.home.footer.clinic}
            />
            <FooterColumn
              links={treatmentLinks}
              title={dictionary.home.footer.treatment}
            />
            <div>
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
            <div>
              <h3 className="text-base font-bold text-primary-700">
                {dictionary.home.footer.visitUs}
              </h3>
              <p className="text-base mt-3 text-neutral-700">
                {contact.address}
              </p>
              <CTAButton
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
          <div className="mt-8 border-t border-primary-500/20 pt-5">
            <div className="text-caption flex flex-col items-center justify-center gap-2 text-center text-neutral-500">
              <div className="flex items-center gap-3">
                <Link
                  className="transition-colors hover:text-neutral-900"
                  href="/privacy-policy"
                >
                  {dictionary.home.footer.privacy}
                </Link>
                <span aria-hidden>•</span>
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
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
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
  );
}
