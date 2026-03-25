"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChartBar,
  Code,
  Cube,
  Lightning,
  Palette,
  Sparkle,
  SquaresFour,
  Stack,
  Terminal,
  Users,
} from "phosphor-react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Separator,
} from "matcha-ui";

const colorShowcase = [
  { label: "Primary", className: "bg-primary" },
  { label: "Secondary", className: "bg-secondary" },
  { label: "Accent", className: "bg-accent" },
  { label: "Muted", className: "bg-muted" },
  { label: "Success", className: "bg-success" },
  { label: "Warning", className: "bg-warning" },
  { label: "Info", className: "bg-info" },
  { label: "Destructive", className: "bg-destructive" },
] as const;

const iconShowcase = [
  { Icon: SquaresFour, label: "Layout" },
  { Icon: ChartBar, label: "Analytics" },
  { Icon: Users, label: "Teams" },
  { Icon: Cube, label: "Components" },
  { Icon: Palette, label: "Tokens" },
  { Icon: Terminal, label: "DX" },
] as const;

const features = [
  {
    icon: Stack,
    title: "Composable primitives",
    description:
      "Radix-powered accessibility with Tailwind v4 tokens—copy the source, own the styling.",
  },
  {
    icon: Lightning,
    title: "Shipped for SaaS",
    description:
      "Sidebars, data tables, charts, and onboarding patterns out of the box.",
  },
  {
    icon: Sparkle,
    title: "Themeable OKLCH",
    description:
      "Semantic colors, spacing, radius, and type scale in one import.",
  },
] as const;

