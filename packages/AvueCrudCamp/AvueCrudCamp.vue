<template>
  <div>
    <h1>Avue Crud</h1>
    <h2>增删改查</h2>
    <avue-crud :option="option" v-model:search="searchMap" :data="data" v-model:page="pageMap">
    </avue-crud>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
interface PageType {
  total: number
  currentPage: number
  pageSize: number
}
interface Prop {
  option: { [key: string]: any }
  search: { [key: string]: any }
  data: { [key: string]: any }[]
  page: PageType
}

const props = withDefaults(defineProps<Prop>(), {})

const searchMap = ref<{ [key: string]: any }>({})
const pageMap = ref<PageType>({
  total: 100,
  currentPage: 1,
  pageSize: 15,
})

watch(() => props.search, (val) => {
  searchMap.value = val
})
watch(() => props.page, (val) => {
  pageMap.value = val
})

</script>

<style lang="less" scoped>
</style>