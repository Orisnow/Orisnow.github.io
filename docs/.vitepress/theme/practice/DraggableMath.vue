<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';

// 接收 LaTeX 源码字符串
const props = defineProps({
  tex: {
    type: String,
    required: true
  }
});

// Refs
const scrollContainer = ref(null);
const copyBtnText = ref('Copy TeX');
const isDragging = ref(false);

// 拖动相关的状态变量 (不需要响应式)
let startX = 0;
let startScrollLeft = 0;

// --- 核心功能：渲染 MathJax ---
const renderMath = async () => {
  if (!scrollContainer.value) return;
  
  // 1. 清空当前内容
  scrollContainer.value.innerHTML = '';
  
  // 2. 检查 MathJax 是否加载
  if (!window.MathJax) {
    scrollContainer.value.innerText = 'MathJax not loaded...';
    return;
  }

  try {
    // 3. 调用 MathJax API 渲染
    const html = await window.MathJax.tex2chtmlPromise(props.tex, {
      display: true, // 强制块级公式
    });
    
    // 4. 插入 DOM
    scrollContainer.value.appendChild(html);
    
    // 5. 刷新样式 (重要)
    window.MathJax.startup.document.clear();
    window.MathJax.startup.document.updateDocument();
  } catch (err) {
    console.error('MathJax render error:', err);
    scrollContainer.value.innerText = 'Error: ' + err.message;
  }
};

// --- 需求 3, 4, 5: 拖动逻辑 ---

const onMouseDown = (e) => {
  isDragging.value = true;
  startX = e.pageX;
  startScrollLeft = scrollContainer.value.scrollLeft;
  
  // 关键：绑定到 window 以支持“超出区块仍能继续拖” (需求 5)
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
};

const onMouseMove = (e) => {
  if (!isDragging.value) return;
  e.preventDefault(); // 防止选中文字
  
  // 计算拖动距离
  const x = e.pageX;
  const walk = (x - startX) * 1.5; // 1.5 是速度系数
  
  // 更新滚动位置
  scrollContainer.value.scrollLeft = startScrollLeft - walk;
};

const onMouseUp = () => {
  isDragging.value = false;
  // 移除全局监听
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mouseup', onMouseUp);
};

// --- 需求 7: 复制按钮 ---
const copyTex = () => {
  navigator.clipboard.writeText(props.tex).then(() => {
    copyBtnText.value = 'Copied!';
    setTimeout(() => {
      copyBtnText.value = 'Copy TeX';
    }, 2000);
  });
};

// --- 生命周期 ---
onMounted(() => {
  renderMath();
  
  // 如果页面初次加载 MathJax 还没准备好，轮询检查一下
  if (!window.MathJax) {
    const timer = setInterval(() => {
      if (window.MathJax) {
        clearInterval(timer);
        renderMath();
      }
    }, 200);
  }
});

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('mouseup', onMouseUp);
});

// 监听 props 变化，支持动态更新公式
watch(() => props.tex, renderMath);
</script>

<template>
  <div 
    class="math-drag-wrapper" 
    :class="{ 'is-dragging': isDragging }"
  >
    <button class="math-copy-btn" @click="copyTex">
      {{ copyBtnText }}
    </button>

    <div 
      class="math-scroll-container" 
      ref="scrollContainer"
      @mousedown="onMouseDown"
    >
      </div>
  </div>
</template>

<style scoped>
/* 外部包裹层：用于定位复制按钮 */
.math-drag-wrapper {
  position: relative;
  margin: 1.5rem 0;
  /* 增加一点 padding 防止 hover 按钮时闪烁 */
  padding-top: 5px; 
}

/* 复制按钮样式 */
.math-copy-btn {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 4px 8px;
  font-size: 12px;
  background: rgba(60, 60, 67, 0.7);
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: auto;
}

/* Hover 显示按钮 */
.math-drag-wrapper:hover .math-copy-btn {
  opacity: 1;
}

/* 滚动容器样式 */
.math-scroll-container {
  width: 100%;
  overflow-x: auto; /* 允许 JS 滚动 */
  overflow-y: hidden; /* 需求 6: 内部只处理横向，纵向由内容决定 */
  
  /* 需求 1: 隐藏横向滚动条 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE */
  
  /* 需求 2: 默认鼠标样式 */
  cursor: ew-resize;
  
  /* 防止选中 */
  user-select: none;
  
  padding: 1rem 0;
}

/* Chrome/Safari 隐藏滚动条 */
.math-scroll-container::-webkit-scrollbar {
  display: none;
}

/* 拖动时的样式优化 */
.math-drag-wrapper.is-dragging .math-scroll-container {
  cursor: grabbing; /* 抓取时的手型 */
  cursor: -webkit-grabbing;
}
</style>