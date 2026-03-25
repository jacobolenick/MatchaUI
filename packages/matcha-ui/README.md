# Matcha UI

Responsive SaaS components for React, built with **Tailwind CSS v4** and **Radix UI** (shadcn-style patterns).

## Install

```bash
npm install matcha-ui
```

## Tailwind

In your global CSS:

```css
@import "tailwindcss";
@plugin "tailwindcss-animate";
@source "./node_modules/matcha-ui/src/**/*.tsx";
@import "matcha-ui/styles";
```

## Next.js

```ts
// next.config.ts
const nextConfig = { transpilePackages: ["matcha-ui"] };
export default nextConfig;
```

## Design tokens

Matcha ships CSS variables and Tailwind v4 theme extensions in `matcha-ui/styles`:

- **Colors (OKLCH):** `background`, `foreground`, `primary`, `muted`, `destructive`, `chart-1` … `chart-5`, plus `success`, `warning`, `info` with `-foreground` and `-muted` variants.
- **Radius:** `rounded-xs` … `rounded-4xl`, `rounded-full` (base `--radius` is `0.625rem`).
- **Spacing:** semantic spacing utilities `p-tight`, `gap-section`, `m-page`, etc. (`tight`, `snug`, `comfortable`, `relaxed`, `loose`, `gutter`, `section`, `page`).
- **Type scale:** `text-caption`, `text-body-sm`, `text-body-md`, `text-body-lg`, `text-heading-lg`, `text-display-md`, … with line heights; `tracking-tight` … `tracking-widest`.

Override **`--font-sans-stack`** / **`--font-mono-stack`** on `:root` or `body` to plug in your font.

```tsx
import { cssVar } from "matcha-ui";

// Inline styles or charts
style={{ color: cssVar.color.foreground }}
```

## Usage

```tsx
import { Button } from "matcha-ui";

export function Example() {
  return <Button>Hello</Button>;
}
```

Peer dependencies: `react` and `react-dom` (18+ or 19+).

## License

MIT
