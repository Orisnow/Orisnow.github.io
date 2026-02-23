<template>
  <header class="hero">
    <h1>{{ t.h1 }}</h1>
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
import { useI18n } from '../../../utils/i18n/useI18n.mts';

const { t } = useI18n('PortalHero')
const { frontmatter } = useData()

const slideDown = () => {
  window.scrollTo({
    top: window.innerHeight - 64, // 减去导航栏高度
    behavior: 'smooth'
  });
};
</script>

<style lang="css" scoped>
.hero {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: url(https://ghproxy.net/https://raw.githubusercontent.com/Orisnow/Images/refs/heads/main/test/5395969.jpg)
              no-repeat rgba(111, 66, 121, 0.475);
  background-blend-mode: multiply;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 400;
  padding-bottom: 3rem;
}

.category-cards {
  display: flex;
  flex-wrap: wrap;
  position: relative;
}

/* ai写的，底部下滑按钮 */
.hero-slide-down-button {
  position: absolute;
  bottom: 0px;
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