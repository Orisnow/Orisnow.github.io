<template>
  <header class="portal-hero hero-fullscreen" style="background-image: url(https://ghproxy.net/https://raw.githubusercontent.com/Orisnow/Images/refs/heads/main/black.png);">
    <h1>欢迎来到博客首页</h1>
    <section class="category-cards">
        <CategoryCard
          v-for="item in frontmatter.categories"
          :key="item.id"
          :href="item.href"
        >
          <template #category-card-icon>
            <SvgIcon :name="item.icon" size="24px"/>
          </template>

          <template #category-card-title>{{ item.title }}</template>

          <template #category-card-content>{{ item.content }}</template>

          <template #category-card-image>
            <img :src="item.src" />
          </template>
        </CategoryCard>
    </section>
    <button 
    type="button" 
    class="hero-slide-down-button" 
    @click="slideDown"
    aria-label="Slide Down"
  >
    <div class="arrow-wrapper">
      <SvgIcon name="hero-side-down" size="30px"/>
      <SvgIcon name="hero-side-down" size="40px" class="second-arrow"/>
    </div>
  </button>

  </header>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import CategoryCard from './CategoryCard.vue';
import SvgIcon from '../../Tools/SvgIcon.vue';


const { frontmatter } = useData()

const slideDown = () => {
  window.scrollTo({
    top: window.innerHeight - 64, // 减去导航栏高度
    behavior: 'smooth'
  });
};
</script>

<style lang="css" scoped>
/* 全屏容器：使用 vh 确保占满屏幕 */
.portal-hero {
  height: calc(100vh - var(--vp-nav-height)); 
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  /* 背景图优化 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* 遮罩层：防止背景图干扰文字读取 */
.portal-hero::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(255, 255, 255, 0.2); /* 浅色遮罩，如果你走深色系可以改黑色 */
  backdrop-filter: blur(4px); /* 毛玻璃效果 */
  z-index: 1;
}

/* 确保内容在遮罩之上 */
.portal-hero > * {
  position: relative;
  z-index: 2;
}

/* 标题样式 */
.portal-hero h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.1);
  letter-spacing: -1px;
}

/* 修改卡片容器 */
.category-cards {
  display: grid;
  /* 重点：将 200px 改为至少 350px - 450px，否则左右排不下 */
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); 
  gap: 1.5rem;
  width: 95%;
  max-width: 1200px;
  margin-top: 1rem;
}

/* 标题样式微调 */
.portal-hero h1 {
  font-size: clamp(2rem, 5vw, 3.5rem); /* 响应式字号 */
  z-index: 2;
  /* 确保标题在上面，不被遮挡 */
}

/* 底部下滑按钮 */
.hero-slide-down-button {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%); /* 确保按钮在正中间 */
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10; /* 提高层级，确保能点到 */
  color: #ffffff;
  transition: opacity 0.3s;
}

.hero-slide-down-button:hover {
  opacity: 0.7;
}

/* 箭头容器 */
.arrow-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: bounce 2s infinite; /* 把动画加在这里，整个容器一起跳 */
}

/* 让第二个箭头稍微往上靠，形成双箭头感 */
.second-arrow {
  margin-top: -25px; 
}

/* 简单的跳动动画 */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}
</style>