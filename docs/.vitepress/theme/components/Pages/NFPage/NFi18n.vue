<!-- 404_i18n.vue -->
<template>
  <div class="NF-i18n">
    <div class="content">
      <slot></slot>
    </div>
    <div class="NF-image">
      <img src="/images/github_404.jpg"/>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="css" scoped>
.NF-i18n {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  max-width: 600px;
  margin: 0 auto;
}

.NF-i18n .content {
  text-align: center;
}

.NF-i18n img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>