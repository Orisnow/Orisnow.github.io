import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'

export const sharedConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    

    themeConfig: {
        logo: '/icons/housenka.svg',
        outline: false,
        search: {
          provider: 'local'
        },
        docFooter: {
          prev: false,
          next: false
        },
    },

    head: [
    ['link', { rel: 'icon', href: '/icons/housenka.svg' }],  // 这是 favicon 的设置
  ],

}