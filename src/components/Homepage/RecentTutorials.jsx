import React from 'react';
import Link from '@docusaurus/Link';
import styles from './RecentTutorials.module.css';

const recentTutorials = [
  {
    title: 'Esto es un Tutorial',
    description: 'Esta es la descripcion muy larga de un tutorial muy largo',
    image: '/img/tutorial-img.png',
    link: '/docs',
  },
  {
    title: 'Esto es un Tutorial',
    description: 'Esta es la descripcion muy larga de un tutorial muy largo',
    image: '/img/tutorial-img.png',
    link: '/docs',
  },
  {
    title: 'Esto es un Tutorial',
    description: 'Esta es la descripcion muy larga de un tutorial muy largo',
    image: '/img/tutorial-img.png',
    link: '/docs',
  },
];

export default function RecentTutorials() {
  return (
    <section className={styles.recentTutorials}>
      <div className='container'>
        <div className={styles.tutorialsHeader}>
          <h2 className={styles.tutorialsTitle}>Recent Tutorials</h2>
          <Link to='/tutorials' className={styles.viewMoreLink}>
            View more tutorials
          </Link>
        </div>
        <div className={styles.tutorialsGrid}>
          {recentTutorials.map((tutorial, idx) => (
            <Link key={idx} to={tutorial.link} className={styles.tutorialCard}>
              <div className={styles.tutorialImage}>
                <img src={tutorial.image} alt={tutorial.title} />
              </div>
              <div className={styles.tutorialContent}>
                <h3 className={styles.tutorialTitle}>{tutorial.title}</h3>
                <p className={styles.tutorialDescription}>
                  {tutorial.description}
                </p>
                <button className={styles.tutorialButton}>View Tutorial</button>
              </div>
              <div className={styles.tutorialProgressBar}></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
