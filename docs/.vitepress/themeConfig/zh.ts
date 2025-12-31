import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'


export const zhConfig: LocaleSpecificConfig<DefaultTheme.Config> = {

    themeConfig: {
      nav: [
        { text: '主页', link: '/zh/' },
        { text: '博客', 
          items: [
            {text: '数学', link: '/zh/blog/math'},
            {text: '物理', link: '/zh/blog/physics'},
          ]
        }
      ],

      sidebar: [
        { text: '数学',
          link: '/zh/blog/math/',
          items: [
            {text: '拉普拉斯算子', link: '/zh/blog/math/laplacian'}
          ]
        }
      ],
    }
}