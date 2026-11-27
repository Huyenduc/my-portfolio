"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const handleToggle = useCallback(() => {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    trackEvent("theme_switch", { theme: nextTheme });
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="relative h-9 w-9 rounded-md"
    >
      <Sun className="hidden dark:block size-4 text-amber-400 transition-transform duration-200 hover:rotate-45" />
      <Moon className="block dark:hidden size-4 text-primary transition-transform duration-200 hover:-rotate-12" />
    </Button>
  );
}
