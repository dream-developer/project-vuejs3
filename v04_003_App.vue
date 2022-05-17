<script setup>
import Notice from './Notice.vue'
</script>
<template>
  <Notice>
    <template #guidance="guidanceProps">
    お知らせです({{ guidanceProps.code }})  
    </template>
  </Notice>
</template>