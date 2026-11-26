"use client";

import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  Loader2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Container, Section } from "@/components/ui/section";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const t = useTranslations("contactSection");
  const [copiedField, setCopiedField] = useState<"email" | "phone" | null>(
    null,
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleCopy = useCallback(
    async (text: string, field: "email" | "phone") => {
      try {
        await navigator.clipboard.writeText(text);
        setCopiedField(field);
        setTimeout(() => setCopiedField(null), 2000);
      } catch {
        // Ignored
      }
    },
    [],
  );

  const handleCopyEmail = useCallback(() => {
    handleCopy("huyenduc0601@gmail.com", "email");
  }, [handleCopy]);

  const handleCopyPhone = useCallback(() => {
    handleCopy("0838941181", "phone");
  }, [handleCopy]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (status === "submitting") return;

      setStatus("submitting");
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });

        if (!res.ok) {
          throw new Error("Request failed");
        }

        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => setStatus("idle"), 5000);
      } catch {
        setStatus("error");
      }
    },
    [name, email, message, status],
  );

  return (
    <>
      <Section
        id="contact"
        className="py-16 sm:py-20 border-t border-border/50"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            {/* Left Column: Coral Line + Contacts / Have a project? Let's talk! / Direct Info */}
            <Reveal
              direction="left"
              delay={100}
              className="lg:col-span-6 space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <span className="h-[2px] w-14 bg-primary shrink-0" />
                <span className="text-sm sm:text-base font-medium text-foreground/90">
                  {t("eyebrow")}
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
                {t("headingLine1")}
                <br />
                {t("headingLine2")}
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
                {t("description")}
              </p>

              {/* Direct Quick Copy Pills for HR */}
              <div className="space-y-3 pt-2 text-sm font-mono flex flex-col items-center lg:items-start">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <Mail className="size-4 text-primary shrink-0" />
                  <span className="text-foreground">
                    huyenduc0601@gmail.com
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 rounded bg-secondary px-2 py-0.5 text-xs text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedField === "email" ? (
                      <>
                        <Check className="size-3" />
                        <span>{t("copiedBtn")}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3" />
                        <span>{t("copyBtn")}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  <Phone className="size-4 text-primary shrink-0" />
                  <span className="text-foreground">0838 941 181</span>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="inline-flex items-center gap-1 rounded bg-secondary px-2 py-0.5 text-xs text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedField === "phone" ? (
                      <>
                        <Check className="size-3" />
                        <span>{t("copiedBtn")}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3" />
                        <span>{t("copyBtn")}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-3 text-muted-foreground">
                  <MapPin className="size-4 text-primary shrink-0" />
                  <span>{t("location")}</span>
                </div>
              </div>
            </Reveal>

            {/* Right Column: Minimalist Bottom-Border Form (Name, Email, Message) + Coral Submit Button */}
            <Reveal
              direction="right"
              delay={200}
              className="lg:col-span-6 w-full max-w-lg mx-auto lg:max-w-none"
            >
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-medium text-muted-foreground mb-2"
                  >
                    {t("formNameLabel")}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("formNamePlaceholder")}
                    className="w-full border-b border-border bg-transparent pb-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-medium text-muted-foreground mb-2"
                  >
                    {t("formEmailLabel")}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("formEmailPlaceholder")}
                    className="w-full border-b border-border bg-transparent pb-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-muted-foreground mb-2"
                  >
                    {t("formMessageLabel")}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t("formMessagePlaceholder")}
                    className="w-full border-b border-border bg-transparent pb-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>

                {status === "success" && (
                  <div className="flex items-center gap-2.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs sm:text-sm text-emerald-400">
                    <CheckCircle2 className="size-4 shrink-0" />
                    <span>{t("successMessage")}</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="flex items-center gap-2.5 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-xs sm:text-sm text-destructive">
                    <AlertCircle className="size-4 shrink-0" />
                    <span>{t("errorMessage")}</span>
                  </div>
                )}

                <div className="pt-2 flex justify-center lg:justify-start">
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    disabled={status === "submitting"}
                    className="transition-transform duration-300 hover:-translate-y-1"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        <span>{t("submittingBtn")}</span>
                      </>
                    ) : (
                      <span>{t("submitBtn")}</span>
                    )}
                  </Button>
                </div>
              </form>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Centered Footer matching the reference image */}
      <footer className="w-full bg-card/80 border-t border-border/60 py-10">
        <Container>
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="text-lg font-bold text-foreground">
              {t("authorName")}
            </div>
            <p className="text-xs text-muted-foreground">{t("footerNote")}</p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="mailto:huyenduc0601@gmail.com"
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-110 hover:bg-primary hover:text-white"
              >
                <Mail className="size-4" />
              </a>
              <a
                href="https://github.com/Huyenduc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-110 hover:bg-primary hover:text-white"
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href="tel:0838941181"
                aria-label="Phone"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-110 hover:bg-primary hover:text-white"
              >
                <Phone className="size-4" />
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
