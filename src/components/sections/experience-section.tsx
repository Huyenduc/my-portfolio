"use client";

import {
  Briefcase,
  Calendar,
  CheckCircle2,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/section";
import type { EducationItem, ExperienceItem } from "@/interfaces/portfolio";

export function ExperienceSection() {
  const t = useTranslations("experienceSection");
  const experiences = useMemo(
    () => t.raw("experiences") as ExperienceItem[],
    [t],
  );
  const education = useMemo(() => t.raw("education") as EducationItem[], [t]);

  return (
    <Section id="experience" className="border-t border-border/60">
      <Container>
        <Reveal direction="up">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
            className="text-center lg:text-left mx-auto lg:mx-0 flex flex-col items-center lg:items-start"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Work Experience Column */}
          <Reveal
            direction="left"
            delay={100}
            className="lg:col-span-7 space-y-5"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2.5 text-lg font-bold text-foreground">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/25">
                <Briefcase className="size-4" />
              </div>
              <h3>{t("workTitle")}</h3>
            </div>

            {experiences.map((exp) => (
              <Card key={exp.company} className="relative overflow-hidden">
                <div className="h-1 w-full bg-primary" />
                <CardHeader className="space-y-2 pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Badge variant="coral" className="font-mono text-xs">
                      <Calendar className="size-3.5" />
                      <span>{exp.period}</span>
                    </Badge>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                      <MapPin className="size-3.5 text-primary" />
                      {exp.location}
                    </span>
                  </div>

                  <div>
                    <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
                      {exp.company}
                    </CardTitle>
                    <p className="font-mono text-sm font-semibold text-primary mt-0.5">
                      {exp.role}
                    </p>
                  </div>

                  <CardDescription className="text-sm sm:text-base pt-1">
                    {exp.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-5">
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    {exp.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.techUsed.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </Reveal>

          {/* Education Column */}
          <Reveal
            direction="right"
            delay={200}
            className="lg:col-span-5 space-y-5"
          >
            <div className="flex items-center justify-center lg:justify-start gap-2.5 text-lg font-bold text-foreground">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/15 text-primary border border-primary/25">
                <GraduationCap className="size-4" />
              </div>
              <h3>{t("educationTitle")}</h3>
            </div>

            {education.map((edu) => (
              <Card key={edu.school} className="relative overflow-hidden">
                <div className="h-1 w-full bg-primary" />
                <CardHeader className="space-y-2 pb-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Badge variant="coral" className="font-mono text-xs">
                      <Calendar className="size-3.5" />
                      <span>{edu.period}</span>
                    </Badge>
                    <Badge variant="secondary" className="font-mono text-xs">
                      {edu.gpa}
                    </Badge>
                  </div>

                  <div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {edu.school}
                    </CardTitle>
                    <p className="font-mono text-sm font-semibold text-primary mt-1">
                      {edu.degree}
                    </p>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
