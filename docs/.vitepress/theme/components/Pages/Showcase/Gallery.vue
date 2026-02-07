<template>
  <div class="image-group" :data-gallery="galleryId">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, useId } from 'vue';

const galleryId = `gallery-${useId()}`

// 向子组件提供 gallery selector
provide('pswp-gallery', `[data-gallery="${galleryId}"]`)
</script>

<style lang="css" scoped>
.image-group {
  display: grid;
  gap: 12px;
}
</style>