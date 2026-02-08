<template>
  <main class="blog-page">
    <div class="left-area">
      <section class="left-sidebar-aera">
        <MySidebar />
      </section>
      <section class="left-bottom-area">

      </section>
    </div>
    <div class="middle-area">
      <div class="blog-intro" v-if="isCategoryPage">
        <BlogIntro />
      </div>
      <div class="blog-content" v-else>
        <section class="blog-top-area">
          <BlogTop />
        </section>
        <section class="blog-post-area">
          <BlogPost />
        </section>
        <section class="blog-buttom-area">
          <BlogBottom />
        </section>
      </div>
    </div>
    <div class="right-area">
      <section class="right-outline-arae">

      </section>
      <section class="right-bottom-area">
        <div class="fixed-tool-aera">
          <FixedTool />
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import { computed } from 'vue';
import BlogIntro from './BlogIntro/BlogIntro.vue';
import BlogBottom from './Content/BlogBottom.vue';
import BlogPost from './Content/BlogPost.vue';
import BlogTop from './Content/BlogTop.vue';
import MySidebar from './Left/Sidebar/MySidebar.vue';
import FixedTool from './Right/Bottom/FixedTool.vue';

const { page } = useData();

const isCategoryPage = computed(() => {
  const path = page.value.relativePath;
  // 兼容 index.md, index.html, index 以及末尾带斜杠的情况
  return path.includes('/blog/') && 
         (path.endsWith('/index.md') || path.endsWith('/index') || path.endsWith('/'));
});
</script>

<style lang="css" scoped>
/* 1. 布局大容器 */
.blog-page {
  display: grid;
  /* 修正后的轨道：左右固定，中间自适应但有一个上限 */
  /* 使用 1fr 配合中间容器的 max-width 容易导致右侧视觉过宽 */
  grid-template-columns: 260px minmax(0, 1fr) 240px;
  
  /* 如果你希望中间内容更稳固，可以尝试： */
  /* grid-template-columns: 260px auto 240px; 配合 middle-area 的宽度 */
  
  min-height: 100vh;
  gap: 0;
  align-items: start;
}

/* 2. 左右通用 Sticky 容器 */
.left-area, .right-area {
  position: sticky;
  top: 64px; /* 对应 Navbar 高度 */
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  z-index: 10;
}

/* 3. 左侧区域 (Left Area) */
.left-area {
  border-right: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-alt);
}

.left-sidebar-aera {
  flex: 1;
  overflow-y: auto;
  /* 隐藏滚动条但保留滚动功能 (可选) */
  scrollbar-width: thin;
}

.left-bottom-area {
  flex-shrink: 0;
  min-height: 200px; /* 为 Live2D 留位 */
}

/* 4. 中间内容区 (Middle Area) */
.middle-area {
  width: 100%;
  /* 确保这个宽度加上左右侧边栏不要超过你常见的屏幕尺寸 */
  max-width: 900px;
  margin: 0 auto;
  padding: 40px;
  box-sizing: border-box;
  
  /* 增加这一行，确保它能把 1fr 轨道真正撑开 */
  min-width: 0; 
}

/* 增加一个内部容器的底部间距，这样不会顶起 sticky 容器 */
.blog-buttom-area {
  margin-bottom: 80px; 
  padding-top: 20px;
}

/* 5. 右侧区域 (Right Area) */
.right-area {
  border-left: 1px solid var(--vp-c-divider);
  /* 确保宽度锁死在 240px，不随 Grid 的剩余空间摆动 */
  width: 240px; 
}

.right-outline-arae {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.right-bottom-area {
  flex-shrink: 0;
  /* 稍微加宽内边距的感觉，确保空间感 */
  padding: 10px 15px 25px 15px; 
  display: flex;
  justify-content: flex-end; /* 让内容整体靠右 */
}

.fixed-tool-aera {
  /* 弄窄一点，仅包裹图标宽度 */
  width: fit-content;
  display: flex;
  justify-content: center;
}

/* 6. 移动端适配 */
@media (max-width: 960px) {
  .blog-page {
    display: block;
  }
  .left-area, .right-area {
    display: none;
  }
  .middle-area {
    padding: 20px;
  }
}
</style>