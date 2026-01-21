<!--参考https://juejin.cn/post/7258880480883097655并修改于gemini-->
<template>
  <svg 
    aria-hidden="true" 
    class="svg-icon" 
    :style="iconStyle"
  >
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  // 图标文件名（不带 .svg 后缀）
  name: {
    type: String,
    required: true
  },
  // 默认大小（正方形）
  size: {
    type: String,
    default: '1em'
  },
  // 独立宽度，优先级高于 size
  width: {
    type: String
  },
  // 独立高度，优先级高于 size
  height: {
    type: String
  },
  // 颜色，默认为当前文本颜色
  color: {
    type: String,
    default: 'currentColor'
  },
  // 前缀，需与 vite 配置中的 symbolId 格式对应
  prefix: {
    type: String,
    default: 'icon'
  }
})

// 确保这里的格式和 vite.config.ts 里的 symbolId: 'icon-[name]' 保持一致
const symbolId = computed(() => `#${props.name}`)

// 使用计算属性统一处理样式，避免 template 过于臃肿
const iconStyle = computed(() => {
  return {
    width: props.width || props.size,
    height: props.height || props.size,
    color: props.color
  }
})
</script>

<style lang="scss" scoped>
.svg-icon {
  fill: currentColor;
  outline: none;

  &.default-font-size {
    font-size: 14px;
  }
}
</style>
