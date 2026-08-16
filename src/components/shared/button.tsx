import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "accent" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

/**
 * The single source of truth for buttons across the site. Every page uses
 * these variants so the design never drifts between routes.
 *
 *  primary - dark navy fill (nav / compact actions)
 *  accent  - Medical Teal fill (main CTAs)
 *  ghost   - translucent outline for use on DARK backgrounds
 *  outline - bordered light button for use on LIGHT backgrounds
 */
const base =
  "inline-flex items-center justify-center rounded-eight font-display font-bold transition-all";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-on-primary shadow-lg shadow-primary/10 hover:bg-secondary hover:-translate-y-0.5",
  accent:
    "bg-secondary text-on-primary shadow-2xl shadow-secondary/20 hover:scale-105",
  ghost:
    "bg-white/5 border border-white/20 text-on-primary backdrop-blur-md hover:bg-white/10",
  outline:
    "bg-surface-container-lowest border border-outline-variant text-primary hover:bg-white",
};

const sizes: Record<Size, string> = {
  sm: "px-8 py-3 text-sm tracking-wide",
  md: "px-10 py-5 text-lg",
  lg: "px-12 py-6 text-xl",
};

type StyleProps = {
  variant?: Variant;
  size?: Size;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  StyleProps & { href?: undefined };

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  StyleProps & { href: string };

/**
 * Renders a real `<button>` by default, or a Next `Link` when `href` is set -
 * both share the exact same styling so a linked CTA never drifts from a plain
 * one.
 */
export function Button(props: ButtonProps | LinkProps) {
  const { variant = "accent", size = "md", className, ...rest } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]}${
    className ? ` ${className}` : ""
  }`;

  if (typeof rest.href === "string") {
    const { href, ...anchorProps } = rest as LinkProps;
    return <Link href={href} className={classes} {...anchorProps} />;
  }

  return <button className={classes} {...(rest as ButtonProps)} />;
}
