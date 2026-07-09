"use client"

import { motion, useReducedMotion } from "motion/react"
import { ArrowDownRight } from "lucide-react"
import { siteConfig, about } from "@/content/content"
import { MagneticButton } from "@/components/magnetic-button"

/**
 * Hero - the first 3 seconds. Huge wordmark, tight eyebrow, one-line value
 * prop, and a single magnetic CTA. Staggered fade-up on mount.
 */
export function Hero() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
  }
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  return (
    <section
      id="top"
      className="mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-6 py-32"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6"
      >
        <motion.p
          variants={item}
          className="text-eyebrow text-muted-foreground"
        >
          {siteConfig.role} - {siteConfig.location}
        </motion.p>

        <motion.h1 variants={item} className="text-display text-foreground">
          {siteConfig.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="text-muted-foreground max-w-2xl text-lg leading-relaxed"
        >
          {about.body}
        </motion.p>

        <motion.div variants={item} className="mt-4 flex items-center gap-4">
          <MagneticButton
            href="#contact"
            className="bg-foreground text-background hover:bg-foreground/85 inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors"
          >
            Get in touch
            <ArrowDownRight className="size-4" />
          </MagneticButton>
          <a
            href="#work"
            className="text-muted-foreground hover:text-foreground text-sm underline-offset-4 transition-colors hover:underline"
          >
            View selected work
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
