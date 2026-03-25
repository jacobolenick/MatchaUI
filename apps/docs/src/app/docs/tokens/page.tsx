import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design tokens",
  description:
    "Matcha UI color, type, spacing, and radius tokens (CSS variables + Tailwind v4 theme).",
};

const colorRows = [
  { name: "background", className: "bg-background border" },
  { name: "foreground", className: "bg-foreground" },
  { name: "primary", className: "bg-primary" },
  { name: "primary-foreground", className: "bg-primary-foreground border" },
  { name: "secondary", className: "bg-secondary" },
  { name: "muted", className: "bg-muted" },
  { name: "accent", className: "bg-accent" },
  { name: "destructive", className: "bg-destructive" },
  { name: "border", className: "bg-border" },
  { name: "success", className: "bg-success" },
  { name: "warning", className: "bg-warning" },
  { name: "info", className: "bg-info" },
  { name: "chart-1", className: "bg-chart-1" },
  { name: "chart-2", className: "bg-chart-2" },
  { name: "chart-3", className: "bg-chart-3" },
  { name: "chart-4", className: "bg-chart-4" },
  { name: "chart-5", className: "bg-chart-5" },
] as const;

const radiusSamples = [
  "rounded-xs",
  "rounded-sm",
  "rounded-md",
  "rounded-lg",
  "rounded-xl",
  "rounded-2xl",
  "rounded-3xl",
  "rounded-4xl",
  "rounded-full",
] as const;

const spacingSamples = [
  { name: "tight", widthClass: "w-tight" },
  { name: "snug", widthClass: "w-snug" },
  { name: "comfortable", widthClass: "w-comfortable" },
  { name: "relaxed", widthClass: "w-relaxed" },
  { name: "loose", widthClass: "w-loose" },
  { name: "gutter", widthClass: "w-gutter" },
  { name: "section", widthClass: "w-section" },
  { name: "page", widthClass: "w-page max-w-full" },
] as const;

const typeSamples = [
  "text-caption",
  "text-body-sm",
  "text-body-md",
  "text-body-lg",
  "text-heading-sm",
  "text-heading-md",
  "text-heading-lg",
  "text-heading-xl",
  "text-heading-2xl",
  "text-heading-3xl",
  "text-display-sm",
  "text-display-md",
  "text-display-lg",
] as const;

export default function TokensPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-heading-2xl font-semibold tracking-tight">
          Design tokens
        </h1>
        <p className="text-muted-foreground mt-2 max-w-2xl text-body-md leading-relaxed">
          Tokens live in{" "}
          <code className="text-foreground bg-muted rounded px-1 py-0.5 text-body-sm">
            matcha-ui/styles/matcha.css
          </code>{" "}
          as CSS variables and{" "}
          <code className="text-foreground bg-muted rounded px-1 py-0.5 text-body-sm">
            @theme inline
          </code>{" "}
          mappings. Use Tailwind utilities (
          <code className="text-body-sm">bg-primary</code>,{" "}
          <code className="text-body-sm">text-heading-lg</code>,{" "}
          <code className="text-body-sm">p-section</code>,{" "}
          <code className="text-body-sm">rounded-2xl</code>) or{" "}
          <code className="text-body-sm">var(--primary)</code> /{" "}
          <code className="text-body-sm">cssVar</code> from{" "}
          <code className="text-body-sm">matcha-ui</code>.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-heading-lg font-medium">Color</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {colorRows.map(({ name, className }) => (
            <div
              key={name}
              className="border-border flex items-center gap-3 rounded-lg border p-3"
            >
              <div
                className={`size-10 shrink-0 ${className}`}
                title={name}
              />
              <div className="min-w-0">
                <p className="text-foreground font-mono text-body-sm">{name}</p>
                <p className="text-muted-foreground text-caption">
                  bg-{name.replace(/ /g, "-")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-heading-lg font-medium">Radius</h2>
        <div className="border-border flex flex-wrap gap-4 rounded-xl border p-4">
          {radiusSamples.map((r) => (
            <div key={r} className="flex flex-col items-center gap-2">
              <div
                className={`bg-primary size-14 ${r}`}
                aria-hidden
              />
              <span className="text-muted-foreground font-mono text-caption">
                {r}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-heading-lg font-medium">Spacing</h2>
        <p className="text-muted-foreground text-body-sm">
          Semantic spacing: <code className="text-foreground">p-*</code>,{" "}
          <code className="text-foreground">m-*</code>,{" "}
          <code className="text-foreground">gap-*</code> with token names.
        </p>
        <div className="border-border space-y-3 rounded-xl border p-4">
          {spacingSamples.map(({ name, widthClass }) => (
            <div key={name} className="flex items-center gap-4">
              <span className="text-muted-foreground w-28 shrink-0 font-mono text-body-sm">
                {name}
              </span>
              <div className="bg-muted min-w-0 max-w-full flex-1 overflow-hidden rounded-sm">
                <div
                  className={`bg-primary h-3 rounded-sm ${widthClass}`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-heading-lg font-medium">Type scale</h2>
        <div className="border-border divide-y rounded-xl border">
          {typeSamples.map((t) => (
            <div key={t} className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:justify-between">
              <span className={`text-foreground font-medium ${t}`}>
                The quick brown fox
              </span>
              <code className="text-muted-foreground shrink-0 font-mono text-caption">
                {t}
              </code>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-body-sm">
          Also: <code className="text-foreground">tracking-tight</code> …{" "}
          <code className="text-foreground">tracking-widest</code>,{" "}
          <code className="text-foreground">font-medium</code>,{" "}
          <code className="text-foreground">font-semibold</code>.
        </p>
      </section>
    </div>
  );
}
