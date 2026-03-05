<template>
  <div class="ex-wrapper" :class="{ 'is-expanded': isExpanded }">
    <div class="ex-header" @click="toggle">
      <div class="ex-label-group">
        <span class="ex-tag">EXAMPLE</span>
        <span class="ex-title" v-if="title">{{ title }}</span>
        <span class="ex-tip" v-else>点击收起/展开详情</span>
      </div>

      <div class="ex-icon" :class="{ 'rotate-180': isExpanded }">
        <SvgIcon name="hero-side-down" size="20px" />
      </div>
    </div>

    <div 
      ref="bodyRef" 
      class="ex-body"
      :style="{ maxHeight: bodyHeight }"
    >
      <div class="ex-inner">
        <div class="ex-content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SvgIcon from '../../../../Tools/SvgIcon.vue';

defineProps<{ title?: string }>();

// 1. 状态默认设为 true
const isExpanded = ref(true);
const bodyRef = ref<HTMLElement | null>(null);
// 2. 初始高度设为 auto，确保首屏加载时内容可见且高度正确
const bodyHeight = ref('auto');

const toggle = () => {
  if (!bodyRef.value) return;
  
  if (!isExpanded.value) {
    // 展开逻辑
    bodyHeight.value = `${bodyRef.value.scrollHeight}px`;
    isExpanded.value = true;
    // 动画结束后释放高度限制
    setTimeout(() => { 
      if(isExpanded.value) bodyHeight.value = 'auto' 
    }, 400);
  } else {
    // 收起逻辑：从 auto 切换到具体的 px 值以触发过渡动画
    bodyHeight.value = `${bodyRef.value.scrollHeight}px`;
    
    // 强制重绘 (Reflow)，确保浏览器捕捉到从 auto 到具体数值的变化
    bodyRef.value.offsetHeight; 
    
    bodyHeight.value = '0px';
    isExpanded.value = false;
  }
};
</script>

<style scoped>
/* 样式部分保持不变，仅需确认 transition 正常工作 */
.ex-wrapper {
  margin: 2rem 0;
  border-top: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
  transition: background-color 0.3s ease;
}

.ex-header {
  padding: 0.85rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.ex-label-group {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.ex-tag {
  font-family: var(--vp-font-family-mono);
  font-size: 0.65rem;
  font-weight: bold;
  color: var(--vp-c-brand-1);
  border: 1.5px solid var(--vp-c-brand-1);
  padding: 1px 5px;
  border-radius: 4px;
  letter-spacing: 0.5px;
  flex-shrink: 0;
}

.ex-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.4;
}

.ex-tip {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  font-style: italic;
}

.ex-body {
  overflow: hidden;
  /* 关键：确保收起时有动画平滑感 */
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.ex-inner {
  padding: 0 1.2rem 1.2rem 1.2rem;
  border-left: 2px solid var(--vp-c-brand-soft);
  margin-left: 0.8rem;
  margin-bottom: 0.5rem;
}

.ex-content {
  font-size: 0.92rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.ex-icon {
  color: var(--vp-c-text-3);
  transition: transform 0.3s ease;
  flex-shrink: 0;
  margin-left: 10px;
}

/* 初始状态图标就是旋转后的 */
.rotate-180 { transform: rotate(180deg); }

:deep(.ex-content p) {
  margin: 0.6rem 0;
}
</style>