import { TextLink } from "@/components/ui/Button";
import styles from "./FeatureCards.module.css";

export type Feature = {
  title: string;
  body: string;
  link?: { label: string; href: string };
  /** Short label above the title, e.g. what the thing does */
  kicker?: string;
};

/** Heading, intro and a row of features. Columns follow the item count. */
export function FeatureCards({
  eyebrow,
  heading,
  intro,
  items,
  tone = "paper",
  id,
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  items: Feature[];
  tone?: "paper" | "white" | "navy";
  id?: string;
}) {
  const toneClass = tone === "navy" ? "on-navy" : tone === "white" ? "on-white" : "";
  return (
    <section id={id} className={`section ${toneClass}`}>
      <div className="container">
        <header className={styles.head}>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="h2">{heading}</h2>
          {intro && <p className="lede muted">{intro}</p>}
        </header>
        <ul className={styles.grid} data-count={items.length}>
          {items.map((item) => (
            <li key={item.title} className={styles.item}>
              {item.kicker && <p className={styles.kicker}>{item.kicker}</p>}
              <h3 className="h3">{item.title}</h3>
              <p className="muted">{item.body}</p>
              {item.link && <TextLink href={item.link.href}>{item.link.label}</TextLink>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
