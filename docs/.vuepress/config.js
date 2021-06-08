module.exports = {
    base: '/blog/',
    title: 'TanBing的开发笔记',
    description: 'TanBing的开发笔记',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'TanBing的开发笔记',
            description: 'TanBing的开发笔记'
        }
    },
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#3eaf7c'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: '/favicon.ico'}],
        ['link', {rel: 'mask-icon', href: '/favicon.ico', color: '#3eaf7c'}],
        ['meta', {name: 'msapplication-TileImage', content: '/favicon.ico'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
    ],
    themeConfig: {
        repo: 'https://github.com/tannnb',
        repoLabel: 'Github',
        nav: [
            {
                text: '前端学习',
                link: '/interview/'
            },
            {
                text: '学习记录',
                items: [
                    {
                        text: 'CSS系列',
                        items: [
                            {
                                text: '常用CSS样式',
                                link: '/style/css/'
                            }
                        ]
                    },
                    {
                        text: 'JavaScript系列',
                        items: [
                            {
                                text: '你不知道的JavaScript(上)',
                                link: '/javascript/es6/'
                            },
                            {
                                text: '常用方法',
                                link: '/javascript/utils/'
                            }
                        ]
                    },
                    {
                        text: '可视化系列',
                        items: [
                            {
                                text: 'three.js',
                                link: '/visual/three/'
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
                                link: '/nodejs/npm/'
                            }
                        ]
                    }
                ]
            },
            {text: '播放器', link: 'http://music.tannnb.com/'},
        ],
        lastUpdated: '最后更新时间',
        editLinks: false,
        editLinkText: '编辑此页',
        sidebar: 'auto',
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
