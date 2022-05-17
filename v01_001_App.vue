<script setup>
import { ref, computed } from 'vue' //1
const msg = ref('Hello World!')
const textTruncateMsg = computed(() => { // 2
  return msg.value.length > 10 ? msg.value.substr(0,10) + '…' : msg.value
})
</script>
<template>
  <h1>{{ msg }}</h1>
  <!-- 3 -->
  <p>{{ textTruncateMsg }}</p>
  <input v-model="msg">
</template>