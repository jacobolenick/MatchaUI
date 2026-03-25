import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Matcha UI",
    template: "%s · Matcha UI",
  },
  description:
    "Matcha UI — responsive SaaS components for React, built with Tailwind CSS and Radix UI.",
  openGraph: {
    type: "website",
    siteName: "Matcha UI",
    locale: "en_US",
    images: [
      {
        url: "/og.jpg",
        width: 1024,
        height: 913,
        alt: "Matcha UI — design system for modern SaaS products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen font-sans`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <div className="flex min-h-0 w-full flex-1 flex-col">{children}</div>
            <SiteFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
