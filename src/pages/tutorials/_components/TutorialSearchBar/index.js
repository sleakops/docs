import React from "react";
import styles from "../../styles.module.css";

export default function TutorialSearchBar({ value, onChange }) {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="🔍 Buscar tutoriales..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search tutorials"
      />
    </div>
  );
}
