import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "matcha-ui";
import { componentRegistry } from "@/docs/registry";

export const metadata: Metadata = {
  title: "Documentation",
};

export default function DocsIntroductionPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Introduction</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl text-base leading-relaxed">
          Matcha UI gives you accessible, responsive building blocks for SaaS
          dashboards, marketing sites, and onboarding flows. Components follow
          patterns popularized by shadcn/ui: copy-friendly source, Tailwind
          tokens, and Radix UI primitives—not a black-box runtime.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border p-5">
          <h2 className="font-medium">Responsive by default</h2>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            Layout utilities and component variants adapt from mobile to desktop
            without extra wrappers.
          </p>
        </div>
        <div className="rounded-xl border p-5">
          <h2 className="font-medium">Install from npm</h2>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            Add the package to your app, wire Tailwind v4, and import components
            from <code className="text-foreground">matcha-ui</code>.
          </p>
          <Button className="mt-4" variant="outline" size="sm" asChild>
            <Link href="/docs/installation">Setup guide</Link>
          </Button>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold">Components</h2>
        <p className="text-muted-foreground mt-1 text-sm">
          {componentRegistry.length} components documented with live previews and
          copyable examples.
        </p>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {componentRegistry.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/docs/components/${c.slug}`}
                className="text-primary hover:underline text-sm font-medium"
              >
                {c.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
