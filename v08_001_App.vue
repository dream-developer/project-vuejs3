<script setup>
import { ref, computed } from 'vue' // 1
let cheaperPrice = ref(999) // 2
const stationeries = ref([ // 3
  { id: 1, name: 'ホチキス', price: 400},
  { id: 2, name: 'コンパス', price: 300},
  { id: 3, name: 'ボールペン', price: 100},
  { id: 4, name: '筆箱', price: 500},
  { id: 5, name: '修正液', price: 200}
])
const cheaperList = computed(() => { // 4
  return stationeries.value.filter(stationary => stationary.price <= cheaperPrice.value)
})
</script>
<template>
  <input type="number" v-model.number="cheaperPrice">円以下<br>
  <template v-for="item in cheaperList" v-bind:key="item.id"> <!-- 5 -->
  {{item.name}}：{{item.price}}円<br>
  </template>
</template>