<template>
  <div class="home">
    <div class="hero-section">
      <h1 class="title">Balson 的花园</h1>
      <p class="subtitle">这里是正在生长的数字园地</p>
    </div>

    <div class="status-card">
      <h2 class="schedule">
        <span class="label">预估站点建设进度：</span>
        <span class="value">{{ frontmatter.rate || '0%' }}</span>
      </h2>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: frontmatter.rate }"></div>
      </div>
      <p class="build-tips">🚧 正在构建：{{ frontmatter.building || '内容填充中...' }}</p>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
const { frontmatter } = useData()
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 60px auto;
  padding: 0 20px;
  text-align: center;
}

.title {
  font-size: 3rem;
  font-weight: 900;
  background: linear-gradient(120deg, #42b883, #34495e);
  background-clip: text;
  line-height: 1.6;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.7rem;
}

.subtitle {
  color: var(--vp-c-text-2);
  font-size: 1.2rem;
  margin-bottom: 3rem;
}

.status-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 2rem;
  transition: transform 0.3s ease;
}

.status-card:hover {
  transform: translateY(-5px);
}

.schedule {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.value {
  font-family: var(--vp-font-family-mono);
  color: #42b883;
  font-weight: bold;
}

/* 进度条基础样式 */
.progress-bar {
  height: 12px;
  background: var(--vp-c-default-3);
  border-radius: 6px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #42b883, #646cff);
  transition: width 1s ease-in-out;
  /* 呼吸灯动画 */
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 0.8; }
  50% { opacity: 1; box-shadow: 0 0 10px rgba(66, 184, 131, 0.5); }
  100% { opacity: 0.8; }
}

.build-tips {
  margin-top: 1rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}
</style>