import type { Metadata } from "next";
import Link from "next/link";
import { componentRegistry } from "@/docs/registry";

export const metadata: Metadata = {
  title: "Components",
};

export default function ComponentsIndexPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Components</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl text-base leading-relaxed">
          Each page includes a responsive preview and a snippet you can paste
          into your codebase.
        </p>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {componentRegistry.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/docs/components/${c.slug}`}
              className="hover:border-primary/40 block rounded-xl border p-4 transition-colors"
            >
              <span className="font-medium">{c.title}</span>
              <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                {c.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
