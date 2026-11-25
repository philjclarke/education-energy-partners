import { TextLink } from "@/components/ui/Button";
import { CitationCard, type Citation } from "./CitationCard";
import styles from "./ExpertiseEvidence.module.css";

/** Credibility block: who EEP is, beside the policy evidence it relies on. */
export function ExpertiseEvidence({
  eyebrow,
  heading,
  body,
  link,
  citation,
}: {
  eyebrow?: string;
  heading: string;
  body: string;
  link?: { label: string; href: string };
  citation: Citation;
}) {
  return (
    <section className="section" aria-labelledby="expertise-heading">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 id="expertise-heading" className="h2">
            {heading}
          </h2>
          <p className="lede muted">{body}</p>
          {link && <TextLink href={link.href}>{link.label}</TextLink>}
        </div>
        <CitationCard {...citation} />
      </div>
    </section>
  );
}
