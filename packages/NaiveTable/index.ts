import type { App } from 'vue'
import NaiveTable from './NaiveTable.vue'

// 使用install方法，在app.use挂载
NaiveTable.install = (app: App) => {
  app.component(NaiveTable.__name as string, NaiveTable)
}

export default NaiveTable