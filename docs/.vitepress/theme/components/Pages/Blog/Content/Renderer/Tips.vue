<template>
  <aside class="ghost-note">
    <div class="ghost-content">
      <slot></slot>
    </div>
  </aside>
</template>

<style scoped>
.ghost-note {
  /* 物理位置：紧贴上方正文，不再撑开巨大的外边距 */
  margin: 0.5rem 0 1rem 0.5rem;
  padding-left: 0.8rem;
  border-left: 1px solid var(--vp-c-divider);
  
  /* 视觉极限：半大、极淡、微缩 */
  font-size: 0.7rem; /* 约等于正文的一半多一点 */
  color: var(--vp-c-text-3);
  opacity: 0.45; /* 只有盯着看时才清晰 */
  filter: grayscale(1); /* 彻底去色 */
  line-height: 1.4;
  transition: opacity 0.3s ease;
}

.ghost-note:hover {
  opacity: 0.9; /* 鼠标悬停时才“显形” */
}

.ghost-content :deep(p) {
  margin: 0;
}

/* 物理核心：公式也必须跟着微缩 */
.ghost-content :deep(.katex) {
  font-size: 1.1em !important; /* 相对于父级微缩字体的比例 */
  color: inherit !important;
}

/* 针对长公式的物理避雷：防止微缩后溢出 */
.ghost-content :deep(.katex-display) {
  margin: 0.2rem 0;
  transform: scale(0.9);
  transform-origin: left;
}
</style>