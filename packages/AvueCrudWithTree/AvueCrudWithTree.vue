<template>
  <h2>左树右表</h2>
  <el-container>
    <el-aside width="200px">
      <avue-tree :option="treeOption" :data="treeData" @node-click="nodeClick"></avue-tree>
    </el-aside>
    <el-main>
      <avue-crud :data="loadData" :option="loadOption" v-model="modelObjCopy" v-model:search="searchMap" v-model:page="pageMap"></avue-crud>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { reactive, ref, onBeforeMount, h, watch } from 'vue'
interface PageType {
  total: number
  currentPage: number
  pageSize: number
}
interface Prop {
  loadOption: { [key: string]: any }
  search: { [key: string]: any }
  loadData: { [key: string]: any }[]
  page: PageType
  modelObj: { [key: string]: any }
  treeOption: { [key: string]: any }
  treeData: { [key: string]: any }[]
}

interface Emits {
  (e: 'node-click', data: any): void
}

const props = withDefaults(defineProps<Prop>(), {})

const emits = defineEmits<Emits>()

const searchMap = ref<{ [key: string]: any }>({})
const pageMap = ref<PageType>({
  total: 100,
  currentPage: 1,
  pageSize: 15,
})

const modelObjCopy = ref<{ [key: string]: any }>({})

const nodeClick = (data: any) => {
  emits('node-click', data)
}

watch(() => props.search, (val) => {
  searchMap.value = val
})
watch(() => props.page, (val) => {
  pageMap.value = val
})
watch(() => props.modelObj, (val) => {
  modelObjCopy.value = val
})

</script>

<style>
</style>