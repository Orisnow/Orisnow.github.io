<template>
  <div class="ig-base">
    <slot 
      :activeIndex="activeIndex" 
      :activeItem="items[activeIndex]"
      :setIndex="setIndex"
      :galleryId="groupName"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{ 
  items: any[], 
  gallery?: string 
}>();

const activeIndex = ref(0);
const setIndex = (i: number) => {
  activeIndex.value = i;
}
// 自动生成一个唯一的组名，防止和正文图片串场
const groupName = computed(() => props.gallery || `ig-group-${Math.random().toString(36).slice(2, 7)}`);
</script>

<style lang="css" scoped>


</style>