<template>
  <div class="category-card">
    <a class="category-card-link" :href="withBase(href)">
      <div class="card-left-part">
        <div class="card-header">
          <div class="card-icon">
            <slot name="category-card-icon"></slot> 
          </div>
          <h3 class="category-card-title">
            <slot name="category-card-title"></slot>
          </h3>
        </div>
        <div class="category-card-content">
          <slot name="category-card-content"></slot>
        </div>
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
const props = defineProps<Props>();

</script>

<style lang="css" scoped>

/* ai写的 */
.category-card-link {
  display: flex;
  text-decoration: none;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  overflow: hidden;
  height: 160px; /* 设定一个标准长方形高度 */
  transition: all 0.3s ease;
}

/* 左侧容器：纵向排列 */
.card-left-part {
  flex: 1;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* 头部在上，内容在下 */
  min-width: 0;
}

/* 左上方：图标和标题并排 */
.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
}

.card-icon :deep(svg), 
.card-icon :deep(img) {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.category-card-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 左下方：内容描述 */
.category-card-content {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  /* 限制行数，防止内容过多溢出 */
  display: -webkit-box;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.5;
}

/* 右侧图片区域 */
.category-card-image {
  width: 1.5rem; /* 设定图片部分的宽度 */
  flex-shrink: 0;
  border-left: 1px solid var(--vp-c-divider);
}

.category-card-image :deep(img) {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 核心：高度占满并裁剪 */
  transition: transform 0.5s ease;
}

/* 交互效果 */
.category-card-link:hover {
  border-color: purple;
  transform: translateY(-4px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

.category-card-link:hover .category-card-image :deep(img) {
  transform: scale(1.1);
}
</style>