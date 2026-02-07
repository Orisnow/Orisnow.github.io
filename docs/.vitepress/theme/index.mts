// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import MyLayout from './MyLayout.vue';
import './styles/style.css';
import './styles/custom.css';   // 个性化css
import 'virtual:svg-icons-register';   // 必须导入该虚拟模块
import { Buffer } from 'buffer';//和config.mts里的一起用
//组件
import Image from './components/Pages/Blog/Content/Image.vue';
import SvgIcon from './components/Tools/SvgIcon.vue';
import BlogCard from './components/Pages/Portal/BlogCard.vue';
import Gallery from './components/Pages/Showcase/Gallery.vue';
import ShowImage from './components/Pages/Showcase/ShowImage.vue';
//布局
import Portal from './components/Pages/Portal/Portal.vue';
import Archives from './components/Pages/Archives/Archives.vue';
import Blog from './components/Pages/Blog/Blog.vue';

// 必须在任何业务代码运行前执行,不然会报错
if (typeof window !== 'undefined') {
  window.Buffer = Buffer
}

export default {
  extends: DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    app.component('Image', Image)
    app.component('SvgIcon', SvgIcon)
    app.component('BlogCard', BlogCard)
    app.component('Gallery', Gallery)
    app.component('ShowImage', ShowImage)

    app.component('portal', Portal)
    app.component('archives', Archives)
    app.component('blog', Blog)
  }
} satisfies Theme
