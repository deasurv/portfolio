import { contact, siteConfig } from "@/content/content"
import { Reveal } from "@/components/reveal"
import { MagneticButton } from "@/components/magnetic-button"
import { ArrowUpRight } from "lucide-react"

/**
 * Contact CTA — one big sentence, one magnetic email button, two profile links.
 * The closer. Keep it confident and short.
 */
export function Contact() {
  return (
    <section id="contact" className="border-border border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 px-6 py-32">
        <Reveal as="h2" className="text-eyebrow text-muted-foreground">
          Contact
        </Reveal>

        <Reveal as="p" className="text-display text-foreground max-w-4xl">
          Let&apos;s build something fast.
        </Reveal>

        <Reveal>
          <MagneticButton
            href={`mailto:${contact.email}`}
            className="bg-foreground text-background hover:bg-foreground/85 inline-flex items-center gap-2 rounded-lg px-6 py-4 text-base font-medium transition-colors"
          >
            {contact.email}
            <ArrowUpRight className="size-4" />
          </MagneticButton>
        </Reveal>

        <Reveal className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {contact.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground group inline-flex items-center gap-1 text-sm transition-colors"
            >
              {link.label}
              <ArrowUpRight className="text-muted-foreground/70 group-hover:text-foreground size-3.5" />
            </a>
          ))}
        </Reveal>

        <Reveal as="p" className="text-muted-foreground text-sm">
          {siteConfig.location}
        </Reveal>
      </div>
    </section>
  )
}
