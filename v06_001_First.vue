<script setup>
import { useStore } from './stores/counter'

const store = useStore()

function countup(){ // count up 2
  store.countup(2)
}
function reset(){ // reset
  store.$reset()
}
</script>
<template>
  <button @click="countup">count up 2</button>
  <button @click="store.countup(3)">count up 3</button>
  <button @click="reset">reset</button>
  <p>powerCount:{{ store.powerCount }}</p>
  <p>First:{{ store.counter }}</p>
</template>


