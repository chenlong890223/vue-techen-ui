import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'
import VueTechenUI from '../packages'
import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(VueTechenUI)
app.use(Avue, { axios })

app.mount('#app')

