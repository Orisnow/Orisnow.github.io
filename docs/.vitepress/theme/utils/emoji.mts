
import { fullEmoji } from '@mdit/plugin-emoji';
import type { MarkdownRenderer } from 'vitepress';
import fs from 'node:fs';
import path from 'node:path';

export const setupEmoji = (md: MarkdownRenderer) => {
  // --- 1. 物理扫描 emoji 文件夹 ---
  const emojiDir = path.resolve(process.cwd(), 'docs/public/emoji');
  const emojiMap: Record<string, string> = {}; // 存储 { 名字: 后缀 }

  try {
    const files = fs.readdirSync(emojiDir);
    files.forEach(file => {
      const parsed = path.parse(file);
      // 只要是图片格式就记录下来
      if (['.avif', '.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(parsed.ext.toLowerCase())) {
        emojiMap[parsed.name] = parsed.ext;
      }
    });
  } catch (e) {
    console.warn('Emoji 目录扫描失败，请确认 docs/public/emoji 存在');
  }

  // --- 2. 注入插件并注册 Key ---
  md.use(fullEmoji, {
    definitions: {
      'check': '✅',
      // 将扫描到的所有文件名注册为 Key
      ...Object.fromEntries(Object.keys(emojiMap).map(name => [name, `IMG_${name.toUpperCase()}`]))
    }
  });

  // --- 3. 拦截渲染逻辑 ---
  md.renderer.rules.emoji = (tokens, idx) => {
    const token = tokens[idx];
    const name = token.markup;

    // 自动匹配后缀并生成 HTML
    if (emojiMap[name]) {
      const ext = emojiMap[name];
      return `<img src="/emoji/${name}${ext}" class="custom-emoji" alt="${name}" />`;
    }

    // 降级处理：如果没有匹配到自定义图片，返回原生内容（如 ✅）
    return token.content;
  };
};