// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

//const lightCodeTheme = require('prism-react-renderer/themes/github');
//const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Business Central AddOns by Fusion5 Limited - Transformation Partners',
  tagline: 'Extensions for Microsoft Dynamics 365 Business Central.',
  favicon: 'img/favicon.ico',
  trailingSlash: true,

  // Set the production url of your site here
  url: 'https://topaz-gitadmin.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Manual/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Topaz-gitadmin', // Usually your GitHub org/user name.
  projectName: 'Manual', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Business Central AddOns by Fusion5 Limited - Transformation Partners',
        logo: {
          alt: 'Fusion5 Limited',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://www.fusion5.com.au/',
            label: 'Fusion5 Australia',
            position: 'right',
          },
          {
            href: 'https://www.fusion5.co.nz/',
            label: 'Fusion5 New Zealand',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',/*
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
        ],*/
        copyright: `© ${new Date().getFullYear()} Fusion5 Ltd., Site built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.github, //lightCodeTheme,
        darkTheme: prismThemes.dracula, //darkCodeTheme,
      },
    }),
};

module.exports = config;
