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
        },
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