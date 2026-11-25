import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import styles from "./Footer.module.css";

const columns = [
  {
    title: "Solutions",
    links: [
      { label: "Solar PV", href: "/solutions/solar" },
      { label: "Battery storage", href: "/solutions/battery-storage" },
      { label: "Energy management", href: "/solutions/energy-management" },
      { label: "Academy trusts", href: "/academy-trusts" },
      { label: "Further education", href: "/further-education-colleges" },
    ],
  },
  {
    title: "Funding",
    links: [
      { label: "Funding overview", href: "/funding" },
      { label: "Power purchase agreements", href: "/funding/ppa" },
      { label: "Compare funding options", href: "/funding/compare" },
      { label: "DfE solar PPA pilot", href: "/funding/dfe-ppa-guide" },
    ],
  },
  {
    title: "EEP",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "About", href: "/about" },
      { label: "Evidence", href: "/evidence" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const legal = [
  { label: "Privacy", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

export function SiteFooter() {
  return (
    <footer className={`on-navy ${styles.footer}`}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Logo tone="light" size="lg" />
          <p className="muted">
            Solar, battery storage and intelligent energy management for schools, trusts and colleges,
            coordinated from first assessment to ongoing support.
          </p>
        </div>

        <div className={styles.alerts}>
          <h2 className={styles.alertsTitle}>Energy updates worth opening</h2>
          <p className="muted">
            Occasional, practical updates on funding, DfE guidance and school energy procurement.
          </p>
          <Button href="/alerts" variant="signal">
            Sign Up for Energy Alerts &amp; Updates
          </Button>
        </div>
      </div>

      <div className={`container ${styles.links}`}>
        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className={styles.colTitle}>{col.title}</h2>
            <ul>
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <div>
          <h2 className={styles.colTitle}>For partners</h2>
          <p className="muted">
            Funding, technology and delivery specialists working in UK education.
          </p>
          <Link href="/partners" className={styles.partnerLink}>
            Partner With EEP
          </Link>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        {/* Legal entity, company number and registered address go here once the owner has approved them. */}
        <p>© 2026 Education Energy Partners</p>
        <ul>
          {legal.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
