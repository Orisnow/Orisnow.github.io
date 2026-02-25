import type Token from 'markdown-it/lib/token.mjs'; 
import { getImageMetadata } from './plugins/image_processor.mts';
import type { MarkdownRenderer } from 'vitepress';
import crypto from 'node:crypto';

export const setupImageRenderer = (md: MarkdownRenderer) => {
  md.renderer.rules.image = (tokens: Token[], idx: number, options: any, env: any) => {
    const token = tokens[idx];
    const src = token.attrGet('src') || '';
    const alt = token.content || '';

    // 重点：利用 env.relativePath (当前 md 文件路径) 生成唯一哈希
    // 这样同一个 .md 文件下的所有图片都会获得相同的 gallery ID
    const pageHash = env.relativePath 
      ? crypto.createHash('md5').update(env.relativePath).digest('hex').slice(0, 8)
      : 'default';

    const galleryId = `gallery-${pageHash}`;

    // 自动拿数据
    const { width, height, filesize } = getImageMetadata(src);

    // 返回 Vue 组件，自动注入 gallery
    return `<Image 
      src="${src}" 
      alt="${alt}" 
      :width="${width}" 
      :height="${height}" 
      filesize="${filesize}" 
      gallery="${galleryId}"
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

// 将文本中的中英文括号替换为 Whisper 组件
export const setupWhisperRenderer = (md: any) => {
  const defaultTextRenderer = md.renderer.rules.text || ((tokens: Token[], idx: number) => tokens[idx].content);

  md.renderer.rules.text = (tokens: Token[], idx: number, options: any, env: any, self: any) => {
    let content = tokens[idx].content;

    // 重点 1：先执行默认渲染，确保特殊字符被转义
    // 但注意：不要对已经包含 <Image 的 inline 内容进行二次 text 替换
    const whisperRegex = /[（\(]([^（\(\)\)]+?)[）\)]/g; 

    if (whisperRegex.test(content)) {
      // 重点 2：只替换真正的纯文本
      return content.replace(whisperRegex, (_match: string, p1: string) => {
        return `<Whisper>${p1}</Whisper>`;
      });
    }

    return defaultTextRenderer(tokens, idx, options, env, self);
  };
};