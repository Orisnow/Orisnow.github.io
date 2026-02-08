<template>
  <header class="navbar">
    <div class="navbar-title">
      <a class="title" :href="withBase(`/${langKey}/`)">
        <img src="/icons/housenka.svg" height="25" width="25" alt="logo"/>
        <span class="site-name">{{ t.title }}</span>
      </a>
    </div>
    <div class="navbar-content">
      <a :href="withBase(`/${langKey}/`)">{{ t.home }}</a>
      <a :href="withBase(`/${langKey}/blog`)">{{ t.blog }}</a>
      <a :href="withBase(`/${langKey}/origami`)">{{ t.origami }}</a>
      <a :href="withBase(`/${langKey}/showcase`)">{{ t.showcase }}</a>
    </div>
    <div class="navbar-right">
      <div class="lang-switcher">
        <button @click="switchLang('zh')" :class="{ active: langKey === 'zh' }">ZH</button>
        <button @click="switchLang('en')" :class="{ active: langKey === 'en' }">EN</button>
        <button @click="switchLang('ja')" :class="{ active: langKey === 'ja' }">JA</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from '../../utils/i18n/useI18n.mts';
import { withBase, useData, useRouter } from 'vitepress';

const { page } = useData();
const { go } = useRouter();

const { t, langKey } = useI18n('MyNavbar')

const switchLang = (newLang: string) => {
  // 当前路径，例如 "zh/blog/math/gamma.md"
  const currentRelativePath = page.value.relativePath;
  
  // 将路径开头的 zh/ 或 en/ 替换成新的语言代码
  // 注意：这里需要根据你实际的文件结构调整正则
  const newPath = currentRelativePath.replace(/^(zh|en|ja)\//, `${newLang}/`);
  
  // 执行跳转（加上 withBase 处理子路径部署的情况）
  go(withBase(`/${newPath.replace(/\.md$/, '.html')}`));
};
</script>

<style lang="css" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between; /* 左右撑开 */
  padding: 0 1.5rem;
  height: 64px;
  background-color: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
}

.navbar-title .title {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-weight: bold;
  color: var(--vp-c-text-1);
}

.navbar-content {
  display: flex;
  gap: 20px;
}

.navbar-content a {
  text-decoration: none;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
}

.navbar-content a:hover {
  color: var(--vp-c-brand-1);
}

.navbar-right {
  display: flex;
  align-items: center;
}

.lang-switcher {
  display: flex;
  gap: 8px;
}

.lang-switcher button {
  padding: 2px 8px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  color: var(--vp-c-text-2);
  transition: all 0.2s;
}

.lang-switcher button:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.lang-switcher button.active {
  background: var(--vp-c-brand-1);
  color: white;
  border-color: var(--vp-c-brand-1);
}
</style>