<script setup>
defineProps(['words'])
defineEmits(['select-word']) // 1
</script>
<template>
  <!-- 2 -->
  <li v-for="word in words"
    @click="$emit('select-word', word.id, word.name)"
    >
  {{ word.id }}: {{ word.name }}
  </li>
</template>