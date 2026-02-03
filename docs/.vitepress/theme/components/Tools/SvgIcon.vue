<!--参考https://juejin.cn/post/7258880480883097655 并修改于gemini-->
<template>
  <svg 
    aria-hidden="true" 
    class="svg-icon" 
    :style="iconStyle"
  >
    <use :href="symbolId" :fill="color" />
  </svg> 
</template>

<script setup lang="ts">
import { computed } from 'vue'

// 1. 定义 Props 的类型接口
interface Props {
  name: string          // 必传
  size?: string         // 可选，带 ?
  width?: string
  height?: string
  color?: string
  prefix?: string
}

// 2. 使用 withDefaults 给可选属性设置默认值
const props = withDefaults(defineProps<Props>(), {
  size: '1em',
  color: 'currentColor',
  prefix: 'icon'
})

// 3. 逻辑处理
// 修正：将 prefix 逻辑整合进去，这样更符合 Vite 插件的常用规则
const symbolId = computed(() => `#${props.prefix}-${props.name}`)

const iconStyle = computed(() => ({
  width: props.width || props.size,
  height: props.height || props.size,
  color: props.color
}))
</script>

<style scoped>
.svg-icon {
  fill: currentColor;
  outline: none;
  /* 建议去掉具体的 font-size 限制，由外部或 size 决定 */
  width: 1em;
  height: 1em;
  vertical-align: -0.15em; /* 常用技巧：让图标与文字对齐 */
  overflow: hidden;
}
</style>