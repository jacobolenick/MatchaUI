/**
 * Canonical site origin for metadata (Open Graph, Twitter, canonical URLs).
 * Set NEXT_PUBLIC_SITE_URL in production to the exact URL you share (https://your-domain.com).
 * On Vercel, VERCEL_URL is used when unset.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) {
    return (production.startsWith("http") ? production : `https://${production}`).replace(
      /\/$/,
      "",
    );
  }

  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    return `https://${vercel.replace(/^https?:\/\//, "")}`.replace(/\/$/, "");
  }

  return "http://localhost:3000";
}

export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
