import Atom from '../components/Atom.vue'
import LinkCard from '../components/LinkCard.vue'
import MyNavbar from '../components/MyNavbar.vue'
import type { EnhanceAppContext } from 'vitepress'

export function registerComponents(ctx: EnhanceAppContext) {
  const { app } = ctx
  app.component('Atom', Atom)
  app.component('LinkCard', LinkCard)

  // 覆盖默认 navbar
  app.component('VPNavBar', MyNavbar)
}
