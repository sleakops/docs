import React from "react";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import styles from "./RecentChangelog.module.css";

// Changelog data - Latest 3 versions
const changelogData = [
  {
    id: "v240",
    version: "2.4.0",
    date: "2026-01-08",
    type: "feature",
    title: "Workload Auto-Diagnostics",
    description:
      "New AI-powered diagnostics for Workloads, Grace Period support, Cost Tags notifications, and UI improvements.",
    slug: "version-2.4.0",
  },
  {
    id: "v232",
    version: "2.3.2",
    date: "2025-12-19",
    type: "feature",
    title: "SleakOps CLI & Multi-cloud",
    description:
      "New CLI features for local workload shell, S3 with CloudFront improvements, and API performance optimizations.",
    slug: "v2-3-2",
  },
  {
    id: "v231",
    version: "2.3.1",
    date: "2025-12-01",
    type: "feature",
    title: "Image Analysis in Support",
    description:
      "Support for image analysis in the support bot, new documentation, and custom values for addons.",
    slug: "v2-3-1",
  },
];

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

function TypeBadge({ type }) {
  const badgeClass =
    type === "performance" ? styles.badgePerformance : styles.badgeFeature;
  const label = type === "performance" ? "PERFORMANCE" : "FEATURE";
  return <span className={`${styles.badge} ${badgeClass}`}>{label}</span>;
}

export default function RecentChangelog() {
  return (
    <section className={styles.recentChangelog}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <span className={styles.headerIcon}>📋</span>
            <h2 className={styles.title}>
              <Translate id="homepage.recentChangelog">
                Recent Changelog
              </Translate>
            </h2>
          </div>
        </div>

        <div className={styles.timeline}>
          {changelogData.map((item, idx) => (
            <div
              key={item.version}
              className={styles.timelineItem}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={styles.timelineDot} />
              <div className={styles.timelineContent}>
                <div className={styles.versionHeader}>
                  <span className={styles.version}>v{item.version}</span>
                  <span className={styles.date}>{formatDate(item.date)}</span>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <TypeBadge type={item.type} />
                    <span className={styles.cardTitle}>
                      <Translate
                        id={`homepage.recentChangelog.${item.id}.title`}
                      >
                        {item.title}
                      </Translate>
                    </span>
                  </div>
                  <p className={styles.cardDescription}>
                    <Translate
                      id={`homepage.recentChangelog.${item.id}.description`}
                    >
                      {item.description}
                    </Translate>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <Link to="/changelog" className={styles.viewAllLink}>
            <Translate id="homepage.viewFullChangelog">
              View full changelog
            </Translate>
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
