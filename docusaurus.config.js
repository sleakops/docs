// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SleakOps Documentation",
  tagline: "SleakOps Documentation",
  url: "https://docs.sleakops.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Craftech", // Usually your GitHub org/user name.
  projectName: "Sleakops", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    path: 'i18n',
    localeConfigs: {
      en: {
        htmlLang: 'en',
        label: 'English',
        // path: '/'
      },
      es: {
        htmlLang: 'es',
        label: 'Español',
        // path: 'es',
      },
    }
  },

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // https://github.com/easyops-cn/docusaurus-search-local#theme-options
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "es"],
        // ```
      },
    ],
  ],

  presets: [
    [
      "classic",
      {
        // Debug defaults to true in dev, false in prod
        debug: true,
        // Will be passed to @docusaurus/theme-classic.
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
        // Will be passed to @docusaurus/plugin-content-docs (false to disable)
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: "/",
          sidebarCollapsible: true,
          sidebarCollapsed: true,
          // path: "docs", // Path to data on filesystem, relative to site dir.
          // editLocalizedFiles: true,
          // editUrl: ({locale, docPath}) => {
          //   if (locale === 'es') {
          //     return `https://github.com/your-repo/edit/main/i18n/es/docusaurus-plugin-content-docs/current/${docPath}`;
          //   }
          //   return `https://github.com/your-repo/edit/main/docs/${docPath}`;
          // },
        },
        // Will be passed to @docusaurus/plugin-content-blog (false to disable)
        blog: {},
        // Will be passed to @docusaurus/plugin-content-pages (false to disable)
        pages: {
          routeBasePath: "/pages",
        },
        // Will be passed to @docusaurus/plugin-content-sitemap (false to disable)
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
        // Will be passed to @docusaurus/plugin-google-gtag (only enabled when explicitly specified)
        // gtag: {},
        // Will be passed to @docusaurus/plugin-google-analytics (only enabled when explicitly specified)
        googleAnalytics: {
          trackingID: "UA-128497858-1",
          anonymizeIP: true,
        },
      },
    ],
  ],
  // plugins: ['content-docs', ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'docs',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'localeDropdown',
            position: 'left',
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
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/sleakops',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/sleakops',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/sleakops',
          //     },
          //   ],
          // },
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
    }),
};

module.exports = config;
