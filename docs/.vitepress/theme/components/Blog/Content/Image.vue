<!--主要参考Linux.do,经由gpt、gemini、ds、photoswipe官方文档与博客综合编写-->
<template>
  <div class="lightbox-wrapper" dir="auto" :id="!injectedGallery ? selfGalleryId : undefined">
    <a 
      class="lightbox" 
      :href="src" 
      :data-pswp-width="pswpWidth"
      :data-pswp-height="pswpHeight"
      :data-pswp-filesize="filesize"
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
import { computed, onMounted, onUnmounted, useId, inject } from 'vue';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import SvgIcon from '../../Tools/SvgIcon.vue';
import { useData } from 'vitepress';

const { lang } = useData()
// 1. 定义接口
interface Props {
  src: string,
  width: number,
  height: number,
  filesize?: string, // 可选
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

//判断单图还是图片组
const injectedGallery = inject('pswp-gallery', null)
const selfGalleryId = `image-${useId()}`
const gallerySelector = computed(() => {
  if (injectedGallery) return injectedGallery
  return `#${selfGalleryId}`
})
//虚报 pswp 尺寸使得zoom图标与功能一直存在
const MIN_PSWP_SIZE = 1600
const pswpWidth = computed(() =>
  Math.max(props.width, MIN_PSWP_SIZE)
)
const pswpHeight = computed(() =>
  Math.round(pswpWidth.value * props.height / props.width)
)
//多语言字典
const PSWP_I18N = {
  zh: {
    download: '下载',
    zoom: '缩放（单击）',
    close: '关闭（Esc）',
    prev: '上一张',
    next: '下一张',
  },
  en: {
    download: 'Download',
    zoom: 'Zoom (Click)',
    close: 'Close (Esc)',
    prev: 'Previous',
    next: 'Next',
  },
  ja: {
    download: 'ダウンロード',
    zoom: 'ズーム（クリック）',
    close: '閉じる（Esc）',
    prev: '前へ',
    next: '次へ',
  }
} as const;

let lightbox: PhotoSwipeLightbox | null = null;
const ImageId = useId();
// 初始化 PhotoSwipe 插件
onMounted(() => {
  //获取当前语言并确保类型是正确的
  const currentLang = (lang.value?.slice(0, 2) || 'en') as keyof typeof PSWP_I18N;
  const t = PSWP_I18N[currentLang] || PSWP_I18N.en;

  lightbox = new PhotoSwipeLightbox({
    gallery: gallerySelector.value,
    children: 'a',
    closeOnVerticalDrag: true,
    showHideAnimationType: 'zoom',
    pswpModule: () => import('photoswipe'), 
    wheelToZoom: true,

    //注入原生按钮的多语言翻译
    closeTitle: t.close,
    zoomTitle: t.zoom,
    arrowPrevTitle: t.prev,
    arrowNextTitle: t.next,
  });
//添加下载功能，参考https://photoswipe.com/adding-ui-elements/ #Adding Download Button
  lightbox.on('uiRegister', () => {
    // 1. 解决 lightbox.pswp 可能为 undefined 的问题
    // 使用可选链和类型守卫
    const pswpInstance = lightbox?.pswp;
    if (pswpInstance?.ui) {
      pswpInstance.ui.registerElement({
      name: 'download-button',
      order: 8,
      isButton: true,
      tagName: 'a',

      // SVG with outline
      html: {
        isCustomSVG: true,
        inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
        outlineID: 'pswp__icn-download'
      },

      // Or provide full svg:
      // html: '<svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" class="pswp__icn"><path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" /></svg>',

      // Or provide any other markup:
      // html: '<i class="fa-solid fa-download"></i>' 

      onInit: (el, pswp) => {
        const downloadEl = el as HTMLAnchorElement;

      downloadEl.setAttribute('download', '');
      downloadEl.setAttribute('target', '_blank');
      downloadEl.setAttribute('rel', 'noopener');
      downloadEl.setAttribute('title', t.download);

      // 3. 解决 pswp.currSlide 可能未定义的问题
      pswp.on('change', () => {
        // 使用可选链获取 src，并提供空字符串作为兜底
        const currentSrc = pswp.currSlide?.data.src;
        if (currentSrc) {
          downloadEl.href = currentSrc;
        }
      });
      }
    });
   }
  });
  lightbox.init();

})

// 销毁 PhotoSwipe 插件
onUnmounted(() => {
  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }
})

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