import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import styles from "./Hero.module.css";

export type Cta = { label: string; href: string };

/**
 * Page hero. Light (education) or dark (partner) treatment.
 * `aside` replaces the photo with something else (e.g. the partner model diagram);
 * `overlay` floats over the bottom of the photo (e.g. the illustrative chart).
 */
export function Hero({
  tone = "light",
  eyebrow,
  heading,
  body,
  primary,
  secondary,
  qualifier,
  photoBrief,
  overlay,
  aside,
}: {
  tone?: "light" | "dark";
  eyebrow?: string;
  heading: string;
  body: string;
  primary: Cta;
  secondary?: Cta;
  qualifier?: string;
  photoBrief?: string;
  overlay?: ReactNode;
  aside?: ReactNode;
}) {
  const dark = tone === "dark";
  return (
    <section className={`${styles.hero} ${dark ? "on-navy" : ""}`} aria-labelledby="hero-heading">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 id="hero-heading" className="display">
            {heading}
          </h1>
          <p className={`lede ${dark ? "muted" : ""}`}>{body}</p>
          <div className={styles.ctas}>
            <Button href={primary.href} variant={dark ? "signal" : "primary"} arrow>
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} variant={dark ? "ghost-light" : "secondary"}>
                {secondary.label}
              </Button>
            )}
          </div>
          {qualifier && <p className={styles.qualifier}>{qualifier}</p>}
        </div>

        <div className={styles.media}>
          {aside ??
            (photoBrief && (
              <PhotoPlaceholder brief={photoBrief} tone={dark ? "dark" : "light"} className={styles.photo}>
                {overlay && <div className={styles.overlay}>{overlay}</div>}
              </PhotoPlaceholder>
            ))}
        </div>
      </div>
    </section>
  );
}
