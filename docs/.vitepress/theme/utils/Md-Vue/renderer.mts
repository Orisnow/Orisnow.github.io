import type Token from 'markdown-it/lib/token.mjs'; 
import { getImageMetadata } from './plugins/image_processor.mts';
import crypto from 'node:crypto';
import type { MarkdownRenderer } from 'vitepress'

export const setupSectionRenderer = (md: MarkdownRenderer) => {
  // 初始化或者跨页清理
  md.core.ruler.before('block', 'section_init', (state) => {
    state.env.__openLevels = { h2: false, h3: false, h4: false };
  });

  md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
    const tag = tokens[idx].tag as 'h2' | 'h3' | 'h4';
    
    if (['h2', 'h3', 'h4'].includes(tag)) {
      // 保持你原有的 id 逻辑
      env.currentH2Id = tokens[idx].attrGet('id') || ''; 

      let prefix = '';
      
      // 核心嵌套闭合逻辑：
      // 1. 如果遇到新的 H2，必须把之前开着的 h4, h3, h2 全关了
      // 2. 如果遇到新的 H3，必须把之前开着的 h4, h3 全关了（保留 h2，实现嵌套）
      // 3. 如果遇到新的 H4，只关之前开着的 h4
      if (tag === 'h2') {
        if (env.__openLevels.h4) { prefix += `</template></SectionGroup>\n`; env.__openLevels.h4 = false; }
        if (env.__openLevels.h3) { prefix += `</template></SectionGroup>\n`; env.__openLevels.h3 = false; }
        if (env.__openLevels.h2) { prefix += `</template></SectionGroup>\n`; env.__openLevels.h2 = false; }
        env.__openLevels.h2 = true;
      } else if (tag === 'h3') {
        if (env.__openLevels.h4) { prefix += `</template></SectionGroup>\n`; env.__openLevels.h4 = false; }
        if (env.__openLevels.h3) { prefix += `</template></SectionGroup>\n`; env.__openLevels.h3 = false; }
        env.__openLevels.h3 = true;
      } else if (tag === 'h4') {
        if (env.__openLevels.h4) { prefix += `</template></SectionGroup>\n`; env.__openLevels.h4 = false; }
        env.__openLevels.h4 = true;
      }

      const defaultOpen = self.renderToken(tokens, idx, options);
      return `${prefix}<SectionGroup class="section-group level-${tag}"><template #title>${defaultOpen}`;
    }
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.heading_close = (tokens, idx, options, env, self) => {
    if (['h2', 'h3', 'h4'].includes(tokens[idx].tag)) {
      return `${self.renderToken(tokens, idx, options)}</template><template #content>\n`;
    }
    return self.renderToken(tokens, idx, options);
  };

  // 保持你原有的 list_item_open 逻辑不动
  md.renderer.rules.list_item_open = (tokens, idx, options, env, self) => {
    const contentToken = tokens[idx + 2]; 
    const match = (contentToken?.content || "").match(/^\[(\d+)\]/);
    if (match) {
      return `<li id="ref-${env.currentH2Id || 'default'}-${match[1]}">`;
    }
    return self.renderToken(tokens, idx, options);
  };

  // 解析阶段的物理总闸闭合
  md.core.ruler.push('section_closer', (state) => {
    const tokens = state.tokens;
    const hasTargetHeading = tokens.some(t => t.type === 'heading_open' && ['h2', 'h3', 'h4'].includes(t.tag));

    if (hasTargetHeading) {
      // 在文章最后，用一个临时的 html_block，根据在 core 阶段能扫到的标题最大深度来安全闭合。
      // 最稳妥的不硬编码方案：因为渲染期我们会通过 env 知道开了几个。
      // 为了在 core 期做到物理闭环，我们通过扫描 token 树，看这篇 md “最终停留在什么级别”
      let finalH2 = false, finalH3 = false, finalH4 = false;
      for (const t of tokens) {
        if (t.type === 'heading_open') {
          if (t.tag === 'h2') { finalH2 = true; finalH3 = false; finalH4 = false; }
          if (t.tag === 'h3') { finalH3 = true; finalH4 = false; }
          if (t.tag === 'h4') { finalH4 = true; }
        }
      }
      
      let closeTags = '';
      if (finalH4) closeTags += `</template></SectionGroup>`;
      if (finalH3) closeTags += `</template></SectionGroup>`;
      if (finalH2) closeTags += `</template></SectionGroup>`;

      if (closeTags) {
        const closeToken = new state.Token('html_block', '', 0);
        closeToken.content = closeTags;
        tokens.push(closeToken);
      }
    }
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

export const setupImageGroupRenderer = (md: any) => {
  const defaultRender = md.renderer.rules.html_block || function(tokens: any, idx: number, options: any, env: any, self: any) {
    return self.renderToken(tokens, idx, options);
  };

  md.renderer.rules.html_block = (tokens: any, idx: number, options: any, env: any, self: any) => {
    let content = tokens[idx].content;

    // 匹配包含 :items="[ 的图片组组件块
    if (content.includes(':items="[')) {
      const srcRegex = /src:\s*['"]([^'"]+)['"]/g;
      let match;
      let updatedContent = content;

      while ((match = srcRegex.exec(content)) !== null) {
        const src = match[1];
        // 物理读取磁盘上的图片信息
        const { width, height, filesize } = getImageMetadata(src);

        // 拼接成完整的属性注入
        const metaStr = `src: '${src}', width: ${width}, height: ${height}, filesize: '${filesize}'`;
        const originStr = match[0]; 
        
        updatedContent = updatedContent.replace(originStr, metaStr);
      }
      
      return updatedContent; // 返回被缝合好元数据的新 HTML 字符串
    }

    return defaultRender(tokens, idx, options, env, self);
  };
};

export const setupWhisperRenderer = (md: any) => {
  const originalRender = md.render;

  md.render = (src: string, env: any) => {
    const protectedBlocks: string[] = [];
    let content = src;

    // 🚀 1. 全量超级保护区（修正版）：
    // 强行加入 \$\$[\s\S]*?\$\$ (块级公式) 和 \$(?!\s)([^\$\n]+?)(?<!\s)\$ (行内公式)
    // 确保任何 LaTeX 公式内部的 () 绝对不会被 Whisper 误伤，同时也保护公式不被拆碎
    const protectRegex = /(<math[\s\S]*?<\/math>|\$\$[\s\S]*?\$\$|\$(?!\s)[^\$\n]+?(?<!\s)\$|!\[[^\]]*\]\([^)]+\)|```[\s\S]*?```|`[^`]+`|<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>)/g;
    
    content = content.replace(protectRegex, (match) => {
      const id = protectedBlocks.length;
      protectedBlocks.push(match);
      return `@@@SYSTEM_PROTECTED_${id}@@@`;
    });

    // 2. 此时环境绝对安全，转换普通链接为 <SmartLink>
    const linkRegex = /(?<!!|\\)\[([^\]]+)\]\(([^)]+)\)/g;
    content = content.replace(linkRegex, (_match, text, url) => {
      return `<SmartLink href="${url}">${text}</SmartLink>`;
    });

    // 3. 此时只有正文里的普通文本会留下来，安全转换你的吐槽括号 () 或 （）
    const whisperRegex = /[\(（]([^（\(\)\n]+?)[）\)]/g;
    content = content.replace(whisperRegex, (_match, p1) => {
      return `<Whisper>${p1}</Whisper>`;
    });

    // 4. 转换一切完毕后，将所有公式、代码、脚本原封不动、毫发无损地还原回去
    content = content.replace(/@@@SYSTEM_PROTECTED_(\d+)@@@/g, (_match, id) => {
      return protectedBlocks[parseInt(id)];
    });

    // 5. 愉快地交还给 VitePress 核心编译器
    return originalRender.call(md, content, env);
  };
};

// 处理形如^[1]的字段
export const setupFootnoteInline = (md: any) => {
  const FOOTNOTE_RE = /^\^\[(\d+)\]/;

  md.inline.ruler.after('emphasis', 'custom_footnote', (state: any, silent: boolean) => {
    const match = state.src.slice(state.pos).match(FOOTNOTE_RE);
    if (!match) return false;

    if (!silent) {
      const num = match[1];
      // 这里的关键：渲染成 Vue 组件标签
      const token = state.push('html_inline', '', 0);
      token.content = `<FootnoteCite num="${num}" />`; 
    }

    state.pos += match[0].length;
    return true;
  });
};