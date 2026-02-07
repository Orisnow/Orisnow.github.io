<template>
  <div class="blog-top">
    <h1>{{ frontmatter.title }}</h1>
    <div class="blog-meta">
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import { useI18n } from '../../../../utils/i18n/useI18n.mts';

const { frontmatter } = useData()
const { t } = useI18n('BlogTop');

</script>

<style lang="css" scoped>


</style>