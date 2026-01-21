// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './custom.css'   // 个性化css
import 'virtual:svg-icons-register'   // 必须导入该虚拟模块
//组件
import Image from './components/Layout/Image.vue'
import SvgIcon from './components/SvgIcon.vue'
import ImageGroup from './components/Layout/ImageGroup.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Image', Image)
    app.component('ImageGroup', ImageGroup)
    app.component('SvgIcon', SvgIcon)
  }
} satisfies Theme
