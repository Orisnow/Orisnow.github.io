<template>
  <div class="custom-404">

    <template v-if="lang === 'zh-CN'">
      <NFi18n>
        <h1>施工中</h1>
        <p>你来到了一片荒原</p>
        <a href="/zh/">返回首页</a>
      </NFi18n>
    </template>
    
    <template v-else-if="lang === 'ja-JP'">
      <NotFoundContent>
        <h1>工事中</h1>
        <p>あなたは荒れ地に来たのです</p>
        <a href="/ja">トップページに戻ります</a>
      </NotFoundContent>
    </template>

    <template v-else>
      <NotFoundContent>
        <h1>under construction</h1>
        <p>You have arrived in a desolate wilderness</p>
        <a href="/en">Go Home</a>
    </NotFoundContent>
    </template>
    
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import NFi18n from './NFi18n.vue'
const { lang } = useData() // 这里的 lang 会根据 URL 自动切换（如 /zh/ 会对应 zh-CN）
</script>

<style lang="css" scoped>
.custom-404 {
  text-align: center;
  padding: 100px 20px;
}
 
.custom-404 h1{
    background-color: var(--garden-lavender);
}
</style>