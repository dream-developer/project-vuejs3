<script setup>
import Modal from './Modal.vue' // 1
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <!-- 4 -->
  <div id="here"></div>
  <hr>
  <input type="checkbox" v-model="show">表示する
  <!-- 3 -->
  <Teleport to="#here">
    <!-- 2 -->
    <Modal :show = show />
  </Teleport>
</template>