import { onUnmounted, type Ref } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export function useThreeCamera(
  containerRef: Ref<HTMLElement | null>,
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer
) {
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.enableZoom = false // 禁用原生，由我们接管

  // 用于记录触屏双指初始距离
  let initialPinchDistance = 0

  // --- 逻辑 A：处理滚轮与触控板 (Ctrl + Wheel) ---
  const handleWheel = (event: WheelEvent) => {
    if (event.ctrlKey) {
      event.preventDefault()
      const zoomSpeed = 0.001
      const factor = 1 + (event.deltaY * zoomSpeed)
      applyZoom(factor)
    }
  }

  // --- 逻辑 B：处理屏幕直接触控 (Touch) ---
  const handleTouchMove = (event: TouchEvent) => {
    if (event.touches.length === 2) {
      // 只有双指时才拦截，单指旋转留给 OrbitControls
      event.preventDefault() 
      
      const dist = Math.hypot(
        event.touches[0].pageX - event.touches[1].pageX,
        event.touches[0].pageY - event.touches[1].pageY
      )

      if (initialPinchDistance > 0) {
        // 计算缩放比例：手指张开则 factor < 1 (放大)
        const factor = initialPinchDistance / dist
        applyZoom(factor)
      }
      initialPinchDistance = dist
    }
  }

  const handleTouchEnd = () => {
    initialPinchDistance = 0
  }

  // 统一的缩放执行函数
  const applyZoom = (factor: number) => {
    const offset = camera.position.clone().sub(controls.target)
    offset.multiplyScalar(factor)
    const newDist = offset.length()
    if (newDist > 1.5 && newDist < 50) {
      camera.position.copy(controls.target).add(offset)
    }
  }

  const bindEvents = () => {
    const el = containerRef.value
    if (!el) return
    el.addEventListener('wheel', handleWheel, { passive: false })
    el.addEventListener('touchmove', handleTouchMove, { passive: false })
    el.addEventListener('touchend', handleTouchEnd)
  }

  onUnmounted(() => {
    const el = containerRef.value
    if (el) {
      el.removeEventListener('wheel', handleWheel)
      el.removeEventListener('touchmove', handleTouchMove)
      el.removeEventListener('touchend', handleTouchEnd)
    }
    controls.dispose()
  })

  return { controls, bindEvents }
}