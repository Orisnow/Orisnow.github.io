import { defineConfig } from 'vitepress'
import { sharedConfig } from './themeConfig/share'
import { zhConfig } from './themeConfig/zh'
import { enConfig } from './themeConfig/en'
import { jaConfig } from './themeConfig/ja'
import { katex } from "@mdit/plugin-katex";


import path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'


export default defineConfig({
  title: "Balson's Garden",
  description: "My Official Website",
  markdown: {
    config(md) {
      md.use(katex);
    },
  },
  ...sharedConfig,
  locales: {
    zh: {
      label: '中文（简体）',
      lang: 'zh-CN',
      link: '/zh/',
      ...zhConfig,
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      ...enConfig,
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      link: '/ja/',
      ...jaConfig,
    }
  },

  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'docs/public/icons')],
        symbolId: 'icon-[name]',
        svgoOptions: true,
      }),
    ],
  }
  
})