export function HomeMain() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="border-border relative overflow-hidden border-b">
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.55_0.12_150/0.25),transparent)]"
          aria-hidden
        />
        <div className="from-primary/5 pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b via-transparent to-transparent" />
        <div className="mx-auto max-w-6xl px-4 pt-14 pb-20 sm:px-6 sm:pt-20 sm:pb-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/50 px-3 py-1 text-caption backdrop-blur-sm">
            <Sparkle className="text-primary size-3.5" weight="fill" />
            <span className="text-muted-foreground font-medium">
              React · Tailwind v4 · Radix UI
            </span>
          </div>
          <h1 className="text-foreground max-w-3xl text-display-sm font-semibold tracking-tight sm:text-display-md">
            The design system for{" "}
            <span className="text-primary">modern SaaS</span> products
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-body-lg leading-relaxed">
            Matcha UI gives you accessible, responsive building blocks—live docs,
            copy-paste snippets, and OKLCH tokens so your product stays cohesive
            from marketing site to app shell.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" asChild>
              <Link href="/docs" className="gap-2">
                Explore components
                <ArrowRight size={18} weight="bold" className="shrink-0" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/docs/tokens">Design tokens</Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <Link href="/docs/installation">Installation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature grid */}
      <section className="border-border border-b py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-heading-2xl font-semibold tracking-tight">
              Everything you need to move fast
            </h2>
            <p className="text-muted-foreground mt-3 text-body-md">
              Opinionated defaults with room to customize—no black-box runtime.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <Card
                key={title}
                className="border-border/80 bg-card/50 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="bg-primary/10 text-primary mb-2 flex size-10 items-center justify-center rounded-lg">
                    <Icon className="size-5" weight="duotone" />
                  </div>
                  <CardTitle className="text-heading-md">{title}</CardTitle>
                  <CardDescription className="text-body-sm leading-relaxed">
                    {description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Component demo */}
      <section className="border-border border-b py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-heading-2xl font-semibold tracking-tight">
                Components that feel finished
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl text-body-md">
                Buttons, cards, inputs, badges, and more—wired to your theme
                tokens.
              </p>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/docs/components/button">View all</Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Card className="overflow-hidden">
              <CardHeader className="border-border border-b pb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Alert</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">Primary</Button>
                  <Button size="sm" variant="secondary">
                    Secondary
                  </Button>
                  <Button size="sm" variant="outline">
                    Outline
                  </Button>
                  <Button size="sm" variant="ghost">
                    Ghost
                  </Button>
                </div>
                <Separator />
                <div className="space-y-2">
                  <label
                    htmlFor="demo-search"
                    className="text-foreground text-body-sm font-medium"
                  >
                    Search
                  </label>
                  <Input
                    id="demo-search"
                    placeholder="Search projects…"
                    className="max-w-md"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/30 overflow-hidden">
              <CardHeader>
                <CardTitle className="text-heading-md">Dashboard preview</CardTitle>
                <CardDescription>
                  KPI cards and charts use the same tokens as your marketing
                  pages.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="bg-background rounded-lg border p-3 shadow-sm">
                    <p className="text-muted-foreground text-caption">MRR</p>
                    <p className="text-heading-2xl font-semibold tabular-nums">
                      $48k
                    </p>
                    <p className="text-success mt-1 text-caption">+12%</p>
                  </div>
                  <div className="bg-background rounded-lg border p-3 shadow-sm">
                    <p className="text-muted-foreground text-caption">Users</p>
                    <p className="text-heading-2xl font-semibold tabular-nums">
                      1.2k
                    </p>
                  </div>
                  <div className="bg-background col-span-2 rounded-lg border p-3 shadow-sm sm:col-span-1">
                    <p className="text-muted-foreground text-caption">Churn</p>
                    <p className="text-heading-2xl font-semibold tabular-nums">
                      2.1%
                    </p>
                  </div>
                </div>
                <div className="bg-primary/15 flex h-24 items-end justify-between gap-1 rounded-lg px-2 pb-2 pt-4">
                  {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <div
                      key={i}
                      className="bg-primary w-full max-w-[14%] rounded-sm"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="border-border border-b py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-heading-2xl font-semibold tracking-tight">
                OKLCH color tokens
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl text-body-md">
                Semantic palettes for light and dark—success, warning, and info
                included.
              </p>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/docs/tokens">Full token reference</Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {colorShowcase.map(({ label, className }) => (
              <div
                key={label}
                className="group border-border bg-card overflow-hidden rounded-xl border shadow-sm"
              >
                <div className={`aspect-square ${className}`} />
                <p className="text-muted-foreground p-2 text-center text-caption">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Icons */}
      <section className="border-border border-b py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-heading-2xl font-semibold tracking-tight">
              Icons that scale with your stack
            </h2>
            <p className="text-muted-foreground mt-3 text-body-md">
              Docs use{" "}
              <span className="text-foreground font-medium">Phosphor</span> —
              components pair with{" "}
              <span className="text-foreground font-medium">Lucide</span>{" "}
              wherever you need crisp strokes.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {iconShowcase.map(({ Icon, label }) => (
              <div
                key={label}
                className="border-border bg-muted/40 hover:bg-muted/60 flex flex-col items-center gap-2 rounded-2xl border px-6 py-5 transition-colors"
              >
                <Icon className="text-primary size-8" weight="duotone" />
                <span className="text-muted-foreground text-caption">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline" asChild>
              <Link href="/docs/icons">Browse Phosphor in the docs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Install snippet */}
      <section className="border-border border-b py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-primary mb-3 flex items-center gap-2 text-sm font-medium">
                <Code className="size-4" weight="bold" />
                Install in minutes
              </div>
              <h2 className="text-heading-2xl font-semibold tracking-tight">
                Drop into Next.js or Vite
              </h2>
              <p className="text-muted-foreground mt-3 text-body-md leading-relaxed">
                Add the package, import Matcha styles once, and start using
                components. Transpile the package in Next.js for the best DX.
              </p>
              <ul className="text-muted-foreground mt-6 space-y-2 text-body-sm">
                <li className="flex gap-2">
                  <span className="text-primary">✓</span> Tailwind v4 +{" "}
                  <code className="text-foreground bg-muted rounded px-1">
                    @theme
                  </code>{" "}
                  tokens
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span> shadcn-style copy
                  &amp; paste
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">✓</span> React 18 / 19
                </li>
              </ul>
            </div>
            <div className="border-border bg-muted/20 rounded-2xl border p-1 shadow-inner">
              <pre className="bg-background overflow-x-auto rounded-xl border p-4 text-left text-body-sm leading-relaxed">
                <code className="font-mono text-muted-foreground">
                  {`npm install matcha-ui

// app/globals.css
@import "tailwindcss";
@import "matcha-ui/styles";`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="border-border from-primary/10 via-primary/5 to-background relative overflow-hidden rounded-3xl border bg-gradient-to-br p-10 sm:p-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.55_0.12_150/0.25),transparent_60%)]" />
            <div className="relative text-center">
              <h2 className="text-heading-2xl font-semibold tracking-tight sm:text-heading-3xl">
                Ready to build?
              </h2>
              <p className="text-muted-foreground mx-auto mt-3 max-w-lg text-body-md">
                Start with the docs, copy a component, and ship your next
                feature today.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/docs" className="gap-2">
                    Open documentation
                    <ArrowRight size={18} weight="bold" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/docs/installation">Setup guide</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
