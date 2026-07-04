---
title: 纪念第一次MC1.16全成就
dates: [2026-07-02,]
cover: https://ghproxy.net/https://raw.githubusercontent.com/Orisnow/Images/refs/heads/main/covers/%E7%AC%AC%E4%B8%80%E6%AC%A1AA.png
abstract: 我能在患有痴呆症的情况下写完这篇博文吗?
recommend: 1161
tags: 
  - MC
  - 游戏
---

## 成就

## 彩蛋
首先感谢你能看到这里！在游玩的过程中，我发现了一艘很有趣的"错位船"，它由两艘材料不同的船头船尾在区块边界处拼接而成，如果你感兴趣，可以通过种子<span class="inline-copy-link" data-copy="-1417704659162122124">
  -1417704659162122124
</span>进入世界，并输入指令<code class="inline-code">\tp -2286 56 8301</code>查看

![神秘错位船](/blog/essays/my_first_MCAA/misaligned_shipwreck.png)


<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (typeof window !== 'undefined') {
    const copyLinks = document.querySelectorAll('.inline-copy-link');
    
    copyLinks.forEach(link => {
      if (link.hasAttribute('data-bound')) return;
      link.setAttribute('data-bound', 'true');

      // 动态注入提示框的 HTML 结构，避免直接写在 MD 里被解析器误伤
      const tooltip = document.createElement('span');
      tooltip.className = 'copy-tooltip';
      tooltip.innerText = '已复制！';
      link.appendChild(tooltip);

      link.addEventListener('click', () => {
        const textToCopy = link.getAttribute('data-copy') || '';
        
        // 兼容性复制逻辑
        const performCopy = (text) => {
          if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
            return navigator.clipboard.writeText(text);
          }
          return new Promise((resolve, reject) => {
            try {
              const textArea = document.createElement('textarea');
              textArea.value = text;
              textArea.style.position = 'fixed';
              textArea.style.top = '-9999px';
              document.body.appendChild(textArea);
              textArea.focus();
              textArea.select();
              const successful = document.execCommand('copy');
              document.body.removeChild(textArea);
              successful ? resolve() : reject(new Error('copy failed'));
            } catch (err) {
              reject(err);
            }
          });
        };

        performCopy(textToCopy)
          .then(() => {
            // 显示提示框
            tooltip.classList.add('show');
            
            // 1.5 秒后隐藏
            setTimeout(() => {
              tooltip.classList.remove('show');
            }, 1500);
          })
          .catch(err => {
            console.error('复制失败:', err);
          });
      });
    });
  }
})
</script>

<style scoped>
/* 类似超链接的数字样式 */
.inline-copy-link {
  position: relative;     /* 为提示框提供定位基准 */
  color: #3eaf7c;         /* 主题色 */
  text-decoration: underline;
  text-underline-offset: 3px;
  cursor: pointer;
  display: inline;        /* 改回 inline，融入文本，绝不强制换行 */
  word-break: break-all;  /* 如果数字太长到了行尾，允许数字自身折行 */
}

/* Hover 时数字变色 */
.inline-copy-link:hover {
  color: #2c7a54;
}

/* 弹出的小气泡基础样式 */
:deep(.copy-tooltip) {
  visibility: hidden;
  position: absolute;
  z-index: 100;
  
  /* 改用基准线定位，确保即使文字折行，气泡也能挂在点击区域上方 */
  bottom: 100%;        
  left: 50%;
  transform: translateX(-50%) translateY(-4px);
  
  /* 视觉样式 */
  background-color: #4caf50; 
  color: #ffffff;
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  white-space: nowrap;
  line-height: 1.2;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);

  /* 动效 */
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: none; 
}

/* 小气泡下方的小箭头 */
:deep(.copy-tooltip::after) {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 4px;
  border-style: solid;
  border-color: #4caf50 transparent transparent transparent;
}

/* 点击激活时的显示状态 */
:deep(.copy-tooltip.show) {
  visibility: visible;
  opacity: 1;
  transform: translateX(-50%) translateY(-8px); /* 向上飘出一点点 */
}
/* 行内代码块的精致小样式 */
.inline-code {
  background-color: rgba(27, 31, 35, 0.05); /* 浅灰底色，暗色模式下可以改用 rgba(255,255,255,0.1) */
  color: #e06c75;                          /* 经典的代码红/粉色，可根据喜好调整 */
  padding: 0.2em 0.4em;
  margin: 0;
  font-size: 85%;
  font-family: monospace, monospace;       /* 强行等宽字体 */
  border-radius: 3px;
  border: 1px solid rgba(27, 31, 35, 0.08);
}
#彩蛋 {
  background: linear-gradient(
    90deg, 
    #ff416c, #ff4b2b, #a8ff78, #78ffd6, #48c6ef, #6f86d6, #ff416c
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: flowLight 5s linear infinite;
}

@keyframes flowLight {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 300% 50%;
  }
}
</style>
