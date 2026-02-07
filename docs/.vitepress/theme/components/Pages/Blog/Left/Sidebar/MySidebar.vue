<template>
  <aside class="sidebar-before-area">
    <div class="sidebar-catalog"
         v-for="catalogKey in catalogKeys" 
        :key="catalogKey"
    >
      <a class="catalog-title " 
      :href="withBase(`/${langKey}/blog/${catalogKey}/`)"
      >
        {{ (t as any)[catalogKey] }}
      </a>
      <div class="catalog-list">
        <ol>
          <li v-for="post in sortedCatalogData[catalogKey]" :key="post.href">
            <a :href="withBase(post.href)">{{ post.title }}</a>
          </li>
        </ol>
      </div>
    </div>
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
.sidebar-before-area {
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sidebar-catalog {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.catalog-title:lang(zh) {
  /* 竖排文字 */
  writing-mode: vertical-lr;
  text-orientation: mixed;
  padding: 12px 6px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  transition: all 0.2s;
  border-right: 2px solid transparent;
}

.catalog-title:lang(en-US) {
  writing-mode: sideways-lr;
}

.catalog-title:hover {
  color: var(--vp-c-brand);
  background-color: var(--vp-c-default-soft);
}

/* 可以在这里控制显示隐藏逻辑 */
.catalog-list {
  font-size: 13px;
  max-width: 150px;
}

.catalog-list ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

.catalog-list li {
  margin-bottom: 4px;
  white-space: nowrap;
}

.catalog-list a {
  color: var(--vp-c-text-2);
  text-decoration: none;
}

.catalog-list a:hover {
  color: var(--vp-c-brand);
}
</style>