<script setup>
const photo = await fetchPhoto(true) // 3
function fetchPhoto(errFlag = false) { // 1
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if(!errFlag){ // 2
        resolve('写真');
      }else{
        reject('失敗');
      }
              
    }, 3000);
  });
}
</script>
<template>
  {{photo}}
</template>