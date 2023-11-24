<template>
  <breadcrumb :routes="route.matched"></breadcrumb>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<style>

</style>