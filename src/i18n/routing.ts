import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["vn", "en"],
  defaultLocale: "vn",
});

export type Locale = (typeof routing.locales)[number];
