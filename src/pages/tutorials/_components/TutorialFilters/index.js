import React from "react";
import { TagList, Tags } from "@site/src/data/tutorials";
import styles from "../../styles.module.css";

function TagButton({ tag, isSelected, onToggle }) {
  const tagConfig = Tags[tag];
  if (!tagConfig) return null;

  // Don't show 'featured' in the filter buttons
  if (tag === "featured") return null;

  return (
    <button
      className={`${styles.filterTag} ${
        isSelected ? styles.filterTagSelected : ""
      }`}
      onClick={() => onToggle(tag)}
      title={tagConfig.description}
    >
      <span
        className={styles.tagColor}
        style={{ backgroundColor: isSelected ? "#fff" : tagConfig.color }}
      />
      {tagConfig.label}
    </button>
  );
}

export default function TutorialFilters({
  selectedTags,
  onTagToggle,
  onClearFilters,
}) {
  const hasFilters = selectedTags.length > 0;

  return (
    <div className={styles.filtersSection}>
      {TagList.map((tag) => (
        <TagButton
          key={tag}
          tag={tag}
          isSelected={selectedTags.includes(tag)}
          onToggle={onTagToggle}
        />
      ))}
      {hasFilters && (
        <button className={styles.clearButton} onClick={onClearFilters}>
          ✕ Limpiar filtros
        </button>
      )}
    </div>
  );
}
