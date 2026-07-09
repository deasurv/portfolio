"use client"

import { useSyncExternalStore } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

/**
 * Detect client mounting without an effect or cascading render.
 * Server snapshot is `false` (icons hidden until hydrated), client `true`.
 * This avoids the react-hooks/set-state-in-effect lint rule.
 */
function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )
}

/**
 * Light/Dark toggle. Renders a stable placeholder until mounted to avoid any
 * hydration mismatch (theme is resolved client-side via next-themes).
 */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useMounted()
  // Ignore the client-resolved theme until mounted: next-themes resolves the
  // theme from its inline script before hydration, so `resolvedTheme` would
  // otherwise differ from the server (where it's undefined) and cause a
  // hydration mismatch on `aria-label`/`onClick`.
  const isDark = mounted && resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-muted-foreground hover:text-foreground"
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-4" />
        ) : (
          <Moon className="size-4" />
        )
      ) : (
        <span className="size-4" />
      )}
    </Button>
  )
}
