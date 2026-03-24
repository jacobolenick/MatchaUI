"use client";

import Link from "next/link";
import { ArrowRight } from "phosphor-react";
import { Button } from "matcha-ui";

export function HomeMain() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-8 px-4 py-16 sm:px-6">
      <p className="text-primary text-sm font-medium tracking-wide uppercase">
        Design system
      </p>
      <h1 className="text-foreground text-4xl font-semibold tracking-tight sm:text-5xl">
        Matcha UI
      </h1>
      <p className="text-muted-foreground max-w-xl text-lg leading-relaxed">
        Production-ready, responsive components for SaaS products—styled with
        Tailwind CSS and built on Radix primitives (shadcn-style). Browse live
        examples, copy usage snippets, and install from npm.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button size="lg" asChild>
          <Link href="/docs" className="gap-2">
            Browse components
            <ArrowRight size={18} weight="bold" className="shrink-0" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/docs/installation">Install with npm</Link>
        </Button>
      </div>
    </main>
  );
}
