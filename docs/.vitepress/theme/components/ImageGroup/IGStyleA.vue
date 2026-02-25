<template>
  <IGBase :items="items" :gallery="gallery" v-slot="{ activeIndex, setIndex, galleryId }">
    <div class="ig-style-a-container">
      <div class="controls">
        <button 
          v-for="(item, index) in items" 
          :key="index"
          :class="{ active: activeIndex === index }" 
          @click="setIndex(index)" 
        >
          {{ item.label }}
        </button>
      </div>

      <div class="image-display">
        <div 
          v-for="(item, index) in items" 
          :key="index"
          v-show="activeIndex === index"
        >
          <Image 
            :src="item.src"
            :width="width || 500"
            :gallery="galleryId" 
          />
        </div>
      </div>
    </div>
  </IGBase>
</template>

<script setup lang="ts">
import IGBase from './IGBase.vue';
import Image from '../Tools/Image.vue';


interface Item {
  label: string;
  src: string;
}

defineProps<{ 
  items: Item[], 
  width?: number, 
  height?: number,
  gallery?: string 
}>();
</script>

<style scoped>
.ig-style-a-container {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}

.controls {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

button {
  padding: 8px 16px;
  cursor: pointer;
  border: 1px solid var(--vp-c-divider);
  background: transparent;
  color: var(--vp-c-text-1);
  transition: all 0.3s;
  font-size: 0.9em;
}

button:hover {
  border-color: var(--vp-c-brand);
}

button.active {
  background: var(--vp-c-brand);
  color: #fff;
  border-color: var(--vp-c-brand);
}

.image-display {
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 20px;
}
</style>