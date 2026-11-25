import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { Cta } from "./Hero";
import styles from "./CtaBand.module.css";

/**
 * Closing call to action. With `lookupTeaser`, shows a preview of the
 * school search that links into the assessment (the search itself lives there).
 */
export function CtaBand({
  tone = "mist",
  eyebrow,
  heading,
  body,
  cta,
  note,
  lookupTeaser = false,
}: {
  tone?: "mist" | "navy";
  eyebrow?: string;
  heading: string;
  body: string;
  cta: Cta;
  note?: string;
  lookupTeaser?: boolean;
}) {
  const dark = tone === "navy";
  return (
    <section className={`section ${dark ? "on-navy" : "on-mist"}`} aria-labelledby="cta-heading">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 id="cta-heading" className="h2">
            {heading}
          </h2>
          <p className={`lede ${dark ? "muted" : ""}`}>{body}</p>
          {note && <p className={styles.note}>{note}</p>}
        </div>

        <div className={styles.action}>
          {lookupTeaser && (
            <Link href={cta.href} className={styles.lookup} aria-label={`${cta.label}: find your school or trust`}>
              <span className={styles.lookupLabel}>Find your school or trust</span>
              <span className={styles.lookupField}>
                <span className={styles.search} aria-hidden="true" />
                Search by name, postcode or URN
              </span>
              <span className={styles.lookupHint}>
                Uses the Department for Education’s Get Information about Schools register
              </span>
            </Link>
          )}
          <Button href={cta.href} variant={dark ? "signal" : "primary"} arrow>
            {cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
