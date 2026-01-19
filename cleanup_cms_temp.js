#!/usr/bin/env node
/**
 * Cleans up temporary folders created by Sveltia CMS.
 *
 * When using Sveltia CMS with multiple_folders i18n structure,
 * the CMS sometimes creates folders with temporary hex IDs like:
 *   content/docs/en/24ef675958d5/
 *   content/docs/es/8c088a0d76ee/
 *
 * This script finds and removes these folders.
 * Usage: node cleanup_cms_temp.js [--dry-run]
 */

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const CONTENT_DIRS = [
  "content/docs/en",
  "content/docs/es",
  "content/tutorials/en",
  "content/tutorials/es",
];

// Regex to match CMS temporary folder names (12 hex characters)
const CMS_TEMP_FOLDER_REGEX = /^[0-9a-f]{12}$/i;

const isDryRun = process.argv.includes("--dry-run");

function findTempFolders(dir) {
  const tempFolders = [];

  if (!fs.existsSync(dir)) {
    return tempFolders;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isDirectory() && CMS_TEMP_FOLDER_REGEX.test(entry.name)) {
      tempFolders.push(path.join(dir, entry.name));
    }
  }

  return tempFolders;
}

function main() {
  console.log("🧹 Looking for CMS temporary folders...\n");

  if (isDryRun) {
    console.log("(Dry run mode - no files will be deleted)\n");
  }

  let allTempFolders = [];

  for (const contentDir of CONTENT_DIRS) {
    const fullPath = path.join(ROOT, contentDir);
    const tempFolders = findTempFolders(fullPath);
    allTempFolders = allTempFolders.concat(tempFolders);
  }

  if (allTempFolders.length === 0) {
    console.log("✅ No CMS temporary folders found!");
    return;
  }

  console.log(`Found ${allTempFolders.length} temporary folder(s):\n`);

  for (const folder of allTempFolders) {
    const relativePath = path.relative(ROOT, folder);

    if (isDryRun) {
      console.log(`  Would delete: ${relativePath}`);
    } else {
      fs.rmSync(folder, { recursive: true, force: true });
      console.log(`  ✓ Deleted: ${relativePath}`);
    }
  }

  if (!isDryRun) {
    console.log(
      `\n✅ Cleaned up ${allTempFolders.length} temporary folder(s)!`,
    );
    console.log("\nRemember to commit these deletions:");
    console.log(
      "  git add -A && git commit -m 'chore: remove CMS temp folders'",
    );
  }
}

main();
