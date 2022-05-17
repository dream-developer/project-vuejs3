<script setup>
defineProps(['show'])
</script>

<template>
  <div  v-if="show" style="border-style:solid;">
    モーダル
  </div>
</template>