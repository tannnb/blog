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
        title: '脚手架设计',
        collapsable: true,
        children: [
            '/framework/',
            '/framework/lerna',
            '/framework/fork',
            '/framework/vue',
        ]
    }
]


// webpack菜单栏配置
const webpackSideBar = [
    {
        title: 'webpack学习记录',
        collapsable: false,
        children: [
            '/webpack/',
            '/webpack/initWebpack',
            '/webpack/config',
            '/webpack/loader',
            '/webpack/plugin',
        ]
    },
]

// typescript菜单栏配置
const typescriptSideBar = [
    {
        title: 'typescript基础',
        collapsable: true,
        children: [
            'base/',
            'base/baseType',
            'base/function',
            'base/Class',
            'base/interface',
            'base/generics',
        ]
    },
    {
        title: '类型挑战',
        collapsable: true,
        children: [
            'typeChange/'
        ]
    }
]


module.exports = {
    interviewSideBar,
    frameworkSidebar,
    webpackSideBar,
    typescriptSideBar
}
