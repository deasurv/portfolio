import { work, type WorkItem } from "@/content/content"
import { Reveal } from "@/components/reveal"
import { ArrowUpRight } from "lucide-react"

/** External links open safely in a new tab; in-page anchors stay same-tab. */
function linkProps(href: string) {
  const isExternal = /^https?:\/\//.test(href)
  return isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {}
}

function WorkRow({ item, index }: { item: WorkItem; index: number }) {
  return (
    <Reveal as="li" key={item.title} delay={index * 0.06}>
      <a
        href={item.link.href}
        {...linkProps(item.link.href)}
        className="group flex flex-col gap-4 py-8 transition-colors sm:flex-row sm:items-baseline sm:justify-between"
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-3">
            <span className="text-muted-foreground/70 font-mono text-xs tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-foreground group-hover:text-accent-strong text-2xl font-semibold tracking-tight transition-colors">
              {item.title}
            </h3>
            <ArrowUpRight className="text-muted-foreground group-hover:text-accent-strong size-4 -translate-x-1 transition-all group-hover:translate-x-0 group-hover:-translate-y-0.5" />
          </div>
          <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
            {item.blurb}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {item.stack.map((tech) => (
              <span
                key={tech}
                className="border-border text-muted-foreground rounded-full border px-2.5 py-0.5 font-mono text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="text-muted-foreground shrink-0 font-mono text-sm tabular-nums sm:w-24 sm:text-right">
          {item.year}
        </div>
      </a>
    </Reveal>
  )
}

/**
 * Selected work — index-driven list, hairline-separated rows.
 * Hover grows an accent underline; the chevron nudges toward the link.
 */
export function Work() {
  return (
    <section id="work" className="border-border border-t">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <Reveal as="h2" className="text-eyebrow text-muted-foreground mb-16">
          Selected Work
        </Reveal>

        <ul className="border-border divide-y">
          {work.map((item, i) => (
            <WorkRow key={item.title} item={item} index={i} />
          ))}
        </ul>
      </div>
    </section>
  )
}
