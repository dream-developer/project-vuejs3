<script setup>
const code = 'GUIDE'
</script>
<template>
  <div style="border-style:dashed;">
    <slot name="guidance" :code="code">未登録(ガイダンス)</slot>
  </div>
</template>