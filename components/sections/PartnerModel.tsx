import styles from "./PartnerModel.module.css";

export type PartnerRole = { name: string; role: string };

/**
 * Partnership diagram. EEP sits on the through-line between education
 * customers and specialist partners.
 * Guardrail (spec §6): must not imply EEP itself provides regulated
 * financing, electrical certification or legal advice.
 */
export function PartnerModel({
  customer,
  eep,
  partners,
  note,
}: {
  customer: string;
  eep: string;
  partners: PartnerRole[];
  note: string;
}) {
  const label = `Partnership model. ${customer} connect through EEP, which ${eep.toLowerCase()}, to ${partners
    .map((p) => `${p.name.toLowerCase()} partners`)
    .join(", ")}. ${note}`;

  return (
    <figure className={styles.model} role="img" aria-label={label}>
      <div className={`${styles.box} ${styles.customer}`}>
        <span className={styles.kicker}>Customers</span>
        <strong>{customer}</strong>
      </div>
      <span className={styles.line} aria-hidden="true" />
      <div className={`${styles.box} ${styles.eep}`}>
        <span className={styles.kicker}>EEP</span>
        <strong>{eep}</strong>
      </div>
      <span className={styles.line} aria-hidden="true" />
      <div className={styles.partners}>
        {partners.map((p) => (
          <div key={p.name} className={styles.box}>
            <span className={styles.kicker}>{p.name} partners</span>
            <span>{p.role}</span>
          </div>
        ))}
      </div>
      <figcaption className={styles.note}>{note}</figcaption>
    </figure>
  );
}
