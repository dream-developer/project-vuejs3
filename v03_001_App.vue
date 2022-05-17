<script setup>
import { reactive, toRefs } from 'vue' // １
const state = reactive({ name:'', score:0 })
function scoreup() {
  state.score++
}
const {name, score} = toRefs(state) // 2
</script>

<template>
  <h1>{{ name }}:{{ score }}</h1>
  <input v-model="name">
  <button @click="scoreup">scoreup</button>
</template>