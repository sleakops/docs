import React from "react";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import { usePluginData } from "@docusaurus/useGlobalData";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./RecentChangelog.module.css";

function formatDate(dateString, locale) {
  const date = new Date(dateString + "T00:00:00");
  return new Intl.DateTimeFormat(locale, { month: "short", day: "numeric", year: "numeric" }).format(date);
}

function ChangelogEntry({ entry, idx, locale }) {
  const version = entry.title.replace(/^Version\s*/i, "");

  // Separate features (added/improved) from bug fixes
  const featureItems = entry.sections
    .filter((s) => s.type !== "fixed")
    .flatMap((s) => s.items);

  const bugFixCount = entry.sections
    .filter((s) => s.type === "fixed")
    .reduce((acc, s) => acc + s.items.length, 0);

  return (
    <div
      className={styles.timelineItem}
      style={{ animationDelay: `${idx * 0.1}s` }}
    >
      <div className={styles.timelineDot} />
      <div className={styles.timelineContent}>
        <div className={styles.versionHeader}>
          <span className={styles.version}>v{version}</span>
          <span className={styles.date}>{formatDate(entry.date, locale)}</span>
        </div>
        <div className={styles.card}>
          {featureItems.length > 0 && (
            <div className={styles.section}>
              <p className={styles.sectionLabel}>
                <span className={`${styles.badge} ${styles.badgeAdded}`}>
                  <Translate id="changelog.section.features">Features</Translate>
                </span>
              </p>
              <ul className={styles.itemList}>
                {featureItems.slice(0, 3).map((item, iIdx) => (
                  <li key={iIdx} className={styles.item}>
                    <strong>{item.title}</strong>
                    {item.description && `: ${item.description}`}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {bugFixCount > 0 && (
            <div className={styles.bugFixRow}>
              <span className={`${styles.badge} ${styles.badgeFixed}`}>
                <strong>
                  <Translate
                    id="changelog.bugFixCount"
                    values={{ count: bugFixCount }}
                  >
                    {"+{count} Bug Fixes"}
                  </Translate>
                </strong>
              </span>
            </div>
          )}

          <div className={styles.readMore}>
            <Link to={`/changelog/${entry.slug}`} className={styles.readMoreLink}>
              <span className={`${styles.badge} ${styles.badgeReadMore}`}>
                <strong>
                  <Translate id="changelog.readMore">Read more</Translate>
                  {" →"}
                </strong>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RecentChangelog() {
  const { recentChangelogs } = usePluginData("changelog-recent");
  const { i18n: { currentLocale } } = useDocusaurusContext();

  if (!recentChangelogs || recentChangelogs.length === 0) {
    return null;
  }

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
          {recentChangelogs.map((entry, idx) => (
            <ChangelogEntry key={entry.slug} entry={entry} idx={idx} locale={currentLocale} />
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
