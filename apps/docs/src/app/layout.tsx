import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { SiteFooter } from "@/components/site-footer";
import { absoluteUrl, getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = getSiteUrl();
const ogImageUrl = absoluteUrl("/og.jpg");

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
    url: siteUrl,
    images: [
      {
        url: ogImageUrl,
        width: 1024,
        height: 913,
        alt: "Matcha UI — design system for modern SaaS products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImageUrl],
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "160x160" }],
    apple: [{ url: "/icon.png", type: "image/png", sizes: "160x160" }],
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
