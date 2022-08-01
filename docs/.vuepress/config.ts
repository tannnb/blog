import { defineUserConfig } from '@vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { shikiPlugin } from '@vuepress/plugin-shiki'

import { head, navbar, sidebar } from './configs'

const isProduction = process.env.NODE_ENV === 'production'

// 兼容 GitHub Pages 和 vercel 部署
const base = process.env.BUILD_ENV
  ? (process.env.BUILD_ENV as `/${string}/`)
  : '/'

export default defineUserConfig({
  base: '/blog/',
  dest: './dist',
  bundler: isProduction ? webpackBundler() : viteBundler(),
  lang: 'zh-CN',
  title: '菜鸟实验室',
  description: '日常学习记录以及其他',
  head,
  theme: defaultTheme({
    logo: '/hero.png',
    repo: 'https://github.com/tannnb',
    navbar,
    sidebar,
    lastUpdatedText: '上次更新',
    editLinkText: '在 GitHub 上编辑此页',
    contributorsText: '贡献者',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    contributors: false,
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接'
    ],
    backToHome: '返回首页',
    openInNewWindow: '在新窗口打开',
    toggleColorMode: '切换颜色模式',
    toggleSidebar: '切换侧边栏'
  }),
  plugins: [
    docsearchPlugin({
      appId: 'UVB82VCF2Y',
      apiKey: '4c67197afadb283c77e084bd50618c60',
      indexName: '',
      locales: {
        '/': {
          placeholder: '搜索',
          translations: {
            button: {
              buttonText: '搜索',
              buttonAriaLabel: '搜索'
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消'
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除'
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接'
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者'
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈'
              }
            }
          }
        }
      }
    }),
    pwaPlugin(),
    pwaPopupPlugin({
      locales: {
        '/': {
          message: '发现新内容可用',
          buttonText: '刷新'
        }
      }
    }),
    isProduction ? googleAnalyticsPlugin({ id: 'UA-153242456-1' }) : [],
    isProduction ? shikiPlugin({ theme: 'dark-plus' }) : []
  ]
})
