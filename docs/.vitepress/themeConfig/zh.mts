import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'


export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {

    themeConfig: {
      nav: [
        { text: '主页', link: '/zh/' },
        { text: '博客', link: '/zh/blog/'},
        { text: '折纸', link: '/zh/origami'},
        { text: '展示', link: '/zh/showcase'},
      ],

      sidebar: {
        '/zh/blog/math/': [
            { text: '数学',
              link: '/zh/blog/math/',
              items: [
                {text: '拉普拉斯算子', link: '/zh/blog/math/laplacian'},
              ]
            }
        ],
        '/zh/blog/physics/': [
            { text: '物理',
              link: '/zh/blog/physics/',
              items: [
                {text: '麦克斯韦方程组', link: '/zh/blog/physics/maxwell-equatioan'}
              ]
            },
        ],
        '/zh/blog/computer/': [
            { text: '计算机',
              link: '/zh/blog/computer/',
              items: [
                {text: '生命游戏', link: '/zh/blog/computer/game-of-life'}
              ]
            },
        ],
        '/zh/blog/essays/': [
            { text: '杂谈',
              link: '/zh/blog/essays/',
              items: [
                {text: '测试', link: '/zh/blog/essays/test'}
              ]
            },
        ],
        '/zh/origami/': [
            { text: '折纸',
              link: '/zh/origami/',
              items: [
                {text: '蜂窝剪纸', link: '/zh/origami/kirigami-honeycomb'}
              ]
            },
          ],
        },
    }
}