import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/guide/': [
    {
      text: '基础知识',
      children: [
        '/guide/',
        '/guide/nsn_umber',
        '/guide/data_type',
        '/guide/isEqual',
        '/guide/typeof',
        '/guide/is_this',
        '/guide/is_new',
        '/guide/closure',
        '/guide/is_class',
        '/guide/is_eventLoop',
        '/guide/is_copy',
        '/guide/is_tree',
        '/guide/is_curry',
        '/guide/is_promise',
        '/guide/is_proxy',
        '/guide/is_subject',
      ],
    },
  ],
  '/style/': [
    {
      text: '记录',
      children: [{ text: '常用CSS', link: '/style' }],
    },
  ],
  '/typescript/': [
    {
      text: 'typescript基础',
      collapsible: true,
      link: '/typescript/base/',
      children: [
        '/typescript/base/',
        '/typescript/base/baseType',
        '/typescript/base/function',
        '/typescript/base/Class',
        '/typescript/base/interface',
        '/typescript/base/generics',
      ],
    },
    {
      text: '最佳实践',
      collapsible: true,
      link: '/typescript/practice/',
      children: [
        '/typescript/practice/',
        '/typescript/practice/hook',
        '/typescript/practice/interface',
        '/typescript/practice/props',
      ],
    },
    {
      text: '类型挑战',
      collapsible: true,
      link: '/typescript/typeChange/',
      children: ['/typescript/typeChange/'],
    },
  ],
  '/git/': [
    {
      text: 'git记录',
      children: [{ text: 'Git', link: '/git' }],
    },
  ],
  '/npm/': [
    {
      text: 'npm',
      children: [{ text: 'npm', link: '/npm' }],
    },
  ],
  '/webpack/': [
    {
      text: 'webpack学习记录',
      children: [
        { text: '前置概念', link: '/webpack/' },
        { text: '初始化webpack', link: '/webpack/initWebpack' },
        { text: '参数配置', link: '/webpack/config' },
        { text: '自定义Loader', link: '/webpack/loader' },
        { text: '自定义插件', link: '/webpack/plugin' },
      ],
    },
  ],
  '/javascript/': [
    {
      text:'深入理解ES6',
      collapsible: true,
      link: '/javascript/',
      children: ['/javascript'],
    },
    {
      text:'你不知道的javascript上',
      collapsible: true,
      link: '/javascript/know_top',
      children: ['/javascript/know_top'],
    },
    {
      text:'你不知道的javascript中',
      collapsible: true,
      link: '/javascript/know_in',
      children: ['/javascript/know_in'],
    },
    {
      text: '数据结构与算法',
      collapsible: true,
      link: '/javascript/algorithm',
      children: ['/javascript/algorithm'],
    },
  ],
}
