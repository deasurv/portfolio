"use client"

import { useEffect, useState } from "react"
import { nav } from "@/content/content"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

/**
 * Sticky, hairline-bordered nav. Becomes more opaque after scrolling -
 * a subtle, performance-friendly effect (no backdrop blur, paint-only).
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b transition-colors",
        scrolled ? "border-border" : "border-transparent",
      )}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="text-foreground text-sm font-semibold tracking-tight"
        >
          MF
          <span className="text-accent-weak">.</span>
        </a>
        <div className="flex items-center gap-1">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
