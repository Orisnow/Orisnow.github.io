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
            :width="width  "
            :height="height "
            :gallery="galleryId" 
          />
        </div>
      </div>
    </div>
  </IGBase>
</template>

<script setup lang="ts">
import IGBase from './IGBase.vue';
import Image from '../../../../Tools/Image.vue';


interface Item {
  label: string;
  src: string;
}

defineProps<{ 
  items: Item[], 
  width?: number, 
  height?: number,
  gallery?: string,
}>();
</script>

<style scoped>
.ig-style-a-container {
  display: flex;
  padding: 1rem;
  margin: 1rem 0;
  gap: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  /* 限制整体高度，避免长图撑爆页面 */
  max-height: 450px; 
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 4px; /* 按钮之间的微小间距 */
  width: 120px; /* 固定宽度，防止抖动 */
  flex-shrink: 0;
}

button {
  padding: 10px 14px;
  text-align: left;
  cursor: pointer;
  border: none;
  border-left: 3px solid transparent; /* 默认透明左边框 */
  background: transparent;
  color: var(--vp-c-text-2);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.85rem;
  font-weight: 500;
}

button:hover {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-default-soft);
}

button.active {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border-left-color: var(--vp-c-brand-1); /* 激活时高亮左边框 */
}

.image-display {
  flex: 1;
  display: grid;
  place-items: center;
  background: var(--vp-c-bg); /* 使用纯色背景衬托图片 */
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  /* 增加内阴影，增加“视窗”感 */
  box-shadow: inset 0 0 12px rgba(0,0,0,0.05);
  
  /* 关键：限制图片显示区域的最大高度 */
  max-height: 100%; 
  padding: 1rem;
}

.image-display > div {
  grid-area: 1 / 1 / 2 / 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 强制覆盖内部 Image 组件的默认拉伸 */
:deep(img) {
  max-width: 100%;
  max-height: 380px; /* 核心：限制图片物理高度 */
  object-fit: contain; /* 保持比例，不拉伸 */
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1)); /* 给 SVG 增加轻微投影 */
}

/* 适配深色模式：如果图片是黑色线条，可能需要反色或加白底 */
:deep(.dark img) {
  filter: drop-shadow(0 4px 8px rgba(255,255,255,0.05));
}
</style>