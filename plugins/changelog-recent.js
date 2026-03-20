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
 * Supports multiple formats:
 *   - ## New Features / ## Bug Fixes (standard)
 *   - ## **Version X.X.X** (bold headings, skipped)
 *   - **🚀 New Features:** / **🐞 Bug Fixes:** (bold-line sections)
 *   - ## Nuevas Funcionalidades (Spanish)
 */
function parseSections(content) {
  const sections = [];
  const lines = content.split("\n");

  let currentSection = null;

  for (const line of lines) {
    // Match ## headings (e.g., "## New Features", "## Bug Fixes:")
    const headingMatch = line.match(/^#{2,3}\s+\**(.+?)\**[:]*\s*$/);
    if (headingMatch) {
      const heading = cleanHeading(headingMatch[1].trim());
      // Skip version title headings (e.g., "Version 2.4.0")
      if (/^version\s/i.test(heading)) continue;
      currentSection = {
        heading,
        type: categorizeSection(heading),
        items: [],
      };
      sections.push(currentSection);
      continue;
    }

    // Match bold-line sections (e.g., "**🚀 New Features:**")
    const boldSectionMatch = line.match(/^\*\*(.+?)\*\*[:]*\s*$/);
    if (boldSectionMatch) {
      const heading = cleanHeading(boldSectionMatch[1].trim());
      if (categorizeSection(heading) !== "improved" || /feature|fix|bug/i.test(heading)) {
        currentSection = {
          heading,
          type: categorizeSection(heading),
          items: [],
        };
        sections.push(currentSection);
        continue;
      }
    }

    // Match list items
    if (currentSection) {
      // Format: "- **Title:** Description" or "- **Title** Description"
      const boldItemMatch = line.match(/^-\s+\*\*(.+?)\*\*[:.]?\s*(.*)/);
      if (boldItemMatch) {
        currentSection.items.push({
          title: boldItemMatch[1].trim(),
          description: boldItemMatch[2].trim(),
        });
        continue;
      }
      // Format: "- Plain text description" (no bold)
      const plainItemMatch = line.match(/^-\s+(.+)/);
      if (plainItemMatch) {
        const text = plainItemMatch[1].trim();
        // Try to split on first colon
        const colonIdx = text.indexOf(":");
        if (colonIdx > 0 && colonIdx < 60) {
          currentSection.items.push({
            title: text.substring(0, colonIdx).trim(),
            description: text.substring(colonIdx + 1).trim(),
          });
        } else {
          currentSection.items.push({
            title: text,
            description: "",
          });
        }
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
