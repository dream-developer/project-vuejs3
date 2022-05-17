<script setup>
import { ref } from 'vue'
const color = ref('blue')
const vColor = (el, binding) => el.style.color = binding.value
</script>
<template>
   カラーコード：<input v-model="color" v-color="color">
</template>