// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const isPreview = process.env.BASE_URL && process.env.BASE_URL !== "/";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SleakOps Documentation",
  tagline: "SleakOps Documentation",
  url: "https://docs.sleakops.com",
  baseUrl: process.env.BASE_URL || "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  organizationName: "Craftech",
  projectName: "Sleakops",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    path: "i18n",
    localeConfigs: {
      en: {
        htmlLang: "en",
        label: "English",
      },
      es: {
        htmlLang: "es",
        label: "Español",
      },
    },
  },

  // Eliminamos el tema easyops-cn/docusaurus-search-local
  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        debug: false,
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/docs",
          sidebarCollapsible: true,
          sidebarCollapsed: true,
          editUrl: isPreview
            ? (/** @type {{ docPath: string }} */ { docPath }) => {
                // Map document paths to their corresponding CMS collections
                // docPath format: "cluster/addons/example.mdx" or "index.mdx"

                // Remove the file extension to get the slug
                const slug = docPath.replace(/\.mdx?$/, "");

                // Extract the path segments
                const pathSegments = docPath.split("/");

                // Determine the collection based on the path structure
                let collection = "docs-root"; // Default for root-level files

                if (pathSegments.length >= 2) {
                  const firstSegment = pathSegments[0];
                  const secondSegment = pathSegments[1];

                  // Check for nested collections (e.g., cluster/addons, project/build)
                  if (
                    pathSegments.length >= 3 &&
                    secondSegment !== pathSegments[pathSegments.length - 1]
                  ) {
                    collection = `docs-${firstSegment}-${secondSegment}`;
                  } else {
                    // Single-level collections (e.g., cluster, domain, environment)
                    collection = `docs-${firstSegment}`;
                  }
                }

                // Build the complete CMS URL with /entries/ and the slug
                return `https://docs.sleakops.com/preview-docs/admin/#/collections/${collection}/entries/${slug}`;
              }
            : undefined,
        },
        blog: {},
        pages: {
          routeBasePath: "/",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
        googleAnalytics: {
          trackingID: "UA-128497858-1",
          anonymizeIP: true,
        },
      },
    ],
  ],

  // Configuración del plugin docusaurus-lunr-search
  plugins: [
    // Prevent webpack from resolving symlinks to their real paths.
    // Required because content dirs (docs/, changelog/, i18n/) are symlinks
    // pointing to content/. Without this, webpack uses the real path while
    // the blog/docs plugin uses the symlink path, making blog post metadata
    // undefined at render time.
    function symlinkWebpackPlugin() {
      return {
        name: "symlink-webpack-plugin",
        configureWebpack() {
          return { resolve: { symlinks: false } };
        },
      };
    },
    [
      require.resolve("docusaurus-lunr-search"),
      {
        languages: ["en", "es"],
        indexBaseUrl: true,
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "changelog",
        routeBasePath: "changelog",
        path: "./changelog",
        blogTitle: "Changelog",
        blogDescription: "SleakOps Changelog - Latest updates and releases",
        blogSidebarTitle: "Recent Updates",
        blogSidebarCount: "ALL",
        showReadingTime: false,
        postsPerPage: 5,
        sortPosts: "descending",
        onUntruncatedBlogPosts: "ignore",
        editUrl: isPreview
          ? "https://docs.sleakops.com/preview-docs/admin/#/collections/changelog"
          : undefined,
      },
    ],
    [
      require.resolve("./plugins/changelog-recent"),
      {
        count: 3,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "tutorials",
        path: "tutorials",
        routeBasePath: "tutorial",
        sidebarPath: require.resolve("./sidebars-tutorials.js"),
        editUrl: isPreview
          ? "https://docs.sleakops.com/preview-docs/admin/#/collections/tutorials"
          : undefined,
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "SleakOps",
      logo: {
        alt: "SleakOps2",
        src: "img/logo2.svg",
      },
      items: [
        {
          label: "Home",
          to: "/",
          position: "left",
          activeBaseRegex: "^/$",
        },
        {
          label: "Docs",
          to: "/docs",
          position: "left",
        },
        {
          label: "Tutorials",
          to: "/tutorials",
          position: "left",
        },
        {
          label: "Changelog",
          to: "/changelog",
          position: "left",
        },

        {
          href: "https://console.sleakops.com",
          label: "Console",
          position: "right",
        },
        {
          href: "https://sleakops.com/blog/",
          label: "Blog",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/tutorials",
            },
            {
              label: "About us",
              href: "https://sleakops.com/",
            },
            {
              label: "Contact us",
              href: "https://sleakops.com/contact",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Terms & Conditions",
              href: "https://craftech.notion.site/Terms-Conditions-efb8d9a980654625af456732ed44b197",
            },
            {
              label: "Privacy Policy",
              href: "https://craftech.notion.site/Privacy-Policy-of-SleakOps-55b977da50d84871809879d065b16b3b",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SleakOps.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
