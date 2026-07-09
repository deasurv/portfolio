"use client"

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react"
import { useRef, type ReactNode } from "react"

type MagneticButtonProps = {
  children: ReactNode
  href: string
  className?: string
  /** How strongly the button follows the cursor (px). */
  strength?: number
}

/**
 * CTA that gently pulls toward the cursor. Subtle by design — editorial, not game-y.
 * Uses spring physics for a natural return. Disabled under prefers-reduced-motion.
 */
export function MagneticButton({
  children,
  href,
  className,
  strength = 0.3,
}: MagneticButtonProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 250, damping: 20, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 250, damping: 20, mass: 0.4 })

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set(relX * strength)
    y.set(relY * strength)
  }

  function onLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={reduce ? undefined : { x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.a>
  )
}
