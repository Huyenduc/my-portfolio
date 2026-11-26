"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const currentLang = useLocale() as Locale;
  const pathname = usePathname();

  return (
    <fieldset
      className="inline-flex items-center rounded-md border border-border bg-card p-0.5 text-xs font-mono"
      aria-label="Language switcher"
    >
      <Link
        href={pathname}
        locale="vn"
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
