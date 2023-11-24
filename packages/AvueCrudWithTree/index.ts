import type { App } from 'vue'
import AvueCrudWithTree from './AvueCrudWithTree.vue'

// 使用install方法，在app.use挂载
AvueCrudWithTree.install = (app: App) => {
  app.component(AvueCrudWithTree.__name as string, AvueCrudWithTree)
}

export default AvueCrudWithTree