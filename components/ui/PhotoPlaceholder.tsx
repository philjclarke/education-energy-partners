import type { ReactNode } from "react";
import styles from "./PhotoPlaceholder.module.css";

/**
 * Stand-in for a photograph the owner will source.
 * Shows the art-direction brief so the right image can be found.
 * Replace with next/image once the photo and its credit are available.
 */
export function PhotoPlaceholder({
  brief,
  tone = "light",
  className,
  children,
}: {
  brief: string;
  tone?: "light" | "dark";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`${styles.photo} ${styles[tone]} ${className ?? ""}`} role="presentation">
      <p className={styles.brief}>
        <strong>Photograph to source</strong>
        {brief}
      </p>
      {children}
    </div>
  );
}
