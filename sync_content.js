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
 * It also handles CMS temporary folders (hex IDs like 24ef675958d5) by extracting
 * their contents to the parent directory.
 *
 * Run this before building the site.
 */

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;

// Regex to match CMS temporary folder names (12 hex characters)
const CMS_TEMP_FOLDER_REGEX = /^[0-9a-f]{12}$/i;

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
 * Check if a folder name looks like a CMS temporary ID
 */
function isCmsTempFolder(name) {
  return CMS_TEMP_FOLDER_REGEX.test(name);
}

/**
 * Recursively copy directory contents
 * If a folder is a CMS temp folder (hex ID), extract its contents to the parent dest
 */
function copyDirSync(src, dest, stats = { count: 0, flattened: [] }) {
  if (!fs.existsSync(src)) {
    return stats;
  }

  // Create destination if it doesn't exist
  fs.mkdirSync(dest, { recursive: true });

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // If this is a CMS temp folder, flatten it - copy contents to current dest
      if (isCmsTempFolder(entry.name)) {
        // Copy contents of temp folder directly to dest (flattening)
        const tempContents = fs.readdirSync(srcPath, { withFileTypes: true });
        for (const tempEntry of tempContents) {
          const tempSrcPath = path.join(srcPath, tempEntry.name);
          const flatDestPath = path.join(dest, tempEntry.name);

          if (tempEntry.isDirectory()) {
            copyDirSync(tempSrcPath, flatDestPath, stats);
          } else {
            fs.copyFileSync(tempSrcPath, flatDestPath);
            stats.count++;
            stats.flattened.push({
              from: path.relative(ROOT, tempSrcPath),
              to: path.relative(ROOT, flatDestPath),
            });
          }
        }
      } else {
        // Normal directory - recurse
        copyDirSync(srcPath, destPath, stats);
      }
    } else {
      fs.copyFileSync(srcPath, destPath);
      stats.count++;
    }
  }

  return stats;
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
    "🔄 Syncing content from CMS structure to Docusaurus structure...\n",
  );

  let allFlattened = [];

  for (const mapping of SYNC_MAP) {
    const srcPath = path.join(ROOT, mapping.source);
    const destPath = path.join(ROOT, mapping.dest);

    if (!fs.existsSync(srcPath)) {
      console.log(`  ⏭️  Skipping ${mapping.description} (source not found)`);
      continue;
    }

    // Clear destination and copy fresh
    clearDirSync(destPath);
    const stats = copyDirSync(srcPath, destPath, { count: 0, flattened: [] });
    console.log(`  ✓ ${mapping.description}: ${stats.count} files synced`);
    allFlattened = allFlattened.concat(stats.flattened);
  }

  if (allFlattened.length > 0) {
    console.log(
      `\n📦 Flattened ${allFlattened.length} file(s) from CMS temp folders:`,
    );
    for (const item of allFlattened) {
      console.log(`     ${item.from} → ${item.to}`);
    }
  }

  console.log("\n✅ Content sync complete!");
}

main();
