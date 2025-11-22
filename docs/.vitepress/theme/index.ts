import DefaultTheme from 'vitepress/theme'
import './custom.css'
import 'katex/dist/katex.min.css'
import type { EnhanceAppContext } from 'vitepress'
import './plugins/theme-extend'

import Layout from './layouts/Layout.vue'

// 插件
import { registerComponents } from './plugins/componets.ts'
import { extendTheme } from './plugins/theme-extend.ts'
import Highlight from './practice/highlight.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp(ctx: EnhanceAppContext) {
    const { app, router, siteData } = ctx

    registerComponents(ctx)
    extendTheme(ctx)

    app.component('Highlight', Highlight);

    
  }
}
