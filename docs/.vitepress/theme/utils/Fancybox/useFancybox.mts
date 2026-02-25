// Fancybox靠Fancybox.bind绑定，用ref不利于成组,利用:data-fancybox="gallery"绑定
import { useData } from "vitepress";

// 多语言字典保持不变
const PSWP_I18N = {
  zh: { DOWNLOAD: '下载', ZOOM: '缩放', CLOSE: '关闭', PREV: '上一张', NEXT: '下一张' },
  en: { DOWNLOAD: 'Download', ZOOM: 'Zoom', CLOSE: 'Close', PREV: 'Previous', NEXT: 'Next' },
  ja: { DOWNLOAD: 'ダウンロード', ZOOM: 'ズーム', CLOSE: '閉じる', PREV: '前へ', NEXT: '次へ' }
} as const;

export const useFancybox = () => {
  const { lang } = useData();
  const bind = async (galleryName: string) => {
    if (!galleryName || typeof window === 'undefined') return; // 确保在浏览器环境
    // 2. 动态加载，避免 SSR 报错
    const { Fancybox } = await import("@fancyapps/ui");

    const selector = `[data-fancybox="${galleryName}"]`;
    const currentLang = (lang.value?.slice(0, 2) || 'en') as keyof typeof PSWP_I18N;
    const t = PSWP_I18N[currentLang] || PSWP_I18N.en;
    // 1. 配置Fancybox
    const config = {
      l10n: t,
      Hash: false as const, //不加会导致退出动画异常
      Carousel: {
        Toolbar: {
          display: {
            left: ["counter"],
            right: [ "zoomIn", "autoplay", "thumbs", "download", "close"],
          },
        }
      }
    };
    Fancybox.bind(selector, config);
  };

  const unbind = async (galleryName: string) => {
    if (typeof window === 'undefined') return;
    const { Fancybox } = await import("@fancyapps/ui");
    Fancybox.unbind(`[data-fancybox="${galleryName}"]`);
  };

  return { bind, unbind };
};