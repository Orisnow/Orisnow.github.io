<template>
  <div class="ref-wrapper" :class="{ 'is-expanded': isExpanded }">
    <div 
      ref="contentRef" 
      class="ref-content" 
      :style="{ maxHeight: isExpanded ? dynamicHeight : '76px' }"
    >
      <slot />
    </div>
    
    <div v-if="hasMore" class="ref-expand-ctrl" @click="toggle">
      <span>{{ isExpanded ? '收起资料' : `展开更多 (${totalCount})` }}</span>
      <div class="icon-box" :class="{ 'rotate-180': isExpanded }">
        <SvgIcon name="hero-side-down" size="24px" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import SvgIcon from '../../../../Tools/SvgIcon.vue';

// 内部维护真实的 namespace
const activeNamespace = ref('');
const isExpanded = ref(false);
const hasMore = ref(false);
const totalCount = ref(0);
const contentRef = ref<HTMLElement | null>(null);
const dynamicHeight = ref('76px'); 

const expand = () => {
  if (!contentRef.value) return;
  dynamicHeight.value = `${contentRef.value.scrollHeight}px`;
  isExpanded.value = true;
};

const toggle = () => {
  if (!contentRef.value) return;
  if (!isExpanded.value) {
    expand();
  } else {
    dynamicHeight.value = `${contentRef.value.scrollHeight}px`;
    contentRef.value.offsetHeight; 
    dynamicHeight.value = '76px';
    isExpanded.value = false;
  }
};

/**
 * 物理唤醒：监听 Hash 变化并自动弹开
 */
const handleHashChange = () => {
  const hash = decodeURIComponent(window.location.hash);
  if (!hash || !contentRef.value) return;

  const targetId = hash.replace('#', '');
  
  // 关键：直接通过 ID 在组件内部查找元素（不再依赖 namespace 字符串匹配）
  // 因为 renderer 已经给 li 注入了精准的 id="ref-xxx-1"
  const targetEl = contentRef.value.querySelector(`[id="${CSS.escape(targetId)}"]`);
  
  if (targetEl) {
    // 1. 如果没展开，则弹开
    if (!isExpanded.value) expand();
    
    // 2. 物理对齐：等待展开动画（通常 300ms）完成后平滑滚动
    setTimeout(() => {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // 增加高亮暗示
      targetEl.classList.add('ref-highlight');
      setTimeout(() => targetEl.classList.remove('ref-highlight'), 2000);
    }, 350);
  }
};

onMounted(async () => {
  await nextTick();
  
  // --- 第一步：物理修复逻辑 ---
  const section = contentRef.value?.closest('.section-group');
  const h2 = section?.querySelector('h2');
  if (h2?.id && section) {
    activeNamespace.value = h2.id;
    // 修正内部所有 dynamic-ref-item 的 ID
    const items = section.querySelectorAll<HTMLElement>('.dynamic-ref-item');
    items.forEach((li) => {
      const num = li.getAttribute('data-num');
      li.id = `ref-${h2.id}-${num}`;
      li.classList.remove('dynamic-ref-item');
    });
  }

  // --- 第二步：检测是否需要“展开更多” ---
  setTimeout(() => {
    if (contentRef.value) {
      const items = contentRef.value.querySelectorAll('li');
      totalCount.value = items.length;
      // 物理判定：超过 2 条或者高度超过 100px 就显示折叠
      if (totalCount.value > 2 || contentRef.value.scrollHeight > 100) {
        hasMore.value = true;
      } else {
        dynamicHeight.value = 'auto';
      }
    }
  }, 200);

  // --- 第三步：开启 Hash 监听 ---
  window.addEventListener('hashchange', handleHashChange);
  handleHashChange(); // 初始检查
});

onUnmounted(() => {
  window.removeEventListener('hashchange', handleHashChange);
});
</script>

<style scoped>
.ref-content {
  overflow: hidden;
  transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 引用高亮样式 */
:deep(.ref-highlight) {
  background-color: var(--vp-c-brand-soft);
  transition: background-color 0.5s;
  border-radius: 4px;
}
</style>

<style scoped>
.ref-wrapper {
  margin: 2rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.3s ease;
  position: relative;
}

.ref-wrapper:hover {
  border-color: var(--vp-c-brand-1);
}

.ref-content {
  padding: 16px 20px;
  /* 初始可以稍微大一点，或者干脆在没 hasMore 时不限制 */
  max-height: 100px; 
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

/* 渐隐遮罩 */
.ref-wrapper:not(.is-expanded) .ref-content::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background: linear-gradient(to bottom, transparent, var(--vp-c-bg-soft));
  pointer-events: none;
}

.ref-wrapper.is-expanded {
  max-height: 2000px !important;
  padding-bottom: 24px;
}

/* 控制条 */
.ref-expand-ctrl {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  background-color: var(--vp-c-bg-mute);
  cursor: pointer;
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-brand-1);
  font-size: 0.85rem;
  font-weight: 500;
  user-select: none;
  transition: background-color 0.2s;
}

.ref-expand-ctrl:hover {
  background-color: var(--vp-c-default-soft);
}

/* 列表容器 */
.ref-content :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* 核心优化：列表项对齐逻辑 */
.ref-content :deep(li) {
  margin-bottom: 12px;
  line-height: 1.6;
  font-family: var(--vp-font-family-mono);
  font-size: 0.88rem;
  color: var(--vp-c-text-1);
  
  /* 重点：不再使用 display: flex 和 gap */
  /* 使用悬挂缩进，强制 [n] 后产生固定宽度的空白 */
  padding-left: 2.2rem; /* 给 [n] 预留空间 */
  text-indent: -2.2rem; /* 让第一行缩回去，实现对齐 */
  transition: all 0.2s ease;
  word-break: break-word;
}

/* 统一 [n] 编号的颜色与样式 */
/* 不管它是否在 <a> 内部，或者是纯文本开头 */
.ref-content :deep(li) {
  /* 确保首个 [1] 始终有品牌色暗示 */
  font-variant-numeric: tabular-nums;
}

/* 链接样式 */
.ref-content :deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: underline dotted;
  text-underline-offset: 4px;
  transition: all 0.2s;
  /* 解决 flex 改为 block 后链接换行的问题 */
  display: inline; 
}

.ref-content :deep(a:hover) {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}

/* 针对无链接条目的 hover 反馈 */
.ref-content :deep(li:hover) {
  background-color: var(--vp-c-bg-mute);
  border-radius: 6px;
}

/* 锚点跳转高亮 */
.ref-content :deep(li:target) {
  background-color: var(--vp-c-brand-soft);
  border-radius: 6px;
  animation: highlight-fade 2s ease-out;
}

@keyframes highlight-fade {
  from { background-color: var(--vp-c-brand-soft); }
  to { background-color: var(--vp-c-bg-mute); }
}

/* 图标动画 */
.icon-box {
  display: flex;
  transition: transform 0.3s ease;
}

.rotate-180 {
  transform: rotate(180deg);
}

/* 当 li 的 id 匹配当前的 URL Hash 时 */
.ref-content :deep(li:target) {
  background-color: var(--vp-c-brand-soft); /* 使用品牌浅色背景 */
  box-shadow: -4px 0 0 var(--vp-c-brand-1); /* 左侧加一道品牌色竖杠，很有“被选中”的感觉 */
  border-radius: 4px;
  padding-left: 1.5rem; /* 稍微向右推一点，做一个位移动画 */
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* 物理优化：防止跳得太靠上被导航栏挡住 */
.ref-content :deep(li) {
  scroll-margin-top: 120px; 
}
</style>