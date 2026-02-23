/// <reference types="vite/client" />
import type { Theme } from 'vitepress';
import MyLayout from './MyLayout.vue';
import './styles/base.css';   // 个性化css
import 'virtual:svg-icons-register';   // 必须导入该虚拟模块
import { Buffer } from 'buffer';//和config.mts里的一起用
//组件
import Image from './components/Tools/Image.vue';
import SvgIcon from './components/Tools/SvgIcon.vue';
import Gallery from './components/Pages/Showcase/Gallery.vue';
import ShowImage from './components/Pages/Showcase/ShowImage.vue';


// 必须在任何业务代码运行前执行,不然会报错
if (typeof window !== 'undefined') {
  window.Buffer = Buffer
}

export default {
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    app.component('Image', Image)
    app.component('SvgIcon', SvgIcon)
    app.component('Gallery', Gallery)
    app.component('ShowImage', ShowImage)

    // 自动导入 Three 文件夹下所有的 .vue 文件
    const modules = import.meta.glob('./components/Three/*.vue', { eager: true })
    for (const path in modules) {
      const mod = modules[path] as any
      const component = mod.default
      const name = path.split('/').pop()?.replace(/\.vue$/, '')

      if (name && component) {
        app.component(name, component)
        console.log(`🚀 已自动注册组件: <${name} />`)
      }
    }

  }
} satisfies Theme
