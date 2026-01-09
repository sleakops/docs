import React from "react";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";
import TutorialCard from "@site/src/components/TutorialCard";
import { tutorialsList, getTutorialLink } from "@site/src/data/tutorials";
import styles from "./RecentTutorials.module.css";

export default function RecentTutorials() {
  // Get featured tutorials first, then others, limit to 3
  const featuredFirst = [...tutorialsList].sort((a, b) => {
    const aFeatured = a.tags?.includes("featured") ? 0 : 1;
    const bFeatured = b.tags?.includes("featured") ? 0 : 1;
    return aFeatured - bFeatured;
  });

  const recentTutorials = featuredFirst.slice(0, 3).map((t) => ({
    ...t,
    link: getTutorialLink(t.id),
  }));

  if (recentTutorials.length === 0) {
    return null;
  }

  const viewTutorialLabel = translate({
    id: "tutorials.viewTutorial",
    message: "View Tutorial",
  });

  return (
    <section className={styles.recentTutorials}>
      <div className="container">
        <div className={styles.tutorialsHeader}>
          <h2 className={styles.tutorialsTitle}>
            <Translate id="homepage.recentTutorials">
              Recent Tutorials
            </Translate>
          </h2>
          <Link to="/tutorials" className={styles.viewMoreLink}>
            <Translate id="homepage.viewMoreTutorials">
              View more tutorials
            </Translate>
          </Link>
        </div>
        <div className={styles.tutorialsGrid}>
          {recentTutorials.map((tutorial, idx) => (
            <TutorialCard
              key={tutorial.id}
              tutorial={tutorial}
              animationDelay={(idx + 1) * 0.1}
              buttonLabel={viewTutorialLabel}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
