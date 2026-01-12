import React from 'react';
import Layout from '@theme/Layout';
import { HomepageHeader, RecentTutorials } from '../components/Homepage';

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <RecentTutorials />
      </main>
    </Layout>
  );
}
