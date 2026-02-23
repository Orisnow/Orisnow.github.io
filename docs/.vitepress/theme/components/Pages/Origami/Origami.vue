<template>
  <div class="c"></div>
  <Content />
</template>

<script setup lang="ts">
import { Content } from 'vitepress';


</script>

<style lang="css" scoped>

.c {
  display: block;
  width: 50px;
  height: 50px;
  border: 5px solid aqua;
  border-radius: 0.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  box-shadow: 0 0 7px 3px rgba(0, 255, 255, 0.6);
  animation: loading 2s infinite ease;
}

@keyframes loading {
  0% {
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  33% {
    transform: rotateX(180deg) rotateY(0deg) rotateZ(0deg);
  }
  67% {
    transform: rotateX(180deg) rotateY(180deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(180deg) rotateY(180deg) rotateZ(180deg);
  }
}


</style>