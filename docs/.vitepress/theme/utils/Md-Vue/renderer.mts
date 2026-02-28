import type Token from 'markdown-it/lib/token.mjs'; 
import { getImageMetadata } from './plugins/image_processor.mts';
import type { MarkdownRenderer } from 'vitepress';
import crypto from 'node:crypto';

// 自动为 H2 标题之间的内容套上 SectionGroup 折叠组件
export const setupSectionRenderer = (md: MarkdownRenderer) => {
  // --- 1. 渲染规则保持原样（仅负责字符串拼接） ---
  md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
    const defaultOpen = self.renderToken(tokens, idx, options);
    if (tokens[idx].tag === 'h2') {
      let prefix = env.__isSectionCurrentlyOpen ? `</template></SectionGroup>\n` : '';
      env.__isSectionCurrentlyOpen = true; // 这个变量仅用于渲染时的“拉链”
      return `${prefix}<SectionGroup><template #title>${defaultOpen}`;
    }
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.heading_close = (tokens, idx, options, env, self) => {
    if (tokens[idx].tag === 'h2') {
      return `${self.renderToken(tokens, idx, options)}</template><template #content>\n`;
    }
    return self.renderToken(tokens, idx, options);
  };

  // --- 2. 核心：解析阶段的物理闭环 ---
  md.core.ruler.push('section_closer', (state) => {
    const tokens = state.tokens;
    
    // 物理检查：本页到底有没有 h2？
    // 这是在解析阶段最稳的判断方式，不依赖任何渲染状态
    const hasH2 = tokens.some(t => t.type === 'heading_open' && t.tag === 'h2');

    if (hasH2) {
      // 只有确定有 h2，才补上总闸
      const closeToken = new state.Token('html_block', '', 0);
      closeToken.content = `</template></SectionGroup>`;
      tokens.push(closeToken);
    }
  });

  // --- 3. 解决 GPT 提到的“跨页污染” ---
  // 确保每一页开始前，渲染器的状态是干净的
  md.core.ruler.before('block', 'section_init', (state) => {
    state.env.__isSectionCurrentlyOpen = false;
  });
};

// 把图片格式自动渲染为Image组件
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