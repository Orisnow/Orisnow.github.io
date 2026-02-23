<template>
  <div class="blog-top">
    <h1 class="blog-title">{{ frontmatter.title }}</h1>
    <div class="blog-meta">
      <div v-if="frontmatter.tags && frontmatter.tags.length" class="blog-tags">
        <span v-for="tag in frontmatter.tags" :key="tag" class="tag-item">
          # {{ tag }}
        </span>
      </div>
      <div class="blog-latest-date">
        <span class="date-label">{{ t.date }}: </span>
        <time>{{ displayDate }}</time>
      </div>
      <div class="blog-version">
        <span>{{ blogVersion }}</span>
      </div>
    </div>
    <div class="divider"></div>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import { computed } from 'vue';
import { useI18n } from '../../../../utils/i18n/useI18n.mts';

const { frontmatter } = useData()
const { t } = useI18n('BlogTop');

// 提取最新日期并处理掉时间后缀
const displayDate = computed(() => {
  const dates = frontmatter.value.dates;
  if (Array.isArray(dates) && dates.length > 0) {
    const last = dates[dates.length - 1];
    // 将对象转为字符串并按 'T' 分割，只取第一部分 "YYYY-MM-DD"
    return String(last).split('T')[0];
  }
  return '-----';
});

const blogVersion = frontmatter.value.version || 'v0.0.0';

</script>

<style lang="css" scoped>
.blog-top {
  margin-bottom: 24px;
}

.blog-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.blog-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.blog-tags {
  display: flex;
  gap: 10px;
}

.tag-item {
  color: var(--vp-c-brand-1);
}

.blog-version {
  font-size: 0.7rem;
}

.divider {
  width: 100%;
  height: 5px;
  background-color: purple;
  margin-top: 16px;
}
</style>