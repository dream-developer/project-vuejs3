<template>
  <router-link to="/">Home</router-link> | 
  <router-link :to="{ name: 'About'}">About</router-link><br>
  <router-view/>
</template>
<style scoped>
.router-link-active {
  background-color:rgb(200, 220, 255);
}
</style>