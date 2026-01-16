#!/usr/bin/env node
/**
 * Synchronizes content from the CMS-friendly structure to Docusaurus i18n structure.
 *
 * CMS structure (multiple_folders - Sveltia CMS compatible):
 *   content/docs/en/...
 *   content/docs/es/...
 *   content/tutorials/en/...
 *   content/tutorials/es/...
 *
 * Docusaurus structure (what Docusaurus expects):
 *   docs/...                                                    (default locale = en)
 *   i18n/es/docusaurus-plugin-content-docs/current/...          (Spanish docs)
 *   tutorials/...                                               (default locale = en)
 *   i18n/es/docusaurus-plugin-content-docs-tutorials/current/... (Spanish tutorials)
 *
 * This script syncs content FROM the CMS structure TO the Docusaurus structure.
 * Run this before building the site.
 */

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;

// Mapping: source (CMS) -> destination (Docusaurus)
const SYNC_MAP = [
  {
    source: "content/docs/en",
    dest: "docs",
    description: "English docs",
  },
  {
    source: "content/docs/es",
    dest: "i18n/es/docusaurus-plugin-content-docs/current",
    description: "Spanish docs",
  },
  {
    source: "content/tutorials/en",
    dest: "tutorials",
    description: "English tutorials",
  },
  {
    source: "content/tutorials/es",
    dest: "i18n/es/docusaurus-plugin-content-docs-tutorials/current",
    description: "Spanish tutorials",
  },
  {
    source: "content/changelog/en",
    dest: "changelog",
    description: "English changelog",
  },
  {
    source: "content/changelog/es",
    dest: "i18n/es/docusaurus-plugin-content-blog-changelog",
    description: "Spanish changelog",
  },
];

/**
 * Recursively copy directory contents
 */
function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) {
    return 0;
  }

  // Create destination if it doesn't exist
  fs.mkdirSync(dest, { recursive: true });

  let count = 0;
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      count += copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      count++;
    }
  }

  return count;
}

/**
 * Remove directory contents (but keep the directory)
 */
function clearDirSync(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      fs.rmSync(fullPath, { recursive: true, force: true });
    } else {
      fs.unlinkSync(fullPath);
    }
  }
}

function main() {
  console.log(
    "🔄 Syncing content from CMS structure to Docusaurus structure...\n"
  );

  for (const mapping of SYNC_MAP) {
    const srcPath = path.join(ROOT, mapping.source);
    const destPath = path.join(ROOT, mapping.dest);

    if (!fs.existsSync(srcPath)) {
      console.log(`  ⏭️  Skipping ${mapping.description} (source not found)`);
      continue;
    }

    // Clear destination and copy fresh
    clearDirSync(destPath);
    const count = copyDirSync(srcPath, destPath);
    console.log(`  ✓ ${mapping.description}: ${count} files synced`);
  }

  console.log("\n✅ Content sync complete!");
}

main();
