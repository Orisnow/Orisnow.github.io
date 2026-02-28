<template>
  <div class="blog-post">
    <article class="markdown-body">
      <Content />
    </article>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, onUpdated, useId, inject, provide } from 'vue';
import { useData } from 'vitepress';
import { useI18n } from '../../../../utils/i18n/useI18n.mts';

const { lang } = useData()
const { t } = useI18n('BlogPost')



</script>

<style lang="css" scoped>
/* 容器边距 */
.blog-post {
  width: 100%;
  line-height: 1.7; /* 黄金行高，阅读不累 */
}

/* 针对 VitePress 渲染内容的深度定制 */
.markdown-body :deep(h2) {
  font-size: 1.7rem;
  margin: 2.5rem 0 1.25rem;
  line-height: 1.1;
}

.markdown-body :deep(h3) {
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
}

.markdown-body :deep(h4) {
  font-size: 1.3rem;
  margin: 2rem 0 1rem;
}

.markdown-body :deep(h5) {
  font-size: 1.1rem;
  margin: 2rem 0 1rem;
}

.markdown-body :deep(h6) {
  font-size: 0.9rem;
  margin: 2rem 0 1rem;
}

.markdown-body :deep(p) {
  margin-bottom: 1.2rem;
  color: var(--vp-c-text-1);
  word-wrap: break-word;
}

/* 强调文字样式 */
.markdown-body :deep(strong) {
  font-weight: 700;
  color: var(--vp-c-brand-1); /* 既然有痴呆症挑战，加点颜色更有重点 */
}

/* 引用块样式 */
.markdown-body :deep(blockquote) {
  margin: 1.5rem 0;
  padding: 0.5rem 1.5rem;
  border-left: 4px solid var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-style: italic;
}

/* 图片处理：配合 PhotoSwipe */
.markdown-body :deep(img) {
  display: block;
  max-width: 100%;
  height: auto;
  margin: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  cursor: zoom-in; /* 提示用户可以点击放大 */
}

.markdown-body :deep(h2>a) {
  color: var(--vp-c-brand-1);
}


</style>