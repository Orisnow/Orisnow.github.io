import Stats from 'stats.js'
import { onMounted, onUnmounted } from 'vue'

export function useStats() {
  // 1. 严格的环境判断
  const isDev = import.meta.env.DEV || (typeof window !== 'undefined' && window.location.search.includes('debug'))
  
  // 如果不是开发环境，返回空函数，确保生产构建不受任何影响
  if (!isDev) {
    return { 
      begin: () => {}, 
      end: () => {}, 
      mount: () => {}, 
      auto: () => {} 
    }
  }

  const stats = new Stats()
  stats.showPanel(0) 
  let animationId: number

  // 内部挂载逻辑
  const mount = () => {
    const parent = document.querySelector('.navbar-title')
    // 检查是否已经挂载过，避免重复挂载
    if (parent && !parent.contains(stats.dom)) {
      stats.dom.style.position = 'static'
      stats.dom.style.display = 'inline-block'
      stats.dom.style.verticalAlign = 'middle'
      stats.dom.style.marginLeft = '12px' 
      stats.dom.style.transform = 'scale(0.8)'
      stats.dom.style.transformOrigin = 'left center'
      stats.dom.style.pointerEvents = 'auto'
      
      parent.appendChild(stats.dom)
    }
  }

  // 2. 自动驾驶模式：这是你最需要的“本地辅助”核心
  const auto = () => {
    onMounted(() => {
      mount()
      const update = () => {
        stats.update() // stats.js 的 update 包含了 begin 和 end
        animationId = requestAnimationFrame(update)
      }
      update()
    })
  }

  // 统一卸载逻辑
  onUnmounted(() => {
    if (animationId) cancelAnimationFrame(animationId)
    if (stats.dom && stats.dom.parentNode) {
      stats.dom.parentNode.removeChild(stats.dom)
    }
  })

  return {
    begin: () => stats.begin(),
    end: () => stats.end(),
    mount,
    auto // 暴露 auto 接口
  }
}