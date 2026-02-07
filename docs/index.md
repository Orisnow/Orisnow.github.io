<!--coded by debate between gpt and gemini-->
---
layout: false
---

<script setup>
import { onMounted } from 'vue'
import { withBase } from 'vitepress'

onMounted(() => {
  // 检查当前路径，如果已经是 /zh/ 或 /en/，则停止重定向
  const path = window.location.pathname
  const hasLang = /^\/(zh|en|ja)\//.test(path)

  if (!hasLang) {
    // 使用绝对路径重定向，确保不会叠加
    window.location.replace(withBase('/zh/'))
  }
})
</script>

<noscript>
  <meta http-equiv="refresh" content="0;url=./zh/" />
</noscript>