import Link from "next/link";
import { DocsHeader } from "@/components/docs-header";
import { componentRegistry } from "@/docs/registry";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background flex min-h-0 flex-1 flex-col">
      <DocsHeader />
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-8 sm:flex-row sm:px-6 lg:gap-12">
        <aside className="sm:w-52 lg:w-56 shrink-0">
          <nav className="sticky top-20 space-y-6 text-sm">
            <div>
              <p className="text-muted-foreground mb-2 text-xs font-semibold tracking-wider uppercase">
                Start
              </p>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/docs"
                    className="text-foreground hover:text-primary block rounded-md py-1"
                  >
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/installation"
                    className="text-foreground hover:text-primary block rounded-md py-1"
                  >
                    Installation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/icons"
                    className="text-foreground hover:text-primary block rounded-md py-1"
                  >
                    Phosphor icons
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-muted-foreground mb-2 text-xs font-semibold tracking-wider uppercase">
                Components
              </p>
              <ul className="max-h-[60vh] space-y-1 overflow-y-auto pr-1 sm:max-h-[calc(100vh-8rem)]">
                {componentRegistry.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/docs/components/${c.slug}`}
                      className="text-muted-foreground hover:text-foreground block rounded-md py-1"
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
