<template>
  <el-container>
    <el-aside width="200px">
      <el-menu default-active="/home" class="el-menu-vertical-demo" router :collapse="isCollapse" @open="handleOpen" @close="handleClose">
        <el-menu-item :index="item.path" v-for="item in menus" :key="item.name">
          <el-icon><icon-menu /></el-icon>
          <template #title>{{ item.meta?.title }}</template>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <div class="router-view" ref="routerViewRef">
        <RouterView v-slot="{ Component }">
          <component :is="Component" />
        </RouterView>
      </div>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menus = ref(route.matched[0].children)
const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>

</style>
