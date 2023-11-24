import type { App } from 'vue'
import AvueCrudCamp from './AvueCrudCamp.vue'

// 使用install方法，在app.use挂载
AvueCrudCamp.install = (app: App) => {
  app.component(AvueCrudCamp.__name as string, AvueCrudCamp)
}

export default AvueCrudCamp