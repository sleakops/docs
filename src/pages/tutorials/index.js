import React, { useState, useMemo } from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate, { translate } from "@docusaurus/Translate";
import TutorialCard from "@site/src/components/TutorialCard";
import {
  TagList,
  Tags,
  getTutorialsList,
  getTutorialLink,
} from "@site/src/data/tutorials";
import TutorialFilters from "./_components/TutorialFilters";
import TutorialSearchBar from "./_components/TutorialSearchBar";
import styles from "./styles.module.css";

function ShowcaseHeader() {
  return (
    <div className={styles.showcaseHeader}>
      <h1 className={styles.showcaseTitle}>
        <Translate id="tutorials.title">📚 Tutorials</Translate>
      </h1>
      <p className={styles.showcaseDescription}>
        <Translate id="tutorials.description">
          Explore our tutorials to learn how to deploy and manage your
          applications with SleakOps
        </Translate>
      </p>
    </div>
  );
}

function NoResults() {
  return (
    <div className={styles.noResults}>
      <div className={styles.noResultsIcon}>🔍</div>
      <p className={styles.noResultsText}>
        <Translate id="tutorials.noResults">
          No tutorials found with the selected filters.
        </Translate>
      </p>
    </div>
  );
}

export default function TutorialsPage() {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();

  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Translated labels
  const searchPlaceholder = translate({
    id: "tutorials.searchPlaceholder",
    message: "🔍 Search tutorials...",
  });

  const featuredTitle = translate({
    id: "tutorials.featured",
    message: "⭐ Featured",
  });

  const allTutorialsTitle = translate({
    id: "tutorials.allTutorials",
    message: "📖 All Tutorials",
  });

  const viewTutorialLabel = translate({
    id: "tutorials.viewTutorial",
    message: "View Tutorial",
  });

  // Transform tutorials to include link
  const tutorialsList = getTutorialsList(currentLocale);
  const tutorials = useMemo(() => {
    return tutorialsList.map((t) => ({
      ...t,
      link: getTutorialLink(t.id),
    }));
  }, [tutorialsList]);

  // Handle tag toggle
  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedTags([]);
    setSearchQuery("");
  };

  // Filter tutorials based on selected tags and search query
  const filteredTutorials = useMemo(() => {
    return tutorials.filter((tutorial) => {
      const tutorialTags = tutorial.tags || [];

      // Filter by tags (if any selected)
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => tutorialTags.includes(tag));

      // Filter by search query
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === "" ||
        tutorial.title.toLowerCase().includes(searchLower) ||
        tutorial.description.toLowerCase().includes(searchLower);

      return matchesTags && matchesSearch;
    });
  }, [tutorials, selectedTags, searchQuery]);

  // Separate featured and regular tutorials
  const featuredTutorials = useMemo(
    () => filteredTutorials.filter((t) => t.tags?.includes("featured")),
    [filteredTutorials],
  );

  // All tutorials for the "All" section
  const allTutorials = filteredTutorials;

  const isFiltered = selectedTags.length > 0 || searchQuery !== "";

  return (
    <Layout
      title={translate({ id: "tutorials.pageTitle", message: "Tutorials" })}
      description={translate({
        id: "tutorials.pageDescription",
        message: "SleakOps tutorials to learn how to deploy your applications",
      })}
    >
      <main className="container margin-vert--lg">
        <ShowcaseHeader />
        <TutorialSearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder={searchPlaceholder}
        />
        <TutorialFilters
          selectedTags={selectedTags}
          onTagToggle={handleTagToggle}
          onClearFilters={handleClearFilters}
        />

        {filteredTutorials.length === 0 ? (
          <NoResults />
        ) : isFiltered ? (
          <div className={styles.cardGrid}>
            {filteredTutorials.map((tutorial, idx) => (
              <TutorialCard
                key={tutorial.id}
                tutorial={tutorial}
                animationDelay={idx * 0.05}
                buttonLabel={viewTutorialLabel}
              />
            ))}
          </div>
        ) : (
          <>
            {featuredTutorials.length > 0 && (
              <div className={styles.featuredSection}>
                <h2 className={styles.sectionHeading}>{featuredTitle}</h2>
                <div className={styles.cardGrid}>
                  {featuredTutorials.map((tutorial, idx) => (
                    <TutorialCard
                      key={tutorial.id}
                      tutorial={tutorial}
                      animationDelay={idx * 0.1}
                      buttonLabel={viewTutorialLabel}
                    />
                  ))}
                </div>
              </div>
            )}
            {allTutorials.length > 0 && (
              <div>
                <h2 className={styles.sectionHeading}>{allTutorialsTitle}</h2>
                <div className={styles.cardGrid}>
                  {allTutorials.map((tutorial, idx) => (
                    <TutorialCard
                      key={tutorial.id}
                      tutorial={tutorial}
                      animationDelay={idx * 0.05}
                      buttonLabel={viewTutorialLabel}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </Layout>
  );
}
