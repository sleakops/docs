import React from "react";
import Layout from "@theme/Layout";
import {
  HomepageHeader,
  RecentTutorials,
  RecentChangelog,
} from "../components/Homepage";

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <RecentTutorials />
        <RecentChangelog />
      </main>
    </Layout>
  );
}
