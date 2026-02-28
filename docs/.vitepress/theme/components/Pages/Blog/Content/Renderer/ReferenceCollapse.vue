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
import { ref, onMounted, nextTick } from 'vue';
import SvgIcon from '../../../../Tools/SvgIcon.vue';

const isExpanded = ref(false);
const hasMore = ref(false);
const totalCount = ref(0);
const contentRef = ref<HTMLElement | null>(null);

// 动态控制高度，解决卡顿
const dynamicHeight = ref('76px'); 

const toggle = () => {
  if (!contentRef.value) return;
  
  if (!isExpanded.value) {
    // 准备展开：设置为真实高度
    dynamicHeight.value = `${contentRef.value.scrollHeight}px`;
    isExpanded.value = true;
  } else {
    // 准备收起：先从 auto/真实高度 明确变回当前高度，再瞬间变回初始高度
    dynamicHeight.value = `${contentRef.value.scrollHeight}px`;
    // 强制重绘
    contentRef.value.offsetHeight; 
    dynamicHeight.value = '76px';
    isExpanded.value = false;
  }
};

onMounted(async () => {
  await nextTick();
  setTimeout(() => {
    if (contentRef.value) {
      const items = contentRef.value.querySelectorAll('li');
      totalCount.value = items.length;
      if (totalCount.value > 2 || contentRef.value.scrollHeight > 80) {
        hasMore.value = true;
      }
    }
  }, 100);
});
</script>

<style scoped>
.ref-wrapper {
  margin: 2rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.3s ease;
  position: relative;
}

/* 悬浮时边框略微加深 */
.ref-wrapper:hover {
  border-color: var(--vp-c-brand-1);
}

.ref-content {
  padding: 16px 20px;
  max-height: 76px; /* 初始值 */
  overflow: hidden;
  /* 使用 ease-in-out 或更柔和的曲线 */
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

/* 优化：收起时去掉渐隐遮罩的延迟 */
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

.ref-wrapper {
  max-height: 2000px !important; /* 展开后足够高 */
  padding-bottom: 24px; /* 展开后底部留白更舒服 */
}

/* 控制条优化 */
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

/* 列表美化 */
.ref-content :deep(ul) {
  list-style: none;
  padding: 0;
  margin: 0;
}

.ref-content :deep(li) {
  margin-bottom: 8px;
  line-height: 1.6;
  font-family: var(--vp-font-family-mono); /* 物理资料用等宽字体更有feel */
  font-size: 0.88rem;
  color: var(--vp-c-text-1);
  display: flex;
  gap: 10px;
}

/* 如果你的列表里有链接 */
.ref-content :deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: underline dotted;
  text-underline-offset: 4px;
}

.ref-content :deep(a:hover) {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}

/* 动画 */
.icon-transition {
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.rotate-180 {
  transform: rotate(180deg);
}

.icon-box {
  display: flex;
  transition: transform 0.3s ease;
}
</style>