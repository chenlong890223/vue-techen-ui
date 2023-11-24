<template>
  <avue-crud-with-tree
    :treeOption="treeOption"
    :treeData="treeData"
    :loadData="loadData"
    :loadOption="loadOption"
    :page="page"
    :modelObj="obj"
    :search="search"
    @node-click="nodeClick"></avue-crud-with-tree>
</template>

<script setup lang="ts">
import { reactive, ref, onBeforeMount, h } from 'vue'

const obj = reactive({})
const search = reactive({
  name: 'small',
})

const treeData = ref([
  {
    value: 0,
    label: '一级部门',
    children: [
      {
        value: 1,
        label: '一级部门1',
      },
    ],
  },
])

const treeOption = reactive({
  defaultExpandAll: true,
  formOption: {
    labelWidth: 100,
    column: [
      {
        label: '自定义项',
        prop: 'test',
      },
    ],
  },
  props: {
    labelText: '标题',
    label: 'label',
    value: 'value',
    children: 'children',
  },
})

interface LoadData {
  name: string
  sex: string
}
const loadData = ref<LoadData[]>([])
const loadData1 = ref<LoadData[]>([
  {
    name: '张三',
    sex: '男',
  },
])
const loadData2 = ref<LoadData[]>([
  {
    name: '李四2',
    sex: '女',
  },
])

const loadOption = reactive({
  column: [
    {
      label: '姓名',
      prop: 'name',
    },
    {
      label: '性别',
      prop: 'sex',
    },
  ],
})

const nodeClick = (data: any) => {
  if (data.value == 0) {
    loadData.value = loadData1.value
  } else if (data.value == 1) {
    loadData.value = loadData2.value
  }
}

const page = reactive({
  total: 1000,
  currentPage: 1,
  pageSize: 10,
})

onBeforeMount(() => {
  loadData.value = loadData1.value
})
</script>

<style>

</style>