// .vitepress/theme/utils/useI18n.ts
import { useData } from 'vitepress';
import { computed } from 'vue';
import { i18n_dict } from './i18n_dict.mts';
import { data as ZH_BLOG_DATA } from '../../data/zh_blog.data';
import { data as EN_BLOG_DATA } from '../../data/en_blog.data';
import { data as JA_BLOG_DATA } from '../../data/ja_blog.data';

// .vitepress/theme/utils/useI18n.ts
export function useI18n<T extends keyof typeof i18n_dict>(componentName: T) {
  const { localeIndex, lang } = useData()
  
  const langKey = computed(() => {
    return (lang.value.split('-')[0] || 'zh') as 'zh' | 'en' | 'ja'
  })

  // 这里的 T 会锁定为具体的组件名，比如 'Portal'
  const t = computed(() => {
    const dict = i18n_dict[componentName]
    // 这里的返回值会被精准锁定为该组件下的语言包
    return dict[langKey.value as keyof typeof dict]
  })

  const blogData = computed(() => {
    const dataMap: Record<string, any> = {
      zh: ZH_BLOG_DATA,
      en: EN_BLOG_DATA,
      ja: JA_BLOG_DATA,
    }
    // 注意：这里的 localeIndex.value 就是你在 config 里定义的 'zh' | 'en' | 'ja'
    return dataMap[localeIndex.value] || ZH_BLOG_DATA
  })

  return { t, blogData, langKey }
}
