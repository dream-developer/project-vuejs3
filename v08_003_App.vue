<script setup>
import { ref, computed } from 'vue'
const randomC = computed(() => Math.random()) // 1
function randomM(){ // 2
  return Math.random()
}
</script>
<template>
  <p v-for="n in 3">randomC:{{ randomC }}</p> <!-- 1 -->
  <p v-for="n in 3">randomM():{{ randomM() }}</p> <!-- 2 -->
</template>