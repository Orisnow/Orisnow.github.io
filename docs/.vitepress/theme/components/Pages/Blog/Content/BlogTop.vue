<template>
  <div v-if="currentPost" class="blog-top">
    <div class="blog-title-row">
      <h1 class="blog-title">{{ currentPost.title }}</h1>
      <div v-if="currentPost.tags && currentPost.tags.length" class="title-meta-group">
        <div class="title-divider"></div>
        <div class="blog-tags">
          <span v-for="tag in currentPost.tags" :key="tag" class="tag-item">
            #{{ tag }}
          </span>
        </div>
      </div>
    </div>
    
    <div class="blog-meta-bottom">
      <div class="blog-latest-date">
        <span class="date-label">{{ t.date }}: </span>
        <time class="date-value">{{ currentPost.displayDate || '-----' }}</time>
      </div>

      <div v-if="currentPost.version" class="blog-version">
        <span class="version-value">{{ currentPost.version }}</span>
      </div>
    </div>
    
    <div class="bottom-divider"></div>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import { computed } from 'vue';
import { useI18n } from '../../../../utils/i18n/useI18n.mts';

const { page } = useData();
const { t, blogData } = useI18n('BlogTop');

/**
 * 核心逻辑：从 blogData 中检索出当前页面的处理后数据
 */
const currentPost = computed(() => {
  // 1. 获取当前页面路径并去掉 .md 后缀
  // 例如：'zh/blog/math/curve.md' -> 'zh/blog/math/curve'
  const currentPath = page.value.relativePath.replace(/\.md$/, '');

  // 2. 在 blogData 数组中查找 href 匹配的项目
  // .data.ts 生成的 href 通常是 '/zh/blog/math/curve.html'
  return blogData.value.find((post: any) => post.href.includes(currentPath));
});
</script>

<style lang="css" scoped>
.blog-top {
  margin-bottom: 28px;
}

/* 第一行布局 */
.blog-title-row {
  display: flex;
  align-items: baseline; /* 确保标题和标签底部对齐 */
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 12px;
}

.blog-title {
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1.2;
  margin: 0;
  color: var(--vp-c-text-1);
}

.title-meta-group {
  display: flex;
  align-items: center;
  gap: 16px;
}

.title-divider {
  width: 1px;
  height: 1.5rem;
  background-color: var(--vp-c-divider);
  align-self: center;
}

.blog-tags {
  display: flex;
  gap: 8px;
}

.tag-item {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
  padding: 2px 8px;
  border-radius: 4px;
}

/* 第二行布局 */
.blog-meta-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: var(--vp-c-text-2);
  padding: 0 4px;
}

.date-label {
  font-weight: 600;
  margin-right: 4px;
}

.date-value {
  font-family: var(--vp-font-family-mono);
}

.blog-version {
  font-family: var(--vp-font-family-mono);
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
}

/* 底部紫色分割线 */
.bottom-divider {
  width: 100%;
  height: 4px;
  background-color: purple; /* 保持你的紫色基因 */
  margin-top: 14px;
  border-radius: 2px;
}

/* 移动端适配 */
@media (max-width: 640px) {
  .title-divider {
    display: none; /* 手机上空间不够，直接换行不加竖线 */
  }
  .blog-title {
    font-size: 1.75rem;
  }
}
</style>