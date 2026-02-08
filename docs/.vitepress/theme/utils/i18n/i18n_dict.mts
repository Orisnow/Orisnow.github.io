import BlogTop from "../../components/Pages/Blog/Content/BlogTop.vue";

export const i18n_dict = {
  Portal: {
    zh: { recommended: '推荐阅读', latest: '最近更新', more: '查看更多' },
    en: { recommended: 'Recommended', latest: 'Latest Updates', more: 'View More' },
    ja: { recommended: 'おすすめ', latest: '最新投稿', more: 'もっと見る' }
  },
  MySidebarBefore: {
    zh: { title: '目录索引', math: '数学', physics: '物理', computer: '计算机', essays: '杂谈' },
    en: { title: 'Catalog', math: 'Math', physics: 'Physics', computer: 'Computer', essays: 'Essays' },
    ja: { title: '目録', math: '数学', physics: '物理', computer: 'コンピュータ', essays: '随筆' }
  },
  BlogPost: {
    zh: { download: '下载', zoom: '缩放（单击）', close: '关闭（Esc）', prev: '上一张', next: '下一张' },
    en: { download: 'Download', zoom: 'Zoom (Click)', close: 'Close (Esc)', prev: 'Previous', next: 'Next'},
    ja: { download: 'ダウンロード', zoom: 'ズーム（クリック）', close: '閉じる（Esc）', prev: '前へ', next: '次へ'}
  },
  BlogTop: {
    zh: { date: '最后修改日期'},
    en: { date: '最后修改日期'},
    ja: { date: '最后修改日期'},
  },
  MyNavbar: {
    zh: { title: '一风园', home: '主页', blog: '博客', origami: '折纸', showcase: '展示'},
    en: { title: "Balson's Garden", home: 'Home', blog: 'Blog', origami: 'Origami', showcase: 'Showcase'},
    ja: { title: 'ほのにわ', home: 'ホーム', blog: 'ブログ', origami: '折り紙', showcase: '作品'},
  },

} as const