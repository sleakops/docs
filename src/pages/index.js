import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {
  // Navbar,
  HomepageHeader,
  RecentTutorials,
} from '../components/Homepage';

import styles from './index.module.css';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <RecentTutorials />
      </main>
    </Layout>
  );
}
