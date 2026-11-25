import { Button } from "@/components/ui/Button";
import type { Cta } from "./Hero";
import styles from "./ProcessSteps.module.css";

export type Step = { title: string; body: string };

/**
 * The EEP route from first conversation to ongoing support.
 * The brand's through-line runs through every step: one continuous relationship.
 */
export function ProcessSteps({
  eyebrow,
  heading,
  intro,
  steps,
  cta,
  tone = "white",
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  steps: Step[];
  cta?: Cta;
  tone?: "white" | "paper";
}) {
  return (
    <section className={`section ${tone === "white" ? "on-white" : ""}`} aria-labelledby="steps-heading">
      <div className="container">
        <header className={styles.head}>
          <div className={styles.headCopy}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2 id="steps-heading" className="h2">
              {heading}
            </h2>
            {intro && <p className="lede muted">{intro}</p>}
          </div>
          {cta && (
            <Button href={cta.href} variant="secondary" arrow>
              {cta.label}
            </Button>
          )}
        </header>

        <ol className={styles.steps}>
          {steps.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.node} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className="muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
