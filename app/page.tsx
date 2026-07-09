import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/sections/hero"
import { Work } from "@/components/sections/work"
import { Experience } from "@/components/sections/experience"
import { Contact } from "@/components/sections/contact"

/**
 * Home — a single, scroll-told page. Server Component composing client islands.
 * Order is intentional: hook (hero) → proof (work) → credibility (experience) → action (contact).
 */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
