// coded by gemini
import { createContentLoader } from 'vitepress';

export default createContentLoader('en/blog/**/*.md', {
  transform(raw) {
    return raw.map(({ url, frontmatter }) => {
      // 1. 先把 dates 转为数组处理，不管它是单值还是数组
      const rawDates = Array.isArray(frontmatter.dates) 
        ? frontmatter.dates 
        : (frontmatter.dates ? [frontmatter.dates] : []);

      // 2. 将数组里的每一项都安全地转为字符串
      // 如果是 Date 对象，用 toISOString() 转回 2026-03-03...
      // 如果是脏字符串（中文逗号），直接用 String() 保持原样
      const serializedDates = rawDates.map(d => {
        try {
          return (d instanceof Date) ? d.toISOString() : String(d);
        } catch {
          return String(d);
        }
      }).join(' '); // 合并成一个大字符串方便正则统一抓取

      // 3. 正则提取：只抓取 YYYY-MM-DD 部分
      // 这样无论是 "2026-03-03T..." 还是 "2026-03-03，2026-03-05" 都能被抓到
      const dateMatches = serializedDates.match(/\d{4}-\d{2}-\d{2}/g) || [];

      // 4. 获取结果
      const cleanDates = dateMatches;
      const latestDate = cleanDates.length > 0 ? cleanDates[cleanDates.length - 1] : '';

      return {
        title: frontmatter.title || 'No title',
        href: url,
        displayDate: latestDate, 
        allDates: cleanDates,
        abstract: frontmatter.abstract || frontmatter.description || 'No abstract',
        tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
        category: url.split('/')[3] || 'nothing',
        cover: frontmatter.cover,
        recommend: frontmatter.recommend,
        version: frontmatter.version || 'v0.0.0',
      };
    })
    .sort((a, b) => {
      // 降序排序
      return (b.displayDate || '').localeCompare(a.displayDate || '');
    });
  }
});

export const data = [] as any;
