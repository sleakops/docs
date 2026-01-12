// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SleakOps Documentation",
  tagline: "SleakOps Documentation",
  url: "https://docs.sleakops.com",
  baseUrl: process.env.BASE_URL || "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  markdown: {
    mermaid: true,
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
        postsPerPage: 10,
        sortPosts: "descending",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "tutorials",
        path: "tutorials",
        routeBasePath: "tutorial",
        sidebarPath: require.resolve("./sidebars-tutorials.js"),
        editUrl: undefined,
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
