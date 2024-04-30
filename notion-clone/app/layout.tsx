import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { ConvexClient } from "convex/browser";
import { ConvexClientProvider } from "@/components/provider/convex-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Motion",
  description: "The coolest Notion clone",
  icons: {
    icon: [
      {
        media:"(prefers-color-scheme: light)",
        url: "/MotionLogo.png",
        href: "/MotionLogo.png",
      },
      {
        media:"(prefers-color-scheme: dark)",
        url: "/MotionDark.png",
        href: "/MotionDark.png",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="motion-theme"
        >
          {children}
        </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
