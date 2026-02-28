<template>
  <span class="whisper-root" @click="isActive = !isActive" :class="{ 'is-active': isActive }">
    <span class="whisper-bracket left">｢</span>

    <span v-if="isActive" class="whisper-body">
      <slot />
    </span>
    <span v-else class="whisper-placeholder"></span>

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
</script>

<style lang="css" scoped>
.whisper-root {
  display: inline;
  cursor: pointer;
  /* 过渡效果主要针对颜色 */
  transition: color 0.3s ease;
  position: relative;
  padding: 0 -1px;
}

/* --- 括号逻辑 --- */
.whisper-bracket {
  display: inline-block; /* 必须是 block 才能应用 transform 动画 */
  font-weight: 1200;
  font-size: 0.88em;
  line-height: 0;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  /* 收起状态的默认颜色：浅灰色 */
  color: #a0a0a0; 
}

/* Hover 时、以及展开后的括号颜色 */
.whisper-root:hover .whisper-bracket,
.whisper-root.is-active .whisper-bracket {
  color: rgb(197, 186, 255);
}

.whisper-bracket.left {
  vertical-align: 0.2em;
}
.whisper-bracket.right {
  vertical-align: -0.1em;
}

/* --- 内容体逻辑 --- */
.whisper-body {
  font-size: 0.95rem;
  color: rgb(173, 165, 211); /* 展开后的文字颜色 */
  padding: 0 2px;
}

.whisper-placeholder {
   margin: 0 -1.5px;
}

/* --- 自由发挥：Vue Transition 动画 --- */
/* 实现一种文字“滑入”并“淡入”的效果 */
.whisper-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.whisper-fade-leave-active {
  transition: all 0.2s ease;
}

.whisper-fade-enter-from,
.whisper-fade-leave-to {
  opacity: 0;
  transform: scaleX(0.5); /* 从中心轴稍微挤压 */
  filter: blur(2px);      /* 增加一点点 Blackwell 能轻松处理的模糊感 */
}
</style>