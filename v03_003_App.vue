<script setup>
import { ref } from 'vue' // 1
const count = ref(0) // 2
function countup() {
  count.value = count.value + 1 // 3
}
</script>
<template>
  <!-- 4 -->
  <h1>{{ count }}</h1>
  <!-- 5 -->
  <input type="number" v-model.number="count">
  <!-- 6 -->
  <button @click="countup">countup</button>
</template>