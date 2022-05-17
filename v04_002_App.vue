<script setup>
import { ref } from 'vue'
import WordList from './WordList.vue'
const msg = ref('選択してください') // 2
const figures = ref([
  { id: 1, name: 'one' },
  { id: 2, name: 'two' },
  { id: 3, name: 'three' }
])
function selectWord(id, name) {  // 3
  msg.value = id + ':' + name
}
</script>
<template>
  <h1>{{ msg }}</h1>
  <!-- 1 -->
  <WordList
    :words = figures
    @select-word="selectWord"
   />
</template>