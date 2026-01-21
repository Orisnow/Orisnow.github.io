# 2025-12-15
## 1、用下面代码把项目加进github
::: 初始化
```bash
git init
git status
git add .
git commit -m "initialize project structure"

<!-- 
这些代码做的事情就好像登记一套房子：
git init：声明“这套房子存在”，开始由 Git 进行管理
git status：查询当前房子的登记状态
git add：把房子里的物件列入登记清单（暂存）
git commit：把清单内容正式写入房产档案，形成一个不可变记录
-->

git remote add origin https://github.com/Orisnow/Orisnow.github.io.git
git branch -M main
git push -u origin main

```
:::
## 2、在根目录下创建.github/workflows/deploy.yml
## 3、配置SSH key
## 4、添加CNAME并在Github里添加Custom domain
# 2025-12-16
## 1、新建/docs/blog,添加/math和/physics
## 2、新建/theme/custom.css(用于整合css)和/theme/custom(用来分类css)
## 3、尝试了几个公式插件，直接用多少都有点问题（双重公式、错位、长公式排版问题等），以及发现即使add mathjax又remove，只要pnpm-lock.yaml里仍然存在，math:true就仍然有用（gpt补充：在旧项目中，只要 pnpm-lock.yaml 里仍然锁定了 markdown-it-mathjax3，并且 dev server 使用了对应依赖图，markdown: { math: true } 就可能继续生效）
# 2025-12-17
## 1、新建/docs/public,添加/images、/icons和/fonts
# 2025-12-18
## 1、添加/font/更纱黑体SC.woff2,新建/theme/custom/fonts.css并声明它,在custom.css中使用字体
## 2、安装@mdit/plugin-katex并在custom.css里@import 'katex/dist/katex.css';(气笑了，原来这么简单，我前天在干嘛……)
# 2025-12-28
## 1、docs目录下添加zh、en、ja文件夹（ISO 639），把blog和index.md移动到zh,复制到en和ja文件夹
## 2、参照https://vitepress.yiov.top/multi-language，在.vitepress中新建themeConfig文件夹，新建zh.ts,en.ts,ja.ts,share.ts(share意味着共用),用下面结构的内容进行测试
```bash
import type { DefaultTheme, LocaleSpecificConfig } from 'vitepress'
export const **Config: LocaleSpecificConfig<DefaultTheme.Config> = {
    themeConfig: {
      nav:
      sidebar:
    }
}
```
# 2025-12-31
## 1、用AI处理了多语言情况下根目录首页会404的问题
## 2、由于多语言大改了文件结构，就全部add后push了下
# 2026-1-1
## 1、添加了origami文件夹（语言目录下）
## 2、themeConfig里换成了多侧边栏，注意sidebar: []和sidebar: {}的区别
# 2026-1-12
## 1、public加videos文件夹，添加showcase文件夹（语言目录下）
# 2026-1-16
## 1、新建theme/components/Layout,theme/components/Image.vue和theme/Layout.vue
# 2026-1-19
## 1、安装vite-plugin-svg-icons
# 2026-1-21
## 1、安装sass-embedded(处理SvgIcon.vue里复制来的<style lang="scss" scoped>)
## 2、安装vite-plugin-svg-icons所缺失的fast-glob
## 3、配置vite-plugin-svg-icons(注意iconDirs读取位置),用virtual:svg-icons-register抓svg,注册SvgIcon组件
## 4、注册ImageGroup组件，基本完成Image.vue
