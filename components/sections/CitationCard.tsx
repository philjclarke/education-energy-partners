import { Tag } from "@/components/ui/Tag";
import styles from "./CitationCard.module.css";

export type Citation = {
  publisher: string;
  title: string;
  url: string;
  published: string;
  checked: string;
  appliesTo?: string;
  summary?: string;
  disclaimer?: string;
};

/** Evidence citation card (spec §5): date, publisher, exact source and last-checked date. */
export function CitationCard({
  publisher,
  title,
  url,
  published,
  checked,
  appliesTo,
  summary,
  disclaimer,
}: Citation) {
  return (
    <aside className={styles.card} aria-label={`Source: ${title}`}>
      <div className={styles.top}>
        <p className={styles.publisher}>{publisher}</p>
        <Tag kind="policy">Policy checked {checked}</Tag>
      </div>
      <a href={url} className={styles.title} target="_blank" rel="noopener noreferrer">
        {title}
        <span className="visually-hidden"> (opens GOV.UK in a new tab)</span>
      </a>
      {summary && <p className={styles.summary}>{summary}</p>}
      <dl className={styles.meta}>
        <dt>Published</dt>
        <dd>{published}</dd>
        <dt>Last checked</dt>
        <dd>{checked}</dd>
        {appliesTo && (
          <>
            <dt>Applies to</dt>
            <dd>{appliesTo}</dd>
          </>
        )}
      </dl>
      {disclaimer && <p className={styles.disclaimer}>{disclaimer}</p>}
    </aside>
  );
}
