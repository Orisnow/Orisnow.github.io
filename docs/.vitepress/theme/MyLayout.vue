<template>
  <div v-if="page.isNotFound"><NotFound /></div>

  <template v-else>
    <Portal v-if="routeInfo.type === 'portal'" />
    <Archives v-else-if="routeInfo.type === 'archives'" />
    <BlogIntro v-else-if="routeInfo.type === 'category'" />
    <Blog v-else-if="routeInfo.type === 'blog'" />
    <Layout v-else />
  </template>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import { computed } from 'vue';
import DefaultTheme from 'vitepress/theme';
import Blog from '../theme/components/Pages/Blog/Blog.vue';
import Portal from './components/Pages/Portal/Portal.vue';
import NotFound from './components/Pages/NFPage/404.vue';
import Archives from './components/Pages/Archives/Archives.vue';
import BlogIntro from './components/Pages/BlogIntro/BlogIntro.vue';

const { Layout } = DefaultTheme
const { page } = useData()

const routeInfo = computed(() => {
  const path = page.value.relativePath; // 例如 "zh/blog/math/gamma.md"
  
  // 1. 如果不在 blog 目录下，直接走默认布局
  if (!path.includes('blog/')) return { type: 'default' };

  // 2. 归档页
  if (path.endsWith('blog/archives.md')) return { type: 'archives' };

  // 3. 门户页 (只有 blog/index.md)
  // 判断逻辑：以 blog/index.md 结尾，且前面没有更多层级（或层级仅为语言）
  // 或者简单的正则：/blog\/index\.md$/ 且不包含 blog/xxx/index.md
  const isRootIndex = /^(?:[a-z]{2}\/)?blog\/index\.md$/.test(path);
  if (isRootIndex) return { type: 'portal' };

  // 4. 分类页 (blog/xxx/index.md)
  if (path.endsWith('/index.md')) return { type: 'category' };

  // 5. 剩下的全是文章页
  return { type: 'blog' };
});
</script>

<style lang="css">

</style>