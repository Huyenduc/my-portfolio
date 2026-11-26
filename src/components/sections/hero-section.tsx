"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Container } from "@/components/ui/section";

const techStripItems = [
  "HTML5",
  "CSS / Tailwind",
  "TypeScript",
  "Node.js / NestJS",
  "React / Next.js",
  "React Native / Expo",
  "PostgreSQL",
  "Git / GitHub",
];

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section id="home" className="relative overflow-hidden pt-6 sm:pt-12">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 items-center pb-12 sm:pb-16">
          {/* Left Column: Staggered Reveal Intro */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <Reveal direction="up" delay={50}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {t("hello")}
                <span className="inline-block text-primary ml-1 animate-bounce">
                  .
                </span>
              </h2>
            </Reveal>

            {/* Accent horizontal line + I'm Huyen Duc */}
            <Reveal direction="left" delay={150}>
              <div className="flex items-center justify-center lg:justify-start gap-4 group">
                <span className="h-[2px] w-16 sm:w-24 bg-primary shrink-0 transition-all duration-500 group-hover:w-32" />
                <p className="text-xl sm:text-2xl font-medium text-foreground/90">
                  {t("imName")}
                </p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={250}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                {t("role")}
              </h1>
            </Reveal>

            {/* 2 Signature CTA Buttons with Hover Lift */}
            <Reveal direction="up" delay={350}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="transition-transform duration-300 hover:-translate-y-1 active:translate-y-0"
                >
                  <a href="#contact">{t("gotProjectCta")}</a>
                </Button>
                <Button
                  asChild
                  variant="coralOutline"
                  size="lg"
                  className="transition-transform duration-300 hover:-translate-y-1 active:translate-y-0"
                >
                  <a
                    href="/Pham-Huyen-Duc-CV.pdf"
                    download="Pham-Huyen-Duc-CV.pdf"
                  >
                    {t("myResumeCta")}
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Glowing Coral Ring + Floating < > chevrons + Portrait */}
          <div className="lg:col-span-5 flex items-center justify-center relative py-6">
            {/* Ambient radial glow behind ring */}
            <div className="pointer-events-none absolute h-72 w-72 sm:h-88 sm:w-88 rounded-full bg-primary/20 blur-3xl animate-pulse" />

            {/* Decorative left < chevron floating */}
            <svg
              viewBox="0 0 60 100"
              className="pointer-events-none absolute left-0 sm:left-2 top-8 w-12 h-20 text-primary/40 animate-float-slow"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <polyline points="50,15 12,50 50,85" />
            </svg>

            {/* Decorative right > chevron floating with delay */}
            <svg
              viewBox="0 0 60 100"
              className="pointer-events-none absolute right-0 sm:right-2 bottom-6 w-12 h-20 text-primary/40 animate-float-delayed"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <polyline points="10,15 48,50 10,85" />
            </svg>

            {/* Glowing Coral Hollow Ring + Orbiting Dashed Ring + Pop-out Portrait */}
            <Reveal direction="zoom" delay={200}>
              <div className="relative flex items-center justify-center group pt-8">
                {/* Subtle rotating dashed outer orbit */}
                <div className="pointer-events-none absolute -inset-2 rounded-full border border-dashed border-primary/30 animate-spin-slow" />

                {/* Outer Glowing Coral Hollow Ring behind the portrait */}
                <div className="h-64 w-64 sm:h-80 sm:w-80 rounded-full border-[18px] sm:border-[24px] border-primary/85 animate-ring-glow transition-transform duration-500 group-hover:scale-[1.03]" />

                {/* Transparent cutout portrait popping out of the ring */}
                <div className="pointer-events-none absolute bottom-0 h-80 w-72 sm:h-96 sm:w-88 overflow-hidden rounded-b-full">
                  <Image
                    src="/avatar.webp"
                    alt={t("name")}
                    fill
                    sizes="360px"
                    className="object-contain object-bottom drop-shadow-[0_14px_28px_rgba(0,0,0,0.55)] transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      {/* Full-width horizontal Tech Strip Bar */}
      <div className="w-full border-y border-border/60 bg-card/75 py-5">
        <Container>
          <Reveal direction="up" delay={400}>
            <div className="flex flex-wrap items-center justify-center lg:justify-between gap-x-8 gap-y-3 text-xs sm:text-sm font-medium text-muted-foreground/80">
              {techStripItems.map((tech) => (
                <span
                  key={tech}
                  className="transition-all duration-300 hover:text-primary hover:-translate-y-0.5 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
