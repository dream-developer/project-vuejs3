<script setup>
import { useStore } from './stores/counter'
const store = useStore()
store.$subscribe((mutation, state) => { // 追記
  console.log(mutation, state)
})

</script>
<template>
  <p>Second:{{ store.counter }}</p>
</template>


