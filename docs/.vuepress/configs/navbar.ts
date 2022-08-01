import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
  { text: '日常记录', link: '/guide/' },
  {
    text: '记录',
    children: [
      { text: '常用CSS', link: '/style' },
      { text: 'Typescript', link: '/typescript/base' },
      { text: 'Git', link: '/git' },
      { text: 'npm配置', link: '/npm' },
      { text: 'webpack', link: '/webpack' },
      { text: 'javascript', children:[
        {text:'深入理解ES6', link: '/javascript/' },
        {text:'你不知道的javascript上', link: '/javascript/know_top' },
        {text:'你不知道的javascript中', link: '/javascript/know_in' },
        {text:'数据结构与算法', link: '/javascript/algorithm' },
      ] },
    ]
  }
]
