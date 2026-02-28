<template>
  <div class="fixed-tool">
    <button class="default-whisper-controller" @click="defaultWhisper = !defaultWhisper">
      <SvgIcon :name="defaultWhisper ? 'eye-on' : 'eye-off'" size="24px"/>
    </button>
    <button class="back-to-top" type="button" @click="scrollToTop" title="Back to Top">
      <SvgIcon name="back-to-top" size="24px"/>
    </button>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from '../../../../Tools/SvgIcon.vue';
import { defaultWhisper } from '../../../../../utils/globalState.mts';

// 简单的回到顶部逻辑
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 丝滑滚动
  });
};
</script>

<style lang="css" scoped>
.fixed-tool {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.back-to-top, .default-whisper-controller {
  /* 清除默认样式 */
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  cursor: pointer;
  padding: 8px;
  
  /* 交互反馈 */
  transition: all 0.2s ease;
  color: var(--vp-c-text-2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-to-top:hover, .default-whisper-controller:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  transform: translateY(-2px); /* 轻微上浮，增加交互感 */
}

.back-to-top:active, .default-whisper-controller:active {
  transform: translateY(0);
}
</style>