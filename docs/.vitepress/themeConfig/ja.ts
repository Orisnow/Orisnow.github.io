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
        },
        { text: '折り紙', link: '/ja/origami'},
        { text: '作品', link: '/ja/showcase'},

      ],

      sidebar: {
        '/ja/blog/math/': [
            { text: '数学',
              link: '/ja/blog/math/',
              items: [
                {text: 'ラプラス作用素', link: '/ja/blog/math/laplacian'},
              ]
            }
        ],
        '/ja/blog/physics/': [
            { text: '物理',
              link: '/ja/blog/physics/',
              items: [
                {text: 'マクスウェル方程式', link: '/ja/blog/physics/maxwell-equatioan'}
              ]
            },
        ],
        '/ja/origami/': [
            { text: '折り紙',
              link: '/ja/origami/',
              items: [
                {text: 'ハニカム切り紙', link: '/ja/origami/kirigami-honeycomb'}
              ]
            },
          ],
        },
    }
}