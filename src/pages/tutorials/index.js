import React, { useState, useMemo } from "react";
import Layout from "@theme/Layout";
import TutorialCard from "@site/src/components/TutorialCard";
import {
  TagList,
  Tags,
  tutorialsList,
  getTutorialLink,
} from "@site/src/data/tutorials";
import TutorialFilters from "./_components/TutorialFilters";
import TutorialSearchBar from "./_components/TutorialSearchBar";
import styles from "./styles.module.css";

function ShowcaseHeader() {
  return (
    <div className={styles.showcaseHeader}>
      <h1 className={styles.showcaseTitle}>📚 Tutoriales</h1>
      <p className={styles.showcaseDescription}>
        Explora nuestros tutoriales para aprender a desplegar y manejar tus
        aplicaciones con SleakOps
      </p>
    </div>
  );
}

function NoResults() {
  return (
    <div className={styles.noResults}>
      <div className={styles.noResultsIcon}>🔍</div>
      <p className={styles.noResultsText}>
        No se encontraron tutoriales con los filtros seleccionados.
      </p>
    </div>
  );
}

export default function TutorialsPage() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Transform tutorials to include link
  const tutorials = useMemo(() => {
    return tutorialsList.map((t) => ({
      ...t,
      link: getTutorialLink(t.id),
    }));
  }, []);

  // Handle tag toggle
  const handleTagToggle = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
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
    [filteredTutorials]
  );

  // All tutorials for the "Todos" section
  const allTutorials = filteredTutorials;

  const isFiltered = selectedTags.length > 0 || searchQuery !== "";

  return (
    <Layout
      title="Tutoriales"
      description="Tutoriales de SleakOps para aprender a desplegar tus aplicaciones"
    >
      <main className="container margin-vert--lg">
        <ShowcaseHeader />
        <TutorialSearchBar value={searchQuery} onChange={setSearchQuery} />
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
              />
            ))}
          </div>
        ) : (
          <>
            {featuredTutorials.length > 0 && (
              <div className={styles.featuredSection}>
                <h2 className={styles.sectionHeading}>⭐ Destacados</h2>
                <div className={styles.cardGrid}>
                  {featuredTutorials.map((tutorial, idx) => (
                    <TutorialCard
                      key={tutorial.id}
                      tutorial={tutorial}
                      animationDelay={idx * 0.1}
                    />
                  ))}
                </div>
              </div>
            )}
            {allTutorials.length > 0 && (
              <div>
                <h2 className={styles.sectionHeading}>
                  📖 Todos los tutoriales
                </h2>
                <div className={styles.cardGrid}>
                  {allTutorials.map((tutorial, idx) => (
                    <TutorialCard
                      key={tutorial.id}
                      tutorial={tutorial}
                      animationDelay={idx * 0.05}
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
