"use client";

import * as React from "react";
import Image from "next/image";
import { Phone, X } from "lucide-react";
import { contact } from "@/data/contact";
import { useLocale } from "@/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

const HeadsetIcon = () => (
  <svg
    aria-hidden
    className="size-full"
    fill="none"
    viewBox="24 16 44 44"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M51.0004 36.8054C51.0004 36.4594 51.0004 36.2864 51.0524 36.1324C51.2034 35.6844 51.6024 35.5114 52.0024 35.3294C52.4504 35.1244 52.6744 35.0224 52.8974 35.0044C53.1494 34.9844 53.4024 35.0384 53.6184 35.1594C53.9044 35.3194 54.1044 35.6254 54.3084 35.8734C55.2514 37.0194 55.7234 37.5924 55.8954 38.2234C56.0354 38.7334 56.0354 39.2674 55.8954 39.7764C55.6444 40.6984 54.8494 41.4704 54.2604 42.1864C53.9594 42.5514 53.8084 42.7344 53.6184 42.8414C53.3987 42.9632 53.1478 43.0172 52.8974 42.9964C52.6744 42.9784 52.4504 42.8764 52.0014 42.6714C51.6014 42.4894 51.2034 42.3164 51.0524 41.8684C51.0004 41.7144 51.0004 41.5414 51.0004 41.1954V36.8054ZM41.0004 36.8054C41.0004 36.3694 40.9884 35.9784 40.6364 35.6724C40.5084 35.5614 40.3384 35.4844 39.9994 35.3294C39.5504 35.1254 39.3264 35.0224 39.1034 35.0044C38.4364 34.9504 38.0774 35.4064 37.6934 35.8744C36.7494 37.0194 36.2774 37.5924 36.1044 38.2244C35.9652 38.7327 35.9652 39.2691 36.1044 39.7774C36.3564 40.6984 37.1524 41.4714 37.7404 42.1864C38.1114 42.6364 38.4664 43.0474 39.1034 42.9964C39.3264 42.9784 39.5504 42.8764 39.9994 42.6714C40.3394 42.5174 40.5084 42.4394 40.6364 42.3284C40.9884 42.0224 41.0004 41.6314 41.0004 41.1964V36.8054Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M39 35C39 31.686 42.134 29 46 29C49.866 29 53 31.686 53 35"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M53 43V43.8C53 45.567 51.21 47 49 47H47"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type ContactAction = {
  name: string;
  href: string;
  icon: string | null;
};

function findChat(name: string) {
  return contact.chat.find((item) => item.name === name);
}

// Sticky support button (bottom-right, all breakpoints). Clicking it toggles a
// stack of contact actions; the button itself flips to a close (X) state.
export function FloatingContactButton() {
  const { dictionary } = useLocale();
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const actions: ContactAction[] = [
    { name: "Telegram", href: findChat("Telegram")?.url ?? "#", icon: "/images/icons/Telegram.svg" },
    { name: "Messenger", href: findChat("Messenger")?.url ?? "#", icon: "/images/icons/Messenger.svg" },
    { name: "WhatsApp", href: findChat("WhatsApp")?.url ?? "#", icon: "/images/icons/Whatsapp.svg" },
    { name: dictionary.common.callNow, href: `tel:${contact.phone[0].replace(/\s/g, "")}`, icon: null },
  ];

  React.useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div
      className="fixed bottom-4 right-3 z-40 flex flex-col items-end gap-3 min-[744px]:bottom-6 min-[744px]:right-6"
      ref={containerRef}
    >
      <div
        className={cn(
          "flex origin-bottom-right flex-col items-stretch gap-3 rounded-[24px] bg-white p-3 shadow-design-lg transition-all duration-200",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0",
        )}
        id="floating-contact-menu"
      >
        {actions.map((action) => {
          const isExternal = action.href.startsWith("http");

          return (
            <a
              className="flex w-42 items-center gap-3 rounded-full border border-primary-500 bg-white px-3 py-2 transition hover:bg-primary cursor-pointer"
              href={action.href}
              key={action.name}
              onClick={() => setOpen(false)}
              rel={isExternal ? "noopener noreferrer" : undefined}
              target={isExternal ? "_blank" : undefined}
            >
              <span className="grid size-6 shrink-0 place-items-center">
                {action.icon ? (
                  <Image alt="" className="size-6" height={28} src={action.icon} width={28} />
                ) : (
                  <Phone aria-hidden className="size-5 text-primary-700" />
                )}
              </span>
              <span className="text-body font-semibold text-primary-900">{action.name}</span>
            </a>
          );
        })}
      </div>

      <button
        aria-controls="floating-contact-menu"
        aria-expanded={open}
        aria-label={dictionary.common.chatWithUs}
        className="grid size-10 place-items-center rounded-full bg-primary-500 text-primary-900 shadow-design-lg transition duration-200 hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-700 min-[744px]:size-14"
        onClick={() => setOpen((value) => !value)}
        type="button"
      >
        {open ? <X aria-hidden className="size-6" /> : <HeadsetIcon />}
      </button>
    </div>
  );
}
