import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'


export const jaConfig: LocaleSpecificConfig<DefaultTheme.Config> = {

    themeConfig: {
      nav: [
        { text: 'ホーム', link: '/ja/' },
        { text: 'ブログ', link: '/ja/blog/portal'},
        { text: '折り紙', link: '/ja/origami'},
        { text: '作品', link: '/ja/showcase'},
      ],


    }
}