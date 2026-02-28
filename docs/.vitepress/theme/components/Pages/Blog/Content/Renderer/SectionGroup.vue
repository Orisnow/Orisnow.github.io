<template>
  <div class="section-container" :class="{ 'is-collapsed': isCollapsed }">
    <div class="section-header" ref="titleRef">
      <div class="arrow-icon" @click.stop="toggle">
        <SvgIcon name="hero-side-down" size="24px"/>
      </div>
      <slot name="title" />
    </div>
    
    <div 
      ref="bodyRef" 
      class="section-body"
      :style="{ maxHeight: isCollapsed ? '0px' : (bodyHeight === 'auto' ? 'none' : bodyHeight) }"
      @transitionend="!isCollapsed && (bodyHeight = 'auto')"
    >
      <div class="body-content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue';
import SvgIcon from '../../../../Tools/SvgIcon.vue';
import { useRouter } from 'vitepress';

const isCollapsed = ref(false);
const titleRef = ref<HTMLElement | null>(null);
const bodyRef = ref<HTMLElement | null>(null); // 新增：引用内容区域
const bodyHeight = ref('auto'); // 动态高度
const { hash } = useRouter().route;

const toggle = async () => {
  if (!bodyRef.value) return;
  
  // 在切换前先锁定当前高度
  bodyHeight.value = `${bodyRef.value.scrollHeight}px`;
  
  // 强制重绘，确保浏览器识别到高度从 具体数值 开始变化
  await nextTick();
  bodyRef.value.offsetHeight; 

  isCollapsed.value = !isCollapsed.value;
  
  // 如果是收起，设为 0；如果是展开，设为 scrollHeight
  bodyHeight.value = isCollapsed.value ? '0px' : `${bodyRef.value.scrollHeight}px`;
};

// 监听侧边栏锚点跳转
const checkHash = () => {
  if (!hash) return;
  const id = decodeURIComponent(hash).substring(1);
  const h2 = titleRef.value?.querySelector('h2');
  if (h2 && h2.id === id) {
    isCollapsed.value = false;
    bodyHeight.value = 'auto'; // 锚点跳转建议直接显示
  }
};

onMounted(() => {
  checkHash();
});
watch(() => hash, () => checkHash());
</script>

<style scoped>
.section-container {
  margin: 1.5rem 0;
  position: relative;
}

.section-header {
  display: flex;
  align-items: center;
  position: relative;
}

.section-header :deep(h2) {
  margin: 0 !important;
  border: none !important;
  padding: 0.5rem 0 !important;
}

.arrow-icon {
  position: absolute;
  left: -32px;
  top: 50%;
  /* 初始状态：展开（垂直向下） */
  transform: translateY(-50%) rotate(0deg); 
  display: flex;
  cursor: pointer;
  color: var(--vp-c-text-3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 4px;
  z-index: 10;
}

/* 旋转逻辑：折叠时向右转回 -90度 或 保持 0，这里取决于你的图标方向 */
/* 假设 hero-side-down 默认向下 */
.is-collapsed .arrow-icon {
  transform: translateY(-50%) rotate(-90deg);
}

.section-body {
  overflow: hidden;
  /* 高度、透明度、位移三合一动画 */
  transition: 
    max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.3s ease,
    transform 0.3s ease;
  opacity: 1;
  transform: translateY(0);
}

.is-collapsed .section-body {
  max-height: 0;
  opacity: 0;
  transform: translateY(-10px); /* 收起时向上轻微漂移 */
  pointer-events: none; /* 防止收起后还能触发内部点击 */
}

.body-content {
  /* 解决内部 margin 塌陷导致的动画抖动 */
  padding: 1px 0; 
}
</style>