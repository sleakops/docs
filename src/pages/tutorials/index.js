import React, { useState, useMemo } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { usePluginData } from "@docusaurus/useGlobalData";
import { TagList, Tags } from "@site/src/data/tutorials";
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

function TutorialCard({ tutorial }) {
  // Get tags from frontmatter, handle both array and undefined
  const tutorialTags = tutorial.frontMatter?.tags || [];

  return (
    <li className={styles.cardItem}>
      <div className={styles.card}>
        {tutorial.frontMatter?.image ? (
          <img
            src={tutorial.frontMatter.image}
            alt={tutorial.title}
            className={styles.cardImage}
            loading="lazy"
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        ) : (
          <div className={styles.cardImagePlaceholder}>📚</div>
        )}
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{tutorial.title}</h3>
          <p className={styles.cardDescription}>
            {tutorial.frontMatter?.description || tutorial.description || ""}
          </p>
          <div className={styles.cardTags}>
            {tutorialTags
              .filter((tag) => tag !== "featured" && Tags[tag])
              .map((tag) => (
                <span key={tag} className={styles.cardTag}>
                  <span
                    className={styles.cardTagDot}
                    style={{ backgroundColor: Tags[tag]?.color }}
                  />
                  {Tags[tag]?.label}
                </span>
              ))}
          </div>
          <Link to={tutorial.permalink} className={styles.cardLink}>
            Ver tutorial →
          </Link>
        </div>
      </div>
    </li>
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

  // Get tutorials from the docs plugin
  let allDocs = [];
  try {
    const pluginData = usePluginData(
      "docusaurus-plugin-content-docs",
      "tutorials"
    );
    allDocs = pluginData?.versions?.[0]?.docs || [];
  } catch (e) {
    console.warn("Could not load tutorials data:", e);
  }

  // Filter out the index page and get actual tutorials
  const tutorials = useMemo(() => {
    return allDocs.filter((doc) => doc.id !== "index");
  }, [allDocs]);

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
      const tutorialTags = tutorial.frontMatter?.tags || [];

      // Filter by tags (if any selected)
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => tutorialTags.includes(tag));

      // Filter by search query
      const matchesSearch =
        searchQuery === "" ||
        tutorial.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tutorial.frontMatter?.description
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase());

      return matchesTags && matchesSearch;
    });
  }, [tutorials, selectedTags, searchQuery]);

  // Separate featured and regular tutorials
  const featuredTutorials = useMemo(
    () =>
      filteredTutorials.filter((t) =>
        t.frontMatter?.tags?.includes("featured")
      ),
    [filteredTutorials]
  );

  const regularTutorials = useMemo(
    () =>
      filteredTutorials.filter(
        (t) => !t.frontMatter?.tags?.includes("featured")
      ),
    [filteredTutorials]
  );

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
          <ul className={styles.cardList}>
            {filteredTutorials.map((tutorial) => (
              <TutorialCard key={tutorial.id} tutorial={tutorial} />
            ))}
          </ul>
        ) : (
          <>
            {featuredTutorials.length > 0 && (
              <div className={styles.featuredSection}>
                <h2 className={styles.sectionHeading}>⭐ Destacados</h2>
                <ul className={styles.cardList}>
                  {featuredTutorials.map((tutorial) => (
                    <TutorialCard key={tutorial.id} tutorial={tutorial} />
                  ))}
                </ul>
              </div>
            )}
            {regularTutorials.length > 0 && (
              <div>
                <h2 className={styles.sectionHeading}>
                  📖 Todos los tutoriales
                </h2>
                <ul className={styles.cardList}>
                  {regularTutorials.map((tutorial) => (
                    <TutorialCard key={tutorial.id} tutorial={tutorial} />
                  ))}
                </ul>
              </div>
            )}
          </>
        )}
      </main>
    </Layout>
  );
}
