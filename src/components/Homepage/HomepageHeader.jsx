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
              <Translate id="header.hero.title">
                Lift your ideas to the Cloud
              </Translate>
              <br />
              <Translate id="header.hero.title.line2">
                Leave the Journey to Us
              </Translate>
            </h1>
            <p className={styles.heroSubtitle}>
              <Translate id="header.hero.subtitle">
                Empowering your business with scalable, secure, and efficient
                infrastructure solutions.
              </Translate>
            </p>
          </div>
          <div className={styles.buttons}>
            <Link className={styles.primaryButton} to="/docs">
              <Translate id="header.hero.button.documentation">
                Documentation
              </Translate>
            </Link>
            <Link className={styles.secondaryButton} to="/changelog">
              <Translate id="header.hero.button.changelog">Changelog</Translate>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
