import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {

    themeConfig: {
      nav: [
        { text: '主页', link: '/zh/' },
        { text: '博客', link: '/zh/blog/'},
        { text: '折纸', link: '/zh/origami'},
        { text: '展示', link: '/zh/showcase'},
      ],
    },
}