import { Manrope, Inter, JetBrains_Mono } from "next/font/google";

/**
 * Self-hosted via next/font - zero layout shift, no render-blocking request,
 * no external Google call at runtime. Exposed as CSS variables consumed by
 * the Tailwind fontFamily tokens (see tailwind.config.ts).
 *
 * Brand type system (see zeedocs/brandguide.md):
 *   Manrope        → display + headlines
 *   Inter          → body / long-form reading
 *   JetBrains Mono → stats, labels, technical diagrams
 */
export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const fontVariables = `${manrope.variable} ${inter.variable} ${jetBrainsMono.variable}`;
