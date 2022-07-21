import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    imgUrl: "/img/dashboard.png",
    description: (
      <>
        Crea y monitorea toda la infra de tus aplicaciones escalables a traves de nuestra plataforma.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by Craftech',
    imgUrl: "/img/clusters.png",
    description: (
      <>
        Sleakops nace como consecuencia de la experiencia de Craftech, una empresa orientada a dar servicios de DevOps
      </>
    ),
  },
];

function Feature({Svg, imgUrl, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg && (<Svg className={styles.featureSvg} role="img" />)}
        {imgUrl && (<img src={imgUrl} />)}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
