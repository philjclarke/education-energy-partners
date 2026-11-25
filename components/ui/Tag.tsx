import type { ReactNode } from "react";
import styles from "./Tag.module.css";

/**
 * "illustrative" marks any example, chart or scenario that is not real data.
 * The spec requires every illustrative visual to be clearly labelled.
 */
export function Tag({
  kind = "category",
  children,
}: {
  kind?: "illustrative" | "policy" | "category";
  children: ReactNode;
}) {
  return (
    <span className={`${styles.tag} ${styles[kind]}`}>
      {kind !== "category" && <span className={styles.dot} aria-hidden="true" />}
      {children}
    </span>
  );
}
