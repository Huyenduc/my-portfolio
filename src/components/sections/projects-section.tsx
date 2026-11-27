"use client";

import {
  ArrowUpRight,
  Briefcase,
  Calendar,
  CheckCircle2,
  Layers,
  Play,
  Smartphone,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { type MouseEvent, useCallback, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Container, Section } from "@/components/ui/section";
import type { ProjectItem } from "@/interfaces/portfolio";
import { trackEvent } from "@/lib/analytics";

function ProjectPreviewWindow({ project }: { project: ProjectItem }) {
  switch (project.id) {
    case "swipe-drama":
      return (
        <div className="relative rounded-md border border-border/80 bg-[#0d151d] p-5 shadow-2xl font-mono text-xs overflow-hidden space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff715b]" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <span className="text-[11px] text-slate-400">
              swipedrama.com • Web + iOS + Android
            </span>
          </div>
          <div className="grid grid-cols-12 gap-3.5 items-center">
            <div className="col-span-5 rounded-lg border border-white/10 bg-gradient-to-b from-[#1e2d3d] to-[#121c26] p-3.5 space-y-2.5 text-center">
              <div className="mx-auto h-9 w-9 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                <Play className="size-4 fill-current" />
              </div>
              <div className="text-[11px] font-bold text-white">
                Short Drama Feed
              </div>
              <div className="text-[10px] text-slate-400">
                TikTok-style Vertical Swipe
              </div>
              <div className="rounded bg-primary px-2 py-1 text-[10px] font-semibold text-white">
                Earn Coins → Unlock VIP
              </div>
            </div>
            <div className="col-span-7 space-y-2 text-[11px] text-slate-300 leading-relaxed">
              <div className="text-primary font-semibold">
                Architecture & Infrastructure:
              </div>
              <div>• App: Next.js + Expo (iOS/Android)</div>
              <div>• API: NestJS + Node.js + Prisma ORM</div>
              <div>• DB & Storage: PostgreSQL + Cloudflare R2</div>
              <div>• Streaming & Ops: Bunny CDN + Sentry + GA</div>
            </div>
          </div>
        </div>
      );

    case "digdig":
      return (
        <div className="relative rounded-md border border-border/80 bg-[#0d151d] p-5 shadow-2xl overflow-hidden space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 font-mono text-xs">
            <span className="text-white font-bold">
              DIGDIG.JP • Second-hand Fashion
            </span>
            <span className="text-[11px] text-primary">
              End-to-End • Web + Mobile
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-white/10 bg-[#162330] p-3 space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>SHOPIFY STOREFRONT</span>
                <span className="text-emerald-400">LIVE SYNC</span>
              </div>
              <div className="rounded bg-gradient-to-r from-primary/25 to-amber-500/20 p-2.5 font-mono text-[11px] font-bold text-white">
                Liquid + Next.js + Webhooks
              </div>
              <div className="text-[10px] font-mono text-slate-400">
                Products • Inventory • Stock • Pricing
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-[#162330] p-3 space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>EXPO MOBILE APP</span>
                <span className="text-primary">iOS & ANDROID</span>
              </div>
              <div className="rounded bg-gradient-to-r from-sky-500/20 to-indigo-500/20 p-2.5 font-mono text-[11px] font-bold text-white">
                Browse • Order • Payment
              </div>
              <div className="text-[10px] font-mono text-slate-400">
                Prisma • PostgreSQL • Supabase • LINE API
              </div>
            </div>
          </div>
        </div>
      );

    case "trudi-ai":
      return (
        <div className="relative rounded-md border border-border/80 bg-[#0d151d] p-5 shadow-2xl font-mono text-xs overflow-hidden space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <span className="text-primary font-semibold">
              trudi-ai/property-management.ts
            </span>
            <span className="text-[11px] text-slate-400">
              Team Size: 100 • PropTech
            </span>
          </div>
          <pre className="text-[11px] leading-relaxed text-slate-300 overflow-x-auto">
            <code>{`// Centralised Property Management Platform
// Stack: Angular + React Native + Node.js + AWS + ChatGPT + PostgreSQL
const handleIncomingEnquiry = async (enquiry: TenantEnquiry) => {
  const task = await chatGPT.classifyAndExtractTask(enquiry);
  await restApi.syncPropertyManagementSoftware(task);
  return renderSharedCustomUIComponent({ web: "Angular", mobile: "RN" });
};`}</code>
          </pre>
        </div>
      );

    default:
      return (
        <div className="relative rounded-md border border-border/80 bg-[#0d151d] p-5 shadow-2xl overflow-hidden space-y-3">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 font-mono text-xs">
            <span className="text-white font-semibold">
              VRI Portal • 911 Interpreters
            </span>
            <span className="text-emerald-400 text-[11px]">
              ● Twilio Live Call
            </span>
          </div>
          <div className="rounded-lg border border-white/10 bg-[#162330] p-4 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-white">
                Hospital Patients ↔ Medical Interpreters
              </span>
              <span className="font-mono text-[11px] text-primary">
                Video & Audio Call
              </span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Real-time interpretation management system on Web (React) and
              Mobile (React Native iOS/Android) powered by Node.js, PostgreSQL,
              and Twilio.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[10px]">
              <span className="rounded bg-emerald-500/20 text-emerald-300 px-2 py-0.5">
                Twilio Video/Audio
              </span>
              <span className="rounded bg-primary/20 text-primary px-2 py-0.5">
                React Native (iOS & Android)
              </span>
              <span className="rounded bg-white/10 text-slate-300 px-2 py-0.5">
                Node.js & PostgreSQL
              </span>
            </div>
          </div>
        </div>
      );
  }
}

export function ProjectsSection() {
  const t = useTranslations("projectsSection");
  const items = useMemo(() => t.raw("items") as ProjectItem[], [t]);

  const handleProjectLinkClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      const { projectId, projectName, linkType } = event.currentTarget.dataset;
      if (!projectId) return;
      trackEvent("project_click", {
        project_id: projectId,
        project_name: projectName ?? projectId,
        link_type: linkType ?? "website",
      });
    },
    [],
  );

  return (
    <Section id="projects">
      <Container>
        {/* Centered "Projects" Heading with Vertical Coral Line & Dot */}
        <Reveal direction="up">
          <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              {t("heading")}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl">
              {t("description")}
            </p>
            <div className="mt-4 flex flex-col items-center">
              <span className="h-8 w-[2px] bg-primary" />
              <span className="h-2 w-2 rounded-full bg-primary mt-0.5 animate-ping" />
            </div>
          </div>
        </Reveal>

        {/* Alternating 2-Column Project Rows matching the reference image with FULL CV details */}
        <div className="space-y-24 sm:space-y-32">
          {items.map((project, index) => {
            const isEven = index % 2 === 0;
            const hasLinks = Boolean(
              project.links.website ||
                project.links.appStore ||
                project.links.googlePlay,
            );

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start"
              >
                {/* Project Info Column */}
                <Reveal
                  direction={isEven ? "left" : "right"}
                  delay={100}
                  className={
                    isEven
                      ? "lg:col-span-7 space-y-5 order-1"
                      : "lg:col-span-7 space-y-5 order-1 lg:order-2"
                  }
                >
                  {/* Project Highlight Badge */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                    <Badge variant="coral" className="font-mono text-xs">
                      {project.highlightBadge}
                    </Badge>
                  </div>

                  {/* Title & Metadata Bar (Role, Period, Team Size) */}
                  <div className="space-y-2 text-center lg:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                      {project.name}
                    </h3>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs sm:text-sm font-mono text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5 text-foreground font-semibold">
                        <Briefcase className="size-3.5 text-primary" />
                        <span>
                          {t("roleLabel")}: {project.role}
                        </span>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="size-3.5 text-primary" />
                        <span>{project.period}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="size-3.5 text-primary" />
                        <span>
                          {t("teamSizeLabel")}: {project.teamSize}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Full Project Description */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center lg:text-left">
                    {project.description}
                  </p>

                  {/* Full Responsibilities List from CV */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                      {t("responsibilitiesLabel")}:
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                      {project.responsibilities.map((resp) => (
                        <li key={resp} className="flex items-start gap-2.5">
                          <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Full Categorized Tech Stack from CV (No truncation) */}
                  <div className="rounded-lg border border-border/70 bg-card/60 p-4 space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-foreground font-semibold">
                      <Layers className="size-3.5 text-primary" />
                      <span>{t("techStackLabel")}:</span>
                    </div>
                    <div className="space-y-2">
                      {project.techCategories.map((category) => (
                        <div
                          key={category.label}
                          className="flex flex-wrap items-center gap-1.5"
                        >
                          <span className="font-mono text-xs font-semibold text-muted-foreground mr-1">
                            {category.label}:
                          </span>
                          {category.items.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="px-2.5 py-0.5 text-xs font-mono transition-transform duration-200 hover:-translate-y-0.5"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons & All Live Store Links from CV */}
                  {hasLinks && (
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-2">
                      {project.links.website ? (
                        <Button
                          asChild
                          variant="default"
                          className="transition-transform duration-300 hover:-translate-y-1"
                        >
                          <a
                            href={project.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-project-id={project.id}
                            data-project-name={project.name}
                            data-link-type="website"
                            onClick={handleProjectLinkClick}
                          >
                            {t("visitWebsiteBtn")}
                          </a>
                        </Button>
                      ) : (
                        project.links.appStore && (
                          <Button
                            asChild
                            variant="default"
                            className="transition-transform duration-300 hover:-translate-y-1"
                          >
                            <a
                              href={project.links.appStore}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-project-id={project.id}
                              data-project-name={project.name}
                              data-link-type="app_store"
                              onClick={handleProjectLinkClick}
                            >
                              {t("viewAppStoreBtn")}
                            </a>
                          </Button>
                        )
                      )}

                      {project.links.website && project.links.appStore && (
                        <a
                          href={project.links.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-project-id={project.id}
                          data-project-name={project.name}
                          data-link-type="app_store"
                          onClick={handleProjectLinkClick}
                          className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-foreground underline underline-offset-8 decoration-primary/70 hover:text-primary transition-colors"
                        >
                          <Smartphone className="size-4 text-primary" />
                          <span>{t("appStoreBtn")}</span>
                          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      )}

                      {project.links.googlePlay && (
                        <a
                          href={project.links.googlePlay}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-project-id={project.id}
                          data-project-name={project.name}
                          data-link-type="google_play"
                          onClick={handleProjectLinkClick}
                          className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-foreground underline underline-offset-8 decoration-primary/70 hover:text-primary transition-colors"
                        >
                          <Play className="size-3.5 text-primary" />
                          <span>{t("googlePlayBtn")}</span>
                          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </a>
                      )}
                    </div>
                  )}
                </Reveal>

                {/* Project Visual Preview Frame with Offset Border Accent */}
                <Reveal
                  direction={isEven ? "right" : "left"}
                  delay={200}
                  className={
                    isEven
                      ? "lg:col-span-5 order-2 lg:sticky lg:top-28"
                      : "lg:col-span-5 order-2 lg:order-1 lg:sticky lg:top-28"
                  }
                >
                  <div className="group relative mx-auto max-w-lg px-2 sm:px-0 transition-transform duration-500 hover:-translate-y-2">
                    {/* Offset decorative frame behind the card like the reference */}
                    <div
                      className={
                        isEven
                          ? "pointer-events-none hidden sm:block absolute -top-3 -right-3 h-full w-full rounded-md border border-primary/35 transition-all duration-500 group-hover:-top-4 group-hover:-right-4 group-hover:border-primary/70"
                          : "pointer-events-none hidden sm:block absolute -top-3 -left-3 h-full w-full rounded-md border border-primary/35 transition-all duration-500 group-hover:-top-4 group-hover:-left-4 group-hover:border-primary/70"
                      }
                    />
                    <ProjectPreviewWindow project={project} />
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
