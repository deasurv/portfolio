import { siteConfig } from "@/content/content"

/**
 * Minimal footer — wordmark, year, and the canonical source link.
 */
export function Footer() {
  return (
    <footer className="border-border border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Vibe coded with GLM
          5.2. Next.js & Tailwind.
        </p>
        <p className="text-muted-foreground font-mono text-xs">
          Crafted for performance.
        </p>
      </div>
    </footer>
  )
}
