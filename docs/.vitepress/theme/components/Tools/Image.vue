<template>
  <div class="fancybox-wrapper">
    <a
    class="fancybox"
     :href="ActualHref"
     :data-fancybox="gallery"
    >
      <img loading="lazy"
        :alt="ImageName"
        :src="src" 
        :width="width" 
        :height="height"
      />
      <div class="meta">
        <SvgIcon name="image01" size="20px" />
        <span class="filename" :title="ImageName">{{ DisplayFileName }}</span>
        <span class="information">{{ width }}×{{ height }} {{ filesize }}</span>
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, onUpdated, useId,  } from "vue";
import SvgIcon from "./SvgIcon.vue";
import { useData } from "vitepress";
import { useFancybox } from "../../utils/Fancybox/useFancybox.mts";

const { lang } = useData()
const { bind, unbind } = useFancybox();

interface Props {
  href?: string,
  src: string,
  alt?: string,
  width?: number,
  height?: number,
  filesize?: string, 
  gallery?: string,
  fancyboxOptions?: Record<string, any>,
}
const props = withDefaults(defineProps<Props>(),{
  gallery: 'default-gallery',

})
// 无href则使用src
const ActualHref = computed(() => {
  return props.href || props.src;
});
// 用URL API自动从路径提取文件名
const ImageName = computed(() => {
  // 1. 如果传了 alt 且不为空，直接用 alt
  if (props.alt && props.alt.trim() !== '') {
    return props.alt;
  }
  
  // 2. 如果没有 alt，则走原来的 URL 路径提取逻辑
  try {
    const pathname: string = new URL(props.src, location.origin).pathname;
    return decodeURIComponent(pathname.split('/').at(-1) ?? 'image');
  } catch {
    return 'image';
  }
});

// 最大允许显示的文件名长度（仅当没传 alt 且从文件名提取时生效）
const MAX_FILENAME_LENGTH: number = 20;

const DisplayFileName = computed(() => {
  // 情况 A：如果是用户自己写了 []，不管多长都直接原样展示（或者你也可以让它也参与截断，但通常用户自己写的应该被信任）
  if (props.alt && props.alt.trim() !== '') {
    return props.alt;
  }

  // 情况 B：如果用户留空，使用的是提取的文件名，则继续走你原先的过长兜底逻辑
  const fullName: string = ImageName.value;
  if (!fullName) return 'image';
  
  // 去掉后缀
  const nameWithoutExt: string = fullName.replace(/\.[^/.]+$/, '');
  
  // 文件名过长则兜底为 'image'
  if (nameWithoutExt.length > MAX_FILENAME_LENGTH) {
    return 'image';
  }
  return nameWithoutExt;
});


onMounted(() => {
    bind(props.gallery);
});
onUpdated(() => {
     unbind(props.gallery);
     bind(props.gallery);
});
onUnmounted(() => {
    unbind(props.gallery);
});
</script>

<style lang="css" scoped>
/* 容器设置为相对定位，方便 meta 定位 */
.fancybox-wrapper {
  display: flex;
}
.fancybox {
  position: relative;
  display: inline-block; /* 保持容器与图片大小一致 */
  overflow: hidden;      /* 确保 meta 不会超出图片范围 */
}

.fancybox img {
  display: block;        /* 消除图片下方间隙 */
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
.fancybox:hover .meta {
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