import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'


export const jaConfig: LocaleSpecificConfig<DefaultTheme.Config> = {

    themeConfig: {
      nav: [
        { text: 'ホーム', link: '/ja/' },
        { text: 'ブログ', 
          items: [
            {text: '数学', link: '/ja/blog/math'},
            {text: '物理', link: '/ja/blog/physics'},
          ]
        }
      ],

      sidebar: [
        { text: '数学',
          link: '/ja/blog/math/',
          items: [
            {text: 'らぷらす作用素', link: '/ja/blog/math/laplacian'}
          ]
        }
      ],
    }
}