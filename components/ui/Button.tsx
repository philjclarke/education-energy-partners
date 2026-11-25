import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "signal" | "ghost-light";

export function Button({
  href,
  children,
  variant = "primary",
  arrow = false,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link href={href} className={`${styles.btn} ${styles[variant]} ${className ?? ""}`}>
      <span>{children}</span>
      {arrow && <span className={styles.arrow} aria-hidden="true" />}
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className={styles.textLink}>
      {children}
      <span className={styles.arrow} aria-hidden="true" />
    </Link>
  );
}
