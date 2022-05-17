<script setup>
import { reactive, toRefs } from 'vue'
const state = reactive({
  items:[ // idは一意なものにする
    { id:0, name:'要素１' },
    { id:1, name:'要素２' },
    { id:2, name:'要素３' } ] 
})
function deleteItem(){
  state.items.splice(0,1)
}
const {items} = toRefs(state)
</script>
<template>
  <!-- 用意しておいた、一意の識別ID を、key属性にバインド -->
  <template v-for="item in items" v-bind:key="item.id">
    <input type="checkbox">{{item.name}}<br>
  </template>
  <button v-on:click="deleteItem">削除</button>
</template>
