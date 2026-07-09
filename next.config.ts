import type { NextConfig } from "next"
import bundleAnalyzer from "@next/bundle-analyzer"

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig: NextConfig = {
  // Turbopack is the default bundler for dev & build in Next 16 — no flag needed.
  // CWV-first defaults: tiny client bundle, fully static output, SVG-only (no image optimization domains).
  experimental: {
    serverActions: { bodySizeLimit: "1mb" },
  },
}

export default withBundleAnalyzer(nextConfig)
