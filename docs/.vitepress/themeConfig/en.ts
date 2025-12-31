import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'


export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {

    themeConfig: {
      nav: [
        { text: 'Home', link: '/en/' },
        { text: 'Blog', 
          items: [
            {text: 'Math', link: '/en/blog/math'},
            {text: 'Physics', link: '/en/blog/physics'},
          ]
        }
      ],

      sidebar: [
        { text: 'Math',
          link: '/en/blog/math/',
          items: [
            {text: 'Laplacian', link: '/en/blog/math/laplacian'}
          ]
        }
      ],
    }
}