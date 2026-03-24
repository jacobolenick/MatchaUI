import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "matcha-ui";
import { CopyButton } from "@/components/copy-button";
import { ComponentPreview } from "@/docs/component-preview";
import {
  componentRegistry,
  getComponentBySlug,
} from "@/docs/registry";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return componentRegistry.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getComponentBySlug(slug);
  if (!entry) return { title: "Not found" };
  return { title: entry.title, description: entry.description };
}

export default async function ComponentDocPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getComponentBySlug(slug);
  if (!entry) notFound();

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Button variant="ghost" size="sm" className="-ml-2 mb-2" asChild>
            <Link href="/docs/components">← All components</Link>
          </Button>
          <h1 className="text-3xl font-semibold tracking-tight">{entry.title}</h1>
          <p className="text-muted-foreground mt-2 max-w-2xl text-base leading-relaxed">
            {entry.description}
          </p>
        </div>
        <CopyButton text={entry.code} />
      </div>

      <div className="rounded-xl border bg-card/30 p-6 sm:p-8">
        <ComponentPreview slug={slug} />
      </div>

      <div className="space-y-2">
        <h2 className="text-sm font-semibold tracking-wide uppercase">
          Example
        </h2>
        <pre className="bg-muted overflow-x-auto rounded-lg border p-4 text-sm">
          <code>{entry.code}</code>
        </pre>
      </div>
    </div>
  );
}
