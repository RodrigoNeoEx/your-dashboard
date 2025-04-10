import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../redux/provider/Providers";
import { ThemeProvider } from "next-themes";
import { ThemeInitScript } from "../utils/theme-script";
import { ThemeToggle } from "@/components/customComponents/themeToggle/ThemeToggle";
import { Suspense } from "react";


export const metadata: Metadata = {
  title: "Vacancy Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeInitScript />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <Suspense fallback={null}>
              <ThemeToggle />
            </Suspense>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
