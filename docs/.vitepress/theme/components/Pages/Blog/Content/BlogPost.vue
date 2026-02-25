<template>
  <div class="blog-post">
    <article class="markdown-body">
      <Content />
    </article>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, onUpdated, useId, inject, provide } from 'vue';
import { useData } from 'vitepress';
import { useI18n } from '../../../../utils/i18n/useI18n.mts';

const { lang } = useData()
const { t } = useI18n('BlogPost')



</script>

<style lang="css" scoped>


</style>