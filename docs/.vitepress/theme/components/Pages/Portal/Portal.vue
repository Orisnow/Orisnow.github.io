<template>
  <div class="portal-layout">
    <section class="portal-hero hero-fullscreen">
      <PortalHero/>
    </section>
    <section class="recommended-blogs">
      <h2>{{ t.recommended }}</h2>
      <button @click="goToArchives('recommend')">{{ t.more }}</button>
      <div class="blog-grid">
        <BlogCard 
          v-for="recommended_blogs in recommendedBlogs" 
          :key="recommended_blogs.href" 
          v-bind="recommended_blogs" 
        />
      </div>
    </section>
    <section class="latest-blogs">
      <h2>{{ t.latest }}</h2>
      <button @click="goToArchives('latest')">{{ t.more }}</button>
      <div class="blog-grid">
        <BlogCard 
          v-for="new_blogs in latestBlogs" 
          :key="new_blogs.href" 
          v-bind="new_blogs" 
        />
      </div>
    </section>
    <section class="portal-footer">
      <PortalFooter />
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import PortalHero from './PortalHero.vue';
import BlogCard from './BlogCard.vue';
import { useI18n } from '../../../utils/i18n/useI18n.mts';
import { useNavigation } from '../../../utils/i18n/i18n_path.mts'
import PortalFooter from './PortalFooter.vue';

const { goToArchives } = useNavigation()
const { t, blogData } = useI18n('Portal')

const latestBlogs = computed(() => {
  return blogData.value.slice(0, 6);
});

const recommendedBlogs = computed(() => {
  return [...blogData.value] 
    .filter(post => post.recommend)
    .sort((a, b) => {
      const weightA = Number(a.recommend);
      const weightB = Number(b.recommend);
      return weightB - weightA; 
    })
    .slice(0, 3);
});


</script>

<style lang="css" scoped>
.portal-layout {
  display: grid;
  gap: 2rem;
}

.portal-hero {
  display: flex;
}

.hero-fullscreen {
  height: calc(100vh - var(--navbar-height));
  width: 100%;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.recommended-blogs, .latest-blogs {
  margin: 0 3rem;
}

.portal-footer {
  height: 5rem;
  margin: 0 5rem;
}
</style>