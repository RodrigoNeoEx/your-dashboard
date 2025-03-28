"use client";

import { useTheme } from "next-themes";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

type ResponsiveContextType = {
  theme: string | undefined;
  breakpoint: Breakpoint;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const ResponsiveContext = createContext<ResponsiveContextType | null>(null);

const getBreakpoint = (width: number): Breakpoint => {
  if (width >= 1280) return "xl";
  if (width >= 1024) return "lg";
  if (width >= 768) return "md";
  if (width >= 640) return "sm";
  return "xs";
};

export function ResponsiveContextProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint(window.innerWidth));

  useEffect(() => {
    const handleResize = () => setBreakpoint(getBreakpoint(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const value = useMemo<ResponsiveContextType>(() => ({
    theme: resolvedTheme,
    breakpoint,
    isMobile: ["xs", "sm"].includes(breakpoint),
    isTablet: breakpoint === "md",
    isDesktop: ["lg", "xl"].includes(breakpoint),
  }), [resolvedTheme, breakpoint]);

  return (
    <ResponsiveContext.Provider value={value}>
      {children}
    </ResponsiveContext.Provider>
  );
}

export function useResponsiveContext() {
  const context = useContext(ResponsiveContext);
  if (!context) {
    throw new Error("useResponsiveContext must be used within ResponsiveContextProvider");
  }
  return context;
}
