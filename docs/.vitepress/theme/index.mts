/// <reference types="vite/client" />
import type { Theme } from 'vitepress';
import MyLayout from './MyLayout.vue';
import './styles/base.css';   // 个性化css
import 'virtual:svg-icons-register';   // 必须导入该虚拟模块
import { Buffer } from 'buffer';//和config.mts里的一起用
//组件
import Image from './components/Tools/Image.vue';
import SvgIcon from './components/Tools/SvgIcon.vue';
import Whisper from './components/Tools/Whisper.vue';
import BlogLive2D from './components/Pages/Blog/Left/Bottom/BlogLive2D.vue';

// 必须在任何业务代码运行前执行,不然会报错
if (typeof window !== 'undefined') {
  window.Buffer = Buffer
}

export default {
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    app.component('Image', Image)
    app.component('SvgIcon', SvgIcon)
    app.component('Whisper', Whisper)
    // app.component('BlogLive2D', BlogLive2D)

    // 自动注册Three文件夹下所有的vue组件
    const threeModules = import.meta.glob('./components/Three/*.vue', { eager: true })
    for (const path in threeModules) {
      const mod = threeModules[path] as any
      const component = mod.default
      const name = path.split('/').pop()?.replace(/\.vue$/, '')

      if (name && component) {
        app.component(name, component)
      }
    }
    // 自动注册ImageGroup文件夹下所有的vue组件
    const ImageGroupModules = import.meta.glob('./components/ImageGroup/*.vue', { eager: true })
    for (const path in ImageGroupModules) {
      const mod = ImageGroupModules[path] as any
      const component = mod.default
      const name = path.split('/').pop()?.replace(/\.vue$/, '')

      if (name && component) {
        app.component(name, component)
      }
    }

  }
} satisfies Theme
