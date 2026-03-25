import type { Metadata } from "next";
import { DocsHeader } from "@/components/docs-header";
import { HomeMain } from "@/components/home-main";

const homeDescription =
  "Production-ready React components, OKLCH design tokens, and docs—built with Tailwind CSS v4 and Radix UI.";

export const metadata: Metadata = {
  title: "Matcha UI — SaaS components for React",
  description: homeDescription,
  openGraph: {
    title: "Matcha UI — SaaS components for React",
    description: homeDescription,
    type: "website",
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
    title: "Matcha UI — SaaS components for React",
    description: homeDescription,
    images: ["/og.jpg"],
  },
};

export default function HomePage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <DocsHeader />
      <HomeMain />
    </div>
  );
}
