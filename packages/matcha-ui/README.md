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
