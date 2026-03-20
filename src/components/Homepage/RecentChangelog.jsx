import React from "react";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import { usePluginData } from "@docusaurus/useGlobalData";
import styles from "./RecentChangelog.module.css";

function formatDate(dateString) {
  const date = new Date(dateString + "T00:00:00");
  const day = date.getDate();
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
}

const badgeConfig = {
  added: { label: "Added", className: "badgeAdded" },
  fixed: { label: "Fixed", className: "badgeFixed" },
  improved: { label: "Improved", className: "badgeImproved" },
};

function TypeBadge({ type }) {
  const config = badgeConfig[type] || badgeConfig.improved;
  return (
    <span className={`${styles.badge} ${styles[config.className]}`}>
      {config.label}
    </span>
  );
}

function ChangelogEntry({ entry, idx }) {
  const version = entry.title.replace(/^Version\s*/i, "");

  return (
    <div
      className={styles.timelineItem}
      style={{ animationDelay: `${idx * 0.1}s` }}
    >
      <div className={styles.timelineDot} />
      <div className={styles.timelineContent}>
        <div className={styles.versionHeader}>
          <Link to={`/changelog/${entry.slug}`} className={styles.versionLink}>
            <span className={styles.version}>v{version}</span>
          </Link>
          <span className={styles.date}>{formatDate(entry.date)}</span>
        </div>
        <div className={styles.card}>
          {entry.sections.map((section, sIdx) => (
            <div key={sIdx} className={styles.section}>
              <div className={styles.sectionHeader}>
                <TypeBadge type={section.type} />
                <span className={styles.sectionTitle}>{section.heading}</span>
              </div>
              <ul className={styles.itemList}>
                {section.items.slice(0, 3).map((item, iIdx) => (
                  <li key={iIdx} className={styles.item}>
                    <strong>{item.title}</strong>
                    {item.description && `: ${item.description}`}
                  </li>
                ))}
                {section.items.length > 3 && (
                  <li className={`${styles.item} ${styles.moreItems}`}>
                    +{section.items.length - 3} more
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function RecentChangelog() {
  const { recentChangelogs } = usePluginData("changelog-recent");

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
            <ChangelogEntry key={entry.slug} entry={entry} idx={idx} />
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
