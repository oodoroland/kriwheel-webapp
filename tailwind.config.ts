import type { Config } from "tailwindcss";

/**
 * ROCODEIFY Intelligence System — canonical brand tokens.
 * Source of truth: zeedocs/brandguide.md. Keep the two in sync.
 *
 * Font families reference CSS variables injected by next/font (see src/lib/fonts.ts):
 *   --font-manrope → display + headlines
 *   --font-inter   → body / long-form
 *   --font-mono    → stats, labels, technical
 *
 * Naming note: `unit-*` (spacing) and the semantic type names (display-lg,
 * headline-lg, stats-md, label-caps) are the canonical, go-forward vocabulary.
 * The short spacing names (xs/sm/md/lg/xl) and headline-xl/label-sm remain as
 * backward-compatible aliases for existing markup.
 */
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Surfaces & backgrounds
        surface: "#f7f9fb",
        "surface-dim": "#d8dadc",
        "surface-bright": "#f7f9fb",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f2f4f6",
        "surface-container": "#eceef0",
        "surface-container-high": "#e6e8ea",
        "surface-container-highest": "#e0e3e5",
        "surface-variant": "#e0e3e5",
        "surface-tint": "#4e6077",
        "inverse-surface": "#2d3133",
        "inverse-on-surface": "#eff1f3",
        background: "#f7f9fb",
        "background-cool": "#f1f5f9",
        "on-surface": "#191c1e",
        "on-surface-variant": "#44474c",
        "on-background": "#191c1e",
        // Outlines
        outline: "#74777d",
        "outline-variant": "#c4c6cd",
        // Primary — Midnight Navy
        primary: "#0b1f33",
        "on-primary": "#ffffff",
        "primary-container": "#0b1f33",
        "on-primary-container": "#7587a0",
        "inverse-primary": "#b5c8e3",
        "primary-fixed": "#d1e4ff",
        "primary-fixed-dim": "#b5c8e3",
        "on-primary-fixed": "#081d30",
        "on-primary-fixed-variant": "#36485e",
        // Secondary — Medical Teal (primary accent)
        secondary: "#0f766e",
        "on-secondary": "#ffffff",
        "secondary-container": "#ccfbf1",
        "on-secondary-container": "#134e4a",
        "secondary-fixed": "#d8e3fb",
        "secondary-fixed-dim": "#bcc7de",
        "on-secondary-fixed": "#111c2d",
        "on-secondary-fixed-variant": "#3c475a",
        // Tertiary — Medical Teal
        tertiary: "#000605",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#002320",
        "on-tertiary-container": "#3b938b",
        "tertiary-fixed": "#9cf2e8",
        "tertiary-fixed-dim": "#80d5cb",
        "on-tertiary-fixed": "#00201d",
        "on-tertiary-fixed-variant": "#00504a",
        // Error
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        // Semantic accents
        "interactive-blue": "#2563eb",
        "success-emerald": "#16a34a",
        "warning-amber": "#d97706",
        "error-crimson": "#dc2626",
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
        // Brand component radii
        button: "14px",
        input: "14px",
        card: "18px",
        image: "24px",
        // Homepage component radius (8px)
        eight: "0.5rem",
      },
      spacing: {
        // Canonical go-forward scale
        "unit-xs": "0.5rem",
        "unit-sm": "1rem",
        "unit-md": "1.5rem",
        "unit-lg": "2rem",
        "unit-xl": "3rem",
        "unit-2xl": "4rem",
        "unit-3xl": "6rem",
        "unit-4xl": "8rem",
        "reading-width": "720px",
        "container-max": "1280px",
        gutter: "32px",
        // Backward-compatible aliases (existing markup)
        base: "4px",
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "48px",
        xl: "80px",
      },
      maxWidth: {
        "container-max": "1400px",
        "reading-width": "720px",
      },
      fontFamily: {
        // Short family aliases used by the homepage markup
        display: ["var(--font-manrope)"],
        body: ["var(--font-inter)"],
        mono: ["var(--font-mono)"],
        "display-lg": ["var(--font-manrope)"],
        "display-lg-mobile": ["var(--font-manrope)"],
        "headline-xl": ["var(--font-manrope)"],
        "headline-xl-mobile": ["var(--font-manrope)"],
        "headline-lg": ["var(--font-manrope)"],
        "headline-md": ["var(--font-manrope)"],
        "body-lg": ["var(--font-inter)"],
        "body-md": ["var(--font-inter)"],
        "stats-md": ["var(--font-mono)"],
        "label-caps": ["var(--font-mono)"],
        "label-sm": ["var(--font-mono)"],
      },
      fontSize: {
        "display-lg": [
          "64px",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-lg-mobile": [
          "40px",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        // headline-xl / -mobile: legacy aliases mapped to the display scale
        "headline-xl": [
          "64px",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "headline-xl-mobile": [
          "40px",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        "headline-lg": ["32px", { lineHeight: "1.3", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "1.4", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.7", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "stats-md": [
          "14px",
          { lineHeight: "1.5", letterSpacing: "0.05em", fontWeight: "500" },
        ],
        "label-caps": [
          "12px",
          { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "700" },
        ],
        // label-sm: legacy alias of label-caps
        "label-sm": [
          "12px",
          { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "700" },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
