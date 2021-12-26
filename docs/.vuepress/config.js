const nav = require('./utils/nav.js')
const {frameworkSidebar, interviewSideBar,webpackSideBar,typescriptSideBar} = nav
module.exports = {
    lang: 'zh-CN',
    base: '/blog/',
    title: '黑娃 ● 知识库',
    description: '知识库强，则技术强，技术强则国强',
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['link', {rel: 'apple-touch-icon', href: '/favicon.ico'}],
        ['link', {rel: 'mask-icon', href: '/favicon.ico', color: '#3eaf7c'}],
        ['link', {rel: 'dns-prefetch', href: 'https://tannnb.github.io/blog/'}],
        ['link', {rel: 'prerender', href: 'https://tannnb.github.io/blog/'}],
        ['meta', {name: 'msapplication-TileImage', content: '/favicon.ico'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ],
    markdown: {
        lineNumbers: true  // 是否启用代码块行号
    },
    themeConfig: {
        repo: 'https://github.com/tannnb',
        repoLabel: 'Github',
        nav: [
            {
                text: '前端学习',
                link: '/interview/base/'
            },
            {
                text: '学习记录',
                items: [
                    {
                        text: 'CSS系列',
                        items: [
                            {
                                text: '常用CSS样式',
                                link: '/style/'
                            }
                        ]
                    },
                    {
                        text: 'JavaScript系列',
                        items: [
                            {
                                text: '深入理解ES6',
                                link: '/javascript/es6'
                            },
                            {
                                text: '你不知道的JavaScript(上)',
                                link: '/javascript/know_top'
                            },
                            {
                                text: '你不知道的JavaScript(中)',
                                link: '/javascript/know_in'
                            },
                            {
                                text: 'JavaScript数据结构和算法',
                                link: '/javascript/algorithm'
                            },
                            {
                                text: '常用方法',
                                link: '/javascript/utils'
                            }
                        ]
                    },
                    {
                        text: 'typescript系列',
                        items: [
                            {
                                text: 'typescript',
                                link: '/typescript/base/'
                            }
                        ]
                    },
                    {
                        text: 'Git系列',
                        items: [
                            {
                                text: '精通Git',
                                link: '/git/'
                            }
                        ]
                    },
                    {
                        text: 'nodejs系列',
                        items: [
                            {
                                text: 'npm配置',
                                link: '/nodejs/npm'
                            }
                        ]
                    },
                    {
                        text: 'webpack系列',
                        items: [
                            {
                                text: 'webpack',
                                link: '/webpack/'
                            }
                        ]
                    }
                ]
            },
            {
                text: '脚手架学习',
                link: '/framework/'
            },
            {text: '播放器', link: 'http://www.tannnb.com/pc/'},
        ],
        lastUpdated: '最后更新时间',
        editLinks: false,
        editLinkText: '编辑此页',
        sidebar: {
            '/interview/': interviewSideBar,
            '/framework/': frameworkSidebar,
            '/webpack/':webpackSideBar,
            '/typescript/':typescriptSideBar,
        },
        searchMaxSuggestions: 10
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@images': '../images',
                '@vuepress': '../images/vuepress',
                '@components': '../.vuepress/components'
            }
        }
    },
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/nprogress',
        '@vuepress/active-header-links',
        '@vuepress/plugin-docsearch',
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    message: '发现新内容可用',
                    buttonText: '刷新'
                }
            }
        ],
        ['@vuepress/search', {searchMaxSuggestions: 10}]
    ]
}
