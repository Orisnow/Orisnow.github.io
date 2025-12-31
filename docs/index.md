<!--coded by debate between gpt and gemini-->
---
layout: false
---

<script setup>
import { onMounted } from 'vue'
import { useRouter, withBase } from 'vitepress'

const router = useRouter()

onMounted(() => {
  try {
    router.go(withBase('/zh/'))
  } catch {
    window.location.replace('./zh/')
  }
})
</script>

<meta http-equiv="refresh" content="0;url=./zh/" />

正在跳转到中文文档…
