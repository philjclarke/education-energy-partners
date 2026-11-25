import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import type { Cta } from "./Hero";
import styles from "./TrustPortfolio.module.css";

export type PortfolioSite = {
  name: string;
  phase: string;
  status: string;
  selected: boolean;
};

/**
 * Academy trust portfolio section with an ILLUSTRATIVE site list.
 * Guardrail (spec §8): never imply roof or bill data has been verified.
 */
export function TrustPortfolio({
  eyebrow,
  heading,
  body,
  points,
  cta,
  sites,
}: {
  eyebrow?: string;
  heading: string;
  body: string;
  points: string[];
  cta: Cta;
  sites: PortfolioSite[];
}) {
  const selected = sites.filter((s) => s.selected).length;
  return (
    <section className="section" aria-labelledby="trust-heading">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 id="trust-heading" className="h2">
            {heading}
          </h2>
          <p className="lede muted">{body}</p>
          <ul className={styles.points}>
            {points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <Button href={cta.href} variant="secondary" arrow>
            {cta.label}
          </Button>
        </div>

        <figure className={styles.panel}>
          <div className={styles.panelHead}>
            <figcaption>
              <strong>Example Learning Trust</strong>
              <span>
                {selected} of {sites.length} academies selected for first review
              </span>
            </figcaption>
            <Tag kind="illustrative">Illustrative</Tag>
          </div>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Academy</th>
                <th scope="col">Phase</th>
                <th scope="col">Next step</th>
              </tr>
            </thead>
            <tbody>
              {sites.map((s) => (
                <tr key={s.name} data-selected={s.selected}>
                  <th scope="row">
                    <span className={styles.check} aria-hidden="true" />
                    <span>{s.name}</span>
                    <span className="visually-hidden">{s.selected ? "(selected)" : "(not selected)"}</span>
                  </th>
                  <td>{s.phase}</td>
                  <td>{s.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={styles.note}>
            Example only. No roof, bill or consumption data has been verified for any site.
          </p>
        </figure>
      </div>
    </section>
  );
}
