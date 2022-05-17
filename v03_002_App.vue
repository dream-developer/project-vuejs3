<script setup>
import { reactive, toRefs } from 'vue'
const state = reactive({
  histories:[], // １
  name:'',
  score:0 
  })
function scoreup() {
  state.score++
  const history = { //2
    newscore: state.score,
    newdate: new Date().toLocaleString() }
  state.histories.push(history) // 3
}
const {histories, name, score} = toRefs(state) // 4
</script>

<template>
  <h1>{{ name }}:{{ score }}</h1>
  <input v-model="name">
  <button @click="scoreup">scoreup</button>
   <!-- 5 -->
  <li v-for="value in histories">
  {{ value.newscore }}: {{ value.newdate }}
  </li>
</template>
