const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

/**
 * Plugin that reads changelog markdown files and exposes the latest N entries
 * via Docusaurus globalData for use in the landing page component.
 */
module.exports = function pluginChangelogRecent(context, options) {
  const { count = 3 } = options;

  return {
    name: "changelog-recent",

    async loadContent() {
      const changelogDir = path.join(context.siteDir, "changelog");

      if (!fs.existsSync(changelogDir)) {
        return [];
      }

      const files = fs
        .readdirSync(changelogDir)
        .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

      const entries = files.map((file) => {
        const raw = fs.readFileSync(path.join(changelogDir, file), "utf-8");
        const { data: frontmatter, content } = matter(raw);

        // Parse sections from content
        const sections = parseSections(content);

        // Extract date: prefer frontmatter, fallback to filename (YYYY-MM-DD prefix)
        let date = "";
        if (frontmatter.date) {
          date = new Date(frontmatter.date).toISOString().split("T")[0];
        } else {
          const dateMatch = file.match(/^(\d{4}-\d{2}-\d{2})/);
          if (dateMatch) {
            date = dateMatch[1];
          }
        }

        // Build slug matching Docusaurus blog URL format: YYYY/MM/DD/slug
        // e.g. "2026-02-23-version-2.6.0.md" → "2026/02/23/version-2.6.0"
        let slug = frontmatter.slug || "";
        if (!slug) {
          const dateMatch = file.match(/^(\d{4})-(\d{2})-(\d{2})-(.*?)\.mdx?$/);
          if (dateMatch) {
            const [, y, m, d, name] = dateMatch;
            slug = `${y}/${m}/${d}/${name}`;
          } else {
            slug = file.replace(/\.mdx?$/, "");
          }
        }

        return {
          title: frontmatter.title || "",
          date,
          slug,
          tags: frontmatter.tags || [],
          sections,
        };
      });

      // Sort by date descending and take the latest N
      entries.sort((a, b) => b.date.localeCompare(a.date));
      return entries.slice(0, count);
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData({ recentChangelogs: content });
    },
  };
};

/**
 * Parse markdown content into categorized sections with their items.
 * Supports two formats:
 *
 * Format A (legacy):
 *   ## New Features
 *   - **Title:** Description
 *
 * Format B (new template):
 *   🚀 New Features
 *   Title · Area
 *   Description text.
 */
function parseSections(content) {
  const sections = [];
  const lines = content.split("\n");

  let currentSection = null;
  let pendingTitle = null; // Format B: title line waiting for its description

  for (const line of lines) {
    // Empty line: flush any pending title without description
    if (!line.trim()) {
      pendingTitle = null;
      continue;
    }

    // --- Section heading detection ---

    // Format A: ## headings (e.g., "## New Features", "## 🚀 New Features")
    const headingMatch = line.match(/^#{2,3}\s+\**(.+?)\**[:]*\s*$/);
    if (headingMatch) {
      pendingTitle = null;
      const heading = cleanHeading(headingMatch[1].trim());
      if (/^version\s/i.test(heading)) continue;
      currentSection = { heading, type: categorizeSection(heading), items: [] };
      sections.push(currentSection);
      continue;
    }

    // Format A: bold-line sections (e.g., "**🚀 New Features:**")
    const boldSectionMatch = line.match(/^\*\*(.+?)\*\*[:]*\s*$/);
    if (boldSectionMatch) {
      pendingTitle = null;
      const heading = cleanHeading(boldSectionMatch[1].trim());
      if (categorizeSection(heading) !== "improved" || /feature|fix|bug/i.test(heading)) {
        currentSection = { heading, type: categorizeSection(heading), items: [] };
        sections.push(currentSection);
        continue;
      }
    }

    // Format B: bare emoji section heading (e.g., "🚀 New Features", "🐛 Bug Fixes")
    const emojiHeadingMatch = line.match(/^[\p{Emoji_Presentation}]\s+(.+)/u);
    if (emojiHeadingMatch) {
      pendingTitle = null;
      const heading = cleanHeading(line.trim());
      const type = categorizeSection(heading);
      if (type !== "improved" || /feature|fix|bug|improv|new/i.test(heading)) {
        currentSection = { heading, type, items: [] };
        sections.push(currentSection);
        continue;
      }
    }

    // Skip admonition markers and import/MDX lines
    if (line.startsWith(":::") || line.startsWith("import ")) continue;

    // --- Item detection (only inside a section) ---
    if (currentSection) {
      // Format A: "- **Title:** Description" or "- **Title** Description"
      const boldItemMatch = line.match(/^-\s+\*\*(.+?)\*\*[:.]?\s*(.*)/);
      if (boldItemMatch) {
        pendingTitle = null;
        currentSection.items.push({
          title: boldItemMatch[1].trim(),
          description: boldItemMatch[2].trim(),
        });
        continue;
      }

      // Format A: "- Plain text description"
      const plainItemMatch = line.match(/^-\s+(.+)/);
      if (plainItemMatch) {
        pendingTitle = null;
        const text = plainItemMatch[1].trim();
        const colonIdx = text.indexOf(":");
        if (colonIdx > 0 && colonIdx < 60) {
          currentSection.items.push({
            title: text.substring(0, colonIdx).trim(),
            description: text.substring(colonIdx + 1).trim(),
          });
        } else {
          currentSection.items.push({ title: text, description: "" });
        }
        continue;
      }

      // Format B: "Title · Area" — store as pending title
      if (line.includes("·") && !line.startsWith("#") && !line.startsWith("*")) {
        pendingTitle = line.split("·")[0].trim();
        continue;
      }

      // Format B: description line following a pending title
      if (pendingTitle && !line.startsWith("#") && !line.startsWith("*") && !line.startsWith("-")) {
        currentSection.items.push({ title: pendingTitle, description: line.trim() });
        pendingTitle = null;
        continue;
      }
    }
  }

  return sections;
}

/**
 * Remove emoji prefixes from headings for clean display.
 */
function cleanHeading(heading) {
  return heading.replace(/^[\p{Emoji}\p{Emoji_Presentation}\uFE0F\u200D]+\s*/u, "").trim();
}

function categorizeSection(heading) {
  const lower = heading.toLowerCase();
  if (lower.includes("bug") || lower.includes("fix") || lower.includes("correc")) return "fixed";
  if (lower.includes("new") || lower.includes("feature") || lower.includes("added") || lower.includes("nueva") || lower.includes("funcionalidad")) return "added";
  return "improved";
}
