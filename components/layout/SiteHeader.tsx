"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import styles from "./Header.module.css";

export type NavItem = { label: string; href: string };

export const educationNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Funding", href: "/funding" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export const partnerNav: NavItem[] = [
  { label: "Opportunity", href: "/partners#opportunity" },
  { label: "Education Expertise", href: "/partners/education-market" },
  { label: "Partnership Model", href: "/partners/partnership-model" },
  { label: "Contact", href: "/partners/contact" },
];

/**
 * One header for both audiences.
 * "education" is the main site; "partner" is the standalone supplier landing area
 * with its own local navigation, darker treatment and Contact Us CTA.
 */
export function SiteHeader({ variant = "education" }: { variant?: "education" | "partner" }) {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const isPartner = variant === "partner";
  const nav = isPartner ? partnerNav : educationNav;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`${styles.header} ${isPartner ? styles.partner : ""}`}>
      <div className={`container ${styles.bar}`}>
        <Link
          href={isPartner ? "/partners" : "/"}
          className={styles.home}
          aria-label={isPartner ? "Education Energy Partners: partner home" : "Education Energy Partners: home"}
        >
          <Logo tone={isPartner ? "light" : "dark"} />
          {isPartner && <span className={styles.audience}>For partners</span>}
        </Link>

        <nav className={styles.nav} aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          {isPartner ? (
            <Button href="/partners/contact" variant="signal">
              Contact Us
            </Button>
          ) : (
            <>
              <Link href="/partners" className={styles.partnerLink}>
                Partner With EEP
              </Link>
              <Button href="/energy-assessment">Discover Your Potential Savings</Button>
            </>
          )}
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.menuIcon} data-open={open} aria-hidden="true" />
          <span className={styles.menuText}>{open ? "Close" : "Menu"}</span>
        </button>
      </div>

      <div id={menuId} className={styles.mobile} hidden={!open}>
        <div className="container">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.mobileActions}>
            {isPartner ? (
              <>
                <Button href="/partners/contact" variant="signal">
                  Contact Us
                </Button>
                <Link href="/" className={styles.partnerLink} onClick={() => setOpen(false)}>
                  Education site
                </Link>
              </>
            ) : (
              <>
                <Button href="/energy-assessment">Discover Your Potential Savings</Button>
                <Link href="/partners" className={styles.partnerLink} onClick={() => setOpen(false)}>
                  Partner With EEP
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
