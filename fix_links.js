#!/usr/bin/env node
/**
 * Fixes broken links in Spanish documentation.
 *
 * Issues fixed:
 * 1. Links like `/cluster/*` → `/docs/cluster/*` (add /docs prefix)
 * 2. Links ending in `/index` or `/index.mdx` → remove index
 * 3. Links with `.mdx` extension → remove extension
 * 4. Relative links like `./extra_templates` in wrong context
 *
 * Usage: node fix_links.js
 */

const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const DIRS_TO_PROCESS = [
  path.join(ROOT, "content/docs/es"),
  path.join(ROOT, "content/tutorials/es"),
  path.join(ROOT, "content/tutorials/en"),
];

// Patterns to fix in order
const LINK_PATTERNS = [
  // 1. Add /docs prefix to bare section links (for tutorials that still have old format)
  {
    regex:
      /\]\(\/(cluster|project|provider|environment|domain|user|network|cli|connect_to_git|quickstart)([^)]*)\)/g,
    replacement: "](/docs/$1$2)",
  },
  // 2. Remove /index.mdx from links
  {
    regex: /\/index\.mdx\)/g,
    replacement: ")",
  },
  // 3. Remove /index from links (but keep the path)
  {
    regex: /\/index\)/g,
    replacement: ")",
  },
  // 4. Remove .mdx extension from links
  {
    regex: /\.mdx\)/g,
    replacement: ")",
  },
  // 5. Remove .mdx# pattern (for anchors)
  {
    regex: /\.mdx#/g,
    replacement: "#",
  },
];

let totalFilesProcessed = 0;
let totalLinksFixed = 0;

/**
 * Process a single file
 */
function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");
  let originalContent = content;
  let linksFixed = 0;

  for (const pattern of LINK_PATTERNS) {
    const matches = content.match(pattern.regex);
    if (matches) {
      linksFixed += matches.length;
    }
    content = content.replace(pattern.regex, pattern.replacement);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(
      `  ✓ ${path.relative(ROOT, filePath)}: ${linksFixed} links fixed`
    );
    totalLinksFixed += linksFixed;
    return true;
  }
  return false;
}

/**
 * Process all files in a directory recursively
 */
function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`  Directory not found: ${dir}`);
    return;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.name.endsWith(".mdx") || entry.name.endsWith(".md")) {
      if (processFile(fullPath)) {
        totalFilesProcessed++;
      }
    }
  }
}

function main() {
  console.log("🔗 Fixing broken links...\n");

  for (const dir of DIRS_TO_PROCESS) {
    console.log(`Processing: ${path.relative(ROOT, dir)}/`);
    processDirectory(dir);
    console.log("");
  }

  console.log(
    `✅ Done! Fixed ${totalLinksFixed} links in ${totalFilesProcessed} files.`
  );
}

main();
