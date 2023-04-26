import { h } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Theme from 'vitepress/theme'
import MNavLinks from '../../nav/components/MNavLinks.vue'

export default Object.assign({}, Theme, {
  extends: DefaultTheme,
  Layout: () => {
    const props = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }
    return h(Theme.Layout, props)
  },
  enhanceApp ({ app }) {
    app.component('MNavLinks', MNavLinks)
    app.provide('DEV', process.env.NODE_ENV === 'development')
  }
})
