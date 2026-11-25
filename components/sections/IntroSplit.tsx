import styles from "./IntroSplit.module.css";

/** A lead statement beside a supporting point. Used for the homepage introduction. */
export function IntroSplit({
  id,
  eyebrow,
  lead,
  support,
}: {
  id?: string;
  eyebrow?: string;
  lead: { heading: string; body: string };
  support: { heading: string; body: string };
}) {
  return (
    <section id={id} className={`section on-white ${styles.intro}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.lead}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="h2">{lead.heading}</h2>
          <p className={styles.leadBody}>{lead.body}</p>
        </div>
        <div className={styles.support}>
          <h3 className="h3">{support.heading}</h3>
          <p className="muted">{support.body}</p>
        </div>
      </div>
    </section>
  );
}
