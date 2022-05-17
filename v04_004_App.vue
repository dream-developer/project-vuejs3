<script setup>
import { ref } from 'vue'
const show = ref(true)
</script>
<template>
  <input type="checkbox" v-model="show">表示する
  <Transition>
    <p v-if="show">テスト</p>
  </Transition>
  <Transition name="linear">  <!-- 1 -->
    <p v-if="show">テスト( linear )</p>
  </Transition>
</template>
<style>
.v-leave-active,
.v-enter-active { transition: opacity 1s; }
.v-enter-from,
.v-leave-to { opacity: 0; }
/* 2 */
.linear-leave-active,
.linear-enter-active { transition: opacity 1s linear; }
.linear-enter-from,
.linear-leave-to { opacity: 0; }
</style>