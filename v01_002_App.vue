<script setup>
import { ref } from 'vue' // 2
import Word from './Word.vue'
const msg = ref('単語をクリックしてください') // 2
const word = '単語'
function clickWord() { // 3
  msg.value = '単語がクリックされました'
}
</script>
<template>
  <h1>{{ msg }}</h1>
  <!-- 1 -->
  <Word
    :word = word
    @click-word="clickWord"
   />
</template>