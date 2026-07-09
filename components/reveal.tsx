"use client"

import { motion, useReducedMotion, type Variants } from "motion/react"
import type { ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  /** Stagger index - pass i to delay siblings. */
  delay?: number
  className?: string
  as?: "div" | "section" | "li" | "span" | "p" | "h2" | "h3"
}

/**
 * Scroll-triggered reveal. Fades + lifts into place when in view.
 * Fully disabled under prefers-reduced-motion (renders a plain node).
 * `once: true` keeps it cheap - no re-animating on scroll-back.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.6,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo - calm, editorial
        delay,
      },
    },
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    >
      {children}
    </MotionTag>
  )
}
