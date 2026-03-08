<template>
  <a :href="href" class="smart-link">
    <slot /></a>
</template>

<script setup lang="ts">
defineProps<{ href: string }>();
</script>

<style scoped>
.smart-link {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style>