//coded by gemini
import { createContentLoader } from 'vitepress';

export interface zh_blogData {
  title: string;
  href: string;
  // 供卡片展示的单一日期字符串
  displayDate: string;
  // 原始日期数组，满足你“留给自己看”的需求
  allDates: string[];
  abstract?: string;
  tags?: string[];
  category?: string;
  cover?: string;
  recommend?: number;
}

export default createContentLoader('zh/blog/**/*.md', {
  transform(raw): zh_blogData[] {
    return raw.map(({ url, frontmatter }) => {
      // 1. 获取 rawDates 数组并清洗空值
      // 兼容单字符串或数组情况，并剔除 undefined/null/空字符串
      const rawDates = Array.isArray(frontmatter.dates) 
        ? frontmatter.dates 
        : (frontmatter.dates ? [frontmatter.dates] : []);
      
      const cleanDates = rawDates.filter(Boolean);

      // 2. 取最后一位非空日期作为展示日期
      const lastDate = cleanDates.length > 0 ? cleanDates[cleanDates.length - 1] : '';

      return {
        title: frontmatter.title || '无标题',
        href: url,
        // 转换成 YYYY-MM-DD 格式
        displayDate: lastDate ? new Date(lastDate).toISOString().split('T')[0] : '',
        allDates: cleanDates,
        abstract: frontmatter.abstract || frontmatter.description || '暂无摘要',
        tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
        cover: frontmatter.cover,
        category: url.split('/')[3] || '无',
        recommend: frontmatter.recommend,
      };
    })
    // 根据最后编辑日期排序
    .sort((a, b) => new Date(b.displayDate).getTime() - new Date(a.displayDate).getTime());
  }
});

// 加上下面这行，专门为了解决 VS Code 的报错
export const data = [] as any;