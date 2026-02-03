import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'


export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {

    themeConfig: {
      nav: [
        { text: 'Home', link: '/en/' },
        { text: 'Blog', link: '/en/blog/'},
        { text: 'Origami', link: '/en/origami'},
        { text: 'Showcase', link: '/en/showcase'},
      ],

      sidebar: {
        '/en/blog/math/': [
            { text: 'Math',
              link: '/en/blog/math/',
              items: [
                {text: 'Laplacian', link: '/en/blog/math/laplacian'},
              ]
            }
        ],
        '/en/blog/physics/': [
            { text: 'Physics',
              link: '/en/blog/physics/',
              items: [
                {text: 'Maxwell equation', link: '/en/blog/physics/maxwell-equatioan'}
              ]
            },
        ],
        '/en/blog/computer/': [
            { text: 'Computer',
              link: '/en/blog/computer/',
              items: [
                {text: 'Game of Life', link: '/en/blog/computer/game-of-life'}
              ]
            },
        ],
        '/en/blog/essays/': [
            { text: 'Essays',
              link: '/en/blog/essays/',
              items: [
                {text: 'test', link: '/en/blog/essays/test'}
              ]
            },
        ],
        '/en/origami/': [
            { text: 'Origami',
              link: '/en/origami/',
              items: [
                {text: 'kirigami honeycomb', link: '/en/origami/kirigami-honeycomb'}
              ]
            },
          ],
        },
    }
}