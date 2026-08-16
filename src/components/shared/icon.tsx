type IconProps = {
  /** Material Symbols Outlined ligature name, e.g. "search". */
  name: string;
  className?: string;
  /** Render the filled variant of the glyph. */
  filled?: boolean;
};

/** Renders a Material Symbols Outlined glyph. Decorative by default. */
export function Icon({ name, className, filled }: IconProps) {
  return (
    <span
      className={`material-symbols-outlined${className ? ` ${className}` : ""}`}
      style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
      aria-hidden
    >
      {name}
    </span>
  );
}
