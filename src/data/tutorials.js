/**
 * Tutorials Configuration
 *
 * Tags configuration for the tutorials showcase.
 * The actual tutorials are read from MDX files in /tutorials directory.
 *
 * To add a new tag:
 * 1. Add the tag key to the TagList array
 * 2. Add the tag configuration to the Tags object
 */

// Available tags - Add new tags here
export const TagList = ["featured", "nextjs", "node", "php", "database"];

// Tag configurations with labels, descriptions, and colors
export const Tags = {
  featured: {
    label: "⭐ Featured",
    description: "Our recommended tutorials for getting started",
    color: "#f59e0b",
  },
  nextjs: {
    label: "Next.js",
    description: "Tutorials related to Next.js framework",
    color: "#000000",
  },
  node: {
    label: "Node.js",
    description: "Tutorials related to Node.js runtime",
    color: "#339933",
  },
  php: {
    label: "PHP",
    description: "Tutorials related to PHP development",
    color: "#777BB4",
  },
  database: {
    label: "Database",
    description:
      "Tutorials related to databases (MySQL, PostgreSQL, MongoDB, etc.)",
    color: "#336791",
  },
};
