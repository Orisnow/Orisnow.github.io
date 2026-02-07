import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'


export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {

    themeConfig: {
      nav: [
        { text: 'Home', link: '/en/' },
        { text: 'Blog', link: '/en/blog/'},
        { text: 'Origami', link: '/en/origami'},
        { text: 'Showcase', link: '/en/showcase'},
      ],


    }
}