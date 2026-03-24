"use client";

import Link from "next/link";
import {
  Bell,
  ChartLine,
  GearSix,
  House,
  MagnifyingGlass,
  UserCircle,
} from "phosphor-react";
import { Button } from "matcha-ui";

const installSnippet = `npm install phosphor-react`;

const usageSnippet = `import { House, MagnifyingGlass } from "phosphor-react";
import { Button } from "matcha-ui";

export function Example() {
  return (
    <Button variant="outline" className="gap-2">
      <House size={18} weight="bold" />
      Dashboard
    </Button>
  );
}`;

const showcase = [
  { Icon: House, label: "House" },
  { Icon: MagnifyingGlass, label: "Search" },
  { Icon: Bell, label: "Bell" },
  { Icon: UserCircle, label: "User" },
  { Icon: GearSix, label: "Settings" },
  { Icon: ChartLine, label: "Analytics" },
] as const;

export function IconsPageClient() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Phosphor icons</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl text-base leading-relaxed">
          Matcha UI chart components use{" "}
          <a
            href="https://phosphoricons.com/"
            className="text-primary font-medium underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Phosphor
          </a>{" "}
          for header icons. For the rest of your app, install{" "}
          <code className="text-foreground">phosphor-react</code> and import icons
          as React components. This documentation site uses Phosphor for UI
          affordances.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Install</h2>
        <pre className="bg-muted overflow-x-auto rounded-lg border p-4 text-sm">
          <code>{installSnippet}</code>
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Usage with Matcha UI</h2>
        <pre className="bg-muted overflow-x-auto rounded-lg border p-4 text-sm">
          <code>{usageSnippet}</code>
        </pre>
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" className="gap-2" asChild>
            <Link href="/docs">
              <House size={18} weight="bold" />
              Back to docs
            </Link>
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Common icons</h2>
        <p className="text-muted-foreground text-sm">
          Use the <code className="text-foreground">size</code> and{" "}
          <code className="text-foreground">weight</code> props (for example{" "}
          <code className="text-foreground">&quot;bold&quot;</code> or{" "}
          <code className="text-foreground">&quot;duotone&quot;</code>) to match your
          product chrome.
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {showcase.map(({ Icon, label }) => (
            <div
              key={label}
              className="bg-card flex flex-col items-center gap-2 rounded-xl border p-4 text-center"
            >
              <Icon size={28} weight="duotone" className="text-primary" />
              <span className="text-muted-foreground text-xs">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
