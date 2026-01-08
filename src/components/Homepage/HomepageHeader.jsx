import React from 'react';
// import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from '../../pages/index.module.css';

export default function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className='container'>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className='hero__title'>
              Lift your ideas to the Cloud
              <br />
              Leave the Journey to Us
            </h1>
            <p className='hero__subtitle'>
              Empowering your business with scalable, secure, and efficient
              infrastructure solutions.
            </p>
          </div>
          <div className={styles.buttons}>
            <Link className='button button--secondary button--lg' to='/docs'>
              Documentation
            </Link>
            <Link
              className='button button--outline button--secondary button--lg'
              to='/docs/changelog'
            >
              Changelog
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
