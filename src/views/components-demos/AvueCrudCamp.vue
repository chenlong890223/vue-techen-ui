<template>
  <avue-crud-camp :search="search" :data="data" :option="option" :page="page"></avue-crud-camp>
</template>

<script setup lang="ts">
import { reactive, ref, onBeforeMount, h } from 'vue'

const search = reactive({
  name: 'small',
})
const data = ref([
  {
    name: '张三',
  },
])
const option = reactive({
  column: [
    {
      label: '姓名',
      prop: 'name',
      search: true,
    },
  ],
})

const page = reactive({
  total: 1000,
  currentPage: 1,
  pageSize: 10,
})
</script>

<style>

</style>