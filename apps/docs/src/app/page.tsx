import type { Metadata } from "next";
import { DocsHeader } from "@/components/docs-header";
import { HomeMain } from "@/components/home-main";

export const metadata: Metadata = {
  title: "Matcha UI — SaaS components for React",
  description:
    "Production-ready React components, OKLCH design tokens, and docs—built with Tailwind CSS v4 and Radix UI.",
};

export default function HomePage() {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <DocsHeader />
      <HomeMain />
    </div>
  );
}
