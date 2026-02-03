<template>
  <div class="category-card">
    <a class="category-card-link" :href="withBase(href)">
      <h3 class="category-card-title">
        <slot name="category-card-title"></slot>
      </h3>
      <div class="category-card-content">
        <slot name="category-card-content"></slot>
      </div>
      <div class="category-card-image">
        <slot name="category-card-image"></slot>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { withBase } from 'vitepress';

interface Props {
    href: string,
}
const props = defineProps<Props>()

</script>

<style lang="css" scoped>
.category-card-link {
  display: flex; /* 横向排列图片和文字 */
  align-items: stretch;
  text-decoration: none;
  background-color: var(--ctp-mocha-surface0); /* 假设你在深色模式 */
  border-radius: 12px;
  overflow: hidden; /* 确保图片不会超出圆角 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid transparent;
}

.category-card-link:hover {
  transform: translateY(-5px);
  border-color: var(--garden-theme); /* 引用你定义的薰衣草紫 */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
</style>