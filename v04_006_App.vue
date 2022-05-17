<script setup>
import { ref, onErrorCaptured } from 'vue' // 1
import Catalog from './Catalog.vue'
const msg = ref('Loading...') // 2
onErrorCaptured(err => { // 3
  msg.value = err
  return true
})
</script>
<template>
  <Suspense>
    <Catalog/>
    <template #fallback>
    <!-- 4 -->
    {{msg}}
    </template>
  </Suspense>
</template>