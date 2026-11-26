import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import enMessages from "../../../messages/en.json";
import vnMessages from "../../../messages/vn.json";

const messagesMap = {
  vn: vnMessages,
  en: enMessages,
} as const;

export const instant = false;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ lang: locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(routing.locales, lang)) {
    notFound();
  }

  const messages = messagesMap[lang];

  return (
    <NextIntlClientProvider locale={lang} messages={messages}>
      <div className="relative min-h-screen flex flex-col pt-20">
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
