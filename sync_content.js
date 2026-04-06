#!/usr/bin/env node
/**
 * Synchronizes content from the CMS-friendly structure to Docusaurus i18n structure
 * using symlinks, so that Docusaurus hot reload works during development.
 *
 * CMS structure (multiple_folders - Sveltia CMS compatible):
 *   content/docs/en/...
 *   content/docs/es/...
 *   content/tutorials/en/...
 *   content/tutorials/es/...
 *
 * Docusaurus structure (what Docusaurus expects):
 *   docs/                                                       -> content/docs/en
 *   i18n/es/docusaurus-plugin-content-docs/current/            -> content/docs/es
 *   tutorials/                                                  -> content/tutorials/en
 *   i18n/es/docusaurus-plugin-content-docs-tutorials/current/  -> content/tutorials/es
 *   changelog/                                                  -> content/changelog/en
 *   i18n/es/docusaurus-plugin-content-blog-changelog/          -> content/changelog/es
 *
 * Run this before starting the site.
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
 * Create a symlink from dest pointing to src.
 * Removes any existing file, directory, or symlink at dest first.
 */
function createSymlink(src, dest) {
  const srcAbs = path.resolve(ROOT, src);
  const destAbs = path.resolve(ROOT, dest);

  if (!fs.existsSync(srcAbs)) {
    console.log(`  ⏭️  Skipping (source not found): ${src}`);
    return;
  }

  // Remove existing dest (dir, file, or broken symlink)
  try {
    fs.lstatSync(destAbs); // throws if nothing exists
    fs.rmSync(destAbs, { recursive: true, force: true });
  } catch (_) {
    // dest doesn't exist, nothing to remove
  }

  // Ensure parent directory exists
  fs.mkdirSync(path.dirname(destAbs), { recursive: true });

  fs.symlinkSync(srcAbs, destAbs, "dir");
  console.log(`  ✓ ${dest} → ${src}`);
}

/**
 * Sync tutorial images from content/tutorials/[slug]/ to static/img/tutorials/[slug]/
 * This handles images uploaded by the CMS which creates folders like content/tutorials/install-keda/
 */
function syncTutorialImages() {
  const tutorialsDir = path.join(ROOT, "content/tutorials");
  const staticImgDir = path.join(ROOT, "static/img/tutorials");

  if (!fs.existsSync(tutorialsDir)) {
    return { count: 0, synced: [] };
  }

  const entries = fs.readdirSync(tutorialsDir, { withFileTypes: true });
  let count = 0;
  const synced = [];

  for (const entry of entries) {
    // Skip language folders (en, es) and non-directories
    if (!entry.isDirectory() || ["en", "es"].includes(entry.name)) {
      continue;
    }

    const srcDir = path.join(tutorialsDir, entry.name);
    const destDir = path.join(staticImgDir, entry.name);

    // Check if the source folder contains any image files
    const srcContents = fs.readdirSync(srcDir, { withFileTypes: true });
    const imageFiles = srcContents.filter(
      (f) => f.isFile() && /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(f.name),
    );

    if (imageFiles.length > 0) {
      // Create destination directory
      fs.mkdirSync(destDir, { recursive: true });

      // Copy image files
      for (const imgFile of imageFiles) {
        const srcPath = path.join(srcDir, imgFile.name);
        const destPath = path.join(destDir, imgFile.name);
        fs.copyFileSync(srcPath, destPath);
        count++;
        synced.push({
          from: path.relative(ROOT, srcPath),
          to: path.relative(ROOT, destPath),
        });
      }
    }
  }

  return { count, synced };
}

function main() {
  console.log(
    "🔗 Linking content from CMS structure to Docusaurus structure...\n",
  );

  for (const mapping of SYNC_MAP) {
    createSymlink(mapping.source, mapping.dest);
  }

  // Sync tutorial images from CMS folders to static/img/tutorials
  console.log("\n🖼️  Syncing tutorial images...");
  const imgStats = syncTutorialImages();
  if (imgStats.count > 0) {
    console.log(`  ✓ Synced ${imgStats.count} tutorial image(s):`);
    for (const item of imgStats.synced) {
      console.log(`     ${item.from} → ${item.to}`);
    }
  } else {
    console.log("  ℹ️  No new tutorial images to sync");
  }

  console.log("\n✅ Content sync complete!");
}

main();
