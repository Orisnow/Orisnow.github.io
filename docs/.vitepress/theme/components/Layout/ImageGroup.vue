<template>
  <div class="image-group" :data-gallery="galleryId">
    <slot />
  </div>
</template>

<script setup>
import { provide, useId } from 'vue'

const galleryId = `gallery-${useId()}`

// 向子组件提供 gallery selector
provide('pswp-gallery', `[data-gallery="${galleryId}"]`)
</script>

<style scoped>
.image-group {
  display: grid;
  gap: 12px;
}
</style>
