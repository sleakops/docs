#!/usr/bin/env node
/**
 * Cleans up frontmatter in MDX/MD files to remove empty values that would cause
 * Docusaurus validation errors.
 *
 * This script:
 * - Removes `image: ''` (empty image fields)
 * - Removes `sidebar_label: ''` (empty sidebar labels)
 * - Removes `sidebar_position: null` (null positions)
 * - Removes `title: ''` inside author objects
 * - Removes `tags: []` (empty tags arrays)
 * - Removes `pagination_prev: ''` (empty pagination)
 * - Removes `pagination_next: ''` (empty pagination)
 *
 * Usage: node clean_frontmatter.js
 */

const fs = require("fs");
const path = require("path");

// Directories to process
const DIRS_TO_CLEAN = [
  path.join(__dirname, "content/tutorials/en"),
  path.join(__dirname, "content/tutorials/es"),
  path.join(__dirname, "content/changelog/en"),
  path.join(__dirname, "content/changelog/es"),
  path.join(__dirname, "content/docs/en"),
  path.join(__dirname, "content/docs/es"),
];

/**
 * Clean frontmatter by removing invalid empty fields
 * @param {string} content - The file content
 * @returns {string} - Cleaned content
 */
function cleanFrontmatter(content) {
  // Match the frontmatter section
  const frontmatterMatch = content.match(/^(---\s*\n)([\s\S]*?)(\n---)/);

  if (!frontmatterMatch) {
    return content;
  }

  const beforeFm = frontmatterMatch[1];
  let frontmatter = frontmatterMatch[2];
  const afterFm = frontmatterMatch[3];
  const restOfFile = content.slice(frontmatterMatch[0].length);

  // Remove problematic empty fields
  // Remove `image: ''` or `image: ""`
  frontmatter = frontmatter.replace(/^image:\s*['"]?['"]?\s*$/gm, "");

  // Remove `sidebar_label: ''` or `sidebar_label: ""`
  frontmatter = frontmatter.replace(/^sidebar_label:\s*['"]?['"]?\s*$/gm, "");

  // Remove `sidebar_position: null`
  frontmatter = frontmatter.replace(/^sidebar_position:\s*null\s*$/gm, "");

  // Remove `title: ''` lines (inside author objects) - careful with indentation
  frontmatter = frontmatter.replace(/^\s+title:\s*['"]?['"]?\s*$/gm, "");

  // Remove `tags: []` (empty tags array)
  frontmatter = frontmatter.replace(/^tags:\s*\[\]\s*$/gm, "");

  // Remove `pagination_prev: ''` or `pagination_prev: ""`
  frontmatter = frontmatter.replace(/^pagination_prev:\s*['"]?['"]?\s*$/gm, "");

  // Remove `pagination_next: ''` or `pagination_next: ""`
  frontmatter = frontmatter.replace(/^pagination_next:\s*['"]?['"]?\s*$/gm, "");

  // Remove any resulting empty lines in the frontmatter
  frontmatter = frontmatter
    .split("\n")
    .filter((line) => line.trim() !== "")
    .join("\n");

  return beforeFm + frontmatter + afterFm + restOfFile;
}

/**
 * Process all MDX files in a directory
 * @param {string} dir - Directory path
 */
function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`  Directory not found: ${dir}`);
    return;
  }

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith(".mdx") || file.endsWith(".md")) {
      const original = fs.readFileSync(filePath, "utf-8");
      const cleaned = cleanFrontmatter(original);

      if (original !== cleaned) {
        fs.writeFileSync(filePath, cleaned);
        console.log(`  ✓ Cleaned: ${file}`);
      }
    }
  }
}

function main() {
  console.log("🧹 Cleaning frontmatter in MDX/MD files...");

  for (const dir of DIRS_TO_CLEAN) {
    console.log(`\nProcessing: ${dir}`);
    processDirectory(dir);
  }

  console.log("\n✅ Frontmatter cleanup complete!");
}

main();
