<template>
  <div class="portal-layout">
    <section class="portal-hero">
      <PortalHero/>
    </section>
    <section class="recommended-blogs">
      <h2>推荐阅读</h2>
      <button @click="goToArchives('recommend')">查看更多</button>
      <div class="blog-grid">
        <BlogCard 
          v-for="recommended_blogs in recommendedBlogs" 
          :key="recommended_blogs.href" 
          v-bind="recommended_blogs" 
        />
      </div>
    </section>
    <section class="latest-blogs">
      <h2>最近更新</h2>
      <button @click="goToArchives('latest')">查看更多</button>
      <div class="blog-grid">
        <BlogCard 
          v-for="new_blogs in latestBlogs" 
          :key="new_blogs.href" 
          v-bind="new_blogs" 
        />
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import PortalHero from './PortalHero.vue';
import BlogCard from './BlogCard.vue';
import { data as ZH_BLOG_DATA } from '../../../data/zh_blog.data';
import { useNavigation } from '../../../utils/i18n_path.mts'

const { goToArchives } = useNavigation()
const latestBlogs = computed(() => {
  return ZH_BLOG_DATA.slice(0, 6)
})
const recommendedBlogs = computed(() => {
  return [...ZH_BLOG_DATA] // 使用 [...] 展开运算符创建一个副本，避免影响原数组
    .filter(post => post.recommend) // 只要推荐的
    .sort((a, b) => {
      // 这里的逻辑只影响推荐板块：权重大的在前
      const weightA = Number(a.recommend);
      const weightB = Number(b.recommend);
      return weightB - weightA; 
    })
    .slice(0, 3) // 只要前3个高权重的
})
</script>

<style lang="css" scoped>
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>