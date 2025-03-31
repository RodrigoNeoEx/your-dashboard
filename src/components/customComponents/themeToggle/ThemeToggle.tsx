"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="absolute top-4 right-4 flex z-10 t">
      <Switch
        id="theme-mode"
        checked={isDark}
        onCheckedChange={() => setTheme(isDark ? "light" : "dark")}
        className="w-[3.9rem] h-[2rem] [&>span]:w-[1.9rem] [&>span]:h-[1.9rem] bg-primary"
      />
      <Label htmlFor="theme-mode" className="pl-2">{isDark ? "Modo Claro" : "Modo Escuro"}</Label>
    </div>
  );
}
