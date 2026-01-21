import React from "react";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import styles from "./HomepageHeader.module.css";

export default function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <Translate id="homepage.hero.title">
                Lift your ideas to the
              </Translate>{" "}
              <span className={styles.highlight}>Cloud</span>
              <br />
              <Translate id="homepage.hero.title.line2">
                Leave the Journey to Us
              </Translate>
            </h1>
            <p className={styles.heroSubtitle}>
              <Translate id="homepage.hero.subtitle">
                Empowering your business with scalable, secure, and efficient
                infrastructure solutions.
              </Translate>
            </p>
          </div>

          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <span className={styles.ctaLabel}>
                <Translate id="homepage.hero.cta.label">GET STARTED</Translate>
              </span>
              <span className={styles.ctaQuestion}>
                <Translate id="homepage.hero.cta.question">
                  Starting from scratch in SleakOps?
                </Translate>
              </span>
            </div>
            <Link className={styles.ctaButton} to="/docs">
              <Translate id="homepage.hero.cta.button">Start here</Translate>
              <span className={styles.ctaArrow}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
