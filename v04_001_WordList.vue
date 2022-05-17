<script setup>
defineProps(['words']) // 1
</script>
<template>
  <!-- 2 -->
  <li v-for="word in words" >
  {{ word.id }}: {{ word.name }}
  </li>
</template>