// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';
import './custom.css';   // 个性化css
import 'virtual:svg-icons-register';   // 必须导入该虚拟模块
import NotFound from './components/Pages/NFPage/404.vue';   //404页面组件
//组件
import Image from './components/Blog/Content/Image.vue';
import SvgIcon from './components/Tools/SvgIcon.vue';
import ImageGroup from './components/Blog/Content/ImageGroup.vue';
import BlogCard from './components/Pages/Portal/BlogCard.vue';
//布局
import Portal from './components/Pages/Portal/Portal.vue';
import Archives from './components/Pages/Archives/Archives.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'not-found': () => h(NotFound)
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Image', Image)
    app.component('ImageGroup', ImageGroup)
    app.component('SvgIcon', SvgIcon)
    app.component('BlogCard', BlogCard)

    app.component('portal', Portal)
    app.component('Archives', Archives)
  }
} satisfies Theme
