import mediumZoom from 'medium-zoom'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

export function setupMediumZoom() {
  const route = useRoute()

  const init = () => {
    mediumZoom('img', {
      background: 'var(--vp-c-bg)'
    })
  }

  onMounted(init)
  watch(() => route.path, () => nextTick(init))
}
