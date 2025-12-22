// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SleakOps Documentation",
  tagline: "SleakOps Documentation",
  url: "https://docs.sleakops.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
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
          routeBasePath: "/",
          sidebarCollapsible: true,
          sidebarCollapsed: true,
        },
        blog: {},
        pages: {
          routeBasePath: "/pages",
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
        alt: "SleakOps",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "localeDropdown",
          position: "left",
        },
        {
          href: "https://console.sleakops.com",
          label: "Console",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/",
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
