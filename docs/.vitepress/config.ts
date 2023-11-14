
import { defineConfig } from 'vitepress'

import { head, nav, sidebar, algolia } from './configs'

export default defineConfig({
  outDir: '../dist',
  base: '/docs/',
  lang: 'zh-CN',
  title: '知识小铺',
  description: 'fe成长之路，包含前端常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav,
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录'
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/tannnb' }],

    footer: {
      message: '如有转载或 CV 的请标注本站原文地址',
      copyright: 'Copyright © 2019-present tannnb'
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    /* Algolia DocSearch 配置 */
    algolia,

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
