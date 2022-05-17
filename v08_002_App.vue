<script setup>
import { ref, computed } from 'vue'
const zip1 = ref('123')
const zip2 = ref('4567')
const zipCode = computed({
  get() { // 1
    return zip1.value + '-' + zip2.value
  },
  set(newValue) { // 2
    [zip1.value, zip2.value] = newValue.split('-')
  }
})
</script>
<template> 
  <p>{{zipCode}}</p>
  <input v-model="zip1" size="3"> - <input v-model="zip2" size="4"><br><br>
  <input v-model="zipCode" size="8"> <!-- 3 -->
</template>