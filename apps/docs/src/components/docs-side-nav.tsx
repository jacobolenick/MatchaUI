import Link from "next/link";
import { componentRegistry } from "@/docs/registry";

/**
 * Documentation site left rail: intro links + component index.
 * Uses overflow without a visible scrollbar (still scrolls with wheel / trackpad).
 */
export function DocsSideNav() {
  return (
    <aside className="sm:w-52 lg:w-56 shrink-0" aria-label="Documentation">
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
                <li>
                  <Link
                    href="/docs/tokens"
                    className="text-foreground hover:text-primary block rounded-md py-1"
                  >
                    Design tokens
                  </Link>
                </li>
              </ul>
        </div>
        <div>
          <p className="text-muted-foreground mb-2 text-xs font-semibold tracking-wider uppercase">
            Components
          </p>
          <ul className="scrollbar-hide max-h-[60vh] space-y-1 overflow-y-auto sm:max-h-[calc(100vh-8rem)]">
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
  );
}
