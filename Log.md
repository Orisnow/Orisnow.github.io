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
# 2026-1-26
## 1、把ts后缀都改成mts，把vue组件的<script>加上lang="ts",并处理隐式any等问题
## 2、新建404.vue，在index.mts中用h函数自定义404页面
# 2026-1-29
## 1、在blog下添加computer和essays文件夹，设置nav
## 2、在zh/essays/test.md起草第一篇blog
## 3、在share.mts里配置logo,启用搜索，禁用大纲和底部上下文链接（感觉官方的lastUpdated有点怪就没弄）
# 2026-1-30
## 1、知道了既是下拉菜单又是超链接的nav内容栏可能不是一个好设计（对于移动端用户），可以认为nav里的下拉栏其实是不适合分类的，适合那种“外部链接：链接1；链接2……"这种比较直接的内容
# 2026-1-31
## 1、整理theme/components,新建custom/color.css作为颜色库，安装并导入catppuccin/palette
# 2026-2-1
## 1、简单编写了下CategoryCard.vue,BlogCard.vue,Portal.vue和blog/index.md
# 2026-2-2
## 1、解耦用组件不必全局注册，故index.mts里能删的组件都删了
## 2、觉得CategorytCard和博客首页的BlogCard应有明显的区分，于是打算新建个PortalHero并放入CategorytCard
# 2026-2-3
## 1、在gemini的帮助下写了下zh_blog.data.ts，发现如果不加export const data = [] as any;就会发生import { data as ZH_BLOG_DATA }略 vscode报错但网站正常运行而import data 略 vscode不报错但网站直接白掉的诡异情况（ts特有的到处都是any问题）
## 2、把Portal的主干功能大致编写完，新建Archives文件夹
## 3、传github测试，发现有catppuccin/palette相关的问题，在deploy.yml里加git config --global url."https://github.com/".insteadOf git@github.com:解决，以及发现改正了index.mts里import组件的大小写问题
# 2026-2-4
## 1、建立i18n_dict.mts用于存放不同组件中用到的多语言字典，用useI18n.mts统一处理它与data文件夹中不同语言的.data.ts，把Portal.vue改成多语言的
## 2、梳理文件夹结构，确立components/Pages的主体地位，负责自定义layout的构建，其余组件按照功能分配结构，styles负责存放自定义css并由custom.css进行汇总，其中的color.css作为网站的颜色库，data文件夹负责构建时数据的收集，并在utils进行多语言加工和其他处理，en,ja,zh为多语言网页的编写，public负责资源的存放
# 2026-2-5
## 1、安装markdown-it、gray-matter、vite、buffer,新建.vitepress/end.d.ts
## 2、更新了下pnpm,清理多余低版本的同名包
## 3、为了高度自定义搞了一堆乱七八糟的，重点在于在MyLayout里置空官方的<Layout />使得布局完全自定义
# 2026-2-6
## 1、卸载markdown-it,回归正规军<Content />
## 2、搞好mdTohtml里用于获取（本地）图片数据的image_processor.mts和用于将markdown语法的图片转换为Image组件的renderer.mts（重点在于把md会自动生成的外层<p>转换为<div>）
## 3、把Image和ImageGroup重命名为ShowImage和Gallery并移动到ShowCase文件夹，把Image保留并拆解一部分到BlogPort，使得单页面有同一GalleryId，可自动分为一组
# 2026-2-7
## 1、换一个正常能用的字体
## 2、使得MySidebar能用（发现英文竖排版的问题很棘手）
## 3、删除themeConfig文件夹，迁移内容至i18n_dict.mts,保留share.mts
## 4、想了下中日英的招牌名
# 2026-2-8
## 1、修了修博客界面的版面
## 2、使得MyNavbar能用
## 3、让gemini随便写了点能看的css，传github测试
# 2026-2-17
 ## 1、删掉style.css,改名custom.css为base.css,使得所有单一组件中的标签、类、id style都在当前组件中完成，其他css都由单独的css文件完成，base集合这些css并作全局控制
# 2026-2-19
## 1、瞎删改了些原来ai写的css（css咋这么难）
# 2026-2-21
## 1、安装three.js和stats.js,新建components/Three/RigidBodyLinkPoint.vue、utils/Three/useThreeCamera.mts和utils/Stats/useStats.mts进行测试
# 2026-2-22
## 1、安装mathbox,但是先不用，three.js也先不用（内容太太太多）
# 2026-2-24
## 1、卸载photoswipe,安装fancybox
# 2026-2-25
## 1、重新在Image.vue配置好基本的fancybox，新建utils/Fancybox/useFancybox.mts，相应地修改renderer.mts，新建ImageGroup文件夹用于存放不同的图片组样式，传github测试













# 待办
## [[2026-1-21]]传到个人网站上试了下，第一次进站图片加载挺慢的，不全加载完甚至不能放大，手机和surface这种触屏设备还要特化一下（信息栏触摸后就一直挂着了，不点其他地方下不去）
## [[2026-1-30]]考虑到数学、物理、计算机、杂谈作为博客下的一级分类特点肯定是不适合原本vitepress的sidebar竖向的分类方式的（说到分类是不是可以添加一个让访客选择”根据标签“、”根据修改时间“之类的复选框？），在sidebar横向菜单的方式可能会好些但是又感觉会很拥挤，或者考虑在左侧做成像笔记本的书签夹那样（用颜色区分），但是我需要侧边栏折叠功能（像reddit那样的），又怕会有点击冲突问题，而且我还要预留出左下角的位置给2dlive人物，同时负责语言切换，明暗切换等功能（到时候navbar的相关功能则会去掉）。大纲我是不想直接显示的（要弄 的话也是可折叠的），因此右边会有较多空位，在右下角我想放几个工具按钮，比如设置，回到顶部，回到上一页这种，还有个我设想的切换阅读模式用的(参考obsidian)，默认是link mode,对于部分关键词设置内链组件显示有色高亮可以直接点击跳转，hover时则会在右边的空白处存在预览，切换后是read mode，则不会高亮，跳转和预览。额，暂时就想到这些，也不知道具体操作的可行性
## [[2026-2-25]]用UI Hijacking模拟图片大小组切换