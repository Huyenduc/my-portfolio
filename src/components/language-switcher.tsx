"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { type MouseEvent, useCallback } from "react";
import { usePathname } from "@/i18n/navigation";
import { type Locale, routing } from "@/i18n/routing";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const currentLang = useLocale() as Locale;
  const pathname = usePathname();

  const handleLocaleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      const nextLocale = event.currentTarget.dataset.locale as
        | Locale
        | undefined;
      if (!nextLocale || nextLocale === currentLang) return;
      // biome-ignore lint/suspicious/noDocumentCookie: synchronous cookie update for next-intl soft navigation
      document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
      trackEvent("language_switch", {
        from_locale: currentLang,
        to_locale: nextLocale,
      });
    },
    [currentLang],
  );

  return (
    <fieldset
      className="inline-flex items-center rounded-md border border-border bg-card p-0.5 text-xs font-mono"
      aria-label="Language switcher"
    >
      {routing.locales.map((locale) => {
        const target =
          pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
        const isActive = currentLang === locale;

        return (
          <Link
            key={locale}
            href={target}
            hrefLang={locale}
            data-locale={locale}
            prefetch={true}
            scroll={false}
            onClick={handleLocaleClick}
            className={cn(
              "rounded-xs px-2.5 py-1 font-semibold transition-all",
              isActive
                ? "bg-primary text-white"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </fieldset>
  );
}
