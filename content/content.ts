/**
 * Content layer - the single source of truth for all copy on the site.
 * Edit this file to update the portfolio. Everything else is structural.
 *
 * Sourced from resume-majid-fatahi-v3.html.
 */

export const siteConfig = {
  name: "Majid Fatahi",
  role: "Senior Frontend Developer",
  // One-line value proposition - keep it punchy, recruiter-scannable.
  tagline:
    "Senior Frontend Developer with 7+ years building high-performance, type-safe web apps in React, Next.js & TypeScript - now running across 15,000+ online stores.",
  // Where the site is deployed. Used for canonical URL, sitemap, OG.
  url: "https://majid-fatahi.vercel.app",
  ogImageAlt: "Majid Fatahi - Senior Frontend Developer",
  location: "Tehran, Iran",
  phone: "+98 903 195 8700",
  // Single accent color - Swiss editorial restraint. Drives focus rings, links, hover states.
  // oklch keeps it perceptually uniform across light/dark. Aligned with resume accent #2563a6.
  accent: "0.49 0.13 240", // calm steel-blue (L C H)
} as const

export const about = {
  // Condensed from resume summary - leads with specialty, ends with reach.
  body: "7+ years building high-performance, type-safe web apps in React, Next.js, and TypeScript - now running across 15,000+ online stores. I specialize in scalable component architecture, Core Web Vitals optimization, and clean, well-tested code, with a sharp eye for detail and UX.",
} as const

export type WorkItem = {
  title: string
  year: string
  stack: readonly string[]
  blurb: string
  link: { href: string; label: string }
}

/**
 * Selected highlights - distilled from roles into outcome-led case studies.
 * Each leads with a measurable result (the performance specialist's proof).
 */
export const work: readonly WorkItem[] = [
  {
    title: "Partnerz - Shopify SaaS",
    year: "2024",
    stack: ["React", "TypeScript", "Zustand", "GraphQL", "Vite", "Vitest"],
    blurb:
      "Led the front-end of a Shopify marketing SaaS scaled to $100K+ MRR and 15,000+ active installs across 15,000+ online stores.",
    link: {
      href: "https://partnerz.io",
      label: "partnerz.io",
    },
  },
  {
    title: "Core Web Vitals Win",
    year: "2024",
    stack: ["Lighthouse", "Chrome DevTools", "Vite", "Code-splitting"],
    blurb:
      "Cut CLS from 1.1 → 0.3 and LCP from 3s → 1.9s; migrated CRA to Vite and shrank the initial bundle ~200KB (~10%).",
    link: { href: "#experience", label: "See role" },
  },
  {
    title: "Kamva - Real-time PWA",
    year: "2023",
    stack: ["Next.js", "React Query", "Leaflet", "PWA", "Material UI"],
    blurb:
      "Built a Next.js PWA with live geolocation tracking and real-time chat on interactive Leaflet maps, used by 5,000+ users.",
    link: { href: "https://kamva.ir", label: "kamva.ir" },
  },
  {
    title: "Incorp - Lighthouse 35 → 80",
    year: "2022",
    stack: ["Vue", "Nuxt 2", "Tailwind CSS", "SSR", "Lighthouse"],
    blurb:
      "Raised an exhibition-directory storefront's Lighthouse score from 35 to 80 via lazy hydration, code-splitting & asset preloading.",
    link: { href: "#experience", label: "See role" },
  },
] as const

export type ExperienceItem = {
  company: string
  companyHref?: string
  role: string
  period: string
  location: string
  impact: readonly string[]
}

export const experience: readonly ExperienceItem[] = [
  {
    company: "Partnerz",
    companyHref: "https://partnerz.io",
    role: "React Developer / Front-end Team Lead",
    period: "Dec 2023 - Present",
    location: "Dubai, UAE (Remote)",
    impact: [
      "Led front-end of a SaaS Shopify app for e-commerce campaigns & storefront widgets, scaled to $100K+ MRR and 15,000+ active installs.",
      "Architected decoupled feature modules with a Zustand store-per-feature pattern, enabling 4 engineers to ship in parallel with minimal conflicts.",
      "Optimized Core Web Vitals: CLS 1.1 → 0.3, LCP 3s → 1.9s; migrated CRA → Vite and cut initial bundle ~200KB (~10%).",
      "Built the team's testing practice from zero to 1,000+ unit & integration tests with Vitest and React Testing Library.",
      "Set up Dockerized GitLab CI/CD gating every MR (lint, type-check, test, build).",
      "Created an agentic Claude Code workflow to scaffold, test, review & open PRs - shipping features up to 3× faster.",
    ],
  },
  {
    company: "Kamva",
    companyHref: "https://kamva.ir",
    role: "React Developer / Front-end Team Lead",
    period: "Mar 2023 - Dec 2023",
    location: "Tehran, Iran (Remote)",
    impact: [
      "Mentored 5 front-end developers across two products, owning architecture, conventions, hiring & onboarding.",
      "Built a Next.js PWA (native Android/iOS builds) with real-time chat & live geolocation tracking on Leaflet maps - 5,000+ users.",
      "Migrated Redux to React Query & React Context, cutting boilerplate and standardizing data-fetching across both products.",
      "Refactored a 10K-line legacy codebase into container/presentational components + shared hooks, and migrated JS → TypeScript.",
    ],
  },
  {
    company: "Paziresh24",
    companyHref: "https://paziresh24.com",
    role: "Frontend Developer",
    period: "Dec 2017 - Nov 2020",
    location: "Yazd, Iran",
    impact: [
      "Led migration of paziresh24.com from a legacy MPA to a server-side-rendered Vue/Nuxt 2 app, delivering the homepage & doctor-profile pages.",
      "Built a real-time patient–doctor consultation chat client (1,000+ users at launch) in vanilla JS with a prototype-based component architecture.",
      "Designed & built from scratch a custom mobile-first weekly DatePicker for the doctor-appointment booking flow.",
    ],
  },
] as const

export const contact = {
  email: "deasurv@gmail.com",
  phone: "+98 903 195 8700",
  links: [
    {
      href: "https://linkedin.com/in/majid-fatahi",
      label: "LinkedIn",
    },
    { href: "https://github.com/majid-fatahi", label: "GitHub" },
  ],
} as const

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const
