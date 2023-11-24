# vue-techen-ui
 
## Document & Online preview
 
[Vue Techen UI]
 
## Install & Use
 
```bash
pnpm i vue-techen-ui
# or
npm install vue-techen-ui
# or
yarn add vue-techen-ui
```
 
Import and register component
 
**Global**
 
```ts
import { createApp } from 'vue'
import App from './App.vue'
 
import VueTechenUI from 'vue-techen-ui'
import 'vue-techen-ui/css'
 
const app = createApp(App)
app.use(VueTechenUI)
```
 
**Local**
 
```vue
<script setup lang="ts">
import { Button } from 'vue-techen-ui'
import 'vue-techen-ui/css'
</script>
```
 
## Project
 
- Get the project code
 
```sh
git clone https://github.com/chenlong890223/vue-techen-ui.git
```
 
- Install dependencies
 
```sh
cd vue-techen-ui
 
pnpm i
```
 
- Run project
 
```sh
pnpm dev
```
 
## Components
 
| Component name | Descriptions | Component name | Descriptions |
| :--- | :--- | :--- | :--- |
Breadcrumb | 面包屑 | Button | 按钮
 
## Details
 
## Functions
 
| Function name | Descriptions | Arguments
| :--- | :--- | :--- |