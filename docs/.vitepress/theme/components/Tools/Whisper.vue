<template>
  <span class="whisper-root" @click="isActive = !isActive" :class="{ 'is-active': isActive }">
    <span class="whisper-bracket left">⌜</span>
    <span class="whisper-body">
      <slot />
    </span>
    <span class="whisper-bracket right">⌟</span>
  </span>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isActive = ref(false);
</script>

<style scoped>
.whisper-root {
  display: inline;
  color: var(--vp-c-text-2); /* 提高默认亮度，从 text-3 改为 text-2 */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 0 2px;
}

.whisper-bracket {
  color: rgb(196, 255, 180);
  font-weight: 1200; /* 极粗 */
  font-size: 0.9em; /* 放大 */
  line-height: 0;
  transition: all 0.3s ease;
  user-select: none;
}

/* 调整直角号的位置，让它真的像“括”起来 */
.whisper-bracket.left {
  vertical-align: 0.5em;
  margin-right: -1px;
}
.whisper-bracket.right {
  vertical-align: -0.3em;
  margin-left: -1px;
}

.whisper-body {
  font-size: 0.95rem;
}


</style>