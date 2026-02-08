<!--主要参考Linux.do,经由gpt、gemini、ds、photoswipe官方文档与博客综合编写-->
<template>
  <div class="lightbox-wrapper">
    <a 
      class="lightbox" 
      :href="src" 
      :data-pswp-width="pswpWidth"
      :data-pswp-height="pswpHeight"
      :data-pswp-filesize="filesize"
    >
      <img loading="lazy" :alt="ImageName" :src="src" :width="width" :height="height" />
      <div class="meta">
        <SvgIcon name="image01" size="20px" />
        <span class="filename" :title="ImageName">{{ DisplayFileName }}</span>
        <span class="information">{{ width }}×{{ height }} {{ filesize }}</span>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import 'photoswipe/style.css';
import SvgIcon from '../../../Tools/SvgIcon.vue';


// 1. 定义接口
interface Props {
  src: string,
  alt?: string,
  width: number,
  height: number,
  filesize?: string, 
}

const props = defineProps<Props>()
// 用URL API自动从路径提取文件名
const ImageName = computed(() => {
  try {
    const pathname: string = new URL(props.src, location.origin).pathname
    return decodeURIComponent(pathname.split('/').at(-1) ?? 'image')
  } catch {
    return 'image'
  }
})
// 最大允许显示的文件名长度（不含后缀）
const MAX_FILENAME_LENGTH: number = 20
const DisplayFileName = computed(() => {
  const fullName: string = ImageName.value // 直接使用 ImageName
  if (!fullName) return 'image'
  // 去掉后缀
  const nameWithoutExt: string = fullName.replace(/\.[^/.]+$/, '')
  // 过长则兜底
  if (nameWithoutExt.length > MAX_FILENAME_LENGTH) {
    return 'image'
  }
  return nameWithoutExt
})
//虚报 pswp 尺寸使得zoom图标与功能一直存在
const MIN_PSWP_SIZE = 1600
const pswpWidth = computed(() =>
  Math.max(props.width, MIN_PSWP_SIZE)
)
const pswpHeight = computed(() =>
  Math.round(pswpWidth.value * props.height / props.width)
)




</script>

<style lang="css" scoped>
/* 容器设置为相对定位，方便 meta 定位 */
.lightbox {
  position: relative;
  display: inline-block; /* 保持容器与图片大小一致 */
  overflow: hidden;      /* 确保 meta 不会超出图片范围 */
}

.lightbox img {
  display: block;        /* 消除图片下方间隙 */
  transition: opacity 0.3s ease;
}

/* 底部信息栏基础样式 */
.meta {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  
  /* 视觉样式 - 使用更优雅的渐变背景 */
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.65),
    rgba(0, 0, 0, 0.45)
  );
  backdrop-filter: blur(6px) saturate(120%); /* 增强的毛玻璃效果 */
  color: #fff;
  padding: 8px 12px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  /* 初始状态：隐藏且向下偏移 */
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s ease-in-out;
  pointer-events: none; /* 防止遮挡鼠标点击图片的动作 */
}

/* 悬停状态：显示并滑入 */
.lightbox:hover .meta {
  opacity: 1;
  transform: translateY(0);
}

/* 内部图标样式 */
.meta :deep(svg) {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  fill: currentColor;
  opacity: 0.9;
}

/* 文件名 */
.filename {
  font-weight: 600;
  letter-spacing: 0.2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  pointer-events: auto; /* 只给文件名开鼠标事件 */
}

/* 尺寸信息 */
.information {
  font-size: 12px;
  opacity: 0.7;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  letter-spacing: 0.3px;
  color: rgba(255, 255, 255, 0.85);
}

</style>