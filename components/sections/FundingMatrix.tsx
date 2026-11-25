import { Button } from "@/components/ui/Button";
import type { Cta } from "./Hero";
import styles from "./FundingMatrix.module.css";

export type FundingRoute = {
  name: string;
  upfront: string;
  ownership: string;
  maintenance: string;
  review: string;
};

/**
 * Simplified comparison of funding routes.
 * Guardrail (spec §6, §8): must not imply eligibility, guaranteed savings
 * or that every PPA is DfE-approved. Keep the footnote.
 */
export function FundingMatrix({
  eyebrow,
  heading,
  body,
  cta,
  routes,
  footnote,
}: {
  eyebrow?: string;
  heading: string;
  body: string;
  cta: Cta;
  routes: FundingRoute[];
  footnote: string;
}) {
  return (
    <section className={`section on-navy ${styles.funding}`} aria-labelledby="funding-heading">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 id="funding-heading" className="h2">
            {heading}
          </h2>
          <p className="lede muted">{body}</p>
          <Button href={cta.href} variant="signal" arrow>
            {cta.label}
          </Button>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <caption className="visually-hidden">Simplified comparison of funding routes</caption>
            <thead>
              <tr>
                <th scope="col">Route</th>
                <th scope="col">Upfront capital</th>
                <th scope="col">Equipment owned by</th>
                <th scope="col">Maintenance</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((r) => (
                <tr key={r.name}>
                  <th scope="row">
                    <span className={styles.route}>{r.name}</span>
                    <span className={styles.review}>{r.review}</span>
                  </th>
                  <td data-label="Upfront capital">{r.upfront}</td>
                  <td data-label="Equipment owned by">{r.ownership}</td>
                  <td data-label="Maintenance">{r.maintenance}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={styles.footnote}>{footnote}</p>
        </div>
      </div>
    </section>
  );
}
