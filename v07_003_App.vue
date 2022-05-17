<script setup>
import { ref } from 'vue'
const color = ref('blue')
</script>
<template>
   カラーコード：<input v-model="color" v-color="color">
</template>