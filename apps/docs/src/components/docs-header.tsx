import Link from "next/link";
import { Button } from "matcha-ui";
import { ThemeToggle } from "./theme-toggle";

export function DocsHeader() {
  return (
    <header className="bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="font-semibold tracking-tight">
          Matcha UI
        </Link>
        <nav className="flex items-center gap-2 text-sm">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/docs">Docs</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/docs/installation">Install</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/docs/icons">Icons</Link>
          </Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
