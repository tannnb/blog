// 前端基础
const interviewSideBar = [
    {
        title: '基础知识',
        collapsable: true,
        children: [
            'base/',
            'base/data_type',
            'base/isEqual',
            'base/typeof',
            'base/is_this',
            'base/is_new',
            'base/closure',
            'base/is_class',
            'base/is_eventLoop',
            'base/is_copy',
            'base/is_call_apply_bind',
            'base/is_tree',
            'base/is_curry',
            'base/is_debounce',
            'base/is_promise',
            'base/is_proxy',
            'base/is_subject',
        ]
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
        children: [
            'introduction/',
            'introduction/lerna',
        ]
    },
    {
        title: '脚手架设计',
        collapsable: true,
        children: [
            'cli/vue'
        ]
    }
]


// webpack菜单栏配置
const webpackSideBar = [
    {
        title: 'webpack学习记录',
        collapsable: false,
        children: [
            'webpack_next/',
            'webpack_next/init_webpack',
            'webpack_next/config',
            'webpack_next/loader',
            'webpack_next/plugin',
        ]
    },
]


// typescript菜单栏配置
const typescriptSideBar = [
    {
        title: 'typescript学习',
        collapsable: false,
        children: [
            'typescript_next/'
        ]
    },
]


module.exports = {
    interviewSideBar,
    frameworkSidebar,
    webpackSideBar,
    typescriptSideBar
}
