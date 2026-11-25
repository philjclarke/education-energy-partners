"use client";

import { useId, useState } from "react";
import { Tag } from "@/components/ui/Tag";
import styles from "./EnergyDayChart.module.css";

/**
 * ILLUSTRATIVE ONLY. An invented school-day electricity profile in 48
 * half-hour settlement periods. No units or figures are shown, by design:
 * the spec forbids numeric savings claims until the owner approves a
 * financial methodology.
 */
type Period = { demand: number; solar: number };

const smooth = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

const PERIODS: Period[] = Array.from({ length: 48 }, (_, i) => {
  const h = i / 2 + 0.25;
  const occupied = smooth(7, 8.5, h) * (1 - smooth(15.5, 17.5, h));
  const lunch = 0.08 * Math.exp(-((h - 12.5) ** 2) / 0.5);
  const cleaning = 0.05 * smooth(16.5, 17, h) * (1 - smooth(19, 19.5, h));
  const demand = 0.16 + 0.66 * occupied + lunch + cleaning;
  const sun = h > 6 && h < 19 ? 0.6 * Math.sin((Math.PI * (h - 6)) / 13) ** 1.3 : 0;
  return { demand, solar: Math.min(demand, sun) };
});

const W = 480;
const TOP = 8;
const BASE = 118;
const SLOT = W / 48;
const BAR = 7;
const y = (v: number) => BASE - v * (BASE - TOP);

export function EnergyDayChart() {
  const [withSolar, setWithSolar] = useState(true);
  const titleId = useId();

  return (
    <figure className={styles.card} aria-labelledby={titleId}>
      <div className={styles.head}>
        <figcaption id={titleId} className={styles.title}>
          Electricity bought from the grid
        </figcaption>
        <div className={styles.toggle} role="group" aria-label="Show the profile">
          <button type="button" aria-pressed={!withSolar} onClick={() => setWithSolar(false)}>
            Before solar
          </button>
          <button type="button" aria-pressed={withSolar} onClick={() => setWithSolar(true)}>
            With solar
          </button>
        </div>
      </div>

      <svg
        viewBox="0 0 480 150"
        className={styles.chart}
        role="img"
        aria-label={
          withSolar
            ? "Illustrative school day with solar. Demand is low overnight, rises from about 8am, peaks around midday and falls after 4pm. Part of the daytime demand is met by on-site solar, so less is bought from the grid between roughly 8am and 5pm."
            : "Illustrative school day before solar. Demand is low overnight, rises from about 8am, peaks around midday and falls after 4pm. All of it is bought from the grid."
        }
      >
        <line x1="0" x2={W} y1={BASE + 0.5} y2={BASE + 0.5} className={styles.axis} />
        {PERIODS.map((p, i) => {
          const used = withSolar ? p.solar : 0;
          const gridTop = y(p.demand - used);
          const demandTop = y(p.demand);
          const x = i * SLOT + (SLOT - BAR) / 2;
          return (
            <g key={i}>
              <rect x={x} y={gridTop} width={BAR} height={BASE - gridTop} rx="1" className={styles.grid} />
              <rect
                x={x}
                y={demandTop}
                width={BAR}
                height={Math.max(0, gridTop - demandTop)}
                rx="1"
                className={styles.solar}
              />
            </g>
          );
        })}
        {[0, 6, 12, 18, 24].map((hr) => (
          <g key={hr}>
            <line x1={hr * 20} x2={hr * 20} y1={BASE + 1} y2={BASE + 5} className={styles.axis} />
            <text
              x={hr * 20}
              y="140"
              textAnchor={hr === 0 ? "start" : hr === 24 ? "end" : "middle"}
              className={styles.tick}
            >
              {String(hr).padStart(2, "0")}:00
            </text>
          </g>
        ))}
      </svg>

      <div className={styles.legend}>
        <span>
          <i className={styles.keyGrid} aria-hidden="true" />
          Bought from grid
        </span>
        <span>
          <i className={styles.keySolar} aria-hidden="true" />
          Met by on-site solar
        </span>
      </div>
      <div className={styles.foot}>
        <Tag kind="illustrative">Illustrative</Tag>
        <span>Invented profile. Not based on any real school.</span>
      </div>
    </figure>
  );
}
