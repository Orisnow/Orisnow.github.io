<template>
  <aside class="sidebar-wrapper">
    <nav class="catalog-tabs">
      <div v-for="catalogKey in catalogKeys" :key="catalogKey" class="tab-item">
        <a class="catalog-title" 
           :class="{ 'is-active': catalogKey === currentCategory }"
           :href="withBase(`/${langKey}/blog/${catalogKey}/`)"
        >
          {{ (t as any)[catalogKey] }}
        </a>
      </div>
    </nav>

    <main class="catalog-panel">
      <div v-if="currentCategory && sortedCatalogData[currentCategory]" class="panel-content">
        <ol>
          <li v-for="post in sortedCatalogData[currentCategory]" :key="post.href">
            <a :href="withBase(post.href)" :class="{ 'active-link': page.relativePath === post.href }">
              {{ post.title }}
            </a>
          </li>
        </ol>
      </div>
    </main>
  </aside>
</template>

<script setup lang="ts">
import { withBase, useData } from 'vitepress';
import { computed } from 'vue';
import { useI18n } from '../../../../../utils/i18n/useI18n.mts';

const { page } = useData();
const { t, blogData, langKey } = useI18n('MySidebarBefore');
const catalogKeys = ['math', 'physics', 'computer', 'essays'] as const;

const sortedCatalogData = computed(() => {
  const groups: Record<string, any[]> = {
    math: [], physics: [], computer: [], essays: []
  };

  const rawData = blogData.value || [];

  rawData.forEach((post: any) => {
    if (!post?.href) return;

    // 1. 过滤掉 index.md 编译出的页面 (通常 URL 以 /blog/category/ 结尾)
    // 或者直接检查文件名
    const isIndex = post.href.endsWith('/') || post.href.endsWith('index.html') || post.href.endsWith('index');
    if (isIndex) return;

    // 2. 提取分量
    // 假设 URL 为: /zh/blog/math/post-name
    // split 后得到: ["", "zh", "blog", "math", "post-name"]
    const parts = post.href.split('/').filter(Boolean); // filter(Boolean) 掉空字符串
    
    // 寻找 'blog' 的位置，后一个就是我们要的分类
    const blogIndex = parts.indexOf('blog');
    
    if (blogIndex !== -1 && parts[blogIndex + 1]) {
      const cat = parts[blogIndex + 1];
      if (groups[cat]) {
        groups[cat].push(post);
      }
    }
  });

  // 3. 排序逻辑保持不变
  Object.keys(groups).forEach(key => {
    groups[key].sort((a, b) => 
      a.title.localeCompare(b.title, langKey.value) 
    );
  });

  return groups;
});

// 增加：当前页面所属分类，用于高亮显示
const currentCategory = computed(() => {
  return page.value.relativePath.split('/')[2]; 
});
</script>

<style lang="css" scoped>
/* 1. 基础容器：撑满左侧区域 */
.sidebar-wrapper {
  display: flex;
  height: 100%; /* 关键：撑满父容器 */
  padding: 15px 0 15px 10px;
  box-sizing: border-box;
}

/* 2. 左侧导航列：设为 Flex 纵向平分 */
.catalog-tabs {
  display: flex;
  flex-direction: column;
  height: 100%; /* 撑满高度 */
  width: 40px;  /* 给个固定宽度 */
  z-index: 10;
  /* 移除 gap，让它们贴合在一起平分空间 */
  gap: 0; 
}

.tab-item {
  flex: 1; /* 核心：四个分类平分 100% 的高度 */
  display: flex;
  flex-direction: column;
}

/* 3. 标题样式优化 */
.catalog-title {
  flex: 1; /* 填充整个 tab-item */
  display: flex;
  align-items: center;     /* 竖排文字水平居中 */
  justify-content: center;  /* 竖排文字垂直居中 */
  writing-mode: vertical-lr;
  padding: 0 6px;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  text-decoration: none;
  background-color: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  /* 调整圆角：只保留最上方和最下方的圆角，中间的保持直角更像整体 */
  border-bottom: none; 
  transition: all 0.25s ease;
  position: relative;
}

/* 第一个和最后一个圆角处理，让整体像一个长条 */
.tab-item:first-child .catalog-title { border-radius: 12px 0 0 0; }
.tab-item:last-child .catalog-title { 
  border-radius: 0 0 0 12px; 
  border-bottom: 1px solid var(--vp-c-divider); 
}

/* 多语言设置保持不变 */
.catalog-title:lang(zh), .catalog-title:lang(ja) { text-orientation: mixed; }
.catalog-title:lang(en) { text-orientation: upright; letter-spacing: -1px; }

/* 4. 吸附状态：Hover 或 Active */
.catalog-title:hover,
.catalog-title.is-active {
  background-color: var(--vp-c-bg-soft) !important;
  color: var(--vp-c-brand);
  margin-right: -1px; /* 向右吃掉面板边框 */
  z-index: 5;
  /* 吸附时去掉所有左侧圆角，使其完全嵌入面板 */
  border-radius: 0 !important; 
  border-right-color: transparent;
}

/* --- 动态凹角补丁的通用样式 --- */
.catalog-title:hover::before, .catalog-title.is-active::before,
.catalog-title:hover::after, .catalog-title.is-active::after {
  content: "";
  position: absolute;
  right: 0;
  width: 15px;
  height: 15px;
  background-color: transparent;
  z-index: 20; /* 确保在最上层 */
}

/* 1. 处理上方的凹角 (::before) */
.catalog-title:hover::before, .catalog-title.is-active::before {
  top: -15px;
  border-radius: 0 0 15px 0;
  box-shadow: 5px 5px 0 0 var(--vp-c-bg-soft);
}

/* 【关键修复】如果是第一个分类，它上面没有空间，不需要向上的凹角 */
.tab-item:first-child .catalog-title::before {
  display: none !important;
}

/* 2. 处理下方的凹角 (::after) */
.catalog-title:hover::after, .catalog-title.is-active::after {
  bottom: -15px;
  border-radius: 0 15px 0 0;
  box-shadow: 5px -5px 0 0 var(--vp-c-bg-soft);
}

/* 【关键修复】如果是最后一个分类 (essays)，它下面没有空间，不需要向下的凹角 */
.tab-item:last-child .catalog-title::after {
  display: none !important;
}

/* 6. 右侧大面板 */
.catalog-panel {
  flex: 1;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 0 12px 12px 0; /* 右侧圆角 */
  overflow: hidden;
}

.panel-content {
  padding: 24px 18px;
  height: 100%;
  overflow-y: auto;
}
</style>