import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import enMessages from "../../messages/en.json";
import vnMessages from "../../messages/vn.json";
import { routing } from "./routing";

const messagesMap = {
  vn: vnMessages,
  en: enMessages,
} as const;

export default getRequestConfig(async ({ locale }) => {
  const resolvedLocale = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;

  return {
    locale: resolvedLocale,
    messages: messagesMap[resolvedLocale],
  };
});
