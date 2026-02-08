<template>
  <div v-if="page.isNotFound"><NotFound /></div>

  <div v-else class="app-container">
    <MyNavbar />

    <main class="main-stage">
      <Home v-if="routeInfo.type === 'home'" />
      <Origami v-else-if="routeInfo.type === 'origami'" />
      <Showcase v-else-if="routeInfo.type === 'showcase'" />
      
      <Portal v-else-if="routeInfo.type === 'portal'" />
      <Archives v-else-if="routeInfo.type === 'archives'" />
      <Blog v-else-if="routeInfo.type === 'blog'" />
      
      <Layout v-else />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import { computed, onMounted } from 'vue';
import DefaultTheme from 'vitepress/theme';
import Blog from '../theme/components/Pages/Blog/Blog.vue';
import Portal from './components/Pages/Portal/Portal.vue';
import NotFound from './components/Pages/NFPage/404.vue';
import Archives from './components/Pages/Archives/Archives.vue';import MyNavbar from './components/Navbar/MyNavbar.vue';
import Home from './components/Pages/Home/Home.vue';
import Origami from './components/Pages/Origami/Origami.vue';
import Showcase from './components/Pages/Showcase/Showcase.vue';

const { Layout } = DefaultTheme
const { page } = useData()

const routeInfo = computed(() => {
  const path = page.value.relativePath; // 如 "zh/blog/math/gamma.md" 或 "en/origami.md"
  
  // 1. 提取语言和核心路径 (去掉 .md)
  // 匹配形如 zh/blog/... 或 en/origami
  const match = path.match(/^([a-z]{2})\/(.*)$/);
  if (!match) return { type: 'default' };

  const [_, lang, corePath] = match;

  // 2. 首页判断 (path 为 "zh/index.md" 或 "zh/")
  if (corePath === 'index.md' || corePath === '') return { type: 'home' };

  // 3. 模块判断
  if (corePath.startsWith('blog/')) {
    if (corePath === 'blog/archives.md') return { type: 'archives' };
    if (corePath === 'blog/index.md') return { type: 'portal' };
    return { type: 'blog' }; // 具体文章
  }

  if (corePath.startsWith('origami')) return { type: 'origami' };
  if (corePath.startsWith('showcase')) return { type: 'showcase' };

  return { type: 'default' };
});


</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* 确保这里没有 overflow-x: hidden 以外的限制 */
}

.navbar {
  /* 维持 sticky，但确保它在最上层 */
  position: sticky; 
  top: 0;
  z-index: 1000;
  flex-shrink: 0;
  width: 100%;
}

.main-stage {
  flex: 1;
  display: flex;
  flex-direction: column;
  /* 这里的 align-items: center 负责让内容在水平方向上居中 */
  align-items: center; 
  width: 100%;
}

/* 核心：确保 main-stage 的子元素（如 Blog.vue）
   既能居中，又能撑开宽度，且不破坏父级的滚动 */
.main-stage > * {
  width: 100%;
  max-width: 100%; /* 防止溢出 */
}
</style>