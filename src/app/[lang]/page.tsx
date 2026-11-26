import type { Metadata } from "next";
import { connection } from "next/server";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { Navbar } from "@/components/layout/navbar";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = hasLocale(routing.locales, lang)
    ? lang
    : routing.defaultLocale;
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = t("title");
  const description = t("description");
  const siteName = t("siteName");
  const pageUrl = `https://www.aboutmedev.online/${locale}`;

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
      languages: {
        vi: "/vn",
        en: "/en",
      },
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName,
      type: "website",
      locale: locale === "vn" ? "vi_VN" : "en_US",
      images: [
        {
          url: "/og-image.webp",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.webp"],
    },
  };
}

async function Connection() {
  await connection();
  return null;
}

export default function PortfolioLocalePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full overflow-x-clip">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Suspense>
        <Connection />
      </Suspense>
    </>
  );
}
