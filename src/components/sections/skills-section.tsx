"use client";

import {
  Award,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  FileSearch,
  Server,
  ShieldCheck,
  Smartphone,
  Video,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Container, Section } from "@/components/ui/section";
import type {
  HighlightStatItem,
  ServiceItem,
  SkillGroup,
  WorkStyleItem,
} from "@/interfaces/portfolio";

const serviceIcons: Record<ServiceItem["id"], React.ReactNode> = {
  web: (
    <Code2 className="size-6 text-foreground group-hover:text-primary transition-colors" />
  ),
  mobile: (
    <Smartphone className="size-6 text-foreground group-hover:text-primary transition-colors" />
  ),
  backend: (
    <Server className="size-6 text-foreground group-hover:text-primary transition-colors" />
  ),
};

const workStyleIcons: Record<WorkStyleItem["id"], React.ReactNode> = {
  requirement: <FileSearch className="size-5 text-primary" />,
  quality: <Award className="size-5 text-primary" />,
  testing: <ClipboardCheck className="size-5 text-primary" />,
  evidence: <Video className="size-5 text-primary" />,
  responsibility: <ShieldCheck className="size-5 text-primary" />,
};

export function SkillsSection() {
  const tHero = useTranslations("hero");
  const tSkills = useTranslations("skillsSection");
  const services = useMemo(
    () => tSkills.raw("services") as ServiceItem[],
    [tSkills],
  );
  const highlightStats = useMemo(
    () => tSkills.raw("highlightStats") as HighlightStatItem[],
    [tSkills],
  );
  const workStyleItems = useMemo(
    () => tSkills.raw("workStyleItems") as WorkStyleItem[],
    [tSkills],
  );
  const groups = useMemo(
    () => tSkills.raw("groups") as SkillGroup[],
    [tSkills],
  );

  return (
    <Section id="about">
      <Container>
        {/* Top Row: Left Vertical Services Timeline | Right About Me + 3 Big Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: 3 Services connected by a vertical Coral Line & Dots */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative pl-8 space-y-10 max-w-md w-full">
              {/* Vertical Coral Line */}
              <div className="absolute left-[5px] top-2 bottom-2 w-[2px] bg-primary/80" />

              {services.map((srv, idx) => (
                <Reveal key={srv.id} direction="left" delay={idx * 120}>
                  <div className="group relative flex items-start gap-5 transition-transform duration-300 hover:translate-x-1.5">
                    {/* Coral Dot on the vertical line with pulse */}
                    <span className="absolute -left-8 top-4 h-3 w-3 rounded-full bg-primary ring-4 ring-background transition-transform duration-300 group-hover:scale-125" />

                    {/* Service Icon Box */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-card shadow-sm transition-all duration-300 group-hover:border-primary/60 group-hover:shadow-md group-hover:shadow-primary/10">
                      {serviceIcons[srv.id]}
                    </div>

                    {/* Service Title & Tech Stack */}
                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                        {srv.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {srv.subtitle}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: "About me" Heading + Bio + 3 Metrics with Coral + / % */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            <Reveal direction="right" delay={100}>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                {tSkills("aboutHeading")}
              </h2>
            </Reveal>

            <Reveal direction="right" delay={200}>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {tHero("objective")}
              </p>
            </Reveal>

            {/* 3 Metrics Row matching the reference image (4+, 100%, 3+) */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-2">
              {highlightStats.map((st, idx) => (
                <Reveal key={st.label} direction="up" delay={250 + idx * 120}>
                  <div className="group space-y-1.5 flex flex-col items-center lg:items-start transition-transform duration-300 hover:-translate-y-1">
                    <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground font-mono">
                      {st.num}{" "}
                      <span className="text-primary inline-block transition-transform duration-300 group-hover:scale-125">
                        {st.symbol}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-snug max-w-[140px]">
                      {st.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Working Style & Engineering Standards Block */}
        <div className="mt-16 pt-12 border-t border-border/50 space-y-8">
          <Reveal direction="up">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                <CheckCircle2 className="size-4" />
                <span>{tSkills("workStyleEyebrow")}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {tSkills("workStyleTitle")}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                {tSkills("workStyleSubtitle")}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5">
            {workStyleItems.map((item, idx) => (
              <Reveal
                key={item.id}
                direction="up"
                delay={idx * 90}
                className={idx < 3 ? "lg:col-span-2" : "lg:col-span-3"}
              >
                <div className="group h-full rounded-xl border border-border/80 bg-card/70 p-5 space-y-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                      {workStyleIcons[item.id]}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Compact Full Tech Stack Pills Underneath */}
        <div id="skills" className="mt-16 pt-12 border-t border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group, idx) => (
              <Reveal key={group.id} direction="up" delay={idx * 100}>
                <div className="h-full rounded-xl border border-border/70 bg-card/60 p-5 space-y-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-foreground">
                      {group.title}
                    </h4>
                    <span className="text-xs font-mono text-primary">
                      {group.skills.length}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs transition-transform duration-200 hover:scale-105 hover:border-primary/40"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
