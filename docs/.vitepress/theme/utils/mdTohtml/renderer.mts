import type Token from 'markdown-it/lib/token.mjs'; 
import { getImageMetadata } from './plugins/image_processor.mts';
import type { MarkdownRenderer } from 'vitepress';

export const setupImageRenderer = (md: MarkdownRenderer) => {
  // 1. 修正 image 规则的参数类型
  md.renderer.rules.image = (tokens: Token[], idx: number) => {
    const token = tokens[idx];
    const src = token.attrGet('src') || '';
    const alt = token.content || '';

    // 自动拿数据
    const { width, height, filesize } = getImageMetadata(src);

    // 返回 Vue 组件标签字符串
    return `<Image 
      src="${src}" 
      alt="${alt}" 
      :width="${width}" 
      :height="${height}" 
      filesize="${filesize}" 
    />`;
  };

  // 2. 修正 core ruler 的参数类型
  md.core.ruler.after('inline', 'replace_image_p', (state) => {
  const tokens = state.tokens;
  for (let i = 0; i < tokens.length; i++) {
    // 寻找段落开始
    if (tokens[i].type === 'paragraph_open') {
      const next = tokens[i + 1];
      
      // 只要段落内容包含我们的自定义组件标签
      const isCustomImage = next.type === 'inline' && (
        next.content.includes('<Image') || 
        next.children?.some(c => c.type === 'image')
      );

      if (isCustomImage) {
        // 强制把 <p> 换成 <div>
        tokens[i].type = 'div_open';
        tokens[i].tag = 'div';
        tokens[i].attrSet('class', 'custom-block-container');

        // 寻找配对的关闭标签
        let j = i;
        while (j < tokens.length && tokens[j].type !== 'paragraph_close') {
          j++;
        }
        if (j < tokens.length) {
          tokens[j].type = 'div_close';
          tokens[j].tag = 'div';
        }
      }
    }
  }
});
};