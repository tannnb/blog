export default {
  base:'/docs/',
  dest: './dist',
  // outDir: '../dist',
  lang: 'zh-CN',
  title: '蜗牛实验室',
  description: '日常学习记录以及其他',
  markdown:{
    linkify: false
  },
  head:[
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.ico' }],
    ['link', { rel: 'mask-icon', href: '/favicon.ico', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/favicon.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  themeConfig: {
    siteTitle: "蜗牛实验室",
    logo: "/logo.png",
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
    toggleSidebar: '切换侧边栏',

    search: {
      provider: 'local'
    },
    nav: [
      { text: '导航', link: '/nav', activeMatch: '^/nav' },
      { text: "学习记录", link: "/record/" },
      { text: "工具包", link: "/toolKit/css" },
      {
        text: "更多",
        items: [
          {
            items: [
              { text: "npm", link: "/npm/" },
              { text: "git", link: "/git/" },
              { text: "webpack", link: "/webpack/" },
              { text: "typescript", link: "/typescript/base_index" },
            ],
          },
          {
            items: [
              { text: "深入理解ES6", link: "/es6/" },
              { text: "你不知道的js(上)", link: "/es6/know_top" },
              { text: "你不知道的js(中)", link: "/es6/know_in" },
              { text: "数据结构与算法", link: "/es6/algorithm" },
            ],
          },
        ],
      }
    ],
    sidebar: {
      "/record/": [
        {
          text: "基础知识整理",
          items: [
            { text: "原型链", link: "/record/" },
            { text: "闭包", link: "/record/base_closure" },
            { text: "数据类型和存储差别", link: "/record/base_type" },
            { text: "全等区别", link: "/record/base_equal" },
            { text: "typeof与instanceof", link: "/record/base_typeof" },
            { text: "this指向解析", link: "/record/base_this" },
            { text: "new操作符", link: "/record/base_new" },
            { text: "什么是类", link: "/record/base_class" },
            { text: "事件循环", link: "/record/base_eventloop" },
            { text: "深拷贝/浅拷贝", link: "/record/base_copy" },
          ],
        },
        {
          text: "仿写",
          collapsed:true,
          items: [
            { text: "常用方法",  link: "/record/writing_method"},
            { text: "tree",  link: "/record/writing_tree"},
            { text: "柯里化",  link: "/record/writing_curry"},
            { text: "promise",  link: "/record/writing_promise"},
            { text: "observer",  link: "/record/writing_observer"},
            { text: "subscribe",  link: "/record/writing_subscribe"},


          ],
        },
      ],
      "/toolKit/":[
        { text: "常用css", link: "/toolKit/css" },
      ],
      '/webpack/':[
        {
          text: "webpack5",
          items: [
            { text: "前置概念", link: "/webpack/" },
            { text: "初始化", link: "/webpack/init" },
            { text: "配置", link: "/webpack/config" },
          ],
        },
        {
          text: "自定义",
          collapsed:true,
          items: [
            { text: "loader", link: "/webpack/loader" },
            { text: "plugin", link: "/webpack/plugin" },
          ],
        },
      ],
      '/typescript/':[
        {
          text: "Typescripyt",
          items: [
            { text: "概念", link: "/typescript/base_index" },
            { text: "类型", link: "/typescript/base_type" },
            { text: "函数", link: "/typescript/base_function" },
            { text: "类", link: "/typescript/base_class" },
            { text: "接口", link: "/typescript/base_interface" },
            { text: "泛型", link: "/typescript/base_generics" },
          ],
        },
        {
          text: "最佳实践",
          collapsed:true,
          items: [
            { text: "函数式组件", link: "/typescript/practice_index" },
            { text: "hooks", link: "/typescript/practice_hook" },
            { text: "interface", link: "/typescript/practice_interface" },
            { text: "props", link: "/typescript/practice_props" },
          ],
        },
      ]
    },
    socialLinks:[
      { icon: "github", link: "https://github.com/tannnb" },
    ],
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    outline: {
      level: 'deep',
      label: '本页目录'
    },
    footer: {
      copyright: 'Copyright © 2019-present tannnb'
    },
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',
    cleanUrls: true,
  },
}
