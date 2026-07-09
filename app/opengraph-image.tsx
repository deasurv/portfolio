import { ImageResponse } from "next/og"
import { siteConfig } from "@/content/content"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = siteConfig.ogImageAlt

/**
 * Dynamic OG image - Swiss editorial cover. Built at build time (static route).
 * Satori supports a subset of CSS (flexbox only, no grid).
 */
export default async function OG() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0a0a0a",
        color: "#fafafa",
        padding: 80,
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 24,
          letterSpacing: 4,
          textTransform: "uppercase",
          opacity: 0.7,
        }}
      >
        {siteConfig.role}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div
          style={{
            display: "flex",
            fontSize: 128,
            fontWeight: 600,
            letterSpacing: -6,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{ display: "flex", fontSize: 30, opacity: 0.7, maxWidth: 900 }}
        >
          {siteConfig.tagline}
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 22, opacity: 0.5 }}>
        {siteConfig.url.replace("https://", "")}
      </div>
    </div>,
    { ...size },
  )
}
