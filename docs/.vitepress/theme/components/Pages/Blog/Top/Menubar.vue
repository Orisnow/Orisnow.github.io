<template>
  <div class="menu-bar">
    <button class="hamburger-btn" @click="isOpen = !isOpen" :class="{ 'is-active': isOpen }">
      <span class="icon">{{ isOpen ? '✕' : '☰' }}</span>
    </button>

    <transition name="dropdown">
      <div v-if="isOpen" class="dropdown-wrapper">
        <div class="dropdown-content" @click="handleContentClick">
          <MySidebar />
        </div>
        <div class="dropdown-mask" @click="isOpen = false"></div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MySidebar from '../Left/Sidebar/MySidebar.vue';

const isOpen = ref(false);

const handleContentClick = (event: Event) => {
  // 只有点击的是链接 (A 标签) 时才收起，防止点在空白处也关掉
  const target = event.target as HTMLElement;
  if (target.tagName === 'A') {
    isOpen.value = false;
  }
};
</script>

<style lang="css" scoped>
.menu-bar {
  position: relative; /* 关键：让 dropdown-wrapper 相对于我定位 */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  /* 确保 Menubar 在 z-index 上高于页面其他内容 */
  z-index: 100; 
}

/* 按钮点击后的旋转效果（顺带手加个小动画，更语义化） */
.hamburger-btn .icon {
  display: inline-block;
  transition: transform 0.3s ease;
}
.hamburger-btn.is-active .icon {
  transform: rotate(90deg); /* 变成 X 的时候转一下 */
}

.dropdown-wrapper {
  position: absolute;
  top: 48px; 
  left: 0;
  width: 100%;
  /* 移除这里的 z-index，由父级 menu-bar 统一控制 */
}

.dropdown-content {
  width: 100%;
  height: 60vh;
  background-color: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
  box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  overflow-y: auto;
  display: flex;
}

/* 遮罩层：确保它能够遮住下方的正文 */
.dropdown-mask {
  position: fixed;
  top: calc(64px + 48px); /* 顶栏高度 + Menubar 高度 */
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.4);
  z-index: -1; 
}
</style>