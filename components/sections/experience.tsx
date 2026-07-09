import { experience, type ExperienceItem } from "@/content/content"
import { Reveal } from "@/components/reveal"
import { ArrowUpRight } from "lucide-react"

function RoleCard({ job, index }: { job: ExperienceItem; index: number }) {
  return (
    <Reveal
      delay={index * 0.06}
      className="grid gap-4 py-10 md:grid-cols-[minmax(0,1fr)_2fr] md:gap-12"
    >
      <div className="flex flex-col gap-1">
        <span className="text-muted-foreground font-mono text-xs tabular-nums">
          {job.period}
        </span>
        <h3 className="text-foreground text-xl font-semibold tracking-tight">
          {job.role}
        </h3>
        <p className="text-muted-foreground text-sm">
          {job.companyHref ? (
            <a
              href={job.companyHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:text-foreground inline-flex items-center gap-1 transition-colors"
            >
              {job.company}
              <ArrowUpRight className="text-muted-foreground/70 group-hover:text-foreground size-3.5" />
            </a>
          ) : (
            job.company
          )}{" "}
          · {job.location}
        </p>
      </div>
      <ul className="flex flex-col gap-3">
        {job.impact.map((line, j) => (
          <li
            key={j}
            className="text-foreground/90 flex gap-3 text-base leading-relaxed"
          >
            <span className="text-accent-weak mt-2 size-1.5 shrink-0 rounded-full bg-current" />
            {line}
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

/**
 * Experience timeline - condensed roles with impact bullets.
 * Reads like an editorial CV: company · role · period · location, then proof.
 */
export function Experience() {
  return (
    <section id="experience" className="border-border border-t">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <Reveal as="h2" className="text-eyebrow text-muted-foreground mb-16">
          Experience
        </Reveal>

        <div className="border-border divide-y">
          {experience.map((job, i) => (
            <RoleCard key={job.company + job.period} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
