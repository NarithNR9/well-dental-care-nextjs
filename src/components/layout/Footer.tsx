"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, MessageCircle, Smile } from "lucide-react";
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
      <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-12 min-[744px]:grid-cols-[1.4fr_2fr] min-[744px]:px-6 lg:px-16">
        <div className="relative overflow-hidden rounded-[24px] bg-white/55 p-6">
          <div className="absolute -bottom-12 -left-6 size-40 rounded-full bg-primary-500/15" />
          <Link className="relative flex items-center gap-3 text-neutral-900" href="/">
            <span className="grid size-12 place-items-center rounded-full bg-white text-primary-700 shadow-design-sm">
              <Smile aria-hidden className="size-7" />
            </span>
            <span>
              <span className="text-h3 block uppercase">Well Dental Care</span>
              <span className="text-small font-semibold text-neutral-500">Beyond your smile</span>
            </span>
          </Link>
          <div className="relative mt-5 flex gap-2">
            {contact.social.map((item) => (
              <a
                aria-label={item.name}
                className="grid size-8 place-items-center rounded-full bg-white text-neutral-900 shadow-design-sm hover:bg-primary-100"
                href={item.url}
                key={item.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt=""
                  aria-hidden
                  className="size-4"
                  src={item.icon}
                  width={16}
                  height={16}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn links={clinicLinks} title={dictionary.home.footer.clinic} />
          <FooterColumn links={treatmentLinks} title={dictionary.home.footer.treatment} />
          <div>
            <h3 className="text-small font-bold text-primary-700">
              {dictionary.home.footer.workingHour}
            </h3>
            <p className="text-small mt-3 whitespace-pre-line text-neutral-500">
              {contact.workingHour}
            </p>
            <p className="text-small mt-2 text-neutral-500">
              {dictionary.home.footer.openDaily}
            </p>
          </div>
          <div>
            <h3 className="text-small font-bold text-primary-700">
              {dictionary.home.footer.visitUs}
            </h3>
            <p className="text-small mt-3 text-neutral-500">{contact.address}</p>
            <CTAButton
              className="mt-4 h-auto min-h-10 whitespace-normal px-4 py-2 text-center text-xs min-[744px]:px-4"
              href={contact.googleMapsUrl}
              icon={<MapPin aria-hidden className="size-4" />}
            >
              {dictionary.common.viewOnGoogleMaps}
            </CTAButton>
          </div>
        </div>
      </div>
      <div className="text-caption border-t border-primary-500/20 px-4 py-5 text-center text-neutral-500">
        <div className="mx-auto flex max-w-[1312px] flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="flex items-center gap-3">
            <Link href="/privacy-policy">{dictionary.home.footer.privacy}</Link>
            <span aria-hidden>•</span>
            <Link href="/terms-of-service">{dictionary.home.footer.terms}</Link>
          </div>
          <p>{dictionary.home.footer.copyright}</p>
          <MessageCircle aria-hidden className="hidden size-4 sm:block" />
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
      <h3 className="text-small font-bold text-primary-700">{title}</h3>
      <ul className="text-small mt-3 grid gap-2 text-neutral-500">
        {links.map((link) => (
          <li key={link.href}>
            <Link className="hover:text-neutral-900" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
