<template>
  <header class="navbar">
    <div class="navbar-title">
      <a class="title" :href="withBase(`/${langKey}/`)">
        <img src="/icons/housenka.svg" height="25" width="25" alt="logo"/>
        <span class="site-name">{{ t.title }}</span>
      </a>
    </div>

    <div class="navbar-content desktop-only">
      <a :href="withBase(`/${langKey}/`)">{{ t.home }}</a>
      <a :href="withBase(`/${langKey}/blog`)">{{ t.blog }}</a>
      <a :href="withBase(`/${langKey}/origami`)">{{ t.origami }}</a>
      <a :href="withBase(`/${langKey}/showcase`)">{{ t.showcase }}</a>
    </div>

    <div class="navbar-right">
      <div class="lang-switcher desktop-only">
        <button @click="switchLang('zh')" :class="{ active: langKey === 'zh' }">ZH</button>
        <button @click="switchLang('en')" :class="{ active: langKey === 'en' }">EN</button>
        <button @click="switchLang('ja')" :class="{ active: langKey === 'ja' }">JA</button>
      </div>
      <button class="theme-toggle desktop-only" @click="toggleDark">
        <span v-if="isDark">🌙</span><span v-else>☀️</span>
      </button>

      <button class="hamburger-btn mobile-only" @click="isMenuOpen = !isMenuOpen">
        {{ isMenuOpen ? '✕' : '☰' }}
      </button>
    </div>

    <transition name="nav-drop">
      <div v-if="isMenuOpen" class="mobile-menu-wrapper">
  <div class="mobile-nav">
    <a :href="withBase(`/${langKey}/`)" @click="isMenuOpen = false">{{ t.home }}</a>
    <a :href="withBase(`/${langKey}/blog`)" @click="isMenuOpen = false">{{ t.blog }}</a>
    <a :href="withBase(`/${langKey}/origami`)" @click="isMenuOpen = false">{{ t.origami }}</a>
    <a :href="withBase(`/${langKey}/showcase`)" @click="isMenuOpen = false">{{ t.showcase }}</a>
  </div>
  
  <hr class="mobile-divider" />

  <div class="mobile-utils">
    <div class="mobile-langs">
       <button 
         v-for="l in ['zh', 'en', 'ja']" 
         :key="l"
         @click="switchLang(l); isMenuOpen = false" 
         :class="{ active: langKey === l }"
       >
         {{ l.toUpperCase() }}
       </button>
    </div>

    <button class="mobile-theme-toggle" @click="toggleDark">
      <span>{{ isDark ? '🌙 Dark Mode' : '☀️ Light Mode' }}</span>
    </button>
  </div>
</div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { useI18n } from '../../utils/i18n/useI18n.mts';
import { withBase, useData, useRouter } from 'vitepress';
import { ref } from 'vue'; 

const isMenuOpen = ref(false);
const { page, isDark } = useData();
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

// 切换函数
const toggleDark = () => {
  isDark.value = !isDark.value;
  // VitePress 会自动处理 HTML 上的 .dark class 
  // 并且会自动持久化到 localStorage
};
</script>

<style lang="css" scoped>

.navbar {
  display: flex;
  position: sticky; 
  top: 0;
  z-index: 1000;
  flex-shrink: 0;
  width: 100%;
  height: var(--navbar-height);
  padding: 0 16px;
  align-items: center;
  flex: 0 0 64px;
  background-color: var(--vp-c-bg);
  border-bottom: 2px solid blueviolet;
}

.navbar-title {
  display: flex;
  margin-right: auto;
  flex-shrink: 0;
  align-items: center;
}

.navbar-title .title {
  font-size: large;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
}

/* ai写的 */
.navbar-content {
  display: flex;
  gap: 20px;
  padding-right: 16px;
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

.navbar-right {
  display: flex;
  align-items: center;
  gap: 16px; /* 增加切换器和语言按钮之间的间距 */
}

.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s;
  /* 避免点击时的蓝色外框 */
  outline: none;
}

.theme-toggle:hover {
  background-color: var(--vp-c-bg-soft);
}

/* --- 1. 默认状态（大屏幕） --- */

/* 默认隐藏移动端才有的元素 */
.mobile-only {
  display: none;
}

/* --- 2. 移动端状态（小屏幕：768px以下） --- */
@media (max-width: 768px) {
  /* 隐藏所有带 .desktop-only 的元素 */
  .desktop-only {
    display: none !important;
  }

  /* 显示汉堡按钮 */
  .mobile-only {
    display: block;
  }

  /* 汉堡按钮的基本样式 */
  .hamburger-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--vp-c-brand);
  }

  /* 下拉面板的绝对定位 */
  .mobile-menu-wrapper {
    position: absolute;
    top: 64px; /* 必须等于你的 Navbar 高度 */
    left: 0;
    width: 100%;
    background-color: var(--vp-c-bg);
    border-bottom: 1px solid var(--vp-c-divider);
    padding: 20px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  /* 移动端菜单链接样式 */
  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .mobile-nav a {
    text-decoration: none;
    font-size: 1.1rem;
    color: var(--vp-c-text-1);
    font-weight: bold;
  }
}

/* --- 3. 过渡动画 --- */
.nav-drop-enter-active, .nav-drop-leave-active {
  transition: all 0.3s ease;
}
.nav-drop-enter-from, .nav-drop-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 768px) {
  /* ... 原有的 .mobile-menu-wrapper 等样式保持不变 ... */

  .mobile-divider {
    border: none;
    border-top: 1px solid var(--vp-c-divider);
    margin: 10px 0;
  }

  .mobile-utils {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  /* 语言切换按钮样式 */
  .mobile-langs {
    display: flex;
    gap: 10px;
  }

  .mobile-langs button {
    flex: 1; /* 平分宽度 */
    padding: 10px;
    border: 1px solid var(--vp-c-divider);
    background: var(--vp-c-bg-soft);
    border-radius: 6px;
    color: var(--vp-c-text-2);
    font-weight: bold;
    cursor: pointer;
  }

  .mobile-langs button.active {
    background: var(--vp-c-brand-1);
    color: white;
    border-color: var(--vp-c-brand-1);
  }

  /* 移动端明暗切换按钮 */
  .mobile-theme-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    background: var(--vp-c-bg-soft);
    border: 1px solid var(--vp-c-divider);
    border-radius: 6px;
    color: var(--vp-c-text-1);
    font-weight: 500;
    cursor: pointer;
  }
}
</style>