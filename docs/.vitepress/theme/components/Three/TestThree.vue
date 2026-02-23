<template>
  <div ref="container" class="three-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const container = ref<HTMLDivElement | null>(null)

let renderer: THREE.WebGLRenderer
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let animationId: number

onMounted(() => {
  if (!container.value) return

  // 场景
  scene = new THREE.Scene()

  // 相机
  camera = new THREE.PerspectiveCamera(
    60,
    container.value.clientWidth / container.value.clientHeight,
    1,
    800
  )
  camera.position.z = 5

  // 渲染器
  renderer = new THREE.WebGLRenderer()
  renderer.setSize(
    container.value.clientWidth,
    container.value.clientHeight
  )

  container.value.appendChild(renderer.domElement)

  // 测试物体
  const geometry = new THREE.BoxGeometry()
  const material = new THREE.MeshBasicMaterial({ wireframe: true })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  const light = new THREE.PointLight(0xffff00, 100)
  light.position.set(5,5,5)
  scene.add(light)

  // 动画循环
  const animate = () => {
    animationId = requestAnimationFrame(animate)
    cube.rotation.x += 0.1
    cube.rotation.z += 0.1
    renderer.render(scene, camera)
  }
  animate()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
  renderer.dispose()
})
</script>

<style lang="css" scoped>
.three-container {
  width: 100%;
  height: 200px; /* 或 vh, % 等 */
}

</style>