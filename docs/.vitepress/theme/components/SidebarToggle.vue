<script setup>
import { ref, computed, onMounted } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()
const collapsed = ref(false)

// 浏览器模式下的 toggle
const toggle = () => {
  collapsed.value = !collapsed.value
  if (typeof document !== 'undefined') {
    if (collapsed.value) {
      document.documentElement.classList.add('sidebar-collapsed')
    } else {
      document.documentElement.classList.remove('sidebar-collapsed')
    }
  }
}

// 仅在 mounted 后绑定初始状态（可选）
onMounted(() => {
  if (collapsed.value) {
    document.documentElement.classList.add('sidebar-collapsed')
  }
})

const show = computed(() => {
  return frontmatter.value.layout !== 'home' && frontmatter.value.sidebar !== false
})
</script>


<template>
  <div v-if="show" class="sidebar-toggle-container">
    <button
      class="sidebar-toggle"
      @click="toggle"
      :title="collapsed ? '展开侧边栏' : '折叠侧边栏'"
    >
      <svg v-if="collapsed" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
    </button>
  </div>
</template>
<style>
/* --- 核心逻辑 --- */

/* 1. 强制覆盖 CSS 变量 */
/* 使用 !important 确保即使在 2K/4K 屏的媒体查询下，这个变量也是 0 */
:root.sidebar-collapsed {
  --vp-sidebar-width: 0px !important;
}

/* 2. 处理侧边栏本体 */
:root.sidebar-collapsed .VPSidebar {
  /* 强制移出屏幕 */
  transform: translateX(-100%) !important;
  /* 确保不占位，彻底隐藏 */
  width: 0 !important;
  visibility: hidden;
  opacity: 0;
  /* 防止在隐藏状态下触发鼠标事件 */
  pointer-events: none; 
}

/* 3. 处理内容区域 (关键修复点) */
/* 针对所有屏幕尺寸，强制移除左边距 */
:root.sidebar-collapsed .VPContent {
  padding-left: 0 !important;
  margin-left: 0 !important; 
  /* 确保内容过渡平滑 */
  transition: padding-left 0.3s ease, margin-left 0.3s ease;
}

/* 针对 2K 宽屏的特殊修复：VitePress 在大屏下有时会给 .VPDoc 加额外的 padding */
:root.sidebar-collapsed .VPDoc {
  padding-left: 0 !important;
  width: 100% !important;
  max-width: 100% !important;
}

/* --- 按钮样式 --- */

.sidebar-toggle {
  position: fixed;
  /* 如果侧边栏展开，跟随变量；如果折叠，强制归零 */
  left: var(--vp-sidebar-width);
  top: 50%;
  transform: translateY(-50%);
  z-index: 200; /* 确保层级 */
  
  width: 24px;
  height: 50px;
  
  /* 样式美化 */
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-left: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-text-2);
  box-shadow: 2px 0 8px rgba(0,0,0,0.05);
  
  /* 关键：给 left 属性加过渡，让它跟着侧边栏滑回去，而不是瞬移 */
  transition: left 0.3s ease, color 0.2s, background-color 0.2s;
}

/* 当折叠时，强制按钮贴在最左边（双重保险） */
:root.sidebar-collapsed .sidebar-toggle {
  left: 0 !important;
}

.sidebar-toggle:hover {
  color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-alt);
}

/* --- 宽屏体验优化 (可选) --- */
/* 在折叠侧边栏后，让文章内容在 2K 屏上居中并加宽，而不是缩在一角 */
:root.sidebar-collapsed .container {
  margin: 0 auto !important;
  max-width: 1200px !important; /* 你可以根据喜好调整这个宽度 */
}
</style>