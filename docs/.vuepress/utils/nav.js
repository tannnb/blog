// 前端基础
const interviewSideBar = [
  {
    title: '基础知识',
    collapsable: true,
    children: ['base/']
  },
  {
    title: '浏览器相关',
    collapsable: true,
    children: [
        'browser/',
        'browser/http'
    ]
  },
  {
    title: 'HTTP相关',
    collapsable: true,
    children: [
      'http/'
    ]
  },
]



// 前端架构侧边栏
const frameworkSidebar = [
  {
    title: '介绍',
    collapsable: true,
    children: ['introduction/']
  },
  {
    title: '脚手架设计',
    collapsable: true,
    children: [
        'cli/',
        'cli/vue'
    ]
  }
]



module.exports = {
  interviewSideBar,
  frameworkSidebar
}
