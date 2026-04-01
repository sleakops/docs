#!/usr/bin/env node
/**
 * Cleans up frontmatter in MDX/MD files to remove empty values that would cause
 * Docusaurus validation errors.
 *
 * This script:
 * - Removes `image: ''` (empty image fields)
 * - Removes `sidebar_label: ''` (empty sidebar labels)
 * - Replaces `sidebar_position: null` with the file's alphabetical index in its directory
 * - Removes `title: ''` inside author objects
 * - Removes `tags: []` (empty tags arrays)
 * - Removes `pagination_prev: ''` (empty pagination)
 * - Removes `pagination_next: ''` (empty pagination)
 *
 * Usage: node clean_frontmatter.js
 */

const fs = require("fs");
const path = require("path");

// Directories to process.
// reverse: true sorts files descending so newest entries get the lowest
// sidebar_position (appear first). Used for changelog where higher versions
// should appear at the top of the sidebar.
const DIRS_TO_CLEAN = [
  { dir: path.join(__dirname, "content/tutorials/en"), reverse: false },
  { dir: path.join(__dirname, "content/tutorials/es"), reverse: false },
  { dir: path.join(__dirname, "content/changelog/en"), reverse: true },
  { dir: path.join(__dirname, "content/changelog/es"), reverse: true },
  { dir: path.join(__dirname, "content/docs/en"), reverse: false },
  { dir: path.join(__dirname, "content/docs/es"), reverse: false },
];

/**
 * Clean frontmatter by removing invalid empty fields.
 * If sidebar_position is null, it is replaced with filePosition (1-based index
 * of the file sorted alphabetically within its directory).
 * @param {string} content - The file content
 * @param {number} filePosition - 1-based position of this file in its directory
 * @returns {string} - Cleaned content
 */
function cleanFrontmatter(content, filePosition) {
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

  // If sidebar_position is null or missing, assign the file's alphabetical
  // position within its directory. If already set to a valid number, keep it.
  if (/^sidebar_position:\s*null\s*$/m.test(frontmatter)) {
    frontmatter = frontmatter.replace(
      /^sidebar_position:\s*null\s*$/gm,
      `sidebar_position: ${filePosition}`,
    );
  } else if (!/^sidebar_position:/m.test(frontmatter)) {
    frontmatter += `\nsidebar_position: ${filePosition}`;
  }

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
 * Process all MDX files in a directory.
 * @param {string} dir - Directory path
 * @param {boolean} reverse - If true, sort files descending so newest/highest
 *   entries get position 1 (used for changelog).
 */
function processDirectory(dir, reverse = false) {
  if (!fs.existsSync(dir)) {
    console.log(`  Directory not found: ${dir}`);
    return;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  // Recurse into subdirectories (inherit the same sort order)
  for (const entry of entries) {
    if (entry.isDirectory()) {
      processDirectory(path.join(dir, entry.name), reverse);
    }
  }

  // Collect and sort md/mdx files to assign stable positions
  const mdFiles = entries
    .filter((e) => e.isFile() && (e.name.endsWith(".mdx") || e.name.endsWith(".md")))
    .map((e) => e.name)
    .sort();

  if (reverse) mdFiles.reverse();

  mdFiles.forEach((file, index) => {
    const filePath = path.join(dir, file);
    const original = fs.readFileSync(filePath, "utf-8");
    const cleaned = cleanFrontmatter(original, index + 1);

    if (original !== cleaned) {
      fs.writeFileSync(filePath, cleaned);
      console.log(`  ✓ Cleaned: ${file}`);
    }
  });
}

function main() {
  console.log("🧹 Cleaning frontmatter in MDX/MD files...");

  for (const { dir, reverse } of DIRS_TO_CLEAN) {
    console.log(`\nProcessing: ${dir}`);
    processDirectory(dir, reverse);
  }

  console.log("\n✅ Frontmatter cleanup complete!");
}

main();
