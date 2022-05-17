<script setup>
defineProps(['word'])
defineEmits(['click-word'])
</script>
<template>
 <p @click="$emit('click-word')" >
   {{ word }}
  </p>
</template>