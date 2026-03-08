import { defineConfig } from 'vitepress';
import { sharedConfig } from './share.mts';
import { katex } from '@mdit/plugin-katex';
import { container } from '@mdit/plugin-container'

import path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { setupImageRenderer, setupWhisperRenderer, setupSectionRenderer, setupFootnoteInline } from './theme/utils/Md-Vue/renderer.mts';
import { setupEmoji } from './theme/utils/emoji.mts';

export default defineConfig({
  title: "Balson's Garden",
  description: "My Official Website",
  markdown: {
    config(md) {
      md.use(katex);
      setupEmoji(md);
      setupImageRenderer(md);
      setupWhisperRenderer(md);
      setupSectionRenderer(md);
      setupFootnoteInline(md);
      md.use(container, {
        name: 'references',
        openRender: () => `<ReferenceCollapse>\n`,
        closeRender: () => `</ReferenceCollapse>\n`,
      });
      md.use(container, {
        name: 'tips',
        openRender: () => `<Tips>\n`,
        closeRender: () => `</Tips>\n`,
      });
      md.use(container, {
        name: 'example',
        openRender: (tokens, index) => {
          // 提取 ::: example 之后的所有文字作为 title
          const title = tokens[index].info.trim().slice('example'.length).trim();
          const escapedTitle = md.utils.escapeHtml(title);

          return `<ExampleCollapse title="${escapedTitle}">\n`;
        },
        closeRender: () => `</ExampleCollapse>\n`,
      });
    },
  },
  ...sharedConfig,
  locales: {
    zh: { label: '中文（简体）', lang: 'zh-CN', link: '/zh/'},
    en: { label: 'English', lang: 'en-US', link: '/en/'},
    ja: { label: '日本語', lang: 'ja-JP', link: '/ja/'},
  },

  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'docs/public/icons')],
        symbolId: 'icon-[name]',
        svgoOptions: true,
      }),
      
    ],
    define: {
      // 不要用数组，浏览器不认识那个语法
      'global': 'window', 
      'process.env': '{}',
      // 这里是关键：我们稍后会在入口手动引入 Buffer 并挂载到 window
      'Buffer': 'window.Buffer', 
    },
  }
  
})
