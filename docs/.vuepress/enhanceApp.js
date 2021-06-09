import Vue from 'vue'
import hljs from 'highlight.js'
import './styles/theme.styl'
import 'highlight.js/styles/color-brewer.css'

Vue.directive('highlight', function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
})

export default ({Vue,options, router,siteData}) => {}
