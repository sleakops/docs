import React from 'react';
import Link from '@docusaurus/Link';
import styles from './HomepageHeader.module.css';

export default function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className='container'>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Lift your ideas to the Cloud
              <br />
              Leave the Journey to Us
            </h1>
            <p className={styles.heroSubtitle}>
              Empowering your business with scalable, secure, and efficient
              infrastructure solutions.
            </p>
          </div>
          <div className={styles.buttons}>
            <Link className={styles.primaryButton} to='/docs'>
              Documentation
            </Link>
            <Link className={styles.secondaryButton} to='/changelog'>
              Changelog
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
