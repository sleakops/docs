import React from "react";
import Link from "@docusaurus/Link";
import styles from "./TutorialCard.module.css";

/**
 * TutorialCard Component
 * Reusable card for displaying tutorials in homepage and tutorials showcase
 *
 * @param {Object} tutorial - Tutorial data
 * @param {string} tutorial.title - Tutorial title
 * @param {string} tutorial.description - Tutorial description
 * @param {string} tutorial.image - Image URL (optional)
 * @param {string} tutorial.link - Link to the tutorial
 * @param {number} animationDelay - Delay for entrance animation (optional)
 * @param {string} buttonLabel - Label for the button (optional, for i18n)
 */
export default function TutorialCard({
  tutorial,
  animationDelay = 0,
  buttonLabel = "View Tutorial",
}) {
  const cardStyle = animationDelay
    ? { animationDelay: `${animationDelay}s` }
    : {};

  return (
    <Link to={tutorial.link} className={styles.tutorialCard} style={cardStyle}>
      <div className={styles.tutorialImage}>
        {tutorial.image ? (
          <img
            src={tutorial.image}
            alt={tutorial.title}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        ) : (
          <div className={styles.imagePlaceholder}>📚</div>
        )}
      </div>
      <div className={styles.tutorialContent}>
        <h3 className={styles.tutorialTitle}>{tutorial.title}</h3>
        <p className={styles.tutorialDescription}>{tutorial.description}</p>
        <span className={styles.tutorialButton}>{buttonLabel}</span>
      </div>
      <div className={styles.tutorialProgressBar}></div>
    </Link>
  );
}
