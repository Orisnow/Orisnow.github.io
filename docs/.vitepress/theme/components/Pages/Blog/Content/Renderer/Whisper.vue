<template>
  <span 
    class="whisper-root" 
    @click="handleToggle($event)" 
    :class="{ 'is-active': isActive }"
  >
    <span class="whisper-bracket left">｢</span>

    <Transition name="whisper-fade">
      <span v-if="isActive" class="whisper-body">
        <slot />
      </span>
      <span v-else class="whisper-placeholder"></span>
    </Transition>

    <span class="whisper-bracket right">｣</span>
  </span>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { defaultWhisper } from '../../../../../utils/globalState.mts';

const isActive = ref(defaultWhisper.value);

watch(defaultWhisper, (newVal) => {
  isActive.value = newVal;
});

// 核心逻辑：物理拦截器
const handleToggle = (event: MouseEvent) => {
  // 如果按下的是 Ctrl (Win/Linux) 或 Command (Mac)
  // 或者按下的是鼠标中键 (button === 1)
  if (event.ctrlKey || event.metaKey || event.button === 1) {
    // 物理放行：不做任何折叠动作，让内部的 SmartLink 正常工作
    return;
  }
  
  // 正常点击逻辑
  isActive.value = !isActive.value;
};
</script>

<style lang="css" scoped>
.whisper-root {
  display: inline;
  cursor: pointer;
  transition: color 0.3s ease;
  position: relative;
  -webkit-user-select: none;
  user-select: none;
  /* 允许在 root 级别处理折行 */
  white-space: normal; 
}

/* --- 括号逻辑 --- */
.whisper-bracket {
  display: inline; /* 回归 inline，确保括号紧贴文字 */
  font-weight: 1200;
  font-size: 0.88em;
  transition: color 0.3s ease;
  color: #a0a0a0; 
}

.whisper-root:hover .whisper-bracket,
.whisper-root.is-active .whisper-bracket {
  color: rgb(197, 186, 255);
}

.whisper-bracket.left {
  vertical-align: 0.15em;
  margin-right: -0.1em;
}
.whisper-bracket.right {
  vertical-align: -0.12em;
  margin-left: -0.1em;
}

/* --- 内容体逻辑 --- */
.whisper-body {
  display: inline; /* 核心：回归 inline 以支持正常折行 */
  font-size: 0.95rem;
  color: rgb(173, 165, 211);
  /* 移除 padding，避免在行首行末产生奇怪的空隙 */
  padding: 0;
}

.whisper-placeholder {
  display: inline;
  width: 0;
}

/* --- Vue Transition 动画（折行友好版） --- */
/* 注意：inline 元素不支持 transform，所以我们用 opacity 和 filter */
.whisper-fade-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.whisper-fade-enter-from,
.whisper-fade-leave-to {
  opacity: 0;
  filter: blur(4px);
}
</style>