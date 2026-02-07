<template>
  <div class="blog-post">
    <article class="markdown-body">
      <Content />
    </article>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, useId, inject, provide } from 'vue';
import { useData } from 'vitepress';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { useI18n } from '../../../../utils/i18n/useI18n.mts';

const { lang } = useData()
const { t } = useI18n('BlogPost')

// 初始化 PhotoSwipe 插件
let lightbox: PhotoSwipeLightbox | null = null;
const ImageId = useId();
onMounted(() => {
  const currentLang = (lang.value?.slice(0, 2) || 'en') as 'zh' | 'en' | 'ja';

  lightbox = new PhotoSwipeLightbox({
    gallery: '.markdown-body',
    children: 'a.lightbox',
    closeOnVerticalDrag: true,
    showHideAnimationType: 'zoom',
    pswpModule: () => import('photoswipe'), 
    wheelToZoom: true,
    
    //注入原生按钮的多语言翻译
    closeTitle: t.value.close,
    zoomTitle: t.value.zoom,
    arrowPrevTitle: t.value.prev,
    arrowNextTitle: t.value.next,
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
      downloadEl.setAttribute('title', t.value.download);
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


</style>