<template>
  <main class="blog-page">
    <section class="left-sidebar">
      <MySidebar />
    </section>
    <section class="left-bottom-area">

    </section>
    <section class="blog-content">
      <BlogTop />
      <BlogPost />
      <BlogBottom />
    </section>
    <section class="right-outline">

    </section>
    <section class="right-bottom-area">

    </section>
  </main>
</template>

<script setup lang="ts">
import BlogBottom from './Content/BlogBottom.vue';
import BlogPost from './Content/BlogPost.vue';
import BlogTop from './Content/BlogTop.vue';
import MySidebar from './Left/Sidebar/MySidebar.vue';


</script>

<style lang="css" scoped>
/* 整个页面的大容器 */
:global(body) {
  margin: 0;
  padding: 0;
}

.blog-page {
  display: grid;
  /* 定义三列：左侧固定、中间自适应、右侧固定 */
  grid-template-columns: 260px 1fr 240px;
  /* 定义两行：主体内容占满剩下空间、底部高度根据内容或 Live2D 决定 */
  grid-template-rows: 1fr auto;
  
  height: 100vh;
  gap: 0; /* 咱们用 padding 控间距，grid 间隙设为 0 */
}

/* 左侧：侧边栏 + 底部 Live2D */
.left-sidebar {
  grid-column: 1;
  grid-row: 1;
  border-right: 1px solid var(--vp-c-divider);
  overflow-y: auto;
  background-color: var(--vp-c-bg-alt);
}

.left-bottom-area {
  grid-column: 1;
  grid-row: 2;
  border-right: 1px solid var(--vp-c-divider);
  min-height: 200px; /* 给 Live2D 留够位置 */
  background-color: var(--vp-c-bg-alt);
}

/* 中间：博客主体内容 */
.blog-content {
  grid-column: 2;
  grid-row: 1 / span 2; /* 纵向跨越两行，独占中间一整列 */
  overflow-y: auto;
  padding: 0 40px;
  max-width: 900px;
  margin: 0 auto; /* 保持内容居中 */
  width: 100%;
}

/* 右侧：大纲 + 底部工具栏 */
.right-outline {
  grid-column: 3;
  grid-row: 1;
  border-left: 1px solid var(--vp-c-divider);
  padding: 20px;
}

.right-bottom-area {
  grid-column: 3;
  grid-row: 2;
  border-left: 1px solid var(--vp-c-divider);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* 让工具按钮靠下 */
}

/* 适配移动端：简单粗暴地切回单列 */
@media (max-width: 960px) {
  .layout-container {
    display: flex;
    flex-direction: column;
    height: auto;
  }
  .left-sidebar, .right-outline, .left-bottom-area, .right-bottom-area {
    display: none; /* 移动端先隐藏非核心区域，或者做成抽屉 */
  }
}
</style>