import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation",
};

const installSnippet = `npm install matcha-ui`;

const globalsSnippet = `@import "tailwindcss";
@plugin "tailwindcss-animate";
@source "./node_modules/matcha-ui/src/**/*.tsx";
@import "matcha-ui/styles";`;

const nextConfigSnippet = `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["matcha-ui"],
};

export default nextConfig;`;

const usageSnippet = `import { Button } from "matcha-ui";

export function Example() {
  return <Button>Hello Matcha</Button>;
}`;

export default function InstallationPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Installation</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl text-base leading-relaxed">
          Matcha UI ships as the <code className="text-foreground">matcha-ui</code>{" "}
          npm package. Your bundler compiles the TypeScript sources; Next.js apps
          should list the package in{" "}
          <code className="text-foreground">transpilePackages</code>.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">1. Install</h2>
        <pre className="bg-muted overflow-x-auto rounded-lg border p-4 text-sm">
          <code>{installSnippet}</code>
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">2. Tailwind CSS v4</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          In your global stylesheet (for example{" "}
          <code className="text-foreground">app/globals.css</code>), import
          Tailwind, the animation plugin, scan the package for class names, and
          apply Matcha theme tokens.
        </p>
        <pre className="bg-muted overflow-x-auto rounded-lg border p-4 text-sm">
          <code>{globalsSnippet}</code>
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">3. Next.js (optional)</h2>
        <pre className="bg-muted overflow-x-auto rounded-lg border p-4 text-sm">
          <code>{nextConfigSnippet}</code>
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">4. Use components</h2>
        <pre className="bg-muted overflow-x-auto rounded-lg border p-4 text-sm">
          <code>{usageSnippet}</code>
        </pre>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Icons (optional)</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          For Phosphor icons in your app (recommended for parity with Matcha chart
          cards), install{" "}
          <code className="text-foreground">phosphor-react</code>. See{" "}
          <a
            href="/docs/icons"
            className="text-primary font-medium underline-offset-4 hover:underline"
          >
            Phosphor icons
          </a>{" "}
          in the docs.
        </p>
        <pre className="bg-muted overflow-x-auto rounded-lg border p-4 text-sm">
          <code>{`npm install phosphor-react`}</code>
        </pre>
      </section>

      <p className="text-muted-foreground text-sm leading-relaxed">
        Peer dependencies: <code className="text-foreground">react</code> and{" "}
        <code className="text-foreground">react-dom</code> (18+ or 19+). Radix,
        CVA, and Tailwind merge are bundled with the package.
      </p>
    </div>
  );
}
