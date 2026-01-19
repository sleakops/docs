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
 * It also filters out temporary folders created by the CMS (hex IDs like 24ef675958d5).
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
 * Recursively copy directory contents, skipping CMS temp folders
 */
function copyDirSync(src, dest, skippedFolders = []) {
  if (!fs.existsSync(src)) {
    return { count: 0, skipped: skippedFolders };
  }

  // Create destination if it doesn't exist
  fs.mkdirSync(dest, { recursive: true });

  let count = 0;
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      // Skip CMS temporary folders
      if (isCmsTempFolder(entry.name)) {
        skippedFolders.push(path.relative(ROOT, srcPath));
        continue;
      }
      const result = copyDirSync(srcPath, destPath, skippedFolders);
      count += result.count;
    } else {
      fs.copyFileSync(srcPath, destPath);
      count++;
    }
  }

  return { count, skipped: skippedFolders };
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

  let totalSkipped = [];

  for (const mapping of SYNC_MAP) {
    const srcPath = path.join(ROOT, mapping.source);
    const destPath = path.join(ROOT, mapping.dest);

    if (!fs.existsSync(srcPath)) {
      console.log(`  ⏭️  Skipping ${mapping.description} (source not found)`);
      continue;
    }

    // Clear destination and copy fresh
    clearDirSync(destPath);
    const result = copyDirSync(srcPath, destPath, []);
    console.log(`  ✓ ${mapping.description}: ${result.count} files synced`);
    totalSkipped = totalSkipped.concat(result.skipped);
  }

  if (totalSkipped.length > 0) {
    console.log(`\n⚠️  Skipped ${totalSkipped.length} CMS temp folder(s):`);
    for (const folder of totalSkipped) {
      console.log(`     - ${folder}`);
    }
    console.log(
      "   (These are temporary folders created by the CMS. Consider removing them from the repo.)",
    );
  }

  console.log("\n✅ Content sync complete!");
}

main();
