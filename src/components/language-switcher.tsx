"use client";

import { useRouter as useNextRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { type Locale, routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const currentLang = useLocale() as Locale;
  const pathname = usePathname();
  const nextRouter = useNextRouter();

  // Prefetch alternate locale routes in the background after initial load
  // because next-intl's <Link locale={...}> forces prefetch={false}.
  useEffect(() => {
    for (const locale of routing.locales) {
      if (locale !== currentLang) {
        const target =
          pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
        nextRouter.prefetch(target);
      }
    }
  }, [currentLang, pathname, nextRouter]);

  return (
    <fieldset
      className="inline-flex items-center rounded-md border border-border bg-card p-0.5 text-xs font-mono"
      aria-label="Language switcher"
    >
      <Link
        href={pathname}
        locale="vn"
        scroll={false}
        className={cn(
          "rounded-xs px-2.5 py-1 font-semibold transition-all",
          currentLang === "vn"
            ? "bg-primary text-white"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        VN
      </Link>
      <Link
        href={pathname}
        locale="en"
        scroll={false}
        className={cn(
          "rounded-xs px-2.5 py-1 font-semibold transition-all",
          currentLang === "en"
            ? "bg-primary text-white"
            : "text-muted-foreground hover:text-foreground",
        )}
      >
        EN
      </Link>
    </fieldset>
  );
}
