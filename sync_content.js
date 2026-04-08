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

/**
 * Fix relative image paths in doc MDX files.
 *
 * The CMS generates co-located image references using either:
 *   - `../slug/image.png`  (English files)
 *   - `slug/image.png`     (Spanish/translated files)
 *
 * Both forms break when Docusaurus resolves them through symlinks.
 * This function normalises them to `./slug/image.png`.
 */
function fixDocImagePaths() {
  const locales = ["en", "es"];
  let fixedCount = 0;
  const fixed = [];

  for (const locale of locales) {
    const docsDir = path.join(ROOT, "content/docs", locale);
    if (!fs.existsSync(docsDir)) continue;

    const files = fs.readdirSync(docsDir, { withFileTypes: true });
    const mdxFiles = files.filter(
      (f) => f.isFile() && /\.mdx?$/i.test(f.name),
    );

    for (const mdxFile of mdxFiles) {
      const filePath = path.join(docsDir, mdxFile.name);
      const content = fs.readFileSync(filePath, "utf-8");

      // Normalise image paths: ../slug/img.png or slug/img.png → ./slug/img.png
      // Matches markdown images whose URL is a relative path (no protocol, not starting with ./ or /)
      const newContent = content.replace(
        /(\!\[[^\]]*\]\()(?:\.\.\/)?([a-zA-Z0-9_-]+\/[^\s)"]*?\.(?:png|jpg|jpeg|gif|webp|svg))/gi,
        (match, prefix, rest) => {
          const fixed = `${prefix}./${rest}`;
          return fixed === match ? match : fixed;
        },
      );

      if (newContent !== content) {
        const changes = newContent.split("\n").filter((line, i) => line !== content.split("\n")[i]).length;
        fs.writeFileSync(filePath, newContent, "utf-8");
        fixedCount += changes;
        fixed.push({
          file: path.relative(ROOT, filePath),
          changes,
        });
      }
    }
  }

  return { count: fixedCount, fixed };
}

/**
 * Copy co-located image folders from the default locale (en) to other locales.
 *
 * When authors add images via the CMS, the image folder is only created under
 * `content/docs/en/<slug>/`.  Translated docs reference the same images but
 * `content/docs/es/<slug>/` doesn't exist, so the build fails.
 *
 * This copies missing image folders from en → other locales.
 */
function syncDocImages() {
  const IMAGE_RE = /\.(png|jpg|jpeg|gif|webp|svg)$/i;
  const srcLocale = "en";
  const otherLocales = ["es"];
  const srcDir = path.join(ROOT, "content/docs", srcLocale);
  let count = 0;
  const synced = [];

  if (!fs.existsSync(srcDir)) return { count: 0, synced: [] };

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const srcImgDir = path.join(srcDir, entry.name);
    const imageFiles = fs.readdirSync(srcImgDir, { withFileTypes: true })
      .filter((f) => f.isFile() && IMAGE_RE.test(f.name));

    if (imageFiles.length === 0) continue;

    for (const locale of otherLocales) {
      const destImgDir = path.join(ROOT, "content/docs", locale, entry.name);

      // Check if the locale has a matching MDX that references these images
      const mdxPath = path.join(ROOT, "content/docs", locale, `${entry.name}.mdx`);
      if (!fs.existsSync(mdxPath)) continue;

      fs.mkdirSync(destImgDir, { recursive: true });

      for (const imgFile of imageFiles) {
        const srcPath = path.join(srcImgDir, imgFile.name);
        const destPath = path.join(destImgDir, imgFile.name);
        fs.copyFileSync(srcPath, destPath);
        count++;
      }

      synced.push({
        from: path.relative(ROOT, srcImgDir),
        to: path.relative(ROOT, destImgDir),
        images: imageFiles.length,
      });
    }
  }

  return { count, synced };
}

function main() {
  // Fix relative image paths generated by the CMS (must run before symlinking)
  console.log("🖼️  Fixing doc image paths...");
  const pathStats = fixDocImagePaths();
  if (pathStats.count > 0) {
    console.log(`  ✓ Fixed ${pathStats.count} image path(s):`);
    for (const item of pathStats.fixed) {
      console.log(`     ${item.file} (${item.changes} path(s))`);
    }
  } else {
    console.log("  ℹ️  No doc image paths to fix");
  }

  // Copy co-located image folders from en to other locales
  console.log("\n🖼️  Syncing doc images across locales...");
  const docImgStats = syncDocImages();
  if (docImgStats.count > 0) {
    console.log(`  ✓ Copied ${docImgStats.count} image(s):`);
    for (const item of docImgStats.synced) {
      console.log(`     ${item.from} → ${item.to} (${item.images} image(s))`);
    }
  } else {
    console.log("  ℹ️  No doc images to sync across locales");
  }

  console.log(
    "\n🔗 Linking content from CMS structure to Docusaurus structure...\n",
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
