<script setup>
import DefaultTheme from 'vitepress/theme'
import MyNavbar from '../components/MyNavbar.vue'
import { setupMediumZoom } from '../plugins/mediumZoom'
import SidebarToggle from '../components/SidebarToggle.vue'

setupMediumZoom()   // ✔ 在组件 setup() 内调用
const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <MyNavbar />
      <SidebarToggle />
    </template>
  </Layout>
</template>