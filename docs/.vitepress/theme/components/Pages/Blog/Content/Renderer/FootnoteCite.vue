<template>
  <a ref="citeRef" :href="href" class="ref-cite" @click.prevent="handleClick">
    {{ num }}
  </a>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 定义 Props 类型
interface Props {
  num: string | number;
}

const props = defineProps<Props>();
const citeRef = ref<HTMLElement | null>(null);
const href = ref('#');

const handleClick = (e: MouseEvent) => {
  const hash = href.value;
  if (hash === '#') return;

  // 1. 手动更新 URL Hash，但不触发浏览器原生的“闪现”跳转
  history.pushState(null, '', hash);

  // 2. 手动触发一个自定义事件，让监听者知道该干活了
  window.dispatchEvent(new HashChangeEvent('hashchange'));
};

onMounted(() => {
  if (citeRef.value) {
    // 物理寻址逻辑：
    // 1. 向上找你定义的 SectionGroup 容器
    const parentSection = citeRef.value.closest('.section-group');
    // 2. 找到该容器内的 H2 ID (VitePress 自动生成的)
    const h2 = parentSection?.querySelector('h2');
    
    if (h2?.id) {
      // 3. 这里的命名空间必须和 ReferenceCollapse 内部生成的 li id 对齐
      href.value = `#ref-${h2.id}-${props.num}`;
    }
  }
});
</script>

<style scoped>
.ref-cite {
  font-size: 0.75em;
  vertical-align: super;
  line-height: 0;
  color: var(--vp-c-brand-1);
  font-weight: bold;
  margin: 0 2px;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s;
}

.ref-cite:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}

/* 自动补全括号 */
.ref-cite::before { content: '['; }
.ref-cite::after { content: ']'; }
</style>