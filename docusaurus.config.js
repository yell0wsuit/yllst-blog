// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Blog page",
    tagline: "Website updates and random stuff.",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://blog.yell0wsuit.page",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",
    trailingSlash: false,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "yell0wsuit", // Usually your GitHub org/user name.
    projectName: "yllst-blog", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: false,
                blog: {
                    routeBasePath: "/",
                    showReadingTime: true,
                    blogSidebarTitle: "All posts",
                    blogSidebarCount: "ALL",
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                    onUntruncatedBlogPosts: "ignore",
                    /*editUrl:
                        "https://github.com/yell0wsuit/yllst-blog/",*/
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "yell0wsuit's blog",
                logo: {
                    alt: "yell0wsuit logo",
                    src: "img/favicon.svg",
                },
                items: [
                    { to: "/", label: "Blog", position: "left" },
                    {
                        href: "https://yell0wsuit.page",
                        label: "Homepage",
                        position: "left",
                    },
                ],
            },
            footer: {
                links: [
                    {
                        title: "Main links",
                        items: [
                            {
                                label: "Homepage",
                                to: "https://yell0wsuit.page",
                            },
                            {
                                label: "HTML5 games",
                                to: "https://yell0wsuit.page/games/",
                            },
                            {
                                label: "English learning tools",
                                to: "https://yell0wsuit.page/english/",
                            },
                            {
                                label: "Blog",
                                to: "https://blog.yell0wsuit.page",
                            },
                            {
                                label: "About",
                                to: "https://yell0wsuit.page/about/",
                            },
                        ],
                    },
                    {
                        title: "Social links",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/yell0wsuit",
                            },
                            {
                                label: "Soundcloud",
                                href: "https://soundcloud.com/yell0wsuit",
                            },
                            {
                                label: "Steam",
                                href: "https://steamcommunity.com/id/yell0wsuit",
                            },
                        ],
                    },
                ],
                copyright: `© yell0wsuit. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
            colorMode: {
                defaultMode: "light",
                respectPrefersColorScheme: true,
            },
        }),
};

export default config;
