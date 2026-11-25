/**
 * EEP logo: PLACEHOLDER ARTWORK from the brand first pass.
 * The owner is redrawing the final logo. When it arrives, replace the
 * <Monogram> SVG below; every header, footer and report uses this file.
 */
import styles from "./Logo.module.css";

type Tone = "dark" | "light";

const tones: Record<Tone, { letters: string; line: string }> = {
  // Navy letters for light backgrounds
  dark: { letters: "var(--navy)", line: "var(--green)" },
  // Paper letters for navy backgrounds
  light: { letters: "var(--paper)", line: "var(--signal)" },
};

export function Monogram({
  tone = "dark",
  className,
  title,
}: {
  tone?: Tone;
  className?: string;
  title?: string;
}) {
  const c = tones[tone];
  return (
    <svg
      viewBox="0 0 184 80"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      focusable="false"
    >
      <g style={{ fill: c.letters }}>
        <rect x="0" y="0" width="14" height="80" />
        <rect x="0" y="0" width="50" height="14" />
        <rect x="0" y="66" width="50" height="14" />
        <rect x="64" y="0" width="14" height="80" />
        <rect x="64" y="0" width="50" height="14" />
        <rect x="64" y="66" width="50" height="14" />
        <rect x="128" y="0" width="14" height="80" />
        <path
          fillRule="evenodd"
          d="M128 0H160A23.5 23.5 0 0 1 160 47H128Z M142 14H160A9.5 9.5 0 0 1 160 33H142Z"
        />
      </g>
      <rect x="0" y="33" width="160" height="14" style={{ fill: c.line }} />
    </svg>
  );
}

export function Logo({
  tone = "dark",
  size = "md",
}: {
  tone?: Tone;
  size?: "md" | "lg";
}) {
  return (
    <span className={`${styles.logo} ${styles[size]}`} data-tone={tone}>
      <Monogram tone={tone} className={styles.mark} />
      <span className={styles.divider} aria-hidden="true" />
      <span className={styles.wordmark}>Education Energy Partners</span>
    </span>
  );
}
