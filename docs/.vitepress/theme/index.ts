import DefaultTheme from 'vitepress/theme'
import './custom.css'
import 'katex/dist/katex.min.css'
import type { EnhanceAppContext } from 'vitepress'
import './plugins/theme-extend'

import Layout from './layouts/Layout.vue'

// 插件
import { registerComponents } from './plugins/componets.ts'
import { extendTheme } from './plugins/theme-extend.ts'
// practice插件
import Highlight from './practice/highlight.vue'
import ToggleNote from './practice/togglenote.vue'
import Tooltip from './practice/tooltip.vue'
import DraggableMath from './practice/DraggableMath.vue';


export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp(ctx: EnhanceAppContext) {
    const { app, router, siteData } = ctx

    registerComponents(ctx)
    extendTheme(ctx)

    app.component('Highlight', Highlight);
    app.component('ToggleNote', ToggleNote);
    app.component('Tooltip', Tooltip)
    app.component('DraggableMath', DraggableMath);


    if (typeof window !== 'undefined') {
  const script = document.createElement("script")
  script.src = "https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"
  document.head.appendChild(script)
}

  }
}
