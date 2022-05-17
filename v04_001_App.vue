<script setup>
import { ref } from 'vue' // 1
import WordList from './WordList.vue'
const figures = ref([ // 2
  { id: 1, name: 'one' },
  { id: 2, name: 'two' },
  { id: 3, name: 'three' }
])
</script>
<template>
  <!-- 3 -->
  <WordList :words = figures  />
 </template>