#!/usr/bin/env node
/**
 * Generates tutorials-generated.json from MDX files in the tutorials folder.
 * This file is used by the tutorials showcase page to display all tutorials.
 * Usage: node generate_tutorials.js
 */

const fs = require("fs");
const path = require("path");

// Configuration
const CONTENT_DIR = path.join(__dirname, "content", "tutorials");
const LOCALES = ["en", "es"];
const OUTPUT_FILE = path.join(
  __dirname,
  "src",
  "data",
  "tutorials-generated.json",
);

/**
 * Parse YAML frontmatter from MDX content.
 * @param {string} content - The MDX file content
 * @returns {Object} - Parsed frontmatter as an object
 */
function parseFrontmatter(content) {
  const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);

  if (!frontmatterMatch) {
    return {};
  }

  const frontmatter = {};
  const lines = frontmatterMatch[1].split("\n");
  let currentKey = null;
  let inArray = false;
  let arrayValues = [];

  for (const line of lines) {
    // Check for array items (lines starting with -)
    if (inArray && line.trim().startsWith("-")) {
      let value = line.trim().slice(1).trim();
      // Remove quotes if present
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      arrayValues.push(value);
      continue;
    }

    // If we were in an array and hit a non-array line, save the array
    if (inArray && currentKey) {
      frontmatter[currentKey] = arrayValues;
      inArray = false;
      arrayValues = [];
    }

    // Check for key: value pairs
    const keyMatch = line.match(/^(\w+):\s*(.*)$/);
    if (keyMatch) {
      const key = keyMatch[1];
      let value = keyMatch[2].trim();
      currentKey = key;

      if (value === "" || value === "[]") {
        // This might be the start of an array or empty value
        if (value === "[]") {
          frontmatter[key] = [];
        } else {
          inArray = true;
          arrayValues = [];
        }
      } else {
        // Clean up the value (remove quotes)
        if (
          (value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))
        ) {
          value = value.slice(1, -1);
        }

        // Handle null values
        if (value.toLowerCase() === "null") {
          value = null;
        }

        frontmatter[key] = value;
      }
    }
  }

  // Don't forget the last array if we ended in one
  if (inArray && currentKey) {
    frontmatter[currentKey] = arrayValues;
  }

  return frontmatter;
}

/**
 * Get all MDX files in a specific directory.
 * @param {string} dir - The directory to scan
 * @returns {Array} - Array of file info objects
 */
function getMdxFiles(dir) {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = [];
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    if (path.extname(entry) === ".mdx") {
      files.push({
        filename: entry,
        id: path.basename(entry, ".mdx"),
        path: path.join(dir, entry),
      });
    }
  }

  return files;
}

/**
 * Process a single tutorial MDX file.
 * @param {Object} fileInfo - File information object
 * @returns {Object} - Processed tutorial data
 */
function processTutorial(fileInfo) {
  const content = fs.readFileSync(fileInfo.path, "utf-8");
  const frontmatter = parseFrontmatter(content);

  // Parse sidebar_position as int if present
  let sidebarPosition = frontmatter.sidebar_position;
  if (
    sidebarPosition !== undefined &&
    sidebarPosition !== "" &&
    sidebarPosition !== null
  ) {
    const parsed = parseInt(sidebarPosition, 10);
    sidebarPosition = isNaN(parsed) ? null : parsed;
  } else {
    sidebarPosition = null;
  }

  // Process image path
  let imagePath = frontmatter.image || null;
  if (imagePath && imagePath.startsWith("../")) {
    const filename = path.basename(imagePath);
    const slug = path.basename(path.dirname(imagePath));
    imagePath = `/img/tutorials/${slug}/${filename}`;
  }

  return {
    id: fileInfo.id,
    title: frontmatter.title || fileInfo.id,
    description: frontmatter.description || "",
    tags: frontmatter.tags || [],
    image: imagePath,
    sidebar_position: sidebarPosition,
  };
}

/**
 * Main function to generate tutorials JSON.
 */
function main() {
  console.log("📚 Generating tutorials data...");
  const tutorialsByLocale = {};

  for (const locale of LOCALES) {
    const localeDir = path.join(CONTENT_DIR, locale);
    console.log(`Checking ${locale} tutorials in ${localeDir}`);

    const mdxFiles = getMdxFiles(localeDir);
    console.log(`Found ${mdxFiles.length} tutorial files for ${locale}`);

    const tutorials = mdxFiles.map(processTutorial);

    // Sort by sidebar_position first, then by title
    tutorials.sort((a, b) => {
      const posA = a.sidebar_position !== null ? a.sidebar_position : 9999;
      const posB = b.sidebar_position !== null ? b.sidebar_position : 9999;

      if (posA !== posB) {
        return posA - posB;
      }

      return a.title.localeCompare(b.title);
    });

    tutorialsByLocale[locale] = tutorials;
  }

  // Ensure output directory exists
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Write the JSON file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(tutorialsByLocale, null, 2));
  console.log(`✅ Generated ${OUTPUT_FILE}`);
}

main();
