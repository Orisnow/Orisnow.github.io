<template>
  <article class="blog-card">
    <a class="blog-card-link" :href="withBase(href)">
      <div class="image-container" v-if="cover">
        <img :src="cover" class="blog-card-image" loading="lazy" />
      </div>
      <div class="blog-card-content">
        <h3 class="blog-card-title">{{ title }}</h3>
        <p class="blog-card-abstract" v-if="abstract">{{ abstract }}</p>
        <div class="blog-card-meta">
          <time class="edit-date">{{ displayDate }}</time>
          <div class="tag-list" v-if="tags?.length">
            <span v-for="tag in tags" :key="tag" class="tag-item">#{{ tag }}</span>
          </div>
        </div>
      </div>
    </a>
  </article>
</template>

<script setup lang="ts">
import { withBase } from 'vitepress';

interface Props {
  title: string;
  href: string;      // 对应 dataLoader 里的 url
  displayDate: string;
  abstract?: string;
  tags?: string[];
  cover?: string;
}

const props = defineProps<Props>()
</script>

<style lang="css" scoped>
.blog-card {
  list-style: none;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid var(--vp-c-divider);
}

.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
}

.blog-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

/* 让摘要只显示两行，多了打点 */
.blog-card-abstract {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0.5rem 0;
}

.blog-card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  margin-top: 1rem;
}
</style>