<template>
  <h1>Naive-ui</h1>
  <n-data-table :columns="naviColumns" :data="naviData" :pagination="page" :bordered="false" />
</template>

<script lang="ts" setup>
import { NButton, NDataTable } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { reactive, ref, onBeforeMount, h } from 'vue'

const page = reactive({
  total: 1000,
  currentPage: 1,
  pageSize: 10,
})

type Song = {
  no: number
  title: string
  length: string
}
const naviColumns = ref([
  {
    title: 'No',
    key: 'no',
  },
  {
    title: 'Title',
    key: 'title',
  },
  {
    title: 'Length',
    key: 'length',
  },
  {
    title: 'Action',
    key: 'actions',
    render(row: Song) {
      return h(
        NButton,
        {
          strong: true,
          tertiary: true,
          size: 'small',
        },
        { default: () => 'Play' },
      )
    },
  },
])

const naviData: Song[] = [
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: "Don't Look Back in Anger", length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' }
]

</script>

<style lang="scss" scoped>

</style>
